//Section to change the color of text with the checkbox 
document.addEventListener("DOMContentLoaded", function(){
    let checkboxes = document.querySelectorAll('.rb-form-check-input');
    checkboxes.forEach(function (checkboxes){
        checkboxes.addEventListener("click", function(){
            this.parentNode.parentNode.classList.toggle('rb-checked');
        });
    });
});