class ProyectMosaic extends HTMLElement{
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }
    static get observedAttributes() {
        return['titleproyect', 'description', 'img', 'imgalt', 'url', 'tools']
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
        if( attr === 'url') {
            this.url = newVal
        }
        if( attr === 'tools') {
            this.tools = newVal
        }
    }
    getTemplate() {
        const template = document.createElement('template')
        template.innerHTML = `
            <div class="proyect"> 
                <div class="proyect__img">
                    <a href=${this.url} target="_blank">
                        <img src=${this.img} alt=${this.imgalt} />
                    </a>
                </div>
                <div class="proyect__txt-wrapper">
                    <h1>
                        ${this.titleproyect}
                    </h1>
                    <p class="proyect__txt--description">
                        ${this.description}
                    </p>
                    <p>
                        <b>Desarrollado con:</b> ${this.tools}
                    </p>
                </div>
            </div>
            ${this.getStyles()}
        `

        return template
    }
    getStyles() {
        return `
            <style>
                :host{
                    margin: 0;
                    padding: 0;
                    font-family: var(--prompt);
                }
                .proyect{
                    margin: 0 50px 70px 50px;
                    width: 500px;
                    text-align: center;
                    box-shadow: var(--shadow-desk);
                }
                .proyect__txt-wrapper{
                    padding: 20px;
                }
                .proyect__txt--description{
                    margin: 30px 0;
                }
                .proyect__img{
                    width: 500px;
                    height: 280px;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: center
                }
                .proyect__img img{
                    width: 100%;
                }

                @media screen and (max-width: 780px) {
                    .proyect__txt-wrapper h1{
                        font-size: var(--font-25);
                    }
                    .proyect__txt-wrapper p{
                        font-size: var(--font-16);
                    }
                }
                @media screen and (max-width: 624px) {
                    .proyect{
                        margin: 0 auto 70px auto;
                    }
                }
                @media screen and (max-width: 570px) {
                    .proyect{
                        width: 400px;
                    }
                    .proyect__img{
                        width: 400px;
                        height: 224px;
                    }
                }
                @media screen and (max-width: 518px) {
                    .proyect__txt-wrapper h1{
                        font-size: var(--font-20);
                    }
                    .proyect__txt-wrapper p{
                        font-size: var(--font-12);
                    }
                }
                @media screen and (max-width: 431px) {
                    .proyect{
                        width: 300px;
                    }
                    .proyect__img{
                        width: 300px;
                        height: 168px;
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

customElements.define('proyect-mosaic', ProyectMosaic)