/* 
1.push value into an Array
2.push operator into an array
3.push new value into an array
4.unshift value;
5.unshift operator;
6.unshift value;
7.send to operate to calculate amount
8.
*/

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

function getNumber(e) {
  let addDigit = e.target.value;
  numberString += addDigit;
  let displayWindow = numberString;
  display.textContent = parseInt(displayWindow);
}

function clear() {
  equationArray = [];
  numberString = "";
  numberString2 = "";
  display.textContent = "";
}

function changeSign() {
  console.log(numberString);
  numberString = numberString * -1;
  display.textContent = numberString;
}

let numberString = "";
let numberString2 = "";
let equationArray = [];
let display = document.querySelector("#display");
let clearButton = document.getElementById("clear");
let addButton = document.getElementById("add");
let changeSignButton = document.getElementById("changeSign");
let equalsButton = document.getElementById("equals");
let numberButtons = document.querySelectorAll(`button[data-num^='num']`);

for (num of numberButtons) {
  num.addEventListener("click", (e) => {
    getNumber(e);
  });
}

clearButton.addEventListener("click", clear);
changeSignButton.addEventListener("click", changeSign);

addButton.addEventListener("click", () => {
  equationArray.push(parseInt(display.textContent));
  equationArray.push("+");
  numberString = "";
  console.log(equationArray);
  display.textContent = "";
});

equalsButton.addEventListener("click", () => {
  equationArray.push(parseInt(display.textContent));
  console.log(equationArray);
  numberString = equationArray.shift();
  console.log(numberString);
  operator = equationArray.shift();
  console.log(operator);
  numberString2 = equationArray.shift();
  console.log(numberString2);
  display.textContent = operate(operator, numberString, numberString2);
});
