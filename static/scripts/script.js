let currentWeekImages = []; // Array to store image URLs
let currentIndex = 0; // Index of the currently displayed image
let lectures = [];  // Will hold the fetched lecture data.
let isInLectureMode = false;
let transcriptData = []; // Global variable to store transcript data
let automaticTeacherActive = false;
let audioPlayer = document.getElementById('audioPlayer');
let isLoggedIn = false; // This should be globally accessible
let currentAudioSrc = ''; // Variable to keep track of the current audio source
let cachedCourses = [];  // This will hold the fetched courses data

function loadTranscriptData(courseName) {

    const transcriptUrl = `/static/courses/${courseName}/transcript.json`;
    // console.log("Attempting to load transcript data from:", transcriptUrl); // Debugging: log the URL being accessed
    
    fetch(transcriptUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}. Transcript not available for ${courseName}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(`Transcript data loaded successfully for ${courseName}`);
            transcriptData = data; // Store the data in the global variable
        })
        .catch(error => {
            console.error('Error loading transcript data:', error);
            transcriptData = []; // Reset or handle the absence of data appropriately
        });
}

// Play and handle text-to-speech
function fetchAndHandleTextToSpeech(textToSend) {
    fetch('/api/text2speech', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: textToSend })
    })
    .then(response => response.json())
    .then(data => {
        if (data.audioUrl) {
            audioPlayer.src = data.audioUrl;
            audioPlayer.play().then(() => {
                console.log('Audio playing...');
                audioPlayer.onended = () => {
                    if (automaticTeacherActive && currentIndex < currentWeekImages.length - 1) {
                        currentIndex++;
                        showLectureImage(currentWeekImages[currentIndex].img);
                        const nextText = transcriptData.find(item => item.week === currentWeekImages[currentIndex].week && item.page === currentWeekImages[currentIndex].page).transcript;
                        fetchAndHandleTextToSpeech(nextText);
                    }
                };
            }).catch(error => console.error('Error playing audio:', error));
        }
    })
    .catch(error => console.error('Error in text-to-speech API:', error));
}

document.getElementById('autoTeacherButton').addEventListener('click', () => {  
    if (!automaticTeacherActive) {
        automaticTeacherActive = true;
        console.log('Automatic teacher mode started.');
        playCurrentAndAdvance();  // Start from current slide
    } else {
        automaticTeacherActive = false;
        audioPlayer.pause();
        console.log('Automatic teacher mode stopped by user.');
    }
});

// Function to display a lecture image
function showLectureImage(imageSrc) {
    const lectureImage = document.getElementById('lectureImage');
    const menu = document.getElementById('menu'); // Get the menu element

    if (lectureImage) {
        lectureImage.src = imageSrc;
        lectureImage.style.display = 'block';  // Make sure the image is visible
        isInLectureMode = true; // Now in lecture mode

        // Close the menu when an image is shown
        if (menu.style.left === '0%' || menu.style.left === '0px') {
            menu.style.left = '-20%'; // Hide the menu
            console.log('Menu closed after selecting an image.');
        }
        
    } else {
        console.error('lectureImage element not found');
    }
}

// Function to fetch all images for a week
function fetchImagesForWeek(weekName) {
    fetch(`/get-images/${weekName}`)
        .then(response => response.json())
        .then(data => {
            currentWeekImages = data;
            currentIndex = 0;
            if (currentWeekImages.length > 0) {
                showLectureImage(currentWeekImages[currentIndex]);
            }
        })
        .catch(error => console.error('Error fetching images for week:', error));
}


