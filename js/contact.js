// JAVASCRIPT DE LA PAGINA DE CONTACTOS
// localStorage.clear();

let formulario = document.getElementById("formulario")
formulario.addEventListener("submit", confirmacionDeRegistro) 

function confirmacionDeRegistro(e){
    e.preventDefault();
    let nombreUsuario = document.getElementById("nombre").value;
    let apellidoUsuario = document.getElementById("apellido").value;
    let emailUsuario = document.getElementById("email").value;
    let contraseñaUsuario = document.getElementById("password").value;
    
    const nuevoUsuario = {
        nombreUsuario : nombreUsuario,
        apellidoUsuario : apellidoUsuario,
        emailUsuario : emailUsuario,
        contraseñaUsuario : contraseñaUsuario
    }
    localStorage.setItem("registroDeUsuario", JSON.stringify(nuevoUsuario));
    
    Swal.fire({
        position: "top-center",
        icon: "success",
        text: "Has sido registrado correctamente",
        color: "#fff",
        background:"#3a4856",
        showConfirmButton: false,
        timer: 2500
    });
    
    formulario.reset()
}



