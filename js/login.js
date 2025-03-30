//Section "Eyes icon" for password

// Wait until the document is fully loaded before executing the code
document.addEventListener('DOMContentLoaded', function () {
    // Select the eye icon used to show or hide the password
    const pwIcon = document.querySelector('.rb-eyes-icon');
    // Select the password input field
    const pwField = document.querySelector('.rb-password');

    // Add a click event listener to the eye icon
    pwIcon.addEventListener('click', function () {
        
        // Check if the input type is 'password'
        if (pwField.type === 'password') {
            // Change the input type to 'text' to make the password visible
            pwField.type = 'text';
            // Replace the icon from 'crossed eye' to 'open eye'
            pwIcon.classList.replace('fa-eyes-slash', 'fa-eye');
        }

        // If the input type is not 'password', it must be 'text'
        else {
            // Change the input type back to 'password' to hide the password
            pwField.type = 'password';
            // Replace the icon from 'open eye' to 'crossed eye'
            pwIcon.classList.replace('fa-eye', 'fa-eye-slash');
        }
    });
});