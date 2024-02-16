import { education } from "../../../data/cv.json"

class EducationMain extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
  }

  static get styles() {
    return `
      h2 {
        font-weight: 700;
        border-bottom: 1px black solid;
      }
    `
  }

  connectedCallback() {
    this.render()
  }

  render() {
    const studies = education
      .map(({ institution, certificate }) => {
        return `
          <p>${institution}</p>
          <span>${certificate}</span>
        `
      })
      .join()

    this.shadowRoot.innerHTML = `
      <style>${EducationMain.styles}</style>
      <div class="container">
        <h2>Educación:</h2>
        <div>
          ${studies}
        </div>
      </div>
    `
  }
}

customElements.define("education-main", EducationMain)
