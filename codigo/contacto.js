
function existenCamposVacios(nombreRemitente, apellidoRemitente, emailRemitente, asunto, mensaje){
    (nombreRemitente == "" || apellidoRemitente == "" || emailRemitente == "" || asunto == "" || mensaje == "") ? true
    : false;
}

function enviarMensaje(){
    let nombreRemitente = document.getElementById("inputNombre").value;
    let apellidoRemitente = document.getElementById("inputApellido").value;
    let emailRemitente = document.getElementById("inputEmail").value;
    let asunto = document.getElementById("inputAsunto").value;
    let mensaje = document.getElementById("mensajeInput").value;

    let resultado = existenCamposVacios(nombreRemitente, apellidoRemitente, emailRemitente, asunto, mensaje);

    !resultado ? alertar("Mensaje enviado","Pronto le enviaremos un email con la información que solicita", "success")
    : alertar("Error al enviar mensaje", "Faltan llenar campos para enviar el mensaje", "error");
    
}

function alertar(tituloAlerta, tipoAlerta, mensajeAlerta){
    swal.fire(
        {
            title: tituloAlerta,
            text: mensajeAlerta,
            icon: tipoAlerta
        }
    )
}