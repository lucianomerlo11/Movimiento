const tbodyContenidoTablaPlanes = document.getElementById("contenido-tabla");
const contenedorPlanes          = document.getElementById("contenedor-plan");
const contadorPlanes            = document.getElementById("contadorPlanes");
const btnMisPlanes              = document.getElementById("btnMisPlanes");
const precioTotal               = document.getElementById("precioTotal");



let carritoDeCompras = [];
let carritoStorage = [];
let nroPlan = 0;



addEventListener('DOMContentLoaded', mostrarPlanes(planes));




function carritoEntrenaConNosotros(planId){
    let planRepetido = carritoDeCompras.find(plan => plan.id == planId);

    if (planRepetido) {
        planRepetido.cantidad++;
        document.getElementById(`cantidad${planRepetido.id}`).innerHTML = `<p id=cantidad${planRepetido.id}>${planRepetido.cantidad}</p>`;
        actualizarCarrito(carritoDeCompras);
    }
    else{
        agregarPlanesAlListado(planId);
    }
}

function mostrarPlanes(array){
    contenedorPlanes.innerHTML = "";

    if (localStorage.getItem("carritoPlanes")) {
        btnMisPlanes.disabled = false;
        carritoStorage = JSON.parse(localStorage.getItem("carritoPlanes"));
        carritoStorage.map((item) =>{
            let tr = document.createElement('tr');
            tr.className = 'contenido-tabla';
            tr.innerHTML = `
            <th scope="row">${nroPlan = nroPlan + 1}</th>
            <td>${item.nombrePlan}</td>
            <td>${item.precio}</td>
            <td><p id=cantidad${item.id}>${item.cantidad}</p></td>
            <td><a id="btnEliminarPlan${item.id}" class="btn btn-danger">Eliminar</a></td`
                
            tbodyContenidoTablaPlanes.appendChild(tr);

            actualizarCarrito(carritoStorage)

            let btnEliminar = document.getElementById(`btnEliminarPlan${item.id}`);

            btnEliminar.addEventListener('click', ()=>{
                let columnaEliminar = btnEliminar.parentElement;
                columnaEliminar.parentElement.remove();
            
                carritoStorage = carritoStorage.filter(plan => plan.id != item.id);
                actualizarCarrito(carritoStorage);
            })
        })
    }

    array.forEach(plan => {
        let div = document.createElement('div');
        div.className = 'col-md-6';
        div.innerHTML = `
        <div class="cards-wrapper">
        <div class="card-grid-space">
            <a class="card" style="background-color: yellow;">
                <div class="info_plan">
                    <h1>${plan.nombrePlan}</h1>
                    <hr>
                    <h2>$${plan.precio}</h2>
                    <hr>
                    <p>
                        ${plan.descripcion}
                    </p>
                    <button type="button" class="btn btn-primary" id="btnAdquiriPlan${plan.id}">ADQUIRIR</button>
                </div>
            </a>
        </div>
    </div>
        `

        contenedorPlanes.appendChild(div);

        let btnAdquirirPlan = document.getElementById(`btnAdquiriPlan${plan.id}`);
        btnAdquirirPlan.addEventListener('click', () => {
            btnMisPlanes.disabled = false;
            carritoEntrenaConNosotros(plan.id)
        })
    });
}

function agregarPlanesAlListado(id){
    
    let planesSeleccionados = planes.find(item => item.id == id);
    carritoDeCompras.push(planesSeleccionados);
    carritoStorage.push(planesSeleccionados)
    actualizarCarrito(carritoStorage);


    let tr = document.createElement('tr');
    tr.className = 'contenido-tabla';
    tr.innerHTML = `
    <th scope="row">${nroPlan = nroPlan + 1}</th>
    <td>${planesSeleccionados.nombrePlan}</td>
    <td>${planesSeleccionados.precio}</td>
    <td><p id=cantidad${planesSeleccionados.id}>${planesSeleccionados.cantidad}</p></td>
    <td><a id="btnEliminarPlan${planesSeleccionados.id}" class="btn btn-danger">Eliminar</a></td`

    tbodyContenidoTablaPlanes.appendChild(tr);

    let btnEliminar = document.getElementById(`btnEliminarPlan${planesSeleccionados.id}`);

            btnEliminar.addEventListener('click', ()=>{
                let columnaEliminar = btnEliminar.parentElement;
                columnaEliminar.parentElement.remove();
                carritoStorage = carritoStorage.filter(item => item.id != planesSeleccionados.id);
                actualizarCarrito(carritoStorage);
            })
        }
            

function realizarCompra(){
    contenedorPlanes.innerHTML = "";
    carritoDeCompras = [];
    localStorage.removeItem("carritoPlanes");
    contadorPlanes.innerText = "0";
    mostrarPlanes(planes);
    alertar("Adquiriste tus planes con exito !", "success", "Ya podes reservar los turnos, te esperamos")
}

function cancelarCompra(){
    contenedorPlanes.innerHTML = "";
    carritoDeCompras = [];
    localStorage.removeItem("carritoPlanes");
    contadorPlanes.innerText = "0";
    mostrarPlanes(planes);
    alertar("Compra cancelada !", "error", "Te seguimos esperando para entrenar")
}

function actualizarCarrito(carrito) {
    contadorPlanes.innerText = carrito.reduce((acc, el) => acc + el.cantidad, 0);
    precioTotal.innerText = carrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);
    if (contadorPlanes.innerText == 0) {
        btnMisPlanes.disabled = true;
    }
    localStorage.setItem("carritoPlanes", JSON.stringify(carrito));
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