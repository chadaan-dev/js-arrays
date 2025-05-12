const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara',
'Marjore', 'Leo'];

listaEstudantes.splice(1, 2, 'Rodrigo');
// splice() remove itens do array, primeiro é onde começa (1)
// segundo é a quantidades de itens a serem removidos (2)
// item que será adicionado (string)

console.log(listaEstudantes);