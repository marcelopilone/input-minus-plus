import { Host, h } from '@stencil/core';
export class InputMinusPlus {
  constructor() {
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
  static get is() { return "input-minus-plus"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["input-minus-plus.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["input-minus-plus.css"]
    };
  }
  static get properties() {
    return {
      "value": {
        "type": "any",
        "mutable": true,
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "value",
        "reflect": true,
        "defaultValue": "null"
      }
    };
  }
  static get states() {
    return {
      "number": {}
    };
  }
  static get events() {
    return [{
        "method": "inpluschange",
        "name": "inpluschange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "HTMLInputElement",
          "resolved": "HTMLInputElement",
          "references": {
            "HTMLInputElement": {
              "location": "global"
            }
          }
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "number",
        "methodName": "watchPropHandler"
      }, {
        "propName": "value",
        "methodName": "watchStateHandler"
      }];
  }
  static get listeners() {
    return [{
        "name": "change",
        "method": "handleClick",
        "target": undefined,
        "capture": true,
        "passive": false
      }];
  }
}
//# sourceMappingURL=input-minus-plus.js.map
