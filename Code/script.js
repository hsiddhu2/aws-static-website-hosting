document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for menu items
  document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          window.scrollTo({
              top: targetElement.offsetTop - document.querySelector('nav').offsetHeight, // Adjusted for the height of the navigation bar
              behavior: 'smooth'
          });
      });
  });
});
