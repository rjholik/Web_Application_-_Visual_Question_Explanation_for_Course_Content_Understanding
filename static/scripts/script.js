let currentWeekImages = [];
let currentIndex = 0;
let lectures = [];  // Will hold the fetched lecture data.
let isInLectureMode = false;
let transcriptData = []; // Global variable to store transcript data


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

// Define fetchAndHandleTextToSpeech function
// function fetchAndHandleTextToSpeech(textToSend) {
//     const apiUrl = 'http://127.0.0.1:5000/api/text2speech';
//     fetch(apiUrl, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ 'text': textToSend })
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));
// }
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
        // Assuming the API returns a URL or base64 encoded data for the audio
        if (data.audioUrl) {
            audioPlayer.src = data.audioUrl;
            audioPlayer.play()
                .then(() => console.log('Audio playback started or resumed.'))
                .catch(error => console.error('Error playing audio:', error));
        }
    })
    .catch(error => console.error('Error:', error));
}

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
document.getElementById('pauseButton').addEventListener('click', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    console.log('Pause button clicked');
    if (!audioPlayer.paused) {
        console.log('Pausing audio');
        audioPlayer.pause();
    } else {
        console.log('Audio was already paused');
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

// Refactor the send message logic into a function
function sendMessage(question) {
    const chatArea = document.getElementById('chatArea');

    // Create a bubble for the user's question
    const userBubble = document.createElement('div');
    userBubble.classList.add('chat-message', 'user-message');
    userBubble.textContent = question;
    chatArea.appendChild(userBubble);


    // Get the current image path
    const imagePath = currentWeekImages[currentIndex];
    // Prepare form data to send image and question
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
            modelBubble.textContent = data.answer; // Ensure your endpoint sends back a JSON with an 'answer' key
            chatArea.appendChild(modelBubble);

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

// document.getElementById('chatButton').addEventListener('click', () => {
//     const chatWindow = document.getElementById('chatWindow');
//     chatWindow.classList.toggle('open');

//     // Initialize the chat when the chat window is opened
//     if (chatWindow.classList.contains('open')) {
//         initializeChat();
//     }
// });


// document.getElementById('sendButton').addEventListener('click', () => {
//     const chatInput = document.getElementById('chatInput');
//     const question = chatInput.value.trim();

//     if (question) {
//         sendMessage(question);
//     }
// });
// Event listener for the send button
document.getElementById('sendButton').addEventListener('click', () => {
    const chatInput = document.getElementById('chatInput');
    const question = chatInput.value.trim();

    if (question) {
        sendMessage(question);
    }
});
