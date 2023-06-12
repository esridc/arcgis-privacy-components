import{a as n}from"./p-768fa76f.js";import{g as t}from"./p-8a8a08f3.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const s={};async function o(t,o){const a=`${o}_${t}`;if(s[a]){return s[a]}s[a]=fetch(n(`./assets/${o}/t9n/messages_${t}.json`)).then((n=>{if(!n.ok){c()}return n.json()})).catch((()=>c()));return s[a]}function c(){throw new Error("could not fetch component message bundle")}function a(n){n.messages={...n.defaultMessages,...n.messageOverrides}}async function e(n){n.defaultMessages=await f(n,n.effectiveLocale);a(n)}async function f(n,s){const{el:c}=n;const a=c.tagName.toLowerCase();const e=a.replace("calcite-","");return o(t(s,"t9n"),e)}async function i(n,t){n.defaultMessages=await f(n,t);a(n)}function r(n){n.onMessagesChange=m}function u(n){n.onMessagesChange=undefined}function m(){a(this)}export{r as c,u as d,e as s,i as u};
//# sourceMappingURL=p-2b96f403.js.map