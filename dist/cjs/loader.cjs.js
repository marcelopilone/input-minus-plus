'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8dd2dca2.js');

/*
 Stencil Client Patch Esm v3.0.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["input-minus-plus.cjs",[[1,"input-minus-plus",{"value":[1544],"min":[2],"max":[2],"step":[2],"name":[1],"required":[4],"number":[32],"disableMin":[32],"disableMax":[32]}]]]], options);
  });
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map