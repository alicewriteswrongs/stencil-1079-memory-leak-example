import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'my-component', // note the lack of encapsulation - although this also repros with shadow true
})
export class MyComponent {
  @State()
  isOpen = false;

  handler = () => {
    setInterval(() => {
      this.isOpen = !this.isOpen;
    }, 10);
  }

  render() {
    return (
      <div>
        <button onClick={this.handler}>Trigger the leak</button>
        <br />
        {/* this kind of leak happens in prod too */}
        {this.isOpen && <my-tabs>
            <div>hey</div>
          </my-tabs>}
      </div>
    );
  }
}
