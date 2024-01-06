//Section "Eyes icon" for password
document.addEventListener('DOMContentLoaded', function() {
    const pwIcon = document.querySelector('.rb-eyes-icon');
    const pwField = document.querySelector('.rb-password');

    pwIcon.addEventListener('click', function () {
        if (pwField.type === 'password') {
           pwField.type = 'text';
           pwIcon.classList.replace('fa-eyes-slash', 'fa-eye');
        }
        else {
           pwField.type = 'password';
           pwIcon.classList.replace('fa-eye', 'fa-eye-slash');
        }
    });
});