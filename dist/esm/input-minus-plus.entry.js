import { r as registerInstance, h, H as Host } from './index-92141ee5.js';

const inputMinusPlusCss = ":host{display:block}";

const InputMinPlus = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.max = null;
    this.min = null;
    this.name = '';
    this.number = 0;
  }
  sum() {
    this.number = this.number + 1;
  }
  less() {
    this.number = this.number - 1;
  }
  render() {
    return (h(Host, null, h("button", { id: 'less', onClick: () => this.less() }, "-"), h("input", { id: 'number', value: this.number, min: this.min, max: this.max, name: this.name }), h("button", { id: 'sum', onClick: () => this.sum() }, "+")));
  }
};
InputMinPlus.style = inputMinusPlusCss;

export { InputMinPlus as input_minus_plus };
