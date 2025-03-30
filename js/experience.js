//Section to change the color of text with the checkbox 

// Wait until the document is fully loaded before executing the code
document.addEventListener("DOMContentLoaded", function () {
    // Select all checkboxes with the class 'rb-form-check-input'
    let checkboxes = document.querySelectorAll('.rb-form-check-input');

    // Loop through each checkbox and add a click event listener
    checkboxes.forEach(function (checkboxes) {
        checkboxes.addEventListener("click", function () {
            // Toggle the 'rb-checked' class on the grandparent element of the clicked checkbox
            this.parentNode.parentNode.classList.toggle('rb-checked');
        });
    });
});