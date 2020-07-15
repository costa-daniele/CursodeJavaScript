// ECMA script ---> padronização JavaScript

const nome = "Daniele";
const idade = "29";
const peso = "46";
const altura = "1.8";
let indiceMassaCorporal = (peso / (altura * 2));
let anoNascimento = (2020 - idade);

console.log(nome,"tem",idade,"anos, pesa",peso,"quilos");
console.log("tem",altura,"de altura e seu IMC é:",indiceMassaCorporal);
// template strings
console.log("Ano de nascimento", anoNascimento);
console.log(`tem ${altura} de altura e seu IMC é ${indiceMassaCorporal}`);


