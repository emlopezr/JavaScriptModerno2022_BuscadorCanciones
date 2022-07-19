// Módulos
import * as UI from './interfaz.js';
import API from './api.js';

// Eventos
UI.formularioBuscar.addEventListener('submit', buscarCancion);

// Funciones
function buscarCancion(e) {
    // Prevenir submit predetermindado
    e.preventDefault();

    // Obtener los valores de los campos del formulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    // Validar los inputs obligatorios -> Si hay uno vacío mostrar error
    if (artista === '' || cancion === '') {
        // Manipular Div de mensajes
        UI.divMensajes.textContent = 'Todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');

        // Después de 3 segundos "eliminar" el mensaje
        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
        }, 3000);

        // Parar la ejecución de la función
        return;
    }

    // Consultar el API -> Instanciar el objeto y ejecutar método
    const busqueda = new API(artista, cancion)
    busqueda.consultarAPI();
}