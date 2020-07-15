/*const array = [1, 2, 3];
array.push(4);
array[0] = 0;
console.log(array);*/

const pessoa = {
    nome: 'Dani',
    sobrenome: 'Costa',
    idade: 29
};

console.log(pessoa.nome, pessoa.sobrenome, pessoa.idade);

//por function
function criaPessoa (nome, sobrenome, idade) {
    return {
        /*nome: nome,
        sobrenome: sobrenome,
        idade: idade,*/

        nome, sobrenome, idade
    };
}
//                         argumento
const pessoa1 = criaPessoa('Daniele', 'Costa', 29);
const pessoa2 = criaPessoa('Thor', 'Dog', 6);
const pessoa3 = criaPessoa('Bigodinho', 'Cabriola', 1);
const pessoa4 = criaPessoa('Dani', 'Costa', 29);
console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);
console.log(pessoa3.nome, pessoa3.sobrenome, pessoa3.idade);
console.log(pessoa4.nome, pessoa4.sobrenome, pessoa4.idade);

const people1 = {
    nome: 'Daniele',
    sobrenome: 'Costa',
    idade: 25,
    
    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade atual é ${this.idade}.`)
    },

  incrementaIdade() {
      this.idade++;
  }
};

people1.fala();
people1.incrementaIdade();
people1.fala();