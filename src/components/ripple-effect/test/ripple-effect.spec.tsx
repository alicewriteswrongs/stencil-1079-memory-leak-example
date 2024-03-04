import { newSpecPage } from '@stencil/core/testing';
import { RippleEffect } from '../ripple-effect';

describe('ripple-effect', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RippleEffect],
      html: `<ripple-effect></ripple-effect>`,
    });
    expect(page.root).toEqualHtml(`
      <ripple-effect>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ripple-effect>
    `);
  });
});
