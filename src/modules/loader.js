import { canShow } from './observer.js'

export const offLoader = (loadContainer, typingAnimation) => {
    const d = document

    const $skillsSoftsContainer = d.querySelector('.skills_softs')
    const $aboutContainer = d.querySelector('.about')
    
    loadContainer.style.opacity = '0'
    loadContainer.style.visibility = '0'

    if( typingAnimation.classList.contains('active') ) {
        typingAnimation.classList.remove('active')
    }
    else {
        typingAnimation.classList.add('active')
        loadContainer.style.display = 'none'
        
        window.removeEventListener('load', offLoader)
        canShow($skillsSoftsContainer, $aboutContainer)
    }
}