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

const select_nacionalidad = document.getElementById("nacionalidad");
const urlAPI = "https://restcountries.com/v2/all"; 

const obtenerPaises = async (urlAPI) => {
    try {
        let res = await fetch(urlAPI);
        let paises = await res.json();
        
        paises.map(pais =>{
            let opt = document.createElement('option');
            opt.innerHTML = pais.name;
            select_nacionalidad.appendChild(opt);
        })
        }
    catch (error) {
        console.log(error);
    }
}

addEventListener("load", obtenerPaises(urlAPI));

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

        tamanioArregloPosterior > tamanioArregloAnterior ? alertar("Registro exitoso", "Atleta registrado correctamente", "success")
        : alertar("Registro fallido", "Error al registrar atleta", "error");
    }


}

function hayCamposDeUsuarioVacios(usr, pass){
    (usr == "" || pass == "") ? true : false;
}


function elUsrEstaRegistrado(usrInput){
    usuariosRegistrados.some((usr) => usr.nombreUsuario === usrInput) ? true : false;
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


