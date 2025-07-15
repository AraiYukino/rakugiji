document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.main-nav a');

  hamburger.addEventListener('click', function() {
    nav.classList.toggle('open');
  });

  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      nav.classList.remove('open');
    });
  });
});
