import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-tab',
  shadow: true,
})
export class MyTab {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
