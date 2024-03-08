document.addEventListener('DOMContentLoaded', function() { // event listener qui attend la page html se charger entièrement et attend que le navigateur la parse
    var lectureButton = document.querySelector('.button-lecture'); // récupère le premier élément de classe button-lecture et stock dans lectureButton
    var song = document.getElementById('song'); // récupère l'élément d'id "song" et stock dans song
  
    lectureButton.addEventListener('click', function() { // check si le bouton de classe button-lecture est cliqué pour effectuer la fonction en argument
      if (song.paused) {
        song.play();
        lectureButton.textContent = 'Pause';
      } else { // si re appuie du bouton lorsque la musique joue cela va arreter la musique
        song.pause();
        lectureButton.textContent = 'Lecture';
      }
    });
  });