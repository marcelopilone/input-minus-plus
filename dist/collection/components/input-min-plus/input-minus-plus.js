import { Host, h } from '@stencil/core';
export class InputMinPlus {
  constructor() {
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
      "max": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "max",
        "reflect": false,
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
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "min",
        "reflect": false,
        "defaultValue": "null"
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
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "name",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
  static get states() {
    return {
      "number": {}
    };
  }
}
