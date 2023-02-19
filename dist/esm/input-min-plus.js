import { p as promiseResolve, b as bootstrapLazy } from './index-79264776.js';
export { s as setNonce } from './index-79264776.js';

/*
 Stencil Client Patch Browser v3.0.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["input-minus-plus",[[1,"input-minus-plus",{"value":[1544],"min":[2],"max":[2],"step":[2],"name":[1],"required":[4],"number":[32],"disableMin":[32],"disableMax":[32]}]]]], options);
});

//# sourceMappingURL=input-min-plus.js.map