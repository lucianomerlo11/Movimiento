let contrasenia = document.getElementById("contrasenia").value;
let contraseniaConfirmada = document.getElementById("contraseniaConfirmada");


console.log("contrasenia: ", contrasenia)

function validarcontrasenia(contrasenia, contraseniaConfirmada) {

    let sonIguales = false;
    if (contrasenia === contraseniaConfirmada) sonIguales = true;

    return sonIguales;
}