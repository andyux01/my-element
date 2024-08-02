import { LitElement, html, css } from 'lit';

class OwlCard extends LitElement {
  static properties = {
    name: { type: String },
    image: { type: String },
    alt: { type: String },
    description: { type: String },
    toggle: { type: Boolean, reflect: true }
  }

  static styles = css`
    :host {
      display: inline-block;
    }

    .wrapper {
      display: inline-flex;
    }

    .card {
      max-width: 400px;
      margin: 8px;
      padding: 16px;
      border: 8px solid gray;
      background-color: black;
      text-align: center;
    }

    .card img {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
      border: 4px solid grey;
    }

    .card h1 {
      font-size: 32px;
      margin-bottom: 32px;
      color: white;
    }

    details {
      font-size: 16px;
      color: white;
      display: inline-block;
    }

    p {
      font-size: 16px;
      color: white;
    }

    #description.toggled {
      display: none;
    }

    @media screen and (max-width: 799px) {
      details {
        display: none;
      }
    }

    @media screen and (max-width: 500px) {
      div {
        transform: scale(0.7);
      }
    }

    :host([toggle]) .card {
      background-color: #FC4B00;
    }

    #card.toggled {
      max-width: 400px;
      margin: 8px;
      padding: 16px;
      border: 8px solid gray;
      background-color: #FC4B00;
      text-align: center;
    }
  `;

  toggleBackground() {
    this.toggle = !this.toggle;
  }

  constructor() {
    super();
    this.toggle = false;
    this.name = 'super';
    this.image = 'https://www.gamersdecide.com/sites/default/files/authors/u156421/super.jpg';
    this.alt = 'Card Pic';
    this.description = 'Matthew "super" DeLisi is a retired American player who last played for San Francisco Shock. He is one of the most decorated competitive Overwatch players, being a two time Overwatch League Champion, World Cup Champion, Stage 2 Champion, May Melee Tournament Champion, Role Star, All Star and MVP Runner-Up.';
  }

  render() {
    return html`
    <div class="wrapper">

      <div class="card">

        <h1>${this.name}</h1>
      
        <img src=${this.image} alt=${this.alt}>
      
        <details>
          <summary>Description</summary>
          <p>${this.description}<slot></slot></p>
        </details>
      
      </div>
      
    </div>  
    `;
  }
}

customElements.define('owl-card', OwlCard);