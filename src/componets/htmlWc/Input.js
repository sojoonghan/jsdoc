//@ts-check
import { html } from '../../utils/html';
import './style/input.css';
import './component/canvas/Canvas.js';

export class Input extends HTMLElement {
  #shadowRoot = this.attachShadow({ mode: 'open' });
  /**
   * @type {HTMLTemplateElement}
   */
  #template = document.createElement('template');
  #props = { name: this.getAttribute('name') };
  constructor() {
    super();
    console.log(this.#props.name);
  }

  connectedCallback() {
    this.render();
  }

  static css = html` <style></style>`;

  render() {
    this.#template.innerHTML = html` ${Input.css}
      <h1>test Input</h1>`;
    this.#shadowRoot?.appendChild(this.#template.content.cloneNode(true));
  }
}
customElements.get('my-input') ?? customElements.define('my-input', Input);

// /**
//  * @param {import('./types/input').Point} point
//  * @param {number} dx
//  * @param {number} dy
//  * @returns {import('./types/input')}
//  */
// const move = (point, dx, dy) => {
//   return { x: point.x + dx, y: point.y + dy, z:point.z};
// };
// console.log(move({ x: 'jihoon', y: 4 }, 1, 1));
