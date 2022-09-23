import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const inputMinusPlusCss = ":host{display:inline-flex;flex-wrap:nowrap;height:100%;border:1px solid silver;border-radius:1em;overflow:hidden}input,button{height:100%;padding:1em;margin:0;border:none;text-align:center}button{min-width:1.5em}input{width:3em}";

const InputMinusPlus$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.inpluschange = createEvent(this, "inpluschange", 7);
    this.value = null;
    this.number = 0;
  }
  watchPropHandler(newValue, oldValue) {
    if (newValue != oldValue) {
      this.value = this.number;
    }
  }
  watchStateHandler(newValue, oldValue) {
    if (newValue != oldValue) {
      this.number = this.value;
    }
  }
  handleClick() {
    // whenever a click event occurs on
    // the component, update `isOpen`,
    // triggering the rerender
    console.info("aca esta la garompa esta caputrada");
  }
  componentWillLoad() {
    this.number = this.value * 1;
    if (this.el.attributes.length) {
      for (var i = 0; i < this.el.attributes.length; i++) {
        let att = this.el.attributes[i];
        if (!att.hasOwnProperty("nodeName"))
          continue;
        if (att.nodeName == 'id')
          continue;
        this._input[att.nodeName] = att.nodeValue;
      }
    }
    // this.marceChange.call()
  }
  sum() {
    this.number = this.number + 1;
    this.inpluschange.emit(this._input);
  }
  less() {
    this.number = this.number - 1;
    this.inpluschange.emit(this._input);
  }
  onInputChange(ev) {
    this.number = ev.target.value * 1;
  }
  render() {
    return (h(Host, null, h("button", { onClick: () => this.less() }, "-"), h("input", { value: this.number, onChange: (ev) => this.onInputChange(ev) }), h("button", { onClick: () => this.sum() }, "+")));
  }
  get el() { return this; }
  static get watchers() { return {
    "number": ["watchPropHandler"],
    "value": ["watchStateHandler"]
  }; }
  static get style() { return inputMinusPlusCss; }
}, [1, "input-minus-plus", {
    "value": [1544],
    "number": [32]
  }, [[2, "change", "handleClick"]]]);
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
