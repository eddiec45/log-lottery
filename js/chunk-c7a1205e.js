import{u as e,o as t,n,w as o,g as r,a as i,i as l,r as u,b as a,c as s,d as c,e as d,s as f}from"./chunk-6addeafd.js";function v(e){return!!r()&&(i(e),!0)}function m(t){return"function"==typeof t?t():e(t)}const p="undefined"!=typeof window&&"undefined"!=typeof document;"undefined"!=typeof WorkerGlobalScope&&(globalThis,WorkerGlobalScope);const g=Object.prototype.toString,h=e=>"[object Object]"===g.call(e),w=()=>{},y=b();function b(){var e,t;return p&&(null==(e=null==window?void 0:window.navigator)?void 0:e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||(null==(t=null==window?void 0:window.navigator)?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(null==window?void 0:window.navigator.userAgent))}function S(e,t){return function(...n){return new Promise(((o,r)=>{Promise.resolve(e((()=>t.apply(this,n)),{fn:t,thisArg:this,args:n})).then(o).catch(r)}))}}const A=e=>e();function x(e,t=200,n={}){return S(function(e,t={}){let n,o,r=w;const i=e=>{clearTimeout(e),r(),r=w};return l=>{const u=m(e),a=m(t.maxWait);return n&&i(n),u<=0||void 0!==a&&a<=0?(o&&(i(o),o=null),Promise.resolve(l())):new Promise(((e,s)=>{r=t.rejectOnCancel?s:e,a&&!o&&(o=setTimeout((()=>{n&&i(n),o=null,e(l())}),a)),n=setTimeout((()=>{o&&i(o),o=null,e(l())}),u)}))}}(t,n),e)}function E(e,t=200,n=!1,o=!0,r=!1){return S(function(...e){let t,n,o,r,i,u,a=0,s=!0,c=w;l(e[0])||"object"!=typeof e[0]?[o,r=!0,i=!0,u=!1]=e:({delay:o,trailing:r=!0,leading:i=!0,rejectOnCancel:u=!1}=e[0]);const d=()=>{t&&(clearTimeout(t),t=void 0,c(),c=w)};return e=>{const l=m(o),f=Date.now()-a,v=()=>n=e();return d(),l<=0?(a=Date.now(),v()):(f>l&&(i||!s)?(a=Date.now(),v()):r&&(n=new Promise(((e,n)=>{c=u?n:e,t=setTimeout((()=>{a=Date.now(),s=!0,e(v()),d()}),Math.max(0,l-f))}))),i||t||(t=setTimeout((()=>s=!0),l)),s=!1,n)}}(t,n,o,r),e)}function T(e,t,n={}){const{eventFilter:r,...i}=n,{eventFilter:l,pause:s,resume:c,isActive:d}=function(e=A){const t=u(!0);return{isActive:a(t),pause:function(){t.value=!1},resume:function(){t.value=!0},eventFilter:(...n)=>{t.value&&e(...n)}}}(r),f=function(e,t,n={}){const{eventFilter:r=A,...i}=n;return o(e,S(r,t),i)}(e,t,{...i,eventFilter:l});return{stop:f,pause:s,resume:c,isActive:d}}function O(e,o=!0,r){const i=function(e){return e||s()}();i?t(e,r):o?e():n(e)}function P(e,t,r){const i=o(e,((e,o,l)=>{e&&((null==r?void 0:r.once)&&n((()=>i())),t(e,o,l))}),{...r,once:!1});return i}function D(e){var t;const n=m(e);return null!=(t=null==n?void 0:n.$el)?t:n}const j=p?window:void 0,M=p?window.navigator:void 0;function N(...e){let t,n,r,i;if("string"==typeof e[0]||Array.isArray(e[0])?([n,r,i]=e,t=j):[t,n,r,i]=e,!t)return w;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const l=[],u=()=>{l.forEach((e=>e())),l.length=0},a=o((()=>[D(t),m(i)]),(([e,t])=>{if(u(),!e)return;const o=h(t)?{...t}:t;l.push(...n.flatMap((t=>r.map((n=>((e,t,n,o)=>(e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)))(e,t,n,o))))))}),{immediate:!0,flush:"post"}),s=()=>{a(),u()};return v(s),s}let k=!1;function C(e,t,n={}){const{window:o=j,ignore:r=[],capture:i=!0,detectIframe:l=!1}=n;if(!o)return w;y&&!k&&(k=!0,Array.from(o.document.body.children).forEach((e=>e.addEventListener("click",w))),o.document.documentElement.addEventListener("click",w));let u=!0;const a=e=>r.some((t=>{if("string"==typeof t)return Array.from(o.document.querySelectorAll(t)).some((t=>t===e.target||e.composedPath().includes(t)));{const n=D(t);return n&&(e.target===n||e.composedPath().includes(n))}})),s=[N(o,"click",(n=>{const o=D(e);o&&o!==n.target&&!n.composedPath().includes(o)&&(0===n.detail&&(u=!a(n)),u?t(n):u=!0)}),{passive:!0,capture:i}),N(o,"pointerdown",(t=>{const n=D(e);u=!a(t)&&!(!n||t.composedPath().includes(n))}),{passive:!0}),l&&N(o,"blur",(n=>{setTimeout((()=>{var r;const i=D(e);"IFRAME"!==(null==(r=o.document.activeElement)?void 0:r.tagName)||(null==i?void 0:i.contains(o.document.activeElement))||t(n)}),0)}))].filter(Boolean);return()=>s.forEach((e=>e()))}function F(e){const n=function(){const e=u(!1),n=s();return n&&t((()=>{e.value=!0}),n),e}();return c((()=>(n.value,Boolean(e()))))}function I(e,t={}){const{controls:n=!1,navigator:o=M}=t,r=F((()=>o&&"permissions"in o));let i;const l="string"==typeof e?{name:e}:e,a=u(),s=()=>{i&&(a.value=i.state)},c=function(e){let t;function n(){return t||(t=e()),t}return n.reset=async()=>{const e=t;t=void 0,e&&await e},n}((async()=>{if(r.value){if(!i)try{i=await o.permissions.query(l),N(i,"change",s),s()}catch(e){a.value="prompt"}return i}}));return c(),n?{state:a,isSupported:r,query:c}:a}function z(e={}){const{navigator:t=M,read:n=!1,source:o,copiedDuring:r=1500,legacy:i=!1}=e,l=F((()=>t&&"clipboard"in t)),s=I("clipboard-read"),d=I("clipboard-write"),f=c((()=>l.value||i)),g=u(""),h=u(!1),w=function(e,t,n={}){const{immediate:o=!0}=n,r=u(!1);let i=null;function l(){i&&(clearTimeout(i),i=null)}function s(){r.value=!1,l()}function c(...n){l(),r.value=!0,i=setTimeout((()=>{r.value=!1,i=null,e(...n)}),m(t))}return o&&(r.value=!0,p&&c()),v(s),{isPending:a(r),start:c,stop:s}}((()=>h.value=!1),r);function y(e){return"granted"===e||"prompt"===e}return f.value&&n&&N(["copy","cut"],(function(){var e,n,o;l.value&&y(s.value)?t.clipboard.readText().then((e=>{g.value=e})):g.value=null!=(o=null==(n=null==(e=null==document?void 0:document.getSelection)?void 0:e.call(document))?void 0:n.toString())?o:""})),{isSupported:f,text:g,copied:h,copy:async function(e=m(o)){f.value&&null!=e&&(l.value&&y(d.value)?await t.clipboard.writeText(e):function(e){const t=document.createElement("textarea");t.value=null!=e?e:"",t.style.position="absolute",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()}(e),g.value=e,h.value=!0,w.start())}}}const L="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},R="__vueuse_ssr_handlers__",W=B();function B(){return R in L||(L[R]=L[R]||{}),L[R]}const J={boolean:{read:e=>"true"===e,write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},_="vueuse-storage";function H(e,t,o,r={}){var i;const{flush:l="pre",deep:a=!0,listenToStorageChanges:s=!0,writeDefaults:c=!0,mergeDefaults:d=!1,shallow:v,window:p=j,eventFilter:g,onError:h=(e=>{}),initOnMounted:w}=r,y=(v?f:u)("function"==typeof t?t():t);if(!o)try{o=function(e,t){return W[e]||t}("getDefaultStorage",(()=>{var e;return null==(e=j)?void 0:e.localStorage}))()}catch(k){h(k)}if(!o)return y;const b=m(t),S=function(e){return null==e?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":"boolean"==typeof e?"boolean":"string"==typeof e?"string":"object"==typeof e?"object":Number.isNaN(e)?"any":"number"}(b),A=null!=(i=r.serializer)?i:J[S],{pause:x,resume:E}=T(y,(()=>function(t){try{const n=o.getItem(e);if(null==t)P(n,null),o.removeItem(e);else{const r=A.write(t);n!==r&&(o.setItem(e,r),P(n,r))}}catch(k){h(k)}}(y.value)),{flush:l,deep:a,eventFilter:g});function P(t,n){p&&p.dispatchEvent(new CustomEvent(_,{detail:{key:e,oldValue:t,newValue:n,storageArea:o}}))}function D(t){if(!t||t.storageArea===o)if(t&&null==t.key)y.value=b;else if(!t||t.key===e){x();try{(null==t?void 0:t.newValue)!==A.write(y.value)&&(y.value=function(t){const n=t?t.newValue:o.getItem(e);if(null==n)return c&&null!=b&&o.setItem(e,A.write(b)),b;if(!t&&d){const e=A.read(n);return"function"==typeof d?d(e,b):"object"!==S||Array.isArray(e)?e:{...b,...e}}return"string"!=typeof n?n:A.read(n)}(t))}catch(k){h(k)}finally{t?n(E):E()}}}function M(e){D(e.detail)}return p&&s&&O((()=>{N(p,"storage",D),N(p,_,M),w&&D()})),w||D(),y}function V(e,t={width:0,height:0},n={}){const{window:r=j,box:i="content-box"}=n,l=c((()=>{var t,n;return null==(n=null==(t=D(e))?void 0:t.namespaceURI)?void 0:n.includes("svg")})),a=u(t.width),s=u(t.height),{stop:d}=function(e,t,n={}){const{window:r=j,...i}=n;let l;const u=F((()=>r&&"ResizeObserver"in r)),a=()=>{l&&(l.disconnect(),l=void 0)},s=c((()=>Array.isArray(e)?e.map((e=>D(e))):[D(e)])),d=o(s,(e=>{if(a(),u.value&&r){l=new ResizeObserver(t);for(const t of e)t&&l.observe(t,i)}}),{immediate:!0,flush:"post"}),f=()=>{a(),d()};return v(f),{isSupported:u,stop:f}}(e,(([t])=>{const n="border-box"===i?t.borderBoxSize:"content-box"===i?t.contentBoxSize:t.devicePixelContentBoxSize;if(r&&l.value){const t=D(e);if(t){const e=t.getBoundingClientRect();a.value=e.width,s.value=e.height}}else if(n){const e=Array.isArray(n)?n:[n];a.value=e.reduce(((e,{inlineSize:t})=>e+t),0),s.value=e.reduce(((e,{blockSize:t})=>e+t),0)}else a.value=t.contentRect.width,s.value=t.contentRect.height}),n);O((()=>{const n=D(e);n&&(a.value="offsetWidth"in n?n.offsetWidth:t.width,s.value="offsetHeight"in n?n.offsetHeight:t.height)}));const f=o((()=>D(e)),(e=>{a.value=e?t.width:0,s.value=e?t.height:0}));return{width:a,height:s,stop:function(){d(),f()}}}function q(e,t={}){const{throttle:n=0,idle:o=200,onStop:r=w,onScroll:i=w,offset:l={left:0,right:0,top:0,bottom:0},eventListenerOptions:a={capture:!1,passive:!0},behavior:s="auto",window:f=j,onError:v=(e=>{})}=t,p=u(0),g=u(0),h=c({get:()=>p.value,set(e){b(e,void 0)}}),y=c({get:()=>g.value,set(e){b(void 0,e)}});function b(t,n){var o,r,i,l;if(!f)return;const u=m(e);if(!u)return;null==(i=u instanceof Document?f.document.body:u)||i.scrollTo({top:null!=(o=m(n))?o:y.value,left:null!=(r=m(t))?r:h.value,behavior:m(s)});const a=(null==(l=null==u?void 0:u.document)?void 0:l.documentElement)||(null==u?void 0:u.documentElement)||u;null!=h&&(p.value=a.scrollLeft),null!=y&&(g.value=a.scrollTop)}const S=u(!1),A=d({left:!0,right:!1,top:!0,bottom:!1}),T=d({left:!1,right:!1,top:!1,bottom:!1}),P=e=>{S.value&&(S.value=!1,T.left=!1,T.right=!1,T.top=!1,T.bottom=!1,r(e))},M=x(P,n+o),k=e=>{var t;if(!f)return;const n=(null==(t=null==e?void 0:e.document)?void 0:t.documentElement)||(null==e?void 0:e.documentElement)||D(e),{display:o,flexDirection:r}=getComputedStyle(n),i=n.scrollLeft;T.left=i<p.value,T.right=i>p.value;const u=Math.abs(i)<=(l.left||0),a=Math.abs(i)+n.clientWidth>=n.scrollWidth-(l.right||0)-1;"flex"===o&&"row-reverse"===r?(A.left=a,A.right=u):(A.left=u,A.right=a),p.value=i;let s=n.scrollTop;e!==f.document||s||(s=f.document.body.scrollTop),T.top=s<g.value,T.bottom=s>g.value;const c=Math.abs(s)<=(l.top||0),d=Math.abs(s)+n.clientHeight>=n.scrollHeight-(l.bottom||0)-1;"flex"===o&&"column-reverse"===r?(A.top=d,A.bottom=c):(A.top=c,A.bottom=d),g.value=s},C=e=>{var t;if(!f)return;const n=null!=(t=e.target.documentElement)?t:e.target;k(n),S.value=!0,M(e),i(e)};return N(e,"scroll",n?E(C,n,!0,!1):C,a),O((()=>{try{const t=m(e);if(!t)return;k(t)}catch(t){v(t)}})),N(e,"scrollend",P,a),{x:h,y:y,isScrolling:S,arrivedState:A,directions:T,measure(){const t=m(e);f&&t&&k(t)}}}function G(e,t,n={}){const{window:o=j}=n;return H(e,t,null==o?void 0:o.localStorage,n)}export{x as a,G as b,q as c,V as d,C as o,O as t,z as u,P as w};
