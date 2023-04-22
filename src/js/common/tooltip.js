"use strict"

if(document.querySelector('.tooltip')) {

    const tooltip = document.createElement('div')
    tooltip.classList.add('tooltip-content')
    document.body.append(tooltip)

    document.querySelectorAll('.tooltip').forEach(t => {
        if(!tooltip) {
        }
        t.addEventListener('mouseenter', e => {
            const offset = 5
            tooltip.classList.add('active')
            tooltip.innerText = t.textContent
    
            const width = tooltip.getBoundingClientRect().width + 20 
    
            if(e.clientX + width > window.innerWidth){
                tooltip.style.left = e.pageX - width + offset + 'px'
            } else{
                tooltip.style.left = e.pageX + offset + 'px'
               
            }
            if(tooltip.getBoundingClientRect().height + e.pageY > window.innerWidth){
                console.log('if')
                
                tooltip.style.top = e.pageY - tooltip.getBoundingClientRect().height - offset + 'px'
            } else{
                tooltip.style.top = e.pageY + offset + 'px'
            }

        })
        t.addEventListener('mouseout', e => {
            tooltip.classList.remove('active')
        })
    
        window.addEventListener('resize', () =>  {
            tooltip.style.left = 0
            tooltip.style.top = 0
            
        });
    })
}
