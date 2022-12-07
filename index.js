const bodyId = document.body.setAttribute("id", "elbodi")
const body = document.getElementById('elbodi')
let boton = document.createElement('button')
let createDiv = document.createElement('div')
let texto = document.createElement('p')


let mazo1 = ["Elegimos lo que somos o nos lo impone nuestro entorno", "¿Cuáles son tus propósitos por cumplir?", "¿Qué aprendiste de vos éste año?", "¿Qué aprendiste muy tarde en la vida?", "¿Cuál es tu cita más memorable?", "¿Cuál es tu mejor anécdota?", "¿Has cambiado de opinión sobre algo recientemente?", "¿Qué haría hacerte sentir más cerca de mí?", "¿Qué te está diciendo mi lenguaje corporal justo ahora?", "¿Cómo muestro que te amo sin decirtelo?", "¿Cuál fue tu primera impresión de mi?"];

//Ejecución de juego
function jugando() {
    //Removición
    boton.style.display = "none"
    //Agregación
    body.appendChild(createDiv)
    createDiv.appendChild(texto)
    //Atributacion
    createDiv.setAttribute('id', 'carta')
    texto.setAttribute('id', 'contenido')
    //Modificación - Aleatoreidad
    let randomNumber = aleatorio(0, 10)
    texto.textContent = mazo1[randomNumber]
    mazo1.splice(randomNumber, 1)
    //Escuchación
    createDiv.addEventListener('click', nuevaCarta)
}

function nuevaCarta() {
    let contenido = document.getElementById('contenido')
    let i = mazo1.length

    if (i >= 0) {
        i--
        let randomNumber = mazo1.splice(Math.floor(Math.random() * mazo1.length), 1);
        console.log(mazo1)
        contenido.textContent = randomNumber
        if (i == -1) {
            let mensajeFinal = "Se acabó el mazo."
            contenido.textContent = mensajeFinal
            reinicializar()
        }
    } else {
        console.error("Se jodió la vaina")
    }
}
//Reinicializar el juego
function reinicializar() {
    //Creación de variables
    let botonReinicio = document.createElement('button')
    let botonMazos = document.createElement('button')
    let botonTiendas = document.createElement('button')
    //Remover el listener
    createDiv.removeEventListener("click", nuevaCarta)
    //Boton para reiniciar
    body.appendChild(botonReinicio)
    botonReinicio.textContent = "Volver a jugar"
    botonReinicio.setAttribute('id', 'boton')
    botonReinicio.addEventListener('click', recargar)
    //Boton para escoger otro mazo
    body.appendChild(botonMazos)
    botonMazos.textContent = "Otros mazos"
    botonMazos.setAttribute('id', 'boton')
    botonMazos.addEventListener('click', relocation)
    //Boton para ir a la tienda
    body.appendChild(botonTiendas)
    botonTiendas.textContent = "Tienda"
    botonTiendas.setAttribute('id', 'boton')
    botonTiendas.addEventListener('click', recargar)
}
//Recargar
function recargar() {
    location.reload()
}
//A otra pagina
function relocation() {
    location.assign("./decks.html")
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

body.appendChild(boton)
boton.textContent = "Iniciar juego"
boton.addEventListener('click', jugando)