const burgerMenu = document.querySelector('.burger-menu');
const burgerLine = document.querySelector('.burger-menu__line');

burgerMenu.addEventListener('click', () => {
  burgerLine.classList.toggle('active');
});
