function togglePassword() {
    const passwordField = document.getElementById('password');
    const toggleBtn = document.querySelector('.password-toggle');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleBtn.textContent = '🙈';
    } else {
        passwordField.type = 'password';
        toggleBtn.textContent = '👁️';
    }
}

function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let isValid = true;

    // Reset error messages
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    return isValid;
}

document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            // Simulate successful login
            const successMessage = document.getElementById('successMessage');
            successMessage.style.display = 'block';
            
            // In a real application, you would send the form data to your server
            setTimeout(() => {
                alert('Login form submitted successfully!\nIn a real application, this would redirect to the dashboard.');
            }, 1500);
        }
    });

    // Add smooth focus animations
    const inputs = document.querySelectorAll('input[type="email"], input[type="password"]');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentNode.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentNode.style.transform = 'scale(1)';
        });
    });
});

function socialLogin(provider) {
    alert(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login clicked!\nIn a real application, this would integrate with ${provider} OAuth.`);
}

function showForgotPassword() {
    alert('Forgot password clicked!\nIn a real application, this would show a password reset form.');
}

function showSignup() {
    alert('Sign up clicked!\nIn a real application, this would navigate to the registration page.');
}