
//               012345
let aspas = "Um \"texto\"";
let barraEscape = "\texto";
let barraInvertida = "\\texto"

console.log(aspas);
console.log(barraEscape);

//verifica a posição da letra
console.log(barraInvertida[0]);
console.log(barraInvertida.charAt(1));

//código tabela ASCII (código binário)
console.log(barraInvertida.charCodeAt(2));

//formas de concatenar
console.log(aspas.concat(' a mais'));
console.log(aspas + ' a mais');
console.log(`${aspas} a mais.`);

//posição da letra t
console.log(aspas.indexOf('texto'));
//posição última letra texto
console.log(aspas.lastIndexOf('o'));
console.log(aspas.lastIndexOf('m', 3));

console.log(aspas.match(/[a-z]/g));
console.log(aspas.match(/[a-z]/));

//procura a posição da letra
console.log(aspas.search(/[x]/));

//Troca de letras/palavras
console.log(aspas.replace('Um', 'Outro'));
console.log(aspas.replace(/t/, '#'));
console.log(aspas.replace(/t/g, '#'));

//tamanho das palavras na frase
console.log(aspas.length);

//início da palavra até o final
console.log(aspas.slice(4,9));

//negativos - lê o texto todo e apresenta o que eu pedi
console.log(aspas.slice(-7, -1));
console.log(aspas.substring(aspas.length - 7, aspas.length - 1));

// fatiar as  letras 
console.log(aspas.split('x'));
console.log(aspas.split(' ', 3));

console.log(aspas.toUpperCase());
console.log(aspas.toLowerCase());

// referência documentação
// https://www.w3school.com.js/
// MDN js
// ECMA scripts
