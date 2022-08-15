// 6. Escreva um algoritmo para ler uma temperatura em graus Celsius, 
// calcular e escrever o valor correspondente em graus Fahrenheit.

let celsius = Number(prompt("Quantos graus está fazendo? "))

let fahrenheit = (celsius * 1.8) + 32;
console.log(fahrenheit)
document.write(`A temperatura é de ${fahrenheit} ºF`);