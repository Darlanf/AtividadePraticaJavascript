// 7. Escreva um algoritmo que armazene o número total de eleitores de um município, o número de votos brancos, nulos e válidos. 
// Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. 
// O algoritmo deve fazer uma validação para que as porcentagens dos votos armazenados 
// (brancos, nulos e válidos) respeitem o limite do número total de eleitores, ou seja, 
// garantir que a soma dos votos brancos, nulos e válidos não seja maior que o número total de eleitores.

const vBrancos = Number(prompt("Quantos foram os votos em branco? "));
const vNulos = Number(prompt("Quantos foram os votos nulos? "));
const vValidos = Number(prompt("Quantos foram os votos válidos? "));
const vEleitores = vBrancos + vNulos + vValidos;

let perValidos = (vValidos/vEleitores)*100;
let perNulos = (vNulos/vEleitores)*100;
let perBrancos = (vBrancos/vEleitores)*100;

if (vEleitores >= perBrancos + perNulos + perValidos) {
    document.write(`O percentual de votos válidos foi de ${perValidos.toFixed(2)}% <br>`);
    document.write(`O percentual de votos nulos foi de ${perNulos.toFixed(2)}% <br>`);
    document.write(`O percentual de votos em branco foi de ${perBrancos.toFixed(2)}%`);
} else {
    alert(`FRAUDE!!`);
}
