import type { Components, JSX } from "../types/components";

interface InputMinusPlus extends Components.InputMinusPlus, HTMLElement {}
export const InputMinusPlus: {
  prototype: InputMinusPlus;
  new (): InputMinusPlus;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
