let t,e,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l),ce:(t,e)=>new CustomEvent(t,e)},r=t=>Promise.resolve(t),c=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(t){}return!1})(),i=(t,e,n)=>{n&&n.map((([n,l,s])=>{const r=t,c=u(e,s),i=a(n);o.ael(r,l,c,i),(e.o=e.o||[]).push((()=>o.rel(r,l,c,i)))}))},u=(t,e)=>n=>{try{256&t.t?t.i[e](n):(t.u=t.u||[]).push([e,n])}catch(t){D(t)}},a=t=>0!=(2&t),f=new WeakMap,h=t=>"sc-"+t.h,$={},y=t=>"object"==(t=typeof t)||"function"===t,d=(t,e,...n)=>{let l=null,s=!1,o=!1;const r=[],c=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof t&&!y(l))&&(l+=""),s&&o?r[r.length-1].$+=l:r.push(s?m(null,l):l),o=s)};c(n);const i=m(t,null);return i.m=e,r.length>0&&(i.p=r),i},m=(t,e)=>({t:0,S:t,$:e,g:null,p:null,m:null}),p={},b=(t,e,n,s,r,c)=>{if(n!==s){let i=B(t,e),u=e.toLowerCase();if(i||"o"!==e[0]||"n"!==e[1]){const l=y(s);if((i||l&&null!==s)&&!r)try{if(t.tagName.includes("-"))t[e]=s;else{const l=null==s?"":s;"list"===e?i=!1:null!=n&&t[e]==l||(t[e]=l)}}catch(t){}null==s||!1===s?!1===s&&""!==t.getAttribute(e)||t.removeAttribute(e):(!i||4&c||r)&&!l&&t.setAttribute(e,s=!0===s?"":s)}else e="-"===e[2]?e.slice(3):B(l,u)?u.slice(2):u[2]+e.slice(3),n&&o.rel(t,e,n,!1),s&&o.ael(t,e,s,!1)}},w=(t,e,n,l)=>{const s=11===e.g.nodeType&&e.g.host?e.g.host:e.g,o=t&&t.m||$,r=e.m||$;for(l in o)l in r||b(s,l,o[l],void 0,n,e.t);for(l in r)b(s,l,o[l],r[l],n,e.t)},S=(e,n,l)=>{const o=n.p[l];let r,c,i=0;if(null!==o.$)r=o.g=s.createTextNode(o.$);else if(r=o.g=s.createElement(o.S),w(null,o,!1),null!=t&&r["s-si"]!==t&&r.classList.add(r["s-si"]=t),o.p)for(i=0;i<o.p.length;++i)c=S(e,o,i),c&&r.appendChild(c);return r},g=(t,n,l,s,o,r)=>{let c,i=t;for(i.shadowRoot&&i.tagName===e&&(i=i.shadowRoot);o<=r;++o)s[o]&&(c=S(null,l,o),c&&(s[o].g=c,i.insertBefore(c,n)))},v=(t,e,n,l)=>{for(;e<=n;++e)(l=t[e])&&l.g.remove()},M=(t,e)=>t.S===e.S,j=(t,e)=>{const n=e.g=t.g,l=t.p,s=e.p,o=e.$;null===o?(w(t,e,!1),null!==l&&null!==s?((t,e,n,l)=>{let s,o=0,r=0,c=e.length-1,i=e[0],u=e[c],a=l.length-1,f=l[0],h=l[a];for(;o<=c&&r<=a;)null==i?i=e[++o]:null==u?u=e[--c]:null==f?f=l[++r]:null==h?h=l[--a]:M(i,f)?(j(i,f),i=e[++o],f=l[++r]):M(u,h)?(j(u,h),u=e[--c],h=l[--a]):M(i,h)?(j(i,h),t.insertBefore(i.g,u.g.nextSibling),i=e[++o],h=l[--a]):M(u,f)?(j(u,f),t.insertBefore(u.g,i.g),u=e[--c],f=l[++r]):(s=S(e&&e[r],n,r),f=l[++r],s&&i.g.parentNode.insertBefore(s,i.g));o>c?g(t,null==l[a+1]?null:l[a+1].g,n,l,r,a):r>a&&v(e,o,c)})(n,l,e,s):null!==s?(null!==t.$&&(n.textContent=""),g(n,null,e,s,0,s.length-1)):null!==l&&v(l,0,l.length-1)):t.$!==o&&(n.data=o)},k=t=>V(t).v,C=(t,e,n)=>{const l=k(t);return{emit:t=>O(l,e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t})}},O=(t,e,n)=>{const l=o.ce(e,n);return t.dispatchEvent(l),l},P=(t,e)=>{e&&!t.M&&e["s-p"]&&e["s-p"].push(new Promise((e=>t.M=e)))},x=(t,e)=>{if(t.t|=16,!(4&t.t))return P(t,t.j),et((()=>E(t,e)));t.t|=512},E=(t,e)=>{const n=t.i;let l;return e&&(t.t|=256,t.u&&(t.u.map((([t,e])=>A(n,t,e))),t.u=null),l=A(n,"componentWillLoad")),H(l,(()=>L(t,n,e)))},L=async(t,e,n)=>{const l=t.v,o=l["s-rc"];n&&(t=>{const e=t.k,n=t.v,l=e.t,o=((t,e)=>{let n=h(e);const l=J.get(n);if(t=11===t.nodeType?t:s,l)if("string"==typeof l){let e,o=f.get(t=t.head||t);o||f.set(t,o=new Set),o.has(n)||(e=s.createElement("style"),e.innerHTML=l,t.insertBefore(e,t.querySelector("link")),o&&o.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),e);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(t);N(t,e),o&&(o.map((t=>t())),l["s-rc"]=void 0);{const e=l["s-p"],n=()=>T(t);0===e.length?n():(Promise.all(e).then(n),t.t|=4,e.length=0)}},N=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const s=n.v,o=n.k,r=n.C||m(null,null),c=(t=>t&&t.S===p)(l)?l:d(null,null,l);e=s.tagName,o.O&&(c.m=c.m||{},o.O.map((([t,e])=>c.m[e]=s[t]))),c.S=null,c.t|=4,n.C=c,c.g=r.g=s.shadowRoot||s,t=s["s-sc"],j(r,c)})(n,l)}catch(t){D(t,n.v)}return null},T=t=>{const e=t.v,n=t.j;64&t.t||(t.t|=64,R(e),t.P(e),n||W()),t.M&&(t.M(),t.M=void 0),512&t.t&&tt((()=>x(t,!1))),t.t&=-517},W=()=>{R(s.documentElement),tt((()=>O(l,"appload",{detail:{namespace:"input-min-plus"}})))},A=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(t){D(t)}},H=(t,e)=>t&&t.then?t.then(e):e(),R=t=>t.classList.add("hydrated"),U=(t,e,n)=>{if(e.L){t.watchers&&(e.N=t.watchers);const l=Object.entries(e.L),s=t.prototype;if(l.map((([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,t,{get(){return((t,e)=>V(this).T.get(e))(0,t)},set(n){((t,e,n,l)=>{const s=V(t),o=s.v,r=s.T.get(e),c=s.t,i=s.i;if(n=(t=>(null==t||y(t),t))(n),(!(8&c)||void 0===r)&&n!==r&&(!Number.isNaN(r)||!Number.isNaN(n))&&(s.T.set(e,n),i)){if(l.N&&128&c){const t=l.N[e];t&&t.map((t=>{try{i[t](n,r,e)}catch(t){D(t,o)}}))}2==(18&c)&&x(s,!1)}})(this,t,n,e)},configurable:!0,enumerable:!0})})),1&n){const n=new Map;s.attributeChangedCallback=function(t,e,l){o.jmp((()=>{const e=n.get(t);if(this.hasOwnProperty(e))l=this[e],delete this[e];else if(s.hasOwnProperty(e)&&"number"==typeof this[e]&&this[e]==l)return;this[e]=(null!==l||"boolean"!=typeof this[e])&&l}))},t.observedAttributes=l.filter((([t,e])=>15&e[0])).map((([t,l])=>{const s=l[1]||t;return n.set(s,t),512&l[0]&&e.O.push([t,s]),s}))}}return t},q=(t,e={})=>{const n=[],r=e.exclude||[],u=l.customElements,a=s.head,f=a.querySelector("meta[charset]"),$=s.createElement("style"),y=[];let d,m=!0;Object.assign(o,e),o.l=new URL(e.resourcesUrl||"./",s.baseURI).href,t.map((t=>{t[1].map((e=>{const l={t:e[0],h:e[1],L:e[2],W:e[3]};l.L=e[2],l.W=e[3],l.O=[],l.N={};const s=l.h,a=class extends HTMLElement{constructor(t){super(t),z(t=this,l),1&l.t&&t.attachShadow({mode:"open"})}connectedCallback(){d&&(clearTimeout(d),d=null),m?y.push(this):o.jmp((()=>(t=>{if(0==(1&o.t)){const e=V(t),n=e.k,l=()=>{};if(1&e.t)i(t,e,n.W);else{e.t|=1;{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){P(e,e.j=n);break}}n.L&&Object.entries(n.L).map((([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}})),(async(t,e,n,l,s)=>{if(0==(32&e.t)){{if(e.t|=32,(s=I(n)).then){const t=()=>{};s=await s,t()}s.isProxied||(n.N=s.watchers,U(s,n,2),s.isProxied=!0);const t=()=>{};e.t|=8;try{new s(e)}catch(t){D(t)}e.t&=-9,e.t|=128,t()}if(s.style){let t=s.style;const e=h(n);if(!J.has(e)){const l=()=>{};((t,e,n)=>{let l=J.get(t);c&&n?(l=l||new CSSStyleSheet,"string"==typeof l?l=e:l.replaceSync(e)):l=e,J.set(t,l)})(e,t,!!(1&n.t)),l()}}}const o=e.j,r=()=>x(e,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,e,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>(()=>{if(0==(1&o.t)){const t=V(this);t.o&&(t.o.map((t=>t())),t.o=void 0)}})()))}componentOnReady(){return V(this).A}};l.H=t[0],r.includes(s)||u.get(s)||(n.push(s),u.define(s,U(a,l,1)))}))})),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),a.insertBefore($,f?f.nextSibling:a.firstChild),m=!1,y.length?y.map((t=>t.connectedCallback())):o.jmp((()=>d=setTimeout(W,30)))},F=new WeakMap,V=t=>F.get(t),_=(t,e)=>F.set(e.i=t,e),z=(t,e)=>{const n={t:0,v:t,k:e,T:new Map};return n.A=new Promise((t=>n.P=t)),t["s-p"]=[],t["s-rc"]=[],i(t,n,e.W),F.set(t,n)},B=(t,e)=>e in t,D=(t,e)=>(0,console.error)(t,e),G=new Map,I=t=>{const e=t.h.replace(/-/g,"_"),n=t.H,l=G.get(n);return l?l[e]:import(`./${n}.entry.js`).then((t=>(G.set(n,t),t[e])),D)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},J=new Map,K=[],Q=[],X=(t,e)=>l=>{t.push(l),n||(n=!0,e&&4&o.t?tt(Z):o.raf(Z))},Y=t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(t){D(t)}t.length=0},Z=()=>{Y(K),Y(Q),(n=K.length>0)&&o.raf(Z)},tt=t=>r().then(t),et=X(Q,!0);export{p as H,q as b,C as c,k as g,d as h,r as p,_ as r}