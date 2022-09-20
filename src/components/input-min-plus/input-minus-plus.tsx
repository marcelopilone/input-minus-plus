import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'input-minus-plus',
  styleUrl: 'input-minus-plus.css',
  shadow: true,
})
export class InputMinPlus {

  @Prop() max: number = null;
  @Prop() min: number = null;
  @Prop() name: string = '';
  
  @State() number: number = 0;

  sum(){
    this.number = this.number + 1;
  }

  less(){
    this.number = this.number - 1;
  }
  render() {
    return (
      <Host>
        <button id='less' onClick={()=>this.less()}>-</button>
        <input id='number' value={this.number} min={this.min} max={this.max} name={this.name} />
        <button id='sum' onClick={()=>this.sum()}>+</button>
      </Host>
    );
  }

}
