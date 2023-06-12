import{a as n}from"./p-768fa76f.js";import{c as o}from"./p-cac7ebbb.js";import{g as s}from"./p-8a8a08f3.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const a={};const t={};async function r(o){const c=s(o);if(a[c]){return a[c]}if(!t[c]){t[c]=fetch(n(`./assets/date-picker/nls/${c}.json`)).then((n=>n.json())).catch((()=>{console.error(`Translations for "${c}" not found or invalid, falling back to english`);return r("en")}))}const f=await t[c];a[c]=f;return f}function c(n){return n.map(((n,s)=>o(n,s===1)))}export{r as a,c as g};
//# sourceMappingURL=p-6498a09c.js.map