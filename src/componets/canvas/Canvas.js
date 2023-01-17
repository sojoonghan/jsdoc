//@ts-check
import { html } from '../../utils/html';

export class Canvas extends HTMLElement {
  static get observedAttribues() {
    return [];
  }
  /**
   * @type {HTMLTemplateElement}
   */
  #template;
  constructor() {
    super();
    this.#template = document.createElement('template');
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
    /**
     * @type {HTMLCanvasElement}
     */
    const canvas = this.shadowRoot.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth - 200;
    canvas.height = window.innerHeight - 200;

    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 100, 100);
  }
  disconnectedCallback() {}
  adoptedCallback() {}

  static css = html` <style></style>`;

  render() {
    this.#template.innerHTML = html` ${Canvas.css}
      <canvas id="canvas"></canvas>`;
    this.shadowRoot?.append(this.#template.content.cloneNode(true));
  }
}
customElements.get('my-canvas') ?? customElements.define('my-canvas', Canvas);
