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

    getPrecio(){
        return this.precio;
    }
}

let carrito = [];

function comprarItem(planSeleccionado, precioPlan) {
    let fecha = new Date();


    carrito.push(new Factura(
        `${fecha.getDate() + 1}-${fecha.getMonth()}-${fecha.getFullYear()}`,
        `${fecha.getHours()}:${fecha.getMinutes()}`,
        new DetalleFactura(
            planSeleccionado,
            precioPlan
        )
    ))

    comprarPlanes(carrito);
}

function comprarPlanes(carrito){
    if (carrito.length > 0) {
        document.getElementById("btnCarrito").innerHTML = "Comprar planes"
        let total = 0;
        for (let i = 0; i < carrito.length; i++) {
            total = total + carrito[i].DetalleFactura.precio;
            console.log(total)
        }
    }
    else{
        document.getElementById("btnCarrito").innerHTML = ""
    }
}





