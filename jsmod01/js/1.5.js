'use strict';
let yearfax = 0
const yearstr = prompt("Anna vuosi:")
const year = parseInt(yearstr)

if (year % 400 === 0 && year % 100 === 0)
  yearfax += 1;
else if (year % 4 === 0)
  yearfax += 1;


if (yearfax < 0)
  document.querySelector('#year').innerHTML = year + ' on karkausvuosi.';
else
  document.querySelector('#year').innerHTML = year + ' ei ole karkausvuosi.';

