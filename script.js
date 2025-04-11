// Remonter en haut de la page immédiatement lors du rechargement
window.onload = function () {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'instant', // Défilement instantané
    });
  };

// Configuration d'AOS pour les animations au défilement
  AOS.init({
    duration: 1000, // Durée de l'animation
    once: true,     // Les animations ne se déclenchent qu'une seule fois
    mirror: false,  // Désactive l'animation lors du défilement vers le haut
  });
  
  // Basculer entre mode sombre et clair
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    // Changer l'icône en fonction du mode actuel
    themeToggle.innerHTML = body.classList.contains('dark-mode') 
      ? '<i class="fas fa-moon"></i>' 
      : '<i class="fas fa-sun"></i>';
  });
  
  // Validation du formulaire de contact
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Empêcher l'envoi du formulaire
    alert('Message envoyé avec succès!'); // Afficher un message de confirmation
  });
  
  // Fonction pour gérer l'opacité au défilement
  function handleScrollFade() {
    const sections = document.querySelectorAll('section'); // Sélectionne toutes les sections
    const windowHeight = window.innerHeight; // Hauteur de la fenêtre
  
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top; // Position du haut de la section
      const sectionBottom = section.getBoundingClientRect().bottom; // Position du bas de la section
  
      // Appliquer l'opacité en fonction de la position de la section
      if (sectionTop < windowHeight * 0.75 && sectionBottom > windowHeight * 0.25) {
        section.classList.add('fade-in');
        section.classList.remove('fade-out');
      } else {
        section.classList.add('fade-out');
        section.classList.remove('fade-in');
      }
    });
  }
  
  // Écouter l'événement de défilement
  window.addEventListener('scroll', handleScrollFade);
  
  // Appliquer l'effet au chargement de la page
  document.addEventListener('DOMContentLoaded', handleScrollFade);

