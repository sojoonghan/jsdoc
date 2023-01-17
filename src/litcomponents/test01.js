import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class Test01 extends LitElement {
  return() {
    return html``;
  }
}

customElements.get('my-01') && customElements.define('my-01', Test01);
