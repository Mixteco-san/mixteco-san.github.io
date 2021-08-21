import {handleSubmit} from "./formulary.js"
import './components/proyects-desk.js'

const formulary = document.querySelector('#form')

const loadContainer = document.querySelector('#load__container')
const typingAnimation = document.querySelector('.typing--animation')

const skillsSoftsContainer = document.querySelector('.skills_softs')
const skillSoftTxt = document.querySelector('.skills_soft_txt')
const skillSoftImg = document.querySelector('.skills_soft_img')

const aboutContainer = document.querySelector('.about')
const aboutImg = document.querySelector('.about__img')
const aboutTxt = document.querySelector('.about__text')

// ---------- Obsevador de intersecciones ------------
const isIntersect1 = (entry) => {
    return entry.isIntersecting
}

const activeAnimation = (data) => {
    if(data.target.className === 'skills_softs') {
        const dataSkills = data.target

        skillSoftTxt.classList.add('activate')
        skillSoftImg.classList.add('activate')

        observer.unobserve(dataSkills)
    }
    else if (data.target.className === 'about') {
        const dataAbout = data.target

        aboutImg.classList.add('activate')
        aboutTxt.classList.add('activate')

        observer.unobserve(dataAbout)
    }
}

const observer = new IntersectionObserver( (entries) => {
    entries.filter(isIntersect1).forEach(activeAnimation);
})

const registerContent = (containerSkill, containerAbout) => {
    observer.observe(containerSkill)
    observer.observe(containerAbout)
}

const canShow = () => {
    registerContent(skillsSoftsContainer, aboutContainer)
}

const moveYRemove = () => {
    skillSoftTxt.classList.remove('activate')
    skillSoftImg.classList.remove('activate')
}

const moveXRemove = () => {
    aboutImg.classList.remove('activate')
    aboutTxt.classList.remove('activate')

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
// Apagar movimientos de containers
skillSoftImg.addEventListener('animationend', moveYRemove)
aboutTxt.addEventListener('animationend', moveXRemove)
// Escuchamos al formulario
formulary.addEventListener('submit', handleSubmit)