//Section for video
document.addEventListener('DOMContentLoaded', function(){
    let btn = document.querySelector('.rb-btn');
    let video = document.querySelector('.rb-video');
    let close = document.querySelector('.rb-close');
    let  videos = document.querySelector('video');
    btn.onclick = function() {
      btn.classList.add('rb-active');
      video.classList.add('rb-active');
      btn.querySelector('.rb-play').classList.add('hide-button');
      document.querySelector('footer').style = 'display: none';
      document.querySelector('header').style = 'display: none';
      videos.play();
    }
    close.onclick = function(){
      btn.classList.remove('rb-active');
      video.classList.remove('rb-active');
      btn.querySelector('.rb-play').classList.remove('hide-button');
      document.querySelector('footer').style = '';
      document.querySelector('header').style = '';
      videos.pause();
    }
});