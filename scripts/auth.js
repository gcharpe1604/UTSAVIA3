document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    // Show/hide password
    document.querySelectorAll('.show-password').forEach(btn => {
        btn.innerHTML = '👁️';
        btn.addEventListener('click', e => {
            e.preventDefault();
            const input = btn.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                btn.innerHTML = '🙈';
            } else {
                input.type = 'password';
                btn.innerHTML = '👁️';
            }
        });
    });

    // Real-time validation for sign up
    if (signupForm) {
        const emailInput = document.getElementById('signup-email');
        const passwordInput = document.getElementById('signup-password');
        const confirmPasswordInput = document.getElementById('signup-confirm-password');

        emailInput.addEventListener('input', () => validateEmail(emailInput));
        passwordInput.addEventListener('input', () => validatePassword(passwordInput));
        confirmPasswordInput.addEventListener('input', () => validateConfirmPassword(passwordInput, confirmPasswordInput));

        signupForm.addEventListener('submit', e => {
            e.preventDefault();
            const validEmail = validateEmail(emailInput);
            const validPassword = validatePassword(passwordInput);
            const validConfirm = validateConfirmPassword(passwordInput, confirmPasswordInput);
            if (validEmail && validPassword && validConfirm) {
                alert('Sign up successful! Redirecting to login...');
                window.location.href = 'login.html';
            }
        });
    }

    // Real-time validation for login
    if (loginForm) {
        const emailInput = document.getElementById('login-email');
        emailInput.addEventListener('input', () => validateEmail(emailInput));

        loginForm.addEventListener('submit', e => {
            e.preventDefault();
            const validEmail = validateEmail(emailInput);
            if (validEmail) {
                alert('Login successful! Redirecting to home page...');
                window.location.href = '../index.html';
            }
        });
    }

    function validateEmail(input) {
        const value = input.value.trim();
        const formGroup = input.closest('.form-group');
        const status = formGroup.querySelector('.input-status');
        const errorDiv = formGroup.querySelector('.input-error');
        const valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value);
        if (valid) {
            input.classList.remove('error');
            input.classList.add('success');
            if (status) status.textContent = '✔️';
            if (errorDiv) errorDiv.textContent = '';
        } else {
            input.classList.remove('success');
            input.classList.add('error');
            if (status) status.textContent = '✖️';
            if (errorDiv) errorDiv.textContent = value ? 'Please enter a valid email.' : '';
        }
        if (!value) {
            input.classList.remove('error', 'success');
            if (status) status.textContent = '';
            if (errorDiv) errorDiv.textContent = '';
        }
        return valid;
    }

    function validatePassword(input) {
        const value = input.value;
        const formGroup = input.closest('.form-group');
        const status = formGroup.querySelector('.input-status');
        const errorDiv = formGroup.querySelector('.input-error');
        const valid = /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
        if (valid) {
            input.classList.remove('error');
            input.classList.add('success');
            if (status) status.textContent = '✔️';
            if (errorDiv) errorDiv.textContent = '';
        } else {
            input.classList.remove('success');
            input.classList.add('error');
            if (status) status.textContent = '✖️';
            if (errorDiv) errorDiv.textContent = value ? 'Password must be 8+ chars, 1 uppercase, 1 number.' : '';
        }
        if (!value) {
            input.classList.remove('error', 'success');
            if (status) status.textContent = '';
            if (errorDiv) errorDiv.textContent = '';
        }
        return valid;
    }

    function validateConfirmPassword(passwordInput, confirmInput) {
        const value = confirmInput.value;
        const formGroup = confirmInput.closest('.form-group');
        const status = formGroup.querySelector('.input-status');
        const errorDiv = formGroup.querySelector('.input-error');
        const valid = value && value === passwordInput.value;
        if (valid) {
            confirmInput.classList.remove('error');
            confirmInput.classList.add('success');
            if (status) status.textContent = '✔️';
            if (errorDiv) errorDiv.textContent = '';
        } else {
            confirmInput.classList.remove('success');
            confirmInput.classList.add('error');
            if (status) status.textContent = '✖️';
            if (errorDiv) errorDiv.textContent = value ? 'Passwords do not match.' : '';
        }
        if (!value) {
            confirmInput.classList.remove('error', 'success');
            if (status) status.textContent = '';
            if (errorDiv) errorDiv.textContent = '';
        }
        return valid;
    }
}); 