'use strict';

let numbers = [];

let input = prompt("Anna numero:");
while (input !== null) {
  let number = parseInt(input);


  if (numbers.includes(number)) {
    document.querySelector('#attention').innerHTML = 'Numero on jo annettu'
    numbers.sort((a, b) => a - b);
    console.log(numbers);
    break;
  }
  numbers.push(number);

  input = prompt("Anna numero:");
}