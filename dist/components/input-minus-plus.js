import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const inputMinusPlusCss = ":host{display:block}";

const InputMinPlus = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  static get style() { return inputMinusPlusCss; }
}, [1, "input-minus-plus", {
    "max": [2],
    "min": [2],
    "name": [1],
    "number": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["input-minus-plus"];
  components.forEach(tagName => { switch (tagName) {
    case "input-minus-plus":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, InputMinPlus);
      }
      break;
  } });
}

const InputMinusPlus = InputMinPlus;
const defineCustomElement = defineCustomElement$1;

export { InputMinusPlus, defineCustomElement };
