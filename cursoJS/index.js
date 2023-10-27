function meuEscopo() {
    const form = document.querySelector('.form');
    const resutado = document.querySelector('.resultado');

    const pessoas = [];
    /*
    form.onsubmit = function(evento) {
        evento.preventDefault();
        alert(1)
        console.log('Foi enviado');
    };
    */
   
    let contador = 0;
    function recebeEventForm(evento) {
        
        evento.preventDefault();
        
        const nome = form.querySelector('.nomeInpt');
        const sobrenome = form.querySelector('.sobrenomeInpt');
        const peso = form.querySelector('.pesoInpt');
        const altura = form.querySelector('.alturaInpt');

        console.log( pessoas )
        


    }

   form.addEventListener('submit', recebeEventForm);
}    
meuEscopo();