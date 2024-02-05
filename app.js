const llavesEncriptar = ["e", "i", "a", "o", "u"];
const llavesDesencriptar = ["enter", "imes", "ai", "ober", "ufat"]
const textEntrada = document.getElementById('text-entrada');
const textSalida = document.getElementById('text-salida');
const botonEncriptar = document.getElementById('encriptar');
const botonDesencriptar = document.getElementById('desencriptar');
const botonCopiar = document.getElementById('copiar');

botonEncriptar.onclick = encriptar;
botonDesencriptar.addEventListener('click',desencriptar);



function minuscula() {
    let text = textEntrada.value.toLowerCase();
    let regexAcentos = /[áéíóú]/g;
    let vocales = [['á', 'a'], ['é', 'e'], ['í', 'i'], ['ó', 'o'], ['ú', 'u']];
    let regecSimbolos = /[^a-z0-9\s]/g;
    text = text.replace(regexAcentos, function (valor) {
        for (let i = 0; i < vocales.length; i++) {
            if (valor === vocales[i][0]) {
                return vocales[i][1];
            }
        }
    })
    text = text.replace(regecSimbolos, "");
    textEntrada.value = text;
    console.log(textEntrada.value)
}

function limpiarTexto(elemento) {
    let valorTexto = elemento.value = "";
};

function encriptar() {
    let text = textEntrada.value;
    text = text.replace(/[eiaou]/g, function (valor) {
        for (let i = 0; i < llavesEncriptar.length; i++) {
            if (valor === llavesEncriptar[i]) {
                return llavesDesencriptar[i]
            }
        }
    })
    textSalida.value = text;
    limpiarTexto(textEntrada)
};
function desencriptar() {
    let text = textEntrada.value;
    for (let i = 0; i < llavesDesencriptar.length; i++) {
        text = text.replace(llavesDesencriptar[i], llavesEncriptar[i])
    }
    textSalida.value = text;
    limpiarTexto(textEntrada)
}

function copiar() {
    botonCopiar.addEventListener("click", writeClipboardText);
    async function writeClipboardText() {
        try {
            let text = textSalida.value;
            await navigator.clipboard.writeText(text);
            limpiarTexto(textSalida)
        } catch (error) {
            console.error(error.message);
        }
    }

}

copiar();