function populateMenu() {
    const menu = document.getElementById('menu');
    menu.innerHTML = ''; // Clear the menu first

    // Check if the lectures array is empty and handle accordingly
    if (lectures.length === 0) {
        const noData = document.createElement('div');
        noData.textContent = "No lectures available";
        noData.classList.add('menu-item');
        menu.appendChild(noData);
        return;
    }

    // Use DocumentFragment to improve performance by minimizing reflows and repaints
    const fragment = document.createDocumentFragment();

    lectures.forEach(lecture => {
        const lectureItem = document.createElement('div');
        lectureItem.classList.add('menu-item-container');

        const img = document.createElement('img');
        img.src = lecture.img;
        img.alt = lecture.name;
        img.classList.add('menu-item');

        // Wrap the image in a button for better accessibility
        const button = document.createElement('button');
        button.classList.add('menu-item-button');
        button.appendChild(img); // The image becomes part of the button
        button.addEventListener('click', () => handleLectureSelection(lecture.name));

        lectureItem.appendChild(button);

        const title = document.createElement('div');
        title.textContent = lecture.name;
        title.classList.add('menu-item-title');
        lectureItem.appendChild(title);

        fragment.appendChild(lectureItem);
    });

    menu.appendChild(fragment);
}

function fetchCourses() {
    if (!isLoggedIn) {
        console.error('User is not logged in.');
        alert('Please log in to access courses.');
        return;
    }
    fetch('/api/courses')
        .then(response => response.json())
        .then(courses => {
            // console.log('Courses received:', courses);
            cachedCourses = courses;  // Cache the courses data here
            displayCourses(courses);
        })
        .catch(error => {
            console.error('Error loading courses:', error);
            alert('Failed to load courses: ' + error.message);
        });
}

function displayCourses(courses) {
    const menu = document.getElementById('menu');
    menu.innerHTML = ''; // Clear any existing content

    if (!courses || courses.length === 0) {
        menu.innerHTML = '<p>No courses available.</p>';
        return;
    }

    const fragment = document.createDocumentFragment(); // Use DocumentFragment to minimize reflows

    courses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.className = 'course-container';

        const img = document.createElement('img');
        img.src = course.image; // Use the image URL from the course object
        img.alt = `Image for ${course.name}`;
        img.className = 'course-image';

        const label = document.createElement('div');
        label.textContent = course.name; // Assuming 'name' is the property that contains the course name
        label.className = 'course-label';

        courseDiv.appendChild(img);
        courseDiv.appendChild(label);

        courseDiv.addEventListener('click', () => {
            console.log('Course selected:', course.name);
            fetchLecturesForCourse(course.name); // Fetch and display lectures for the selected course
        });

        fragment.appendChild(courseDiv);
    });

    menu.appendChild(fragment);
    menu.style.display = 'block'; // Ensure the menu is visible
}

function fetchLecturesForCourse(courseName) {
    const apiUrl = `/api/lectures/${encodeURIComponent(courseName)}`;
    console.log('Fetching lectures for:', courseName);

    fetch(apiUrl)
        .then(response => response.json())
        .then(lectures => {
            // console.log('Lectures:', lectures);
            displayLectures(lectures, courseName); // Call displayLectures to update the UI
            loadTranscriptData(courseName); // Load transcript data as lectures are being displayed
        })
        .catch(error => {
            console.error('Error fetching lectures:', error);
            alert('Failed to load lectures for ' + courseName + ': ' + error.message);
        });
}

function displayLectures(lectures, courseName) {
    const menu = document.getElementById('menu');
    menu.innerHTML = ''; // Clear the menu to display lectures

    // Create return arrow container
    const returnArrowContainer = document.createElement('div');
    returnArrowContainer.className = 'return-arrow-container';
    returnArrowContainer.addEventListener('click', () => {
        displayCourses(cachedCourses);  // Function to return to the courses display
    });

    const returnArrowImg = document.createElement('img');
    returnArrowImg.src = '/static/images/return_arrow.webp';
    returnArrowImg.alt = 'Return';
    returnArrowImg.className = 'return-arrow-image';

    returnArrowContainer.appendChild(returnArrowImg);
    menu.appendChild(returnArrowContainer);

    // Proceed to add lectures
    lectures.forEach(lecture => {
        const lectureDiv = document.createElement('div');
        lectureDiv.classList.add('menu-item-container');

        const img = document.createElement('img');
        img.src = lecture.img;
        img.alt = lecture.week;
        img.classList.add('menu-item-image');

        const title = document.createElement('div');
        title.textContent = lecture.week;
        title.classList.add('menu-item-title');

        // Add click event to load images from the lecture
        lectureDiv.addEventListener('click', () => {
            // Ensure courseName is passed along with the week
            loadLectureImages(courseName, lecture.week);
        });

        lectureDiv.appendChild(img);
        lectureDiv.appendChild(title);
        menu.appendChild(lectureDiv);
    });
}

