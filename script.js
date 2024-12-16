document.addEventListener("DOMContentLoaded", function () {
  
    // Toggle mobile menu visibility
    const menuBtn = document.getElementById('menu');
    const closeBtn = document.getElementById('close');
    const navbar = document.querySelector('.header .navbar');
  
    // Function to open the mobile menu
    menuBtn.addEventListener('click', () => {
      navbar.classList.add('active'); // Show navbar when menu button is clicked
    });
  
    // Function to close the mobile menu
    closeBtn.addEventListener('click', () => {
      navbar.classList.remove('active'); // Hide navbar when close button is clicked
    });
  
    // Sticky Header (Add a class to header on scroll)
    const header = document.querySelector('.header');
    const sticky = header.offsetTop;
  
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
  
    // Smooth Scrolling Effect (for anchor links)
    const links = document.querySelectorAll('.navbar a');
  
    links.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default anchor link behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section's id
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth', // Scroll with smooth transition
            block: 'start'
          });
        }
      });
    });
  
  });
  