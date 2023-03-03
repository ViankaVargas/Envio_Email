document.addEventListener('DOMContentLoaded', function() {

    const email = {
        email: '',
        asunto: '', 
        mensaje: ''
    }

    //console.log(email);

    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    //Asignar elementos
    //blur se ejecuta cuando se abandona el input
    //input se dispara cada vez que estemos escribiendo //validación en tiempo real
    /*
    inputEmail.addEventListener('blur', function(e) {
        //console.log('Salí del input'); //confirma por consola que el blur funciona
        //console.log(e); //muestra información del evento 'blur'
        //console.log(e.target); //envía la información html del input hacia la consola
        console.log(e.target.value); //imprime en consola lo que se escribe en el input
    });
    */
    //inputEmail.addEventListener('blur', validar()); //con paréntesis manda a llamar de una vez la función
    inputEmail.addEventListener('input', validar); //Sin paréntesis funciona hasta que suceda el evento
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function(e){
        e.preventDefault(); //previene por default para decirle por código lo que se quiere hacer al presionar el btnReset
        resetFormulario();
    });

    function enviarEmail(e) {
        e.preventDefault();

        //console.log('enviando...');
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            resetFormulario();

            //Crear una alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10',
            'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Mensaje enviado correctamente';

            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            }, 3000);
        }, 3000); //3 segundos
    }
    /*
    function validar () {
        console.log('desde la función de validar');
    }
    */
   /*
    function validar (e) {
        console.log(e.target.value);
    }
    */
    function validar (e) {
        //console.log(e.target.id); //muestra en consola el id que usó el evento blur
        //console.log(e.target); //muestra en consola el input que tuvo el evento blur
        //console.log(e.target.parentElement.nextElementSibling);//muestra en la consola el div que contiene el input SIGUIENTE
        //console.log(e.target.parentElement); //muestra en la consola el div que contiene el input (el elemento padre)
        if(e.target.value.trim() === '') { //agregar el .trim para eliminar los espacios en blanco
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        //validarEmail(e.target.value); //muestra en consola false si no cumple con la expresión regular o true si cumple
       //console.log('después del if');

       if(e.target.id === 'email' && !validarEmail(e.target.value)) {
        mostrarAlerta('El email no es válido', e.target.parentElement);
        email[e.target.name] = '';
        comprobarEmail();
        return;
       }

       limpiarAlerta(e.target.parentElement);

       //Asignar los valores
       email[e.target.name] = e.target.value.trim().toLowerCase(); //asigna los valores ingresados en los input en el objeto email
       //console.log(email);

       //Comprobar el objeto de email
       comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia){
        //Comprueba si ya existe una alerta
        //const alerta = document.querySelector('.bg-red-600'); //busca la alerta en todo el documento
       //console.log(alerta); //Si ya existe una alerta, muestra en consola el P donde está la alerta 
        
       limpiarAlerta(referencia);
        
        //Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
        
        //Inyectar el error al formulario
        //formulario.appendChild(error); //appendChild agrega un nuevo elemento a lo que ya existe y lo muestra al final, antes del cierre del form
        
        //Inyectar el error al formulario
        referencia.appendChild(error); //muestra la alerta en el input correspondiente 
        //formulario.innerHTML = error; //innerHTML reemplaza todo el contenido borrando todo
        //formulario.innerHTML = error.innerHTML; //innerHTML reemplaza todo el contenido borrando todo y poniendo el mensaje enviado
    }

    function limpiarAlerta(referencia) {
        //console.log('Desde limpiar alerta');
        const alerta = referencia.querySelector('.bg-red-600'); //limita la búsqueda, buscando la alerta en el div donde se encuentra el input donde se est+a escribiendo
        if(alerta) {
            alerta.remove();//Elimina las múltiples alertas, eliminando la alerta previa
        }
    }

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        //console.log(resultado);
        return resultado;
    }

    function comprobarEmail(){
        console.log(email);
      //  console.log(Object.values(email).includes('')); //Toma todos los valores del objeto email y los asigna a un arreglo y verifica si al menos alguno de esos valores contiene un string vacío para retornar true
        if(Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    }

    function resetFormulario () {
        //Reiniciar el objeto
        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset();
        comprobarEmail();
    }
});