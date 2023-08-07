// Get the container and button elements
const container = document.getElementById('container');
const button = document.getElementById('theme-button');

// Toggle between themes
function toggleTheme() {
  container.classList.toggle('dark-theme');
}

// Function to handle theme change animation
function handleThemeChange() {
  // Check if the dark theme is active
  if (container.classList.contains('dark-theme')) {
    container.style.backgroundColor = '#333'; // Dark background
    container.style.color = '#fff'; // Light text
  } else {
    container.style.backgroundColor = '#fff'; // Light background
    container.style.color = '#000'; // Dark text
  }
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
