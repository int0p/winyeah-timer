import{w as u}from"./index.625a0d17.js";var p,h;const w=(h=(p=globalThis.__sveltekit_nb7lme)==null?void 0:p.base)!=null?h:"";var g,b;const E=(b=(g=globalThis.__sveltekit_nb7lme)==null?void 0:g.assets)!=null?b:w,A="1686410021158",I="sveltekit:snapshot",S="sveltekit:scroll",x="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function O(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function U(){return{x:pageXOffset,y:pageYOffset}}function c(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function v(e){var n;let t=(n=e.assignedSlot)!=null?n:e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function L(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=v(e)}}function N(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,a=!n||!!o||T(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),r=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:a,target:o,download:r}}function P(e){let t=null,n=null,o=null,a=null,r=null,l=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=c(s,"preload-code")),a===null&&(a=c(s,"preload-data")),t===null&&(t=c(s,"keepfocus")),n===null&&(n=c(s,"noscroll")),r===null&&(r=c(s,"reload")),l===null&&(l=c(s,"replacestate")),s=v(s);function i(m){switch(m){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:d[o!=null?o:"off"],preload_data:d[a!=null?a:"off"],keep_focus:i(t),noscroll:i(n),reload:i(r),replace_state:i(l)}}function _(e){const t=u(e);let n=!0;function o(){n=!0,t.update(l=>l)}function a(l){n=!1,t.set(l)}function r(l){let s;return t.subscribe(i=>{(s===void 0||n&&i!==s)&&l(s=i)})}return{notify:o,set:a,subscribe:r}}function R(){const{set:e,subscribe:t}=u(!1);let n;async function o(){clearTimeout(n);try{const a=await fetch(`${E}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const l=(await a.json()).version!==A;return l&&(e(!0),clearTimeout(n)),l}catch{return!1}}return{subscribe:t,check:o}}function T(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let k;function V(e){k=e.client}function Y(e){return(...t)=>k[e](...t)}const j={url:_({}),page:_({}),navigating:u(null),updated:R()};export{x as I,f as P,S,I as a,N as b,P as c,U as d,w as e,L as f,O as g,V as h,T as i,Y as j,j as s};
