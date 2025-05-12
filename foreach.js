const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// notas.forEach(function (notas) {
//     somaDasNotas += notas;
// })

notas.forEach(somaNotas);

function somaNotas (nota) {
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);

// forEach()  “função callback” executa o bloco mas não retorna nada. Undefined