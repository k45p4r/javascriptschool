let numList = []
while (numList.length < 5) {
  numList.push(prompt('Syötä numero:'));
}
for (let i = numList.length - 1; i >= 0; i--) {
  console.log(numList[i]);
}