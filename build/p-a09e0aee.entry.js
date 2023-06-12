import{r as t,c as i,h as e,H as n,g as a}from"./p-768fa76f.js";import{g as s,i as o,d as r,f as l,b as c}from"./p-cababc98.js";import{s as u,c as h,d,H as m}from"./p-f5d61c9c.js";import{u as p}from"./p-7b97aed3.js";import{n as b}from"./p-62d90ff5.js";import{c as f,d as v,g}from"./p-d7fb2ade.js";import{a as x,s as y,c as w}from"./p-04967691.js";import{n as k,i as z,p as j,s as D,a as I,c as _,d as E,B as C}from"./p-8a8a08f3.js";import{c as W}from"./p-e6be3162.js";import{C as L}from"./p-5f83161a.js";import{u as F,c as B,d as H,s as K}from"./p-2b96f403.js";import"./p-30b0f762.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const V={loader:"loader",clearButton:"clear-button",editingEnabled:"editing-enabled",inlineChild:"inline-child",inputIcon:"icon",prefix:"prefix",suffix:"suffix",numberButtonWrapper:"number-button-wrapper",buttonItemHorizontal:"number-button-item--horizontal",wrapper:"element-wrapper",inputWrapper:"wrapper",actionWrapper:"action-wrapper",resizeIconWrapper:"resize-icon-wrapper",numberButtonItem:"number-button-item"};const $={tel:"phone",password:"lock",email:"email-address",date:"calendar",time:"clock",search:"search"};const N={action:"action"};const P="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) textarea{block-size:1.5rem;min-block-size:1.5rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) input[type=file]{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=s]) textarea{block-size:auto;padding-block:0.25rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) textarea{min-block-size:2rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) input[type=file]{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=m]) textarea{block-size:auto;padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) textarea{min-block-size:2.75rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) input[type=file]{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([scale=l]) textarea{block-size:auto;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([disabled]) textarea{resize:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host textarea,:host input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-ui-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}:host input[type=search]::-webkit-search-decoration{-webkit-appearance:none}:host input,:host textarea{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);color:var(--calcite-ui-text-1)}:host input::placeholder,:host input:-ms-input-placeholder,:host input::-ms-input-placeholder,:host textarea::placeholder,:host textarea:-ms-input-placeholder,:host textarea::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}:host input:focus,:host textarea:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}:host input[readonly],:host textarea[readonly]{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}:host input[readonly]:focus,:host textarea[readonly]:focus{color:var(--calcite-ui-text-1)}:host calcite-icon{color:var(--calcite-ui-text-3)}:host textarea,:host input{outline-color:transparent}:host textarea:focus,:host input:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([status=invalid]) input,:host([status=invalid]) textarea{border-color:var(--calcite-ui-danger)}:host([status=invalid]) input:focus,:host([status=invalid]) textarea:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:-2px}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;display:block;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.icon,.resize-icon-wrapper{z-index:1}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration,input[type=date]::-webkit-clear-button,input[type=time]::-webkit-clear-button{display:none}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-ui-foreground-2);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-ui-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-ui-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.clear-button:disabled{opacity:var(--calcite-ui-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-ui-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) textarea,:host([alignment=start]) input{text-align:start}:host([alignment=end]) textarea,:host([alignment=end]) input{text-align:end}:host input[type=number]{-moz-appearance:textfield}:host input[type=number]::-webkit-inner-spin-button,:host input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0px}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input,:host([number-button-type=vertical]) textarea{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-ui-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item:active{background-color:var(--calcite-ui-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host input::-webkit-calendar-picker-indicator{display:none}:host input[type=date]::-webkit-input-placeholder{visibility:hidden !important}:host textarea::-webkit-resizer{position:absolute;inset-block-end:0px;box-sizing:border-box;padding-block:0px;padding-inline:0.25rem;inset-inline-end:0}.resize-icon-wrapper{inset-block-end:2px;inset-inline-end:2px;pointer-events:none;position:absolute;block-size:0.75rem;inline-size:0.75rem;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3)}.resize-icon-wrapper calcite-icon{inset-block-end:0.25rem;inset-inline-end:0.25rem;transform:rotate(-45deg)}.calcite--rtl .resize-icon-wrapper calcite-icon{transform:rotate(45deg)}:host([type=color]) input{padding:0.25rem}:host([type=file]) input{cursor:pointer;border-width:1px;border-style:dashed;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);text-align:center}:host([type=file][scale=s]) input{padding-block:1px;padding-inline:0.5rem}:host([type=file][scale=m]) input{padding-block:0.25rem;padding-inline:0.75rem}:host([type=file][scale=l]) input{padding-block:0.5rem;padding-inline:1rem}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-ui-border-1)}:host .inline-child{background-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host .inline-child .editing-enabled{background-color:inherit}:host .inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";const R=class{constructor(e){t(this,e);this.calciteInternalInputFocus=i(this,"calciteInternalInputFocus",6);this.calciteInternalInputBlur=i(this,"calciteInternalInputBlur",6);this.calciteInputInput=i(this,"calciteInputInput",7);this.calciteInputChange=i(this,"calciteInputChange",6);this.childElType="input";this.previousValueOrigin="initial";this.mutationObserver=W("mutation",(()=>this.setDisabledAction()));this.userChangedValue=false;this.keyDownHandler=t=>{if(this.readOnly||this.disabled){return}if(this.isClearable&&t.key==="Escape"){this.clearInputValue(t);t.preventDefault()}if(t.key==="Enter"&&!t.defaultPrevented){if(u(this)){t.preventDefault()}}};this.clearInputValue=t=>{this.setValue({committing:true,nativeEvent:t,origin:"user",value:""})};this.emitChangeIfUserModified=()=>{if(this.previousValueOrigin==="user"&&this.value!==this.previousEmittedValue){this.calciteInputChange.emit();this.setPreviousEmittedValue(this.value)}};this.inputBlurHandler=()=>{this.calciteInternalInputBlur.emit();this.emitChangeIfUserModified()};this.clickHandler=t=>{const i=s(this.el,"action");if(t.target!==i){this.setFocus()}};this.inputFocusHandler=()=>{this.calciteInternalInputFocus.emit()};this.inputInputHandler=t=>{if(this.disabled||this.readOnly){return}this.setValue({nativeEvent:t,origin:"user",value:t.target.value})};this.inputKeyDownHandler=t=>{if(this.disabled||this.readOnly){return}if(t.key==="Enter"){this.emitChangeIfUserModified()}};this.inputNumberInputHandler=t=>{if(this.disabled||this.readOnly){return}const i=t.target.value;k.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const e=k.delocalize(i);if(t.inputType==="insertFromPaste"){if(!z(e)){t.preventDefault()}this.setValue({nativeEvent:t,origin:"user",value:j(e)});this.childNumberEl.value=this.localizedValue}else{this.setValue({nativeEvent:t,origin:"user",value:e})}};this.inputNumberKeyDownHandler=t=>{if(this.type!=="number"||this.disabled||this.readOnly){return}if(t.key==="ArrowUp"){t.preventDefault();this.nudgeNumberValue("up",t);return}if(t.key==="ArrowDown"){this.nudgeNumberValue("down",t);return}const i=[...b,"ArrowLeft","ArrowRight","Backspace","Delete","Enter","Escape","Tab"];if(t.altKey||t.ctrlKey||t.metaKey){return}const e=t.shiftKey&&t.key==="Tab";if(i.includes(t.key)&&(!t.shiftKey||e)){if(t.key==="Enter"){this.emitChangeIfUserModified()}return}k.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};if(t.key===k.decimal){if(!this.value&&!this.childNumberEl.value){return}if(this.value&&this.childNumberEl.value.indexOf(k.decimal)===-1){return}}if(/[eE]/.test(t.key)){if(!this.value&&!this.childNumberEl.value){return}if(this.value&&!/[eE]/.test(this.childNumberEl.value)){return}}if(t.key==="-"){if(!this.value&&!this.childNumberEl.value){return}if(this.value&&this.childNumberEl.value.split("-").length<=2){return}}t.preventDefault()};this.nudgeNumberValue=(t,i)=>{if(i instanceof KeyboardEvent&&i.repeat||this.type!=="number"){return}const e=this.maxString?parseFloat(this.maxString):null;const n=this.minString?parseFloat(this.minString):null;const a=150;this.incrementOrDecrementNumberValue(t,e,n,i);if(this.nudgeNumberValueIntervalId){window.clearInterval(this.nudgeNumberValueIntervalId)}let s=true;this.nudgeNumberValueIntervalId=window.setInterval((()=>{if(s){s=false;return}this.incrementOrDecrementNumberValue(t,e,n,i)}),a)};this.numberButtonPointerUpAndOutHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)};this.numberButtonPointerDownHandler=t=>{if(!o(t)){return}t.preventDefault();const i=t.target.dataset.adjustment;if(!this.disabled){this.nudgeNumberValue(i,t)}};this.hiddenInputChangeHandler=t=>{if(t.target.name===this.name){this.setValue({value:t.target.value,origin:"direct"})}t.stopPropagation()};this.setChildElRef=t=>{this.childEl=t};this.setChildNumberElRef=t=>{this.childNumberEl=t};this.setInputValue=t=>{if(this.type==="text"&&!this.childEl){return}if(this.type==="number"&&!this.childNumberEl){return}this[`child${this.type==="number"?"Number":""}El`].value=t};this.setPreviousEmittedValue=t=>{this.previousEmittedValue=this.normalizeValue(t)};this.setPreviousValue=t=>{this.previousValue=this.normalizeValue(t)};this.setValue=({committing:t=false,nativeEvent:i,origin:e,previousValue:n,value:a})=>{this.setPreviousValue(n!==null&&n!==void 0?n:this.value);this.previousValueOrigin=e;if(this.type==="number"){k.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator,signDisplay:"never"};const t=D(this.numberingSystem&&this.numberingSystem!=="latn"||I!=="latn"?k.delocalize(a):a);const i=a&&!t?z(this.previousValue)?this.previousValue:"":t;const n=k.localize(i);this.localizedValue=n;this.userChangedValue=e==="user"&&this.value!==i;this.value=["-","."].includes(i)?"":i}else{this.userChangedValue=e==="user"&&this.value!==a;this.value=a}if(e==="direct"){this.setInputValue(a);this.previousEmittedValue=a}if(i){const i=this.calciteInputInput.emit();if(i.defaultPrevented){this.value=this.previousValue;this.localizedValue=this.type==="number"?k.localize(this.previousValue):this.previousValue}else if(t){this.emitChangeIfUserModified()}}};this.inputKeyUpHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)};this.alignment="start";this.autofocus=false;this.clearable=false;this.disabled=false;this.form=undefined;this.groupSeparator=false;this.hidden=false;this.icon=undefined;this.iconFlipRtl=false;this.label=undefined;this.loading=false;this.numberingSystem=undefined;this.localeFormat=false;this.max=undefined;this.min=undefined;this.maxLength=undefined;this.minLength=undefined;this.name=undefined;this.numberButtonType="vertical";this.placeholder=undefined;this.prefixText=undefined;this.readOnly=false;this.required=false;this.scale="m";this.status="idle";this.step=undefined;this.autocomplete=undefined;this.pattern=undefined;this.accept=undefined;this.multiple=false;this.inputMode="text";this.enterKeyHint=undefined;this.suffixText=undefined;this.editingEnabled=false;this.type="text";this.value="";this.messages=undefined;this.messageOverrides=undefined;this.effectiveLocale="";this.defaultMessages=undefined;this.localizedValue=undefined;this.slottedActionElDisabledInternally=false}disabledWatcher(){this.setDisabledAction()}maxWatcher(){var t;this.maxString=((t=this.max)===null||t===void 0?void 0:t.toString())||null}minWatcher(){var t;this.minString=((t=this.min)===null||t===void 0?void 0:t.toString())||null}onMessagesChange(){}valueWatcher(t,i){if(!this.userChangedValue){this.setValue({origin:"direct",previousValue:i,value:t==null||t==""?"":this.type==="number"?z(t)?t:this.previousValue||"":t});this.warnAboutInvalidNumberValue(t)}this.userChangedValue=false}updateRequestedIcon(){this.requestedIcon=r($,this.icon,this.type)}get isClearable(){return!this.isTextarea&&(this.clearable||this.type==="search")&&this.value.length>0}get isTextarea(){return this.childElType==="textarea"}effectiveLocaleChange(){F(this,this.effectiveLocale)}connectedCallback(){var t;_(this);B(this);this.scale=l(this.el,"scale",this.scale);this.status=l(this.el,"status",this.status);this.inlineEditableEl=this.el.closest("calcite-inline-editable");if(this.inlineEditableEl){this.editingEnabled=this.inlineEditableEl.editingEnabled||false}f(this);h(this);this.setPreviousEmittedValue(this.value);this.setPreviousValue(this.value);if(this.type==="number"){this.warnAboutInvalidNumberValue(this.value);this.setValue({origin:"connected",value:z(this.value)?this.value:""})}(t=this.mutationObserver)===null||t===void 0?void 0:t.observe(this.el,{childList:true});this.setDisabledAction();this.el.addEventListener("calciteInternalHiddenInputChange",this.hiddenInputChangeHandler)}disconnectedCallback(){var t;v(this);d(this);E(this);H(this);(t=this.mutationObserver)===null||t===void 0?void 0:t.disconnect();this.el.removeEventListener("calciteInternalHiddenInputChange",this.hiddenInputChangeHandler)}async componentWillLoad(){var t,i;x(this);this.childElType=this.type==="textarea"?"textarea":"input";this.maxString=(t=this.max)===null||t===void 0?void 0:t.toString();this.minString=(i=this.min)===null||i===void 0?void 0:i.toString();this.requestedIcon=r($,this.icon,this.type);await K(this)}componentDidLoad(){y(this)}componentShouldUpdate(t,i,e){if(this.type==="number"&&e==="value"&&t&&!z(t)){this.setValue({origin:"reset",value:i});return false}return true}componentDidRender(){p(this)}async setFocus(){var t,i;await w(this);if(this.type==="number"){(t=this.childNumberEl)===null||t===void 0?void 0:t.focus()}else{(i=this.childEl)===null||i===void 0?void 0:i.focus()}}async selectText(){var t,i;if(this.type==="number"){(t=this.childNumberEl)===null||t===void 0?void 0:t.select()}else{(i=this.childEl)===null||i===void 0?void 0:i.select()}}async internalSyncChildElValue(){if(this.type==="number"){this.childNumberEl.value=this.value}else{this.childEl.value=this.value}}onLabelClick(){this.setFocus()}incrementOrDecrementNumberValue(t,i,e,n){const{value:a}=this;const s=t==="up"?1:-1;const o=this.step==="any"?1:Math.abs(this.step||1);const r=new C(a!==""?a:"0");const l=r.add(`${o*s}`);const c=()=>typeof e==="number"&&!isNaN(e)&&l.subtract(`${e}`).isNegative;const u=()=>typeof i==="number"&&!isNaN(i)&&!l.subtract(`${i}`).isNegative;const h=c()?`${e}`:u()?`${i}`:l.toString();this.setValue({committing:true,nativeEvent:n,origin:"user",value:h})}onFormReset(){this.setValue({origin:"reset",value:this.defaultValue})}syncHiddenFormInput(t){var i,e,n,a;const{type:s}=this;t.type=s;if(s==="number"){t.min=(e=(i=this.min)===null||i===void 0?void 0:i.toString(10))!==null&&e!==void 0?e:"";t.max=(a=(n=this.max)===null||n===void 0?void 0:n.toString(10))!==null&&a!==void 0?a:""}else if(s==="text"){if(this.minLength!=null){t.minLength=this.minLength}if(this.maxLength!=null){t.maxLength=this.maxLength}}}setDisabledAction(){const t=s(this.el,"action");if(!t){return}if(this.disabled){if(t.getAttribute("disabled")==null){this.slottedActionElDisabledInternally=true}t.setAttribute("disabled","")}else if(this.slottedActionElDisabledInternally){t.removeAttribute("disabled");this.slottedActionElDisabledInternally=false}}normalizeValue(t){return this.type==="number"?z(t)?t:"":t}warnAboutInvalidNumberValue(t){if(this.type==="number"&&t&&!z(t)){console.warn(`The specified value "${t}" cannot be parsed, or is out of range.`)}}render(){const t=c(this.el);const i=e("div",{class:V.loader},e("calcite-progress",{label:this.messages.loading,type:"indeterminate"}));const a=e("button",{"aria-label":this.messages.clear,class:V.clearButton,disabled:this.disabled||this.readOnly,onClick:this.clearInputValue,tabIndex:-1,type:"button"},e("calcite-icon",{icon:"x",scale:this.scale==="l"?"m":"s"}));const s=e("calcite-icon",{class:V.inputIcon,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:this.scale==="l"?"m":"s"});const o=this.numberButtonType==="horizontal";const r=e("button",{"aria-hidden":"true",class:{[V.numberButtonItem]:true,[V.buttonItemHorizontal]:o},"data-adjustment":"up",disabled:this.disabled||this.readOnly,onPointerDown:this.numberButtonPointerDownHandler,onPointerOut:this.numberButtonPointerUpAndOutHandler,onPointerUp:this.numberButtonPointerUpAndOutHandler,tabIndex:-1,type:"button"},e("calcite-icon",{icon:"chevron-up",scale:this.scale==="l"?"m":"s"}));const l=e("button",{"aria-hidden":"true",class:{[V.numberButtonItem]:true,[V.buttonItemHorizontal]:o},"data-adjustment":"down",disabled:this.disabled||this.readOnly,onPointerDown:this.numberButtonPointerDownHandler,onPointerOut:this.numberButtonPointerUpAndOutHandler,onPointerUp:this.numberButtonPointerUpAndOutHandler,tabIndex:-1,type:"button"},e("calcite-icon",{icon:"chevron-down",scale:this.scale==="l"?"m":"s"}));const u=e("div",{class:V.numberButtonWrapper},r,l);const h=e("div",{class:V.prefix},this.prefixText);const d=e("div",{class:V.suffix},this.suffixText);const p=this.type==="number"?e("input",{accept:this.accept,"aria-label":g(this),autocomplete:this.autocomplete,autofocus:this.autofocus?true:null,defaultValue:this.defaultValue,disabled:this.disabled?true:null,enterKeyHint:this.enterKeyHint,inputMode:this.inputMode,key:"localized-input",maxLength:this.maxLength,minLength:this.minLength,multiple:this.multiple,name:undefined,onBlur:this.inputBlurHandler,onFocus:this.inputFocusHandler,onInput:this.inputNumberInputHandler,onKeyDown:this.inputNumberKeyDownHandler,onKeyUp:this.inputKeyUpHandler,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readOnly,type:"text",value:this.localizedValue,ref:this.setChildNumberElRef}):null;const b=this.type!=="number"?[e(this.childElType,{accept:this.accept,"aria-label":g(this),autocomplete:this.autocomplete,autofocus:this.autofocus?true:null,class:{[V.editingEnabled]:this.editingEnabled,[V.inlineChild]:!!this.inlineEditableEl},defaultValue:this.defaultValue,disabled:this.disabled?true:null,enterKeyHint:this.enterKeyHint,inputMode:this.inputMode,max:this.maxString,maxLength:this.maxLength,min:this.minString,minLength:this.minLength,multiple:this.multiple,name:this.name,onBlur:this.inputBlurHandler,onFocus:this.inputFocusHandler,onInput:this.inputInputHandler,onKeyDown:this.inputKeyDownHandler,onKeyUp:this.inputKeyUpHandler,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readOnly,required:this.required?true:null,step:this.step,tabIndex:this.disabled||this.inlineEditableEl&&!this.editingEnabled?-1:null,type:this.type,value:this.value,ref:this.setChildElRef}),this.isTextarea?e("div",{class:V.resizeIconWrapper},e("calcite-icon",{icon:"chevron-down",scale:this.scale==="l"?"m":"s"})):null]:null;return e(n,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},e("div",{class:{[V.inputWrapper]:true,[L.rtl]:t==="rtl"}},this.type==="number"&&this.numberButtonType==="horizontal"&&!this.readOnly?l:null,this.prefixText?h:null,e("div",{class:V.wrapper},p,b,this.isClearable?a:null,this.requestedIcon?s:null,this.loading?i:null),e("div",{class:V.actionWrapper},e("slot",{name:N.action})),this.type==="number"&&this.numberButtonType==="vertical"&&!this.readOnly?u:null,this.suffixText?d:null,this.type==="number"&&this.numberButtonType==="horizontal"&&!this.readOnly?r:null,e(m,{component:this})))}static get assetsDirs(){return["assets"]}get el(){return a(this)}static get watchers(){return{disabled:["disabledWatcher"],max:["maxWatcher"],min:["minWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],type:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}}};R.style=P;const T="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{position:relative;display:block;inline-size:100%}.track,.bar{position:absolute;inset-block-start:0px;block-size:2px}.track{z-index:1;inline-size:100%;overflow:hidden;background:var(--calcite-ui-border-3)}.bar{z-index:1;background-color:var(--calcite-ui-brand)}@media (forced-colors: active){.track{background-color:highlightText}.bar{background-color:linkText}}.indeterminate{inline-size:20%;animation:looping-progress-bar-ani calc(var(--calcite-internal-animation-timing-medium) / var(--calcite-internal-duration-factor) * 11 / var(--calcite-internal-duration-factor)) linear infinite}.reversed{animation-direction:reverse}.text{padding-inline:0px;padding-block:1rem 0px;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}@keyframes looping-progress-bar-ani{0%{transform:translate3d(-100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(600%, 0, 0)}}";const A=class{constructor(i){t(this,i);this.type="determinate";this.value=0;this.label=undefined;this.text=undefined;this.reversed=false}render(){const t=this.type==="determinate";const i=t?{width:`${this.value*100}%`}:{};return e("div",{"aria-label":this.label||this.text,"aria-valuemax":1,"aria-valuemin":0,"aria-valuenow":this.value,role:"progressbar"},e("div",{class:"track"},e("div",{class:{bar:true,indeterminate:this.type==="indeterminate",reversed:this.reversed},style:i})),this.text?e("div",{class:"text"},this.text):null)}get el(){return a(this)}};A.style=T;export{R as calcite_input,A as calcite_progress};
//# sourceMappingURL=p-a09e0aee.entry.js.map