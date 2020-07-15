//lista/coleções

//acessando nomes
//                 0       1       2
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);
console.log(alunos[2]);

//mudar, adicionar array;
alunos[0] = 'Eduardo';
alunos[3] = 'Luiza';
console.log(alunos);

//adiconar vários nomes no fim
alunos[alunos.length] = 'Luana';
alunos[alunos.length] = 'Fernanda';
console.log(alunos);

//função para adicionar vários nomes no fim
alunos.push('Daniele');
alunos.push('Otávio');
console.log(alunos); 

//função para adicionar vários nomes no começo
alunos.unshift('Daniele');
alunos.unshift('Otávio');
console.log(alunos);

//remove o nome do fim
alunos.pop();
console.log(alunos);

//remove o nome do começo
alunos.shift();
console.log(alunos);

//para apagar nomes
delete alunos[1];
console.log(alunos[1]);

//coisas que não existem - undefined
console.log(alunos[30]);

//para fatiar
console.log(alunos.slice(0, 4));

//verificar se é um array
console.log(alunos instanceof Array);