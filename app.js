const moonIcon = document.getElementById('icon');
const gitIcon = document.getElementById('git_Icon');
const logo = document.getElementById('logo');
moonIcon.onclick = function() {
  document.body.classList.toggle('dark-theme');
  if(document.body.classList.contains('dark-theme')) {
    moonIcon.src = "./sun.png";
    gitIcon.src = "./githubWhite_logo.png";
    logo.src = "./logo-dark.png";
  } else {
    moonIcon.src = "./moon.png";
    gitIcon.src = "./github_logo.png";
    logo.src = "./logo-white.jpg";
  }
}

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}