// Toogle Navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    //remove toogle icon
menuIcon.classList.remove('bx-x')
navbar.classList.remove('active')
}

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['IDN Bording School Student', 'Frontend Developer', 'Like Spaghetti Carbonara'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
})

let circularProgress = document.querySelector (".circular-progress"),
    progressValue = document.querySelector (".progress-value");

let progressStartValue = 0,
    progressEndValue = 90,
    speed = 100;

let progress = setInterval (() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#b8cbd5 ${progressStartValue * 3.6}deg, #ededed 0deg)`
   
    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }


}, speed);
