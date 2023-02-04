'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7992157a.js');

/*
 Stencil Client Patch Browser v3.0.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('input-min-plus.cjs.js', document.baseURI).href));
    const opts = {};
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["input-minus-plus.cjs",[[1,"input-minus-plus",{"value":[1544],"number":[32]},[[2,"change","handleClick"]]]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=input-min-plus.cjs.js.map