/* eslint-disable max-classes-per-file */
import { html, TemplateResult } from 'lit';
import { MobxLitElement } from '@adobe/lit-mobx';

export class TsaNavbar extends MobxLitElement {
    public static readonly TAG_NAME = 'tsa-navbar';

    // any observables accessed in the render method will now trigger an update
    public render(): TemplateResult {
        return html`
        <sp-button>press me</sp-button>
        <br>
        <sp-top-nav>
        <sp-top-nav-item href="#">Site Name</sp-top-nav-item>
        <sp-top-nav-item href="#page-1" style="margin-inline-start: auto;">
            Page 1
        </sp-top-nav-item>
        <sp-top-nav-item href="#page-2">Page 2</sp-top-nav-item>
        <sp-top-nav-item href="#page-3">Page 3</sp-top-nav-item>
        <sp-top-nav-item href="#page-4">Page with Really Long Name</sp-top-nav-item>
        <sp-action-menu
            label="Account"
            placement="bottom-end"
            style="margin-inline-start: auto;"
            quiet
        >
            <sp-menu-item>Account Settings</sp-menu-item>
            <sp-menu-item>My Profile</sp-menu-item>
            <sp-menu-divider></sp-menu-divider>
            <sp-menu-item>Share</sp-menu-item>
            <sp-menu-divider></sp-menu-divider>
            <sp-menu-item>Help</sp-menu-item>
            <sp-menu-item>Sign Out</sp-menu-item>
        </sp-action-menu>
        </sp-top-nav>
        `;
    }
}
