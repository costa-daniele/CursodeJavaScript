let num = 1;
let num2 = 2.5;
console.log("1 + 2.5 = ", num + num2);
console.log("1 + 1 = ", num + num, " /  2.5 + 2.5 = ", num2 + num2);
//converter para string
//num = num.toString();
console.log(num.toString() + num2);

let num3 = 10;
//representação binária
console.log(num3.toString(2));

//arredondar número
let num4 = 10.9976676868;
console.log(num4.toFixed(2));

//verificar se número é inteiro
console.log(Number.isInteger(num4));

//verifica se a conta deu errado NaN - Not a Number
let temp = num3 * 'Olá';
console.log(Number.isNaN(temp));

// IEEE 754-2008
//imprecisão

let numero = 0.7;
let numero2 = 0.1;
console.log(numero + numero2);

numero += numero2; //0.8
numero += numero2; //0.9
numero += numero2; //1.0
numero += numero2; //1.1
numero += numero2; //1.2
numero += numero2; //1.3
numero += numero2; //1.4
numero += numero2; //1.5
numero += numero2; //1.6
numero += numero2; //1.7
numero += numero2; //1.8
numero += numero2; //1.9
numero += numero2; //2.0
console.log(numero);

//buscando precisão
//numero = numero.toFixed(2);
numero = Number(numero.toFixed(2));
console.log(numero);
console.log(Number.isInteger(numero));

//buscando precisão fazendo contas
let num10 = 0.7;
let num11 = 0.1;

num10 = ((num10 * 100) + (num11 * 100)) / 100; //0.8
num10 = ((num10 * 100) + (num11 * 100)) / 100; //0.9
num10 = ((num10 * 100) + (num11 * 100)) / 100; //1.0

console.log(num10);
console.log(Number.isInteger(num10));
