import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class myElement extends DDDSuper(LitElement) {

  static get tag() {
    return "my-element";
  }

  constructor() {
    super();
    this.title = "";
    this.cool = false;
    this.fancy = false;
  }

  static get properties() {
    return {
      title: { type: String },
      cool: { type: Boolean, reflect: true },
      fancy: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        font-size: var(--my-element-font-size, var(--ddd-font-size-s));
      }
      :host([cool]) {
        font-size: var(--my-element-font-size, var(--ddd-font-size-xl));
        background-color: grey
      }
      :host([fancy]) {
        font-size: var(--my-element-font-size, var(--ddd-font-size-s));
        background-color: greenyellow;
        /* nambah border dan tebal box shadow */
        border: 2px solid red;
        box-shadow: rgba(0, 3, 33, 0.063) 6px 12px 3px 0px;
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      div {
        padding: 0;
        margin: 0;
      }
    `];
  }

  render() {
    return html`
<div class="wrapper">
  <div>${this.title}</div>
  <slot></slot>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(myElement.tag, myElement);