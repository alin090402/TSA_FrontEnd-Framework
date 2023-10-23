/* eslint-disable max-classes-per-file */
import { css, html, TemplateResult } from 'lit';
import { MobxLitElement } from '@adobe/lit-mobx';

export class TsaFooter extends MobxLitElement {    
    public static readonly TAG_NAME = 'tsa-footer';

    static styles =  css `
    :host {
        bottom: 0;
    }
    `;
    
    // any observables accessed in the render method will now trigger an update
    public render(): TemplateResult {
        return html`
           <div>Footer</div>
        `;
    }
}
