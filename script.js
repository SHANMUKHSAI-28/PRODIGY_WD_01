// script.js
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  });

  const menuItems = document.querySelectorAll('.navbar ul li a');

  menuItems.forEach(item => {
      item.addEventListener('mouseover', function() {
          this.style.color = '#ffcc00';
      });

      item.addEventListener('mouseout', function() {
          this.style.color = 'white';
      });
  });
});
