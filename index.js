import { offLoader } from './src/modules/loader.js'
import { removeMovement } from './src/modules/remove_motion_animation.js'
import { contactFormValidation } from './src/formulary_validation.js'

import './src/components/proyects-desk.js'

const d = document

const $loadContainer = d.querySelector('#load__container')
const $typingAnimation = d.querySelector('.typing--animation')

// Observa el inicio
window.addEventListener('load', e =>{
    offLoader($loadContainer, $typingAnimation)
})

d.addEventListener('DOMContentLoaded', e => {
    // console.log('El DOM esta listo')
    removeMovement('.skills_soft_img', '.skills_soft_txt', '.about__img', '.about__text')
    contactFormValidation()
})