/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valor
são copiados
independentes

Referência (mutável) - array, object, function - Passados por referência
a = 2;
b = a;
pega o mesmo valor de a, não muda
dependentes
*/

// primitivos
let nome = 'Costa'; //o conteúdo muda e não o nome(dado) da variável
nome = 'sta';
console.log(nome);

// imutável
let apelido = 'Dani';
apelido[0] = 'y';
console.log(apelido[3]);

let a = 'A';
let b = a; // cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);

//Referência
let y = [1, 2, 3];
let z = y;
console.log(y, z);

y.push(4);
console.log(y, z);

z.pop();
console.log(y, z);