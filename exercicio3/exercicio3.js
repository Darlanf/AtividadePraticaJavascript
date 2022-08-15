// 3. Crie um algoritmo que armazene três valores, para cada um dos lados de um triângulo: A, B e C. 
// Verifique se os lados fornecidos formam realmente um triângulo. 
// Se formar, deve mostrar no console o tipo de triângulo: isósceles, escaleno ou equilátero.
// a. Para verificar se os lados fornecidos formam um triângulo: A < B + C e B < A + C e C < A + B.
// b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B=C);
// c. Triângulo escaleno: possui todos os lados diferentes (A<>B e B<>C e A<>C);
// d. Triângulo equilátero: possui todos os lados iguais (A=B e B=C);

const ladoA = Number(prompt("Digite o primeiro número: "));
const ladoB = Number(prompt("Digite o segundo número: "));
const ladoC = Number(prompt("Digite o terceiro número: "));

if (ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB)) {
    alert("Você formou um triângulo!");
    if (ladoA == ladoB && ladoB == ladoC) {
        console.log("Triângulo equilátero");
    }else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {
        console.log("Triângulo escaleno");
    }else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
        console.log("Triângulo isósceles");
    }
}else {
    alert("Você não formou um triângulo");
}


