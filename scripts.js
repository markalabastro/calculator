function operate(operator, a, b) {
  if (operator == "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "x") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  }
}

function getNumber(e) {
  let addDigit = e.target.value;
  numberString += addDigit;
  display.textContent = numberString;
}

function clear() {
  equationArray = [];
  number1 = "";
  number2 = "";
  numberString = "";
  display.textContent = "";
}

function changeSign() {
  numberString = numberString * -1;
  display.textContent = Number(numberString.toFixed(6));
}

function assignValues() {
  if (equationArray.length == 3) {
    console.log("this" + equationArray);
    number1 = equationArray.shift();
    operator = equationArray.shift();
    number2 = equationArray.shift();
    if (isNaN(number2)) {
      operator = number2;
      number2 = "";
    }
    let total = operate(operator, number1, number2);
    equationArray.unshift(total);
    display.textContent = Number(total.toFixed(6));
    if (operator == "/" && number2 == 0) {
      display.textContent = "You cannot divide by 0";
    }
    number1 = "";
    number2 = "";
  }
}

function catchErrors(sign) {
  console.log(equationArray);
  if (isNaN(equationArray[0])) {
    equationArray = [];
    display.textContent = "";
  } else if (isNaN(equationArray[1])) {
    equationArray[1];
  }
  console.log(equationArray);
}

let numberString = "";
let number1, number2;
let equationArray = [];
let display = document.querySelector("#display");
let clearButton = document.getElementById("clear");
let addButton = document.getElementById("add");
let subtractButton = document.getElementById("subtract");
let multiplyButton = document.getElementById("multiply");
let divideButton = document.getElementById("divide");
let changeSignButton = document.getElementById("changeSign");
let equalsButton = document.getElementById("equals");
let decimalButton = document.getElementById("decimal");
let percentButton = document.getElementById("percent");
let numberButtons = document.querySelectorAll(`button[data-num^='num']`);

for (num of numberButtons) {
  num.addEventListener("click", (e) => {
    getNumber(e);
  });
}

clearButton.addEventListener("click", clear);
changeSignButton.addEventListener("click", changeSign);

addButton.addEventListener("click", () => {
  equationArray.push(parseFloat(display.textContent));
  assignValues(equationArray);
  equationArray.push("+");
  catchErrors();
  numberString = "";
});

subtractButton.addEventListener("click", () => {
  equationArray.push(parseFloat(display.textContent));
  assignValues(equationArray);
  equationArray.push("-");
  catchErrors();
  numberString = "";
});

multiplyButton.addEventListener("click", () => {
  equationArray.push(parseFloat(display.textContent));
  assignValues(equationArray);
  equationArray.push("x");
  catchErrors();
  numberString = "";
});

divideButton.addEventListener("click", () => {
  equationArray.push(parseFloat(display.textContent));
  assignValues(equationArray);
  equationArray.push("/");
  catchErrors();
  numberString = "";
});

equalsButton.addEventListener("click", () => {
  equationArray.push(parseFloat(display.textContent));

  number1 = equationArray.shift();
  operator = equationArray.shift();
  number2 = equationArray.shift();
  let total = operate(operator, number1, number2);
  display.textContent = Number(total.toFixed(6));
  if (operator == "/" && number2 == 0) {
    display.textContent = "Cannot compute / 0";
  }
  numberString = total;
});

decimalButton.addEventListener("click", () => {
  numberString += ".";
  display.textContent = numberString;
});

percentButton.addEventListener("click", () => {
  numberString = numberString / 100;
  display.textContent = numberString;
});
