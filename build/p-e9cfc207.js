const t="arcgis-privacy-components";let n=false;const s=(t,n="")=>{{return()=>{}}};const e=(t,n)=>{{return()=>{}}};const c="{visibility:hidden}.hydrated{visibility:inherit}";function o(t){var n,s,e;return(e=(s=(n=t.head)===null||n===void 0?void 0:n.querySelector('meta[name="csp-nonce"]'))===null||s===void 0?void 0:s.getAttribute("content"))!==null&&e!==void 0?e:undefined}const i=(t,n,s)=>{const e=x.ce(n,s);t.dispatchEvent(e);return e};const r=(t,n)=>{if(n&&!t.t&&n["s-p"]){n["s-p"].push(new Promise((n=>t.t=n)))}};const a=(t,n)=>{if(t.o&4){t.o|=512;return}r(t,t.i);const s=()=>l(t);return I(s)};const l=(t,n)=>{const e=s("scheduleUpdate",t.u.l);const c=t.m;let o;e();return p(o,(()=>f(t,c)))};const f=async(t,n,e)=>{const c=t.p;const o=s("update",t.u.l);const i=c["s-rc"];const r=s("render",t.u.l);{u(t,n)}if(i){i.map((t=>t()));c["s-rc"]=undefined}r();o();{const n=c["s-p"];const s=()=>d(t);if(n.length===0){s()}else{Promise.all(n).then(s);t.o|=4;n.length=0}}};const u=(t,n,s)=>{try{n=n.render();{t.o|=2}}catch(n){P(n,t.p)}return null};const d=t=>{const n=t.u.l;const e=t.p;const c=s("postUpdate",n);const o=t.i;if(!(t.o&64)){t.o|=64;{$(e)}c();{t.$(e);if(!o){m()}}}else{c()}{if(t.t){t.t();t.t=undefined}if(t.o&512){H((()=>a(t)))}t.o&=~(4|512)}};const m=n=>{{$(T.documentElement)}H((()=>i(E,"appload",{detail:{namespace:t}})))};const p=(t,n)=>t&&t.then?t.then(n):n();const $=t=>t.classList.add("hydrated");const h=(t,n,s)=>t;const y=async(t,n,c,o,i)=>{if((n.o&32)===0){{n.o|=32;i=j(c);if(i.then){const t=e();i=await i;t()}const t=s("createInstance",c.l);try{new i(n)}catch(t){P(t)}t()}}const r=n.i;const l=()=>a(n);if(r&&r["s-rc"]){r["s-rc"].push(l)}else{l()}};const w=t=>{if((x.o&1)===0){const n=M(t);const e=n.u;const c=s("connectedCallback",e.l);if(!(n.o&1)){n.o|=1;{let s=t;while(s=s.parentNode||s.host){if(s["s-p"]){r(n,n.i=s);break}}}{y(t,n,e)}}c()}};const v=t=>{if((x.o&1)===0){M(t)}};const b=(t,n={})=>{var e;const i=s();const r=[];const a=n.exclude||[];const l=E.customElements;const f=T.head;const u=f.querySelector("meta[charset]");const d=T.createElement("style");const p=[];let $;let y=true;Object.assign(x,n);x.h=new URL(n.resourcesUrl||"./",T.baseURI).href;t.map((t=>{t[1].map((n=>{const s={o:n[0],l:n[1],v:n[2],g:n[3]};const e=s.l;const c=class extends HTMLElement{constructor(t){super(t);t=this;C(t,s)}connectedCallback(){if($){clearTimeout($);$=null}if(y){p.push(this)}else{x.jmp((()=>w(this)))}}disconnectedCallback(){x.jmp((()=>v(this)))}componentOnReady(){return M(this).k}};s.M=t[0];if(!a.includes(e)&&!l.get(e)){r.push(e);l.define(e,h(c))}}))}));{d.innerHTML=r+c;d.setAttribute("data-styles","");const t=(e=x.C)!==null&&e!==void 0?e:o(T);if(t!=null){d.setAttribute("nonce",t)}f.insertBefore(d,u?u.nextSibling:f.firstChild)}y=false;if(p.length){p.map((t=>t.connectedCallback()))}else{{x.jmp((()=>$=setTimeout(m,30)))}}i()};const g=t=>x.C=t;const k=new WeakMap;const M=t=>k.get(t);const C=(t,n)=>{const s={o:0,p:t,u:n,P:new Map};{s.k=new Promise((t=>s.$=t));t["s-p"]=[];t["s-rc"]=[]}return k.set(t,s)};const P=(t,n)=>(0,console.error)(t,n);const U=new Map;const j=(t,n,s)=>{const e=t.l.replace(/-/g,"_");const c=t.M;const o=U.get(c);if(o){return o[e]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${c}.entry.js${""}`).then((t=>{{U.set(c,t)}return t[e]}),P)};const E=typeof window!=="undefined"?window:{};const T=E.document||{head:{}};const x={o:0,h:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,n,s,e)=>t.addEventListener(n,s,e),rel:(t,n,s,e)=>t.removeEventListener(n,s,e),ce:(t,n)=>new CustomEvent(t,n)};const L=t=>Promise.resolve(t);const O=[];const R=[];const q=(t,s)=>e=>{t.push(e);if(!n){n=true;if(s&&x.o&4){H(F)}else{x.raf(F)}}};const A=t=>{for(let n=0;n<t.length;n++){try{t[n](performance.now())}catch(t){P(t)}}t.length=0};const F=()=>{A(O);{A(R);if(n=O.length>0){x.raf(F)}}};const H=t=>L().then(t);const I=q(R,true);export{b,L as p,g as s};
//# sourceMappingURL=p-e9cfc207.js.map