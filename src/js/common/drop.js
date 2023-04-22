"use strict"

const drops = document.querySelectorAll('.drop')

const dropCheck = (e) => {
    const el = e.target.closest('.drop')
    const content = el.querySelector('.drop__content')

    if(el.dataset.hidden == 'true') {
        el.dataset.hidden = 'false'
        content.style.marginTop = '0px'
        el.classList.add('show')

    } else {
        content.style.marginTop = `-${content.offsetHeight}px`
        el.dataset.hidden = 'true'
        el.classList.remove('show')
    }
}

const dropCheckHidden = () => {
    drops.forEach((el)=>{
        const content = el.querySelector('.drop__content')
        if(!el.dataset.hidden) el.dataset.hidden = 'true'
        if(el.dataset.hidden === 'true') content.style.marginTop = `-${content.offsetHeight}px`
        
        el.removeEventListener('click', dropCheck)
        el.addEventListener('click', dropCheck)
    })
}
dropCheckHidden()


window.onresize = ()=>{
    dropCheckHidden()
}