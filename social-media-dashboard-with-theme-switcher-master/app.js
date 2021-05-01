const switchInput = document.querySelector('.switch');
const checkBox = document.querySelector('input[type="checkbox"]');

const body = document.querySelector('body');
const header = document.querySelector('header');

function changeTheme() {
  if(checkBox.checked === true) {
    body.classList.toggle('light');
  }
  
}

switchInput.addEventListener('click', changeTheme);