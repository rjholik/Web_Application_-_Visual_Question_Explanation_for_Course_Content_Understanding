let currentWeekImages = [];
let currentIndex = 0;
let lectures = [];  // Will hold the fetched lecture data.

let isInLectureMode = false;

// Function to display a lecture image
// function showLectureImage(imageSrc) {
//     const lectureImage = document.getElementById('lectureImage');
//     lectureImage.src = imageSrc;
//     lectureImage.style.display = 'block';
//     document.getElementById('defaultText').style.display = 'none';
// }
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
// function populateMenu() {
//     const menu = document.getElementById('menu');
//     lectures.forEach(lecture => {
//         const img = document.createElement('img');
//         img.src = lecture.img;
//         img.alt = lecture.name;
//         img.classList.add('menu-item');
//         img.addEventListener('click', () => {
//             fetchImagesForWeek(lecture.name.replace(' ', '_'));
//             document.getElementById('menu').classList.remove('open');
//         });
//         menu.appendChild(img);
//     });
// }
function populateMenu() {
    const menu = document.getElementById('menu');
    lectures.forEach(lecture => {
        // Create a container for each lecture item
        const lectureItem = document.createElement('div');
        lectureItem.classList.add('menu-item-container');

        // Create and append the image
        const img = document.createElement('img');
        img.src = lecture.img;
        img.alt = lecture.name;
        img.classList.add('menu-item');
        lectureItem.appendChild(img);

        // Create and append the title
        const title = document.createElement('div');
        title.textContent = lecture.name;
        title.classList.add('menu-item-title');
        lectureItem.appendChild(title);

        // Add click event to the image
        img.addEventListener('click', () => {
            fetchImagesForWeek(lecture.name.replace(' ', '_')); // Fetch images for the selected week
            document.getElementById('menu').classList.remove('open'); // Close the menu
        });

        // Append the lecture item to the menu
        menu.appendChild(lectureItem);
    });
}

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

// Event listeners for navigation buttons
// document.getElementById('prevButton').addEventListener('click', () => {
//     if (currentIndex > 0) {
//         currentIndex--;
//         showLectureImage(currentWeekImages[currentIndex]);
//     }
// });
document.getElementById('prevButton').addEventListener('click', () => {
    if (isInLectureMode && currentIndex > 0) {
        currentIndex--;
        showLectureImage(currentWeekImages[currentIndex]);
    }
});

// document.getElementById('nextButton').addEventListener('click', () => {
//     if (currentIndex < currentWeekImages.length - 1) {
//         currentIndex++;
//         showLectureImage(currentWeekImages[currentIndex]);
//     }
// });
document.getElementById('nextButton').addEventListener('click', () => {
    if (isInLectureMode && currentIndex < currentWeekImages.length - 1) {
        currentIndex++;
        showLectureImage(currentWeekImages[currentIndex]);
    }
});

// Event listener for the "Lessons" button
document.getElementById('lessonsButton').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('open');
});

// Event listener for the "Home" button
// document.getElementById('homeButton').addEventListener('click', () => {
//     document.getElementById('lectureImage').style.display = 'none';
//     document.getElementById('defaultText').style.display = 'flex';
//     document.getElementById('menu').classList.remove('open');
// });
document.getElementById('homeButton').addEventListener('click', function() {
    document.getElementById('lectureImage').style.display = 'none';
    document.getElementById('defaultText').style.display = 'flex';
    document.getElementById('menu').classList.remove('open');
    isInLectureMode = false; // Back to home mode, navigation should be disabled
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