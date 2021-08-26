const d = document

export const contactFormValidation = () => {
    const $form = d.querySelector('.formulary')
    const $inputs = d.querySelectorAll('.formulary [required]')

    console.log($inputs)

    $inputs.forEach( input => {
        const $span = d.createElement('span')
        $span.id = input.name
        $span.classList.add('error-input', 'none')
        $span.textContent = input.title
        input.insertAdjacentElement('afterend', $span)
    })

    d.addEventListener('keyup', e => {
        if(e.target.matches('.formulary [required]')) {
            let $inputTouched = e.target
            let $span = d.getElementById($inputTouched.name)
            let pattern = $inputTouched.pattern || $inputTouched.dataset.pattern
            // console.log($inputTouched, pattern)
            if(pattern) {
                // console.log('Input tiene pattern')
                let regex = new RegExp(pattern)
                // console.log(regex)
                return !regex.exec($inputTouched.value)
                    ? $span.classList.remove('none')
                    : $span.classList.add('none')
            }
            if(!pattern) {
                // console.log('Input NO tiene pattern')
                return $inputTouched.value === ""
                    ? $span.classList.remove('none')
                    : $span.classList.add('none')
            }
        }
    })
}