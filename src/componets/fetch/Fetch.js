//@ts-check
import { html } from '../../utils/html';
import { serverData } from './server';

export class Fetch extends HTMLElement {
  static get observedAttribues() {
    return [];
  }
  #template = document.createElement('template');
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  /**
   * @param {string} arrName
   * @param {string} oldvalue
   * @param {string | null} newvalue
   */
  attributeChagedCallback(arrName, oldvalue, newvalue) {}

  connectedCallback() {
    const btn = this.shadowRoot?.querySelector('#btn');

    btn?.addEventListener('click', (event) => {
      this.serverBtn(event);
    });
  }
  /**
   * @param {Event} e
   */
  serverBtn(e) {
    console.log(e);
    serverData();
  }

  disconnectedCallback() {}
  adoptedCallback() {}

  static css = html` <style></style>`;

  render() {
    this.#template.innerHTML = html` ${Fetch.css}
      <button id="btn">fetch from server</button>`;
    this.shadowRoot?.append(this.#template.content.cloneNode(true));
  }
}
customElements.get('my-fetch') ?? customElements.define('my-fetch', Fetch);

const asConstJs = /**@type {const} */ ({ name: 'lee' });
