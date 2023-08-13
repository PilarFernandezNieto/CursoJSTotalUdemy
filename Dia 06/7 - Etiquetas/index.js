let miArray = [
  [2, 4, 5],
  [3, 0, 6],
  [9, 4, 7],
];

function testLoop() {
  for (let array of miArray) {
    for (let numero of array) {
      console.log(numero);
      if (numero === 0) {
      }
    }
  }
}
