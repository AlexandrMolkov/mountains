"use strict"

let cbClick
const clickCallback = (condition) => {
    if(cbClick) {
        cbClick.forEach( cb =>{
            cb(condition)
        })
    }

}
export const burgInit = (clickCallbacks=undefined) => {
    const blur = document.querySelector('.blur')
    cbClick = clickCallbacks
    document.addEventListener('click', (e) => {
        if(e.target.classList.contains('blur') || e.target.classList.contains('mobile-menu')){
            clickCallback(false)
            document.querySelectorAll(`.burg`)
                .forEach( b => {
                    b.classList.remove(`open`)
                    document.body.classList.remove(`lock`)
                    blur.classList.remove('blur_active')
                    document.querySelector(b.dataset.target).classList.remove(`show`)
                })
        }
})

document.querySelectorAll(`.burg`)
    .forEach( b => {
        const target = document.querySelector(b.dataset.target)
        const inner = document.querySelector('burg__inner')
        target.classList.add(`nav-burg`)
        
        target.addEventListener('click', e => {
            if(e.target.classList.contains('nav__link')) {
                hideMobileMenu()
                
            }
        })

        b.addEventListener('click', (e) => {
            if(e.target.closest('.burg')) {
                const burg = e.target.closest('.burg')
                burg.classList.toggle(`open`)
                blur.classList.add('blur_active')
                document.querySelector(burg.dataset.target).classList.toggle(`show`)

                if (document.querySelector(burg.dataset.target).classList.contains(`show`))
                {
                    document.body.classList.add(`lock`)
                    clickCallback(true)
                } else{
                    document.body.classList.remove(`lock`)
                    blur.classList.remove('blur_active')
                    clickCallback(false)
                }
            }
        })
    })
}




export const hideMobileMenu = () => {
    const burg = document.querySelector(`.burg`)
    document.body.classList.remove(`lock`)
    document.querySelector(burg.dataset.target).classList.remove(`show`)
    burg.classList.remove(`open`)
    document.querySelector('.blur').classList.remove('blur_active')
    clickCallback(false)
}



window.addEventListener('resize', () =>  {
    hideMobileMenu()
});
