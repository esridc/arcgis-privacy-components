import{r as t,h as e,F as i,g as a}from"./p-768fa76f.js";import{c as n,d as o}from"./p-b7fe8dc5.js";import{s as r,j as l}from"./p-cababc98.js";import"./p-e6be3162.js";import"./p-30b0f762.js";import"./p-5f83161a.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const s={main:"main",content:"content",contentBehind:"content--behind",footer:"footer",positionedSlotWrapper:"positioned-slot-wrapper",container:"container"};const c={centerRow:"center-row",panelStart:"panel-start",panelEnd:"panel-end",header:"header",footer:"footer",alerts:"alerts",modals:"modals"};const d="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{position:absolute;inset:0px;display:flex;block-size:100%;inline-size:100%;flex-direction:column;overflow:hidden;--calcite-shell-tip-spacing:26vw}.main{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;flex-direction:row;justify-content:space-between;overflow:hidden}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;overflow:auto}.content ::slotted(calcite-shell-center-row),.content ::slotted(calcite-panel),.content ::slotted(calcite-flow){flex:1 1 auto;align-self:stretch;max-block-size:unset}.content--behind{position:absolute;inset:0px;border-width:0px;z-index:calc(1 - 1);display:initial}::slotted(calcite-shell-center-row){inline-size:unset}::slotted(.header .heading){font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-normal)}slot[name=panel-end]::slotted(calcite-shell-panel){margin-inline-start:auto}::slotted(calcite-shell-panel),::slotted(calcite-shell-center-row){position:relative;z-index:1}::slotted(calcite-panel),::slotted(calcite-flow){border-width:1px;border-inline-start-width:0px;border-inline-end-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3)}slot[name=center-row]::slotted(calcite-shell-center-row:not([detached])){border-inline-start-width:1px;border-inline-end-width:1px;border-color:var(--calcite-ui-border-3)}::slotted(calcite-tip-manager){position:absolute;z-index:500;box-sizing:border-box}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}::slotted(calcite-tip-manager){animation:in-up var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:0.25rem;--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);inset-block-end:0.5rem;inset-inline:var(--calcite-shell-tip-spacing)}.position-wrapper{position:absolute;pointer-events:none;inset:0}";const p=class{constructor(e){t(this,e);this.handleHeaderSlotChange=t=>{this.hasHeader=!!r(t)};this.handleFooterSlotChange=t=>{this.hasFooter=!!r(t)};this.handleAlertsSlotChange=t=>{var e;this.hasAlerts=!!r(t);(e=l(t))===null||e===void 0?void 0:e.map((t=>{if(t.nodeName==="CALCITE-ALERT"){t.slottedInShell=true}}))};this.handleModalsSlotChange=t=>{var e;this.hasModals=!!r(t);(e=l(t))===null||e===void 0?void 0:e.map((t=>{if(t.nodeName==="CALCITE-MODAL"){t.slottedInShell=true}}))};this.contentBehind=false;this.hasHeader=false;this.hasFooter=false;this.hasAlerts=false;this.hasModals=false}connectedCallback(){n(this)}disconnectedCallback(){o(this)}renderHeader(){return e("div",{hidden:!this.hasHeader},e("slot",{key:"header",name:c.header,onSlotchange:this.handleHeaderSlotChange}))}renderFooter(){return e("div",{class:s.footer,hidden:!this.hasFooter,key:"footer"},e("slot",{name:c.footer,onSlotchange:this.handleFooterSlotChange}))}renderAlerts(){return e("div",{hidden:!this.hasAlerts},e("slot",{key:"alerts",name:c.alerts,onSlotchange:this.handleAlertsSlotChange}))}renderModals(){return e("div",{hidden:!this.hasModals},e("slot",{key:"modals",name:c.modals,onSlotchange:this.handleModalsSlotChange}))}renderContent(){const t=e("slot",{key:"default-slot"});const i=e("slot",{key:"center-row-slot",name:c.centerRow});const a="content-container";const n=!!this.contentBehind?[e("div",{class:{[s.content]:true,[s.contentBehind]:true},key:a},t),i]:[e("div",{class:s.content,key:a},t,i)];return n}renderMain(){return e("div",{class:s.main},e("slot",{name:c.panelStart}),this.renderContent(),e("slot",{name:c.panelEnd}))}renderPositionedSlots(){return e("div",{class:s.positionedSlotWrapper},this.renderAlerts(),this.renderModals())}render(){return e(i,null,this.renderHeader(),this.renderMain(),this.renderFooter(),this.renderPositionedSlots())}get el(){return a(this)}};p.style=d;export{p as calcite_shell};
//# sourceMappingURL=p-194714b5.entry.js.map