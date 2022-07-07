const nav = document.querySelector('.navbar'); 
const arrowBtn = document.getElementById('down-arrow');
const emailSection = document.querySelector('.email');
const webSection = document.querySelector('.web');
const serviceAnimation = document.querySelector('.service-title');
const skills = document.querySelector('.skills');
const card = document.querySelector('.g-col-6');
const arrowTop = document.querySelector('.arrow-top')
const textEl = document.getElementById('text')
const text = "<Hi, I'm Edwin./>"
window.addEventListener('scroll', fixedNav);

function fixedNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
        
        emailSection.classList.add('scroll')
        webSection.classList.add('scroll')
        serviceAnimation.classList.add('move')
        skills.classList.add('move')
        arrowTop.classList.remove('pageUp')
    } else {
        nav.classList.remove('active')
        
        emailSection.classList.remove('scroll')
        webSection.classList.remove('scroll')
        serviceAnimation.classList.remove('move')
        skills.classList.remove('move')
        arrowTop.classList.add('pageUp')
    }
}


let textIdx = 1;
writeText();

function writeText() {
    textEl.innerText = text.slice(0, textIdx)
    textIdx++

    if(textIdx > text.length) {
        textIdx = text.value.innerText
    }

    setTimeout(writeText, 300)
}
       









