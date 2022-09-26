import { p as promiseResolve, b as bootstrapLazy } from './index-29d70b93.js';

/*
 Stencil Client Patch Esm v2.18.0 | MIT Licensed | https://stenciljs.com
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
