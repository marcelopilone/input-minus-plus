import { r as registerInstance, h, e as Host, g as getElement } from './index-f6444016.js';

const inputMinusPlusCss = ":host{display:inline-block}";

const InputMinusPlus = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.number = 0;
  }
  componentDidRender() {
    this._input = document.createElement('input');
    for (var att, i = 0, atts = this.el.attributes, n = atts.length; i < n; i++) {
      att = atts[i];
      this._input[att.nodeName] = att.nodeValue;
      document.getElementById('number').setAttribute(att.nodeName, att.nodeValue);
    }
  }
  sum() {
    this.number = this.number + 1;
  }
  less() {
    this.number = this.number - 1;
  }
  render() {
    return (h(Host, null, h("button", { id: 'less', onClick: () => this.less() }, "-"), h("input", { id: 'number', value: this.number }), h("button", { id: 'sum', onClick: () => this.sum() }, "+")));
  }
  get el() { return getElement(this); }
};
InputMinusPlus.style = inputMinusPlusCss;

export { InputMinusPlus as input_minus_plus };
