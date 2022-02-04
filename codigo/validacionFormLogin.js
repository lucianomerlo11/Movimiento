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



function validarUsuario() {
    //ENTRADAS
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    
    if (usuario == "" || password == "") alert("No ha ingresado usuario o contraseña");
    else if (usuariosRegistrados.some((usr) => usr.nombreUsuario == usuario && usr.contrasenia == password)) alert("Bienvenido");
    else alert("Usuario no registrado");

}




