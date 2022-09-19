import { r as registerInstance, h, e as Host } from './index-db780ae2.js';

const inputMinusPlusCss = ":host{display:block}";

const InputMinPlus = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.max = null;
    this.min = null;
    this.name = '';
    this.number = 0;
  }
  sumar() {
    this.number = this.number + 1;
  }
  restar() {
    this.number = this.number - 1;
  }
  render() {
    return (h(Host, null, h("button", { id: 'less', onClick: () => this.restar() }, "-"), h("input", { id: 'number', value: this.number, min: this.min, max: this.max, name: this.name }), h("button", { id: 'sum', onClick: () => this.sumar() }, "+")));
  }
};
InputMinPlus.style = inputMinusPlusCss;

export { InputMinPlus as input_minus_plus };
