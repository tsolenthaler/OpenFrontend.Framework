"use strict";(self.webpackChunkopenfrontend_framework=self.webpackChunkopenfrontend_framework||[]).push([[758],{108:function(t,e,i){i.r(e),i.d(e,{initMultiple:function(){return a}});var s=i(1184);const n={activeClass:"string",hideClass:"string",initialFilter:"(string|undefined)",target:"(string|object|undefined)",urlHashId:"(string|undefined)"},r={activeClass:"active",hideClass:"d-none",initialFilter:void 0,target:void 0,urlHashId:void 0};class l extends s.Z{constructor(t,e){super(t,e),this._targetElement="string"==typeof this._config.target?document.querySelector(this._config.target):this._config.target,this._togglerElements=[...this._element.querySelectorAll("[data-of-elements-filter-toggle]")],this._togglerElements.length>0&&this._initTogglers();let i=!1;this._config.urlHashId&&(i=this._initUrlHash()),this._config.initialFilter&&!i&&this.filter(this._config.initialFilter),this._element.dispatchEvent(new CustomEvent("initialized.of.elements_filter"))}static get Default(){return r}static get DefaultType(){return n}static get NAME(){return"elements_filter"}filter(t){const e=typeof t;let i;if("function"===e)i=t;else{if("string"!==e)throw new Error("Unsupported value type: ".concat(e,'. Supported values are "function" and "string".'));i=this._filterElementCallback(t);for(const e of this._togglerElements)e.dataset.ofElementsFilterToggle===t?e.classList.add(this._config.activeClass):e.classList.remove(this._config.activeClass)}for(const t of this._targetElement.children)i(t)?t.classList.remove(this._config.hideClass):t.classList.add(this._config.hideClass)}_initTogglers(){for(const t of this._togglerElements)t.addEventListener("click",(e=>{if(e.preventDefault(),t.classList.contains(this._config.activeClass))return;const i=t.dataset.ofElementsFilterToggle;this.filter(i),this._config.urlHashId&&window.history.replaceState(null,"",window.location.href.split("#")[0]+this._formatUrlHash(i))}))}_initUrlHash(){return window.addEventListener("hashchange",(()=>this._checkUrlHash())),this._checkUrlHash()}_checkUrlHash(){const{hash:t}=window.location;if(!t||!t.startsWith("#".concat(this._config.urlHashId)))return!1;const e=t.slice(Math.max(0,this._config.urlHashId.length+2));return!!e&&(this.filter(e),!0)}_formatUrlHash(t){return"*"===t?"":"#".concat(this._config.urlHashId,"-").concat(t)}_filterElementCallback(t){const e=t.split(",");return function(t){if(e.includes("*"))return!0;const i=t.dataset.ofElementsFilterItem.split(",");for(const t of e)if(i.includes(t))return!0;return!1}}}function a(t){for(const e of t)l.getOrCreateInstance(e,e.dataset.ofElementsFilter?JSON.parse(e.dataset.ofElementsFilter):{})}e.default=l}}]);