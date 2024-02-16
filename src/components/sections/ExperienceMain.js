import { work } from "../../../data/cv.json"

class ExperienceMain extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
  }

  static get styles() {
    return `
      .container {
        margin-bottom: 3rem;
      }

      h2 {
        font-weight: 700;
        border-bottom: 1px black solid;
      }

      ul {
        list-style-type: none;
        padding-left: 0;
      }  

      li:not(:last-child) {
        margin-bottom: 3rem;
      }

      h3 {
        font-weight: 700;
        font-style: ;
      }
      
      article h3 {
        font-weight: 500;
        color: #111;
      }
      
      article h4 {
        color: #222;
        font-weight: 400;
      }
    
      header div h3 {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      time {
        color: #555;
        font-size: .85rem;
        // min-width: 102px;
      }
    `
  }

  connectedCallback() {
    this.render()
  }

  render() {
    const experiences = work
      .map(({ name, startDate, endDate, position, summary }) => {
        const startYear =
          new Date(startDate)
            .toLocaleDateString("es-ES", {
              month: "long",
              year: "numeric",
            })
            .charAt(0)
            .toUpperCase() +
          new Date(startDate)
            .toLocaleDateString("es-ES", { month: "long", year: "numeric" })
            .slice(1)

        const endYear = endDate
          ? new Date(endDate)
            .toLocaleDateString("es-ES", { month: "long", year: "numeric" })
            .charAt(0)
            .toUpperCase() +
            new Date(endDate)
              .toLocaleDateString("es-ES", { month: "long", year: "numeric" })
              .slice(1)
          : "Actual"
        const years = `${startYear} - ${endYear}`

        return `
          <li>
            <article>
              <header>
                <div>
                  <h3>
                    ${name}
                    <time>${years}</time>
                  </h3>
                </div>
              </header>
              
              <h4>${position}</h4>
                
              <footer>
                <p>${summary}</p>
              </footer>
            </article>
          </li>
        `
      })
      .join("")

    this.shadowRoot.innerHTML = `
      <style>${ExperienceMain.styles}</style>
      <div class="container">
        <h2>Experiencia Laboral:</h2>
        <ul>
          ${experiences}
        </ul>
      </div>
    `
  }
}

customElements.define("experience-main", ExperienceMain)
