//Selectors
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

//eventListner
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})