import { TestingElement as Component } from "./TestingElement.js";

if (!customElements.get(Component.TAG_NAME)) {
    customElements.define(Component.TAG_NAME, Component);
}

declare global {
    interface HTMLElementTagNameMap {
        [Component.TAG_NAME]: Component;
    }
}