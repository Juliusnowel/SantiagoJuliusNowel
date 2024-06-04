document.addEventListener('DOMContentLoaded', () => {
  // Get references to DOM elements
  const moonIcon = document.getElementById('icon');

  // Check if moonIcon is found before accessing its properties
  if (moonIcon) {
    // Event handler for toggling between light and dark themes
    moonIcon.addEventListener('click', function() {
      // Toggle the 'dark-theme' class on the body element
      document.body.classList.toggle('dark-theme');

      // Update icon and logo based on theme
      if (document.body.classList.contains('dark-theme')) {
        moonIcon.src = "./image/sun.png";
      } else {
        moonIcon.src = "./image/moon.png";
      }
    });
  } else {
    console.error('Element with ID "icon" not found'); // Debugging statement
  }
});

const menuLinks = document.querySelectorAll('.menu-links a');
if (menuLinks) {
  menuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
}

// Function to toggle the menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}




