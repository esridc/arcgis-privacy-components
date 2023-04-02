import{f as t}from"./p-686dc488.js";import{c as o}from"./p-e6be3162.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const n=new Set;let c;const s={childList:true};function f(t){if(!c){c=o("mutation",e)}c.observe(t.el,s)}function i(t){n.delete(t.el);e(c.takeRecords());c.disconnect();for(const[t]of n.entries()){c.observe(t,s)}}function e(o){o.forEach((({target:o})=>{t(o)}))}export{f as c,i as d};
//# sourceMappingURL=p-177a41ee.js.map