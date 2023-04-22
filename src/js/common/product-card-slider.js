    "use strict"
const sliderClassName = 'product-card-slider'
document.querySelectorAll(`.${sliderClassName}`)
    .forEach( sl => {
        const pagi = sl.querySelector(`.${sliderClassName}__pagination`)
        const nav = sl.querySelector(`.${sliderClassName}__navigation`)
        const slides = sl.querySelectorAll(`.${sliderClassName}__slide`)
        const sliderPagiBtns = []
        let curentSlide = 0
        let prevBtn
        let nextBtn
        sl.classList.add('init')

        const removeClasses = () => {
            slides.forEach(s => s.classList.remove(`active`))
            sliderPagiBtns.forEach(btn => btn.classList.remove(`${sliderClassName}__pagination-btn_active`))
        }
        const navBtnclassesToggle = () => {
            prevBtn.classList.toggle('disabled', curentSlide === 0)
            nextBtn.classList.toggle('disabled', curentSlide === slides.length - 1)
        }

        if(pagi){
            slides.forEach( slide => {
                const pagiBtn = document.createElement('button')
                pagiBtn.classList.add(`${sliderClassName}__pagination-btn`)
                pagi.append(pagiBtn)
                sliderPagiBtns.push(pagiBtn)
            })

            sliderPagiBtns[0].classList.add(`${sliderClassName}__pagination-btn_active`)
            sl.addEventListener('click', (e) => {
                if (e.target.classList.contains(`${sliderClassName}__pagination-btn`)){
                    removeClasses()
                    slides[sliderPagiBtns.indexOf(e.target)].classList.add(`active`)
                    e.target.classList.add(`${sliderClassName}__pagination-btn_active`)
                    curentSlide = sliderPagiBtns.indexOf(e.target)

                    if(nav) {
                        navBtnclassesToggle()
                    }
                }
            })
        }

        if(nav) {

            prevBtn = sl.querySelector(`.${sliderClassName}__navigation-prev`)
            nextBtn = sl.querySelector(`.${sliderClassName}__navigation-next`)
            prevBtn.classList.add('disabled')

            const addClasses = () => {
                slides[curentSlide].classList.add(`active`)
                if(pagi) pagi.children[curentSlide].classList.add(`${sliderClassName}__pagination-btn_active`)
            }

            prevBtn.addEventListener('click', e => {
                if(curentSlide) {
                    curentSlide--

                    removeClasses()
                    addClasses()
                    navBtnclassesToggle()
                }

            })
            nextBtn.addEventListener('click', e => {
                if(curentSlide < slides.length - 1) {
                    curentSlide++

                    removeClasses() 
                    addClasses()
                    navBtnclassesToggle()
                }
            })
        }

        slides[0].classList.add('active')
    })