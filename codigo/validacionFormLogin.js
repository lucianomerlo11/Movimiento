(function() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()




class Usuario {
    constructor(nombreUsuario, contrasenia) {
        this.nombreUsuario = nombreUsuario;
        this.contrasenia = contrasenia;
    }

    getNombreUsuario() { return this.nombreUsuario }

    getContrasenia() { return this.contrasenia }

    setNombreUsuario(nuevoNombreUsuario) { this.nombreUsuario = nuevoNombreUsuario }

    setContrasenia(nuevaContrasenia) { this.contrasenia = nuevaContrasenia }
}


let usuario1 = new Usuario("Luciano123", "12345678");
let usuario2 = new Usuario("admin", "admin");
let usuario3 = new Usuario("pepers", "larioja123");


let usuariosRegistrados = [usuario1, usuario2, usuario3];



function validarUsuario(usuarioIngresado) {
    console.log(usuariosRegistrados.some((usr) => { usr.nombreUsuario === usuarioIngresado }))
}

function validarContraseña(passwordIngresada) {
    return usuariosRegistrados.some((usr) => { usr.contrasenia === passwordIngresada });
}

function validarDatosUsuario(usuarioIngresado, passwordIngresada) {
    if (validarUsuario(usuarioIngresado) && validarContraseña(passwordIngresada)) {
        alert("Bienvenido");
    } else {
        alert("Usuario o contraseña no son correrctos")
    }
}




