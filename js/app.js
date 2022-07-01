const nav = document.querySelector('.navbar'); 
const arrowBtn = document.getElementById('down-arrow');
const emailSection = document.querySelector('.email');
const webSection = document.querySelector('.web');
window.addEventListener('scroll', fixedNav);

function fixedNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        emailSection.style.display = 'block'
        webSection.style.display = 'block'
        nav.classList.add('active')
        
       
    } else {
        emailSection.style.display = 'none'
        webSection.style.display = 'none'
        nav.classList.remove('active')
    }
}



arrowBtn.addEventListener('click', function(e) {
    if(emailSection.style.display = 'none')
    if(webSection.style.display = 'none') {
        emailSection.style.display = 'block';
        webSection.style.display = 'block';
    }
})





