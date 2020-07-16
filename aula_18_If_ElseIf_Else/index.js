// if pode ser executado sozinho
// else if precisa de um if e podem existir vários
// só posso ter um else
// podemos usar condições sem usar o else if, somente com if(){}else(){}


const hora = 75;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if  (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
}  else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Olá');
}

