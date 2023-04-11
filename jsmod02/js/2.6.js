'use strict';
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

let rolls = document.getElementById("rolls");

let roll = rollDice();
while (roll !== 6) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(`Heitit ${roll}...`));
  rolls.appendChild(li);
  roll = rollDice();
}

let li = document.createElement("li");
li.appendChild(document.createTextNode("Heitit 6!"));
rolls.appendChild(li);