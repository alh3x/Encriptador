const llavesEncriptar = ["e", "i", "a", "o", "u"];
const llavesDesencriptar = ["enter", "imes", "ai", "ober", "ufat"];
const textEntrada = document.getElementById('text-entrada');
const textSalida = document.getElementById('text-salida');
const botonEncriptar = document.getElementById('encriptar');
const botonDesencriptar = document.getElementById('desencriptar');
const botonCopiar = document.getElementById('copiar');

botonEncriptar.onclick = encriptar;
botonDesencriptar.addEventListener('click',desencriptar);
copiar();

//niega mayusculas, vocales con acento y cualquier caracter no alfanumerico.
function minuscula() {
    let text = textEntrada.value.toLowerCase();
    let regexAcentos = /[áéíóú]/g;
    let vocales = [['á', 'a'], ['é', 'e'], ['í', 'i'], ['ó', 'o'], ['ú', 'u']];
    let regecSimbolos = /[^a-z\s]/g;
    text = text.replace(regexAcentos, function (valor) {
        for (let i = 0; i < vocales.length; i++) {
            if (valor === vocales[i][0]) {
                return vocales[i][1];
            }
        }
    })
    text = text.replace(regecSimbolos, "");
    textEntrada.value = text;
    
}
//vacia los textarea juego de hacer su funcion
function limpiarTexto(elemento) {
    let valorTexto = elemento.value = "";
};
//encriptador utilizando las llaves,si eltexto a encriptar son solo espacios sin ningun caracter vacia el textarea
function encriptar() {
    let text = textEntrada.value;
    text = text.trim().replace(/[eiaou]/g, function (valor) {
        for (let i = 0; i < llavesEncriptar.length; i++) {
            if (valor === llavesEncriptar[i]) {
                return llavesDesencriptar[i]
            }
        }
    })
    if(text!=""){
        textSalida.value = text;
        botonCopiar.removeAttribute('disabled');
        cover();
        coverTablet()
    }
    limpiarTexto(textEntrada);
};
//desencriptador utilizando las llaves,si el texto a desencriptar son solo espacios sin ningun caracter vacia el textarea
function desencriptar() {
    let text = textEntrada.value;
    let regex = /enter|imes|ai|ober|ufat/g;

    text = text.trim().replace(regex, function (valor) {
        for (let i = 0; i < llavesDesencriptar.length; i++) {
            if (valor === llavesDesencriptar[i]) {
                return llavesEncriptar[i]
            }
        }
    })

    if(text!=""){
        textSalida.value = text;
        botonCopiar.removeAttribute('disabled');
        cover();
        coverTablet()
    }
    limpiarTexto(textEntrada)
}
//copia el texto que contiene el textarea de salida utilizando metodos Clipboard(documentacion de mozilla en ingles)
function copiar() {
    botonCopiar.setAttribute('disabled', 'true');
    botonCopiar.addEventListener("click", writeClipboardText);
    async function writeClipboardText() {
        try {
            let text = textSalida.value;
            await navigator.clipboard.writeText(text);
            limpiarTexto(textSalida)
            botonCopiar.setAttribute('disabled', 'true');            
        } catch (error) {
            console.error(error.message);
        }
    }

}
//funcion para quitar el contenedor cover, que oculta la salida del encriptador
function cover(){
    let cover = document.getElementById('cover');
    
    if(cover.style.display != 'none'){
        cover.style.display = 'none';
    }
}
function coverTablet() {
    let coverTablet = document.querySelector('.salida-encriptador');
    let style = window.getComputedStyle(coverTablet);
    let altura = style.getPropertyValue('height');
    if (altura == '150px'){
        coverTablet.style.height='auto';
    }
}
