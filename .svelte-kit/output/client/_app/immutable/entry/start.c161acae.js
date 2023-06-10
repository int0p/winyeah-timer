import{Y as Ce,ad as we}from"../chunks/index.87f184e6.js";import{S as ze,a as Ge,I as q,g as Ve,f as qe,b as _e,c as fe,s as B,d as ee,i as be,e as K,P as Fe,h as Qe}from"../chunks/singletons.3c14d127.js";function et(n,o){return n==="/"||o==="ignore"?n:o==="never"?n.endsWith("/")?n.slice(0,-1):n:o==="always"&&!n.endsWith("/")?n+"/":n}function tt(n){return n.split("%25").map(decodeURI).join("%25")}function nt(n){for(const o in n)n[o]=decodeURIComponent(n[o]);return n}const at=["href","pathname","search","searchParams","toString","toJSON"];function rt(n,o){const u=new URL(n);for(const i of at)Object.defineProperty(u,i,{get(){return o(),n[i]},enumerable:!0,configurable:!0});return ot(u),u}function ot(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const it="/__data.json";function st(n){return n.replace(/\/$/,"")+it}function Ye(n){try{return JSON.parse(sessionStorage[n])}catch{}}function Me(n,o){const u=JSON.stringify(o);try{sessionStorage[n]=u}catch{}}function ct(...n){let o=5381;for(const u of n)if(typeof u=="string"){let i=u.length;for(;i;)o=o*33^u.charCodeAt(--i)}else if(ArrayBuffer.isView(u)){const i=new Uint8Array(u.buffer,u.byteOffset,u.byteLength);let h=i.length;for(;h;)o=o*33^i[--h]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}const ue=window.fetch;window.fetch=(n,o)=>((n instanceof Request?n.method:(o==null?void 0:o.method)||"GET")!=="GET"&&ne.delete(ke(n)),ue(n,o));const ne=new Map;function lt(n,o){const u=ke(n,o),i=document.querySelector(u);if(i!=null&&i.textContent){const{body:h,...f}=JSON.parse(i.textContent),S=i.getAttribute("data-ttl");return S&&ne.set(u,{body:h,init:f,ttl:1e3*Number(S)}),Promise.resolve(new Response(h,f))}return ue(n,o)}function ft(n,o,u){if(ne.size>0){const i=ke(n,u),h=ne.get(i);if(h){if(performance.now()<h.ttl&&["default","force-cache","only-if-cached",void 0].includes(u==null?void 0:u.cache))return new Response(h.body,h.init);ne.delete(i)}}return ue(o,u)}function ke(n,o){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;if(o!=null&&o.headers||o!=null&&o.body){const h=[];o.headers&&h.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&h.push(o.body),i+=`[data-hash="${ct(...h)}"]`}return i}const ut=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function dt(n){const o=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${pt(n).map(i=>{const h=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(h)return o.push({name:h[1],matcher:h[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(f)return o.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const S=i.split(/\[(.+?)\](?!\])/);return"/"+S.map((_,y)=>{if(y%2){if(_.startsWith("x+"))return ve(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return ve(String.fromCharCode(..._.slice(2).split("-").map(U=>parseInt(U,16))));const p=ut.exec(_);if(!p)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,C,x,k,N]=p;return o.push({name:k,matcher:N,optional:!!C,rest:!!x,chained:x?y===1&&S[0]==="":!1}),x?"(.*?)":C?"([^/]*)?":"([^/]+?)"}return ve(_)}).join("")}).join("")}/?$`),params:o}}function ht(n){return!/^\([^)]+\)$/.test(n)}function pt(n){return n.slice(1).split("/").filter(ht)}function gt(n,o,u){const i={},h=n.slice(1);let f=0;for(let S=0;S<o.length;S+=1){const l=o[S],_=h[S-f];if(l.chained&&l.rest&&f){i[l.name]=h.slice(S-f,S+1).filter(y=>y).join("/"),f=0;continue}if(_===void 0){l.rest&&(i[l.name]="");continue}if(!l.matcher||u[l.matcher](_)){i[l.name]=_;const y=o[S+1],p=h[S+1];y&&!y.rest&&y.optional&&p&&l.chained&&(f=0);continue}if(l.optional&&l.chained){f++;continue}return}if(!f)return i}function ve(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function mt({nodes:n,server_loads:o,dictionary:u,matchers:i}){const h=new Set(o);return Object.entries(u).map(([l,[_,y,p]])=>{const{pattern:C,params:x}=dt(l),k={id:l,exec:N=>{const U=C.exec(N);if(U)return gt(U,x,i)},errors:[1,...p||[]].map(N=>n[N]),layouts:[0,...y||[]].map(S),leaf:f(_)};return k.errors.length=k.layouts.length=Math.max(k.errors.length,k.layouts.length),k});function f(l){const _=l<0;return _&&(l=~l),[_,n[l]]}function S(l){return l===void 0?l:[h.has(l),n[l]]}}class te{constructor(o,u){this.status=o,typeof u=="string"?this.body={message:u}:u?this.body=u:this.body={message:`Error: ${o}`}}toString(){return JSON.stringify(this.body)}}class Be{constructor(o,u){this.status=o,this.location=u}}async function yt(n){var o;for(const u in n)if(typeof((o=n[u])==null?void 0:o.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([i,h])=>[i,await h])));return n}const wt=-1,_t=-2,bt=-3,vt=-4,Et=-5,St=-6;function kt(n,o){if(typeof n=="number")return h(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const u=n,i=Array(u.length);function h(f,S=!1){if(f===wt)return;if(f===bt)return NaN;if(f===vt)return 1/0;if(f===Et)return-1/0;if(f===St)return-0;if(S)throw new Error("Invalid input");if(f in i)return i[f];const l=u[f];if(!l||typeof l!="object")i[f]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const _=l[0],y=o==null?void 0:o[_];if(y)return i[f]=y(h(l[1]));switch(_){case"Date":i[f]=new Date(l[1]);break;case"Set":const p=new Set;i[f]=p;for(let k=1;k<l.length;k+=1)p.add(h(l[k]));break;case"Map":const C=new Map;i[f]=C;for(let k=1;k<l.length;k+=2)C.set(h(l[k]),h(l[k+1]));break;case"RegExp":i[f]=new RegExp(l[1],l[2]);break;case"Object":i[f]=Object(l[1]);break;case"BigInt":i[f]=BigInt(l[1]);break;case"null":const x=Object.create(null);i[f]=x;for(let k=1;k<l.length;k+=2)x[l[k]]=h(l[k+1]);break;default:throw new Error(`Unknown type ${_}`)}}else{const _=new Array(l.length);i[f]=_;for(let y=0;y<l.length;y+=1){const p=l[y];p!==_t&&(_[y]=h(p))}}else{const _={};i[f]=_;for(const y in l){const p=l[y];_[y]=h(p)}}return i[f]}return h(0)}const We=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...We];const Rt=new Set([...We]);[...Rt];function At(n){return n.filter(o=>o!=null)}const It="x-sveltekit-invalidated";var Je;const z=(Je=Ye(ze))!=null?Je:{};var Ke;const Q=(Ke=Ye(Ge))!=null?Ke:{};function Ee(n){z[n]=ee()}function Lt(n,o){var je;const u=mt(n),i=n.nodes[0],h=n.nodes[1];i(),h();const f=document.documentElement,S=[],l=[];let _=null;const y={before_navigate:[],after_navigate:[]};let p={branch:[],error:null,url:null},C=!1,x=!1,k=!0,N=!1,U=!1,G=!1,H=!1,F,j=(je=history.state)==null?void 0:je[q];j||(j=Date.now(),history.replaceState({...history.state,[q]:j},"",location.href));const de=z[j];de&&(history.scrollRestoration="manual",scrollTo(de.x,de.y));let M,ae,re;async function Re(){re=re||Promise.resolve(),await re,re=null;const e=new URL(location.href),t=X(e,!0);_=null;const r=ae={},a=t&&await ge(t);if(r===ae&&a){if(a.type==="redirect")return oe(new URL(a.location,e).href,{},[e.pathname],r);a.props.page!==void 0&&(M=a.props.page),F.$set(a.props)}}function Ae(e){l.some(t=>t==null?void 0:t.snapshot)&&(Q[e]=l.map(t=>{var r;return(r=t==null?void 0:t.snapshot)==null?void 0:r.capture()}))}function Ie(e){var t;(t=Q[e])==null||t.forEach((r,a)=>{var c,s;(s=(c=l[a])==null?void 0:c.snapshot)==null||s.restore(r)})}function Le(){Ee(j),Me(ze,z),Ae(j),Me(Ge,Q)}async function oe(e,{noScroll:t=!1,replaceState:r=!1,keepFocus:a=!1,state:c={},invalidateAll:s=!1},d,m){return typeof e=="string"&&(e=new URL(e,Ve(document))),le({url:e,scroll:t?ee():null,keepfocus:a,redirect_chain:d,details:{state:c,replaceState:r},nav_token:m,accepted:()=>{s&&(H=!0)},blocked:()=>{},type:"goto"})}async function Oe(e){return _={id:e.id,promise:ge(e).then(t=>(t.type==="loaded"&&t.state.error&&(_=null),t))},_.promise}async function ie(...e){const r=u.filter(a=>e.some(c=>a.exec(c))).map(a=>Promise.all([...a.layouts,a.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(r)}function Pe(e){var a,c;p=e.state;const t=document.querySelector("style[data-sveltekit]");t&&t.remove(),M=e.props.page,F=new n.root({target:o,props:{...e.props,stores:B,components:l},hydrate:!0}),Ie(j);const r={from:null,to:{params:p.params,route:{id:(c=(a=p.route)==null?void 0:a.id)!=null?c:null},url:new URL(location.href)},willUnload:!1,type:"enter"};y.after_navigate.forEach(s=>s(r)),x=!0}async function W({url:e,params:t,branch:r,status:a,error:c,route:s,form:d}){var b;let m="never";for(const A of r)(A==null?void 0:A.slash)!==void 0&&(m=A.slash);e.pathname=et(e.pathname,m),e.search=e.search;const E={type:"loaded",state:{url:e,params:t,branch:r,error:c,route:s},props:{constructors:At(r).map(A=>A.node.component)}};d!==void 0&&(E.props.form=d);let w={},v=!M,R=0;for(let A=0;A<Math.max(r.length,p.branch.length);A+=1){const D=r[A],T=p.branch[A];(D==null?void 0:D.data)!==(T==null?void 0:T.data)&&(v=!0),D&&(w={...w,...D.data},v&&(E.props[`data_${R}`]=w),R+=1)}return(!p.url||e.href!==p.url.href||p.error!==c||d!==void 0&&d!==M.form||v)&&(E.props.page={error:c,params:t,route:{id:(b=s==null?void 0:s.id)!=null?b:null},status:a,url:new URL(e),form:d!=null?d:null,data:v?w:M.data}),E}async function he({loader:e,parent:t,url:r,params:a,route:c,server_data_node:s}){var w,v,R,L,b,A,D;let d=null;const m={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await e();if((w=E.universal)!=null&&w.load){let T=function(...O){for(const g of O){const{href:I}=new URL(g,r);m.dependencies.add(I)}};const V={route:{get id(){return m.route=!0,c.id}},params:new Proxy(a,{get:(O,g)=>(m.params.add(g),O[g])}),data:(v=s==null?void 0:s.data)!=null?v:null,url:rt(r,()=>{m.url=!0}),async fetch(O,g){let I;O instanceof Request?(I=O.url,g={body:O.method==="GET"||O.method==="HEAD"?void 0:await O.blob(),cache:O.cache,credentials:O.credentials,headers:O.headers,integrity:O.integrity,keepalive:O.keepalive,method:O.method,mode:O.mode,redirect:O.redirect,referrer:O.referrer,referrerPolicy:O.referrerPolicy,signal:O.signal,...g}):I=O;const P=new URL(I,r);return T(P.href),P.origin===r.origin&&(I=P.href.slice(r.origin.length)),x?ft(I,P.href,g):lt(I,g)},setHeaders:()=>{},depends:T,parent(){return m.parent=!0,t()}};d=(R=await E.universal.load.call(null,V))!=null?R:null,d=d?await yt(d):null}return{node:E,loader:e,server:s,universal:(L=E.universal)!=null&&L.load?{type:"data",data:d,uses:m}:null,data:(b=d!=null?d:s==null?void 0:s.data)!=null?b:null,slash:(D=(A=E.universal)==null?void 0:A.trailingSlash)!=null?D:s==null?void 0:s.slash}}function Ue(e,t,r,a,c){if(H)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&r)return!0;for(const s of a.params)if(c[s]!==p.params[s])return!0;for(const s of a.dependencies)if(S.some(d=>d(new URL(s))))return!0;return!1}function pe(e,t){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"&&t!=null?t:null}async function ge({id:e,invalidating:t,url:r,params:a,route:c}){var O;if((_==null?void 0:_.id)===e)return _.promise;const{errors:s,layouts:d,leaf:m}=c,E=[...d,m];s.forEach(g=>g==null?void 0:g().catch(()=>{})),E.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let w=null;const v=p.url?e!==p.url.pathname+p.url.search:!1,R=p.route?c.id!==p.route.id:!1;let L=!1;const b=E.map((g,I)=>{var J;const P=p.branch[I],$=!!(g!=null&&g[0])&&((P==null?void 0:P.loader)!==g[1]||Ue(L,R,v,(J=P.server)==null?void 0:J.uses,a));return $&&(L=!0),$});if(b.some(Boolean)){try{w=await He(r,b)}catch(g){return se({status:g instanceof te?g.status:500,error:await Z(g,{url:r,params:a,route:{id:c.id}}),url:r,route:c})}if(w.type==="redirect")return w}const A=w==null?void 0:w.nodes;let D=!1;const T=E.map(async(g,I)=>{var me;if(!g)return;const P=p.branch[I],$=A==null?void 0:A[I];if((!$||$.type==="skip")&&g[1]===(P==null?void 0:P.loader)&&!Ue(D,R,v,(me=P.universal)==null?void 0:me.uses,a))return P;if(D=!0,($==null?void 0:$.type)==="error")throw $;return he({loader:g[1],url:r,params:a,route:c,parent:async()=>{var De;const Te={};for(let ye=0;ye<I;ye+=1)Object.assign(Te,(De=await T[ye])==null?void 0:De.data);return Te},server_data_node:pe($===void 0&&g[0]?{type:"skip"}:$!=null?$:null,g[0]?P==null?void 0:P.server:void 0)})});for(const g of T)g.catch(()=>{});const V=[];for(let g=0;g<E.length;g+=1)if(E[g])try{V.push(await T[g])}catch(I){if(I instanceof Be)return{type:"redirect",location:I.location};let P=500,$;if(A!=null&&A.includes(I))P=(O=I.status)!=null?O:P,$=I.error;else if(I instanceof te)P=I.status,$=I.body;else{if(await B.updated.check())return await Y(r);$=await Z(I,{params:a,url:r,route:{id:c.id}})}const J=await xe(g,V,s);return J?await W({url:r,params:a,branch:V.slice(0,J.idx).concat(J.node),status:P,error:$,route:c}):await $e(r,{id:c.id},$,P)}else V.push(void 0);return await W({url:r,params:a,branch:V,status:200,error:null,route:c,form:t?void 0:null})}async function xe(e,t,r){for(;e--;)if(r[e]){let a=e;for(;!t[a];)a-=1;try{return{idx:a+1,node:{node:await r[e](),loader:r[e],data:{},server:null,universal:null}}}catch{continue}}}async function se({status:e,error:t,url:r,route:a}){var w;const c={};let s=null;if(n.server_loads[0]===0)try{const v=await He(r,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;s=(w=v.nodes[0])!=null?w:null}catch{(r.origin!==location.origin||r.pathname!==location.pathname||C)&&await Y(r)}const m=await he({loader:i,url:r,params:c,route:a,parent:()=>Promise.resolve({}),server_data_node:pe(s)}),E={node:await h(),loader:h,universal:null,server:null,data:null};return await W({url:r,params:c,branch:[m,E],status:e,error:t,route:null})}function X(e,t){if(be(e,K))return;const r=ce(e);for(const a of u){const c=a.exec(r);if(c)return{id:e.pathname+e.search,invalidating:t,route:a,params:nt(c),url:e}}}function ce(e){return tt(e.pathname.slice(K.length)||"/")}function Ne({url:e,type:t,intent:r,delta:a}){var m,E,w,v,R;let c=!1;const s={from:{params:p.params,route:{id:(E=(m=p.route)==null?void 0:m.id)!=null?E:null},url:p.url},to:{params:(w=r==null?void 0:r.params)!=null?w:null,route:{id:(R=(v=r==null?void 0:r.route)==null?void 0:v.id)!=null?R:null},url:e},willUnload:!r,type:t};a!==void 0&&(s.delta=a);const d={...s,cancel:()=>{c=!0}};return U||y.before_navigate.forEach(L=>L(d)),c?null:s}async function le({url:e,scroll:t,keepfocus:r,redirect_chain:a,details:c,type:s,delta:d,nav_token:m={},accepted:E,blocked:w}){var T,V,O;const v=X(e,!1),R=Ne({url:e,type:s,delta:d,intent:v});if(!R){w();return}const L=j;E(),U=!0,x&&B.navigating.set(R),ae=m;let b=v&&await ge(v);if(!b){if(be(e,K))return await Y(e);b=await $e(e,{id:null},await Z(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(v==null?void 0:v.url)||e,ae!==m)return!1;if(b.type==="redirect")if(a.length>10||a.includes(e.pathname))b=await se({status:500,error:await Z(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return oe(new URL(b.location,e).href,{},[...a,e.pathname],m),!1;else((T=b.props.page)==null?void 0:T.status)>=400&&await B.updated.check()&&await Y(e);if(S.length=0,H=!1,N=!0,Ee(L),Ae(L),(V=b.props.page)!=null&&V.url&&b.props.page.url.pathname!==e.pathname&&(e.pathname=(O=b.props.page)==null?void 0:O.url.pathname),c){const g=c.replaceState?0:1;if(c.state[q]=j+=g,history[c.replaceState?"replaceState":"pushState"](c.state,"",e),!c.replaceState){let I=j+1;for(;Q[I]||z[I];)delete Q[I],delete z[I],I+=1}}_=null,x?(p=b.state,b.props.page&&(b.props.page.url=e),F.$set(b.props)):Pe(b);const{activeElement:A}=document;if(await we(),k){const g=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));t?scrollTo(t.x,t.y):g?g.scrollIntoView():scrollTo(0,0)}const D=document.activeElement!==A&&document.activeElement!==document.body;!r&&!D&&Se(),k=!0,b.props.page&&(M=b.props.page),U=!1,s==="popstate"&&Ie(j),y.after_navigate.forEach(g=>g(R)),B.navigating.set(null),N=!1}async function $e(e,t,r,a){return e.origin===location.origin&&e.pathname===location.pathname&&!C?await se({status:a,error:r,url:e,route:t}):await Y(e)}function Y(e){return location.href=e.href,new Promise(()=>{})}function Ze(){let e;f.addEventListener("mousemove",s=>{const d=s.target;clearTimeout(e),e=setTimeout(()=>{a(d,2)},20)});function t(s){a(s.composedPath()[0],1)}f.addEventListener("mousedown",t),f.addEventListener("touchstart",t,{passive:!0});const r=new IntersectionObserver(s=>{for(const d of s)d.isIntersecting&&(ie(ce(new URL(d.target.href))),r.unobserve(d.target))},{threshold:0});function a(s,d){const m=qe(s,f);if(!m)return;const{url:E,external:w,download:v}=_e(m,K);if(w||v)return;const R=fe(m);if(!R.reload)if(d<=R.preload_data){const L=X(E,!1);L&&Oe(L)}else d<=R.preload_code&&ie(ce(E))}function c(){r.disconnect();for(const s of f.querySelectorAll("a")){const{url:d,external:m,download:E}=_e(s,K);if(m||E)continue;const w=fe(s);w.reload||(w.preload_code===Fe.viewport&&r.observe(s),w.preload_code===Fe.eager&&ie(ce(d)))}}y.after_navigate.push(c),c()}function Z(e,t){var r;return e instanceof te?e.body:(r=n.hooks.handleError({error:e,event:t}))!=null?r:{message:t.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:e=>{Ce(()=>(y.after_navigate.push(e),()=>{const t=y.after_navigate.indexOf(e);y.after_navigate.splice(t,1)}))},before_navigate:e=>{Ce(()=>(y.before_navigate.push(e),()=>{const t=y.before_navigate.indexOf(e);y.before_navigate.splice(t,1)}))},disable_scroll_handling:()=>{(N||!x)&&(k=!1)},goto:(e,t={})=>oe(e,t,[]),invalidate:e=>{if(typeof e=="function")S.push(e);else{const{href:t}=new URL(e,location.href);S.push(r=>r.href===t)}return Re()},invalidate_all:()=>(H=!0,Re()),preload_data:async e=>{const t=new URL(e,Ve(document)),r=X(t,!1);if(!r)throw new Error(`Attempted to preload a URL that does not belong to this app: ${t}`);await Oe(r)},preload_code:ie,apply_action:async e=>{var t;if(e.type==="error"){const r=new URL(location.href),{branch:a,route:c}=p;if(!c)return;const s=await xe(p.branch.length,a,c.errors);if(s){const d=await W({url:r,params:p.params,branch:a.slice(0,s.idx).concat(s.node),status:(t=e.status)!=null?t:500,error:e.error,route:c});p=d.state,F.$set(d.props),we().then(Se)}}else e.type==="redirect"?oe(e.location,{invalidateAll:!0},[]):(F.$set({form:null,page:{...M,form:e.data,status:e.status}}),await we(),F.$set({form:e.data}),e.type==="success"&&Se())},_start_router:()=>{var e;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{var a,c;let r=!1;if(Le(),!U){const s={from:{params:p.params,route:{id:(c=(a=p.route)==null?void 0:a.id)!=null?c:null},url:p.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};y.before_navigate.forEach(d=>d(s))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Le()}),(e=navigator.connection)!=null&&e.saveData||Ze(),f.addEventListener("click",t=>{var R,L,b;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=qe(t.composedPath()[0],f);if(!r)return;const{url:a,external:c,target:s,download:d}=_e(r,K);if(!a)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const m=fe(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||d)return;if(c||m.reload){Ne({url:a,type:"link"})?U=!0:t.preventDefault();return}const[w,v]=a.href.split("#");if(v!==void 0&&w===location.href.split("#")[0]){if(p.url.hash===a.hash){t.preventDefault(),(R=r.ownerDocument.getElementById(v))==null||R.scrollIntoView();return}if(G=!0,Ee(j),p.url=a,B.page.set({...M,url:a}),B.page.notify(),!m.replace_state)return;G=!1,t.preventDefault()}le({url:a,scroll:m.noscroll?ee():null,keepfocus:(L=m.keep_focus)!=null?L:!1,redirect_chain:[],details:{state:{},replaceState:(b=m.replace_state)!=null?b:a.href===location.href},accepted:()=>t.preventDefault(),blocked:()=>t.preventDefault(),type:"link"})}),f.addEventListener("submit",t=>{var b;if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(be(s,K))return;const d=t.target,{keep_focus:m,noscroll:E,reload:w,replace_state:v}=fe(d);if(w)return;t.preventDefault(),t.stopPropagation();const R=new FormData(d),L=a==null?void 0:a.getAttribute("name");L&&R.append(L,(b=a==null?void 0:a.getAttribute("value"))!=null?b:""),s.search=new URLSearchParams(R).toString(),le({url:s,scroll:E?ee():null,keepfocus:m!=null?m:!1,redirect_chain:[],details:{state:{},replaceState:v!=null?v:s.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[q]){if(t.state[q]===j)return;const a=z[t.state[q]];if(p.url.href.split("#")[0]===location.href.split("#")[0]){z[j]=ee(),j=t.state[q],scrollTo(a.x,a.y);return}const c=t.state[q]-j;await le({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{j=t.state[q]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[q]:++j},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&B.navigating.set(null)})},_hydrate:async({status:e=200,error:t,node_ids:r,params:a,route:c,data:s,form:d})=>{C=!0;const m=new URL(location.href);({params:a={},route:c={id:null}}=X(m,!1)||{});let E;try{const w=r.map(async(L,b)=>{const A=s[b];return A!=null&&A.uses&&(A.uses=Xe(A.uses)),he({loader:n.nodes[L],url:m,params:a,route:c,parent:async()=>{const D={};for(let T=0;T<b;T+=1)Object.assign(D,(await w[T]).data);return D},server_data_node:pe(A)})}),v=await Promise.all(w),R=u.find(({id:L})=>L===c.id);if(R){const L=R.layouts;for(let b=0;b<L.length;b++)L[b]||v.splice(b,0,void 0)}E=await W({url:m,params:a,branch:v,status:e,error:t,form:d,route:R!=null?R:null})}catch(w){if(w instanceof Be){await Y(new URL(w.location,location.href));return}E=await se({status:w instanceof te?w.status:500,error:await Z(w,{url:m,params:a,route:c}),url:m,route:c})}Pe(E)}}}async function He(n,o){const u=new URL(n);u.pathname=st(n.pathname),u.searchParams.append(It,o.map(h=>h?"1":"0").join(""));const i=await ue(u.href);if(!i.ok)throw new te(i.status,await i.json());return new Promise(async h=>{var p;const f=new Map,S=i.body.getReader(),l=new TextDecoder;function _(C){return kt(C,{Promise:x=>new Promise((k,N)=>{f.set(x,{fulfil:k,reject:N})})})}let y="";for(;;){const{done:C,value:x}=await S.read();if(C&&!y)break;for(y+=!x&&y?`
`:l.decode(x);;){const k=y.indexOf(`
`);if(k===-1)break;const N=JSON.parse(y.slice(0,k));if(y=y.slice(k+1),N.type==="redirect")return h(N);if(N.type==="data")(p=N.nodes)==null||p.forEach(U=>{(U==null?void 0:U.type)==="data"&&(U.uses=Xe(U.uses),U.data=_(U.data))}),h(N);else if(N.type==="chunk"){const{id:U,data:G,error:H}=N,F=f.get(U);f.delete(U),H?F.reject(_(H)):F.fulfil(_(G))}}}})}function Xe(n){var o,u;return{dependencies:new Set((o=n==null?void 0:n.dependencies)!=null?o:[]),params:new Set((u=n==null?void 0:n.params)!=null?u:[]),parent:!!(n!=null&&n.parent),route:!!(n!=null&&n.route),url:!!(n!=null&&n.url)}}function Se(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const o=document.body,u=o.getAttribute("tabindex");o.tabIndex=-1,o.focus({preventScroll:!0,focusVisible:!1}),u!==null?o.setAttribute("tabindex",u):o.removeAttribute("tabindex");const i=getSelection();if(i&&i.type!=="None"){const h=[];for(let f=0;f<i.rangeCount;f+=1)h.push(i.getRangeAt(f));setTimeout(()=>{if(i.rangeCount===h.length){for(let f=0;f<i.rangeCount;f+=1){const S=h[f],l=i.getRangeAt(f);if(S.commonAncestorContainer!==l.commonAncestorContainer||S.startContainer!==l.startContainer||S.endContainer!==l.endContainer||S.startOffset!==l.startOffset||S.endOffset!==l.endOffset)return}i.removeAllRanges()}})}}}async function Ut(n,o,u){const i=Lt(n,o);Qe({client:i}),u?await i._hydrate(u):i.goto(location.href,{replaceState:!0}),i._start_router()}export{Ut as start};
