// 1. Select the form container element
const form = document.querySelector('#signup-form');

// Helper function to inject red styles and custom text messages
function showError(inputId, message) {
    const inputField = document.querySelector(`#${inputId}`);
    const errorSpan = document.querySelector(`#${inputId}-error`);
    
    if (inputField && errorSpan) {
        inputField.classList.add('input-error');
        errorSpan.textContent = message;
    }
}

// Helper function to wipe away red styles and empty error messages
function clearError(inputId) {
    const inputField = document.querySelector(`#${inputId}`);
    const errorSpan = document.querySelector(`#${inputId}-error`);
    
    if (inputField && errorSpan) {
        inputField.classList.remove('input-error');
        errorSpan.textContent = '';
    }
}

// 2. Attach the submission checklist inspector guard
if (form) {
    form.addEventListener('submit', function(event) {
        // Freeze the native reload loop
        event.preventDefault();
        
        // Reset all error states before running the new check pass
        clearError('username');
        clearError('email');
        clearError('password');
        
        let isValid = true;
        
        // Extract raw element values
        const usernameVal = document.querySelector('#username').value;
        const emailVal = document.querySelector('#email').value;
        const passwordVal = document.querySelector('#password').value;
        
        // Check Rule A: Username presence check
        if (usernameVal.trim() === '') {
            showError('username', 'Username is required');
            isValid = false;
        }
        
        // Check Rule B: Email format structure evaluation
        if (emailVal.trim() === '') {
            showError('email', 'Email is required');
            isValid = false;
        } else if (!emailVal.includes('@')) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Check Rule C: Password security length minimum enforcement
        if (passwordVal.length < 8) {
            showError('password', 'Password must be at least 8 characters');
            isValid = false;
        }
        
        // 3. Final Gatekeeper Decision Verification
        if (isValid) {
            console.log('✅ Form submission successful! All fields are verified clean.');
            // form.submit(); // Activates server-side delivery when valid!
        } else {
            console.log('❌ Submission blocked: Inline errors injected.');
        }
    });
}
