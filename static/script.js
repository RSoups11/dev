document.addEventListener("DOMContentLoaded", function() { // event listener qui attend la page html se charger entièrement et attend que le navigateur la parse
    var lectureButton = document.querySelector(".button-lecture"); // récupère le premier élément de classe button-lecture et stock dans lectureButton
    var song = document.getElementById("song"); // récupère l'élément d'id "song" et stock dans song
    var theme = document.getElementById("theme"); // récupère l'élément d'id "theme" et stock dans theme
    var pdp = document.getElementById("pdp"); // récupère l'élément d'id "pdp" et stock dans pdp

    // récupère les textes pour mettre en rainbow color
    var rainbow = document.getElementsByClassName("rainbow");
  
    lectureButton.addEventListener("click", function() { // check si le bouton de classe button-lecture est cliqué pour effectuer la fonction en argument
      if (song.paused) { // si il n'y a pas de musique lors de l'appuie alors on lance
        song.play();
        lectureButton.textContent = "Pause";
        theme.setAttribute("href", "../static/funky.css"); // passe en mode funky css
        pdp.setAttribute("src", "../static/images/Monstre.png"); // photo funky
        applyRainbowColors(rainbow); // applique le funky rainbow texte
  
      } else { 
        song.pause(); // si re appuie du bouton lorsque la musique joue cela va arreter la musique
        song.currentTime = 0; // reset la musique
        lectureButton.textContent = "Lecture";
        theme.setAttribute("href", "../static/styles.css"); // remet le css par défaut
        pdp.setAttribute("src", "../static/images/tete-removebg.png"); // remet photo par défaut
       removeRainbowEffect(rainbow); // enleve le funky rainbow texte
      }
    });

    function applyRainbowColors(elements) {
        var couleurs = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3']; // tableau de couleur de l'arc en ciel
        var couleursIndex = 0; // l'indice de la couleur du tableau
  
        Array.from(elements).forEach(element => {
          // Stocker le HTML original dans un attribut data
          if (!element.hasAttribute('data-original-html')) {
              element.setAttribute('data-original-html', element.innerHTML);
          }
  
          var text = element.innerText;
          var rainbowText = '';
  
          for (var j = 0; j < text.length; j++) {
              rainbowText += '<span style="color:' + couleurs[couleursIndex] + '">' + text[j] + '</span>'; // entour le caractère choisi par des <span style="color: couleurs"...
              couleursIndex = (couleursIndex + 1) % couleurs.length; // parcours le tableau de couleur en boucle
          }
  
          element.innerHTML = rainbowText; // inject dans le html
      });
    }

    
    function removeRainbowEffect(elements) {
      Array.from(elements).forEach(element => {
          // Restaurer le HTML à partir de l'attribut data-original-html
          if (element.hasAttribute('data-original-html')) {
              element.innerHTML = element.getAttribute('data-original-html');
              element.removeAttribute('data-original-html'); // Optionnel, nettoyer après restauration
          }
      });
  }
})