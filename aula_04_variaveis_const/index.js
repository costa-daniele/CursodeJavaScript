//variável
let nome = 'Daniele';

console.log(nome, 'nasceu em 1991');
console.log('Em 2020', nome,'conseguiu um emprego.');

//declaração de variável
let name;
name = 'Dani';
console.log("apelido =", name);

/*
Regras let e const

não podemos criar variáveis com palavras reservadas
variáveis precisam ter nomes significatvos
não pode começar o nome de uma variável com número
não pode conter espaços ou traços
Utilizar camelCase
Case-sensitive
Não podemos redeclarar variável com let
*/

// const não podem ser modficada, ao contrário do let
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log("tipo do arquivo = ", typeof primeiroNumero);
console.log("5 * 10 =",resultado, ",","50 * 2 =",resultadoDuplicado);

//concatenar

const terceiroNumero = "3";
const quartoNumero = 5;

console.log("concatenação 3 e 5 =",terceiroNumero + quartoNumero);

// const mutável
const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]
 