'use strict';
let primestat = false
let isPrimeStr = prompt("Syötä numero:")
let num = parseInt(isPrimeStr);

if (num === 1) {
  primestat = false;
} else if (num === 2) {
  primestat = true;
} else {
    let i = 3
    while (i < (num - 1)) {
      if (num % i === 0) {
        primestat = false
        break
      }
    }
}
if (primestat === true){
  document.querySelector('#prime').innerHTML = isPrimeStr + " on alkuluku."
}
else {
  document.querySelector('#prime').innerHTML = isPrimeStr + " ei ole alkuluku."
}