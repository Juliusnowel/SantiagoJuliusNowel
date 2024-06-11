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
  let projectUrlGit = document.getElementById('projectGitUrl');
  let projectUrlLive = document.getElementById('projectGitUrl');
  let title = document.getElementById('project-title');
  let aboutProject = document.getElementById('projectAboutText');

  let imgArr = ['project1.png', 'project2-dark.png', 'project-3.png'];
  // todo change the url into url of your live demo link but first do your project to do this
  let gitUrlArr = ['https://github.com/Juliusnowel/SantiagoJuliusNowel', 'https://github.com/Juliusnowel/SantiagoJuliusNowel', 'https://github.com/Juliusnowel/SantiagoJuliusNowel'];
  let liveUrlArr = ['https://github.com/Juliusnowel/SantiagoJuliusNowel', 'https://github.com/Juliusnowel/SantiagoJuliusNowel', 'https://github.com/Juliusnowel/SantiagoJuliusNowel'];
  let titleArr = ['School Website', 'Multiplication Website', 'Facebook Replica'];
  let aboutArr = [
    'This project is about our school during in our Academic Festival it contains how Academic Festival helps to students in their study... <br><b>HTML & CSS</b>', 
    'This project is about Multiplication table but I create this to learn algorithm same as how Backend works I learn to make a session and cookies but this project is don\'t have a Live Demo because it is a Backend... <br><b>HTML, CSS, JS, PHP, & MySQL</b>',
    'This project is about Facebook I create a Login Page and Home Page, this project can do is Post something in a Home page like facebook can do in posting... <br><b>HTML, CSS, &  JS</b>'
  ];
  let currentIndex = 0;

  // Function to change the image
  const changeImage = () => {
    currentIndex = (currentIndex + 1) % imgArr.length; // Increment the index and wrap around
    imgSlide.src = "/image/" + imgArr[currentIndex]; // Update the image source
    projectUrlGit.setAttribute('href', gitUrlArr[currentIndex]); // Update the Url of the image
    projectUrlLive.setAttribute('href', liveUrlArr[currentIndex]); // Update the Url of the image
    title.innerHTML = titleArr[currentIndex]; // Update the Title of the project
    aboutProject.innerHTML = aboutArr[currentIndex]; // Update the about project text
  };

  // Set the interval to change the image every 3 seconds
  setInterval(changeImage, 4000);
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







