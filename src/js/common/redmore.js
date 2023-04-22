document.querySelector('.achievements__read-more')?.addEventListener('click', e => {
    const btn = e.target
    btn.classList.toggle('active')
    if (btn.classList.contains(('active'))) {
        e.target.innerText = 'Скрыть'
    } else {
        e.target.innerText = 'показать ещё'
    }
    
})