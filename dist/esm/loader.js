import { p as promiseResolve, b as bootstrapLazy } from './index-92141ee5.js';

/*
 Stencil Client Patch Esm v2.18.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["input-minus-plus",[[1,"input-minus-plus",{"max":[2],"min":[2],"name":[1],"number":[32]}]]]], options);
  });
};

export { defineCustomElements };
