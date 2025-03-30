//Section change color with switch checkbox 

// Select the checkbox element
let checkbox = document.getElementById('rb-checkbox');
// Select the section that will change color
let section = document.querySelector('.rb-section-history');


// Add an event listener that triggers when the checkbox state changes
checkbox.addEventListener('change', function () {
    // If the checkbox is checked, change the background color to light green
    // Otherwise, change it to light gray
    section.style.backgroundColor = this.checked ? 'lightgreen' : 'lightgray';
});


