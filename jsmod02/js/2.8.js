'use strict';

function concat(strArray) {
  let result = "";
  for (let i = 0; i < strArray.length; i++) {
    result += strArray[i];
  }
  return result;
}

let array = ["Kaspar", "Harri", "Swag", "Moro"];
let concatenated = concat(array);
document.querySelector("#lista").innerHTML = concatenated;