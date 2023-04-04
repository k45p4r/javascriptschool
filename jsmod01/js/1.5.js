

const yearstr = prompt("Anna vuosi:")
const year = parseInt(yearstr)

if (year % 100 === 0 && year % 400 === 0 || year % 4 === 0) {
  document.querySelector('#year').innerHTML = yearstr + ' on karkausvuosi.';
}
else {
  document.querySelector('#year').innerHTML = yearstr + ' ei ole karkausvuosi.';
}