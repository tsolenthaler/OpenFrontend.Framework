(()=>{"use strict";var e,t,r={},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return r[e].call(a.exports,a,a.exports,o),a.exports}function a(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default";e.length>0&&t().then((function(t){return t[r]&&t[r](e)}))}o.m=r,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>(({406:"open-frontend-tabs",910:"open-frontend-highlight"}[e]||e)+".js"),o.miniCssF=e=>"open-frontend-highlight.css",o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="openfrontend-framework:",o.l=(r,n,a,i)=>{if(e[r])e[r].push(n);else{var l,d;if(void 0!==a)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var f=u[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+a){l=f;break}}l||(d=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",t+a),l.src=r),e[r]=[n];var c=(t,n)=>{l.onerror=l.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=c.bind(null,l.onerror),l.onload=c.bind(null,l.onload),d&&document.head.appendChild(l)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/",(()=>{if("undefined"!=typeof document){var e=e=>new Promise(((t,r)=>{var n=o.miniCssF(e),a=o.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===t)return i}})(n,a))return t();((e,t,r,n,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=r=>{if(a.onerror=a.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=l,a.parentNode.removeChild(a),o(d)}},a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a)})(e,a,null,t,r)})),t={754:0};o.f.miniCss=(r,n)=>{t[r]?n.push(t[r]):0!==t[r]&&{910:1}[r]&&n.push(t[r]=e(r).then((()=>{t[r]=0}),(e=>{throw delete t[r],e})))}}})(),(()=>{var e={754:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=a);var i=o.p+o.u(t),l=new Error;o.l(i,(r=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,a,[i,l,d]=r,u=0;if(i.some((t=>0!==e[t]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(d)d(o)}for(t&&t(r);u<i.length;u++)a=i[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunkopenfrontend_framework=self.webpackChunkopenfrontend_framework||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),document.addEventListener("DOMContentLoaded",(function(){a(document.querySelectorAll("[data-bs-toggle]"),(function(){return o.e(406).then(o.bind(o,6385))})),a(document.querySelectorAll("[data-of-highlight]"),(function(){return Promise.all([o.e(228),o.e(910)]).then(o.bind(o,5341))}))}))})();