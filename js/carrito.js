const listaCarrito = document.getElementById("lista-carrito");
const precioTotal = document.getElementById("precioTotal");
const carritoConProductos = JSON.parse(localStorage.getItem("mi-carrito")) || []
if (carritoConProductos){
    armarListaConProductos()
}

function armarListaConProductos(){
    listaCarrito.innerHTML = ""
    const contenedor = document.createElement("div");
    carritoConProductos.forEach(prod => {
        contenedor.innerHTML += `
        <img src="${prod.imagen}" class="image__carrito" alt="${prod.nombre}">
        <h3 class="title__carrito">${prod.nombre}</h3>
        <div class="container__carrito flex flex-row justify-between items-center">
        <p class="price__carrito">$${prod.precio}</p>
        <button onclick="eliminarProducto(${prod.id})" class="btn__carrito">x</button>
        </div>
        `
        listaCarrito.appendChild(contenedor)
        precioFinal()
    });
}
function eliminarProducto(id){
let productoEliminado = carritoConProductos.find((prod) => prod.id === id)
if(productoEliminado){
    const posicion = carritoConProductos.indexOf(productoEliminado)
    carritoConProductos.splice(posicion,1)
    armarListaConProductos();
    Swal.fire({
        position: "top-right",
        icon: "error",
        title: "¡Producto eliminado!",
        color: "#ff0000b3",
        background: "#3a4856",
        showConfirmButton: false,
        timer: 1200
    })
}
}

function precioFinal(){
    contador = 0;
    carritoConProductos.forEach((prod) => {
        contador += prod.precio
    })
    precioTotal.innerHTML= `El precio final es: ${contador}`
}

let botonFinalizarCompra = document.getElementById("comprar")

function compraFinalizada(){
    botonFinalizarCompra.addEventListener("click", () => {
        if(carritoConProductos.length > 0){
            mostarMensajeDeCompra("Muchas gracias por tu compra, ¡Espero verte pronto!")
            listaCarrito.innerHTML=`<p class="text-8xl text-blue-800" id="mensajeDeCompra">
            </p>
            `
            precioTotal.innerHTML=""
            localStorage.clear()
        } else{
            mostarMensajeDeCompra("Tu carrito esta vacío")
        }
    })
}
compraFinalizada();
function mostarMensajeDeCompra(mensaje){
    const mensajeFinal = document.getElementById("mensajeDeCompra")
    mensajeFinal.textContent = mensaje
}