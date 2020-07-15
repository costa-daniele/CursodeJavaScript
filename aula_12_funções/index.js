//executam ações

//       parâmetro()parênteses
function saudacao(nome){
    console.log(`Olá, ${nome}!`);
}

saudacao('Daniele');
saudacao('Maria');
saudacao('Felipe');

//retorna
function dia(nome){
    console.log(`Bom dia, ${nome}!`);
    return 'Você tá bem?';
}

const variavel = dia('Daniele');
console.log(variavel)


//retorna mais adequado
function noite(nome){
    return `Boa noite, ${nome}!`;
}

const variavel2 = noite('Daniele');
console.log(variavel2);

function soma(x, y){
    const resultado = x +y ;
    return resultado; //tudo que está abaixo de return não é executado
}

console.log(soma(3, 5));
console.log(soma(4,9));
console.log(soma(9,8));

const resultado = soma (2, 2);
console.log(resultado);

// declaração no parâmetro
function subtracao(a = 2, b = 1){
    const resul = a - b;
    return resul;
}
//modificada no parâmetro
const resul = subtracao(3, 3);
console.log(resul);

//criar função com variável
const raiz = function(n) { //quando usar atribuição terminar com ;
    return n ** 0.5;
};

console.log("Raiz de 9 =", raiz(9));
console.log("Raiz de 25 =", raiz(25));

//maneira moderna
/*const raiz2 = (n2) => {
    return n2 ** 0.5;
} */

const raiz2 = n2 => n2 ** 0.5;

console.log("Raiz de 9 =", raiz2(9));
console.log("Raiz de 25 =", raiz2(25));