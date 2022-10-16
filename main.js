const menuLinks = document.querySelectorAll('.menu__link')

menuLinks.forEach(e => {


    e.addEventListener('click',() => {

        menuLinks.forEach(e => {
            e.classList.remove('menu__link-active')
        })

        e.classList.add('menu__link-active')

    })

})

console.log('asfasfasf')

const accordion = document.querySelector('.accordion')

accordion.addEventListener('click', function(event){
    if(event.target.classList.contains('accordion__upper-content') ||
    event.target.classList.contains('accordion__img') ||
    event.target.classList.contains('accordion_subtitle') 
    ){
        let parentDiv =  event.target.closest('.accordion__content-box')
        console.log(parentDiv)
        parentDiv.querySelector('.accordion__down-content').classList.toggle('accordion__down-content_active')
        parentDiv.querySelector('.accordion__img').classList.toggle('accordion__img-active')
        parentDiv.querySelector('.accordion_subtitle').classList.toggle('accordion_subtitle_active')
    
    }
})



