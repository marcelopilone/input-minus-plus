'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f41b7341.js');

/*
 Stencil Client Patch Esm v2.18.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["input-minus-plus.cjs",[[1,"input-minus-plus",{"max":[2],"min":[2],"name":[1],"number":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
