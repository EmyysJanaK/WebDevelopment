// Get the container and button elements
const container = document.getElementById('container');
const button = document.getElementById('theme-button');

// Toggle between themes
function toggleTheme() {
  container.classList.toggle('dark-theme');
}

// Add animation class and remove after animation ends
function animateThemeChange() {
  container.classList.add('animating');
  setTimeout(() => {
    container.classList.remove('animating');
  }, 2000);
}

// Add event listener to the button
button.addEventListener('click', () => {
  toggleTheme();
  animateThemeChange();
});
