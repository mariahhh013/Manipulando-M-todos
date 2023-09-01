//Verificando se há números negativos em um array
const num = [10, -5, 7, 3, -2];
const numeroNegativo = num.some(num => num < 0);

console.log(numeroNegativo);