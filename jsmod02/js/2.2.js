'use strict';
let pList = []
let parts = prompt("Kuinka monta osallistujaa?")
let partint = parseInt(parts)

for (let i = 1; i <= partint; i++)
  pList.push(prompt("Anna osallistujan nimi:"));
pList.sort()

let participantList = document.getElementById("list");

  for (let i = 0; i < pList.length; i++) {
    let listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(pList[i]));
    participantList.appendChild(listItem);
  }