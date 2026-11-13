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

function validateSandboxForm() {
    const emailValue = profileForm.elements['email'].value;
    const firstNameValue = profileForm.elements['first-name'].value;
    const lastNameValue = profileForm.elements['last-name'].value;
    const passwordValue = profileForm.elements['password'].value;
    const confirmPasswordValue = profileForm.elements['confirm-password'].value;

    if (firstNameValue.trim() === '' || lastNameValue.trim() === '') {
        return { valid: false, message: 'First name and last name are strictly required!' };
    }

    if (emailValue.trim() === '') {
        return { valid: false, message: 'Email address cannot be submitted empty!' };
    }

    if (!emailValue.includes('@')) {
        return { valid: false, message: 'Please enter a valid email address containing an @ symbol.' };
    }

    if (passwordValue.length < 8) {
        return { valid: false, message: 'Security check failed: Password must be at least 8 characters long.' };
    }

    if (passwordValue !== confirmPasswordValue) {
        return { valid: false, message: 'Verification error: Passwords do not match!' };
    }

    return { valid: true, message: 'All checks passed successfully! 🚀' };
}

if (profileForm) {
    profileForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        console.log("🚀 Running security checklist...");
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
        tipParagraph.classList.toggle('hidden');
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
const accordionHeaders = document.querySelectorAll('.accordion-header');
const accordionItems = document.querySelectorAll('.accordion-item');

if (accordionHeaders.length >= 2 && accordionItems.length >= 2) {
    const header1 = accordionHeaders[0];
    const header2 = accordionHeaders[1];
    const item1 = accordionItems[0];
    const item2 = accordionItems[1];

    header1.addEventListener('click', function() {
        const isItem1Active = item1.classList.contains('active');
        item1.classList.remove('active');
        item2.classList.remove('active');

        if (!isItem1Active) {
            item1.classList.add('active');
            console.log("🪗 Accordion Slot 1 expanded successfully.");
        } else {
            console.log("🪗 Accordion Slot 1 collapsed safely.");
        }
    });

    header2.addEventListener('click', function() {
        const isItem2Active = item2.classList.contains('active');
        item1.classList.remove('active');
        item2.classList.remove('active');

        if (!isItem2Active) {
            item2.classList.add('active');
            console.log("🪗 Accordion Slot 2 expanded successfully.");
        } else {
            console.log("🪗 Accordion Slot 2 collapsed safely.");
        }
    });
}

// ==========================================
// 18. Tab Content Swapper System Logic
// ==========================================
const btnHTML = document.querySelector('[data-tab="html"]');
const btnCSS = document.querySelector('[data-tab="css"]');
const btnJS = document.querySelector('[data-tab="js"]');

const panelHTML = document.getElementById('html');
const panelCSS = document.getElementById('css');
const panelJS = document.getElementById('js');

function clearTabs() {
    if (btnHTML && btnCSS && btnJS && panelHTML && panelCSS && panelJS) {
        btnHTML.classList.remove('active');
        btnCSS.classList.remove('active');
        btnJS.classList.remove('active');

        panelHTML.classList.remove('active');
        panelCSS.classList.remove('active');
        panelJS.classList.remove('active');
    }
}

if (btnHTML && btnCSS && btnJS) {
    btnHTML.addEventListener('click', function() {
        clearTabs();
        btnHTML.classList.add('active');
        panelHTML.classList.add('active');
        console.log("🗂️ View Switched -> HTML Tab Panel Active.");
    });

    btnCSS.addEventListener('click', function() {
        clearTabs();
        btnCSS.classList.add('active');
        panelCSS.classList.add('active');
        console.log("🗂️ View Switched -> CSS Tab Panel Active.");
    });

    btnJS.addEventListener('click', function() {
        clearTabs();
        btnJS.classList.add('active');
        panelJS.classList.add('active');
        console.log("🗂️ View Switched -> JavaScript Tab Panel Active.");
    });
}

// ==========================================
// 22. Persistent Shopping Cart Storage (Upgraded List Edition)
// ==========================================
const addItemButton = document.getElementById('add-item-btn');
const clearCartButton = document.getElementById('clear-cart-btn');
const cartDisplayParagraph = document.getElementById('cart-display');

const rawStoredCartData = localStorage.getItem("cart");
let cartArrayMemory = [];

if (rawStoredCartData !== null) {
    cartArrayMemory = JSON.parse(rawStoredCartData);
}

function displayCurrentCartText() {
    if (cartDisplayParagraph) {
        if (cartArrayMemory.length === 0) {
            cartDisplayParagraph.textContent = "Cart is empty.";
        } else {
            let humanReadableText = "";
            
            cartArrayMemory.forEach(function(item, index) {
                const itemNumber = index + 1;
                humanReadableText += `${itemNumber}. ${item.name} — $${item.price} (Added at ${item.timestamp})\n`;
            });
            
            cartDisplayParagraph.innerText = humanReadableText;
        }
    }
}

displayCurrentCartText();

if (addItemButton) {
    addItemButton.addEventListener('click', function() {
        const mockProductItem = {
            name: "T-Shirt",
            price: 24.99,
            timestamp: new Date().toLocaleTimeString()
        };
        
        cartArrayMemory.push(mockProductItem);
        localStorage.setItem("cart", JSON.stringify(cartArrayMemory));
        displayCurrentCartText();
    });
}

if (clearCartButton) {
    clearCartButton.addEventListener('click', function() {
        localStorage.removeItem("cart");
        cartArrayMemory = [];
        displayCurrentCartText();
    });
}
// ==========================================
// 23. Data-Driven Template Function (Conditional Rendering)
// ==========================================
const productList = [
    { name: "Wireless Keyboard", price: 49.99, inStock: true },
    { name: "Ergonomic Mouse", price: 29.99, inStock: false },
    { name: "USB-C Hub", price: 34.50, inStock: true }
];

function createProductHTML(product) {
    // Calculate the text and color before returning the HTML
    const stockText = product.inStock ? "✅ In Stock" : "❌ Out of Stock";
    const stockColor = product.inStock ? "#28a745" : "#dc3545";

    return `
        <div style="background-color: #FFFFFF; padding: 16px; border-radius: 8px; border: 1px solid #E9E4D5; margin-bottom: 12px;">
            <h3 style="margin-top: 0;">${product.name}</h3>
            <p style="margin-bottom: 8px; font-weight: bold; color: #0bc4a3;">Price: $${product.price.toFixed(2)}</p>
            <p style="margin: 0; font-weight: bold; color: ${stockColor};">${stockText}</p>
        </div>
    `;
}

const showcaseContainer = document.getElementById('product-showcase');
if (showcaseContainer) {
    const allCardsHTML = productList.map(item => createProductHTML(item)).join("");
    showcaseContainer.innerHTML = allCardsHTML;
}
// ==========================================
// 24. Persistent Dark/Light Theme Switcher
// ==========================================
const themeToggle = document.getElementById('theme-toggle');

// 1. Load saved choice immediately when the page opens
function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}
loadThemePreference();

