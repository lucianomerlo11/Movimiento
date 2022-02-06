
function existenCamposVacios(nombreRemitente, apellidoRemitente, emailRemitente, asunto, mensaje){
    if (nombreRemitente == "" || apellidoRemitente == "" || emailRemitente == "" || asunto == "" || mensaje == "") {
        return true;
    }
    else{
        return false;
    }
}

function enviarMensaje(){
    let nombreRemitente = document.getElementById("inputNombre").value;
    let apellidoRemitente = document.getElementById("inputApellido").value;
    let emailRemitente = document.getElementById("inputEmail").value;
    let asunto = document.getElementById("inputAsunto").value;
    let mensaje = document.getElementById("mensajeInput").value;

    let resultado = existenCamposVacios(nombreRemitente, apellidoRemitente, emailRemitente, asunto, mensaje);

    if (!resultado) {
        alert("Pronto le enviaremos un email con la información que solicita")
    }
    else{
        alert("Faltan llenar campos para enviar el mensaje");
    }
}