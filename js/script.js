let productos = []; 

fetch(`./js/object.json`)
.then((resp) => resp.json())
.then((data) => {
    productos = data;
    armadoDeProductos();
})
.catch(error => console.error('Error al cargar el archivo JSON:', error));

const section = document.getElementById("section")
function armadoDeProductos(){
    productos.forEach((prod) => {
        const li = document.createElement("div")
        li.innerHTML = `
            <div class="flex flex-col bg-white p-2 shadow-xl items-stretch">
                <img src="${prod.imagen}" class="card__image" alt="${prod.nombre}">
                <h3 class="card__text">${prod.nombre}</h3>
                <div class="card__container">
                    <p class="card__precio" >$${prod.precio}</p>
                    <input type="button" value="Añadir al Carrito" onclick="agregarProductos(${prod.id}) "class= "card__carrito bg-blue-500 text-white font-bold py-2 px-4 rounded-lg active:bg-blue-900 active:scale-105 transition-all duration-150 ease-in-out" id="${prod.id}">
                </div>
            </div>`
        section.append(li)
    });
}
// JAVASCRIPT DE FILTRADOS DE PRENDAS👇

function filtrarCategoria(categoria) {
    const productosFiltrados = productos.filter(producto => producto.categoria === categoria);
    mostrarProductos(productosFiltrados);
}
function mostrarProductos(filtrados) {
    const contenedor = document.getElementById('section');
    contenedor.innerHTML = "";
    filtrados.forEach(prenda => {
        const item = document.createElement('div');
        item.innerHTML = `
            <div class="flex flex-col bg-white p-2 shadow-xl items-stretch">
                <img src="${prenda.imagen}" class="card__image" alt="${prenda.nombre}">
                <h3 class="card__text">${prenda.nombre}</h3>
                <div class="card__container">
                    <p class="card__precio" >$${prenda.precio}</p>
                    <input type="button" value="Añadir al Carrito" class= "card__carrito  bg-blue-500 text-white font-bold py-2 px-4 rounded-lg active:bg-blue-900 active:scale-105 transition-all duration-150 ease-in-out" id="${prenda.id}">
                </div>
            </div>`;
        contenedor.appendChild(item);
    });
}

const camperas = document.getElementById("camperas")
camperas.addEventListener("click", function(e) {
    e.preventDefault();
    filtrarCategoria("camperas")
})
const remeras = document.getElementById("remeras")
remeras.addEventListener("click", function(e) {
    e.preventDefault();
    filtrarCategoria("remeras")
})
const pantalones = document.getElementById("pantalones")
pantalones.addEventListener("click", function(e) {
    e.preventDefault();
    filtrarCategoria("pantalones")
})
const zapatillas = document.getElementById("zapatillas")
zapatillas.addEventListener("click", function(e) {
    e.preventDefault();
    filtrarCategoria("zapatillas")
})


// JAVASCRIPT DE AGREGAR AL CARRITO
const carrito = [];

function agregarProductos(codigo){
    const productoSeleccionado = productos.find((producto) => producto.id === codigo);
    carrito.push(productoSeleccionado);
    localStorage.setItem("mi-carrito", JSON.stringify(carrito));
    Swal.fire({
        position: "top-right",
        icon: "success",
        title: "¡Producto agregado correctamente!",
        color: "#fff",
        showConfirmButton: false,
        timer: 1200
    })
}