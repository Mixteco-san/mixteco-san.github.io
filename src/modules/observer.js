import { activeAnimations } from "./active_animations_observer.js"

// Obsevador de intersecciones: Cuando un contenedor programado 
// itersecta por el viewport, este mandara la señal para 
// activar su animacion correspondiente

const isIntersect = (entry) => {
    return entry.isIntersecting
}

export const observer = new IntersectionObserver( (entries) => {
    entries.filter(isIntersect).forEach(activeAnimations);
})

const registerContent = (containerSkill, containerAbout) => {
    // console.log('Estoy observando', containerSkill)
    observer.observe(containerSkill)
    observer.observe(containerAbout)
}

export const canShow = (skillsSoftsContainer, aboutContainer) => {
    registerContent(skillsSoftsContainer, aboutContainer)
}

