/* Apagamos los movimientos de las animaciones del contenido de 
skills__softs y about */

export const removeMovement = (skillSoftImg, skillSoftTxt, aboutImg, aboutTxt) => {
    const d = document
    const $skillSoftImg = d.querySelector(skillSoftImg)
    const $skillSoftTxt = d.querySelector(skillSoftTxt)
    const $aboutImg = d.querySelector(aboutImg)
    const $aboutTxt = d.querySelector(aboutTxt)
    
    d.addEventListener('animationend', e => {
        if( e.target.matches(skillSoftImg)){
            // console.log('Se desactivo animaciones sobre: ', e.target)
            $skillSoftTxt.classList.remove('activate')
            $skillSoftImg.classList.remove('activate')
        }
        if( e.target.matches(aboutTxt)){
            $aboutImg.classList.remove('activate')
            $aboutTxt.classList.remove('activate')
        }
    })
}
