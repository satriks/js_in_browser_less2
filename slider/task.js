const sliderItem = Array.from(document.querySelectorAll('.slider__item'))
const sliderDot = Array.from(document.querySelectorAll('.slider__dot'))

document.querySelector('.slider__arrow_prev').addEventListener('click', prevSlide)
document.querySelector('.slider__arrow_next').addEventListener('click', nextSlide)
sliderDot.forEach(x => x.addEventListener('click', pickSlide))
// let ind = 0

function slideOn (ind) {
    sliderItem[ind].classList.toggle('slider__item_active')
    sliderDot[ind].classList.toggle('slider__dot_active')
}

function checkSlide () {
    let ind = sliderItem.findIndex(x => x.matches('.slider__item_active'))
    slideOn(sliderItem.findIndex(x => x.matches('.slider__item_active')))
    return ind
}

function nextSlide (){
    let ind = checkSlide()
    if ( ind + 1 == sliderItem.length ) {
        ind = -1
    }
    slideOn(ind +1)
}

function prevSlide (){
    let ind = checkSlide()
    if ( ind - 1 <  0  ) {
        ind = sliderItem.length 
    }
    slideOn(ind -1)
}

function pickSlide () {
    checkSlide()
    slideOn (sliderDot.indexOf(this))
}