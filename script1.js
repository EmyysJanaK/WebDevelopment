const container = document.getElementById('container');
const button = document.getElementById('theme-button');

button.addEventListener('click', () => {
  container.classList.toggle('dark-theme');
});

container.addEventListener('transitionend', () => {
  if (container.classList.contains('dark-theme')) {
    container.style.backgroundColor = '#333'; // Dark background
    container.style.color = '#fff'; // Light text
  } else {
    container.style.backgroundColor = '#fff'; // Light background
    container.style.color = '#000'; // Dark text
  }
});