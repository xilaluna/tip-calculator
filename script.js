const billInput = document.querySelector("#input-bill");
const tipInput = document.querySelector("#input-tip");
const peopleInput = document.querySelector("#input-people");
const displayTip = document.querySelector("#display-tip");
const displayTotal = document.querySelector("display-total");

function calculation() {
  const bill = parseFloat(billInput.value);
  const percent = parseFloat(tipInput.value);
  const people = parseFloat(peopleInput.value);

  let tip = (bill * percent) / 100;
  let total = bill + tip / people;

  displayTip.innerHTML = tip;
  displayTotal.innerHTML = total;
}

billInput.addEventListener("input", calculation);
tipInput.addEventListener("input", calculation);
peopleInput.addEventListener("input", calculation);
