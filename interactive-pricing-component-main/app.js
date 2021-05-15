const btn = document.querySelector('.btn');
const slider = document.querySelector('.inputRange');
const toggle = document.getElementById('toggleButton');


slider.oninput =function() {

  const pageViews = document.querySelector(".views");
  const priceDesktop = document.getElementById("priceDesktop");
  const priceMobile = document.getElementById("priceMobile");

  function printPageViews(view) {
    pageViews.textContent = `${view}k`;
  }

  function printingPrice(amount) {
    if (toggle.checked) {
      priceDesktop.innerText = `$${amount - amount * 0.25}`;
      priceMobile.textContent = `$${amount - amount * 0.25}`;
    } else {
      priceDesktop.textContent = `$${amount}`;
      priceMobile.textContent = `$${amount}`;
    }
  }

  if (Number(this.value) === 0) {
    printPageViews(10);
    printingPrice(8);
  } else if (Number(this.value) === 1) {
    printPageViews(50);
    printingPrice(12);
  } else if (Number(this.value) === 2) {
    printPageViews(100);
    printingPrice(16);
  } else if (Number(this.value) === 3) {
    printPageViews(500);
    printingPrice(24);
  } else if (Number(this.value) === 4) {
    pageViews.textContent = "1M";
    printingPrice(36);
  }
}


toggle.addEventListener('click', function() {
  slider.oninput();
});
btn.addEventListener("click", function() {
  location.reload();
});