
function encriptar() {
    
    var texto = document.querySelector("#textArea") .value.toLowerCase();
    var txtCifrado= texto.replace(/e/,"enter");
    var txtCifrado= txtCifrado.replace(/o/,"ober");
    var txtCifrado= txtCifrado.replace(/i/,"imes");
    var txtCifrado= txtCifrado.replace(/a/,"ai");
    var txtCifrado= txtCifrado.replace(/u/,"ufat");

    document.querySelector("#muneco").style.display = 'none';
    document.querySelector(".texto").style.display = 'none';
    document.querySelector("#textoDos").innerHTML = txtCifrado;
    document.querySelector("#copiar").style.display = "show";
    document.querySelector("#copiar").style.display = "inherit";
 }


 function desencriptar() {
    
    
    var texto=document.querySelector("#textArea").value.toLowerCase();
    
    var txtCifrado= texto.replace(/enter/,"e");
    var txtCifrado= txtCifrado.replace(/ober/,"o");
    var txtCifrado= txtCifrado.replace(/imes/,"i");
    var txtCifrado= txtCifrado.replace(/ai/,"a");
    var txtCifrado= txtCifrado.replace(/ufat/,"u");

    document.querySelector("#muneco").style.display = "none";
    document.querySelector(".texto").style.display = "none";
    document.querySelector("#textoDos").innerHTML = txtCifrado;
    document.querySelector("#copiar").style.display = "show";
    document.querySelector("#copiar").style.display = "inherit";
 }

 function copiar(){
    var contenido= document.querySelector("#textoDos");
    contenido.select();
    document.execCommand("copy");
    alert("!Se copio!")
}