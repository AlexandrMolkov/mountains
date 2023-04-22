/////////////////// popup

document.querySelectorAll('.account-reg').forEach( b => {
    b.addEventListener('click', (e) => {
    document.getElementById('popupreg')
        .classList.add('visible')
        document.body.classList.add(`lock`)
    })
})
document.querySelectorAll('.account-auth').forEach( b => {
    b.addEventListener('click', (e) => {
    document.getElementById('popupauth')
        .classList.add('visible')
        document.body.classList.add(`lock`)
    })
})

document.querySelectorAll('.popup-registration').forEach(modal => {
    modal.addEventListener('click', e => {
        e.target.classList.remove('visible')
        if(!document.querySelector('.header__mobile-menu').classList.contains('show') && e.target.classList.contains('popup-registration')){
            document.body.classList.remove(`lock`)
        }
        
        })
})



document.querySelectorAll('.popup-registration__exit-button')
    .forEach( b => {    
        b.addEventListener('click', (e) => {
            e.target.closest('.popup-registration')
            .classList.remove('visible')
            if(!document.querySelector('.header__mobile-menu').classList.contains('show')){
                document.body.classList.remove(`lock`)
            }
        })
    })




    window.addEventListener('resize', () =>  {
        document.body.classList.remove(`lock`)
        document.getElementById('popupreg').classList.remove('visible')
        document.getElementById('popupauth').classList.remove('visible')
    });





     // account popup

     document.querySelectorAll('.btn-account').forEach( btn => {
        btn.addEventListener('click', e =>{
            document.querySelector('.popup-account').classList.add('active')
            document.body.classList.add(`lock`)
        })
    })

    document.querySelectorAll('.popup__close-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            let popup
            const f = (target) => {
                if(target.parentNode.classList.contains('popup')) popup = target.parentNode
                else{
                    f(target.parentNode)
                }
            }
            f(e.target)
            popup.classList.remove('active')
            document.body.classList.remove(`lock`)
        })
    })

    document.querySelector('#getcode')?.addEventListener('click', () => {
            document.querySelector('.popup__inner.code').classList.add('active')
    })