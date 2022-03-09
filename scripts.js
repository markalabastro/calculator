function add(a, b) {
  a = parseInt(a);
  b = parseInt(b);
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
  console.log(operator, a, b);

  if (operator == "+") {
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
  numberString = "";
  display.value = "";
}

function changeSign() {
  console.log(numberString);
  numberString = numberString * -1;
  display.value = numberString;
}

let numberString = "";
let display = document.querySelector("#display");
let clearButton = document.getElementById("clear");
let addButton = document.getElementById("add");
let changeSignButton = document.getElementById("changeSign");
let numberButtons = document.querySelectorAll(`button[data-num^='num']`);

for (num of numberButtons) {
  num.addEventListener("click", (e) => {
    let addDigit = e.target.value;
    numberString += addDigit;
    let displayWindow = parseInt(numberString);
    console.log(typeof displayWindow);
    display.value = parseInt(displayWindow);
    console.log(typeof display.value);
  });
}

clearButton.addEventListener("click", clear);
changeSignButton.addEventListener("click", changeSign);
addButton.addEventListener("click", () => {
  display.value = "";
  display.value = operate("+", numberString, numberString);
});