// Function to fetch and display lecture images
function loadLectureImages(courseName, week) {
    const lectureImage = document.getElementById('lectureImage');
    const defaultText = document.getElementById('defaultText');

    fetch(`/api/lecture-images/${encodeURIComponent(courseName)}/${encodeURIComponent(week)}`)
        .then(response => response.json())
        .then(images => {
            if (images.length > 0) {
                currentWeekImages = images; // Store all image URLs in the global array
                currentIndex = 0; // Start with the first image
                showLectureImage(currentWeekImages[currentIndex]); // Display the first image
                defaultText.style.display = 'none'; // Hide default text
            } else {
                lectureImage.style.display = 'none'; // Hide the image if no images are found
                defaultText.style.display = 'block'; // Show default text
                defaultText.textContent = 'No images found for this lecture';
            }
        })
        .catch(error => {
            console.error('Error loading lecture images:', error);
            defaultText.style.display = 'block'; // Show default text in case of an error
            defaultText.textContent = 'Failed to load images.';
        });
    // loadLectureImages(courseName, week);    
}

function setupNavigationButtons() {
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');
    
    if (nextButton) {
        nextButton.onclick = () => {
            if (currentIndex < currentWeekImages.length - 1) {
                currentIndex++;
                showLectureImage(currentWeekImages[currentIndex]);
            }
        };
    }

    if (prevButton) {
        prevButton.onclick = () => {
            if (currentIndex > 0) {
                currentIndex--;
                showLectureImage(currentWeekImages[currentIndex]);
            }
        };
    }
}

document.querySelectorAll('.lecture-link').forEach(link => {
    link.addEventListener('click', function() {
        const courseName = this.dataset.courseName; // Make sure dataset attributes are correctly named
        const week = this.dataset.week;
        if (courseName && week) {
            console.log(`Lecture selected: Course - ${courseName}, Week - ${selectedWeek}`);
            loadLectureImages(courseName, week);
            
        } else {
            console.error('Course name or week is undefined:', courseName, week);
        }
    });
});

function displayLectureImages(images) {
    const container = document.getElementById('lectureImageContainer');
    container.innerHTML = '';  // Clear previous content

    images.forEach(imageUrl => {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.style.width = '100%';  // Adjust styling as needed
        container.appendChild(imgElement);
    });
}

// This should be tied to a user action, such as clicking on a course.
function handleCourseSelection(courseName) {
    if (!courseName) {
        console.error('No course name provided for fetching lectures.');
        return;
    }
    
    
    const apiUrl = getApiUrl(courseName);
    console.log('Attempting to fetch from URL:', apiUrl);

    // Fetch lectures for the course
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log('Data received:', data);
            if (data.length > 0) {
                showLectureImage(data[0].img);  // Continue using showLectureImage with only imageSrc
            }
            // Load transcript data as soon as the course is successfully selected
            // loadTranscriptData(courseName);
            loadTranscriptData(courseName) // Ensuring the transcript data is loaded
        })
        .catch(error => console.error('Fetch error:', error));
}


document.querySelectorAll('.course-container').forEach(container => {
    container.addEventListener('click', () => {
        const courseName = container.querySelector('.course-label').textContent; // Ensure this selector correctly points to the element containing the course name
        console.log('Course selected:', courseName); // Check what is being captured as the course name

        if (courseName) {
            const apiUrl = getApiUrl(courseName);
            console.log('API URL:', apiUrl);

            // Continue with fetching lectures or handling data
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    console.log('Lectures loaded:', data);
                    // Display lectures function here
                })
                .catch(error => console.error('Error fetching lectures:', error));
        } else {
            console.error('No course name provided');
        }
    });
});

