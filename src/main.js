
const bodyId = document.body.setAttribute("id", "elbodi")
const body = document.getElementById('elbodi')

const sectionBtn = document.querySelector('.btns')
const decks = document.querySelector('.btn-deck')
const store = document.querySelector('.btn-store')
const starGame = document.querySelector('.btn-starGame')


let createDiv = document.createElement('div')
let text = document.createElement('p')


let mazo1 = ["Elegimos lo que somos o nos lo impone nuestro entorno", "¿Cuáles son tus propósitos por cumplir?", "¿Qué aprendiste de vos éste año?", "¿Qué aprendiste muy tarde en la vida?", "¿Cuál es tu cita más memorable?", "¿Cuál es tu mejor anécdota?", "¿Has cambiado de opinión sobre algo recientemente?", "¿Qué haría hacerte sentir más cerca de mí?", "¿Qué te está diciendo mi lenguaje corporal justo ahora?", "¿Cómo muestro que te amo sin decirtelo?", "¿Cuál fue tu primera impresión de mi?"];

//Starting game
function gameStart() {
    //Setting bg-color
    body.style.backgroundImage = "linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)";
    body.style.transition = '0.5s'
    //Remove button
    sectionBtn.remove()
    //Appending
    body.appendChild(createDiv)
    createDiv.appendChild(text)
    //Setting attributes
    createDiv.setAttribute('id', 'carta')
    text.setAttribute('id', 'content')
    //Randomness
    let randomNumber = aleatorio(0, 10)
    text.textContent = mazo1[randomNumber]
    mazo1.splice(randomNumber, 1)
    //Card listener
    createDiv.addEventListener('click', newCard)
}

function newCard() {
    let content = document.getElementById('content')
    let card = document.getElementById('carta')

    let i = mazo1.length

    if (i >= 0) {
        i--
        let randomNumber = mazo1.splice(Math.floor(Math.random() * mazo1.length), 1);
        console.log(mazo1)
        content.textContent = randomNumber

        if (i == -1) {
            //Appending
            body.appendChild(createDiv)
            createDiv.appendChild(text)
            //Setting attributes
            createDiv.setAttribute('id', 'carta')
            text.setAttribute('id', 'final')
            //End page
            let final = document.getElementById('final')
            let finalMessage = "Se acabó el mazo."
            final.textContent = finalMessage
            card.removeAttribute('id')
            body.style.backgroundImage = "none";
            final.addEventListener('click', reload)
            reinitialize()
        }
    } else {
        console.error("Failed")
    }
}
//Reinitializing game
function reinitialize() {
    //Variables creation
    let botonReinicio = document.createElement('button')
    let botonMazos = document.createElement('button')
    let botonTiendas = document.createElement('button')
    let divGrid = document.createElement('div')

    //Listener remover
    createDiv.removeEventListener("click", newCard)
    //Reset button
    botonReinicio.textContent = "Inicio"
    botonReinicio.setAttribute('id', 'boton')
    botonReinicio.addEventListener('click', reload)
    //Decks button
    botonMazos.textContent = "Mazos"
    botonMazos.setAttribute('id', 'boton')
    botonMazos.addEventListener('click', relocationDecks)
    //Store button
    botonTiendas.textContent = "Tienda"
    botonTiendas.setAttribute('id', 'boton')
    botonTiendas.addEventListener('click', relocationStore)

    // divContainer
    body.appendChild(divGrid)
    divGrid.appendChild(botonReinicio)
    divGrid.appendChild(botonMazos)
    divGrid.appendChild(botonTiendas)
    //Grid styling
    divGrid.setAttribute('id', 'grid-container')
}
//Reloading
function reload() {
    location.reload()
}
//Going to another page
function relocationDecks() {
    location.assign("./decks/decks.html")
}
function relocationStore() {
    location.assign('./store/store.html')
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}



starGame.addEventListener('click', gameStart)
decks.addEventListener('click', relocationDecks)
store.addEventListener('click', relocationStore)