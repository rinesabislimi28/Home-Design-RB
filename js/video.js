//Section for video

//Wait until the document is fully loaded before executing the code
document.addEventListener('DOMContentLoaded', function () {
  // Select the button that triggers the video
  let btn = document.querySelector('.rb-btn');
  // Select the video container
  let video = document.querySelector('.rb-video');
  // Select the close button
  let close = document.querySelector('.rb-close');
  // Select the actual video element
  let videos = document.querySelector('video');

  // When the button is clicked, play the video and hide unnecessary elements
  btn.onclick = function () {
    // Add an active class to the button
    btn.classList.add('rb-active');
    // Add an active class to the video container
    video.classList.add('rb-active');
    // Hide the play button inside the trigger button
    btn.querySelector('.rb-play').classList.add('hide-button');
    // Hide the footer
    document.querySelector('footer').style = 'display: none';
    // Hide the header 
    document.querySelector('header').style = 'display: none';
    // Start playing the video
    videos.play();
  }

  // When the close button is clicked, stop the video and restore elements
  close.onclick = function () {
    // Remove the active class from the button
    btn.classList.remove('rb-active');
    // Remove the active class from the video container
    video.classList.remove('rb-active');
    // Show the play button inside the trigger button
    btn.querySelector('.rb-play').classList.remove('hide-button');
    // Restore the footer visibility
    document.querySelector('footer').style = '';
    // Restore the header visibility
    document.querySelector('header').style = '';
    // Pause the video
    videos.pause();
  }
});