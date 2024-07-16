/*! @license DOMPurify 3.1.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.4/LICENSE */
const{entries:e,setPrototypeOf:t,isFrozen:n,getPrototypeOf:o,getOwnPropertyDescriptor:r}=Object;let{freeze:i,seal:a,create:l}=Object,{apply:c,construct:s}="undefined"!=typeof Reflect&&Reflect;i||(i=function(e){return e}),a||(a=function(e){return e}),c||(c=function(e,t,n){return e.apply(t,n)}),s||(s=function(e,t){return new e(...t)});const u=S(Array.prototype.forEach),m=S(Array.prototype.pop),p=S(Array.prototype.push),f=S(String.prototype.toLowerCase),d=S(String.prototype.toString),h=S(String.prototype.match),g=S(String.prototype.replace),_=S(String.prototype.indexOf),T=S(String.prototype.trim),y=S(Object.prototype.hasOwnProperty),E=S(RegExp.prototype.test),A=(N=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return s(N,t)});var N;function b(e){return"number"==typeof e&&isNaN(e)}function S(e){return function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return c(e,t,o)}}function R(e,o){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f;t&&t(e,null);let i=o.length;for(;i--;){let t=o[i];if("string"==typeof t){const e=r(t);e!==t&&(n(o)||(o[i]=e),t=e)}e[t]=!0}return e}function v(e){for(let t=0;t<e.length;t++){y(e,t)||(e[t]=null)}return e}function C(t){const n=l(null);for(const[o,r]of e(t)){y(t,o)&&(Array.isArray(r)?n[o]=v(r):r&&"object"==typeof r&&r.constructor===Object?n[o]=C(r):n[o]=r)}return n}function w(e,t){for(;null!==e;){const n=r(e,t);if(n){if(n.get)return S(n.get);if("function"==typeof n.value)return S(n.value)}e=o(e)}return function(){return null}}const L=i(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),D=i(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),O=i(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),x=i(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),k=i(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),I=i(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),M=i(["#text"]),U=i(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),P=i(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),F=i(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),H=i(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),z=a(/\{\{[\w\W]*|[\w\W]*\}\}/gm),B=a(/<%[\w\W]*|[\w\W]*%>/gm),W=a(/\${[\w\W]*}/gm),G=a(/^data-[\-\w.\u00B7-\uFFFF]/),Y=a(/^aria-[\-\w]+$/),j=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),X=a(/^(?:\w+script|data):/i),q=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),$=a(/^html$/i),K=a(/^[a-z][.\w]*(-[.\w]+)+$/i);var V=Object.freeze({__proto__:null,MUSTACHE_EXPR:z,ERB_EXPR:B,TMPLIT_EXPR:W,DATA_ATTR:G,ARIA_ATTR:Y,IS_ALLOWED_URI:j,IS_SCRIPT_OR_DATA:X,ATTR_WHITESPACE:q,DOCTYPE_NAME:$,CUSTOM_ELEMENT:K});const Z=1,J=3,Q=7,ee=8,te=9;var ne=function t(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"undefined"==typeof window?null:window;const o=e=>t(e);if(o.version="3.1.4",o.removed=[],!n||!n.document||n.document.nodeType!==te)return o.isSupported=!1,o;let{document:r}=n;const a=r,c=a.currentScript,{DocumentFragment:s,HTMLTemplateElement:N,Node:S,Element:v,NodeFilter:z,NamedNodeMap:B=n.NamedNodeMap||n.MozNamedAttrMap,HTMLFormElement:W,DOMParser:G,trustedTypes:Y}=n,X=v.prototype,q=w(X,"cloneNode"),K=w(X,"nextSibling"),ne=w(X,"childNodes"),oe=w(X,"parentNode");if("function"==typeof N){const e=r.createElement("template");e.content&&e.content.ownerDocument&&(r=e.content.ownerDocument)}let re,ie="";const{implementation:ae,createNodeIterator:le,createDocumentFragment:ce,getElementsByTagName:se}=r,{importNode:ue}=a;let me={};o.isSupported="function"==typeof e&&"function"==typeof oe&&ae&&void 0!==ae.createHTMLDocument;const{MUSTACHE_EXPR:pe,ERB_EXPR:fe,TMPLIT_EXPR:de,DATA_ATTR:he,ARIA_ATTR:ge,IS_SCRIPT_OR_DATA:_e,ATTR_WHITESPACE:Te,CUSTOM_ELEMENT:ye}=V;let{IS_ALLOWED_URI:Ee}=V,Ae=null;const Ne=R({},[...L,...D,...O,...k,...M]);let be=null;const Se=R({},[...U,...P,...F,...H]);let Re=Object.seal(l(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ve=null,Ce=null,we=!0,Le=!0,De=!1,Oe=!0,xe=!1,ke=!0,Ie=!1,Me=!1,Ue=!1,Pe=!1,Fe=!1,He=!1,ze=!0,Be=!1,We=!0,Ge=!1,Ye={},je=null;const Xe=R({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let qe=null;const $e=R({},["audio","video","img","source","image","track"]);let Ke=null;const Ve=R({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ze="http://www.w3.org/1998/Math/MathML",Je="http://www.w3.org/2000/svg",Qe="http://www.w3.org/1999/xhtml";let et=Qe,tt=!1,nt=null;const ot=R({},[Ze,Je,Qe],d);let rt=null;const it=["application/xhtml+xml","text/html"];let at=null,lt=null;const ct=r.createElement("form"),st=function(e){return e instanceof RegExp||e instanceof Function},ut=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!lt||lt!==e){if(e&&"object"==typeof e||(e={}),e=C(e),rt=-1===it.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,at="application/xhtml+xml"===rt?d:f,Ae=y(e,"ALLOWED_TAGS")?R({},e.ALLOWED_TAGS,at):Ne,be=y(e,"ALLOWED_ATTR")?R({},e.ALLOWED_ATTR,at):Se,nt=y(e,"ALLOWED_NAMESPACES")?R({},e.ALLOWED_NAMESPACES,d):ot,Ke=y(e,"ADD_URI_SAFE_ATTR")?R(C(Ve),e.ADD_URI_SAFE_ATTR,at):Ve,qe=y(e,"ADD_DATA_URI_TAGS")?R(C($e),e.ADD_DATA_URI_TAGS,at):$e,je=y(e,"FORBID_CONTENTS")?R({},e.FORBID_CONTENTS,at):Xe,ve=y(e,"FORBID_TAGS")?R({},e.FORBID_TAGS,at):{},Ce=y(e,"FORBID_ATTR")?R({},e.FORBID_ATTR,at):{},Ye=!!y(e,"USE_PROFILES")&&e.USE_PROFILES,we=!1!==e.ALLOW_ARIA_ATTR,Le=!1!==e.ALLOW_DATA_ATTR,De=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Oe=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,xe=e.SAFE_FOR_TEMPLATES||!1,ke=!1!==e.SAFE_FOR_XML,Ie=e.WHOLE_DOCUMENT||!1,Pe=e.RETURN_DOM||!1,Fe=e.RETURN_DOM_FRAGMENT||!1,He=e.RETURN_TRUSTED_TYPE||!1,Ue=e.FORCE_BODY||!1,ze=!1!==e.SANITIZE_DOM,Be=e.SANITIZE_NAMED_PROPS||!1,We=!1!==e.KEEP_CONTENT,Ge=e.IN_PLACE||!1,Ee=e.ALLOWED_URI_REGEXP||j,et=e.NAMESPACE||Qe,Re=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&st(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Re.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&st(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Re.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Re.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),xe&&(Le=!1),Fe&&(Pe=!0),Ye&&(Ae=R({},M),be=[],!0===Ye.html&&(R(Ae,L),R(be,U)),!0===Ye.svg&&(R(Ae,D),R(be,P),R(be,H)),!0===Ye.svgFilters&&(R(Ae,O),R(be,P),R(be,H)),!0===Ye.mathMl&&(R(Ae,k),R(be,F),R(be,H))),e.ADD_TAGS&&(Ae===Ne&&(Ae=C(Ae)),R(Ae,e.ADD_TAGS,at)),e.ADD_ATTR&&(be===Se&&(be=C(be)),R(be,e.ADD_ATTR,at)),e.ADD_URI_SAFE_ATTR&&R(Ke,e.ADD_URI_SAFE_ATTR,at),e.FORBID_CONTENTS&&(je===Xe&&(je=C(je)),R(je,e.FORBID_CONTENTS,at)),We&&(Ae["#text"]=!0),Ie&&R(Ae,["html","head","body"]),Ae.table&&(R(Ae,["tbody"]),delete ve.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw A('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw A('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');re=e.TRUSTED_TYPES_POLICY,ie=re.createHTML("")}else void 0===re&&(re=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const o="data-tt-policy-suffix";t&&t.hasAttribute(o)&&(n=t.getAttribute(o));const r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:e=>e,createScriptURL:e=>e})}catch(i){return null}}(Y,c)),null!==re&&"string"==typeof ie&&(ie=re.createHTML(""));i&&i(e),lt=e}},mt=R({},["mi","mo","mn","ms","mtext"]),pt=R({},["foreignobject","annotation-xml"]),ft=R({},["title","style","font","a","script"]),dt=R({},[...D,...O,...x]),ht=R({},[...k,...I]),gt=function(e){p(o.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.remove()}},_t=function(e,t){try{p(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch(n){p(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!be[e])if(Pe||Fe)try{gt(t)}catch(n){}else try{t.setAttribute(e,"")}catch(n){}},Tt=function(e){let t=null,n=null;if(Ue)e="<remove></remove>"+e;else{const t=h(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===rt&&et===Qe&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const o=re?re.createHTML(e):e;if(et===Qe)try{t=(new G).parseFromString(o,rt)}catch(a){}if(!t||!t.documentElement){t=ae.createDocument(et,"template",null);try{t.documentElement.innerHTML=tt?ie:o}catch(a){}}const i=t.body||t.documentElement;return e&&n&&i.insertBefore(r.createTextNode(n),i.childNodes[0]||null),et===Qe?se.call(t,Ie?"html":"body")[0]:Ie?t.documentElement:i},yt=function(e){return le.call(e.ownerDocument||e,e,z.SHOW_ELEMENT|z.SHOW_COMMENT|z.SHOW_TEXT|z.SHOW_PROCESSING_INSTRUCTION|z.SHOW_CDATA_SECTION,null)},Et=function(e){return e instanceof W&&(void 0!==e.__depth&&"number"!=typeof e.__depth||void 0!==e.__removalCount&&"number"!=typeof e.__removalCount||"string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof B)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},At=function(e){return"function"==typeof S&&e instanceof S},Nt=function(e,t,n){me[e]&&u(me[e],(e=>{e.call(o,t,n,lt)}))},bt=function(e){let t=null;if(Nt("beforeSanitizeElements",e,null),Et(e))return gt(e),!0;const n=at(e.nodeName);if(Nt("uponSanitizeElement",e,{tagName:n,allowedTags:Ae}),e.hasChildNodes()&&!At(e.firstElementChild)&&E(/<[/\w]/g,e.innerHTML)&&E(/<[/\w]/g,e.textContent))return gt(e),!0;if(e.nodeType===Q)return gt(e),!0;if(ke&&e.nodeType===ee&&E(/<[/\w]/g,e.data))return gt(e),!0;if(!Ae[n]||ve[n]){if(!ve[n]&&Rt(n)){if(Re.tagNameCheck instanceof RegExp&&E(Re.tagNameCheck,n))return!1;if(Re.tagNameCheck instanceof Function&&Re.tagNameCheck(n))return!1}if(We&&!je[n]){const t=oe(e)||e.parentNode,n=ne(e)||e.childNodes;if(n&&t){for(let o=n.length-1;o>=0;--o){const r=q(n[o],!0);r.__removalCount=(e.__removalCount||0)+1,t.insertBefore(r,K(e))}}}return gt(e),!0}return e instanceof v&&!function(e){let t=oe(e);t&&t.tagName||(t={namespaceURI:et,tagName:"template"});const n=f(e.tagName),o=f(t.tagName);return!!nt[e.namespaceURI]&&(e.namespaceURI===Je?t.namespaceURI===Qe?"svg"===n:t.namespaceURI===Ze?"svg"===n&&("annotation-xml"===o||mt[o]):Boolean(dt[n]):e.namespaceURI===Ze?t.namespaceURI===Qe?"math"===n:t.namespaceURI===Je?"math"===n&&pt[o]:Boolean(ht[n]):e.namespaceURI===Qe?!(t.namespaceURI===Je&&!pt[o])&&!(t.namespaceURI===Ze&&!mt[o])&&!ht[n]&&(ft[n]||!dt[n]):!("application/xhtml+xml"!==rt||!nt[e.namespaceURI]))}(e)?(gt(e),!0):"noscript"!==n&&"noembed"!==n&&"noframes"!==n||!E(/<\/no(script|embed|frames)/i,e.innerHTML)?(xe&&e.nodeType===J&&(t=e.textContent,u([pe,fe,de],(e=>{t=g(t,e," ")})),e.textContent!==t&&(p(o.removed,{element:e.cloneNode()}),e.textContent=t)),Nt("afterSanitizeElements",e,null),!1):(gt(e),!0)},St=function(e,t,n){if(ze&&("id"===t||"name"===t)&&(n in r||n in ct||"__depth"===n||"__removalCount"===n))return!1;if(Le&&!Ce[t]&&E(he,t));else if(we&&E(ge,t));else if(!be[t]||Ce[t]){if(!(Rt(e)&&(Re.tagNameCheck instanceof RegExp&&E(Re.tagNameCheck,e)||Re.tagNameCheck instanceof Function&&Re.tagNameCheck(e))&&(Re.attributeNameCheck instanceof RegExp&&E(Re.attributeNameCheck,t)||Re.attributeNameCheck instanceof Function&&Re.attributeNameCheck(t))||"is"===t&&Re.allowCustomizedBuiltInElements&&(Re.tagNameCheck instanceof RegExp&&E(Re.tagNameCheck,n)||Re.tagNameCheck instanceof Function&&Re.tagNameCheck(n))))return!1}else if(Ke[t]);else if(E(Ee,g(n,Te,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==_(n,"data:")||!qe[e]){if(De&&!E(_e,g(n,Te,"")));else if(n)return!1}else;return!0},Rt=function(e){return"annotation-xml"!==e&&h(e,ye)},vt=function(e){Nt("beforeSanitizeAttributes",e,null);const{attributes:t}=e;if(!t)return;const n={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:be};let r=t.length;for(;r--;){const a=t[r],{name:l,namespaceURI:c,value:s}=a,p=at(l);let f="value"===l?s:T(s);if(n.attrName=p,n.attrValue=f,n.keepAttr=!0,n.forceKeepAttr=void 0,Nt("uponSanitizeAttribute",e,n),f=n.attrValue,n.forceKeepAttr)continue;if(_t(l,e),!n.keepAttr)continue;if(!Oe&&E(/\/>/i,f)){_t(l,e);continue}if(ke&&E(/((--!?|])>)|<\/(style|title)/i,f)){_t(l,e);continue}xe&&u([pe,fe,de],(e=>{f=g(f,e," ")}));const d=at(e.nodeName);if(St(d,p,f)){if(!Be||"id"!==p&&"name"!==p||(_t(l,e),f="user-content-"+f),re&&"object"==typeof Y&&"function"==typeof Y.getAttributeType)if(c);else switch(Y.getAttributeType(d,p)){case"TrustedHTML":f=re.createHTML(f);break;case"TrustedScriptURL":f=re.createScriptURL(f)}try{c?e.setAttributeNS(c,l,f):e.setAttribute(l,f),Et(e)?gt(e):m(o.removed)}catch(i){}}}Nt("afterSanitizeAttributes",e,null)},Ct=function e(t){let n=null;const o=yt(t);for(Nt("beforeSanitizeShadowDOM",t,null);n=o.nextNode();){if(Nt("uponSanitizeShadowNode",n,null),bt(n))continue;const t=oe(n);n.nodeType===Z&&(t&&t.__depth?n.__depth=(n.__removalCount||0)+t.__depth+1:n.__depth=1),(n.__depth>=255||n.__depth<0||b(n.__depth))&&gt(n),n.content instanceof s&&(n.content.__depth=n.__depth,e(n.content)),vt(n)}Nt("afterSanitizeShadowDOM",t,null)};return o.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null,r=null,i=null,l=null;if(tt=!e,tt&&(e="\x3c!--\x3e"),"string"!=typeof e&&!At(e)){if("function"!=typeof e.toString)throw A("toString is not a function");if("string"!=typeof(e=e.toString()))throw A("dirty is not a string, aborting")}if(!o.isSupported)return e;if(Me||ut(t),o.removed=[],"string"==typeof e&&(Ge=!1),Ge){if(e.nodeName){const t=at(e.nodeName);if(!Ae[t]||ve[t])throw A("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof S)n=Tt("\x3c!----\x3e"),r=n.ownerDocument.importNode(e,!0),r.nodeType===Z&&"BODY"===r.nodeName||"HTML"===r.nodeName?n=r:n.appendChild(r);else{if(!Pe&&!xe&&!Ie&&-1===e.indexOf("<"))return re&&He?re.createHTML(e):e;if(n=Tt(e),!n)return Pe?null:He?ie:""}n&&Ue&&gt(n.firstChild);const c=yt(Ge?e:n);for(;i=c.nextNode();){if(bt(i))continue;const e=oe(i);i.nodeType===Z&&(e&&e.__depth?i.__depth=(i.__removalCount||0)+e.__depth+1:i.__depth=1),(i.__depth>=255||i.__depth<0||b(i.__depth))&&gt(i),i.content instanceof s&&(i.content.__depth=i.__depth,Ct(i.content)),vt(i)}if(Ge)return e;if(Pe){if(Fe)for(l=ce.call(n.ownerDocument);n.firstChild;)l.appendChild(n.firstChild);else l=n;return(be.shadowroot||be.shadowrootmode)&&(l=ue.call(a,l,!0)),l}let m=Ie?n.outerHTML:n.innerHTML;return Ie&&Ae["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&E($,n.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+n.ownerDocument.doctype.name+">\n"+m),xe&&u([pe,fe,de],(e=>{m=g(m,e," ")})),re&&He?re.createHTML(m):m},o.setConfig=function(){ut(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),Me=!0},o.clearConfig=function(){lt=null,Me=!1},o.isValidAttribute=function(e,t,n){lt||ut({});const o=at(e),r=at(t);return St(o,r,n)},o.addHook=function(e,t){"function"==typeof t&&(me[e]=me[e]||[],p(me[e],t))},o.removeHook=function(e){if(me[e])return m(me[e])},o.removeHooks=function(e){me[e]&&(me[e]=[])},o.removeAllHooks=function(){me={}},o}();export{ne as p};
