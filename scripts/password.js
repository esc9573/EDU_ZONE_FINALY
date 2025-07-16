document.addEventListener('DOMContentLoaded', () => {
    const password = document.getElementById('password'),
        confirm = document.getElementById('confirm-password'),
        form = document.querySelector('form'),
        strengthBar = document.querySelector('.strength-bar'),
        strengthText = document.querySelector('.strength-text'),
        requirements = document.querySelectorAll('.password-requirements p i'),
        toggles = document.querySelectorAll('.toggle-password');

    // Toggle show/hide password
    toggles.forEach(btn => btn.addEventListener('click', () => {
        const input = btn.closest('.input_ground').querySelector('input') || document.querySelector('input[name="pass"]');
        if (!input) return;
        input.type = input.type === 'password' ? 'text' : 'password';
        btn.classList.toggle('fa-eye');
        btn.classList.toggle('fa-eye-slash');
    }));

    // Password strength
    password.addEventListener('input', () => {
        const val = password.value;
        const checks = [
            val.length >= 8,
            /[0-9\W]/.test(val),
            /[a-z]/.test(val) && /[A-Z]/.test(val)
        ];
        const strength = checks[0] * 25 + checks[1] * 25 + checks[2] * 50;

        requirements.forEach((icon, i) => icon.style.color = checks[i] ? '#4CAF50' : '#ccc');

        if (strengthBar && strengthText) {
            strengthBar.style.width = `${strength}%`;
            strengthBar.style.backgroundColor =
                strength < 25 ? '#f44336' :
                strength < 50 ? '#FF9800' :
                strength < 75 ? '#2196F3' : '#4CAF50';
            strengthText.textContent =
                strength < 25 ? 'Weak Password' :
                strength < 50 ? 'Fair Password' :
                strength < 75 ? 'Good Password' : 'Strong Password';
        }
    });

    // Confirm password match
    confirm.addEventListener('input', () => {
        confirm.setCustomValidity(confirm.value !== password.value ? 'Passwords do not match' : '');
    });

    // Prevent form submit if passwords don't match
    form.addEventListener('submit', e => {
        if (password.value !== confirm.value) {
            e.preventDefault();
            alert('Passwords do not match');
        }
    });
});