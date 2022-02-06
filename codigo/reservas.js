class DetalleReserva {
    constructor(diaReserva, claseReserva, horarioReserva, turnoReserva) {
        this.diaReserva = diaReserva;
        this.claseReserva = claseReserva;
        this.horarioReserva = horarioReserva;
        this.turnoReserva = turnoReserva
    }
}


class Reserva {
    constructor(fechaReserva, horaReserva, detalleReserva) {
        this.fechaReserva = fechaReserva;
        this.horaReserva = horaReserva;
        this.detalleReserva = detalleReserva;
    }
}


let btnConsulta = document.getElementById("btn_consultar");
let cupoReserva = 14;
let arrayReservas = [];


function consultar() {

    let ingresoDatos = false;

    let dia = document.getElementById("dia").value;
    let turno = document.getElementById("turno").value;
    let hora = document.getElementById("hora").value;
    let tipoClase = document.getElementById("tipoClase").value;

    if (dia == "") {
        alert("Seleccione dia")
    } else if (turno == "") {
        alert("Seleccione turno")
    } else if (hora == "") {
        alert("Seleccione hora")
    } else if (tipoClase == "") {
        alert("Seleccione tipoClase")
    } else {
        ingresoDatos = true;
    }

    return ingresoDatos;
}



function generarReserva() {

    if (consultar()) {

        // let cupoReserva = 14;
        let dia = document.getElementById("dia").value;
        if (dia == 'maniana') {
            dia = "Mañana";
        }
        let turno = document.getElementById("turno").value;
        let hora = document.getElementById("hora").value;
        let tipoClase = document.getElementById("tipoClase").value;


        document.getElementById("tituloActividad").innerHTML = `Clase: ${tipoClase}`;
        document.getElementById("turnoReserva").innerHTML = `Turno: ${turno}`;
        document.getElementById("diaReserva").innerHTML = `Dia: ${dia}`;
        document.getElementById("cupo").innerHTML = `Cupo: ${cupoReserva}`;
        document.getElementById("horaActividad").innerHTML = `Hora: ${hora}`;
    } else {
        alert("No se llenaron los campos de la reserva");
    }

}



function reservar() {
    alert("Reserva confirmada");
    cupoReserva = cupoReserva - 1;
    document.getElementById("cupo").innerHTML = `Cupo: ${cupoReserva}`
    document.getElementById("btnReservar").innerHTML = "Cancelar";

    let fecha = new Date();

    arrayReservas.push(
        new Reserva(
            `${fecha.getDate() + 1}-${fecha.getMonth()}-${fecha.getFullYear()}`,
            `${fecha.getHours()}:${fecha.getMinutes()}`,
            new DetalleReserva(
                document.getElementById("diaReserva").innerHTML,
                document.getElementById("tituloActividad").innerHTML,
                document.getElementById("horaActividad").innerHTML,
                document.getElementById("turnoReserva").innerHTML
            )
        )
    );


    

    console.log(arrayReservas);
}

