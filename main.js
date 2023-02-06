const bodyId = document.body.setAttribute("id", "elbodi")
const body = document.getElementById('elbodi')

//Landing page
const sectionBtn = document.querySelector('.btns')
const btnDeck = document.querySelector('.btn-deck')
const store = document.querySelector('.btn-store')
const help = document.querySelector(".btn-instrucciones")
const starGame = document.querySelector('.btn-starGame')

//Carts
let createDiv = document.createElement('div')
let text = document.createElement('p')
let randomDeck = aleatorio(0, 4)
let randomNumber = aleatorio(0, 10)

//Data structuring
const mazoAmor = {
    bgColor: 'linear-gradient(180deg, rgba(208,66,61,1) 0%, rgba(87,119,167,1) 50%, rgba(239,249,243,1) 100%)',
    cartas: [
        "¿Cuándo supiste que estás enamorado / a de tu pareja ?",
        "¿Cómo describirías el amor que sientes por tu pareja?",
        "¿Qué es lo más importante en una relación para ti?",
        "¿Cómo te sientes acerca de la intimidad y la sexualidad en tu relación?",
        "¿Qué piensas sobre la fidelidad en una relación?",
        "¿Has tenido alguna vez conflictos importantes en tu relación ? ¿Cómo los manejaron?",
        "¿Cómo describirías la importancia de la comunicación en una relación?",
        "¿Qué piensas sobre las expectativas en una relación ? ¿Crees que es importante hablar de ellas ?",
        "¿Cómo te sientes acerca del compromiso en tu relación?",
        "¿Cómo describirías el apoyo emocional en una relación?",
        "¿Qué piensas sobre la resolución de conflictos en una relación?",
        "¿Cómo describirías la importancia de la independencia en una relación ?",
        "¿Has tenido alguna vez una conversación abierta y sincera sobre fantasías sexuales con tu pareja ?",
        "¿Cómo describirías el sexo en tu relación ? ¿Crees que es importante ?",
        "¿Cómo te sientes acerca de la expresión emocional en tu relación?",
        "¿Has hablado alguna vez con tu pareja sobre tus inseguridades y miedos en la relación?",
        "¿Qué piensas sobre las metas a largo plazo en una relación ?",
        "¿Cómo describirías la importancia de la confianza en una relación ?",
        "¿Has hablado alguna vez con tu pareja sobre tus necesidades emocionales y sexuales?",
        "¿Cómo describirías el papel de la amistad en una relación romántica?",
        "¿Has hablado alguna vez con tu pareja sobre tus deseos y expectativas en la vida en pareja?",
        "¿Qué piensas sobre el uso de juguetes sexuales en una relación ?",
        "¿Cómo describirías la importancia de la aventura y la exploración en una relación sexual?"
    ]
}
const mazoRelaciones = {
    bgColor: 'linear-gradient(180deg, rgba(89,120,169,1) 0%, rgba(222,122,118,1) 50%, rgba(232,176,156,1) 100%)',
    cartas: [
        "¿Cuál es el recuerdo más valioso que tienes con tus amigos?",
        "¿Qué es lo que más te gusta hacer con tus amigos?",
        "¿Cuál es el secreto de una buena amistad?",
        "¿Cuándo fue la última vez que hiciste algo fuera de tu zona de confort por un amigo?",
        "¿Qué harías si tu mejor amigo necesitara ayuda, pero corriera un gran riesgo?",
        "¿Cómo describirías a tus amigos en tres palabras cada uno?",
        "¿Cómo lidias con la distancia y el tiempo lejos de tus amigos?",
        "¿Qué harías si descubrieras que un amigo está teniendo problemas y no quiere hablar de ellos?",
        "¿Cómo describirías el sentido del humor de tus amigos?",
        "¿Cómo describirías a tu grupo de amigos en general?",
        "¿Cómo te afecta cuando un amigo se aleja o termina una amistad?",
        "¿Qué piensas sobre la lealtad en las amistades?",
        "¿Has tenido alguna vez una amistad tóxica? ¿Cómo lo manejaste?",
        "¿Cuál es la cosa más loca que hayas hecho con tus amigos?",
        "¿Has perdonado a algún amigo por algo que te haya hecho daño?",
        "¿Qué piensas sobre las amistades a distancia?",
        "¿Cómo te afecta cuando alguien te dice algo negativo sobre un amigo?",
        "¿Has tenido alguna vez una amistad en la que ambos tenían sentimientos románticos el uno por el otro?",
        "¿Cómo describirías la importancia de la confianza en las amistades?",
        "¿Has tenido alguna vez una amistad en la que alguien se sienta excluido?",
        "¿Qué piensas sobre las amistades en línea?",
        "¿Cómo te afecta cuando un amigo se mete en una relación seria y pasa menos tiempo contigo?",
        "¿Has tenido alguna vez una amistad en la que alguien tenga una personalidad opuesta a la tuya?",
        "¿Cómo describirías la importancia de la comunicación en las amistades ?"]
}
const mazoPicante = {
    bgColor: 'linear-gradient(180deg, RGBA(65, 88, 208, 0%), RGBA(200, 80, 192, 50%), RGBA(255, 204, 112, 100%))',
    cartas: [
        "¿Cuál es tu mayor fantasía sexual?", "¿Qué parte del cuerpo te vuelve más loco/a?",
        "¿Qué tengo que hacer para que te derritas de placer?",
        "¿Algún vicio oculto?", "¿Te gusta que te aten?",
        "¿Eres más dominante o dominado?",
        "¿Estarías dispuesto a hacer un trío?",
        "¿Qué opinas del intercambio de parejas?",
        "¿Con qué postura sexual gritas de placer?",
        "¿Tienes puesta una tanga?"
    ]
}
const mazoRandom2 = {
    bgColor: 'linear-gradient(180deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
    cartas:
        ["¿Cómo sería para ti un día perfecto?", "¿Crees en el poliamor?", "¿Qué cambiarías de ti?", "¿Qué es lo que más te gusta de ti?", "¿Dónde te gustaría perderte?", "¿Qué valoras más en una persona?", "¿Qué no perdonarías nunca?", "¿Cuál es tu mayor inseguridad?", "¿Tienes algún complejo con tu físico?", "¿Qué 3 deseos le pedirías a una lámpara mágica?", "¿Qué cosas de mí te encantan?"]
}
const mazoRandom1 = {
    bgColor: 'linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)',
    cartas:
        ["Elegimos lo que somos o nos lo impone nuestro entorno", "¿Cuáles son tus propósitos por cumplir?", "¿Qué aprendiste de vos éste año?", "¿Qué aprendiste muy tarde en la vida?", "¿Cuál es tu cita más memorable?", "¿Cuál es tu mejor anécdota?", "¿Has cambiado de opinión sobre algo recientemente?", "¿Qué haría hacerte sentir más cerca de mí?", "¿Qué te está diciendo mi lenguaje corporal justo ahora?", "¿Cómo muestro que te amo sin decirtelo?", "¿Cuál fue tu primera impresión de mi?"]
}
const decks = [mazoRandom1, mazoRandom2, mazoPicante, mazoRelaciones, mazoAmor]

