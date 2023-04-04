'use strict';
const rollTimesStr = prompt("Kuinka monta kertaa haluat heittää noppaa?")
let rollTimes = parseInt(rollTimesStr)
let result = 0;
do {
  result += Math.floor(Math.random()*6)+ 1;
  rollTimes -= 1;
} while (rollTimes > 0)

document.querySelector('#sum').innerHTML = "Noppien summa on " + result;