// 2. Flip the theme and save the new choice on click
if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        const isDark = document.body.classList.contains('dark-theme');

        if (isDark) {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        }
    });
}
// ==========================================
// 25. Form State Persistence (Autosave)
// ==========================================
const sandboxForm = document.getElementById('practice-form');

if (sandboxForm) {
    const firstNameField = sandboxForm.elements['first-name'];
    const emailField = sandboxForm.elements['email'];

    // 1. Save every keystroke immediately
    if (firstNameField) {
        firstNameField.addEventListener('input', function() {
            localStorage.setItem('savedFirstName', firstNameField.value);
        });
    }

    if (emailField) {
        emailField.addEventListener('input', function() {
            localStorage.setItem('savedEmail', emailField.value);
        });
    }

    // 2. Restore saved drafts when the page loads
    function loadSavedDrafts() {
        const storedName = localStorage.getItem('savedFirstName');
        const storedEmail = localStorage.getItem('savedEmail');

        if (storedName && firstNameField) {
            firstNameField.value = storedName;
        }
        if (storedEmail && emailField) {
            emailField.value = storedEmail;
        }
    }

    loadSavedDrafts();
}
// ==========================================
// 26. Persistent Saved List (Application State)
// ==========================================
let savedItems = [];

const itemInput = document.getElementById('item-input');
const addItemBtn = document.getElementById('add-btn');
const itemListEl = document.getElementById('item-list');

// 1. Save the entire array as a JSON string
function saveList() {
    localStorage.setItem('mySavedList', JSON.stringify(savedItems));
}

// 2. Render each item as an <li> inside the <ul>
function renderList() {
    if (!itemListEl) return;
    itemListEl.innerHTML = '';
    
    savedItems.forEach(function(itemText) {
        const li = document.createElement('li');
        li.textContent = itemText;
        itemListEl.appendChild(li);
    });
}

// 3. Load saved JSON string on page open and parse it back into an array
function loadList() {
    const stored = localStorage.getItem('mySavedList');
    if (stored) {
        savedItems = JSON.parse(stored);
    }
    renderList();
}

// 4. Read input, update array, save, and re-render
if (addItemBtn && itemInput) {
    addItemBtn.addEventListener('click', function() {
        const text = itemInput.value.trim();
        if (text !== '') {
            savedItems.push(text);
            saveList();
            renderList();
            itemInput.value = ''; // Clear input box for next item
        }
    });
}

// Run immediately when the page loads
loadList();
