const nav = document.querySelector('.navbar'); 
const arrowBtn = document.getElementById('down-arrow');
const emailSection = document.querySelector('.email');
const webSection = document.querySelector('.web');
const serviceAnimation = document.querySelector('.service-title');
const skills = document.querySelector('.skills');
window.addEventListener('scroll', fixedNav);

function fixedNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        
        nav.classList.add('active')
        emailSection.classList.add('scroll')
        webSection.classList.add('scroll')
        serviceAnimation.classList.add('move')
        skills.classList.add('move')
        
       
    } else {
       
        nav.classList.remove('active')
        emailSection.classList.remove('scroll')
        webSection.classList.remove('scroll')
        serviceAnimation.classList.remove('move')
        skills.classList.remove('move')
       
    }
}









