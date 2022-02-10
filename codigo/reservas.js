const contenedorTurno = document.getElementById("contenedor-turnos");
const contenedorListado = document.getElementById("listado-contenedor");
const btnMisReservas = document.getElementById("btnMisReservas");
const tbodyContenidoTabla = document.getElementById("contenido-tabla");
const btnRealizarReserva = document.getElementById("btnRealizarReserva");
const modalReservas = document.getElementById("modal-reservas");


const select_dia = document.getElementById("dia");
const select_turno = document.getElementById("turno");
const select_tipoClase = document.getElementById("tipoClase");
const select_hora =  document.getElementById("hora");



let listadoReservas = [];
let nroReserva = 0;
let contadorReserva = document.getElementById("contadorReserva");


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
    
    if (diaSeleccionado == "lunes") {
        mostrarTurnos(turnos.filter(item => item.dia == "Lunes"));
    }
    else if (diaSeleccionado == "martes") {
        mostrarTurnos(turnos.filter(item => item.dia == "Martes"));
    }
    else if (diaSeleccionado == "miercoles") {
        mostrarTurnos(turnos.filter(item => item.dia == "Miercoles"));
    }
    else if (diaSeleccionado == "jueves") {
        mostrarTurnos(turnos.filter(item => item.dia == "Jueves"));
    }
    else if (diaSeleccionado == "viernes") {
        mostrarTurnos(turnos.filter(item => item.dia == "Viernes"));
    }
    else{
        mostrarTurnos(turnos);
    }
})

select_tipoClase.addEventListener('change',()=>{
    
    let claseSeleccionada = select_tipoClase.value;
    
    if (claseSeleccionada == "FUNCIONAL") {
        mostrarTurnos(turnos.filter(item => item.clase == "Funcional"));
    }
    else if (claseSeleccionada == "OCR") {
        mostrarTurnos(turnos.filter(item => item.clase == "OCR"));
    }
    else if (claseSeleccionada == "ADAPTADA") {
        mostrarTurnos(turnos.filter(item => item.clase == "Adaptada"));
    }
    else if (claseSeleccionada == "ZUMBA") {
        mostrarTurnos(turnos.filter(item => item.clase == "Zumba"));
    }
    else if (claseSeleccionada == "FITBOX") {
        mostrarTurnos(turnos.filter(item => item.clase == "Fit Box"));
    }
    else{
        mostrarTurnos(turnos);
    }
})

select_hora.addEventListener('change',()=>{
    
    let horaSeleccionada = select_hora.value;
    
    if (horaSeleccionada == "8") {
        mostrarTurnos(turnos.filter(item => item.horario == "8:00 - 9:00"));
    }
    else if (horaSeleccionada == "9") {
        mostrarTurnos(turnos.filter(item => item.horario == "9:00 - 10:00"));
    }
    else if (horaSeleccionada == "10") {
        mostrarTurnos(turnos.filter(item => item.horario == "10:00 - 11-00"));
    }
    else if (horaSeleccionada == "16") {
        mostrarTurnos(turnos.filter(item => item.horario == "16:00 - 17-00"));
    }
    else if (horaSeleccionada == "17") {
        mostrarTurnos(turnos.filter(item => item.horario == "17:00 - 18-00"));
    }
    else if (horaSeleccionada == "18") {
        mostrarTurnos(turnos.filter(item => item.horario == "18:00 - 19-00"));
    }
    else if (horaSeleccionada == "19") {
        mostrarTurnos(turnos.filter(item => item.horario == "19:00 - 20-00"));
    }
    else if (horaSeleccionada == "20") {
        mostrarTurnos(turnos.filter(item => item.horario == "20:00 - 21-00"));
    }
    else if (horaSeleccionada == "21") {
        mostrarTurnos(turnos.filter(item => item.horario == "21:00 - 22-00"));
    }
    else{
        mostrarTurnos(turnos);
    }
})

mostrarTurnos(turnos);

function mostrarTurnos(array) {
    contenedorTurno.innerHTML = "";

    array.forEach(turno => {
        let div = document.createElement('div');
        div.className = 'turno';
        div.innerHTML = 
        `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${turno.clase}</h5>
              <p class="card-text">Día: ${turno.dia}</p>
              <p class="card-text">Turno: ${turno.turno}</p>
              <p class="card-text">Horario: ${turno.horario}</p>
              <p class="card-text">Cupo: ${turno.cupo}</p>
              <a id="btnReservar${turno.id}" class="btn btn-primary">Reservar</a>
            </div>
        </div>`

        contenedorTurno.appendChild(div);

        let btnReservar = document.getElementById(`btnReservar${turno.id}`);


        btnReservar.addEventListener("click", () =>{
            // console.log(turno.id);
            agregarReservasAlListado(turno.id);
            
        })
    });
}

function agregarReservasAlListado(id){

    let turno = turnos.find(turno => turno.id == id);
    listadoReservas.push(turno);
    actualizarListadoReservas()
    
    let tr = document.createElement('tr');
    tr.className = 'contenido-tabla';
    tr.innerHTML = `
    <th scope="row">${nroReserva = nroReserva + 1}</th>
    <td>${turno.dia}</td>
    <td>${turno.horario}</td>
    <td>${turno.clase}</td>
    <td><a id="btnEliminarReserva${turno.id}" class="btn btn-danger">Eliminar</a></td>
    `;


    tbodyContenidoTabla.appendChild(tr);
    

    let btnEliminar = document.getElementById(`btnEliminarReserva${turno.id}`);

    btnEliminar.addEventListener('click', () => {

        let columnaEliminar = btnEliminar.parentElement;
        columnaEliminar.parentElement.remove();


        listadoReservas = listadoReservas.filter(item => item.id != turno.id);
        actualizarListadoReservas();
    })

    // btnRealizarReserva.addEventListener('click', realizarReserva(listadoReservas))
}

function actualizarListadoReservas(){
    contadorReserva.innerText = listadoReservas.length;
}


function realizarReserva(){    
    for (let i = 0; i < listadoReservas.length; i++) {
        for (let j = 0; j < turnos.length; j++) {
            if (listadoReservas[i].id == turnos[j].id){
                if(turnos[j].cupo > 0) {
                    turnos[j].cupo = turnos[j].cupo - 1;
                }
                else{
                    alert(`No hay lugar para ${listadoReservas[i].clase} el día ${listadoReservas[i].dia} en el horario ${listadoReservas[i].horario}`)
                }
            }
        }
        
    }
     
    contenedorTurno.innerHTML = "";
    mostrarTurnos(turnos);
    actualizarListadoReservas()
    alert("Reservar gestionada con exito");
}




