import { p as promiseResolve, b as bootstrapLazy } from './index-e81a2ac2.js';
export { s as setNonce } from './index-e81a2ac2.js';

/*
 Stencil Client Patch Esm v3.0.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["input-minus-plus",[[1,"input-minus-plus",{"value":[1544],"number":[32]},[[2,"change","handleClick"]]]]]], options);
  });
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map