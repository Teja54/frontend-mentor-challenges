const hamburgerBtn = document.querySelector('.hamburger');
hamburerImage = document.querySelector('.hamburger img');

const list = document.getElementById('list');

hamburgerBtn.addEventListener('click', () => {

  // change icon on click
  var hamburerIcon = "https://res.cloudinary.com/teja54/image/upload/v1619258617/icon-hamburger_wgk8ia.svg";
  var closeIcon = "https://res.cloudinary.com/teja54/image/upload/v1619258617/icon-close_gr6biy.svg";

  hamburerImage.src = (hamburerImage.src === hamburerIcon) ? closeIcon : hamburerIcon;

  list.classList.toggle('active');
});

