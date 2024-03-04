import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ripple-effect',
  styleUrl: 'ripple-effect.css',
  shadow: true,
})
export class RippleEffect {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
