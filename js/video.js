//Section 
document.addEventListener('DOMContentLoaded', function(){
    let btn = document.querySelector('.rb-btn');
    let video = document.querySelector('.rb-video');
    let close = document.querySelector('.rb-close');
    let  videos = document.querySelector('video');
    btn.onclick = function() {
      btn.classList.add('rb-active');
      video.classList.add('rb-active');
      videos.play();
    }
    close.onclick = function(){
      btn.classList.remove('rb-active');
      video.classList.remove('rb-active');
      videos.pause();
    }
});