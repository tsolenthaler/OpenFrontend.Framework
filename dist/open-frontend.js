(()=>{"use strict";var e,t,r={},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return r[e].call(a.exports,a,a.exports,o),a.exports}o.m=r,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>"open-frontend-tabs.js",o.miniCssF=e=>{},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="openfrontend-framework:",o.l=(r,n,a,i)=>{if(e[r])e[r].push(n);else{var d,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+a){d=f;break}}d||(u=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",t+a),d.src=r),e[r]=[n];var c=(t,n)=>{d.onerror=d.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=c.bind(null,d.onerror),d.onload=c.bind(null,d.onload),u&&document.head.appendChild(d)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/",(()=>{var e={754:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=a);var i=o.p+o.u(t),d=new Error;o.l(i,(r=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,a,[i,d,u]=r,l=0;if(i.some((t=>0!==e[t]))){for(n in d)o.o(d,n)&&(o.m[n]=d[n]);if(u)u(o)}for(t&&t(r);l<i.length;l++)a=i[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunkopenfrontend_framework=self.webpackChunkopenfrontend_framework||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),document.addEventListener("DOMContentLoaded",(function(){!function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default";e.length>0&&t().then((function(t){return t[r]&&t[r](e)}))}(document.querySelectorAll("[data-bs-toggle]"),(function(){return o.e(406).then(o.bind(o,385))}))}))})();