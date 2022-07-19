// Módulos
import * as UI from './interfaz.js';

// Clase
class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI() {
        // URL de la 
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        // Mostrar Spinner
        UI.spinner()

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {
                // Quitar el spinner
                UI.quitarSpinner()

                // Verificar que si haya llegado un resultado
                if (resultado.lyrics) {
                    // Extraer la letra
                    const { lyrics } = resultado;

                    // Imprimirla en el HTML
                    UI.divResultado.textContent = lyrics;
                    UI.h2Resultado.textContent = `Letra de la canción: ${this.cancion} de ${this.artista}`;
                } else {
                    // Imprimir mensaje de error
                    UI.divMensajes.textContent = 'No pudimos encontrar esta canción, prueba buscando otra';
                    UI.divMensajes.classList.add('error');

                    // Quitar el mensaje de error luyego de 3s
                    setTimeout(() => {
                        UI.divMensajes.textContent = '';
                        UI.divMensajes.classList.remove('error');
                    }, 3000);
                }
            })
            .catch(error => console.error(error));
    }
}

// Exportar la clase API
export default API;
