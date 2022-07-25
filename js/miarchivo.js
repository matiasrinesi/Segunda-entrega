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
    /*let equipo = document.getElementById(`equipoCamiseta`).value
    let talle = document.getElementById(`talleCamiseta`).value
    let dorsal = document.getElementById(`dorsalCamiseta`).value*/

    let camiseta = new Camiseta (datForm.get(`equipo`), datForm.get(`talle`), datForm.get(`dorsal`), datForm.get(`nombre`) )
    camisetas.push(camiseta)
   
    localStorage.setItem(`camisetas`, JSON.stringify(camisetas))

    formCamisetas.reset()
})


botonPedidos.addEventListener('click', () => {
    let arrayStorage = JSON.parse(localStorage.getItem('camisetas'))
    divCamisetas.innerHTML += "" // para no mostar muchas veces la misma camiseta
    arrayStorage.forEach((camiseta, indice) => {
        
        divCamisetas.innerHTML += `
        <div class="card border-dark mb-3" id="camiseta${indice}" style="max-width: 20rem; margin:4px;">
            <div class="card-header"><h2>${camiseta.equipo}</h2></div>
            <div class="card-body">
                <p class="card-title">Talle: ${camiseta.talle}</p>
                <p class="card-title">Dorsal: ${camiseta.dorsal}</p>
                <p class="card-title">Nombre: ${camiseta.nombre}</p>
                
                <button class="btn btn-danger">Eliminar Camiseta</button>
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
