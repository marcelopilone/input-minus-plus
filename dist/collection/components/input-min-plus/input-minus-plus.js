import { Host, h } from '@stencil/core';
export class InputMinusPlus {
  constructor() {
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "value",
        "reflect": true,
        "defaultValue": "null"
      },
      "min": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "min",
        "reflect": false,
        "defaultValue": "-Infinity"
      },
      "max": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "max",
        "reflect": false,
        "defaultValue": "Infinity"
      },
      "step": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "step",
        "reflect": false,
        "defaultValue": "1"
      },
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "name",
        "reflect": false
      },
      "required": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "required",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "number": {},
      "disableMin": {},
      "disableMax": {}
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
      }];
  }
}
//# sourceMappingURL=input-minus-plus.js.map
