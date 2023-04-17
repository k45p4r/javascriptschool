'use strict';

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operation = document.getElementById("operation");
const start = document.getElementById("start");
const result = document.getElementById("result");


start.addEventListener("click", function() {
  const val1 = Number(num1.value);
  const val2 = Number(num2.value);
  switch (operation.value) {
    case "add":
      result.textContent = val1 + val2;
      break;
    case "sub":
      result.textContent = val1 - val2;
      break;
    case "multi":
      result.textContent = val1 * val2;
      break;
    case "div":
      result.textContent = val1 / val2;
      break;
    default:
      result.textContent = "Invalid operation selected";
  }
});