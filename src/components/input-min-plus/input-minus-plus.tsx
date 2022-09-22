import { Component,Element, Host, h,  State } from '@stencil/core';

@Component({
  tag: 'input-minus-plus',
  styleUrl: 'input-minus-plus.css',
})
export class InputMinusPlus {

  @State() number: number = 0;
  @Element() el: HTMLElement;
  _input: HTMLInputElement;

  componentDidRender(){
    this._input = document.createElement( 'input' );
    for (var att, i = 0, atts = this.el.attributes, n = atts.length; i < n; i++){
        att = atts[i];
        this._input[att.nodeName] = att.nodeValue;
        document.getElementById('number').setAttribute(att.nodeName,att.nodeValue);
    }
  }

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
        <input id='number' value={this.number}/>
        <button id='sum' onClick={()=>this.sum()}>+</button>
      </Host>
    );
  }

}
