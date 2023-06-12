import{n as t}from"./p-cababc98.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const n="CALCITE-COMBOBOX-ITEM";const c="CALCITE-COMBOBOX-ITEM-GROUP";const o=`${n}, ${c}`
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */;function s(t){const n=t.parentElement?.closest(o);const c=n?.parentElement?.closest(o);return[n,c].filter((t=>t))}function a(t){return t.ancestors?.filter((t=>t.nodeName==="CALCITE-COMBOBOX-ITEM"))||[]}function e(n){return t(n.querySelectorAll("calcite-combobox-item"))}function r(n){const c=t(n.querySelectorAll("calcite-combobox-item"));return c.filter((t=>t.selected)).length>0}function u(t){const n=document.evaluate("ancestor::calcite-combobox-item",t,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);return n.snapshotLength}export{o as C,e as a,n as b,c,s as d,u as e,a as g,r as h};
//# sourceMappingURL=p-d4a2ebd6.js.map