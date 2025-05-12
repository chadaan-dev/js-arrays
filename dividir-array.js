const listaEstudantes = ['Jesus', 'Maria Madalena', 'Simão Pedro', 'Matheus', 'João', 'Judas', 'Ramah', 'Filipe', 'Eden', 'Yussif', 'Zebedeu', 'André', 'João', 'Thomas', 'Simão Z', 'Thiago', 'Tadeu', 'Gaius', 'Tamar', 'Thiaguinho']

const sala1 = listaEstudantes.slice(0, listaEstudantes.length/2); // metodo slice() divide um array
const sala2 = listaEstudantes.slice(listaEstudantes.length/2);

console.log(sala1);
console.log(sala2);