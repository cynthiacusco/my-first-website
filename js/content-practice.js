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
    practiceButton.addEventListener('mouseover', function() {
        practiceButton.classList.add('highlight');
        practiceButton.textContent = 'Explore Our Products! 🚀';
    });

    practiceButton.addEventListener('mouseout', function() {
        practiceButton.classList.remove('highlight');
        practiceButton.textContent = 'Click Me';
    });

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
        menu.classList.toggle('open');
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
    if (notification && notification.classList.contains('visible')) {
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

if (openModalButton && targetModal) {
    openModalButton.addEventListener('click', function() {
        targetModal.classList.remove('hidden');
        console.log("Modal state update: Visible. 🔓");
    });
}

if (closeModalButton && targetModal) {
    closeModalButton.addEventListener('click', function() {
        targetModal.classList.add('hidden');
        console.log("Modal state update: Concealed. 🔒");
    });
}

// ==========================================
// 10. Event Handling Basics ('click' Listener)
// ==========================================
const demoButton = document.querySelector('#demo-btn');
if (demoButton) {
    demoButton.addEventListener('click', function() {
        console.log("Demo button click event was successfully handled! 🚀");
    });
}

// ==========================================
// 11. Arrow Function Interaction Practice
// ==========================================
const subHeading = document.querySelector('h2');
if (subHeading) {
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
    trackerBox.addEventListener('mousemove', function(e) {
        const xPosition = e.clientX;
        const yPosition = e.clientY;
        trackerBox.textContent = `Mouse X: ${xPosition}px | Mouse Y: ${yPosition}px`;
    });
}

// ==========================================
// 13. Dynamic Target Tracking (event.target)
// ==========================================
document.addEventListener('click', function(event) {
    const clickedElement = event.target;
    const tagNameType = event.target.tagName;
    console.log("🎯 Exact Element Interacted With:", clickedElement);
    console.log("🏷️ HTML Tag Type Name:", tagNameType);
});

// ==========================================
// 14. Keyboard Escape Window Closure Logic
// ==========================================
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modalPlaygroundWindow = document.getElementById('practice-modal');
        if (modalPlaygroundWindow && !modalPlaygroundWindow.classList.contains('hidden')) {
            modalPlaygroundWindow.classList.add('hidden');
            console.log("🔒 Pop-up box closed safely using the keyboard 'Escape' shortcut rule!");
        }
    }
});

// ==========================================
// 15. Form Elements Collection Lookup & Validation Script
// ==========================================
const profileForm = document.getElementById('practice-form');

if (profileForm) {
    profileForm.addEventListener('submit', function(event) {
        // Blocks the default browser reload loop immediately!
        event.preventDefault();
        
        console.log("🚀 Profile submit caught! Processing elements grid...");
        
        // Extract values cleanly out of the mailbox grid collection
        const emailValue = profileForm.elements['email'].value;
        const enteredFirst = profileForm.elements['first-name'].value;
        const enteredLast = profileForm.elements['last-name'].value;
        
        console.log(`👤 Extracted Data Match -> Name: ${enteredFirst} ${enteredLast} | Email: ${emailValue}`);
        
        // Validation Checks
        const isValidEmail = emailValue.includes('@');
        
        // Email Input Styling Logic
        if (isValidEmail) {
            profileForm.elements['email'].style.border = "3px solid #28a745";
            console.log("✅ Email validation passed.");
        } else {
            profileForm.elements['email'].style.border = "3px solid #dc3545";
            console.log("❌ Email validation failed: Missing '@' character symbol.");
        }
        
        // Name Field Input Styling Logic
        if (enteredFirst && enteredLast) {
            profileForm.elements['first-name'].style.border = "2px solid #28a745";
            profileForm.elements['last-name'].style.border = "2px solid #28a745";
            console.log("✅ Name registration fields validated successfully.");
        } else {
            if (!enteredFirst) profileForm.elements['first-name'].style.border = "2px solid #dc3545";
            if (!enteredLast) profileForm.elements['last-name'].style.border = "2px solid #dc3545";
            console.log("❌ Validation Error: Name values cannot be submitted blank.");
        }
    });
}
