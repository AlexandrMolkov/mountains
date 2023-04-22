const cards = document.querySelectorAll('.card3d')

cards.forEach((c) => {
    const cardWrapper = c.querySelector('.card3d-wrapper')

    let deg = 6
    let tr = '0.1s'
    


    c.addEventListener('mousemove', (e) => {
        let h = c.clientHeight / (deg * 2)
        let w = c.clientWidth / (deg * 2)
        h = -h; w = -w
    
        let x = ((e.clientY - c.getBoundingClientRect().y) / h) + deg
        let y = ((e.clientX - c.getBoundingClientRect().x) / w) + deg
        y *= -1
        cardWrapper.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`
        cardWrapper.style.transition = `${tr}s linear`
    })

    c.addEventListener('mouseleave', () => cardWrapper.style.transform = `rotateX(0deg) rotateY(0deg)`)
})