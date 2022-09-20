import { p as promiseResolve, b as bootstrapLazy } from './index-92141ee5.js';

/*
 Stencil Client Patch Browser v2.18.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["input-minus-plus",[[1,"input-minus-plus",{"max":[2],"min":[2],"name":[1],"number":[32]}]]]], options);
});
