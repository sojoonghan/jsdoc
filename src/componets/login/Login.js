//@ts-check
import { html } from '../../utils/html';

export class Login extends HTMLElement {
  static get observedAttribues() {
    return ['password', 'id'];
  }
  /**
   * @type {HTMLTemplateElement}
   */
  #template = document.createElement('template');
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  /**
   * @returns {string | null}
   */
  get _password() {
    if (!this.getAttribute('password')) {
      throw new Error();
    }
    return this.getAttribute('password');
  }
  /**
   * @param {string | null} value
   */
  set _password(value) {
    if (!value) {
      throw new Error('value');
    }
    this.setAttribute('password', value);
  }

  /**
   * @returns {string | null }
   */
  get _id() {
    if (this.getAttribute('id')) {
      return this.getAttribute('id');
    }
    throw new Error();
  }
  /**
   * @param {string | null} v
   */
  set _id(v) {
    if (!v) {
      throw new Error('value');
    }
    this.setAttribute('id', v);
  }

  /**
   * @param {string} arrName
   * @param {string} oldvalue
   * @param {string | null} newvalue
   */
  attributeChagedCallback(arrName, oldvalue, newvalue) {
    if (arrName.toLowerCase() === 'password') {
    }
    if (arrName.toLowerCase() === 'id') {
    }
  }

  connectedCallback() {
    this.render();
    console.log('aaaaa');
    console.log(typeof this.getAttribute('id'));
  }
  disconnectedCallback() {}
  adoptedCallback() {}

  static css = html` <style></style>`;

  render() {
    this.#template.innerHTML = html` ${Login.css}
      <form class="form-btn">
        <h1>id:${this._id} password:${this._password}</h1>
        <input type="text" />
      </form>`;
    this.shadowRoot?.append(this.#template.content.cloneNode(true));
  }
}
customElements.get('my-login') ?? customElements.define('my-login', Login);

/**
 *
 * @param {*} a
 * @param {*} b
 */
const arra = (a, b) => {};
