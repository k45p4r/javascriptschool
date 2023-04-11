'use strict';
let dogList = [];

for (let i = 0; i < 6; i++) {
  let dogName = prompt("Anna " + (i+1) + ". koiran nimi.");
  dogList.push(dogName);
}
dogList.sort().reverse();
let ul = document.getElementById("dogList");

for (let i = 0; i < dogList.length; i++) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(dogList[i]));
  ul.appendChild(li);
}
