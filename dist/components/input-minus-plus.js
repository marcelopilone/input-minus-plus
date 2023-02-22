import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const inputMinusPlusCss = ":host{display:inline-flex;flex-wrap:nowrap;height:100%;border:1px solid silver;border-radius:1em;overflow:hidden}input,button{height:100%;margin:0;border:none;text-align:center}button{min-width:1.5em}input{width:3em}";

const InputMinusPlus$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.inpluschange = createEvent(this, "inpluschange", 7);
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
    return (h(Host, null, h("button", { onClick: () => this.less(), disabled: this.disableMin }, "-"), h("input", { type: "text", name: this.name, value: this.number, onChange: (ev) => this.onInputChange(ev), required: this.required }), h("button", { onClick: () => this.sum(), disabled: this.disableMax }, "+")));
  }
  get el() { return this; }
  static get watchers() { return {
    "number": ["watchPropHandler"]
  }; }
  static get style() { return inputMinusPlusCss; }
}, [1, "input-minus-plus", {
    "value": [1544],
    "min": [2],
    "max": [2],
    "step": [2],
    "name": [1],
    "required": [4],
    "number": [32],
    "disableMin": [32],
    "disableMax": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["input-minus-plus"];
  components.forEach(tagName => { switch (tagName) {
    case "input-minus-plus":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, InputMinusPlus$1);
      }
      break;
  } });
}

const InputMinusPlus = InputMinusPlus$1;
const defineCustomElement = defineCustomElement$1;

export { InputMinusPlus, defineCustomElement };

//# sourceMappingURL=input-minus-plus.js.map