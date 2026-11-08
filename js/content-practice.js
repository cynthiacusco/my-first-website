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
// 15. Advanced Checklist Form Validation Script
// ==========================================
const profileForm = document.getElementById('practice-form');

// Our reusable checklist inspector function
function validateSandboxForm() {
    const emailValue = profileForm.elements['email'].value;
    const firstNameValue = profileForm.elements['first-name'].value;
    const lastNameValue = profileForm.elements['last-name'].value;
    const passwordValue = profileForm.elements['password'].value;
    const confirmPasswordValue = profileForm.elements['confirm-password'].value;

    // Rule 1: Check if Name fields are empty (using .trim())
    if (firstNameValue.trim() === '' || lastNameValue.trim() === '') {
        return { valid: false, message: 'First name and last name are strictly required!' };
    }

    // Rule 2: Check if email is empty
    if (emailValue.trim() === '') {
        return { valid: false, message: 'Email address cannot be submitted empty!' };
    }

    // Rule 3: Check if email has the @ symbol format
    if (!emailValue.includes('@')) {
        return { valid: false, message: 'Please enter a valid email address containing an @ symbol.' };
    }

    // Rule 4: Enforce minimum length on password
    if (passwordValue.length < 8) {
        return { valid: false, message: 'Security check failed: Password must be at least 8 characters long.' };
    }

    // Rule 5: Compare password values to ensure they match
    if (passwordValue !== confirmPasswordValue) {
        return { valid: false, message: 'Verification error: Passwords do not match!' };
    }

    // Success: If it passes all if statements, return true!
    return { valid: true, message: 'All checks passed successfully! 🚀' };
}

// Attach the inspector execution to our submit action
if (profileForm) {
    profileForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Freeze the default reload shield
        
        console.log("🚀 Running security checklist...");
        
        // Run our checklist function and store the object status package
        const resultPackage = validateSandboxForm();
        
        if (resultPackage.valid === false) {
            console.log("❌ INSPECTION FAILED: " + resultPackage.message);
        } else {
            console.log("✅ INSPECTION PASSED: " + resultPackage.message);
        }
    });
}
// ==========================================
// 16. Show & Hide UI Toggle Pattern
// ==========================================
const revealButton = document.getElementById('reveal');
const tipParagraph = document.getElementById('tip');

if (revealButton && tipParagraph) {
    revealButton.addEventListener('click', function() {
        // ONE LINE ENGINE: Flips the hidden layout rule on and off!
        tipParagraph.classList.toggle('hidden');
        
        // Dynamically update the button label text to match what is on screen
        if (tipParagraph.classList.contains('hidden')) {
            revealButton.textContent = "Show Tip";
        } else {
            revealButton.textContent = "Hide Tip";
        }
    });
}
// ==========================================
// 17. Accordion Control Management System
// ==========================================

// 1. Select all matching nodes on the page using querySelectorAll
const accordionHeaders = document.querySelectorAll('.accordion-header');
const accordionItems = document.querySelectorAll('.accordion-item');

if (accordionHeaders.length >= 2 && accordionItems.length >= 2) {
    // 2. Extract item elements explicitly out of their index lists
    const header1 = accordionHeaders[0];
    const header2 = accordionHeaders[1];
    
    const item1 = accordionItems[0];
    const item2 = accordionItems[1];

    // Trigger Path A: Clicked Header 1
    header1.addEventListener('click', function() {
        const isItem1Active = item1.classList.contains('active');

        // Close all running panels to start fresh
        item1.classList.remove('active');
        item2.classList.remove('active');

        // Open this panel only if it was previously closed
        if (!isItem1Active) {
            item1.classList.add('active');
            console.log("🪗 Accordion Slot 1 expanded successfully.");
        } else {
            console.log("🪗 Accordion Slot 1 collapsed safely.");
        }
    });

    // Trigger Path B: Clicked Header 2
    header2.addEventListener('click', function() {
        const isItem2Active = item2.classList.contains('active');

        // Close all running panels to start fresh
        item1.classList.remove('active');
        item2.classList.remove('active');

        // Open this panel only if it was previously closed
        if (!isItem2Active) {
            item2.classList.add('active');
            console.log("🪗 Accordion Slot 2 expanded successfully.");
        } else {
            console.log("🪗 Accordion Slot 2 collapsed safely.");
        }
    });
}
