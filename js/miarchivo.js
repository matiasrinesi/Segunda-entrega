class Camiseta {
    constructor(equipo, talle, dorsal, nombre) {
        this.equipo = equipo
        this.talle = talle
        this.dorsal = dorsal
        this.nombre = nombre
    }
}

const camisetas = []



const formCamisetas = document.getElementById("formCamisetas")
const divCamisetas = document.getElementById("divCamisetas")
const botonPedidos = document.getElementById("botonPedidos")

formCamisetas.addEventListener(`submit`, (e) => {
    e.preventDefault()
    let datForm = new FormData(e.target)


    let camiseta = new Camiseta (datForm.get(`equipo`), datForm.get(`talle`), datForm.get(`dorsal`), datForm.get(`nombre`) )
    camisetas.push(camiseta)
   
    localStorage.setItem(`camisetas`, JSON.stringify(camisetas))

    formCamisetas.reset()
})


botonPedidos.addEventListener('click', () => {
    let arrayStorage = JSON.parse(localStorage.getItem('camisetas'))
    divCamisetas.innerHTML = "" // para no mostar muchas veces la misma camiseta
    arrayStorage.forEach((camiseta, indice) => {
        
        divCamisetas.innerHTML += `
    <div class="card border-dark mb-4" id="camiseta${indice}" style="max-width: 25rem; margin: 4px;">
    <div class="card-header"><h2>${camiseta.equipo}</h2></div>
    <div class="card-body">
        <p class="card-title">Talle: ${camiseta.talle}</p>
        <p class="card-title">Dorsal: ${camiseta.dorsal}</p>
        <p class="card-title">Nombre: ${camiseta.nombre}</p>
        
        <button class="btn btn-outline-warning">Eliminar Camiseta</button>
    </div>
</div>

        `
    });



    arrayStorage.forEach((camiseta, indice) => {
       let botonCard = document.getElementById(`camiseta${indice}`).lastElementChild.lastElementChild //Consulta el ultimo elemento hijo del ultimo elemento hijo
       botonCard.addEventListener(`click`, () => {
         document.getElementById(`camiseta${indice}`).remove() // eliminar del DOM
         camisetas.splice(indice, 1) // eliminar del ARRAY
         localStorage.setItem(`camisetas`, JSON.stringify(camisetas)) // Para eliminar de LOCAL STORAGE
         console.log(`${camiseta.equipo} Eliminada`)
       })
   
    })  
})

const botonEnviar = document.getElementById(`botonEnviar`)

botonEnviar.addEventListener(`click`, () => {
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover. La alerta no se elimina si le pongo el mouse arriba
        style: {
          background: "linear-gradient(to bottom left, rgba(12, 1, 167, 1.0), rgba(255, 255, 255, 1.0));"
        },
        onClick: function(){
            console.log("Diste click")
        } // Callback after click
      }).showToast();

})

const botonFinalizar = document.getElementById(`botonFinalizar`)



botonFinalizar.addEventListener(`click`, () => {
    Swal.fire({
        icon: 'success',
        title: 'Compra finalizada',
        text: 'Su pedido ya fue recibido y será enviado proximamente',
        footer: '<p> ¡Muchas gracias por su compra!</p>'
      })

})










