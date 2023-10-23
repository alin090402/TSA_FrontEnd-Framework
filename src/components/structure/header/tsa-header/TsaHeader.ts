/* eslint-disable max-classes-per-file */
import { html, TemplateResult } from 'lit';
import { MobxLitElement } from '@adobe/lit-mobx';

export class TsaHeader extends MobxLitElement {    
    public static readonly TAG_NAME = 'tsa-header';

    // any observables accessed in the render method will now trigger an update
    public render(): TemplateResult {
        return html`
            <tsa-navbar></tsa-navbar>
            <div>Header</div>
        `;
    }
}
