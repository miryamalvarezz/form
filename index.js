const form = document.getElementById ("formulario");
const inputs = document.querySelectorAll ('#formulario');

const expresiones = {
    name: /^[A-Za-z]-$/,
    email: /^[A-Za-z0-9.#$]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/,
    password: /^[a-z0-5]{8,}-$/,
    password2: /^[a-z0-5]{8,}-$/
}

const campos = {
    name: false,
    email: false,
    password: false,
    password2: false,
}

const validarFormulatio =(e)=> {
   switch (e.target.name) {
    case "name":
            validarCampo (expresiones.name, e.target, 'name');
    break;
       
    case "email":
        validarCampo (expresiones.email, e.target, 'email');
    break;

    case "password":
        validarCampo (expresiones.password, e.target,'password');
        validarPassword2();
    break;

    case "password2":
        validarPassword2 ();
    break;
   }

}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('success-icon.svg');
		document.querySelector(`#grupo__${campo} i`).classList.remove('error-icon.svg');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('error-icon.svg');
		document.querySelector(`#grupo__${campo} i`).classList.remove('success-icon.svg');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}}

    const validarCheked = () => {
        const inputPassword1 = document.getElementById('password');
        const inputPassword2 = document.getElementById('cheked');
    
        if(inputPassword1.value !== inputPassword2.value){
            document.getElementById(`grupo_password2`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`grupo_password2`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#grupo_password2 i`).classList.add('error-icon.svg');
            document.querySelector(`#grupo_password2 i`).classList.remove('success-icon.svg');
            document.querySelector(`#grupo_password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
            campos['password'] = false;
        } else {
            document.getElementById(`grupo_password2`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`grupo_password2`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#grupo_password2 i`).classList.remove('error-icon');
            document.querySelector(`#grupo_password2 i`).classList.add('success-icon');
            document.querySelector(`#grupo_password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
            campos['password'] = true;
        }
    }

    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });
    
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        if(campos.n && campos.email && campos.password && campos.password2 ){
            formulario.reset();
    
            document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
                icono.classList.remove('formulario__grupo-correcto');
            });
        } 
    });
