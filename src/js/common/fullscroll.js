"use strict"

const fullScroll = document.querySelector('#full-scroll')
const container = fullScroll.querySelector('.full-scroll-container')
const pagi = fullScroll.querySelector('.full-scroll-pagination')
let cur = 0
let curSlide

for(let i = 0; i < container.children.length ; i++){
    if(container.children[i].firstElementChild?.clientHeight > container.clientHeight) {
        container.children[i].firstElementChild.style.alignSelf = 'flex-start'

        const element = container.children[i]

        setInterval(() => {
            if(!element.scrollTop || element.scrollHeight === element.scrollTop + element.offsetHeight) {
                console.log(true)
                element.style.touchAction = 'none';
            } else {
                element.style.touchAction = 'auto';
                console.log(false)
            }
        }, 10);

    }

    const pagiButton = document.createElement('button')
    pagiButton.classList.add('full-scroll-pagination-button')
    pagiButton.setAttribute('data-id',`${i}`)
    
    if(pagi){
        pagi.append(pagiButton) 

        if(!i){
            pagiButton.classList.add('current')
        }
    }


}
if(pagi){
    pagi.addEventListener('click', (e) => {
        if(e.target.closest('.full-scroll-pagination-button')){
            cur = parseInt(e.target.dataset.id)
            for(let i = 0; i < container.children.length ; i++) {
                if(i > 0) {
                    container.children[i].style.top = '100vh'
                }
            }
            for(let i = 0; i < parseInt(e.target.dataset.id) + 1 ; i++) {
                if(i > 0) {
                    container.children[i].style.top = '0vh'
                }
            }
    
            for(let i = 0; i < pagi.children.length ; i++) {
                pagi.children[i].classList.remove('current')
            }
            e.target.classList.add('current')
        }
    })
}




const setCurPag = (cur) => {
    for(let i = 0; i < pagi.children.length ; i++) {
        pagi.children[i].classList.remove('current')
    }
    pagi.children[cur].classList.add('current')
}

const scrollSection = (target,direction) => {

    const prevSection = () => {

        if(target != container.children[0] && curSlide!==target) {
            
            setCurPag(--cur)
            target.style.top = '100vh'
            curSlide = target
        }
    }
    const nextSection = () => {
        if (target != container.children[container.children.length-1] && curSlide!==target) {
            
           setCurPag(++cur)
           curSlide = target
            target.nextElementSibling.style.top = '0vh'
        }
    }

    switch(direction){
        case 'prev': prevSection()
            break;
        case 'next': nextSection()
            break;
    }

    
        
}

document.addEventListener('mousedown', (e) => {
    e.preventDefault();
    
    const positionY = e.clientY
    
    document.addEventListener('mouseup', (e) => {
        const target = document.elementFromPoint(e.clientX, e.clientY).closest(".full-scroll-item")
        const newPositionY = e.clientY
        if(newPositionY > positionY){
            if(target.scrollTop <= 0){
                scrollSection(target, 'prev')
            } else {
                
                target.scrollBy(0,-300)
            }
            
        } else if (newPositionY < positionY){
            if(target.offsetHeight + target.scrollTop >= target.scrollHeight){
                scrollSection(target, 'next')
            }else {
                
                target.scrollBy(0,300)
            }
        }
    },{once: true}) 
}) 



document.addEventListener('wheel', (e) => {

    
        const target = document.elementFromPoint(e.clientX, e.clientY).closest(".full-scroll-item")

        if(e.deltaY < 0 && target.scrollTop <= 0) {
            scrollSection(target, 'prev')
        } 
        if (e.deltaY > 0 && target.offsetHeight + target.scrollTop >= target.scrollHeight) {
           scrollSection(target, 'next')
        }
    
})

document.addEventListener('touchstart', (e) => {

    window.scroll(() => {if(body.scrollTop>0) body.scrollTop(0)})

    const positionY = e.touches[0].clientY
    let newPositionY 
    let tStart = e.touches[0].clientY + e.target.closest(".full-scroll-item").scrollTop

    const newPos = (e) => {
       newPositionY = e.touches[0].clientY
    }
    const scroll = (e) => {
        const t = e.target.closest(".full-scroll-item")
        const y = (tStart - e.touches[0].clientY) 
        if(t)  {
            t.style.scrollBehavior = 'auto';
            t.scrollTo(0, y);
            tStart = e.touches[0].clientY + t.scrollTop
        }
    }
    
    document.addEventListener('touchmove', newPos)
    document.addEventListener('touchmove', scroll)

    document.addEventListener('touchend', (e) => {
        

        const target = e.target.closest(".full-scroll-item")
        document.removeEventListener('touchmove', newPos)

        if(newPositionY > positionY && target.scrollTop <= 0){

            scrollSection(target, 'prev')

        } else if (newPositionY < positionY && target.offsetHeight + target.scrollTop >= target.scrollHeight - 10){

            scrollSection(target, 'next')

        }
    },{once: true}) 
}) 