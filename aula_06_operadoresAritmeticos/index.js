/*

Aritméticos

    + Adição / Concatenação
    - Subtração
    * Multiplicação
    / Divisão
    ** Potência
    % Resto da divisão

Ordem de Precedência

()
**
* / %
+ -
*/

const num1 = 7;
const num2 = 10;
console.log("7 + 10 =", num1 + num2);
console.log("7 - 10 =", num1 - num2);
console.log("7 * 10 =", num1 * num2);
console.log("7 / 10 =", num1 / num2);

//pós Incremento
//pós Decremento
let contador = 10;
console.log(contador++);
console.log(contador);
console.log(contador--);
console.log(contador);

//pré Incremento
//pós Decremento
let contadorDois = 20;
console.log(++contadorDois);
console.log(--contadorDois);

//boa prática
let contadorTres = 30;
contadorTres ++;
console.log(contadorTres);

const passo = 5;
let contadorQuatro = 0;
//operadores de atribuição
//contador += passo;
contadorQuatro = contadorQuatro + passo;
console.log(contadorQuatro);
contadorQuatro = contadorQuatro + passo;
console.log(contadorQuatro);

//NaN - Not a number
//parseInt('5'), parseFloat, Number;

const numero = 10;
const numero4 = (5);
const numero1 = parseInt ('5');
const numero2 = parseFloat ('5.2');
const numero3 = Number ('5.8');


console.log(numero + numero4);
console.log(numero + numero1);
console.log(numero + numero2);
console.log(numero + numero3);