document.querySelectorAll('.course-item').forEach(item => {
    item.addEventListener('click', function() {
        const courseId = this.dataset.courseId;
        console.log('Requesting lectures for course:', courseId);  // Debug log
        fetch(`/api/lectures/${courseId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load course data');
                }
                return response.json();
            })
            .then(data => {
                console.log('Lectures loaded:', data);  // Debug log
                // Code to display lectures
            })
            .catch(error => {
                console.error('Error loading lecture data:', error);
            });
    });
});

// Function to stop and reset the audio
function stopAndResetAudio() {
    const audioPlayer = document.getElementById('audioPlayer');
    if (!audioPlayer.paused) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0; // Reset the audio to the start
        console.log('Audio playback stopped and reset.');
    }
}

// Function to handle common actions for navigation button clicks
function handleNavigationButtonClick() {
    stopAndResetAudio();
    document.getElementById('menu').classList.remove('open');
}

// Event listener for the "Lessons" button
document.getElementById('homeButton').addEventListener('click', function() {
    stopAndResetAudio(); // Stop the audio when going back to the home screen
    document.getElementById('lectureImage').style.display = 'none';
    document.getElementById('defaultText').style.display = 'flex';
    document.getElementById('menu').classList.remove('open');
    isInLectureMode = false;
});

document.getElementById('fullscreenButton').addEventListener('click', () => {
    if (!document.fullscreenElement) {
        // Enter fullscreen
        document.documentElement.requestFullscreen().then(() => {
            // Change icon to indicate exit fullscreen mode
            document.getElementById('fullscreenButton').innerHTML = '<i class="fas fa-compress"></i>';
        }).catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        // Exit fullscreen
        document.exitFullscreen().then(() => {
            // Change icon to indicate enter fullscreen mode
            document.getElementById('fullscreenButton').innerHTML = '<i class="fas fa-expand"></i>';
        }).catch(err => {
            console.error(`Error attempting to disable full-screen mode: ${err.message} (${err.name})`);
        });
    }
});

// Event listeners for navigation buttons
document.getElementById('prevButton').addEventListener('click', () => {
    if (isInLectureMode && currentIndex > 0) {
        handleNavigationButtonClick();
        currentIndex--;
        showLectureImage(currentWeekImages[currentIndex]);
    }
});


document.getElementById('nextButton').addEventListener('click', () => {
    if (isInLectureMode && currentIndex < currentWeekImages.length - 1) {
        handleNavigationButtonClick();
        currentIndex++;
        showLectureImage(currentWeekImages[currentIndex]);
    }
});

document.getElementById('firstButton').addEventListener('click', () => {
    if (isInLectureMode && currentWeekImages.length > 0) {
        handleNavigationButtonClick();
        currentIndex = 0;
        showLectureImage(currentWeekImages[currentIndex]);
    }
});

document.getElementById('lastButton').addEventListener('click', () => {
    if (isInLectureMode && currentWeekImages.length > 0) {
        handleNavigationButtonClick();
        currentIndex = currentWeekImages.length - 1;
        showLectureImage(currentWeekImages[currentIndex]);
    }
});

function navigateImages(direction) {
    console.log(`Navigating ${direction}`);
    switch (direction) {
        case 'next':
            if (currentIndex < currentWeekImages.length - 1) {
                currentIndex++;
            }
            break;
        case 'prev':
            if (currentIndex > 0) {
                currentIndex--;
            }
            break;
        case 'first':
            currentIndex = 0;
            break;
        case 'last':
            currentIndex = currentWeekImages.length - 1;
            break;
    }
    showLectureImage(currentWeekImages[currentIndex]);
}


// Play button event listener
// Event listener for the play button
document.getElementById('playButton').addEventListener('click', () => {
    console.log("playButton cliked");

    if (isInLectureMode && currentWeekImages.length > 0 && currentIndex >= 0) {
        const imagePath = currentWeekImages[currentIndex];
        // console.log("Current image path:", imagePath);  // Debugging: log the current image path

        const match = imagePath.match(/week_(\d+)\/week_(\d+)_page_(\d+)/);
        if (!match) {
            console.error('Failed to extract week and page numbers from imagePath:', imagePath);
            return; // Exit the function if the match fails
        }

        const weekNumber = parseInt(match[1]);
        const pageNumber = parseInt(match[3]);
        // console.log(`Extracted week number: ${weekNumber}, page number: ${pageNumber}`);  // Debugging: log the extracted week and page numbers

        // console.log(`Transcript Data:`, transcriptData); // Log the entire transcript data to check its structure and contents

        function searchByWeekAndPage(week, page) {
            const results = transcriptData.filter(item => item.week === week && item.page === page);
            // console.log(`Search results for week ${week}, page ${page}:`, results);  // Debugging: log the search results
            return results;
        }

        // const textToSend = searchByWeekAndPage(weekNumber, pageNumber)[0]['transcript'];
        const searchResults = searchByWeekAndPage(weekNumber, pageNumber);
        if (searchResults.length === 0) {
            console.error('No transcript data found for the given week and page');
            return; // Exit the function if no results found
        }

        const textToSend = searchResults[0]['transcript'];
        if (textToSend) {
            // console.log('Sending text to speech:', textToSend);  // Debugging: log the text being sent
            fetchAndHandleTextToSpeech(textToSend);
        } else {
            console.error('Transcript is undefined for the current selection');
        }

        // fetchAndHandleTextToSpeech(textToSend);
    } else {
        console.log('No audio file associated with the current image or not in lecture mode.');
    }
});

// Pause button event listener
// Pause/Play toggle button event listener
document.getElementById('pauseButton').addEventListener('click', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    if (!audioPlayer.paused) {
        // If the audio is playing, pause it
        console.log('Pausing audio');
        audioPlayer.pause();
    } else {
        // If the audio is paused, resume playing it
        console.log('Resuming audio');
        audioPlayer.play();
    }
});

// Stop button event listener
document.getElementById('stopButton').addEventListener('click', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    console.log('Stop button clicked');
    if (!audioPlayer.paused || audioPlayer.currentTime > 0) {
        console.log('Stopping audio');
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    } else {
        console.log('Audio was not playing');
    }
});

document.getElementById('homeButton').addEventListener('click', () => {
    // Hide chat window when the home button is clicked
    document.getElementById('chatWindow').classList.remove('open');
    // Additional home button functionalities...
});

document.getElementById('chatInput').addEventListener('keydown', (event) => {
    // Check if Enter key is pressed without the Shift key
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault(); // Prevent the default action to avoid a newline in the textarea
        const chatInput = document.getElementById('chatInput');
        const question = chatInput.value.trim();

        if (question) {
            // Trigger the same logic as the send button click
            sendMessage(question);
        }
    }
});

function sendMessage(question) {
    const chatArea = document.getElementById('chatArea');

    if (!isInLectureMode) {
        // Display a message that a slide needs to be selected first
        const warningBubble = document.createElement('div');
        warningBubble.classList.add('chat-message', 'model-message');
        warningBubble.textContent = "Please select a slide to start chatting.";
        chatArea.insertBefore(warningBubble, chatArea.firstChild); // Insert at the beginning
        return; // Exit the function to avoid further processing
    }

    // Create a bubble for the user's question
    const userBubble = document.createElement('div');
    userBubble.classList.add('chat-message', 'user-message');
    userBubble.textContent = question;
    chatArea.insertBefore(userBubble, chatArea.firstChild); // Insert at the beginning

    // Get the current image path
    const imagePath = currentWeekImages[currentIndex];
    const formData = new FormData();

    // Fetch the image and create a blob, then append it to the form data
    fetch(imagePath)
    .then(response => response.blob())
    .then(blob => {
        formData.append('image', blob, imagePath.split('/').pop());
        formData.append('question', question);

        // Post the form data to your API endpoint
        fetch('/api/vqa', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Create a bubble for the model's answer
            const modelBubble = document.createElement('div');
            modelBubble.classList.add('chat-message', 'model-message');
            modelBubble.textContent = data.answer; // Use the actual response
            chatArea.insertBefore(modelBubble, chatArea.firstChild); // Insert at the beginning

            // Auto-scroll to the latest message
            chatArea.scrollTop = chatArea.scrollHeight;
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle errors, e.g., show an error message in the chat
        });
    });

    // Clear the input field
    chatInput.value = '';
}


function initializeChat() {
    const chatArea = document.getElementById('chatArea');

    // Check if the chatArea is empty before adding the initial message
    if (!chatArea.hasChildNodes()) {
        // Create a bubble for the model's initial message
        const modelBubble = document.createElement('div');
        modelBubble.classList.add('chat-message', 'model-message');
        modelBubble.textContent = "I'm here to support you! If you have any questions or need assistance, feel free to ask.";
        chatArea.appendChild(modelBubble);

        // Ensure the initial message scrolls to the bottom
        chatArea.scrollTop = chatArea.scrollHeight;
    }
}

// Event listener for the send button
document.getElementById('sendButton').addEventListener('click', () => {
    const chatInput = document.getElementById('chatInput');
    const question = chatInput.value.trim();

    if (question) {
        sendMessage(question);
    }
});

document.getElementById('micButton').addEventListener('click', () => {
    // Implement speech-to-text functionality
    console.log('Microphone button clicked!');
});


if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = 'en-US';
    recognition.continuous = false; // Consider changing to true if you want to capture more than one phrase
    recognition.interimResults = false; // Keep false to only handle the final result

    recognition.onstart = function() {
        console.log("Speech recognition started.");
    };

    recognition.onresult = function(event) {
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                finalTranscript += event.results[i][0].transcript;
            }
        }

        console.log("Final transcript: " + finalTranscript);
        if (finalTranscript.trim().length > 0) {
            document.getElementById('chatInput').value = finalTranscript;
        }
    };

    recognition.onerror = function(event) {
        console.error("Speech recognition error", event.error);
    };

    recognition.onend = function() {
        console.log("Speech recognition ended.");
    };

    document.getElementById('micButton').addEventListener('click', () => {
        console.log('Microphone button clicked');
        recognition.start();
    });
} else {
    console.error("Speech recognition not supported in this browser.");
    document.getElementById('micButton').disabled = true;
}

function playCurrentAndAdvance() {
    if (currentIndex < currentWeekImages.length && isInLectureMode && automaticTeacherActive) {
        const imagePath = currentWeekImages[currentIndex];
        const match = imagePath.match(/week_(\d+)\/week_(\d+)_page_(\d+)/);
        const weekNumber = parseInt(match[1]);
        const pageNumber = parseInt(match[3]);
        const textToSend = transcriptData.find(item => item.week === weekNumber && item.page === pageNumber)['transcript'];

        fetch('http://127.0.0.1:5000/api/text2speech', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'text': textToSend })
        })
        .then(response => response.json())
        .then(data => {
            if (data.audioUrl && automaticTeacherActive) {
                audioPlayer.src = data.audioUrl;
                audioPlayer.play().then(() => {
                    audioPlayer.onended = () => {
                        if (currentIndex < currentWeekImages.length - 1 && automaticTeacherActive) {
                            currentIndex++;
                            showLectureImage(currentWeekImages[currentIndex]);
                            playCurrentAndAdvance();
                        } else {
                            automaticTeacherActive = false;
                            console.log('Finished all slides or stopped.');
                        }
                    };
                }).catch(error => console.error('Error playing audio:', error));
            }
        })
        .catch(error => console.error('Error:', error));
    } else {
        automaticTeacherActive = false; // Ensure to reset the flag if conditions are not met
    }
}


// Assuming some dynamic part comes from a function or condition
// Function to get API URL using course name
function getApiUrl(courseName) {
    if (!courseName) {
        console.error('Course name is not provided!');
        return null;
    }
    const encodedCourseName = encodeURIComponent(courseName);
    return `http://127.0.0.1:5000/api/lectures/${encodedCourseName}`;
}

document.getElementById('lessonsButton').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    if (menu.style.left === '0%' || menu.style.left === '0px') {
        menu.style.left = '-20%'; // Hide the menu
        console.log('Menu closed');
    } else {
        menu.style.left = '0'; // Show the menu
        console.log('Menu opened');
        fetchCourses(); // Fetch and display courses if the menu is being opened
    }
});

document.querySelectorAll('.course-container').forEach(container => {
    container.addEventListener('click', () => {
        const courseName = container.querySelector('.course-label').textContent; // Assuming the course name is stored in the textContent of a label
        const apiUrl = getApiUrl(courseName);
        console.log('Fetching lectures for course:', apiUrl);


        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log('Lectures loaded:', data);
                // Function to display lectures here
            })
            .catch(error => console.error('Error fetching lectures:', error));
    });
});

