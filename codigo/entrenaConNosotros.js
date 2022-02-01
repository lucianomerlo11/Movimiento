class Factura {
    constructor(fechaFactura, horaFactura, detalleFactura) {
        this.fechaFactura = fechaFactura;
        this.horaFactura = horaFactura;
        this.detalleFactura = detalleFactura;
    }
}

class DetalleFactura {
    constructor(plan, precio) {
        this.plan = plan;
        this.precio = precio;
    }
}

let carrito = [];

function comprarItem(planSeleccionado, precioPlan) {
    let fecha = new Date();


    carrito.push(new(
        `${fecha.getDate() + 1}-${fecha.getMonth()}-${fecha.getFullYear()}`,
        `${fecha.getHours()}:${fecha.getMinutes()}`,
        new DetalleFactura(
            planSeleccionado,
            precioPlan
        )
    ))

    console.log(carrito)
}


const btnAdquirirPaseLibre = document.getElementById("btnAdquirirPaseLibre");

btnAdquirirPaseLibre.addEventListener("click", comprarItem("PaseLibre", "2000"))