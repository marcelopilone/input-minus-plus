import { EventEmitter } from '../../stencil-public-runtime';
export declare class InputMinusPlus {
  inpluschange: EventEmitter<HTMLInputElement>;
  watchPropHandler(newValue: boolean, oldValue: boolean): void;
  watchStateHandler(newValue: boolean, oldValue: boolean): void;
  value: any;
  number: number;
  el: HTMLElement;
  _input: HTMLInputElement;
  handleClick(): void;
  componentWillLoad(): void;
  sum(): void;
  less(): void;
  onInputChange(ev: any): void;
  render(): any;
}
