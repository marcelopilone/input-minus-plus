import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-e81a2ac2.js';

const inputMinusPlusCss = ":host{display:inline-flex;flex-wrap:nowrap;height:100%;border:1px solid silver;border-radius:1em;overflow:hidden}input,button{height:100%;margin:0;border:none;text-align:center}button{min-width:1.5em}input{width:3em}";

const InputMinusPlus = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
  static get watchers() { return {
    "number": ["watchPropHandler"],
    "value": ["watchStateHandler"]
  }; }
};
InputMinusPlus.style = inputMinusPlusCss;

export { InputMinusPlus as input_minus_plus };

//# sourceMappingURL=input-minus-plus.entry.js.map