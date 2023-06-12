import{f as t}from"./p-768fa76f.js";import{c as o}from"./p-e6be3162.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const f=new Set;let n;const s={childList:true};function c(t){if(!n){n=o("mutation",e)}n.observe(t.el,s)}function i(t){f.delete(t.el);e(n.takeRecords());n.disconnect();for(const[t]of f.entries()){n.observe(t,s)}}function e(o){o.forEach((({target:o})=>{t(o)}))}export{c,i as d};
//# sourceMappingURL=p-b7fe8dc5.js.map