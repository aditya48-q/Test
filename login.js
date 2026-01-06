document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email === 'hellfirehackers@gmail.com' && password === 'H112BCE') {
                window.location.href = 'dashboard.html';
            } else {
                errorMessage.textContent = 'Invalid credentials. Please try again.';
            }
        });
    }
});