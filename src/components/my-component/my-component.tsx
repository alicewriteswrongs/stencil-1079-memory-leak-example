import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'my-component', // note the lack of encapsulation - although this also repros with shadow true
})
export class MyComponent {
  @State()
  isOpen = false;

  handler = () => {
    try {
      // @ts-ignore - safari only
      console.takeHeapSnapshot('clicked!');
    } catch (e) {
      console.log(e)
    }
    this.isOpen = !this.isOpen;
  }

  render() {
    return (
      <div>
        <button onClick={this.handler}></button>
        {this.isOpen && <div><ripple-effect></ripple-effect></div>}
      </div>
    );
  }
}
