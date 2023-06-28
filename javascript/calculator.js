let calculation = localStorage.getItem("calc-memory") || "";
updateCalculationDisplay();

function updateCalculation(action) {
  calculation += action;
  console.log(calculation);

  localStorage.setItem("calc-memor", calculation);
  updateCalculationDisplay();
  return calculationPrediction();

}

function calculationPrediction() {
  let calculationPred = eval(calculation) 
  document.querySelector('.calculation-prediction').innerHTML = `= ${calculationPred}`
}

function updateCalculationDisplay() {
  document.querySelector(".Calculator-screen").innerHTML = calculation;
}

