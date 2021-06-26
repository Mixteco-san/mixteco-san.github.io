const loadContainer = document.querySelector('#load__container')
const typingAnimation = document.querySelector('.typing--animation')
const bellAnimation = document.querySelector('.bell--animation')

const moveBell = () => {
    bellAnimation.classList.add('active--bell') 
}

const removeBell = () => {
    bellAnimation.classList.remove('active--bell')
}

const preloading = () => {
    loadContainer.style.opacity = '0'
    loadContainer.style.visibility = '0'

    if( typingAnimation.classList.contains('active') ) {
        typingAnimation.classList.remove('active')
    }
    else {
        typingAnimation.classList.add('active')
        loadContainer.style.display = 'none'
        
        window.removeEventListener('load', preloading)
    }
}

window.addEventListener('load', preloading)

bellAnimation.addEventListener('mouseover', moveBell )
bellAnimation.addEventListener('animationend', removeBell)