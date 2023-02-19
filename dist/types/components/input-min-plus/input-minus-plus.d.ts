import { EventEmitter } from '../../stencil-public-runtime';
export declare class InputMinusPlus {
  value?: any;
  min?: number;
  max?: number;
  step?: number;
  name?: string;
  required?: boolean;
  number: number;
  disableMin: boolean;
  disableMax: boolean;
  inpluschange: EventEmitter<HTMLInputElement>;
  watchPropHandler(newValue: number, oldValue: number): void;
  el: HTMLElement;
  _input: HTMLInputElement;
  componentWillLoad(): void;
  sum(): void;
  less(): void;
  checkDisabled(): void;
  changeNumber(newNumber: any): true;
  onInputChange(ev: any): void;
  render(): any;
}
