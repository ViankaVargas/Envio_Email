document.addEventListener('DOMContentLoaded', function() {
    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

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
    inputEmail.addEventListener('blur', validar); //Sin paréntesis funciona hasta que suceda el evento
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
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
        if(e.target.value.trim() === '') { //agregar el .trim para eliminar los espacios en blanco
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`);
        }else {
            console.log('Sí hay algo');
        }
    }

    function mostrarAlerta(mensaje){
        //Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
        
        //Inyectar el error al formulario
        formulario.appendChild(error); //appendChild agrega un nuevo elemento a lo que ya existe y lo muestra al final, antes del cierre del form
        //formulario.innerHTML = error; //innerHTML reemplaza todo el contenido borrando todo
        //formulario.innerHTML = error.innerHTML; //innerHTML reemplaza todo el contenido borrando todo y poniendo el mensaje enviado
    }
});