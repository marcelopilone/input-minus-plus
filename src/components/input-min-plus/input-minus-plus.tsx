import { Component,Element, Host, h,  State, Prop,Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'input-minus-plus',
  styleUrl: 'input-minus-plus.css',
  shadow: true
})
export class InputMinusPlus {

  @Prop({mutable:true, reflect: true}) value? = null; 
  @Prop() min?: number = -Infinity; 
  @Prop() max?: number = Infinity; 
  @Prop() step?: number = 1; 
  @Prop() name?: string; 
  @Prop() required?: boolean = false; 
  
  @State() number: number = 0;
  @State() disableMin: boolean = false;
  @State() disableMax: boolean = false;
  

  @Event() inpluschange:  EventEmitter<HTMLInputElement>


  @Watch('number')
  watchPropHandler(newValue: number, oldValue: number) {
    if ( newValue != oldValue) {
          this.checkDisabled()
          this.value = newValue;
    }
  }

  


  @Element() el: HTMLElement;
  _input: HTMLInputElement;



  componentWillLoad(){
    this.changeNumber( this.value * 1)
  }

  sum(){
    const newNumber = this.number + this.step;
    if ( newNumber <= this.max) {
      this.number = newNumber
      this.inpluschange.emit(this._input)
    }
  }

  less(){
    const newNumber = this.number - this.step;
    if ( newNumber >= this.min) {
      this.number = newNumber
      this.inpluschange.emit(this._input)
    }
  }

  checkDisabled() {
    this.disableMin = Boolean( this.number == this.min)
    this.disableMax = Boolean( this.number == this.max)
  }

  changeNumber(newNumber): true {
    if ( newNumber < this.min) {
      this.number = this.min
    }

    if ( newNumber > this.max) {
      this.number = this.max
    }

    if ( !this.number && this.value ) {
      this.number = this.value
    }

    return true;
  }


  onInputChange(ev){
    this.changeNumber( ev.target.value * 1)
    this.checkDisabled()
  } 



  render() {
    return (
      <Host>
        <button onClick={()=>this.less()} disabled={this.disableMin}>-</button>
        <input type="text" name={this.name} value={this.number} onChange={(ev) => this.onInputChange(ev)} required={this.required} />
        <button onClick={()=>this.sum()} disabled={this.disableMax}>+</button>
      </Host>
    );
  }

}
