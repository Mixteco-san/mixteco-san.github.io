import { observer } from "./observer.js"

/* Este modulo recive la señal desde observer.js cuando un elemento
programado fue intersectado, cuando esto sucede activamos las animaciones
de la hoja de estilos */

export const activeAnimations = (data) => {
    // console.log('Esto tiene data', data)
    const d = document
    
    const $aboutImg = d.querySelector('.about__img')
    const $aboutTxt = d.querySelector('.about__text')
    const $skillSoftTxt = d.querySelector('.skills_soft_txt')
    const $skillSoftImg = d.querySelector('.skills_soft_img')

    if(data.target.className === 'skills_softs') {
        // console.log('Se activaran animaciones sobre', data.target)
        const dataSkills = data.target

        $skillSoftTxt.classList.add('activate')
        $skillSoftImg.classList.add('activate')

        observer.unobserve(dataSkills)
    }
    else if (data.target.className === 'about') {
        const dataAbout = data.target

        $aboutImg.classList.add('activate')
        $aboutTxt.classList.add('activate')

        observer.unobserve(dataAbout)
    }
}