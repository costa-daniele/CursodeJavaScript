/*
&& -> AND -> false "o valor mesmo"
|| -> OR -> true && false -> vai retornar o valor verdadeiro

FALSY

false
0
"" '' ``
null / undefined
NaN

*/

// AND
console.log('Dani' && 'Costa');
console.log('Luiz' && undefined && 'Costa');
console.log('Luiz' && '' && 'Costa');

function falaOi () {
    return 'Oi';
}

const vaiExecutar = 'Dani';

console.log(vaiExecutar && falaOi());

//OR

console.log(0 || false || null || 'Dani' || true);

const corUsuaro = 'vermelho';
const corPadrao = corUsuaro || 'preto';
console.log(corPadrao);