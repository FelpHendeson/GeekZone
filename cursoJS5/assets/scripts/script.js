class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.events();
    }

    events() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const validFields = this.isValid();
    }

    isValid() {
        let valid = true;


        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }
        for (let field of this.formulario.querySelectorAll('.validar')) {
            const label = field.previousElementSibling.innerHTML;
            if(!field.value) {
                this.createError(field, `O campo ${label} não pode estar vazio`);
                valid = false;
            }
        }
    }

    createError(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
        
    }
}

const valida = new ValidaFormulario();