"use strict"
    // product gallery
    document.querySelectorAll('.product-gallery-thumb').forEach( th => {
        th.addEventListener('click', () => {
            const main = document.querySelector('.product-gallery-main')
            main.src = th.dataset.src
            main.classList.remove('animopacity')

            setTimeout(() => {
                main.classList.add('animopacity')
            }, 0);
        })
    })


window.addEventListener('resize', () =>  {
    document.body.classList.remove(`lock`)
    burgResize()
});