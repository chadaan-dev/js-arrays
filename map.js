const notas = [10, 9.5, 8, 7, 6];

// let notasAtualizadas = notas.map(function (nota) {
//     return nota + 1;
// })

let notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1);

console.log(notasAtualizadas);