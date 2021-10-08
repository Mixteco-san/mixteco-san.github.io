class ProyectMosaic extends HTMLElement{
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }
    static get observedAttributes() {
        return['titleproyect', 'description', 'img', 'imgalt', 'tools']
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
            <div class="proyect"> 
                <div class="proyect__img">
                    <img src=${this.img} alt=${this.imgalt} />
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
                    box-shadow: var(--shadow-desk);
                }
                .proyect{
                    width: 500px;
                    background: var(--white);
                    text-align: center;
                }
                .proyect__txt-wrapper{
                    padding: 20px;
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