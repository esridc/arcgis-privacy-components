import{r as t,c as i,h as a,H as e,g as o}from"./p-768fa76f.js";import{t as n}from"./p-cababc98.js";import{c as s,d as c,H as r}from"./p-f5d61c9c.js";import{g as l}from"./p-30b0f762.js";import{u as h}from"./p-7b97aed3.js";import{i as d}from"./p-62d90ff5.js";import{c as m,d as p,g as u}from"./p-d7fb2ade.js";import{c as f,a as b,s as g}from"./p-04967691.js";import"./p-5f83161a.js";const v="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([scale=s]){--calcite-checkbox-size:0.75rem}:host([scale=m]){--calcite-checkbox-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-checkbox-size:1rem}:host{position:relative;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host .check-svg,:host .toggle{inline-size:var(--calcite-checkbox-size);block-size:var(--calcite-checkbox-size)}:host .check-svg{pointer-events:none;box-sizing:border-box;display:block;overflow:hidden;background-color:var(--calcite-ui-foreground-1);fill:currentColor;stroke:currentColor;stroke-width:1;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);color:var(--calcite-ui-background)}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([hovered]) .toggle .check-svg,:host .toggle:hover .check-svg{box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}.toggle{outline-color:transparent}.toggle:active,.toggle:focus,.toggle:focus-visible{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";const k=class{constructor(a){t(this,a);this.calciteInternalCheckboxBlur=i(this,"calciteInternalCheckboxBlur",6);this.calciteCheckboxChange=i(this,"calciteCheckboxChange",6);this.calciteInternalCheckboxFocus=i(this,"calciteInternalCheckboxFocus",6);this.checkedPath="M5.5 12L2 8.689l.637-.636L5.5 10.727l8.022-7.87.637.637z";this.indeterminatePath="M13 8v1H3V8z";this.getPath=()=>this.indeterminate?this.indeterminatePath:this.checked?this.checkedPath:"";this.toggle=()=>{if(!this.disabled){this.checked=!this.checked;this.setFocus();this.indeterminate=false;this.calciteCheckboxChange.emit()}};this.keyDownHandler=t=>{if(d(t.key)){this.toggle();t.preventDefault()}};this.clickHandler=()=>{this.toggle()};this.onToggleBlur=()=>{this.calciteInternalCheckboxBlur.emit(false)};this.onToggleFocus=()=>{this.calciteInternalCheckboxFocus.emit(true)};this.onLabelClick=()=>{this.toggle()};this.checked=false;this.disabled=false;this.form=undefined;this.guid=undefined;this.hovered=false;this.indeterminate=false;this.label=undefined;this.name=undefined;this.required=false;this.scale="m";this.value=undefined}async setFocus(){var t;await f(this);(t=this.toggleEl)===null||t===void 0?void 0:t.focus()}syncHiddenFormInput(t){t.type="checkbox"}connectedCallback(){this.guid=this.el.id||`calcite-checkbox-${l()}`;m(this);s(this)}disconnectedCallback(){p(this);c(this)}componentWillLoad(){b(this)}componentDidLoad(){g(this)}componentDidRender(){h(this)}render(){return a(e,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},a("div",{"aria-checked":n(this.checked),"aria-label":u(this),class:"toggle",onBlur:this.onToggleBlur,onFocus:this.onToggleFocus,role:"checkbox",tabIndex:this.disabled?undefined:0,ref:t=>this.toggleEl=t},a("svg",{"aria-hidden":"true",class:"check-svg",viewBox:"0 0 16 16"},a("path",{d:this.getPath()})),a("slot",null)),a(r,{component:this}))}get el(){return o(this)}};k.style=v;export{k as calcite_checkbox};
//# sourceMappingURL=p-60163c45.entry.js.map