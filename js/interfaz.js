// Selectores
export const
    formularioBuscar = document.querySelector('#formulario-buscar'),
    divBuscar = document.querySelector('#buscar'),
    divMensajes = document.querySelector('#mensajes'),
    divResultado = document.querySelector('#resultado'),
    h2Resultado = document.querySelector('.letra-resultado h2');

export function spinner() {
    // Spinner tomado de https://tobiasahlin.com/spinkit/
    const divSpinner = document.createElement('DIV');
    divSpinner.classList.add('sk-fading-circle')
    divSpinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
    `;

    // Insertar en el HTML
    divResultado.appendChild(divSpinner);
}

export function quitarSpinner() {
    while (divResultado.firstChild) {
        divResultado.removeChild(divResultado.firstChild);
    }
}