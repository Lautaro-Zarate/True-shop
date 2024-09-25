const section = document.getElementById("section")
let apiLocal = fetch(`./js/object.json`)
.then(resp => resp.json())
.then(data => {
    // console.log(data)
    data.forEach(prod => {
        const li = document.createElement("div")
        li.innerHTML = `
            <div class="flex flex-col bg-white p-2 shadow-xl items-stretch">
                <img src="${prod.imagen}" class="card__image" alt="Zapatillas Nike">
                <h3 class="card__text">${prod.nombre}</h3>
                <div class="card__container">
                    <p class="card__precio" >$${prod.precio}</p>
                    <input type="button" value="Añadir al Carrito" class= "card__carrito bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-900 hover:scale-105 transition-all duration-300 ease-in-out">
                </div>`
        section.append(li)
    });
})
