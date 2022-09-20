'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f41b7341.js');

const inputMinusPlusCss = ":host{display:block}";

const InputMinPlus = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, null, index.h("button", { id: 'less', onClick: () => this.less() }, "-"), index.h("input", { id: 'number', value: this.number, min: this.min, max: this.max, name: this.name }), index.h("button", { id: 'sum', onClick: () => this.sum() }, "+")));
  }
};
InputMinPlus.style = inputMinusPlusCss;

exports.input_minus_plus = InputMinPlus;
