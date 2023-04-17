'use strict';

const div = document.querySelector('#target');
const t1 = document.createTextNode('First item');
const t2 = document.createTextNode('Second item');
const t3 = document.createTextNode('Third item');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
li1.appendChild(t1);
li2.appendChild(t2);
li3.appendChild(t3);
div.appendChild(li1);
div.appendChild(li2);
div.appendChild(li3);
li2.classList.add('my-item');