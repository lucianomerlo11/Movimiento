class Factura {
    constructor(codigoFactura, fechaFactura, horaFactura, plan, precio) {
        this.codigoFactura = codigoFactura;
        this.fechaFactura = fechaFactura;
        this.horaFactura = horaFactura;
        this.plan = plan;
        this.precio = precio;
    }
}

let planesSeleccionados = [];

let planElegido;

let siguePidiendo = true;

while (siguePidiendo){
    planElegido = parseInt(prompt(`\n1: Pase libre\n2: Plan personalizado\n3: Gimnasia adaptada\n4: Plan familiar\n0: Terminar selección`));
    if (planElegido == 0) {
        siguePidiendo = false;
    }
    planesSeleccionados.push(planElegido);
    adquirirPlan(planesSeleccionados)
};

function adquirirPlan(planElegido){
    let carrito = [];
    let nombrePlan;
    let precioPlan;

    for (let i = 0; i < planElegido.length; i++) {
        if(planElegido[i] == 1){
            nombrePlan = "Pase libre";
            precioPlan = "3000";
            comprarItem(carrito, i, nombrePlan, precioPlan);
        }
        else if (planElegido[i] == 2) {
            nombrePlan = "Plan personalizado";
            precioPlan = "3500";
            comprarItem(carrito, i, nombrePlan, precioPlan)
        }
        else if (planElegido[i] == 3) {
            nombrePlan = "Gimnasia adaptada";
            precioPlan = "2000";
            comprarItem(carrito, i, nombrePlan, precioPlan)
        }
        else if (planElegido[i] == 4) {
            nombrePlan = "Plan familiar";
            precioPlan = "8000";
            comprarItem(carrito, i, nombrePlan, precioPlan)
        }
        else if (planElegido[i] == 0) {
            planElegido.pop();
        }
    }

    carrito.forEach((factura) => {
        console.log("")
        console.log("Facturas: ",factura);
    });

}




function comprarItem(carrito, codigo, planSeleccionado, precioPlan) {



    let fecha = new Date();
    let fechaActual = `${fecha.getDate() + 1}-${fecha.getMonth()}-${fecha.getFullYear()}`;
    let horaActual = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
    carrito.push(
        {
            codigo,
            fechaActual,
            horaActual,
            planSeleccionado,
            precioPlan
        }
        )
}













