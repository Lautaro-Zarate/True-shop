const listaCarrito = document.getElementById("lista-carrito");
const precioFinal = document.getElementById("precioTotal");
const carritoConProductos = JSON.parse(localStorage.getItem("mi-carrito")) || []
if (carritoConProductos){
    armarListaConProductos()
}

function armarListaConProductos(){
    listaCarrito.innerHTML = ""
    const li = document.createElement("div");
    listaCarrito.forEach(prod => {
        li.innerHTML += `
        <h2></h2>
        `
    });
}