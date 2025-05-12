// Crie uma função que receba dois arrays e os concatene em um único array.

const supermercado = ['feijão', 'arroz', 'manteiga', 'café', 'tomate']; // Produtos.
const precos = [15, 22, 8, 30, 17]; // Valores.

const produtosEPrecos = supermercado.concat(precos);
console.log('Produtos com valores:', produtosEPrecos); // Produtos com valores.

// Crie um array chamado numeros contendo números de 1 a 10.
// Utilize o método slice para criar um novo array chamado parteNumeros,
// que contenha apenas os números de índice 3 a 7 de numeros.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parteNumeros = numeros.slice(3, 8);
console.log('Parte dos Números', parteNumeros);

// Dado o array frutas contendo frutas que desejamos comprar na feira:
// Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida,
// adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'] // Lista de frutas antes de alterar.
frutas.splice(2, 2, 'Kiwi', 'Pêssego'); // Excluindo 2 elementos, adicionando 2 elementos.
console.log('Todas as frutas:', frutas); // Lista de frutas após alterar.

// Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante.
// Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos
// pelos elementos de menuDeSobremesas.

const menuPrincipal = ['Pratos do dia', 'Bife a cavalo', 'Strogonoff', 'Frango assado', 'Macarronada']; // Comidas.
const menuDeSobremesas = ['Petit Gateau', 'Sorvetes', 'Torta de Limão', 'Torta Holandesa', 'Bolos']; // Sobremesas.

const menuCompleto = menuPrincipal.concat(menuDeSobremesas);
console.log('Aqui está o menu completo:', menuCompleto); // Cardápio completo.

// Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3
// com valores iniciando em 1 e aumentando em 1 a cada elemento.
// Dicas: comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;
// você pode resolver usando um for dentro de outro for.

const matriz = [];
const valorInicial = 1;

for (let i = 0; i < 3; i++) {
    let linha = [];
    for (let j = 0; j < 3; j++) {
        linha.push(valorInicial);
    }
    matriz.push(linha);
}

console.log('Matriz de duas dimensões');
console.log(matriz);
matriz.forEach(row => console.log(row));

// Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.

console.log('Elemento na segunda linha e terceira coluna', matriz[1][2]);

// Adicione um novo elemento (por exemplo, 15) na terceira linha e segunda coluna da lista bidimensional matriz
// criada anteriormente.

matriz[2][1] = 15;
console.log('Matriz após alterar', matriz);
