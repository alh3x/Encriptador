const llavesEncriptar = ["e","i","a","o","u"];
const llavesDesencriptar = ["enter","imes","ai","ober","ufat"]
const textEntrada = document.getElementById('text-entrada');
const textSalida = document.getElementById('text-salida');

function minuscula() {
    let text = textEntrada.value.toLowerCase();
    let regexAcentos = /[áéíóú]/g;
    let vocales= [['á','a'],['é','e'],['í','i'],['ó','o'],['ú','u']];
    let regecSimbolos = /[^a-z0-9\s]/g;
    text=text.replace(regexAcentos,function(valor){
        /* return {'á':'a','é':'e','í':'i','ó':'o','ú':'u'}[valor]; */
        for ( let i = 0;i<vocales.length;i++){
            if(valor === vocales[i][0]){
                return vocales[i][1];
            }
        }
        })
    text=text.replace(regecSimbolos, "");
    textEntrada.value=text;
    console.log(textEntrada.value)
}