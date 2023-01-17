class OutPut extends HTMLElement {
  // constructor() {
  //   super();
  //   this.attachShadow({ mode: 'open' });
  //   // this.onServer = this.onServer.bind(this);
  // }
  connectedCallback() {
    addEventListener('data-event', (e) => this.onServer(e));
  }
  /**
   * @param {CustomEvent} e
   */
  onServer(e) {
    this.innerHTML = `<h3>${e.detail.name}</h3>`;
    console.log(e.detail.name);
    console.log(this);
  }
}
customElements.define('my-output', OutPut);
