
let entrada = document.querySelector("#entrada");
let salida = document.querySelector("#salida");

var encriptar = document.querySelector("#encriptar");
var desencriptar = document.querySelector("#desencriptar");
var copiar = document.querySelector("#copiar");

function encriptado(){
    let texto = entrada.value;
    for(let i=0; i < texto.length; i++){
        if ((texto.codePointAt(i) < 97) || (texto.codePointAt(i) > 122) && (texto.codePointAt(i) != 32) ){
            alert("Error ingrese solo letras minúsculas y sin acentos");
            entrada.value="";
            break;
        }

        else {
            let textoEncriptado = texto
            .replaceAll("e","enter")
            .replaceAll("i","imes")
            .replaceAll("a","ai")
            .replaceAll("o","ober")
            .replaceAll("u","ufat");
            salida.value=textoEncriptado;
            entrada.value="";
            document.getElementById("oculta").style.display="none";
            break;
        }


     }
}

function desencriptado(){
    let texto = entrada.value;
    for(let i=0; i < texto.length; i++){
        if ((texto.codePointAt(i) < 97) || (texto.codePointAt(i) > 122) && (texto.codePointAt(i) != 32) ){
            alert("Error ingrese solo letras minúsculas y sin acentos");
            entrada.value="";
            break;
        }

        else {
            let textoDesencriptado = texto
            .replaceAll("enter","e")
            .replaceAll("imes","i")
            .replaceAll("ai","a")
            .replaceAll("ober","o")
            .replaceAll("ufat","u");
            salida.value=textoDesencriptado;
            entrada.value="";
            document.getElementById("oculta").style.display="none";
            break;
        }

     }
}

function copia(){
    
    navigator.clipboard.writeText(salida.value);
    salida.value="";
    document.getElementById("oculta").style.display="inline";
}

encriptar.onclick=encriptado;
desencriptar.onclick=desencriptado;
copiar.onclick=copia;