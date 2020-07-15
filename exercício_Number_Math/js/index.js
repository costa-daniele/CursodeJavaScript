//let numero = prompt("Digite um número: ");
//numero = Number(numero);
const numero = Number(prompt('Digite um número'));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p> Raiz quadrada: ${numero ** (1/2)} <br />
${numero} é inteiro: ${Number.isInteger(numero)} <br /> 
É NaN: ${Number.isNaN(numero)} <br />
Arredondado para baixo: ${Math.floor(numero)} <br />
Arredondado para cima: ${Math.ceil(numero)} <br /> 
Com duas casas decimais: ${numero.toFixed(2)}
</p>`;

texto.innerHTML += `<h2> Outra forma </h2>`

texto.innerHTML += `<p> Raiz quadrada: ${numero ** (1/2)} </p> `
texto.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)} </p>` 
texto.innerHTML += `<p> É NaN: ${Number.isNaN(numero)}`
texto.innerHTML += `<p> Arredondado para baixo: ${Math.floor(numero)} </p>`
texto.innerHTML += `<p> Arredondado para cima: ${Math.ceil(numero)} </p>`
texto.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)} </p>`




