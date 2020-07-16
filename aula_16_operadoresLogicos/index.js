/*
Operadores Lógicos

&& -> AND -> E -> todas as expressões precisam ser verdadeiras para retornar verdadeiro
|| -> OR -> OU
! -> NOT -> NÃO
*/

console.log(true && true && true && false);
const expressaoAnd = true && true && true;
console.log(expressaoAnd);

const expressaoOr = true || false;
console.log(expressaoOr);

const expressaoNot = !true;
console.log(expressaoNot)

//verificação de usuário e senha
const usuario = "Daniele Costa";
const senha = "123456";
const logar = usuario === "Daniele Costa" && senha === "123456";

console.log(logar);
