//Section change color with switch checkbox 
let checkbox = document.getElementById('rb-checkbox');
let section = document.querySelector('.rb-section-history');

checkbox.addEventListener('change', function(){
    section.style.backgroundColor = this.checked ? 'red' : 'green';
});


