sdocument.querySelectorAll('.rectangles').forEach( r => {
    const rectanglesWrapper = document.createElement('span')
    rectanglesWrapper.classList.add('rect-wrapper')
    
    for (let index = 0; index < 4; index++) {
        const rectanglesFigure = document.createElement('span')
        rectanglesFigure.classList.add('rect-figure')
        rectanglesFigure.setAttribute('data-aos','zoom-in')
        rectanglesFigure.setAttribute('data-aos-delay','250')
        rectanglesFigure.setAttribute('data-aos-duration','750')
        rectanglesWrapper.append(rectanglesFigure)

    }
    r.append(rectanglesWrapper)

    if(r.classList.contains('rectangles_left')) {
        rectanglesWrapper.classList.add('rect-wrapper-left')
    }
    r.style.position = 'relative'
})