import { Component,Element, Host, h,  State, Prop,Event, EventEmitter, Watch, Listen } from '@stencil/core';

@Component({
  tag: 'input-minus-plus',
  styleUrl: 'input-minus-plus.css',
  shadow: true
})
export class InputMinusPlus {

  @Prop({mutable:true, reflect: true}) value? = null; 
  @Prop() min?: number; 
  @Prop() max?: number; 
  @Prop() name?: string; 

  @Event() inpluschange:  EventEmitter<HTMLInputElement>


  @Watch('number')
  watchPropHandler(newValue: boolean, oldValue: boolean) {
    if ( newValue != oldValue) {
      this.value = this.number;
    }
  }

  @Watch('value')
  watchStateHandler(newValue: boolean, oldValue: boolean) {
    if ( newValue != oldValue) {
      this.number = this.value;
    }
  }

  
  @State() number: number = 0;

  @Element() el: HTMLElement;
  _input: HTMLInputElement;


  @Listen('change', { capture: true })
  handleClick() {
      // whenever a click event occurs on
      // the component, update `isOpen`,
      // triggering the rerender
      console.info("aca esta la garompa esta caputrada")
  }


  componentWillLoad(){

    this.number = this.value * 1

    if (  this.el.attributes.length ) {

      for (var i = 0; i < this.el.attributes.length; i++){
        let att = this.el.attributes[i];
        if( !att.hasOwnProperty("nodeName" ) ) continue;
        if( att.nodeName == 'id' ) continue;

        this._input[att.nodeName] = att.nodeValue;
      }
    }

   // this.marceChange.call()
  }

  sum(){
    this.number = this.number + 1;
    this.inpluschange.emit(this._input)
  }

  less(){
    this.number = this.number - 1;
    this.inpluschange.emit(this._input)
  }


  onInputChange(ev){
    this.number = ev.target.value *1;
  } 



  render() {
    return (
      <Host>
        <button onClick={()=>this.less()}>-</button>
        <input type="number" min={this.min}  max={this.max} name={this.name} value={this.number} onChange={(ev) => this.onInputChange(ev)}/>
        <button onClick={()=>this.sum()}>+</button>
      </Host>
    );
  }

}
