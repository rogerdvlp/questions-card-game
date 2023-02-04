const navMenu = document.querySelector('.nav-menu');
const navLogo = document.querySelector('.logo')


navMenu.addEventListener('click', getMenu)
navLogo.addEventListener('click', goHome)

function getMenu() {

}

function goHome() {
    location.assign('/src/main.html')
}
