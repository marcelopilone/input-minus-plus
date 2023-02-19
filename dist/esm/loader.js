import { p as promiseResolve, b as bootstrapLazy } from './index-79264776.js';
export { s as setNonce } from './index-79264776.js';

/*
 Stencil Client Patch Esm v3.0.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["input-minus-plus",[[1,"input-minus-plus",{"value":[1544],"min":[2],"max":[2],"step":[2],"name":[1],"required":[4],"number":[32],"disableMin":[32],"disableMax":[32]}]]]], options);
  });
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map