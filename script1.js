const container = document.getElementById('container');
const button = document.getElementById('theme-button');

button.addEventListener('click', () => {
  container.classList.toggle('dark-theme');
});
