import "./sections/HeroMain.js"
import "./sections/ExperienceMain.js"
import "./sections/EducationMain.js"

import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"

class CurriculumVitae extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
  }

  static get styles() {
    return `
      :host {
        display: flex;
        flex-direction: column;
        max-width: 700px;
        margin-inline: auto;
        margin-block: 1.5rem;
      }
    `
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${CurriculumVitae.styles}</style>
      <div class="container">
        <main>
          <section>
            <hero-main></hero-main>
          </section>
          <section>
            <experience-main></experience-main>
          </section>
          <section>
            <education-main></education-main>
          </section>
        </main>
      </div>
    `
  }
}

customElements.define("curriculum-vitae", CurriculumVitae)
