import {burgInit, hideMobileMenu} from './common/burger.js'


document.addEventListener('DOMContentLoaded', () => {

    //  smooth scroll
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
            anchor.addEventListener('click', function (e) {
            e.preventDefault()
        
            const blockID = anchor.getAttribute('href').substring(1)
            if(document.getElementById(blockID)) {
                document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
                })
            }
        })
    }


    const hidePagi = condition => {
        if(condition){
            document.querySelector('.page-navigation').classList.add('hide')
            return
        }
        document.querySelector('.page-navigation').classList.remove('hide')
    }

    // burger
    burgInit([hidePagi])



     //////////  scrolling



     setTimeout(() => {
        window.scrollTo(0, 0);
        document.body.classList.add("stop-scrolling");
     }, 100);

    let curSection = 0 
    
    const scrollAnhors = document.querySelectorAll('[data-anchor]')
    let scrollTop = 0
    const paginationLinks = Array.from(document.querySelectorAll('.page-navigation__link'))

    const pagiPrgrs = document.querySelector('.page-navigation__progress-inner')
    const pagiPrgrsMove = value => {
       
        pagiPrgrs.style.top = `calc(${100 / (scrollAnhors.length -1) * value  + '%'} - ${65/ (scrollAnhors.length -1) * value }px)`
    }

    const setCurrent = () =>{
        scrollAnhors.forEach( s => {
            s.classList.remove('current')
        })
        scrollAnhors[curSection].classList.add('anim')
        scrollAnhors[curSection].classList.add('current')
    }
    setCurrent()

    paginationLinks.forEach( l => {

        l.href = '#'
        l.addEventListener('click', e => {
            hideMobileMenu()
            curSection = paginationLinks.indexOf(e.target)
            scrollTop = 0

            for (let index = 0; index < curSection; index++) {
                scrollTop += scrollAnhors[index].offsetHeight
            }

            document.querySelector('.wrapper').style.transform = `translateY(-${scrollTop}px)`

            pagiPrgrsMove(curSection)
            setCurrent()

        })
    })

    const down = () => {
        console.log(curSection)
        scrollTop += scrollAnhors[curSection].offsetHeight
        document.querySelector('.wrapper').style.transform = `translateY(-${scrollTop}px)`
        curSection++

        setCurrent()

        hideMobileMenu()
    }
    const up = () => {
        curSection--
        scrollTop -= scrollAnhors[curSection].offsetHeight
        document.querySelector('.wrapper').style.transform = `translateY(-${scrollTop}px)`

        setCurrent()

        hideMobileMenu()
    }
    
    document.addEventListener('wheel', e => {

        if(e.deltaY > 0) {

            if(curSection != scrollAnhors.length-1){
                down()
            }

        } else{
            if(curSection != 0){
                up()
            }
        }
        pagiPrgrsMove(curSection)
    })

    document.addEventListener('touchstart', (e) => {

        window.scroll(() => { if( body.scrollTop > 0 ) body.scrollTop(0) } )
    
        const positionY = e.touches[0].clientY
        let newPositionY 
        let tStart = e.touches[0].clientY
    
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
            
            document.removeEventListener('touchmove', newPos)
    
            if(newPositionY > positionY){
    
                if(curSection != 0){
                    up()
                }
                pagiPrgrsMove(curSection)
    
            } else if (newPositionY < positionY){

                if(curSection != scrollAnhors.length-1){
                    down()
                }

                pagiPrgrsMove(curSection)
            }
        },{once: true}) 
    }) 

    window.addEventListener('resize', e => {
        scrollTop = 0
        for (let index = 0; index < curSection; index++) {
            scrollTop += scrollAnhors[index].offsetHeight
        }
        document.querySelector('.wrapper').style.transform = `translateY(-${scrollTop}px)`
    })
})