//Starting game
function gameStart() {
    //Setting bg-color
    body.style.backgroundImage = decks[randomDeck].bgColor
    //Remove button
    sectionBtn.remove()
    //Appending
    body.appendChild(createDiv)
    createDiv.appendChild(text)
    //Setting attributes
    createDiv.setAttribute('id', 'carta')
    text.setAttribute('id', 'content')
    //Randomness
    text.textContent = decks[randomDeck].cartas[randomNumber]
    decks[randomDeck].cartas.splice(randomNumber, 1)
    navBar()
    //Card listener
    createDiv.addEventListener('click', newCard)
}

function newCard() {
    let content = document.getElementById('content')
    let card = document.getElementById('carta')

    let i = decks[randomDeck].cartas.length

    if (i >= 0) {
        i--
        let randomNumber = decks[randomDeck].cartas.splice(Math.floor(Math.random() * decks[randomDeck].cartas.length), 1);
        /*  console.log(decks[randomDeck].cartas) */
        content.textContent = randomNumber

        if (i == -1) {
            //Appending
            body.appendChild(createDiv)
            createDiv.appendChild(text)
            //Setting attributes
            createDiv.setAttribute('id', 'carta')
            text.setAttribute('id', 'final')
            //Removing navbar
            let barnav = document.getElementById('navbar')
            barnav.remove()
            //End page
            let final = document.getElementById('final')
            let finalMessage = "Terminó el juego"
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
    location.assign('pages/decks/decks.html')
}
function relocationStore() {
    location.assign('pages/store/store.html')
}
function relocationHelp() {
    location.assign('pages/help/help.html')
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function navBar() {
    //Navbar vars
    const navBar = document.createElement('nav')
    const ul = document.createElement('ul')
    const anchor = document.createElement('a')
    const anchor1 = document.createElement('a')
    const anchor2 = document.createElement('a')
    const anchor3 = document.createElement('a')
    const icon = document.createElement('img')
    const icon1 = document.createElement('img')
    const icon2 = document.createElement('img')
    const icon3 = document.createElement('img')

    const links = [
        {
            text: "Backward",
            icon: "/public/icons/navbar/backward.svg",
            url: "/main.html"
        },
        {
            text: "Mazos",
            icon: "/public/icons/navbar/mazos.svg",
            url: "/pages/decks/decks.html"
        },
        {
            text: "Tienda",
            icon: "/public/icons/navbar/tienda.svg",
            url: "/pages/store/store.html"
        },
        {
            text: "Instrucciones",
            icon: "/public/icons/navbar/help.svg",
            url: "/pages/help/help.html"
        }
    ]
    //NavBar
    navBar.setAttribute('id', 'navbar')
    anchor.href = links[0].url
    anchor1.href = links[1].url
    anchor2.href = links[2].url
    anchor3.href = links[3].url
    icon.src = links[0].icon
    icon1.src = links[1].icon
    icon2.src = links[2].icon
    icon3.src = links[3].icon

    icon.setAttribute('class', 'icon')
    icon1.setAttribute('class', 'icon1')
    icon2.setAttribute('class', 'icon2')
    icon3.setAttribute('class', 'icon3')
    body.appendChild(navBar)
    navBar.appendChild(ul)
    ul.appendChild(anchor)
    ul.appendChild(anchor1)
    ul.appendChild(anchor2)
    ul.appendChild(anchor3)
    anchor.appendChild(icon)
    anchor1.appendChild(icon1)
    anchor2.appendChild(icon2)
    anchor3.appendChild(icon3)
}

starGame.addEventListener('click', gameStart)
btnDeck.addEventListener('click', relocationDecks)
store.addEventListener('click', relocationStore)
help.addEventListener('click', relocationHelp)