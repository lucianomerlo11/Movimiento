// INSTANCIAS DE CONSTANTES PARA INTERACTUAR CON EL DOM

const btnRealizarReserva  = document.getElementById("btnRealizarReserva");
const contenedorListado   = document.getElementById("listado-contenedor");
const contenedorTurno     = document.getElementById("contenedor-turnos");
const tbodyContenidoTabla = document.getElementById("contenido-tabla");
const contadorReserva     = document.getElementById("contadorReserva");
const btnMisReservas      = document.getElementById("btnMisReservas");
const modalReservas       = document.getElementById("modal-reservas");



// INSTANCIAS DE CONSTANTES PARA ESTABLECER FILTROS
const select_tipoClase = document.getElementById("tipoClase");
const select_turno     = document.getElementById("turno");
const select_hora      =  document.getElementById("hora");
const select_dia       = document.getElementById("dia");

// INSTANCIAS DE VARIABLES PARA REALIZAR CALCULOS

let listadoReservas = [];
let carritoStorage  = [];
let nroReserva      = 0;



addEventListener('DOMContentLoaded', mostrarTurnos(turnos))

// FILTROS

select_turno.addEventListener('change', ()=>{
    select_hora.innerHTML = "";
    if (select_turno.value == "maniana") {
        select_hora.innerHTML = `
        <option value="8" >8:00</option>
        <option value="9">9:00</option>
        <option value="10">10:00</option>
        `
        mostrarTurnos(turnos.filter(item => item.turno == "Mañana"));
    }
    else if (select_turno.value == "tarde") {
        select_hora.innerHTML = `
        <option value="16">16:00</option>
        <option value="17">17:00</option>
        <option value="18">18:00</option>
        `
        mostrarTurnos(turnos.filter(item => item.turno == "Tarde"));
    }
    else if (select_turno.value == "noche") {
        select_hora.innerHTML = `<option value="19">19:00</option>
        <option value="20">20:00</option>
        <option value="21">21:00</option>`
        mostrarTurnos(turnos.filter(item => item.turno == "Noche"));
    }
    else{
        mostrarTurnos(turnos);
    }
})

select_dia.addEventListener('change',()=>{
    
    let diaSeleccionado = select_dia.value;
    
      diaSeleccionado == "lunes"     ? mostrarTurnos(turnos.filter(item => item.dia == "Lunes")) 
    : diaSeleccionado == "martes"    ? mostrarTurnos(turnos.filter(item => item.dia == "Martes"))
    : diaSeleccionado == "miercoles" ? mostrarTurnos(turnos.filter(item => item.dia == "Miercoles"))
    : diaSeleccionado == "jueves"    ? mostrarTurnos(turnos.filter(item => item.dia == "Jueves"))
    : diaSeleccionado == "viernes"   ? mostrarTurnos(turnos.filter(item => item.dia == "Viernes"))
    : mostrarTurnos(turnos);

})

select_tipoClase.addEventListener('change',()=>{
    
    let claseSeleccionada = select_tipoClase.value;
    
      claseSeleccionada == "FUNCIONAL" ? mostrarTurnos(turnos.filter(item => item.clase == "Funcional"))
    : claseSeleccionada == "OCR"       ? mostrarTurnos(turnos.filter(item => item.clase == "OCR"))
    : claseSeleccionada == "ADAPTADA"  ? mostrarTurnos(turnos.filter(item => item.clase == "Adaptada"))
    : claseSeleccionada == "ZUMBA"     ? mostrarTurnos(turnos.filter(item => item.clase == "Zumba"))
    : claseSeleccionada == "FITBOX"    ? mostrarTurnos(turnos.filter(item => item.clase == "Fit Box"))
    : mostrarTurnos(turnos);
})

select_hora.addEventListener('change',()=>{
    
    let horaSeleccionada = select_hora.value;
    
      horaSeleccionada == "8"  ? mostrarTurnos(turnos.filter(item => item.horario == "8:00 - 9:00"))
    : horaSeleccionada == "9"  ? mostrarTurnos(turnos.filter(item => item.horario == "9:00 - 10:00"))
    : horaSeleccionada == "10" ? mostrarTurnos(turnos.filter(item => item.horario == "10:00 - 11-00"))
    : horaSeleccionada == "16" ? mostrarTurnos(turnos.filter(item => item.horario == "16:00 - 17-00"))
    : horaSeleccionada == "17" ? mostrarTurnos(turnos.filter(item => item.horario == "17:00 - 18-00"))
    : horaSeleccionada == "18" ? mostrarTurnos(turnos.filter(item => item.horario == "18:00 - 19-00"))
    : horaSeleccionada == "19" ? mostrarTurnos(turnos.filter(item => item.horario == "19:00 - 20-00"))
    : horaSeleccionada == "20" ? mostrarTurnos(turnos.filter(item => item.horario == "20:00 - 21-00"))
    : horaSeleccionada == "21" ? mostrarTurnos(turnos.filter(item => item.horario == "21:00 - 22-00"))
    : mostrarTurnos(turnos);
})    



