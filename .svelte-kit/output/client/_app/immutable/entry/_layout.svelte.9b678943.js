import{S as Q,i as R,s as T,k as C,l as y,m as z,h as p,n as I,b as w,d as h,f as U,g as m,v as W,w as A,C as B,D as F,y as b,a as V,z as g,c as D,A as k,E as G,F as J,G as K,H as O,B as v,I as E,J as X,K as H,L as P}from"../chunks/index.04b80f0f.js";import Y from"./timerAsSidebar-page.svelte.ce8aa396.js";import"../chunks/Indicator.svelte_svelte_type_style_lang.e2c519f7.js";import{q,s as L}from"../chunks/index.099e09e1.js";import{C as j}from"../chunks/_page.8d5ab4da.js";import{I as N}from"../chunks/Icon.5c8ae56d.js";const Z={width:20,height:20,body:'<path fill="currentColor" d="m16 10l-5-4v3H6v2h5v3z"/><path fill="currentColor" d="M0 2h20v16H0zm5 6v4h5v4h8V4h-8v4z"/>'};var ee=Z;const te={width:20,height:20,body:'<path fill="currentColor" d="m4 10l5-4v3h5v2H9v3z"/><path fill="currentColor" d="M0 2v16h20V2zm2 2h8v4h5v4h-5v4H2z"/>'};var se=te;const re=n=>({}),M=n=>({class:"w-full h-full"}),le=n=>({}),x=n=>({class:"w-full h-full"});function ne(n){let e,t,o,r;function a(l){n[3](l)}let c={custom:!0,$$slots:{default:[ae]},$$scope:{ctx:n}};n[0]!==void 0&&(c.checked=n[0]),e=new j({props:c}),A.push(()=>B(e,"checked",a));const f=n[1].default,s=F(f,n,n[4],M);return{c(){b(e.$$.fragment),o=V(),s&&s.c()},l(l){g(e.$$.fragment,l),o=D(l),s&&s.l(l)},m(l,u){k(e,l,u),w(l,o,u),s&&s.m(l,u),r=!0},p(l,u){const $={};u&16&&($.$$scope={dirty:u,ctx:l}),!t&&u&1&&(t=!0,$.checked=l[0],G(()=>t=!1)),e.$set($),s&&s.p&&(!r||u&16)&&J(s,f,l,l[4],r?O(f,l[4],u,re):K(l[4]),M)},i(l){r||(m(e.$$.fragment,l),m(s,l),r=!0)},o(l){h(e.$$.fragment,l),h(s,l),r=!1},d(l){v(e,l),l&&p(o),s&&s.d(l)}}}function oe(n){let e,t,o,r,a,c,f,s;t=new Y({});function l(i){n[2](i)}let u={custom:!0,$$slots:{default:[ie]},$$scope:{ctx:n}};n[0]!==void 0&&(u.checked=n[0]),r=new j({props:u}),A.push(()=>B(r,"checked",l));const $=n[1].default,_=F($,n,n[4],x);return{c(){e=C("div"),b(t.$$.fragment),o=V(),b(r.$$.fragment),c=V(),_&&_.c(),this.h()},l(i){e=y(i,"DIV",{class:!0});var d=z(e);g(t.$$.fragment,d),o=D(d),g(r.$$.fragment,d),c=D(d),_&&_.l(d),d.forEach(p),this.h()},h(){I(e,"class","w-full flex ")},m(i,d){w(i,e,d),k(t,e,null),E(e,o),k(r,e,null),E(e,c),_&&_.m(e,null),s=!0},p(i,d){n=i;const S={};d&16&&(S.$$scope={dirty:d,ctx:n}),!a&&d&1&&(a=!0,S.checked=n[0],G(()=>a=!1)),r.$set(S),_&&_.p&&(!s||d&16)&&J(_,$,n,n[4],s?O($,n[4],d,le):K(n[4]),x)},i(i){s||(m(t.$$.fragment,i),m(r.$$.fragment,i),m(_,i),i&&X(()=>{s&&(f||(f=H(e,L,{delay:100,duration:1800,easing:q,axis:"x"},!0)),f.run(1))}),s=!0)},o(i){h(t.$$.fragment,i),h(r.$$.fragment,i),h(_,i),i&&(f||(f=H(e,L,{delay:100,duration:1800,easing:q,axis:"x"},!1)),f.run(0)),s=!1},d(i){i&&p(e),v(t),v(r),_&&_.d(i),i&&f&&f.end()}}}function ae(n){let e,t,o;return t=new N({props:{icon:ee,class:"h-full text-lg"}}),{c(){e=C("div"),b(t.$$.fragment),this.h()},l(r){e=y(r,"DIV",{class:!0});var a=z(e);g(t.$$.fragment,a),a.forEach(p),this.h()},h(){I(e,"class","h-full mt-8 ml-4 pr-2 rounded-lg border-r-2 border-blue-100 cursor-pointer peer-checked:border-blue-100 ")},m(r,a){w(r,e,a),k(t,e,null),o=!0},p:P,i(r){o||(m(t.$$.fragment,r),o=!0)},o(r){h(t.$$.fragment,r),o=!1},d(r){r&&p(e),v(t)}}}function ie(n){let e,t,o;return t=new N({props:{icon:se,class:"h-full text-lg"}}),{c(){e=C("div"),b(t.$$.fragment),this.h()},l(r){e=y(r,"DIV",{class:!0});var a=z(e);g(t.$$.fragment,a),a.forEach(p),this.h()},h(){I(e,"class","h-full mt-8 ml-4 pr-2 rounded-lg border-r-2 border-blue-100 cursor-pointer peer-checked:border-blue-100 ")},m(r,a){w(r,e,a),k(t,e,null),o=!0},p:P,i(r){o||(m(t.$$.fragment,r),o=!0)},o(r){h(t.$$.fragment,r),o=!1},d(r){r&&p(e),v(t)}}}function ce(n){let e,t,o,r;const a=[oe,ne],c=[];function f(s,l){return s[0]?0:1}return t=f(n),o=c[t]=a[t](n),{c(){e=C("div"),o.c(),this.h()},l(s){e=y(s,"DIV",{class:!0});var l=z(e);o.l(l),l.forEach(p),this.h()},h(){I(e,"class","flex w-full")},m(s,l){w(s,e,l),c[t].m(e,null),r=!0},p(s,[l]){let u=t;t=f(s),t===u?c[t].p(s,l):(W(),h(c[u],1,1,()=>{c[u]=null}),U(),o=c[t],o?o.p(s,l):(o=c[t]=a[t](s),o.c()),m(o,1),o.m(e,null))},i(s){r||(m(o),r=!0)},o(s){h(o),r=!1},d(s){s&&p(e),c[t].d()}}}function fe(n,e,t){let{$$slots:o={},$$scope:r}=e,{showSidebar:a=!0}=e;function c(s){a=s,t(0,a)}function f(s){a=s,t(0,a)}return n.$$set=s=>{"showSidebar"in s&&t(0,a=s.showSidebar),"$$scope"in s&&t(4,r=s.$$scope)},n.$$.update=()=>{n.$$.dirty&1&&console.log(a)},[a,o,c,f,r]}class $e extends Q{constructor(e){super(),R(this,e,fe,ce,T,{showSidebar:0})}}export{$e as default};
