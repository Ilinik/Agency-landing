const burgerMenu = document.querySelector('.burger-menu');
const burgerLine = document.querySelector('.burger-menu__line');
const nav = document.querySelector('.nav');

burgerMenu.addEventListener('click', () => {
  burgerLine.classList.toggle('active');
  nav.classList.toggle('active');
});
