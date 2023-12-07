//frase = frase a ser dita || tempo = tempo até a frase ser dita
function falaFrase(frase, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof frase !== 'string') {
            reject('Dado passado Incompativél')
        };

        setTimeout(() => {
            resolve(frase);
        }, tempo);
    });
}

falaFrase('Instânciando conexão com Banco de Dados', 1600)
    .then(resposta => {
        console.log(resposta);
        return falaFrase('Conexão com o Banco de Dados Bem-Sucedida', 1600);
    })
    .then(resposta => {
        console.log(resposta);
        return falaFrase('Status: Conetado\nSegurânça: Nível 0(Segurânça Máxima)', 1600);
    })
    .then(resposta => {
        console.log(resposta)
    })
    .then(() => {
        console.log('Construa sua querry')
    })
    .catch(e => {
        console.log('ERRO: ', e)
    });

console.log('Exemplo de Função assíncrona brutaaaaa!!!!!')