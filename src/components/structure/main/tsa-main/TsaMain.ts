/* eslint-disable max-classes-per-file */
import { css, html, TemplateResult } from 'lit';
import { MobxLitElement } from '@adobe/lit-mobx';

export class TsaMain extends MobxLitElement {    
    public static readonly TAG_NAME = 'tsa-main';
    
    static styles =  css`
    :host {
        display: block;
        min-height: 100vh;
    }
    `;

    // any observables accessed in the render method will now trigger an update
    public render(): TemplateResult {
        return html`
           <div>Main</div>
        `;
    }
}
