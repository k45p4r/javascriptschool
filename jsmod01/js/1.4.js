'use strict';
let house;
const name = prompt("Anna nimesi:")
let house_calc = Math.random();
if (house_calc>=0.75) {
  house = 'Rohkelikko';
}
else if (house_calc<=0.25) {
  house = 'Luihuinen';
}
else if (house_calc<=0.5) {
  house = 'Korpinkynsi';
}
else {
  house = 'Puuskupuh';
}
document.querySelector('#house').innerHTML = name + ' olet, ' + house;