function mostrarTurnos(array) {
    contenedorTurno.innerHTML = "";
    tbodyContenidoTabla.innerHTML = "";
    

    if (localStorage.getItem("carrito")) {
        btnMisReservas.disabled = false;
        carritoStorage = JSON.parse(localStorage.getItem("carrito"));
        carritoStorage.map((reserva)=>{
        agregarItemCarrito(reserva);
        actualizarCarrito(carritoStorage);

            let btnEliminar = document.getElementById(`btnEliminarReserva${reserva.id}`);

            btnEliminar.addEventListener('click', () => {
            
                let columnaEliminar = btnEliminar.parentElement;
                columnaEliminar.parentElement.remove();
            
                carritoStorage = carritoStorage.filter(item => item.id != reserva.id);
                actualizarCarrito(carritoStorage);
            })
        })
    }

    array.forEach(turno => {
        let div = document.createElement('div');
        div.className = 'turno';
        div.innerHTML = 
        `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${turno.clase}</h5>
              <p class="card-text"><span class="titulo_Text">Día:</span> ${turno.dia}</p>
              <p class="card-text"><span class="titulo_Text">Turno:</span> ${turno.turno}</p>
              <p class="card-text"><span class="titulo_Text">Horario:</span> ${turno.horario}</p>
              <a id="btnReservar${turno.id}" class="btn btn-primary btnReserva">Reservar</a>
            </div>
        </div>`

        contenedorTurno.appendChild(div);

        let btnReservar = document.getElementById(`btnReservar${turno.id}`);

        btnReservar.addEventListener("click", () =>{
            btnMisReservas.disabled = false;
            let reservasAux = JSON.parse(localStorage.getItem("carrito"));
            
            if (reservasAux) {
                let resultado = reservasAux.some((turnoReservado) => turno.id == turnoReservado.id);
                resultado ? alertar("Ups!", "error", "Ya tiene una reserva para este turno") : agregarReservasAlListado(turno.id); 
            }
            else{
                agregarReservasAlListado(turno.id); 
            }
        })
    });
}


function agregarReservasAlListado(id){

    let turno = turnos.find(turno => turno.id == id);

    listadoReservas.push(turno);
    carritoStorage.push(turno);
    actualizarCarrito(carritoStorage);
    agregarItemCarrito(turno);
    let btnEliminar = document.getElementById(`btnEliminarReserva${turno.id}`);
    btnEliminar.addEventListener('click', () => {

        let columnaEliminar = btnEliminar.parentElement;
        columnaEliminar.parentElement.remove();

        carritoStorage = carritoStorage.filter(item => item.id != turno.id);
        actualizarCarrito(carritoStorage);
    })
}




function realizarReserva(){    
    contenedorTurno.innerHTML = "";
    listadoReservas = [];
    actualizarCarrito([]);
    mostrarTurnos(turnos);
    contadorReserva.innerText == 0;
    alertar("Reservar gestionada con exito", "success", "Te esperamos para entrenar");
}

function cancelarReserva(){
    contenedorTurno.innerHTML = "";
    listadoReservas = [];
    carritoStorage = [];
    actualizarCarrito([]);
    mostrarTurnos(turnos);
    contadorReserva.innerText == 0;
    alertar("Reserva cancelada", "error", "Te seguimos esperando para entrenar");
}

function agregarItemCarrito(reserva){

    // DESESTRUCTURACIÓN DE OBJETOS

    let {id, dia, horario, clase} = reserva;

    let tr = document.createElement('tr');
    tr.className = 'contenido-tabla';
    tr.innerHTML = `
    <th scope="row">${nroReserva++}</th>
    <td>${dia}</td>
    <td>${horario}</td>
    <td>${clase}</td>
    <td><a id="btnEliminarReserva${id}" class="btn btn-danger">Eliminar</a></td>
    `;
    tbodyContenidoTabla.appendChild(tr);
}


function actualizarCarrito(carrito) {
    contadorReserva.innerText = carrito.length;
    if (contadorReserva.innerText == 0) {
        btnMisReservas.disabled = true;
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
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
