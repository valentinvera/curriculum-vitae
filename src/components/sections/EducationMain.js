import { education } from "../../../data/cv.json"

class EducationMain extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
  }

  static get styles() {
    return `
      @media screen and (width <= 375px) {
        .container {
          font-size: .5rem;
        }
      }


      h2 {
        font-weight: 700;
        border-bottom: 1px black solid;

        @media screen and (width <= 375px) {
          font-size: .85rem;
        }
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
