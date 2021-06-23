import { newSpecPage } from '@stencil/core/testing';
import { ModalUtil } from '../modal-util';

describe('modal-util', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ModalUtil],
      html: `<modal-util></modal-util>`,
    });
    expect(page.root).toEqualHtml(`
      <modal-util>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </modal-util>
    `);
  });
});
