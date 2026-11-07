console.log("Main homepage script is running perfectly!");

// Target the single 'Click Me' button on the homepage
const homeButton = document.querySelector('button');

if (homeButton) {
    homeButton.addEventListener('click', function() {
        homeButton.classList.toggle('highlight');
        console.log("Home page button clicked and toggled!");
    });
}

