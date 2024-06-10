document.addEventListener('DOMContentLoaded', () => {
  // Get references to DOM elements
  const moonIcon = document.getElementById('icon');
  const slideContainer = document.getElementById('projectImg');
  const desktopNav = document.getElementById('desktop-nav');

  // Check if moonIcon is found before accessing its properties
  if (moonIcon) {
    // Event handler for toggling between light and dark themes
    moonIcon.addEventListener('click', function() {
      // Toggle the 'dark-theme' class on the body element
      document.body.classList.toggle('dark-theme');

      // Update icon and logo based on theme
      if (document.body.classList.contains('dark-theme')) {
        moonIcon.src = "./image/sun.png";
        slideContainer.style.borderColor = 'white';
        desktopNav.style.backgroundColor = 'rgb(23, 23, 23)';

        let allTags = document.querySelectorAll('h3');
        allTags.forEach(function(Tag) {
          // Do something with each <h3> tag
          Tag.style.color = 'white';
        });
      } else {
        moonIcon.src = "./image/moon.png";
        slideContainer.style.borderColor = 'black';
        desktopNav.style.backgroundColor = 'rgb(239, 239, 239)';
      
        let allTags = document.querySelectorAll('h3');
        allTags.forEach(function(Tag) {
          Tag.style.color = 'black';
        });
      }
    });
  } else {
    console.error('Element with ID "icon" not found'); // Debugging statement
  }

  // slider project images

  let imgSlide = document.getElementById('projectImg');
  let projectUrl = document.getElementById('projectGitUrl');
  let title = document.getElementById('project-title');

  let imgArr = ['project1.png', 'project2-dark.png', 'project-3.png'];
  // todo change the url into url of your live demo link but first do your project to do this
  let urlArr = ['https://github.com/Juliusnowel/SantiagoJuliusNowel', 'https://github.com/Juliusnowel/SantiagoJuliusNowel', 'https://github.com/Juliusnowel/SantiagoJuliusNowel'];
  let titleArr = ['School Website', 'Multiplication Website', 'Facebook Replica'];
  let currentIndex = 0;

  // Function to change the image
  const changeImage = () => {
    currentIndex = (currentIndex + 1) % imgArr.length; // Increment the index and wrap around
    imgSlide.src = "/image/" + imgArr[currentIndex]; // Update the image source
    projectUrl.setAttribute('href', urlArr[currentIndex]); // Update the Url of the image
    title.innerHTML = titleArr[currentIndex];
  };

  // Set the interval to change the image every 3 seconds
  setInterval(changeImage, 3000);
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







