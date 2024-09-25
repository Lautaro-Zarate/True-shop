const section = document.getElementById("section")
let apiLocal = fetch(`./js/object.json`)
.then((resp) => resp.json())
.then((data) => {
    // console.log(data)
    data.forEach((prod) => {
        const li = document.createElement("div")
        li.innerHTML = `
            <div class="flex flex-col bg-white p-2 shadow-xl items-stretch">
                <img src="${prod.imagen}" class="card__image" alt="Zapatillas Nike">
                <h3 class="card__text">${prod.nombre}</h3>
                <div class="card__container">
                    <p class="card__precio" >$${prod.precio}</p>
                    <input type="button" value="Añadir al Carrito" class= "card__carrito  bg-blue-500 text-white font-bold py-2 px-4 rounded-lg active:bg-blue-900 active:scale-105 transition-all duration-150 ease-in-out" id="${prod.id}">
                </div>`
        section.append(li)
    });
})

let productos = []; 
fetch(`./js/object.json`)
.then((resp) => resp.json())
.then((data) => {
    productos = data
    filtradoDeZapatillas()
})
.catch(error => console.error('Error al cargar el archivo JSON:', error));

function filtradoDeZapatillas(){
    const resultado = productos.filter((el) => el.nombre.includes("Zapatillas"))
    console.log(resultado)
}


// console.log(apiLocal)
// const camperas = document.getElementById("camperas")
// camperas.addEventListener("click", filtradoDeCamperas)
