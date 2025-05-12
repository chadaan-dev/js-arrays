// Faça um função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.
//(Dica: é possível usar o spread operator diretamente em parâmetro de função para "espelhar" seu conteúdo, por exemplo function funcaoExemplo(...params))

function concatArrays(...arrays) {
    return [].concat(...arrays); // Spread Operator para concatenar os arrays.
}

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
const arraysConcatenados = concatArrays(arr1, arr2, arr3);

console.log('1-', arraysConcatenados);

// Crue um array de números chamado valores. Depois, escreva um programa que some todos os elementos deste array utilizando o método reduce.

const valores = [10, 20, 30, 40, 50];
const soma = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log('2- Soma dos valores:', soma);

// Considere duas listas de cores: const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'] e const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']
// Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];
const coresUnicas = [... new Set([...coresLista1, ...coresLista2])];

console.log('3- Cores sem repetir:', coresUnicas);

// Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

function filtraNumerosPares(arr) {
    return arr.filter(num => num % 2 === 0); // Filtra apenas os números pares.
}

const numArray = [1, 2, 3, 4, 5, 6];
const listaNumerosPares = filtraNumerosPares(numArray);

console.log('4-', listaNumerosPares);

// Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

const listaNumeros = [3, 6, 9, 4, 12, 2, 7];

function filtraNumeros(arr) {
    return arr.filter(num => num % 3 === 0 && num > 5); // Filtra números múltiplos de 3 e maiores que 5.
}

const numerosFiltrados = filtraNumeros(listaNumeros);
console.log('5-', numerosFiltrados);

// Crie uma função que receba um array de números e retorne a soma de todos os elmentos.

function somaElementosDoArray(arr) {
    return arr.reduce((acumulador1, valorAtual1) => acumulador1 + valorAtual1, 0); // Soma os elementos do array.
}

const listaNumeros1 = [1, 2, 3, 4, 5];
const somaTotal = somaElementosDoArray(listaNumeros1);
console.log('5-', somaTotal);