const modal = document.querySelector('#modal_main')
modal.classList.toggle('modal_active')
const closeBtns = document.querySelectorAll('.modal__close')

for (let btn of closeBtns) {
    btn.addEventListener('click', closeModal)}

function closeModal () {
    if (modal.nextElementSibling.matches('.modal_active')) {
        modal.nextElementSibling.classList.toggle('modal_active')
        modal.classList.toggle('modal_active')
    }
    modal.classList.toggle('modal_active')
}

const succsesModal = document.querySelector('.show-success')

succsesModal.addEventListener('click', showBtn)

function showBtn (){
    modal.nextElementSibling.classList.toggle('modal_active')
}