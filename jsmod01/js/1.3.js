'use strict';

const n1str = prompt("Anna numero:")
const n2str = prompt("Anna toinen numero:")
const n3str = prompt("Anna kolmas numero:")
const n1 = parseInt(n1str)
const n2 = parseInt(n2str)
const n3 = parseInt(n3str)

document.querySelector('#sum').innerHTML =  n1 + n2 + n3;
document.querySelector('#product').innerHTML =  n1 * n2 * n3;
document.querySelector('#avg').innerHTML = (n1 + n2 + n3) / 3;