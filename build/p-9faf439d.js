import{u as e,v as r,w as n,x as t,h as u,y as a}from"./p-cababc98.js";
/*!
* focus-trap 7.4.0
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){f(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function f(e,r,n){r=s(r);if(r in e){Object.defineProperty(e,r,{value:n,enumerable:true,configurable:true,writable:true})}else{e[r]=n}return e}function c(e,r){if(typeof e!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==undefined){var t=n.call(e,r||"default");if(typeof t!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function s(e){var r=c(e,"string");return typeof r==="symbol"?r:String(r)}var v={activateTrap:function e(r,n){if(r.length>0){var t=r[r.length-1];if(t!==n){t.pause()}}var u=r.indexOf(n);if(u===-1){r.push(n)}else{r.splice(u,1);r.push(n)}},deactivateTrap:function e(r,n){var t=r.indexOf(n);if(t!==-1){r.splice(t,1)}if(r.length>0){r[r.length-1].unpause()}}};var l=function e(r){return r.tagName&&r.tagName.toLowerCase()==="input"&&typeof r.select==="function"};var d=function e(r){return r.key==="Escape"||r.key==="Esc"||r.keyCode===27};var b=function e(r){return r.key==="Tab"||r.keyCode===9};var p=function e(r){return b(r)&&!r.shiftKey};var h=function e(r){return b(r)&&r.shiftKey};var w=function e(r){return setTimeout(r,0)};var m=function e(r,n){var t=-1;r.every((function(e,r){if(n(e)){t=r;return false}return true}));return t};var y=function e(r){for(var n=arguments.length,t=new Array(n>1?n-1:0),u=1;u<n;u++){t[u-1]=arguments[u]}return typeof r==="function"?r.apply(void 0,t):r};var F=function e(r){return r.target.shadowRoot&&typeof r.composedPath==="function"?r.composedPath()[0]:r.target};var O=[];var j=function u(a,i){var f=(i===null||i===void 0?void 0:i.document)||document;var c=(i===null||i===void 0?void 0:i.trapStack)||O;var s=o({returnFocusOnDeactivate:true,escapeDeactivates:true,delayInitialFocus:true,isKeyForward:p,isKeyBackward:h},i);var j={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:false,paused:false,delayInitialFocusTimer:undefined};var k;var T=function e(r,n,t){return r&&r[n]!==undefined?r[n]:s[t||n]};var D=function e(r){return j.containerGroups.findIndex((function(e){var n=e.container,t=e.tabbableNodes;return n.contains(r)||t.find((function(e){return e===r}))}))};var g=function e(r){var n=s[r];if(typeof n==="function"){for(var t=arguments.length,u=new Array(t>1?t-1:0),a=1;a<t;a++){u[a-1]=arguments[a]}n=n.apply(void 0,u)}if(n===true){n=undefined}if(!n){if(n===undefined||n===false){return n}throw new Error("`".concat(r,"` was specified but was not a node, or did not return a node"))}var i=n;if(typeof n==="string"){i=f.querySelector(n);if(!i){throw new Error("`".concat(r,"` as selector refers to no known node"))}}return i};var E=function e(){var r=g("initialFocus");if(r===false){return false}if(r===undefined){if(D(f.activeElement)>=0){r=f.activeElement}else{var n=j.tabbableGroups[0];var t=n&&n.firstTabbableNode;r=t||g("fallbackFocus")}}if(!r){throw new Error("Your focus-trap needs to have at least one focusable element")}return r};var P=function t(){j.containerGroups=j.containers.map((function(t){var u=e(t,s.tabbableOptions);var a=r(t,s.tabbableOptions);return{container:t,tabbableNodes:u,focusableNodes:a,firstTabbableNode:u.length>0?u[0]:null,lastTabbableNode:u.length>0?u[u.length-1]:null,nextTabbableNode:function e(r){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var u=a.findIndex((function(e){return e===r}));if(u<0){return undefined}if(t){return a.slice(u+1).find((function(e){return n(e,s.tabbableOptions)}))}return a.slice(0,u).reverse().find((function(e){return n(e,s.tabbableOptions)}))}}}));j.tabbableGroups=j.containerGroups.filter((function(e){return e.tabbableNodes.length>0}));if(j.tabbableGroups.length<=0&&!g("fallbackFocus")){throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")}};var N=function e(r){if(r===false){return}if(r===f.activeElement){return}if(!r||!r.focus){e(E());return}r.focus({preventScroll:!!s.preventScroll});j.mostRecentlyFocusedNode=r;if(l(r)){r.select()}};var A=function e(r){var n=g("setReturnFocus",r);return n?n:n===false?false:r};var R=function e(r){var n=F(r);if(D(n)>=0){return}if(y(s.clickOutsideDeactivates,r)){k.deactivate({returnFocus:s.returnFocusOnDeactivate});return}if(y(s.allowOutsideClick,r)){return}r.preventDefault()};var S=function e(r){var n=F(r);var t=D(n)>=0;if(t||n instanceof Document){if(t){j.mostRecentlyFocusedNode=n}}else{r.stopImmediatePropagation();N(j.mostRecentlyFocusedNode||E())}};var C=function e(r){var u=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var a=F(r);P();var i=null;if(j.tabbableGroups.length>0){var o=D(a);var f=o>=0?j.containerGroups[o]:undefined;if(o<0){if(u){i=j.tabbableGroups[j.tabbableGroups.length-1].lastTabbableNode}else{i=j.tabbableGroups[0].firstTabbableNode}}else if(u){var c=m(j.tabbableGroups,(function(e){var r=e.firstTabbableNode;return a===r}));if(c<0&&(f.container===a||t(a,s.tabbableOptions)&&!n(a,s.tabbableOptions)&&!f.nextTabbableNode(a,false))){c=o}if(c>=0){var v=c===0?j.tabbableGroups.length-1:c-1;var l=j.tabbableGroups[v];i=l.lastTabbableNode}else if(!b(r)){i=f.nextTabbableNode(a,false)}}else{var d=m(j.tabbableGroups,(function(e){var r=e.lastTabbableNode;return a===r}));if(d<0&&(f.container===a||t(a,s.tabbableOptions)&&!n(a,s.tabbableOptions)&&!f.nextTabbableNode(a))){d=o}if(d>=0){var p=d===j.tabbableGroups.length-1?0:d+1;var h=j.tabbableGroups[p];i=h.firstTabbableNode}else if(!b(r)){i=f.nextTabbableNode(a)}}}else{i=g("fallbackFocus")}if(i){if(b(r)){r.preventDefault()}N(i)}};var x=function e(r){if(d(r)&&y(s.escapeDeactivates,r)!==false){r.preventDefault();k.deactivate();return}if(s.isKeyForward(r)||s.isKeyBackward(r)){C(r,s.isKeyBackward(r))}};var B=function e(r){var n=F(r);if(D(n)>=0){return}if(y(s.clickOutsideDeactivates,r)){return}if(y(s.allowOutsideClick,r)){return}r.preventDefault();r.stopImmediatePropagation()};var G=function e(){if(!j.active){return}v.activateTrap(c,k);j.delayInitialFocusTimer=s.delayInitialFocus?w((function(){N(E())})):N(E());f.addEventListener("focusin",S,true);f.addEventListener("mousedown",R,{capture:true,passive:false});f.addEventListener("touchstart",R,{capture:true,passive:false});f.addEventListener("click",B,{capture:true,passive:false});f.addEventListener("keydown",x,{capture:true,passive:false});return k};var I=function e(){if(!j.active){return}f.removeEventListener("focusin",S,true);f.removeEventListener("mousedown",R,true);f.removeEventListener("touchstart",R,true);f.removeEventListener("click",B,true);f.removeEventListener("keydown",x,true);return k};k={get active(){return j.active},get paused(){return j.paused},activate:function e(r){if(j.active){return this}var n=T(r,"onActivate");var t=T(r,"onPostActivate");var u=T(r,"checkCanFocusTrap");if(!u){P()}j.active=true;j.paused=false;j.nodeFocusedBeforeActivation=f.activeElement;n===null||n===void 0?void 0:n();var a=function e(){if(u){P()}G();t===null||t===void 0?void 0:t()};if(u){u(j.containers.concat()).then(a,a);return this}a();return this},deactivate:function e(r){if(!j.active){return this}var n=o({onDeactivate:s.onDeactivate,onPostDeactivate:s.onPostDeactivate,checkCanReturnFocus:s.checkCanReturnFocus},r);clearTimeout(j.delayInitialFocusTimer);j.delayInitialFocusTimer=undefined;I();j.active=false;j.paused=false;v.deactivateTrap(c,k);var t=T(n,"onDeactivate");var u=T(n,"onPostDeactivate");var a=T(n,"checkCanReturnFocus");var i=T(n,"returnFocus","returnFocusOnDeactivate");t===null||t===void 0?void 0:t();var f=function e(){w((function(){if(i){N(A(j.nodeFocusedBeforeActivation))}u===null||u===void 0?void 0:u()}))};if(i&&a){a(A(j.nodeFocusedBeforeActivation)).then(f,f);return this}f();return this},pause:function e(r){if(j.paused||!j.active){return this}var n=T(r,"onPause");var t=T(r,"onPostPause");j.paused=true;n===null||n===void 0?void 0:n();I();t===null||t===void 0?void 0:t();return this},unpause:function e(r){if(!j.paused||!j.active){return this}var n=T(r,"onUnpause");var t=T(r,"onPostUnpause");j.paused=false;n===null||n===void 0?void 0:n();P();G();t===null||t===void 0?void 0:t();return this},updateContainerElements:function e(r){var n=[].concat(r).filter(Boolean);j.containers=n.map((function(e){return typeof e==="string"?f.querySelector(e):e}));if(j.active){P()}return this}};k.updateContainerElements(a);return k};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const k=[];function T(e){const{focusTrapEl:r}=e;if(!r){return}if(r.tabIndex==null){r.tabIndex=-1}const n={clickOutsideDeactivates:true,document:r.ownerDocument,escapeDeactivates:false,fallbackFocus:r,setReturnFocus:e=>{u(e);return false},tabbableOptions:a,trapStack:k};e.focusTrap=j(r,n)}function D(e){if(!e.focusTrapDisabled){e.focusTrap?.activate()}}function g(e){e.focusTrap?.deactivate()}function E(e){e.focusTrap?.updateContainerElements(e.focusTrapEl)}export{D as a,T as c,g as d,E as u};
//# sourceMappingURL=p-9faf439d.js.map