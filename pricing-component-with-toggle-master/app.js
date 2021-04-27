const switchInput = document.querySelector('.switch');
const checkBox = document.querySelector('input[type="checkbox"]');

const price1 = document.querySelector('.price1');
const price2 = document.querySelector('.price2');
const price3 = document.querySelector('.price3');

function changePrices() {
  if (checkBox.checked === true) {
    price1.textContent = '19.99';
    price2.textContent = '24.99';
    price3.textContent = '39.99';
  } else {
    price1.textContent = '199.99';
    price2.textContent = '249.99';
    price3.textContent = '399.99';
  }
}

switchInput.addEventListener('click', changePrices);