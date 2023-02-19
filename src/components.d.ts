/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface InputMinusPlus {
        "max"?: number;
        "min"?: number;
        "name"?: string;
        "required"?: boolean;
        "step"?: number;
        "value"?: any;
    }
}
export interface InputMinusPlusCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLInputMinusPlusElement;
}
declare global {
    interface HTMLInputMinusPlusElement extends Components.InputMinusPlus, HTMLStencilElement {
    }
    var HTMLInputMinusPlusElement: {
        prototype: HTMLInputMinusPlusElement;
        new (): HTMLInputMinusPlusElement;
    };
    interface HTMLElementTagNameMap {
        "input-minus-plus": HTMLInputMinusPlusElement;
    }
}
declare namespace LocalJSX {
    interface InputMinusPlus {
        "max"?: number;
        "min"?: number;
        "name"?: string;
        "onInpluschange"?: (event: InputMinusPlusCustomEvent<HTMLInputElement>) => void;
        "required"?: boolean;
        "step"?: number;
        "value"?: any;
    }
    interface IntrinsicElements {
        "input-minus-plus": InputMinusPlus;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "input-minus-plus": LocalJSX.InputMinusPlus & JSXBase.HTMLAttributes<HTMLInputMinusPlusElement>;
        }
    }
}
