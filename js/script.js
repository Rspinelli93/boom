
let numeroUsuario = document.getElementById('userInput');
const divResultado = document.getElementById('result')
const divCountdown = document.getElementById('countdown')
const botonRestart = document.getElementById('restart')
let numeroOrdenador;

// --- Función principal --- //

async function bomba() {

    funcionRegresiva()

    const valorUsuario = await promesaUsuario();

    if (valorUsuario > 3) {
        divResultado.innerHTML = '<p>Input incorrecto. Por favor, introduce un número entre 1 y 3.</p>';
        return;
    }

    const valorOrdenador = await promesaOrdenador();


    if (valorUsuario == valorOrdenador) {
        divCountdown.innerHTML = '';
        divResultado.innerHTML = `
          <p class="green">Enhorabuena, ¡Has salvado el Mundo! &#128512</p>
          <p>Tu numero: ${valorUsuario}, Es igual al numero del Ordenador: ${valorOrdenador}!`;
    } else {
        divCountdown.innerHTML = '';
        divResultado.innerHTML = `
        <p class="red">No has podido salvar el Mundo &#128163</p>
        <p>Tu numero: ${valorUsuario}, No es igual al numero del Ordenador: ${valorOrdenador}!`;
    }
}

// --- Usuario --- //

const promesaUsuario = () => {
    return new Promise((resolve) => {
        const valor = numeroUsuario.value
        console.log('Input Usuario: ', valor)
        resolve(valor);
    });
};

// --- Ordenador --- //

const promesaOrdenador = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
         const numero = Math.floor(Math.random() * 3) + 1;
         console.log('Input ordenador: ' ,numero)
         resolve(numero);}, 6000)
    });
};

// --- Funcion Conuntdown --- //

let counter = 5;
let cuentaRegresiva;

function funcionRegresiva() {
    
    cuentaRegresiva = setInterval(() => {
    if (counter >= 0) {
        divCountdown.innerHTML = `<p>Cuenta atras: ${counter} Segundos</p>`;
        counter--;
    } else {
        clearInterval(cuentaRegresiva); 
    }
}, 1000)
}

// --- Eventos --- //

numeroUsuario.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        bomba();
    }
});

numeroUsuario.addEventListener('blur', () => {
    bomba();
});

botonRestart.addEventListener('click', () => {window.location.reload(true)})