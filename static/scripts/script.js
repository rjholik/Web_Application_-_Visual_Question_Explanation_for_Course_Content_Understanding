let currentWeekImages = [];
let currentIndex = 0;
let lectures = [];  // Will hold the fetched lecture data.

let isInLectureMode = false;

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
document.getElementById('playButton').addEventListener('click', () => {
    if (isInLectureMode && currentWeekImages.length > 0 && currentIndex >= 0) {
        const audioPlayer = document.getElementById('audioPlayer');
        const imagePath = currentWeekImages[currentIndex];
        const match = imagePath.match(/week_(\d+)\/week_(\d+)_page_(\d+)/);
        const weekNumber = match[1];
        const pageNumber = match[3];
        const newAudioSrc = `./static/audio/lectures/week_${weekNumber}/week_${weekNumber}_page_${pageNumber}.mp3`;

        // Set the source only if it's different or if there's no source yet
        if (currentAudioSrc !== newAudioSrc) {
            audioPlayer.src = newAudioSrc;
            currentAudioSrc = newAudioSrc; // Update the current audio source tracker
        }

        // Play or resume the audio
        if (audioPlayer.paused || audioPlayer.ended) {
            audioPlayer.play()
                .then(() => console.log('Audio playback started or resumed.'))
                .catch(error => console.error('Error playing audio:', error));
        }
    } else {
        console.log('No audio file associated with the current image or not in lecture mode.');
    }
});

// Pause button event listener
document.getElementById('pauseButton').addEventListener('click', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.pause();
    console.log('Audio playback paused.');
});

// Stop button event listener
document.getElementById('stopButton').addEventListener('click', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.pause();
    audioPlayer.currentTime = 0; // Reset the audio to the start
    console.log('Audio playback stopped and reset.');
});