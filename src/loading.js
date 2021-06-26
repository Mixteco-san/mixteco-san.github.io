const loadContainer = document.querySelector('#load__container')
const typingAnimation = document.querySelector('.typing--animation')

const skillsSoftsContent = document.querySelector('.skills_softs')
const skillSoftTxt = document.querySelector('.skills_soft_txt')
const skillSoftImg = document.querySelector('.skills_soft_img')

// ---------- Obsevador de intersecciones ------------
const isIntersect = (entry) => {
    if(entry.isIntersecting) {
        console.log('Estamos intesectando')
        return entry.isIntersecting
    }
    else {
        console.log('Estamos atentos')
    }
}

const activeAnimation = (data) => {
    console.log(data)

    skillSoftTxt.classList.add('activate')
    skillSoftImg.classList.add('activate')

    observer.unobserve(data.target)
}

const observer = new IntersectionObserver( (content) => {
    content.filter(isIntersect).forEach(activeAnimation);
})

const registerContent = (container) => {
    observer.observe(container)
}

const canShow = () => {
    registerContent(skillsSoftsContent)
}

// -------- Preoloading y activacion de typing -------------
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
        canShow()
    }
}

// Observa el inicio
window.addEventListener('load', preloading)

//var bellAnimation = document.querySelector('.bell--animation')

// const moveBell = () => {
//     bellAnimation.classList.add('active--bell') 
// }

// const removeBell = () => {
//     bellAnimation.classList.remove('active--bell')
// }

// bellAnimation.addEventListener('mouseover', moveBell )
// bellAnimation.addEventListener('animationend', removeBell)