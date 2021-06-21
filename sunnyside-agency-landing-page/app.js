const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".hamburger");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
