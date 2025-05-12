// Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos.
// Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7).
// Imprima no console o array e também a informação de comprimento do array.

const arrayEsparso = [];

arrayEsparso[1] = 'Elemnto 1';
arrayEsparso[3] = 'Elemnto 3';
arrayEsparso[7] = 'Elemnto 7';

console.log(arrayEsparso);
console.log(arrayEsparso.length);

// Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array.
// Em seguida, exiba o array antes e depois da alteração.

let meuArray = [10, 20, 30, 40, 50];
console.log('Meu array antes de alterar', meuArray);

meuArray[0] = 1;
console.log('Meu array após alterar', meuArray);

// Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push().
// Imprima no console os itens presentes no array para verificar se os números foram adicionados.
// Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual.
// Imprima no console o array atualizado para verificar a mudança.

let meuArray1 =[];

meuArray1.push(5);
meuArray1.push(10);
meuArray1.push(15);
console.log('Verificando se os números foram adicionados', meuArray1);

meuArray1[0] = meuArray1[0] * 2;
console.log('Verificando se os números foram removidos', meuArray1);

// Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push().
// Adicione três números inteiros ao array e, em seguida, exiba o array resultante.

let meuArray2 = [];

meuArray2.push(11);
meuArray2.push(22);
meuArray2.push(33);
console.log('Array resultante', meuArray2);

// Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica.
// Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console.
// Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.

let clinica = [];

clinica.push('Cachorro');
clinica.push('Gato');
clinica.push('Coelho');
console.log('Lista de animais após chegaram a clinica', clinica);

clinica.pop('Cachorro');
clinica.pop('Gato');
clinica.pop('Coelho');
console.log('Lista de animais após sairem da clinica', clinica);