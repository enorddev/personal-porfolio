const nav = document.querySelector('.navbar'); 
const arrowBtn = document.getElementById('down-arrow');
const emailSection = document.querySelector('.email');
const webSection = document.querySelector('.web');
window.addEventListener('scroll', fixedNav);

function fixedNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        
        nav.classList.add('active')
        emailSection.classList.add('scroll')
        webSection.classList.add('scroll')
        
       
    } else {
       
        nav.classList.remove('active')
        emailSection.classList.remove('scroll')
        webSection.classList.remove('scroll')
       
    }
}









