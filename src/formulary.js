const d = document

export function handleSubmit(event) {
    event.preventDefault()

    const formularyData = new FormData(this)
    console.log(formularyData.get('name'))
}

export function formValidation() {
    const $form = d.querySelector('#form'),
    $inputs = d.querySelectorAll('#form[required]')

    console.log($inputs)
}