//Section change color with keyboard-event
document.addEventListener("DOMContentLoaded", function() {
    let section = document.querySelector(".rb-section-history");
    document.addEventListener("keydown", function(event) {
    if(event.key === 'r' || event.key === 'R')
        section.style.backgroundColor = "red";
    });
});