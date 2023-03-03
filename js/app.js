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
        //console.log(e.target); //muestra en consola el input que tuvo el evento blur
        //console.log(e.target.parentElement.nextElementSibling);//muestra en la consola el div que contiene el input SIGUIENTE
        //console.log(e.target.parentElement); //muestra en la consola el div que contiene el input (el elemento padre)
        if(e.target.value.trim() === '') { //agregar el .trim para eliminar los espacios en blanco
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            return;
        }
       //console.log('después del if');
       limpiarAlerta(e.target.parentElement);
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
});