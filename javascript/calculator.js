let calculation = localStorage.getItem("calc-memory") || "";
updateCalculationDisplay();

function updateCalculation(action) {
  calculation += action;
  console.log(calculation);

  localStorage.setItem("calc-memor", calculation);
  updateCalculationDisplay();
}

function updateCalculationDisplay() {
  document.querySelector(".Calculator-screen").innerHTML = calculation;
}