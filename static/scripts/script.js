let currentWeekImages = [];
let currentIndex = 0;
let lectures = [];  // Will hold the fetched lecture data.
let isInLectureMode = false;
let transcriptData = []; // Global variable to store transcript data

let automaticTeacherActive = false;
let audioPlayer = document.getElementById('audioPlayer');


// Load transcript data
function loadTranscriptData() {
    fetch('/static/transcript/transcript.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Data loaded successfully');
            transcriptData = data; // Store the data in the global variable
        })
        .catch(error => {
            console.error('Error loading JSON data:', error);
        });
}

// Call the function to load data
loadTranscriptData();

function fetchAndHandleTextToSpeech(textToSend) {
    const apiUrl = 'http://127.0.0.1:5000/api/text2speech';
    const audioPlayer = document.getElementById('audioPlayer');

    fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'text': textToSend })
    })
    .then(response => response.json())
    .then(data => {
        if (data.audioUrl) {
            // Use the audio URL returned by the server to play in the browser
            audioPlayer.src = data.audioUrl;
            audioPlayer.play()
                .then(() => console.log('Audio playback started in the browser.'))
                .catch(error => console.error('Error playing audio in the browser:', error));
        }
    })
    .catch(error => console.error('Error:', error));
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
    document.getElementById('defaultText').style.display = 'none';
    var lectureImage = document.getElementById('lectureImage');
    lectureImage.src = imageSrc;
    lectureImage.style.display = 'block';
    isInLectureMode = true; // Now in lecture mode
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

// Populate the menu with the first image of each week
function populateMenu() {
    const menu = document.getElementById('menu');
    menu.innerHTML = ''; // Clear the menu first
    lectures.forEach(lecture => {
        const lectureItem = document.createElement('div');
        lectureItem.classList.add('menu-item-container');

        const img = document.createElement('img');
        img.src = lecture.img;
        img.alt = lecture.name;
        img.classList.add('menu-item');
        lectureItem.appendChild(img);

        const title = document.createElement('div');
        title.textContent = lecture.name;
        title.classList.add('menu-item-title');
        lectureItem.appendChild(title);

        // Stop the audio and load the new images when a menu item is clicked
        img.addEventListener('click', () => {
            const audioPlayer = document.getElementById('audioPlayer');
            if (!audioPlayer.paused) {
                audioPlayer.pause();
                audioPlayer.currentTime = 0;  // Reset the audio to the start
            }
            fetchImagesForWeek(lecture.name.replace(' ', '_')); // Fetch images for the selected week
            document.getElementById('menu').classList.remove('open'); // Close the menu
        });

        menu.appendChild(lectureItem);
    });
}

// Toggle the menu visibility
document.getElementById('lessonsButton').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('open');
});

// Fetch lecture data when the page loads
window.onload = function() {
    fetch('/api/lectures')
        .then(response => response.json())
        .then(data => {
            lectures = data;
            populateMenu();
        })
        .catch(error => console.error('Error loading lecture data:', error));
};

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

let currentAudioSrc = ''; // Variable to keep track of the current audio source

// Play button event listener
// Event listener for the play button
document.getElementById('playButton').addEventListener('click', () => {
    if (isInLectureMode && currentWeekImages.length > 0 && currentIndex >= 0) {
        const imagePath = currentWeekImages[currentIndex];
        const match = imagePath.match(/week_(\d+)\/week_(\d+)_page_(\d+)/);
        const weekNumber = parseInt(match[1]);
        const pageNumber = parseInt(match[3]);

        function searchByWeekAndPage(week, page) {
            return transcriptData.filter(item => item.week === week && item.page === page);
        }

        const textToSend = searchByWeekAndPage(weekNumber, pageNumber)[0]['transcript'];
        fetchAndHandleTextToSpeech(textToSend);
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

document.addEventListener('DOMContentLoaded', () => {
	const chatButton = document.getElementById('chatButton');
	const chatWindow = document.getElementById('chatWindow');

	if (!chatButton || !chatWindow) {
		console.error('Chat elements not found!');
		return;
	}

	chatButton.addEventListener('click', () => {
		console.log('Chat button clicked!');
		chatWindow.classList.toggle('open');
	});
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

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Assume login is successful if username and password are filled
    if (username && password) {
        // Hide login section
        document.getElementById('loginSection').style.display = 'none';

        // Show navigation and control buttons
        document.querySelector('.nav-buttons').style.display = 'block';
        document.querySelectorAll('.position-absolute').forEach(function(element) {
            element.style.display = 'block';
        });

        // Update the page to show logged-in state
        document.getElementById('defaultText').querySelector('p').textContent = "Welcome, " + username + "! You can now navigate through the slides.";
    } else {
        alert("Please enter both username and password.");
    }
});