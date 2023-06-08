const menuLink = document.querySelectorAll('.menu__link')

for (link of menuLink) {
    link.addEventListener('click', showSub)
}

function showSub (event) {
    if (this.nextElementSibling.matches('.menu_sub')) {
        event.preventDefault()
        for (sub of this.closest('.menu_main').querySelectorAll('.menu_sub')) {
            if (sub.matches('.menu_active')){
                sub.classList.toggle('menu_active')
            }
        }
        this.nextElementSibling.classList.toggle('menu_active'); 
    }
    
}

