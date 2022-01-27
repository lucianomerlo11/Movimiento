let respuesta = prompt("Si desea una clase de prueba, ingrese su nombre: ");
let fecha = new Date();

const fechaSiguiente = obtenerFechaSiguiente();
const quiereClaseDePrueba = validarClaseDePrueba(respuesta)

if (quiereClaseDePrueba) {
    alert(`Excelente ${respuesta} . ${fechaSiguiente}`);
}

function obtenerFechaSiguiente() {

    let diaSiguiente = fecha.getDate()
    let mes = fecha.getMonth() + 1;
    let año = fecha.getFullYear();

    return `Lo esperamos mañana ${diaSiguiente + 1}/${mes}/${año}`;
}

function validarClaseDePrueba(respuesta) {
    if (respuesta != "" || respuesta != null) {
        return true;
    } else {
        return false;
    }

}