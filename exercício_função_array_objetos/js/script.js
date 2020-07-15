function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    /*  form.onsubmit = function (evento){
          evento.preventDefault();
          console.log('Foi enviado');
      };
    */

    /*  let contador = 1;
      function recebeEventoForm (evento) {
          evento.preventDefault();
          console.log(`Form não foi enviado ${contador}`);
          contador++;
      }
   
      form.addEventListener('submit', recebeEventoForm);
   } */

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const cidade = form.querySelector('.cidade');
        const estado = form.querySelector('.estado');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            cidade: cidade.value,
            estado: estado.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${cidade.value} ${estado.value} </p>`
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();