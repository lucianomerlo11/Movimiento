class Atleta{
    constructor(user, nombreAtleta, apellidoAtleta, edadAtleta,
        tipoDocumentoAtleta, nroDocumentoAtleta, generoAtleta, fechaNacimientoAleta, 
        nacionalidadAtleta, provinciaAtleta, calleAtleta, nroCalleAtelta)
        {
            this.user = user;
            this.nombreAtleta = nombreAtleta;
            this.apellidoAtleta = apellidoAtleta;
            this.edadAtleta = edadAtleta;
            this.tipoDocumentoAtleta = tipoDocumentoAtleta;
            this.nroCalleAtelta = nroDocumentoAtleta;
            this.generoAtleta = generoAtleta;
            this.fechaNacimientoAleta = fechaNacimientoAleta;
            this.nacionalidadAtleta = nacionalidadAtleta;
            this.provinciaAtleta = provinciaAtleta;
            this.calleAtleta = calleAtleta;
            this.nroCalleAtelta = nroCalleAtelta;
        }
}

let atletas = [];

function registrarAtleta(){

    let tamanioArregloAnterior = atletas.length;
    let tamanioArregloPosterior;

    let nombreUsr = document.getElementById("usr").value;
    let passUsr = document.getElementById("pass").value;

    let nombreAtleta = document.getElementById("nombreCompleto").value;
    let apelldioAtleta = document.getElementById("apellido").value;
    let edadAtleta = document.getElementById("edad").value;
    let tipoDocumentoAtleta = document.getElementById("tipoDocumento").value;
    let nroDocumentoAtleta = document.getElementById("nroDocumento").value;
    let generoAtleta = document.getElementById("genero").value;
    let fechaNacimientoAtleta = document.getElementById("fechaNacimiento").value;
    let nacionalidadAtleta = document.getElementById("nacionalidad").value;
    let provinciaAtleta = document.getElementById("provincia").value;
    let calleAtleta = document.getElementById("calle").value;
    let nroCalleAtleta = document.getElementById("numeroCalle").value;

    if(elUsrEstaRegistrado(nombreUsr)) alert("Debe elegir otro nombre de usuario");
    else if (hayCamposDeUsuarioVacios(nombreUsr, passUsr)) alert("Ingrese usuario o contraseña");
    else {
        let usr = new Usuario(nombreUsr, passUsr);
        usuariosRegistrados.push(usr);

        atletas.push(
            usr, 
            nombreAtleta,
            apelldioAtleta,
            edadAtleta,
            tipoDocumentoAtleta,
            nroDocumentoAtleta,
            generoAtleta,
            fechaNacimientoAtleta,
            nacionalidadAtleta,
            provinciaAtleta,
            calleAtleta,
            nroCalleAtleta,
        )

        tamanioArregloPosterior = atletas.length;

        if (tamanioArregloPosterior > tamanioArregloAnterior) alert("Atleta registrado correctamente")
        else alert("Error al registrar atleta")
    }


}

function hayCamposDeUsuarioVacios(usr, pass){
    if (usr == "" || pass == "") {
        return true;
    }
    else{
        return false;
    }
}


function elUsrEstaRegistrado(usrInput){
    if(usuariosRegistrados.some((usr) => usr.nombreUsuario === usrInput)) return true;
    else return false;
}

