const listaCarrito = document.getElementById("lista-carrito");
const precioFinal = document.getElementById("precioTotal");
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
        <button class="btn__carrito">x</button>
        </div>
        `
        listaCarrito.appendChild(contenedor)
    });
}
console.log(carritoConProductos)