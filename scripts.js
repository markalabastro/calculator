function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "x") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

function clear() {
  numberArray = [];
  display.value = "";
}

function changeSign() {
  console.log(numberArray);
  numberArray = Number(numberArray.join("") * -1);
  display.value = numberArray;
}

let numberArray = [];
let display = document.querySelector("#display");
let clearButton = document.getElementById("clear");
let changeSignButton = document.getElementById("changeSign");
let numberButtons = document.querySelectorAll(`button[data-num^='num']`);

for (num of numberButtons) {
  num.addEventListener("click", (e) => {
    numberArray.push(e.target.innerText);
    let displayWindow = Number(numberArray.join(""));
    display.value = displayWindow;
  });
}

clearButton.addEventListener("click", clear);
changeSignButton.addEventListener("click", changeSign);
