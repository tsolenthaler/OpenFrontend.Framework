"use strict";(self.webpackChunkopenfrontend_framework=self.webpackChunkopenfrontend_framework||[]).push([[644],{5478:(r,t,e)=>{e.r(t),e.d(t,{default:()=>l});var n=e(8527);function o(r){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},o(r)}function i(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function a(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){u(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function u(r,t,e){return(t=function(r){var t=function(r,t){if("object"!==o(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var n=e.call(r,t||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}(r,"string");return"symbol"===o(t)?t:String(t)}(t))in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function c(r,t){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!e){if(Array.isArray(r)||(e=function(r,t){if(!r)return;if("string"==typeof r)return f(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f(r,t)}(r))||t&&r&&"number"==typeof r.length){e&&(r=e);var n=0,o=function(){};return{s:o,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){e=e.call(r)},n:function(){var r=e.next();return a=r.done,r},e:function(r){u=!0,i=r},f:function(){try{a||null==e.return||e.return()}finally{if(u)throw i}}}}function f(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}const l=function(r){var t,e=c(r);try{for(e.s();!(t=e.n()).done;){var o=t.value,i=void 0;try{i=JSON.parse(o.dataset.ofDatepicker||"{}")}catch(r){console.error(r),i={}}(0,n.Z)(o,a({altFormat:"d.m.Y",time_24hr:!0,dateFormat:"d.m.Y",locale:{rangeSeparator:" - "}},i))}}catch(r){e.e(r)}finally{e.f()}}}}]);