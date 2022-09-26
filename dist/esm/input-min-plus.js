import { p as promiseResolve, b as bootstrapLazy } from './index-29d70b93.js';

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
  return bootstrapLazy([["input-minus-plus",[[1,"input-minus-plus",{"value":[1544],"number":[32]},[[2,"change","handleClick"]]]]]], options);
});
