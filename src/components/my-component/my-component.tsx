import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'my-component', // note the lack of encapsulation - although this also repros with shadow true
})
export class MyComponent {
  @State()
  isOpen = false;

  handler = () => {
    this.isOpen = !this.isOpen;
    setTimeout(() => {
      this.isOpen = !this.isOpen;
    }, 100);
  }

  render() {
    return (
      <div>
        <button onClick={this.handler}>Trigger the leak</button>
        <br />
        {/* this kind of leak happens in prod too */}
        {this.isOpen && <my-tabs>
          <ion-tab tab="home">
            <ion-nav></ion-nav>
          </ion-tab></my-tabs>}
      </div>
    );
  }
}
