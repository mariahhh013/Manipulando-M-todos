//encontrar o primeiro número par em um array
const num = [11, 7, 9, 4, 5, 8];
const primeiroPar = num.find(num => num % 2 === 0);

console.log(primeiroPar);
