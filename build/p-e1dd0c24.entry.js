import{r as t,c as a,h as i,H as o,g as e}from"./p-768fa76f.js";import{c as n,d as r}from"./p-b7fe8dc5.js";import{g as c}from"./p-cababc98.js";import{a as s,s as l,c as d}from"./p-04967691.js";import{c as p,d as m}from"./p-8a8a08f3.js";import{u as h,c as f,d as u,s as x}from"./p-2b96f403.js";import{t as g,E as b}from"./p-c59044c0.js";import"./p-e6be3162.js";import"./p-30b0f762.js";import"./p-5f83161a.js";import"./p-62d90ff5.js";import"./p-e18049d0.js";import"./p-96f32c04.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const w={actionGroupBottom:"action-group--bottom",container:"container"};const y={expandTooltip:"expand-tooltip"};const v="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:block}@keyframes in{0%{opacity:0}100%{opacity:1}}:host{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:0.125rem;--calcite-action-pad-expanded-max-width:auto;background:transparent}:host([expanded][layout=vertical]) .container{max-inline-size:var(--calcite-action-pad-expanded-max-width)}::slotted(calcite-action-group){border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-block:0px}.container{display:inline-flex;flex-direction:column;overflow-y:auto;border-radius:0.25rem;background-color:var(--calcite-ui-background);--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.action-group--bottom{flex-grow:1;justify-content:flex-end;padding-block-end:0px}:host([layout=horizontal]) .container{flex-direction:row}:host([layout=horizontal]) .container .action-group--bottom{padding:0px}:host([layout=horizontal]) .container ::slotted(calcite-action-group){border-width:0px;padding:0px;border-inline-end-width:1px}::slotted(calcite-action-group:last-child){border-block-end-width:0px}";const k=class{constructor(i){t(this,i);this.calciteActionPadToggle=a(this,"calciteActionPadToggle",6);this.actionMenuOpenHandler=t=>{if(t.target.menuOpen){const a=t.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach((t=>{if(!a.includes(t)){t.menuOpen=false}}))}};this.toggleExpand=()=>{this.expanded=!this.expanded;this.calciteActionPadToggle.emit()};this.setExpandToggleRef=t=>{this.expandToggleEl=t};this.expandDisabled=false;this.expanded=false;this.layout="vertical";this.position=undefined;this.scale=undefined;this.messages=undefined;this.messageOverrides=undefined;this.effectiveLocale="";this.defaultMessages=undefined}expandedHandler(t){g({parent:this.el,expanded:t})}onMessagesChange(){}effectiveLocaleChange(){h(this,this.effectiveLocale)}connectedCallback(){n(this);p(this);f(this)}disconnectedCallback(){m(this);u(this);r(this)}async componentWillLoad(){s(this);const{el:t,expanded:a}=this;g({parent:t,expanded:a});await x(this)}componentDidLoad(){l(this)}async setFocus(){var t;await d(this);(t=this.el)===null||t===void 0?void 0:t.focus()}renderBottomActionGroup(){const{expanded:t,expandDisabled:a,messages:o,el:e,position:n,toggleExpand:r,scale:s,layout:l}=this;const d=c(e,y.expandTooltip);const p=!a?i(b,{el:e,expanded:t,intlCollapse:o.collapse,intlExpand:o.expand,position:n,scale:s,toggle:r,tooltip:d,ref:this.setExpandToggleRef}):null;return p?i("calcite-action-group",{class:w.actionGroupBottom,layout:l,scale:s},i("slot",{name:y.expandTooltip}),p):null}render(){return i(o,{onCalciteActionMenuOpen:this.actionMenuOpenHandler},i("div",{class:w.container},i("slot",null),this.renderBottomActionGroup()))}static get delegatesFocus(){return true}static get assetsDirs(){return["assets"]}get el(){return e(this)}static get watchers(){return{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};k.style=v;export{k as calcite_action_pad};
//# sourceMappingURL=p-e1dd0c24.entry.js.map