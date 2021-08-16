export function handleSubmit(event) {
    event.preventDefault()

    const formularyData = new FormData(this)
    console.log(formularyData.get('name'))
}