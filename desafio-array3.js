// Escreva um código que utilize o loop for/of para iterar e imprimir
// cada elemento de um array.

function imprimeElementos(arr) {
    for (let elemento of arr) {
        console.log('1- ', elemento);
    }
}

const meuArray = ['a', 'b', 'c'];
imprimeElementos(meuArray);

// Crie uma função que receba uma array e imprima no console o número
// do índice e o elemento.

const listinha = ['Banana', 'Gatinho', 'Brócolis'];

function imprimeIndiceEElemento(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`2- Índice ${i}, elemento ${arr[i]}`);
    }
}

imprimeIndiceEElemento(listinha);

// Crie uma função que receba uma array de números inteiros
// e retorne a soma dos elementos.

const listaNumeros = [10, 11, 12, 10, 11, 12, 10, 11, 12, 10, 11, 12];

function soma(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = arr[i];
    }
    return total;
}

console.log('3- ', soma(listaNumeros));

// Crie uma função que receba uma array de números inteiros e retorne
// o menor valor e o maior valor da array, no seguinte formato:
// 'o menor número é X e o maior número é Y'.

const arrMenoresMaiores = [5, 37, 18, 59, 12, -5];

function imprimeMaioresEMenores(arr) {

    let maior = 0;
    let menor = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i]
        }
        if (arr[i] < menor) {
            menor = arr[i]
        }
    }
    return `O maior número é ${maior}, e o menor número ${menor}`;
}

console.log('4- ', imprimeMaioresEMenores(arrMenoresMaiores));

// Crie um programa que utilize um laço for para percorrer uma array
// const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console
// apenas os números pares contidos nesse array.

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
console.log('5- Números pares do array:');

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log('5- ',numeros[i]);
    }
}

// Crie um programa que calcule a média dos números presentes em um array
// utilizando um loop for.

const numeros1 = [10, 8, 6, 9, 7, 5];
let soma1 = 0;

for (let i = 0; i < numeros1.length; i++) {
    soma1 =+ numeros1[i];
}

const media = soma1 / numeros1.length;
console.log('6- Array:', numeros1);
console.log('6- Média dos números:', media);