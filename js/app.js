const nav = document.querySelector('.navbar'); 
const arrowBtn = document.querySelector('.arrow');
window.addEventListener('scroll', fixedNav);

function fixedNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}


