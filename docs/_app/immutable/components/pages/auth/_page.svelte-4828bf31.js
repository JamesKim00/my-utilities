import{S as te,i as le,s as re,k as E,q as $,a as N,l as y,m as A,r as q,h as u,c as P,n as v,b as B,K as o,Z as z,L as M,_ as Ee,u as ae,B as G,P as ye,e as _e,E as ve,w as ne,x as ie,y as se,t as Q,d as ke,f as W,z as oe,g as ge}from"../../../chunks/index-75a7e759.js";import{L as Ne}from"../../../chunks/Link-0934fb9f.js";import{a as Pe,b as Le}from"../../../chunks/authentication-319ae255.js";function Te(n){let e,l,t,r,i,m,h,L,I,p,C,d,T,k,b,s="currently loading: "+n[1],c,O,F;return{c(){e=E("form"),l=E("label"),t=$("Email:"),r=N(),i=E("input"),m=N(),h=E("label"),L=$("Password:"),I=N(),p=E("input"),C=N(),d=E("button"),T=$("Submit"),k=N(),b=E("p"),c=$(s),this.h()},l(_){e=y(_,"FORM",{});var w=A(e);l=y(w,"LABEL",{for:!0});var D=A(l);t=q(D,"Email:"),D.forEach(u),r=P(w),i=y(w,"INPUT",{id:!0,type:!0,placeholder:!0}),m=P(w),h=y(w,"LABEL",{for:!0});var V=A(h);L=q(V,"Password:"),V.forEach(u),I=P(w),p=y(w,"INPUT",{id:!0,type:!0,placeholder:!0}),C=P(w),d=y(w,"BUTTON",{type:!0});var Z=A(d);T=q(Z,"Submit"),Z.forEach(u),w.forEach(u),k=P(_),b=y(_,"P",{});var R=A(b);c=q(R,s),R.forEach(u),this.h()},h(){v(l,"for","email"),v(i,"id","email"),v(i,"type","email"),v(i,"placeholder","Email"),i.required=!0,v(h,"for","password"),v(p,"id","password"),v(p,"type","password"),v(p,"placeholder","Master Password"),p.required=!0,v(d,"type","submit")},m(_,w){B(_,e,w),o(e,l),o(l,t),o(e,r),o(e,i),z(i,n[0].email),o(e,m),o(e,h),o(h,L),o(e,I),o(e,p),z(p,n[0].password),o(e,C),o(e,d),o(d,T),B(_,k,w),B(_,b,w),o(b,c),O||(F=[M(i,"input",n[3]),M(p,"input",n[4]),M(e,"submit",Ee(n[2]))],O=!0)},p(_,[w]){w&1&&i.value!==_[0].email&&z(i,_[0].email),w&1&&p.value!==_[0].password&&z(p,_[0].password),w&2&&s!==(s="currently loading: "+_[1])&&ae(c,s)},i:G,o:G,d(_){_&&u(e),_&&u(k),_&&u(b),O=!1,ye(F)}}}function Ae(n,e,l){let{info:t}=e,r=!1;async function i(){l(1,r=!0),await Pe(t),l(1,r=!1)}function m(){t.email=this.value,l(0,t)}function h(){t.password=this.value,l(0,t)}return n.$$set=L=>{"info"in L&&l(0,t=L.info)},[t,r,i,m,h]}class Be extends te{constructor(e){super(),le(this,e,Ae,Te,re,{info:0})}}function he(n,e,l){const t=n.slice();return t[9]=e[l],t}function be(n){let e,l=n[9]+"",t,r;return{c(){e=E("div"),t=$(l),r=N()},l(i){e=y(i,"DIV",{});var m=A(e);t=q(m,l),r=P(m),m.forEach(u)},m(i,m){B(i,e,m),o(e,t),o(e,r)},p(i,m){m&2&&l!==(l=i[9]+"")&&ae(t,l)},d(i){i&&u(e)}}}function we(n){let e,l;return{c(){e=E("p"),l=$("Sent an email. now confirm it")},l(t){e=y(t,"P",{});var r=A(e);l=q(r,"Sent an email. now confirm it"),r.forEach(u)},m(t,r){B(t,e,r),o(e,l)},d(t){t&&u(e)}}}function Se(n){let e,l,t,r,i,m,h,L,I,p,C,d,T,k,b,s,c,O,F,_,w,D,V,Z,R,H="currently loading: "+n[2],X,Y,K,x,ue,j=n[1],S=[];for(let a=0;a<j.length;a+=1)S[a]=be(he(n,j,a));let U=n[3]&&we();return{c(){e=E("form"),l=E("label"),t=$("Name:"),r=N(),i=E("input"),m=N(),h=E("label"),L=$("Email:"),I=N(),p=E("input"),C=N(),d=E("label"),T=$("Password:"),k=N(),b=E("input"),s=N(),c=E("button"),O=$("(show password)?"),F=N(),_=E("button"),w=$("Submit"),D=N(),V=E("div");for(let a=0;a<S.length;a+=1)S[a].c();Z=N(),R=E("p"),X=$(H),Y=N(),U&&U.c(),K=_e(),this.h()},l(a){e=y(a,"FORM",{});var f=A(e);l=y(f,"LABEL",{for:!0});var g=A(l);t=q(g,"Name:"),g.forEach(u),r=P(f),i=y(f,"INPUT",{type:!0,placeholder:!0}),m=P(f),h=y(f,"LABEL",{for:!0});var J=A(h);L=q(J,"Email:"),J.forEach(u),I=P(f),p=y(f,"INPUT",{type:!0,placeholder:!0}),C=P(f),d=y(f,"LABEL",{for:!0});var fe=A(d);T=q(fe,"Password:"),fe.forEach(u),k=P(f),b=y(f,"INPUT",{id:!0,type:!0,placeholder:!0}),s=P(f),c=y(f,"BUTTON",{type:!0});var pe=A(c);O=q(pe,"(show password)?"),pe.forEach(u),F=P(f),_=y(f,"BUTTON",{type:!0});var me=A(_);w=q(me,"Submit"),me.forEach(u),f.forEach(u),D=P(a),V=y(a,"DIV",{});var ce=A(V);for(let ee=0;ee<S.length;ee+=1)S[ee].l(ce);ce.forEach(u),Z=P(a),R=y(a,"P",{});var de=A(R);X=q(de,H),de.forEach(u),Y=P(a),U&&U.l(a),K=_e(),this.h()},h(){v(l,"for","name"),v(i,"type","text"),v(i,"placeholder","Name"),i.required=!0,v(h,"for","email"),v(p,"type","email"),v(p,"placeholder","Email"),p.required=!0,v(d,"for","password"),v(b,"id","pwd"),v(b,"type","password"),v(b,"placeholder","Master Password"),b.required=!0,v(c,"type","button"),v(_,"type","submit")},m(a,f){B(a,e,f),o(e,l),o(l,t),o(e,r),o(e,i),z(i,n[0].name),o(e,m),o(e,h),o(h,L),o(e,I),o(e,p),z(p,n[0].email),o(e,C),o(e,d),o(d,T),o(e,k),o(e,b),z(b,n[0].password),o(e,s),o(e,c),o(c,O),o(e,F),o(e,_),o(_,w),B(a,D,f),B(a,V,f);for(let g=0;g<S.length;g+=1)S[g].m(V,null);B(a,Z,f),B(a,R,f),o(R,X),B(a,Y,f),U&&U.m(a,f),B(a,K,f),x||(ue=[M(i,"input",n[6]),M(p,"input",n[7]),M(b,"input",n[8]),M(b,"input",n[4]),M(c,"click",Ie),M(e,"submit",Ee(n[5]))],x=!0)},p(a,[f]){if(f&1&&i.value!==a[0].name&&z(i,a[0].name),f&1&&p.value!==a[0].email&&z(p,a[0].email),f&1&&b.value!==a[0].password&&z(b,a[0].password),f&2){j=a[1];let g;for(g=0;g<j.length;g+=1){const J=he(a,j,g);S[g]?S[g].p(J,f):(S[g]=be(J),S[g].c(),S[g].m(V,null))}for(;g<S.length;g+=1)S[g].d(1);S.length=j.length}f&4&&H!==(H="currently loading: "+a[2])&&ae(X,H),a[3]?U||(U=we(),U.c(),U.m(K.parentNode,K)):U&&(U.d(1),U=null)},i:G,o:G,d(a){a&&u(e),a&&u(D),a&&u(V),ve(S,a),a&&u(Z),a&&u(R),a&&u(Y),U&&U.d(a),a&&u(K),x=!1,ye(ue)}}}function Ie(){const n=document.getElementById("pwd");n.type==="password"?n.type="text":n.type="password"}function Ue(n,e,l){let{info:t}=e,r=[],i=!1,m=!1;function h(){function d(T,k=""){return k?!new RegExp(T,k).test(t.password):!new RegExp(T).test(t.password)}l(1,r=[]),d(".*[A-Z].*[A-Z]")&&r.push("Need at least 2 uppercase characters"),d(".*[a-z].*[a-z].*[a-z]")&&r.push("Need at least 3 lowercase characters"),d(".*[0-9].*[0-9]")&&r.push("Need at least 2 numerals"),d(".{8,}")&&r.push("Needs to be of length at least 8"),d("[^a-z0-9 ]","i")&&r.push("Need at least 1 special character");try{const T=document.getElementById("pwd");r.length!==0?T.setCustomValidity("Please meet all the requirements"):T.setCustomValidity("")}catch{}l(1,r)}h();async function L(){l(2,i=!0),await Le(t),l(2,i=!1),l(3,m=!0)}function I(){t.name=this.value,l(0,t)}function p(){t.email=this.value,l(0,t)}function C(){t.password=this.value,l(0,t)}return n.$$set=d=>{"info"in d&&l(0,t=d.info)},[t,r,i,m,h,L,I,p,C]}class $e extends te{constructor(e){super(),le(this,e,Ue,Se,re,{info:0})}}function qe(n){let e,l;return e=new Be({props:{info:n[1]}}),{c(){ne(e.$$.fragment)},l(t){ie(e.$$.fragment,t)},m(t,r){se(e,t,r),l=!0},p:G,i(t){l||(W(e.$$.fragment,t),l=!0)},o(t){Q(e.$$.fragment,t),l=!1},d(t){oe(e,t)}}}function Ce(n){let e,l;return e=new $e({props:{info:n[1]}}),{c(){ne(e.$$.fragment)},l(t){ie(e.$$.fragment,t)},m(t,r){se(e,t,r),l=!0},p:G,i(t){l||(W(e.$$.fragment,t),l=!0)},o(t){Q(e.$$.fragment,t),l=!1},d(t){oe(e,t)}}}function Oe(n){let e,l,t,r,i,m,h,L,I,p,C,d;e=new Ne({props:{to:"/"}});const T=[Ce,qe],k=[];function b(s,c){return s[0]?0:1}return t=b(n),r=k[t]=T[t](n),{c(){ne(e.$$.fragment),l=$(`\r
aaaAA00!\r
`),r.c(),i=N(),m=E("button"),h=$("Change button"),L=N(),I=E("div")},l(s){ie(e.$$.fragment,s),l=q(s,`\r
aaaAA00!\r
`),r.l(s),i=P(s),m=y(s,"BUTTON",{});var c=A(m);h=q(c,"Change button"),c.forEach(u),L=P(s),I=y(s,"DIV",{}),A(I).forEach(u)},m(s,c){se(e,s,c),B(s,l,c),k[t].m(s,c),B(s,i,c),B(s,m,c),o(m,h),B(s,L,c),B(s,I,c),p=!0,C||(d=M(m,"click",n[2]),C=!0)},p(s,[c]){let O=t;t=b(s),t===O?k[t].p(s,c):(ge(),Q(k[O],1,1,()=>{k[O]=null}),ke(),r=k[t],r?r.p(s,c):(r=k[t]=T[t](s),r.c()),W(r,1),r.m(i.parentNode,i))},i(s){p||(W(e.$$.fragment,s),W(r),p=!0)},o(s){Q(e.$$.fragment,s),Q(r),p=!1},d(s){oe(e,s),s&&u(l),k[t].d(s),s&&u(i),s&&u(m),s&&u(L),s&&u(I),C=!1,d()}}}function Ve(n,e,l){let t=!0;return[t,{email:"",password:"",name:""},()=>{l(0,t=!t)}]}class De extends te{constructor(e){super(),le(this,e,Ve,Oe,re,{})}}export{De as default};
