console.log("Practice Page Sandbox active!");

// ==========================================
// 1. Plain Text Changes (textContent)
// ==========================================
const heading = document.getElementById('title');
if (heading) {
  heading.textContent = 'Updated Title';
}

const message = document.getElementById('message');
if (message) {
  message.textContent = 'This message was changed by JavaScript.';
}

// ==========================================
// 2. Structural HTML Generation (innerHTML)
// ==========================================
const newsSection = document.getElementById('news');
if (newsSection) {
  newsSection.innerHTML = `
    <h2>Latest Updates</h2>
    <p>Check back soon for news.</p>`;
}

// ==========================================
// 3. Image & Button Attribute Updates
// ==========================================
const image = document.getElementById('photo');
if (image) {
    image.setAttribute('alt', 'A playful kitten');
    image.setAttribute('title', 'Hover text updated by JavaScript!');
}

const actionButton = document.getElementById('action-btn');
if (actionButton) {
    actionButton.dataset.target = 'form2';
}

// ==========================================
// 4. Unified Button Interactions (Hover & Click)
// ==========================================
const practiceButton = document.getElementById('practice-btn');

if (practiceButton) {
    // Action A: Hovering Over
    practiceButton.addEventListener('mouseover', function() {
        practiceButton.classList.add('highlight');
        practiceButton.textContent = 'Explore Our Products! 🚀';
    });

    // Action B: Hovering Away
    practiceButton.addEventListener('mouseout', function() {
        practiceButton.classList.remove('highlight');
        practiceButton.textContent = 'Click Me';
    });

    // Action C: Clicking (Your decision logic using .contains)
    practiceButton.addEventListener('click', function() {
        practiceButton.classList.toggle('highlight');
        
        if (practiceButton.classList.contains('highlight')) {
            console.log("The button is now highlighted yellow! 🌟");
        } else {
            console.log("The button is back to its normal state. ⚪");
        }
    });
}

// ==========================================
// 5. Interactive Menu Drawer Switcher
// ==========================================
const menuToggleButton = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

if (menuToggleButton && menu) {
    menuToggleButton.addEventListener('click', function() {
        // 1. First, flip the 'open' class label on or off!
        menu.classList.toggle('open');
        
        // 2. NOW check the state immediately after the flip
        if (menu.classList.contains('open')) {
            console.log('Menu is open! 🔓');
        } else {
            console.log('Menu is closed. 🔒');
        }
    });
}

// ==========================================
// 6. Notification Dismissal Logic
// ==========================================
const notification = document.querySelector('.notification');
const closeButton = document.querySelector('.close-btn');

function dismissNotification() {
    if (notification.classList.contains('visible')) {
        notification.classList.remove('visible');
        notification.classList.add('dismissed');
        console.log("Notification element has been safely dismissed! ❌");
    }
}

if (closeButton && notification) {
    closeButton.addEventListener('click', dismissNotification);
}

// ==========================================
// 7. Strategy A: Fixed State Class Switching
// ==========================================
const submitButton = document.querySelector('.button');

if (submitButton) {
    submitButton.addEventListener('click', function() {
        submitButton.classList.toggle('loading');
        
        if (submitButton.classList.contains('loading')) {
            console.log("State set: Loading... Processing task.");
        } else {
            console.log("State set: Normal. Task complete.");
        }
    });
}

// ==========================================
// 8. Strategy B: Live Runtime Inline Style Calculator
// ==========================================
const tooltip = document.querySelector('.tooltip');
const trackingSection = tooltip ? tooltip.parentElement : null;

if (tooltip && trackingSection) {
    trackingSection.addEventListener('mouseenter', function() {
        tooltip.style.display = 'block';
    });

    trackingSection.addEventListener('mousemove', function(event) {
        const bounds = trackingSection.getBoundingClientRect();
        const mouseX = event.clientX - bounds.left;
        const mouseY = event.clientY - bounds.top;

        // Calculate and inject raw numeric strings directly as inline styles
        tooltip.style.left = (mouseX + 15) + 'px'; 
        tooltip.style.top = (mouseY + 15) + 'px';
    });

    trackingSection.addEventListener('mouseleave', function() {
        tooltip.style.display = 'none';
    });
}
// ==========================================
// 9. Modal Window Fade Controller (Show & Hide)
// ==========================================
const targetModal = document.getElementById('practice-modal');
const openModalButton = document.getElementById('open-modal-btn');
const closeModalButton = document.getElementById('close-modal-btn');

// Safe activation functions using classList manipulation
function revealModal() {
    if (targetModal) {
        targetModal.classList.remove('hidden');
        console.log("Modal state update: Visible. 🔓");
    }
}

function concealModal() {
    if (targetModal) {
        targetModal.classList.add('hidden');
        console.log("Modal state update: Concealed. 🔒");
    }
}

// Connect listeners to their corresponding buttons
if (openModalButton && targetModal) {
    openModalButton.addEventListener('click', revealModal);
}

if (closeModalButton && targetModal) {
    closeModalButton.addEventListener('click', concealModal);
}
// ==========================================
// 10. Event Handling Basics ('click' Listener)
// ==========================================

// 1. Select the button with its unique ID tag
const demoButton = document.querySelector('#demo-btn');

// 2. Add an event listener that watches for a 'click'
if (demoButton) {
    demoButton.addEventListener('click', function() {
        // 3. Use console.log() to display a live message on your dashboard!
        console.log("Demo button click event was successfully handled! 🚀");
    });
}
// ==========================================
// 11. Arrow Function Interaction Practice
// ==========================================
const subHeading = document.querySelector('h2');

if (subHeading) {
    // Look how short this is! () => replaces function()
    subHeading.addEventListener('click', () => {
        subHeading.style.color = 'darkorange';
        console.log("Subheading click handled smoothly using a shorthand arrow function! 🏹");
    });
}
// ==========================================
// 12. Live Mouse Coordinates via Event Object
// ==========================================
const trackerBox = document.getElementById('tracker-box');

if (trackerBox) {
    // We catch the data package inside the parentheses using the letter 'e'
    trackerBox.addEventListener('mousemove', function(e) {
        // We pull the live X and Y pixel positions out of the 'e' object package
        const xPosition = e.clientX;
        const yPosition = e.clientY;
        
        // Update the plain words inside the box to show the numbers live!
        trackerBox.textContent = `Mouse X: ${xPosition}px | Mouse Y: ${yPosition}px`;
    });
}
// ==========================================
// 13. Dynamic Target Tracking (event.target)
// ==========================================
document.addEventListener('click', function(event) {
    // 1. Grab the exact HTML element tag that was clicked
    const clickedElement = event.target;
    
    // 2. Grab its official tag type name (like BUTTON, P, or H2)
    const tagNameType = event.target.tagName;
    
    console.log("🎯 Exact Element Interacted With:", clickedElement);
    console.log("🏷️ HTML Tag Type Name:", tagNameType);
});

// ==========================================
// 14. Keyboard Escape Window Closure Logic
// ==========================================
document.addEventListener('keydown', function(event) {
    // Check if the physical key string matches 'Escape' exactly
    if (event.key === 'Escape') {
        const modalPlaygroundWindow = document.getElementById('practice-modal');
        
        if (modalPlaygroundWindow && !modalPlaygroundWindow.classList.contains('hidden')) {
            modalPlaygroundWindow.classList.add('hidden');
            console.log("🔒 Pop-up box closed safely using the keyboard 'Escape' shortcut rule!");
        }
    }
});