document.getElementById('chatButton').addEventListener('click', function() {
    console.log('Chat button clicked');
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.classList.toggle('open');
    // console.log('Chat window visibility toggled, classList:', chatWindow.classList);
});


// Function to update login status
function updateLoginStatus(status) {
    isLoggedIn = status;
    console.log('Login status updated to:', isLoggedIn);
    if (isLoggedIn) {
        showPostLoginUI();  // This will handle showing UI elements such as courses
    }
}

function handleLoginSuccess(data) {
    console.log('Logged in:', data);
    updateLoginStatus(true);
    
    // Display the admin button for all logged-in users
    document.getElementById('adminButton').style.display = 'inline-block'; // Show the admin button
}


// Event listener for login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to log in: ${response.status} ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.status === 'Logged in successfully') {
            handleLoginSuccess(data);
        } else {
            alert('Login failed: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Login error:', error);
        alert('Login error: ' + error.message);
    });
});

// Display courses in the UI
function displayCourses(courses) {
    const menu = document.getElementById('menu');
    menu.innerHTML = ''; // Clear any existing content

    if (courses.length === 0) {
        menu.innerHTML = '<p>No courses available.</p>';
        return;
    }

    const fragment = document.createDocumentFragment(); // Use DocumentFragment to minimize reflows

    courses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.className = 'course-container';

        const img = document.createElement('img');
        img.src = course.image; // Use the image URL from the course object
        img.alt = `Image for ${course.name}`;
        img.className = 'course-image';

        const label = document.createElement('div');
        label.textContent = course.name; // Assuming 'name' is the property that contains the course name
        label.className = 'course-label';

        courseDiv.appendChild(img);
        courseDiv.appendChild(label);

        courseDiv.addEventListener('click', () => {
            console.log('Course selected:', course.name);
            fetchLecturesForCourse(course.name); // Fetch and display lectures for the selected course
        });

        fragment.appendChild(courseDiv);
    });

    menu.appendChild(fragment);
    menu.style.display = 'block'; // Ensure the menu is visible
}

// Initial UI setup function, hiding elements until login
function showPostLoginUI() {
    document.getElementById('loginSection').style.display = 'none';
    document.querySelector('.nav-buttons').style.display = 'block';
    document.querySelectorAll('.position-absolute').forEach(element => {
        element.style.display = 'block';
    });
}

document.getElementById('adminButton').addEventListener('click', function() {
    window.open('/user_administration', '_blank'); // Opens in a new tab
});

document.addEventListener('DOMContentLoaded', function () {
    // Check if user is logged in and necessary variables are defined
    if (typeof isLoggedIn !== 'undefined' && isLoggedIn && typeof defaultCourseName !== 'undefined' && typeof defaultWeek !== 'undefined') {
        console.log('DOM fully loaded and parsed');
        setupEventListeners();
        console.log('Checking for lectureImagesContainer:', document.getElementById('lecture-images-container'));
        loadLectureImages(defaultCourseName, defaultWeek);
        // loadLectureImages('AIM 5005 Machine Learning', 'week_01');
    }
});