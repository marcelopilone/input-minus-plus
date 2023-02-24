'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8dd2dca2.js');

const inputMinusPlusCss = ":host{display:inline-flex;flex-wrap:nowrap;height:100%;border:1px solid silver;border-radius:1em;overflow:hidden;--input-width:auto;--btn-width:auto}input,button{height:100%;margin:0;border:none;text-align:center}button{min-width:1.5em;width:var(--btn-width)}input{width:var(--input-width)}";

const InputMinusPlus = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.inpluschange = index.createEvent(this, "inpluschange", 7);
    this.value = null;
    this.min = -Infinity;
    this.max = Infinity;
    this.step = 1;
    this.name = undefined;
    this.required = false;
    this.number = 0;
    this.disableMin = false;
    this.disableMax = false;
  }
  watchPropHandler(newValue, oldValue) {
    if (newValue != oldValue) {
      this.checkDisabled();
      this.value = newValue;
    }
  }
  componentWillLoad() {
    this.changeNumber(this.value * 1);
  }
  sum() {
    const newNumber = this.number + this.step;
    if (newNumber <= this.max) {
      this.number = newNumber;
      this.inpluschange.emit(this._input);
    }
  }
  less() {
    const newNumber = this.number - this.step;
    if (newNumber >= this.min) {
      this.number = newNumber;
      this.inpluschange.emit(this._input);
    }
  }
  checkDisabled() {
    this.disableMin = Boolean(this.number == this.min);
    this.disableMax = Boolean(this.number == this.max);
  }
  changeNumber(newNumber) {
    if (newNumber < this.min) {
      this.number = this.min;
    }
    if (newNumber > this.max) {
      this.number = this.max;
    }
    if (!this.number && this.value) {
      this.number = this.value;
    }
    return true;
  }
  onInputChange(ev) {
    this.changeNumber(ev.target.value * 1);
    this.checkDisabled();
  }
  render() {
    return (index.h(index.Host, null, index.h("button", { onClick: () => this.less(), disabled: this.disableMin }, "-"), index.h("input", { type: "text", name: this.name, value: this.number, onChange: (ev) => this.onInputChange(ev), required: this.required }), index.h("button", { onClick: () => this.sum(), disabled: this.disableMax }, "+")));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "number": ["watchPropHandler"]
  }; }
};
InputMinusPlus.style = inputMinusPlusCss;

exports.input_minus_plus = InputMinusPlus;

//# sourceMappingURL=input-minus-plus.cjs.entry.js.map