const clicks = [];
let validade;
const form = document.querySelector('#form');
form.addEventListener('submit', function (e) {

    e.preventDefault();

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso || !altura) {
        validade = false
        setResultado('Peso ou Altura Inválidos', validade);
        return;
    };

    const imc = getIMC(peso, altura);
    const nivelIMC = getNivelIMC(imc);

    validade = true
    const msg = `Seu IMC é ${imc} considerado ${nivelIMC}.`;

    console.log(imc);
    console.log(nivelIMC);

    setResultado(msg, validade);
    const data = new Date();

    const log = {
        "peso": peso,
        "altura": altura,
        "validade": validade,
        "resposta": msg,
        "data": data.toString(),
        "IMC": imc,
        "NivelIMC": nivelIMC
    }

    clicks.push(log);

    console.log(clicks)

    setLog(clicks);
});

function getNivelIMC(imc) {
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) {
        return nivel[5]
    } else if (imc >= 34.9) {
        return nivel[4]
    } else if (imc >= 29.9) {
        return nivel[3]
    } else if (imc >= 24.9) {
        return nivel[2]
    } else if (imc >= 18.5) {
        return nivel[1]
    } else if (imc < 18.5) {
        return nivel[0]
    }
};

function getIMC(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
};

function criaP() {
    const p = document.createElement('p');
    return p;
};

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';


    const p = criaP();
    if (isValid === false) {
        p.classList.add('paragrafo-resultado-negativo');
    } else {
        p.classList.add('paragrafo-resultado-positivo');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
};


function setLog(clicks) {
    let data;
    let peso;
    let altura;
    let resposta;
    const log = document.querySelector('#log');
    log.innerHTML = '';

    const p = criaP();
    p.classList.add('log');
    clicks.forEach(element => {
        data = element.data;
    });
    p.innerHTML = data;
    log.appendChild(p);

    const p1 = criaP();
    p1.classList.add('log');
    clicks.forEach(element => {
        peso = element.peso;
    });
    p1.innerHTML = peso;
    log.appendChild(p1);

    const p2 = criaP();
    p2.classList.add('log');
    clicks.forEach(element => {
        altura = element.altura;
    });
    p2.innerHTML = altura;
    log.appendChild(p2);

    const p3 = criaP();
    p3.classList.add('log');
    clicks.forEach(element => {
        resposta = element.resposta;
    });
    p3.innerHTML = resposta;
    log.appendChild(p3);
}