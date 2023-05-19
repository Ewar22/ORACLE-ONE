
function encriptar(){
    var texto =  document.querySelector("#texto").value;
        texto = texto.replace(/e/g, "enter");
        texto = texto.replace(/i/g, "imes");
        texto = texto.replace(/a/g, "ai");
        texto = texto.replace(/o/g, "ober");
        texto = texto.replace(/u/g, "ufat");

    document.querySelector("#textoDesin").value = texto;
    
}

function desincriptar(){
    var texto =  document.querySelector("#texto").value;
        texto = texto.replace(/enter/g, "e");
        texto = texto.replace(/imes/g, "i");
        texto = texto.replace(/ai/g, "a");
        texto = texto.replace(/ober/g, "o");
        texto = texto.replace(/ufat/g, "u");

    document.querySelector("#textoDesin").value = texto;
    
}

function copiar(){
    var texto2 = document.getElementById("textoDesin");
    texto2.select();
    document.execCommand('copy');
    document.querySelector("#texto").value = texto2.value;
    document.querySelector("#textoDesin").value = "";
    

}

var buton = document.querySelector("#encriptar");
buton.onclick = encriptar;

var buton2 = document.querySelector("#desincriptar");
buton2.onclick = desincriptar;

var buton3 = document.querySelector("#copiar");
buton3.onclick = copiar;
