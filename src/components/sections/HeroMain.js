import { basics } from "../../../data/cv.json"

const { name, label, image, email, phone, location } = basics

class HeroMain extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
  }

  static get styles() {
    return `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 5rem;

        @media screen and (width <= 375px) {
          & {
            flex-direction: column;
          }
        }
      }

      h1 {
        font-size: 1.875rem;
        font-weight: 700;

        @media screen and (width <= 375px) {
          font-size: 1.5rem;
        }
      }

      .container__description {
        display: flex;
        margin-bottom: 2rem;

          @media screen and (width <= 375px) {
            .label {
              display: flex;
              justify-content: center;
              margin-bottom: 1rem;
            }
          }
        }

        .container__location {
          display: flex;
          margin-left: .35rem;

          .text__region {
            margin-right: .25rem;
          }
          
          .text__province {
            margin-right: .25rem;
          }
        }
      }

      .container__texts {
        display: flex;
        flex-direction: column;

        & p {
          font-weight: bold;
        }

        @media screen and (width <= 375px) {
          & {
            align-items: center;
          }
        }

      }
    `
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${HeroMain.styles}</style>
      <div class="container">
        <div>
          <h1>
            ${name}
          </h1>

          <div class="container__description">
            <p class="label">${label}</p>
            <div class="container__location">
              <p class="text__region">${location.region}</p>
              <p class="text__province">${location.province}</p>
              <p>${location.city}</p>
            </div>
          </div>
          
          <div class="container__texts">
            <p>Contacto:</p>
            <span>${email}</span>
            <span>${phone}</span>
          </div>
        </div>

        <div>
          <figure>
            <img src="${image}" alt="Photo of the face">
          </figure>
        </div>
      </div>
    `
  }
}

customElements.define("hero-main", HeroMain)
