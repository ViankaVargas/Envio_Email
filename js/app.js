document.addEventListener('DOMContentLoaded', function() {
    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

    //Asignar elementos
    //blur se ejecuta cuando se abandona el input
    //input se dispara cada vez que estemos escribiendo //validación en tiempo real
    inputEmail.addEventListener('blur', function(e) {
        //console.log('Salí del input'); //confirma por consola que el blur funciona
        //console.log(e); //muestra información del evento 'blur'
        //console.log(e.target); //envía la información html del input hacia la consola
        console.log(e.target.value); //imprime en consola lo que se escribe en el input
    });
});