import { TsaNavbar as Component } from "./TsaNavbar.js";
import '@spectrum-web-components/bundle/elements.js';

if (!customElements.get(Component.TAG_NAME)) {
    customElements.define(Component.TAG_NAME, Component);
}

declare global {
    interface HTMLElementTagNameMap {
        [Component.TAG_NAME]: Component;
    }
}