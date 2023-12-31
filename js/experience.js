//Section 
document.addEventListener("DOMContentLoaded", function(){
    var checkboxes = document.querySelectorAll('.rb-form-check-input');
    checkboxes.forEach(function (checkboxes){
        checkboxes.addEventListener("click", function(){
            this.parentNode.parentNode.classList.toggle('rb-checked');
        });
    });
});