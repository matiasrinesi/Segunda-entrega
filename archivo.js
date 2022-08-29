const tablaCamisetas = document.getElementById("tablaCamisetas")
const boton1 = document.getElementById("boton1")

async function mostrarCamisetas() { // le pongo async para aclarar que va a haber elementos asincronos en la funcion
    const camisetas = await fetch('./json/camisetas.json') // defino que algo es asincrono con await
    const camisetasParseadas = await camisetas.json()
    tablaCamisetas.innerHTML = `
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Equipo</th>
                <th scope="col">Modelo</th>
                <th scope="col">Precio</th>
                <th scope="col">Talle</th>
                <th scope="col"></th>
                <th scope="col"></th>
               
            </tr>
        </thead>
            <tbody id="tBody">
            </tbody>
            <tr> 
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th> 
            </tr>
        </table>
    
    `
    camisetasParseadas.forEach((camiseta, indice) => {
        tBody.innerHTML += `

                <tr class="table-light" id="producto${indice + 1}">
                <th scope="row">${indice + 1}</th>
                <td>${camiseta.equipo}</td>
                <td>${camiseta.modelo}</td>
                <td>$${camiseta.precio}</td>
                <td>${camiseta.apellido}</td>
                <td><img src="./images/${camiseta.img}"></td>
                
                </tr>
        `
})}








boton1.addEventListener('click', mostrarCamisetas)

boton1.addEventListener('click', () => {
    mostrarCamisetas()
})