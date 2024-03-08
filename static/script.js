document.addEventListener('DOMContentLoaded', function() {
    var lectureButton = document.querySelector('.button-lecture');
    var song = document.getElementById('song');
  
    lectureButton.addEventListener('click', function() {
      if (song.paused) {
        song.play();
      } else {
        song.pause();
        song.currentTime = 0;
      }
    });
  });