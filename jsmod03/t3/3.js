'use strict';
const names = ['John', 'Paul', 'Jones'];
const div = document.getElementById('target');
for (let i = 0; i < names.length; i++) {
  div.innerHTML += `<li>${names[i]}</li>`;
}
