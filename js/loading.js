var loadContainer = document.querySelector('#load__container')
var typingAnimation = document.querySelector('.typing--animation')

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