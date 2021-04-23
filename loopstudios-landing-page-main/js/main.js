const hamburgerBtn = document.querySelector('.hamburger');
const navMenu = document.getElementById('nav-main');
const navItem = document.querySelectorAll('.navItem li');

hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

navItem.forEach(item => item.addEventListener('click', () => {
  navMenu.classList.toggle('active');
}));

window.addEventListener("scroll", () => {
  navMenu.classList.remove('active');
});