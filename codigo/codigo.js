let fecha = new Date();

let diaSiguiente = fecha.getDate()
let mes = fecha.getMonth() + 1;
let año = fecha.getFullYear();
let fechaCompleta = diaSiguiente + "/" + mes + "/" + año;


let respuesta = prompt("Si desea una clase de prueba, ingrese su nombre: ");

if (respuesta != "") {
    alert(`Excelente ${respuesta} . Lo esperamos mañana ${diaSiguiente + 1}/${mes}/${año}`);
}