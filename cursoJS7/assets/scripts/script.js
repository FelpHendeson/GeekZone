// seleciona a DIV da tela em que eu quero gerar spontaneamente o formulario
const btnFormLogin = document.querySelector('#btnFormLogin') ;
const btnFormRegistro = document.querySelector('#btnFormRegistro') ;
const divFormTeste = document.querySelector('.form-teste');

// Adiciona o disparo para surgimento do formulario espontaneamente ao botão
btnFormLogin.addEventListener('click', e => {
    const dadosForm = [
            {
                label: "Username or E-mail:",
                inptType: "text",
                inptClass: "inptLogin",
                inptId: "inptLogin",
                inptName: "inptLogin"
            },
            {
                label: "Password:",
                inptType: "password",
                inptClass: "inptPassword",
                inptId: "inptPassword",
                inptName: "inptPassword"
            }
        ];
    geraFormulario(dadosForm);
});

btnFormRegistro.addEventListener('click', e => {
    const dadosForm = [
        {
            label: "Username:",
            inptType: "text",
            inptClass: "inptUsername",
            inptId: "inptUsername",
            inptName: "inptUsername"
        },
        {
            label: "Email:",
            inptType: "email",
            inptClass: "inptEmail",
            inptId: "inptEmail",
            inptName: "inptEmail"
        },
        {
            label: "Password:",
            inptType: "password",
            inptClass: "inptPassword",
            inptId: "inptPassword",
            inptName: "inptPassword"
        },
        {
            label: "Confirm your password:",
            inptType: "password",
            inptClass: "inptConfirmPassword",
            inptId: "inptConfirmPassword",
            inptName: "inptConfirmPassword"
        },
    ]
    geraFormulario(dadosForm);
});

function geraFormulario(dadosForm) {
    for (let count = 0; count < dadosForm.length; count++) {
        // console.log(count)
        const label = document.createElement('label');
        label.setAttribute('for', dadosForm[count]['inptName'])
        label.innerText = dadosForm[count]['label'];
        divFormTeste.appendChild(label);

        const input = document.createElement('input');
        input.setAttribute('type', dadosForm[count]['inptType']);
        input.setAttribute('class', dadosForm[count]['inptClass']);
        input.setAttribute('id', dadosForm[count]['inptId']);
        input.setAttribute('name', dadosForm[count]['inptName']);
        divFormTeste.appendChild(input);
    }
    
}
