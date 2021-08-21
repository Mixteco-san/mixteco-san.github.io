class proyectDesk extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }
    static get observedAttributes() {
        return ['titleproyect', 'description', 'img', 'imgalt', 'sizeblock', 'tools']
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        if( attr === 'titleproyect') {
            this.titleproyect = newVal
        }
        if( attr === 'description') {
            this.description = newVal
        }
        if( attr === 'img') {
            this.img = newVal
        }
        if( attr === 'imgalt') {
            this.imgalt = newVal
        }
        if( attr === 'tools') {
            this.tools = newVal
        }
    }
    getTemplate() {
        const template = document.createElement('template')
        template.innerHTML = `
            <div class="proyect__container">
                <div class="proyect__img-container">
                    <img src=${this.img} alt=${this.imgalt}></img>
                </div>
                <div class="proyect__txt-wrapper">
                    <h1>
                        ${this.titleproyect}  
                    </h1>
                    <p>
                        ${this.description}
                    </p>
                    <p>
                        <b>Desarrollado con:</b> ${this.tools}
                    </p>
                </div>
            </div>
            ${this.getComponentStyles()}
        `
        return template
    }
    getComponentStyles() {
        return `
            <style>
                :host{
                    --height-container: 330px;
                    margin: 0;
                    padding: 0;
                    font-family: var(--prompt);
                    height: var(--height-container);
                }
                :host(.full--block){
                    width: var(--p100);
                }
                :host(.two--blocks){
                    width: 66.66%;
                }
                :host(.a--block){
                    width: 33.33%;
                }
                .proyect__container{
                    box-sizing: border-box;
                }
                .proyect__img-container{
                    overflow: hidden;
                    width: var(--p100);
                    height: var(--height-container);
                }
                .proyect__img-container img{
                    position: relative;
                    width: var(--p100);
                    bottom: 50%;
                    z-index: -1;
                }
                .proyect__txt-wrapper{
                    width: var(--p100);
                    height: var(--height-container);
                    position: relative;
                    bottom: var(--height-container);;
                    z-index: 2;
                    background-color: rgba(0, 0, 0, .4);
                    padding: 10px 40px;
                    box-sizing: border-box;
                    color: var(--white);
                    overflow: scroll;
                }
                .proyect__txt-wrapper h1{
                    font-size: var(--font-45);
                }
                .proyect__txt-wrapper p{
                    font-size: var(--font-20);
                }

                @media screen and (max-width: 1125px) {
                    :host{
                        --height-container: 260px;
                    }
                    :host(.full--block), :host(.two--blocks), :host(.a--block){
                        width: var(--p100);
                    }
                }
                @media screen and (max-width: 768px) {
                    :host{
                        --height-container: 180px;
                    }
                    .proyect__txt-wrapper p{
                        font-size: var(--font-16);
                    }
                    .proyect__txt-wrapper h1{
                        font-size: var(--font-35);
                    }
                }
                @media screen and (max-width: 518px) {
                    .proyect__txt-wrapper p{
                        font-size: var(--font-12);
                    }
                    .proyect__txt-wrapper h1{
                        font-size: var(--font-30);
                    }
                }
            </style>
        `
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback() {
        this.render()
    }
}

customElements.define('proyect-desk', proyectDesk)