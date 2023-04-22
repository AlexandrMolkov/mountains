"use strict"

const closeAllSubMenu = (current = null) => {
    const parents = []
    if(current){
        let currentParent = current.parentNode
        while(currentParent) {
            if (currentParent.classList.contains('root-nav')) break
            if(currentParent.nodeName === 'UL') parents.push(currentParent)
            currentParent = currentParent.parentNode
        }
    }

    const subMenus = document.querySelectorAll('.root-nav ul')
    Array.from(subMenus).forEach(item => {
        if(item != current && !parents.includes(item)) item.classList.remove('sub-menu-active')
    })
}

document.querySelector('.root-nav').addEventListener('click', (e) => {
    if(e.target.nodeName !== 'SPAN') return
    closeAllSubMenu(e.target.nextElementSibling)
    e.target.nextElementSibling.classList.toggle('sub-menu-active')
})
