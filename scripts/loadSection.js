async function loadSection(id, url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const text = await response.text();
      document.getElementById(id).innerHTML = text;
    } else {
      console.error('Failed to load', url);
    }
  } catch (error) {
    console.error('Error loading', url, error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // loadSection('desktop-nav', './sectionPage/desktopNav.html');
  // loadSection('hamburger-nav', './sectionPage/hamburgerNav.html');
  loadSection('profile', './sectionPage/profile.html');
  loadSection('about', './sectionPage/about.html');
  loadSection('skills', './sectionPage/skills.html');
  // loadSection('projects', './sectionPage/projects.html');
  loadSection('contact', './sectionPage/contact.html');
  loadSection('footer', './sectionPage/footer.html');
});