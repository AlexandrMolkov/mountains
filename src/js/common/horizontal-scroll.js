"use strict"
if(document.querySelector('.scroll-horizontal')){
        document.querySelectorAll('.scroll-horizontal').forEach( el => {
            el.addEventListener('wheel', e => {
                e.preventDefault()
                el.scrollLeft += e.deltaY;
            })
        })
}
