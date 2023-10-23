import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { LearningWc } from '../src/learning-wc.js';
import '../src/learning-wc.js';

describe('LearningWc', () => {
  let element: LearningWc;
  beforeEach(async () => {
    element = await fixture(html`<learning-wc></learning-wc>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
