'use strict';

let numbers = [];
let input = prompt("Anna numero. (0 lopettaa)");
while (input !== "0") {
  numbers.push(parseFloat(input));
  input = prompt("Anna uusi numero. (0 lopettaa)");
}
numbers.sort((a, b) => b - a);
console.log(numbers);