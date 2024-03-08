document.addEventListener("DOMContentLoaded", function() { // event listener qui attend la page html se charger entièrement et attend que le navigateur la parse
    var lectureButton = document.querySelector(".button-lecture"); // récupère le premier élément de classe button-lecture et stock dans lectureButton
    var song = document.getElementById("song"); // récupère l'élément d'id "song" et stock dans song
    var theme = document.getElementById("theme"); // récupère l'élément d'id "theme" et stock dans theme

    // récupère les textes pour mettre en raibow color
    var texteDroite =  document.getElementsByClassName("texte-droite");
    var texteGauche =  document.getElementsByClassName("texte-gauche");
    var texteBas =  document.getElementsByClassName("texte-bas");
    var categorieDroite = document.getElementsByClassName("categorie-droite");
    var categorieGauche = document.getElementsByClassName("categorie-gauche");
    var categorieBas = document.getElementsByClassName("categorie-bas");
    var titreDroite = document.getElementsByClassName("titre-droite");
    var titreGauche = document.getElementsByClassName("titre-gauche");
    var h3 = document.getElementsByTagName("h3");
    var h4 = document.getElementsByTagName("h4");
    var expertise = document.getElementsByClassName("expertise");
    var interet = document.getElementsByClassName("interet");
    var dispo = document.getElementsByClassName("disponibilite");
    var pdp = document.getElementById("pdp");


    

  
    lectureButton.addEventListener("click", function() { // check si le bouton de classe button-lecture est cliqué pour effectuer la fonction en argument
      if (song.paused) { // si il n'y a pas de musique lors de l'appuie alors on lance
        song.play();
        lectureButton.textContent = "Pause";
        theme.setAttribute("href", "../static/funky.css"); // passe en mode funky css
        pdp.setAttribute("src", "../images/Monstre.png"); // photo funky

        applyRainbowColors(texteDroite);
        applyRainbowColors(texteGauche);
        applyRainbowColors(texteBas);
        applyRainbowColors(categorieDroite);
        applyRainbowColors(categorieGauche);
        applyRainbowColors(categorieBas);
        applyRainbowColors(titreDroite);
        applyRainbowColors(titreGauche);
        applyRainbowColors(h3);
        applyRainbowColors(h4);
        applyRainbowColors(expertise);
        applyRainbowColors(interet);
        applyRainbowColors(dispo);




      } else { 
        song.pause(); // si re appuie du bouton lorsque la musique joue cela va arreter la musique
        song.currentTime = 0; // reset la musique
        lectureButton.textContent = "Lecture";
        theme.setAttribute("href", "../static/styles.css"); // remet le css par défaut
        pdp.setAttribute("src", "../images/tete-removebg.png"); // remet photo par défaut

        removeRainbowEffect(texteDroite);
        removeRainbowEffect(texteGauche);
        removeRainbowEffect(texteBas);
        removeRainbowEffect(categorieDroite);
        removeRainbowEffect(categorieGauche);
        removeRainbowEffect(categorieBas);
        removeRainbowEffect(titreDroite);
        removeRainbowEffect(titreGauche);
        removeRainbowEffect(h3);
        removeRainbowEffect(h4);
        removeRainbowEffect(expertise);
        removeRainbowEffect(interet);
        removeRainbowEffect(dispo);
      }
    });

    function applyRainbowColors(elements) {
        var couleurs = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];
        var couleursIndex = 0;
  
        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];
          var text = element.innerText;
          var rainbowText = '';
  
          for (var j = 0; j < text.length; j++) {
              rainbowText += '<span style="color:' + couleurs[couleursIndex] + '">' + text[j] + '</span>';
              couleursIndex = (couleursIndex + 1) % couleurs.length;
          }
  
          element.innerHTML = rainbowText;
        }
      }

    
    function removeRainbowEffect(elements) {
        Array.from(elements).forEach((element) => {
          element.innerHTML = element.innerText; // enleve les span pour annuler l'effet arc en ciel
        });
    }
  });

