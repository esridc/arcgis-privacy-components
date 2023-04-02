import{a as n}from"./p-686dc488.js";import{c as o}from"./p-0a7873a3.js";import{g as s}from"./p-1cdacb7f.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const t={};const a={};async function r(o){const c=s(o);if(t[c]){return t[c]}if(!a[c]){a[c]=fetch(n(`./assets/date-picker/nls/${c}.json`)).then((n=>n.json())).catch((()=>{console.error(`Translations for "${c}" not found or invalid, falling back to english`);return r("en")}))}const i=await a[c];t[c]=i;return i}function c(n){return n.map(((n,s)=>o(n,s===1)))}export{r as a,c as g};
//# sourceMappingURL=p-e50258c1.js.map