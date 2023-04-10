'use strict';

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

let rolls = document.getElementById('rolls');

let sides = parseInt(prompt('Kuinka monta sivua nopassa?'));

let roll = rollDice(sides);
let maxRoll = sides;
do {
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(`Heitit ${roll}`));
  rolls.appendChild(li);
  roll = rollDice(sides);
} while (roll !== maxRoll);

let li = document.createElement('li');
li.appendChild(document.createTextNode(`Heitit ${maxRoll}!`));
rolls.appendChild(li);
