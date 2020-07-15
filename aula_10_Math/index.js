//para subir o texto alt + setas
let num = 9.573729;
//let num2 = Math.floor(num); //arredonda para baixo
//let num2 = Math.ceil(num);  //arredonda para cima
console.log(Math.ceil(num));

// arredonda para baixo a partir do 4 e para cima a partir do 5
let num2 = Math.round(num);
console.log(num2);

//verifica o maior
console.log(Math.max(1,2,3,4,5,-10, -50));
//verifica o menor
console.log(Math.min(1,2,3,4,5,-10, -50));

//número aleatório
console.log(Math.random());
//aleatório máximo e mínimo dado
const aleatorio = Math.random() *  (10 - 5) + 5;
console.log(aleatorio);
//aleatório máximo e mínimo dado arredondado
const aleatorio2 = Math.round(Math.random() *  (10 - 5) + 5);
console.log(aleatorio2);

//valor de PI
console.log(Math.PI);
//duas formas de usar a potência
console.log(Math.pow(2, 10));
console.log(2 ** 10);
//raiz quadrada
let numero = 9;
console.log(numero ** (1/2));

//Infinity
console.log(100 / 0);



