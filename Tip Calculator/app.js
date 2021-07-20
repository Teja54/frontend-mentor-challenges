let tipBtn = document.querySelectorAll(".tipText");
let tipPercentage = document.querySelectorAll(".tipPercent");
let resetBtn = document.querySelector("#reset");
let billInput = document.querySelector(".billInput");
let peopleInput = document.querySelector(".personInput");
let customInput = document.getElementById("customInput");
let errorText = document.querySelector(".error-text");
let activeBtn = document.querySelector(".active");

let selectedTip;

// Calculate the values
function calculate() {
  const bill = parseFloat(billInput.value);
  const percent = selectedTip / 100;
  const people = parseFloat(peopleInput.value);
  const amount = (bill * percent) / people;
  const total = bill / people + amount;

  tipOutput.textContent = "$" + amount.toFixed(2);
  totalOutput.textContent = "$" + total.toFixed(2);
  return;
}

// Error Validation
peopleInput.addEventListener("input", (e) => {
  const currentInput = e.target.value;
  if (currentInput == 0) {
    peopleInput.classList.add("error");
    errorText.style.display = "block";
  } else {
    peopleInput.classList.remove("error");
    errorText.style.display = "none";
  }

  calculate();
});

// Grabbing the value from tip % btn
tipPercentage.forEach((input) => {
  input.addEventListener("click", (e) => {
    selectedTip = parseFloat(e.target.textContent);
  });
});

// Grabs the input of the custom tip value
customInput.addEventListener("input", (e) => {
  const customTip = e.target.value;
  selectedTip = parseFloat(customTip);
  calculate();
});

// Remove the active class when the custom input has been clicked
customInput.addEventListener("click", () => {
  activeBtn.classList.remove("active");
});

let tipOutput = document.getElementById("tipOutput");
let totalOutput = document.getElementById("totalOutput");
tipOutput.textContent = "$0.00";
totalOutput.textContent = "$0.00";

function clearContent() {
  // Clear input values
  billInput.value = "";
  peopleInput.value = "";
  customInput.value = "";

  // Clear calculated values
  tipOutput.textContent = "$0.00";
  totalOutput.textContent = "$0.00";

  // Clear input validation
  peopleInput.classList.remove("error");
  errorText.style.display = "none";

  // Remove the active class on tip button
  activeBtn.classList.remove("active");
}

resetBtn.addEventListener("click", clearContent);

// Lopps through the Select Tips % buttons and add/removes the active class
tipBtn.forEach((tip) => {
  tip.addEventListener("click", () => {
    // removes the original active class from element
    activeBtn.classList.remove("active");
    // adds the class on the button that has been clicked
    tip.classList.add("active");
    // making activeBtn equal to tipBtn allows you to add and remove the active class
    activeBtn = tip;
  });
});

activeBtn.classList.remove("active");
