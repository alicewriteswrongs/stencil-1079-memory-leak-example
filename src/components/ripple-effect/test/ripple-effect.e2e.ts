import { newE2EPage } from '@stencil/core/testing';

describe('ripple-effect', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ripple-effect></ripple-effect>');

    const element = await page.find('ripple-effect');
    expect(element).toHaveClass('hydrated');
  });
});
