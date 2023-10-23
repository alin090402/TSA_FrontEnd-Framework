import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import './mobx-lit-testing/testing-element.js';
import './components/structure/header/tsa-header/tsa-header.js';
import './components/structure/main/tsa-main/tsa-main.js';
import './components/structure/footer/tsa-footer/tsa-footer.js';
import '@spectrum-web-components/bundle/elements.js';
    
// const logo = new URL('../../assets/open-wc-logo.svg', import.meta.url).href;

@customElement('learning-wc')
export class LearningWc extends LitElement {
  @property({ type: String }) header = 'My app';

  static styles = css`
    :host{
      display: block;
      min-height: 100vh;
  }

  `;

  render() {
    return html`
      <sp-theme
       theme="spectrum"
       color="dark"
       scale="large"
       style="background-color: var(--spectrum-gray-50)"
      >
      <tsa-header></tsa-header>
      <tsa-main></tsa-main>
      <tsa-footer></tsa-footer>
      </sp-theme>`;
    // return html`
    //   <main>
    //     <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
    //     <h1>${this.header}</h1>

    //     <p>Edit <code>src/LearningWc.ts</code> and save to reload.</p>
    //     <a
    //       class="app-link"
    //       href="https://open-wc.org/guides/developing-components/code-examples"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Code examples
    //     </a>
    //   </main>

    //   <p class="app-footer">
    //     🚽 Made with love by
    //     <a
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       href="https://github.com/open-wc"
    //       >open-wc</a
    //     >.
    //   </p>
    // `;
  }
}
