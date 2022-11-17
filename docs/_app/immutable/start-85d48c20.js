import{S as et,i as tt,s as nt,a as rt,e as D,c as at,b as G,g as Q,t as V,d as x,f as q,h as J,j as ot,o as je,k as st,l as it,m as lt,n as Se,p as Y,q as ct,r as ft,u as ut,v as K,w as M,x as ce,y as W,z as H,A as he}from"./chunks/index-315e23ad.js";import{g as Me,f as We,s as Z,a as Le,b as pt,i as dt}from"./chunks/singletons-48ee51fe.js";import{_ as ne}from"./chunks/preload-helper-b21cceae.js";function ht(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function mt(r){return r.split("%25").map(decodeURI).join("%25")}function _t(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const gt=["href","pathname","search","searchParams","toString","toJSON"];function wt(r,e){const n=new URL(r);for(const o of gt){let a=n[o];Object.defineProperty(n,o,{get(){return e(),a},enumerable:!0,configurable:!0})}return yt(n),n}function yt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const bt="/__data.json";function vt(r){return r.replace(/\/$/,"")+bt}function kt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const we=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;ie.delete(o)}return we(r,e)};const ie=new Map;function Et(r,e){const n=Qe(r,e),o=document.querySelector(n);if(o!=null&&o.textContent){const{body:a,..._}=JSON.parse(o.textContent),t=o.getAttribute("data-ttl");return t&&ie.set(n,{body:a,init:_,ttl:1e3*Number(t)}),Promise.resolve(new Response(a,_))}return we(r,e)}function $t(r,e,n){if(ie.size>0){const o=Qe(r,n),a=ie.get(o);if(a){if(performance.now()<a.ttl)return new Response(a.body,a.init);ie.delete(o)}}return we(e,n)}function Qe(r,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(o+=`[data-hash="${kt(e.body)}"]`),o}const St=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Rt(r){const e=[],n=[],o=[];let a=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${It(r).map((t,l,f)=>{const d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(t);if(d)return e.push(d[1]),n.push(d[2]),o.push(!1),"(?:/(.*))?";const g=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(t);if(g)return e.push(g[1]),n.push(g[2]),o.push(!0),"(?:/([^/]+))?";const b=l===f.length-1;return t?"/"+t.split(/\[(.+?)\](?!\])/).map((N,L)=>{if(L%2){if(N.startsWith("x+"))return Re(String.fromCharCode(parseInt(N.slice(2),16)));if(N.startsWith("u+"))return Re(String.fromCharCode(...N.slice(2).split("-").map(re=>parseInt(re,16))));const z=St.exec(N);if(!z)throw new Error(`Invalid param: ${N}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,F,fe,ee,ue]=z;return e.push(ee),n.push(ue),o.push(!!F),fe?"(.*?)":F?"([^/]*)?":"([^/]+?)"}return b&&N.includes(".")&&(a=!1),Re(N)}).join(""):void 0}).join("")}${a?"/?":""}$`),names:e,types:n,optional:o}}function Ot(r){return!/^\([^)]+\)$/.test(r)}function It(r){return r.slice(1).split("/").filter(Ot)}function jt(r,{names:e,types:n,optional:o},a){const _={};for(let t=0;t<e.length;t+=1){const l=e[t],f=n[t];let d=r[t+1];if(d||!o[t]){if(f){const g=a[f];if(!g)throw new Error(`Missing "${f}" param matcher`);if(!g(d))return}_[l]=d!=null?d:""}}return _}function Re(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Lt(r,e,n,o){const a=new Set(e);return Object.entries(n).map(([l,[f,d,g]])=>{const{pattern:b,names:C,types:S,optional:N}=Rt(l),L={id:l,exec:z=>{const F=b.exec(z);if(F)return jt(F,{names:C,types:S,optional:N},o)},errors:[1,...g||[]].map(z=>r[z]),layouts:[0,...d||[]].map(t),leaf:_(f)};return L.errors.length=L.layouts.length=Math.max(L.errors.length,L.layouts.length),L});function _(l){const f=l<0;return f&&(l=~l),[f,r[l]]}function t(l){return l===void 0?l:[a.has(l),r[l]]}}function At(r){let e,n,o;var a=r[0][0];function _(t){return{props:{data:t[2],form:t[1]}}}return a&&(e=K(a,_(r))),{c(){e&&M(e.$$.fragment),n=D()},l(t){e&&ce(e.$$.fragment,t),n=D()},m(t,l){e&&W(e,t,l),G(t,n,l),o=!0},p(t,l){const f={};if(l&4&&(f.data=t[2]),l&2&&(f.form=t[1]),a!==(a=t[0][0])){if(e){Q();const d=e;V(d.$$.fragment,1,0,()=>{H(d,1)}),x()}a?(e=K(a,_(t)),M(e.$$.fragment),q(e.$$.fragment,1),W(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&J(n),e&&H(e,t)}}}function Nt(r){let e,n,o;var a=r[0][0];function _(t){return{props:{data:t[2],$$slots:{default:[Dt]},$$scope:{ctx:t}}}}return a&&(e=K(a,_(r))),{c(){e&&M(e.$$.fragment),n=D()},l(t){e&&ce(e.$$.fragment,t),n=D()},m(t,l){e&&W(e,t,l),G(t,n,l),o=!0},p(t,l){const f={};if(l&4&&(f.data=t[2]),l&1051&&(f.$$scope={dirty:l,ctx:t}),a!==(a=t[0][0])){if(e){Q();const d=e;V(d.$$.fragment,1,0,()=>{H(d,1)}),x()}a?(e=K(a,_(t)),M(e.$$.fragment),q(e.$$.fragment,1),W(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&J(n),e&&H(e,t)}}}function Pt(r){let e,n,o;var a=r[0][1];function _(t){return{props:{data:t[3],form:t[1]}}}return a&&(e=K(a,_(r))),{c(){e&&M(e.$$.fragment),n=D()},l(t){e&&ce(e.$$.fragment,t),n=D()},m(t,l){e&&W(e,t,l),G(t,n,l),o=!0},p(t,l){const f={};if(l&8&&(f.data=t[3]),l&2&&(f.form=t[1]),a!==(a=t[0][1])){if(e){Q();const d=e;V(d.$$.fragment,1,0,()=>{H(d,1)}),x()}a?(e=K(a,_(t)),M(e.$$.fragment),q(e.$$.fragment,1),W(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&J(n),e&&H(e,t)}}}function Ut(r){let e,n,o;var a=r[0][1];function _(t){return{props:{data:t[3],$$slots:{default:[Tt]},$$scope:{ctx:t}}}}return a&&(e=K(a,_(r))),{c(){e&&M(e.$$.fragment),n=D()},l(t){e&&ce(e.$$.fragment,t),n=D()},m(t,l){e&&W(e,t,l),G(t,n,l),o=!0},p(t,l){const f={};if(l&8&&(f.data=t[3]),l&1043&&(f.$$scope={dirty:l,ctx:t}),a!==(a=t[0][1])){if(e){Q();const d=e;V(d.$$.fragment,1,0,()=>{H(d,1)}),x()}a?(e=K(a,_(t)),M(e.$$.fragment),q(e.$$.fragment,1),W(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&J(n),e&&H(e,t)}}}function Tt(r){let e,n,o;var a=r[0][2];function _(t){return{props:{data:t[4],form:t[1]}}}return a&&(e=K(a,_(r))),{c(){e&&M(e.$$.fragment),n=D()},l(t){e&&ce(e.$$.fragment,t),n=D()},m(t,l){e&&W(e,t,l),G(t,n,l),o=!0},p(t,l){const f={};if(l&16&&(f.data=t[4]),l&2&&(f.form=t[1]),a!==(a=t[0][2])){if(e){Q();const d=e;V(d.$$.fragment,1,0,()=>{H(d,1)}),x()}a?(e=K(a,_(t)),M(e.$$.fragment),q(e.$$.fragment,1),W(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&J(n),e&&H(e,t)}}}function Dt(r){let e,n,o,a;const _=[Ut,Pt],t=[];function l(f,d){return f[0][2]?0:1}return e=l(r),n=t[e]=_[e](r),{c(){n.c(),o=D()},l(f){n.l(f),o=D()},m(f,d){t[e].m(f,d),G(f,o,d),a=!0},p(f,d){let g=e;e=l(f),e===g?t[e].p(f,d):(Q(),V(t[g],1,1,()=>{t[g]=null}),x(),n=t[e],n?n.p(f,d):(n=t[e]=_[e](f),n.c()),q(n,1),n.m(o.parentNode,o))},i(f){a||(q(n),a=!0)},o(f){V(n),a=!1},d(f){t[e].d(f),f&&J(o)}}}function He(r){let e,n=r[6]&&Ye(r);return{c(){e=st("div"),n&&n.c(),this.h()},l(o){e=it(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=lt(e);n&&n.l(a),a.forEach(J),this.h()},h(){Se(e,"id","svelte-announcer"),Se(e,"aria-live","assertive"),Se(e,"aria-atomic","true"),Y(e,"position","absolute"),Y(e,"left","0"),Y(e,"top","0"),Y(e,"clip","rect(0 0 0 0)"),Y(e,"clip-path","inset(50%)"),Y(e,"overflow","hidden"),Y(e,"white-space","nowrap"),Y(e,"width","1px"),Y(e,"height","1px")},m(o,a){G(o,e,a),n&&n.m(e,null)},p(o,a){o[6]?n?n.p(o,a):(n=Ye(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&J(e),n&&n.d()}}}function Ye(r){let e;return{c(){e=ct(r[7])},l(n){e=ft(n,r[7])},m(n,o){G(n,e,o)},p(n,o){o&128&&ut(e,n[7])},d(n){n&&J(e)}}}function Vt(r){let e,n,o,a,_;const t=[Nt,At],l=[];function f(g,b){return g[0][1]?0:1}e=f(r),n=l[e]=t[e](r);let d=r[5]&&He(r);return{c(){n.c(),o=rt(),d&&d.c(),a=D()},l(g){n.l(g),o=at(g),d&&d.l(g),a=D()},m(g,b){l[e].m(g,b),G(g,o,b),d&&d.m(g,b),G(g,a,b),_=!0},p(g,[b]){let C=e;e=f(g),e===C?l[e].p(g,b):(Q(),V(l[C],1,1,()=>{l[C]=null}),x(),n=l[e],n?n.p(g,b):(n=l[e]=t[e](g),n.c()),q(n,1),n.m(o.parentNode,o)),g[5]?d?d.p(g,b):(d=He(g),d.c(),d.m(a.parentNode,a)):d&&(d.d(1),d=null)},i(g){_||(q(n),_=!0)},o(g){V(n),_=!1},d(g){l[e].d(g),g&&J(o),d&&d.d(g),g&&J(a)}}}function qt(r,e,n){let{stores:o}=e,{page:a}=e,{components:_}=e,{form:t}=e,{data_0:l=null}=e,{data_1:f=null}=e,{data_2:d=null}=e;ot(o.page.notify);let g=!1,b=!1,C=null;return je(()=>{const S=o.page.subscribe(()=>{g&&(n(6,b=!0),n(7,C=document.title||"untitled page"))});return n(5,g=!0),S}),r.$$set=S=>{"stores"in S&&n(8,o=S.stores),"page"in S&&n(9,a=S.page),"components"in S&&n(0,_=S.components),"form"in S&&n(1,t=S.form),"data_0"in S&&n(2,l=S.data_0),"data_1"in S&&n(3,f=S.data_1),"data_2"in S&&n(4,d=S.data_2)},r.$$.update=()=>{r.$$.dirty&768&&o.page.set(a)},[_,t,l,f,d,g,b,C,o,a]}class Ct extends et{constructor(e){super(),tt(this,e,qt,Vt,nt,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Ft={},ye=[()=>ne(()=>import("./chunks/0-2d4ae7fe.js"),["./chunks\\0-2d4ae7fe.js","./chunks\\_layout-b711fdb6.js","./components\\pages\\_layout.svelte-8138d001.js","./chunks\\index-315e23ad.js","./assets\\_layout-795092fe.css"],import.meta.url),()=>ne(()=>import("./chunks/1-bdf3e06c.js"),["./chunks\\1-bdf3e06c.js","./components\\error.svelte-c87e0439.js","./chunks\\index-315e23ad.js","./chunks\\singletons-48ee51fe.js"],import.meta.url),()=>ne(()=>import("./chunks/2-93ecab9d.js"),["./chunks\\2-93ecab9d.js","./components\\pages\\auth\\_layout.svelte-7c2b94a1.js","./chunks\\index-315e23ad.js"],import.meta.url),()=>ne(()=>import("./chunks/3-c431f58d.js"),["./chunks\\3-c431f58d.js","./components\\pages\\_page.svelte-ad97765d.js","./chunks\\index-315e23ad.js","./chunks\\Link-7a54d653.js","./chunks\\singletons-48ee51fe.js","./chunks\\preload-helper-b21cceae.js","./chunks\\authentication-a0141ddc.js"],import.meta.url),()=>ne(()=>import("./chunks/4-c1549158.js"),["./chunks\\4-c1549158.js","./components\\pages\\auth\\_page.svelte-0dfe6350.js","./chunks\\index-315e23ad.js","./chunks\\Link-7a54d653.js","./chunks\\singletons-48ee51fe.js","./chunks\\preload-helper-b21cceae.js","./chunks\\authentication-a0141ddc.js"],import.meta.url),()=>ne(()=>import("./chunks/5-e4156cce.js"),["./chunks\\5-e4156cce.js","./components\\pages\\pwds\\_page.svelte-ab626b03.js","./chunks\\index-315e23ad.js","./chunks\\Link-7a54d653.js","./chunks\\singletons-48ee51fe.js","./chunks\\preload-helper-b21cceae.js"],import.meta.url)],Bt=[],Jt={"/":[3],"/auth":[4,[2]],"/pwds":[5]},zt={handleError:({error:r})=>{console.error(r)}};class Ae{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Xe{constructor(e,n){this.status=e,this.location=n}}async function Gt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([o,a])=>[o,await a])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Kt=-1,Mt=-2,Wt=-3,Ht=-4,Yt=-5,Xt=-6;function Zt(r){if(typeof r=="number")return o(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function o(a,_=!1){if(a===Kt)return;if(a===Wt)return NaN;if(a===Ht)return 1/0;if(a===Yt)return-1/0;if(a===Xt)return-0;if(_)throw new Error("Invalid input");if(a in n)return n[a];const t=e[a];if(!t||typeof t!="object")n[a]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[a]=new Date(t[1]);break;case"Set":const f=new Set;n[a]=f;for(let b=1;b<t.length;b+=1)f.add(o(t[b]));break;case"Map":const d=new Map;n[a]=d;for(let b=1;b<t.length;b+=2)d.set(o(t[b]),o(t[b+1]));break;case"RegExp":n[a]=new RegExp(t[1],t[2]);break;case"Object":n[a]=Object(t[1]);break;case"BigInt":n[a]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[a]=g;for(let b=1;b<t.length;b+=2)g[t[b]]=o(t[b+1]);break}else{const l=new Array(t.length);n[a]=l;for(let f=0;f<t.length;f+=1){const d=t[f];d!==Mt&&(l[f]=o(d))}}else{const l={};n[a]=l;for(const f in t){const d=t[f];l[f]=o(d)}}return n[a]}return o(0)}const xe="sveltekit:scroll",X="sveltekit:index",me=Lt(ye,Bt,Jt,Ft),Ne=ye[0],Pe=ye[1];Ne();Pe();let le={};try{le=JSON.parse(sessionStorage[xe])}catch{}function Oe(r){le[r]=Le()}function Qt({target:r,base:e,trailing_slash:n}){var ze;const o=[];let a=null;const _={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},l=!1,f=!1,d=!0,g=!1,b=!1,C=!1,S=!1,N,L=(ze=history.state)==null?void 0:ze[X];L||(L=Date.now(),history.replaceState({...history.state,[X]:L},"",location.href));const z=le[L];z&&(history.scrollRestoration="manual",scrollTo(z.x,z.y));let F,fe,ee;async function ue(){ee=ee||Promise.resolve(),await ee,ee=null;const s=new URL(location.href),c=ke(s,!0);a=null,await Te(c,s,[])}async function re(s,{noScroll:c=!1,replaceState:u=!1,keepFocus:i=!1,state:p={},invalidateAll:h=!1},m,v){return typeof s=="string"&&(s=new URL(s,Me(document))),Ee({url:s,scroll:c?Le():null,keepfocus:i,redirect_chain:m,details:{state:p,replaceState:u},nav_token:v,accepted:()=>{h&&(S=!0)},blocked:()=>{},type:"goto"})}async function Ue(s){const c=ke(s,!1);if(!c)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${s}`);return a={id:c.id,promise:qe(c).then(u=>(u.type==="loaded"&&u.state.error&&(a=null),u))},a.promise}async function Te(s,c,u,i,p={},h){var v,k;fe=p;let m=s&&await qe(s);if(m||(m=await Je(c,{id:null},se(new Error(`Not found: ${c.pathname}`),{url:c,params:{},route:{id:null}}),404)),c=(s==null?void 0:s.url)||c,fe!==p)return!1;if(m.type==="redirect")if(u.length>10||u.includes(c.pathname))m=await pe({status:500,error:se(new Error("Redirect loop"),{url:c,params:{},route:{id:null}}),url:c,route:{id:null}});else return re(new URL(m.location,c).href,{},[...u,c.pathname],p),!1;else((k=(v=m.props)==null?void 0:v.page)==null?void 0:k.status)>=400&&await Z.updated.check()&&await de(c);if(o.length=0,S=!1,g=!0,i&&i.details){const{details:w}=i,y=w.replaceState?0:1;w.state[X]=L+=y,history[w.replaceState?"replaceState":"pushState"](w.state,"",c)}if(a=null,f){t=m.state,m.props.page&&(m.props.page.url=c);const w=ge();N.$set(m.props),w()}else De(m);if(i){const{scroll:w,keepfocus:y}=i;if(y||Ie(),await he(),d){const O=c.hash&&document.getElementById(c.hash.slice(1));w?scrollTo(w.x,w.y):O?O.scrollIntoView():scrollTo(0,0)}}else await he();d=!0,m.props.page&&(F=m.props.page),h&&h(),g=!1}function De(s){var p,h;t=s.state;const c=document.querySelector("style[data-sveltekit]");c&&c.remove(),F=s.props.page;const u=ge();N=new Ct({target:r,props:{...s.props,stores:Z},hydrate:!0}),u();const i={from:null,to:_e("to",{params:t.params,route:{id:(h=(p=t.route)==null?void 0:p.id)!=null?h:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};_.after_navigate.forEach(m=>m(i)),f=!0}async function ae({url:s,params:c,branch:u,status:i,error:p,route:h,form:m}){var P;const v=u.filter(Boolean),k={type:"loaded",state:{url:s,params:c,branch:u,error:p,route:h},props:{components:v.map(R=>R.node.component)}};m!==void 0&&(k.props.form=m);let w={},y=!F;for(let R=0;R<v.length;R+=1){const U=v[R];w={...w,...U.data},(y||!t.branch.some(T=>T===U))&&(k.props[`data_${R}`]=w,y=y||Object.keys((P=U.data)!=null?P:{}).length>0)}if(y||(y=Object.keys(F.data).length!==Object.keys(w).length),!t.url||s.href!==t.url.href||t.error!==p||m!==void 0||y){k.props.page={error:p,params:c,route:h,status:i,url:s,form:m,data:y?w:F.data},Object.defineProperty(k.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const R=(U,T)=>{Object.defineProperty(k.props.page,U,{get:()=>{throw new Error(`$page.${U} has been replaced by $page.url.${T}`)}})};R("origin","origin"),R("path","pathname"),R("query","searchParams")}return k}async function be({loader:s,parent:c,url:u,params:i,route:p,server_data_node:h}){var w,y,O,P,R;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},k=await s();if((w=k.shared)!=null&&w.load){let U=function(...$){for(const B of $){const{href:E}=new URL(B,u);v.dependencies.add(E)}};const T={route:{get id(){return v.route=!0,p.id}},params:new Proxy(i,{get:($,B)=>(v.params.add(B),$[B])}),data:(y=h==null?void 0:h.data)!=null?y:null,url:wt(u,()=>{v.url=!0}),async fetch($,B){let E;$ instanceof Request?(E=$.url,B={body:$.method==="GET"||$.method==="HEAD"?void 0:await $.blob(),cache:$.cache,credentials:$.credentials,headers:$.headers,integrity:$.integrity,keepalive:$.keepalive,method:$.method,mode:$.mode,redirect:$.redirect,referrer:$.referrer,referrerPolicy:$.referrerPolicy,signal:$.signal,...B}):E=$;const I=new URL(E,u).href;return U(I),f?$t(E,I,B):Et(E,B)},setHeaders:()=>{},depends:U,parent(){return v.parent=!0,c()}};Object.defineProperties(T,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),m=(O=await k.shared.load.call(null,T))!=null?O:null,m=m?await Gt(m):null}return{node:k,loader:s,server:h,shared:(P=k.shared)!=null&&P.load?{type:"data",data:m,uses:v}:null,data:(R=m!=null?m:h==null?void 0:h.data)!=null?R:null}}function Ve(s,c,u,i,p){if(S)return!0;if(!i)return!1;if(i.parent&&s||i.route&&c||i.url&&u)return!0;for(const h of i.params)if(p[h]!==t.params[h])return!0;for(const h of i.dependencies)if(o.some(m=>m(new URL(h))))return!0;return!1}function ve(s,c){var u,i;return(s==null?void 0:s.type)==="data"?{type:"data",data:s.data,uses:{dependencies:new Set((u=s.uses.dependencies)!=null?u:[]),params:new Set((i=s.uses.params)!=null?i:[]),parent:!!s.uses.parent,route:!!s.uses.route,url:!!s.uses.url}}:(s==null?void 0:s.type)==="skip"&&c!=null?c:null}async function qe({id:s,invalidating:c,url:u,params:i,route:p}){var B;if((a==null?void 0:a.id)===s)return a.promise;const{errors:h,layouts:m,leaf:v}=p,k=[...m,v];h.forEach(E=>E==null?void 0:E().catch(()=>{})),k.forEach(E=>E==null?void 0:E[1]().catch(()=>{}));let w=null;const y=t.url?s!==t.url.pathname+t.url.search:!1,O=t.route?s!==t.route.id:!1,P=k.reduce((E,I,A)=>{var oe;const j=t.branch[A],te=!!(I!=null&&I[0])&&((j==null?void 0:j.loader)!==I[1]||Ve(E.some(Boolean),O,y,(oe=j.server)==null?void 0:oe.uses,i));return E.push(te),E},[]);if(P.some(Boolean)){try{w=await Ze(u,P)}catch(E){return pe({status:500,error:se(E,{url:u,params:i,route:{id:p.id}}),url:u,route:p})}if(w.type==="redirect")return w}const R=w==null?void 0:w.nodes;let U=!1;const T=k.map(async(E,I)=>{var oe;if(!E)return;const A=t.branch[I],j=R==null?void 0:R[I];if((!j||j.type==="skip")&&E[1]===(A==null?void 0:A.loader)&&!Ve(U,O,y,(oe=A.shared)==null?void 0:oe.uses,i))return A;if(U=!0,(j==null?void 0:j.type)==="error")throw j;return be({loader:E[1],url:u,params:i,route:p,parent:async()=>{var Ke;const Ge={};for(let $e=0;$e<I;$e+=1)Object.assign(Ge,(Ke=await T[$e])==null?void 0:Ke.data);return Ge},server_data_node:ve(j===void 0&&E[0]?{type:"skip"}:j!=null?j:null,A==null?void 0:A.server)})});for(const E of T)E.catch(()=>{});const $=[];for(let E=0;E<k.length;E+=1)if(k[E])try{$.push(await T[E])}catch(I){if(I instanceof Xe)return{type:"redirect",location:I.location};let A=500,j;R!=null&&R.includes(I)?(A=(B=I.status)!=null?B:A,j=I.error):I instanceof Ae?(A=I.status,j=I.body):j=se(I,{params:i,url:u,route:{id:p.id}});const te=await Ce(E,$,h);return te?await ae({url:u,params:i,branch:$.slice(0,te.idx).concat(te.node),status:A,error:j,route:p}):await Je(u,{id:p.id},j,A)}else $.push(void 0);return await ae({url:u,params:i,branch:$,status:200,error:null,route:p,form:c?void 0:null})}async function Ce(s,c,u){for(;s--;)if(u[s]){let i=s;for(;!c[i];)i-=1;try{return{idx:i+1,node:{node:await u[s](),loader:u[s],data:{},server:null,shared:null}}}catch{continue}}}async function pe({status:s,error:c,url:u,route:i}){var w;const p={},h=await Ne();let m=null;if(h.server)try{const y=await Ze(u,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;m=(w=y.nodes[0])!=null?w:null}catch{(u.origin!==location.origin||u.pathname!==location.pathname||l)&&await de(u)}const v=await be({loader:Ne,url:u,params:p,route:i,parent:()=>Promise.resolve({}),server_data_node:ve(m)}),k={node:await Pe(),loader:Pe,shared:null,server:null,data:null};return await ae({url:u,params:p,branch:[v,k],status:s,error:c,route:null})}function ke(s,c){if(Fe(s))return;const u=mt(s.pathname.slice(e.length)||"/");for(const i of me){const p=i.exec(u);if(p){const h=new URL(s.origin+ht(s.pathname,n)+s.search+s.hash);return{id:h.pathname+h.search,invalidating:c,route:i,params:_t(p),url:h}}}}function Fe(s){return s.origin!==location.origin||!s.pathname.startsWith(e)}function Be({url:s,type:c,intent:u,delta:i}){var v,k,w,y,O;let p=!1;const h={from:_e("from",{params:t.params,route:{id:(k=(v=t.route)==null?void 0:v.id)!=null?k:null},url:t.url}),to:_e("to",{params:(w=u==null?void 0:u.params)!=null?w:null,route:{id:(O=(y=u==null?void 0:u.route)==null?void 0:y.id)!=null?O:null},url:s}),willUnload:!u,type:c};i!==void 0&&(h.delta=i);const m={...h,cancel:()=>{p=!0}};return b||_.before_navigate.forEach(P=>P(m)),p?null:h}async function Ee({url:s,scroll:c,keepfocus:u,redirect_chain:i,details:p,type:h,delta:m,nav_token:v,accepted:k,blocked:w}){const y=ke(s,!1),O=Be({url:s,type:h,delta:m,intent:y});if(!O){w();return}Oe(L),k(),b=!0,f&&Z.navigating.set(O),await Te(y,s,i,{scroll:c,keepfocus:u,details:p},v,()=>{b=!1,_.after_navigate.forEach(P=>P(O)),Z.navigating.set(null)})}async function Je(s,c,u,i){return s.origin===location.origin&&s.pathname===location.pathname&&!l?await pe({status:i,error:u,url:s,route:c}):await de(s)}function de(s){return location.href=s.href,new Promise(()=>{})}return{after_navigate:s=>{je(()=>(_.after_navigate.push(s),()=>{const c=_.after_navigate.indexOf(s);_.after_navigate.splice(c,1)}))},before_navigate:s=>{je(()=>(_.before_navigate.push(s),()=>{const c=_.before_navigate.indexOf(s);_.before_navigate.splice(c,1)}))},disable_scroll_handling:()=>{(g||!f)&&(d=!1)},goto:(s,c={})=>{if("keepfocus"in c&&!("keepFocus"in c))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in c&&!("noScroll"in c))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return re(s,c,[])},invalidate:s=>{if(s===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof s=="function")o.push(s);else{const{href:c}=new URL(s,location.href);o.push(u=>u.href===c)}return ue()},invalidateAll:()=>(S=!0,ue()),prefetch:async s=>{const c=new URL(s,Me(document));await Ue(c)},prefetch_routes:async s=>{const u=(s?me.filter(i=>s.some(p=>i.exec(p))):me).map(i=>Promise.all([...i.layouts,i.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(u)},apply_action:async s=>{if(s.type==="error"){const c=new URL(location.href),{branch:u,route:i}=t;if(!i)return;const p=await Ce(t.branch.length,u,i.errors);if(p){const h=await ae({url:c,params:t.params,branch:u.slice(0,p.idx).concat(p.node),status:500,error:s.error,route:i});t=h.state;const m=ge();N.$set(h.props),m(),he().then(Ie)}}else if(s.type==="redirect")re(s.location,{invalidateAll:!0},[]);else{const c={form:s.data,page:{...F,form:s.data,status:s.status}},u=ge();N.$set(c),u(),s.type==="success"&&he().then(Ie)}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var h,m;let p=!1;if(!b){const v={from:_e("from",{params:t.params,route:{id:(m=(h=t.route)==null?void 0:h.id)!=null?m:null},url:t.url}),to:null,willUnload:!0,type:"leave",cancel:()=>p=!0};_.before_navigate.forEach(k=>k(v))}p?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Oe(L);try{sessionStorage[xe]=JSON.stringify(le)}catch{}}});const s=i=>{const{url:p,options:h,has:m}=We(i);if(p&&h.prefetch&&!Fe(p)){if(h.reload||m.rel_external||m.target||m.download)return;Ue(p)}};let c;const u=i=>{clearTimeout(c),c=setTimeout(()=>{var p;(p=i.target)==null||p.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",s),addEventListener("mousemove",u),addEventListener("sveltekit:trigger_prefetch",s),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:p,url:h,options:m,has:v}=We(i);if(!p||!h||!(p instanceof SVGAElement)&&h.protocol!==location.protocol&&!(h.protocol==="https:"||h.protocol==="http:")||v.download)return;if(m.reload||v.rel_external||v.target){Be({url:h,type:"link"})||i.preventDefault(),b=!0;return}const[w,y]=h.href.split("#");if(y!==void 0&&w===location.href.split("#")[0]){C=!0,Oe(L),t.url=h,Z.page.set({...F,url:h}),Z.page.notify();return}Ee({url:h,scroll:m.noscroll?Le():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[X]===L)return;const p=i.state[X]-L;Ee({url:new URL(location.href),scroll:le[i.state[X]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{L=i.state[X]},blocked:()=>{history.go(-p)},type:"popstate",delta:p})}}),addEventListener("hashchange",()=>{C&&(C=!1,history.replaceState({...history.state,[X]:++L},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&Z.navigating.set(null)})},_hydrate:async({status:s,error:c,node_ids:u,params:i,route:p,data:h,form:m})=>{var w;l=!0;const v=new URL(location.href);let k;try{const y=u.map(async(O,P)=>{const R=h[P];return be({loader:ye[O],url:v,params:i,route:p,parent:async()=>{const U={};for(let T=0;T<P;T+=1)Object.assign(U,(await y[T]).data);return U},server_data_node:ve(R)})});k=await ae({url:v,params:i,branch:await Promise.all(y),status:s,error:c,form:m,route:(w=me.find(({id:O})=>O===p.id))!=null?w:null})}catch(y){if(y instanceof Xe){await de(new URL(y.location,location.href));return}k=await pe({status:y instanceof Ae?y.status:500,error:se(y,{url:v,params:i,route:p}),url:v,route:p})}De(k)}}}async function Ze(r,e){var _;const n=new URL(r);n.pathname=vt(r.pathname);const o=await we(n.href,{headers:{"x-sveltekit-invalidated":e.map(t=>t?"1":"").join(",")}}),a=await o.json();if(!o.ok)throw new Error(a);return(_=a.nodes)==null||_.forEach(t=>{var l,f;(t==null?void 0:t.type)==="data"&&(t.data=Zt(t.data),t.uses={dependencies:new Set((l=t.uses.dependencies)!=null?l:[]),params:new Set((f=t.uses.params)!=null?f:[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),a}function se(r,e){var n;return r instanceof Ae?r.body:(n=zt.handleError({error:r,event:e}))!=null?n:{message:e.route.id!=null?"Internal Error":"Not Found"}}const xt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function _e(r,e){for(const n of xt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function ge(){return()=>{}}function Ie(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var o;(o=getSelection())==null||o.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function rn({env:r,hydrate:e,paths:n,target:o,trailing_slash:a}){pt(n);const _=Qt({target:o,base:n.base,trailing_slash:a});dt({client:_}),e?await _._hydrate(e):_.goto(location.href,{replaceState:!0}),_._start_router()}export{rn as start};
