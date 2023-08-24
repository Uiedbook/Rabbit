(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();var u=t=>t instanceof HTMLElement||t instanceof DocumentFragment,N=class{constructor(){this.listeners={}}addEventListener(t,i){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(i)}dispatchEvent(t,i){var n;const e=this.listeners[t]||[];for(;e.length!==0;)(n=e.shift())==null||n.call(void 0,i)}},y=new N;function B(t){const i=new DocumentFragment;for(let e of t)if(Array.isArray(e))i.appendChild(B(e));else{if(e instanceof S&&(e=e.render(void 0)),typeof e=="function"&&(e=e(),typeof e=="function"&&(e=e())),typeof e=="string"||typeof e=="number"){i.appendChild(document.createTextNode(e));continue}if(u(e))i.appendChild(e);else if(typeof e<"u")throw new Error("  ✘  Cradova err:  invalid child type: "+e+" ("+typeof e+")")}return i}var S=class{constructor(t){this.effects=[],this.effectuate=null,this.rendered=!1,this.published=!1,this.preRendered=null,this.reference=new p,this._state=[],this._state_track={},this._state_index=0,this.component=t.bind(this)}preRender(t){let i=this.component(t);if(typeof i=="function"&&(i=i()),u(i)&&(this.preRendered=i),!this.preRendered)throw new Error(" ✘  Cradova err :  Invalid component type for cradova Ref got  -  "+this.preRendered);this.reference._appendDomForce("html",this.preRendered)}destroyPreRendered(){this.preRendered=null}render(t,i){this.effects=[],this.rendered=!1;let e=this.component(t);return typeof e=="function"&&(e=e()),e||(e=this.preRendered),i&&(this.stash=t),u(e)?(this.reference._appendDomForce("html",e),this.effector.apply(this),this.rendered=!0,this.published=!0):console.error(" ✘  Cradova err :  Invalid html content, got  - "+e),e}instance(){return this.reference.html}_setExtra(t){this.Signal=t}_roll_state(t,i,e=!1){return e||(this._state[i]=t),this._state[i]}_effect(t){this.rendered||this.effects.push(t.bind(this))}async effector(){if(!this.rendered){for(let t=0;t<this.effects.length;t++)await this.effects[t].apply(this);this.effects=[]}this.effectuate&&(this.effectuate(),this.effectuate=null)}updateState(t,i){this.rendered?this.published&&this.Activate(t):this.effectuate=()=>{this.published&&this.Activate(t)},i&&(this.stash=t)}async Activate(t){if(this._state_index=0,this.published=!1,!this.rendered)return;let i=this.component(t);typeof i=="function"&&(i=i()),u(i)?(this.reference.html.insertAdjacentElement("beforebegin",i),this.reference.html.remove(),this.published=!0,this.reference._appendDomForce("html",i),y.dispatchEvent("onmountEvent")):console.error(" ✘  Cradova err :  Invalid html content, got  - "+i)}},g=function(t){const i=document.createDocumentFragment();for(let e=0;e<t.length;e++){let n=t[e];if(typeof n=="function"&&(n=n()),u(n)){i.appendChild(n);continue}if(n instanceof String){i.appendChild(document.createTextNode(n));continue}throw console.error(" ✘  Cradova err:   wrong element type"+n),new TypeError(" ✘  Cradova err:   invalid element")}return i},p=class{bindAs(t){return[this,t]}dom(t){return this[t]}_appendDomForce(t,i){this[t]=i}};function v(t,i){if(t){if(typeof i=="object"&&!Array.isArray(i))for(const e in i){if(e==="style"&&typeof i[e]=="object"){for(const[r,o]of Object.entries(i[e]))if(typeof t.style[r]<"u"&&r!=="src"&&typeof o=="string")t.style[r]=o;else throw new Error("✘  Cradova err : "+r+" is not a valid css style property");continue}const n=i;if(typeof t[e]=="function"){e.startsWith("on")?t[e]=n[e]:t[e].apply(t);continue}if(e==="text"){t.innerText=n[e];continue}if(e==="tree"){t.innerHTML="",t.appendChild(g([n[e]]));continue}if(e.includes("data-")){t.setAttribute(e,n[e]);continue}t[e]=n[e]}if(typeof i=="string"){t.innerText=i;return}if(typeof i=="function"){t.appendChild(g([i]));return}if(i instanceof HTMLElement&&t.appendChild(i),!(typeof i=="object"&&!Array.isArray(i)))throw new Error(` ✘  Cradova err: Cradova got invalid state  => 
`+String(i))}}var _=class{constructor(t,i){if(this.persistName="",this.actions={},this.ref=[],this.value=t,i&&i.persistName){this.persistName=i.persistName;const e=localStorage.getItem(i.persistName);if(e&&e!=="undefined"&&(this.value=JSON.parse(e)),typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(this.value,n)||(this.value[n]=t[n])}}set(t,i){typeof t=="function"?this.value=t(this.value):this.value=t,this.persistName&&localStorage.setItem(this.persistName,JSON.stringify(this.value)),this.ref.length&&i!==!1&&this._updateState(),this.callback&&this.callback(this.value)}setKey(t,i,e){if(typeof this.value=="object"&&!Array.isArray(this.value))this.value[t]=i,this.persistName&&localStorage.setItem(this.persistName,JSON.stringify(this.value)),this.ref.length&&e!==!1&&this._updateState(),this.callback&&this.callback(this.value);else throw new Error(`✘  Cradova err : can't set key ${String(t)} . store.value is not a javascript object`)}createAction(t,i){if(typeof t=="string"&&typeof i=="function")this.actions[t]=i;else throw new Error(`✘  Cradova err : can't create action, ${t} is not a function`)}createActions(t){for(const[i,e]of Object.entries(t))if(typeof i=="string"&&typeof e=="function")this.actions[i]=e;else throw new Error(`✘  Cradova err : can't create action, ${i} is not a function`)}fireAction(t,i){if(this._updateState(t,i),typeof this.actions[t]=="function")return this.actions[t].call(this,i);throw Error("✘  Cradova err : action "+t+"  does not exist!")}bind(t){if(typeof this.value=="object"&&typeof this.value[t]<"u")return[this,t];throw new Error("✘  Cradova err : can't bind an unavailable property!  "+t)}_updateState(t,i){if(t&&i)this.ref.map(e=>{var n;if(e._event===t){if(e._element_property&&e._signalProperty){(n=e.ref)==null||n.updateState({[e._element_property]:i[e._signalProperty]});return}if(e._element_property){e.ref.updateState({[e._element_property]:i});return}if(e._signalProperty){e.ref.updateState(i[e._signalProperty]);return}}});else for(let e=0;e<this.ref.length;e++){const n=this.ref[e];if(n._element_property&&n._signalProperty){n.ref.updateState({[n._element_property]:this.value[n._signalProperty]});continue}if(n._element_property){n.ref.updateState({[n._element_property]:this.value});continue}if(n._signalProperty){n.ref.updateState(this.value[n._signalProperty]);continue}if(!n._element_property&&!n._signalProperty){n.ref.updateState(this.value);continue}}}bindRef(t,i={signalProperty:"",_element_property:""}){if(t.render&&(t.render=t.render.bind(t,this.value)),t._setExtra&&t._setExtra(this),t&&t.updateState){this.ref.push({ref:t,_signalProperty:i.signalProperty,_element_property:i._element_property,_event:i.event});return}throw new Error("✘  Cradova err :  Invalid parameters for binding ref to Signal")}listen(t){this.callback=t}clearPersist(){this.persistName&&localStorage.removeItem(this.persistName)}},h=new p,m=class{constructor(t){this._secondaryChildren=[],this._errorHandler=null,this._packed=!1,this._template=document.createElement("div"),this._persist=!0,this._delegatedRoutesCount=-1;const{template:i,name:e,persist:n,renderInParallel:r,transition:o}=t;this._html=i,this._name=e,this._transition=o,this._template.setAttribute("id","cradova-screen-set"),r===!0?(this._delegatedRoutesCount=0,this._persist=!1):typeof n=="boolean"&&(this._persist=n)}get _delegatedRoutes(){return this._delegatedRoutesCount>100?-1:this._delegatedRoutesCount}set _delegatedRoutes(t){t&&(this._delegatedRoutesCount+=1)}setErrorHandler(t){this._errorHandler=t}async _package(){if(typeof this._html=="function"){let t=await this._html.apply(this);if(typeof t=="function")t=t(),u(t)&&(this._template.innerHTML="",this._template.appendChild(t));else if(u(t))this._template.innerHTML="",this._template.appendChild(t);else throw new Error(` ✘  Cradova err:  template function for the screen with name '${this._name}' returned ${t} instead of html`)}this._secondaryChildren.length&&this._template.appendChild(g(this._secondaryChildren))}onActivate(t){this._callBack=t}onDeactivate(t){this._deCallBack=t}addChildren(...t){this._secondaryChildren.push(...t)}async _deActivate(){this._deCallBack&&await this._deCallBack()}async _Activate(t=!1){(!this._persist||t||!this._packed)&&(await this._package(),this._packed=!0),this._transition&&this._template.classList.add(this._transition),document.title=this._name,h.doc.innerHTML="",h.doc.appendChild(this._template),y.dispatchEvent("onmountEvent"),window.scrollTo({top:0,left:0,behavior:"instant"}),this._callBack&&await this._callBack()}},s={};s.lastNavigatedRouteController=null;s.nextRouteController=null;s.lastNavigatedRoute=null;s.pageShow=null;s.pageHide=null;s.errorHandler=null;s.loadingScreen=null;s.params={};s.routes={};s.pageevents=[];s.start_pageevents=async function(t){setTimeout(()=>{for(let i=0;i<s.pageevents.length;i++)s.pageevents[i](t)},100)};var C=t=>{if(s.routes[t])return[s.routes[t],{path:t}];if(s.routes[t+"/"])return[s.routes[t],{path:t}];for(const i in s.routes){if(!i.includes(":"))continue;const e=t.split("/"),n=i.split("/");t.endsWith("/")&&e.pop();let r=0,o=0;if(e.shift(),n.shift(),n.length===e.length){const a={_path:""};for(let l=0;l<n.length;l++){if(n[l].includes(":")){o++;continue}e[l]===n[l]&&r++}if(r+o===n.length){for(let l=0;l<n.length;l++)n[l].includes(":")&&(a[n[l].split(":")[1]]=e[l]);return a._path=i,[s.routes[i],a]}}}return[]};s.route=(t,i)=>{if(typeof i<"u"){if(i&&!i._Activate)throw console.error(" ✘  Cradova err:  not a valid screen  ",i),new Error(" ✘  Cradova err:  Not a valid cradova screen component");return s.routes[t]=i}};s.router=async function(t,i){let e,n,r;if(e||(e=window.location.pathname),e!==s.lastNavigatedRoute)if(s.nextRouteController?(n=s.nextRouteController,s.nextRouteController=null):[n,r]=C(e),typeof n<"u")try{if(typeof n=="function"&&(s.LoadingScreen&&s.LoadingScreen._Activate&&await s.LoadingScreen._Activate(),n=await n(),!n)){s.lastNavigatedRoute&&history.pushState({},e,s.lastNavigatedRoute);return}n._delegatedRoutes!==-1&&(n._delegatedRoutes=!0,n=new m({name:n._name,template:n._html}),s.routes[e]=n),r&&(s.params.params=r),await n._Activate(i),s.start_pageevents(e),s.lastNavigatedRouteController&&s.lastNavigatedRouteController._deActivate(),s.lastNavigatedRoute=e,s.lastNavigatedRouteController=n}catch(o){if(n&&n._errorHandler)n._errorHandler(o);else if(s.errorHandler)s.errorHandler(o);else throw console.error(o),new Error(" ✘  Cradova err:  consider adding error boundary to the specific screen  ")}else s.routes["/*"]&&await s.routes["/*"]._Activate(i)};var k=class{BrowserRoutes(t){for(const i in t){let e=t[i];typeof e=="object"&&typeof e.then=="function"||typeof e=="function"?s.routes[i]=async()=>(e=await(typeof e=="function"?await e():await e),s.route(i,(e==null?void 0:e.default)||e)):s.route(i,e)}this._mount()}back(){history.go(-1)}forward(){history.go(1)}navigate(t,i=null,e=!1){if(typeof t!="string")throw new TypeError(" ✘  Cradova err:  href must be a defined path but got "+t+" instead");let n=null,r;if(t.includes("://"))window.location.href=t;else{if(t===window.location.pathname)return;[n,r]=C(t),n&&(s.nextRouteController=n,window.history.pushState({},"",t)),s.params.params=r,s.params.data=i,s.router(null,e)}}setLoadingScreen(t){if(t instanceof m)s.LoadingScreen=t;else throw new Error(" ✘  Cradova err:  Loading Screen should be a cradova screen class")}onPageEvent(t){if(typeof t=="function")s.pageevents.push(t);else throw new Error(" ✘  Cradova err:  callback for pageShow event is not a function")}async packageScreen(t,i={}){if(!s.routes[t])throw console.error(" ✘  Cradova err:  no screen with path "+t),new Error(" ✘  Cradova err:  cradova err: Not a defined screen path");let[e,n]=C(t);!e._Activate&&typeof e=="function"&&(e=await e()),e._delegatedRoutes!==-1&&(e._delegatedRoutes=!0,e=new m({name:e._name,template:e._html}),s.routes[t]=e),e._package(Object.assign(i,n||{})),e._packed=!0}getParams(){return s.params}addErrorHandler(t){if(typeof t=="function")s.errorHandler=t;else throw new Error(" ✘  Cradova err:  callback for error event is not a function")}_mount(){let t=document.querySelector("[data-wrapper=app]");t||(t=document.createElement("div"),t.setAttribute("data-wrapper","app"),document.body.appendChild(t)),h._appendDomForce("doc",t),window.addEventListener("pageshow",s.router),window.addEventListener("popstate",i=>{i.preventDefault(),s.router()})}},R=new k,D=(t,i)=>{let e={},n=null;if(i.length!==0)for(let r=0;r<i.length;r++){let o=i[r];if(typeof o=="function"&&(o=o()),o instanceof S&&(o=o.render()),u(o)){t.appendChild(o);continue}if(Array.isArray(o)){t.appendChild(B(o));continue}if(typeof o=="string"||typeof o=="number"){n=o;continue}if(typeof o=="object"){e=Object.assign(e,o);continue}if(typeof o<"u")throw console.error(" ✘  Cradova err:   got",{child:o}),new Error("  ✘  Cradova err:  invalid child type: ("+typeof o+")")}else return t;if(typeof e=="object"&&t)for(const[r,o]of Object.entries(e)){if(r==="style"&&typeof o=="object"){Object.assign(t.style,o);continue}if(Array.isArray(o)){if(o[0]instanceof _){t.updateState=v.bind(null,t),o[0].bindRef(t,{_element_property:r,signalProperty:o[1]});continue}if(r=="reference"&&o[0]instanceof p){t.updateState=v.bind(null,t),o[0]._appendDomForce(o[1],t);continue}}if(r==="onmount"&&typeof e.onmount=="function"){const a=()=>{var l;(l=e.onmount)==null||l.apply(t),e.onmount=void 0};y.addEventListener("onmountEvent",a);continue}if(r.includes("data-")){t.setAttribute(r,o);continue}if(r.includes("aria-")){t.setAttribute(r,o);continue}if(r==="href"&&typeof o=="string"){const a=o||"";a.includes("://")||t.addEventListener("click",l=>{var c;if(l.preventDefault(),R.navigate(t.pathname),a.includes("#")){const d=a.split("#").at(-1);(c=document.getElementById("#"+d))==null||c.scrollIntoView()}}),t.setAttribute(r,o);continue}if(typeof t.style[r]<"u"&&r!=="src"){t.style[r]=o;continue}t[r]=o}return n&&t.appendChild(document.createTextNode(n)),t},f=t=>(...e)=>D(document.createElement(t),e),I=f("button"),E=f("div"),b=f("img"),L=f("input"),Q=f("span");const U=(t,i)=>{let e;return(...n)=>{e&&clearTimeout(e),e=setTimeout(()=>{t(...n)},i)}},T="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABHNCSVQICAgIfAhkiAAAAzBJREFUeJztnLGu0zAUQI8RW5EQS8TABlIHxrCj/gBj3sJa2MsnMNP98XYkuvULkBiRCivvD1D3zmZI0pemTuI4duI4OVPVtPXt6b2O7TiFmZmZgNkUHq8Hi8JXZAkuhXmBGKrhTMgFQojB4qlikIBUcnJ8k/So5/Y2dXKmzqbc56gYOsihWOvImaogbTlTFJS0kTM1Qa3lTEmQkZypCErgepQ8C0pZgbmc0AV1lhOyICtyfBRkY94TAwdbXy60uZhVOT7yuMN7XcrZA/+Ae+AP8As4OWinEdN0XgL3fWVOqeyWpOJ6waTEepUDV53/3+zpDbBw3XbbDOpdTh2FzIqAo4s22mSQV3LgIbNI5ThZ9NfNoAg4+iRHRZZRMXCw9Zk6GTQKOXBe6z5gMZuaTvOjkZOTxyqEeEPakXcaHtSV2OjklMlKrlMHXiVo9HJyukpSCVoApxDk5GSSFhiUW1lQcHJyTCUVz2LByoFz5/2t7fuKgrahysmRUr6j5RDgosRCFwTnUtOe8E5OELRblCuWWOIgFi/JEkFrL1LZ5EZK+cV+SP6hOz5SpdrUJNWimqxuhRCfHMTjK1HdwarZ/FYI8cFBMF6R9UWf617TlGJrKeVXeyH5R1Nf1LQedBd6JmVZ9L7quO54IOhMquusddek74QQN5bi8Y4si2LVsTaL9ruQJQHKrsTkwmEipfzeMRjvqCozkwuHQWZSVZmZbl7YCSFufNuJYYG35Se67O7YAUlgkq4E2fhyK+CH5f1B+TX3BfAMeAK8BF6QruV8dLE04/LHHmKHWUS2ZGGj3UL7ytO9DYbcoxgDe0uCnN6zNvQu19hC+7ddJTTRSZKlGIxLz1L7jRhLshiDUTZZbH8UAUaGMZwX0VzecXgA4oHHSUcgMojhdf7A9S2ZY5X0ylUwVWiXm8MYtMvNYQy1aEnyJIbzqb7Pu559KLcDehdIn7sOpI4lVP+KPcVw25BB+57iqEQpqcf2F6r2B4ijlitJ9PsHJ5WZXHyRD2s5CfAU+I3F/c26qDImsDWuTihLrfiCvv+7wzdOZPPGmQZK2XMeCsy19sCKdIrxkx7vR5sJnf/W7+jC2vw/EwAAAABJRU5ErkJggg==",Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABHNCSVQICAgIfAhkiAAAA9tJREFUeJztnDusDFEYgD+ikNxEIWzEX1CIldCwovJsEBKFgkg8qkWluCqvxqtzC5VQSYRQSmjdhBI9oRF/I0IkhI5iz67ZvTOz8zjnzJnZ/ZJNZmdnzvnvt/+ZmfPYC1OmTJlAusA785qtOJbgmFXVv9EXcL2qYBZXVXEKF0Z3qOolKpK0qIpK0zAZE4uI3AAuewwnyAxKxGSS12tSrQQBqOotPEqqnSAYSOr6qKuWggBU9S4eJNVWEAwkHXFZR60FAajqYxxKqr0gcCupEYIM93EgqTGCVHUpPUl7bJbbGEEwkPQci5IaJQjsS2qcIBiS1ClbViMFwUDSK0pKqrI3PwNsAzYDbWAVsEFV19usRES+AvuBN0XO9y2oDZwA9gGbzLfsHCNpO70Rylz4EDQDnAGOqepWD/XFUlSSS0Et4BxwRlVXOKwnM0UkuRLUBW6GIiZKXkm2BXWAO1U2pSyIyHtgB/Bl3LE2b/Nd4FXocgDMnfIlvctAKjYyaAaYU9XTFsrySpZMKiuoBTyrQ9YkMU5SGUEt4KXtB7sqEJHXwEFiJBUVNAPM1zlzRjGSdgO/ovuLCGqcnD5xkorcxR42UQ6A+bvm6SUBkF9QV1UP2QwqNIykuf77PILawG3rEYXJ4f5GHkEPfPW+A+BbfyOroNmmXncSuNLfyCKoRcyanaYiIueBJ/33WQSdC7FX7gIjZy66b5ygFnDeWUQBEScHYMmY865NwoVZRE4D9+I+S8ugFnDSSUQBkSYH0gUdb3r2jJMD6YKO2Q0nLLLIgeTOakdVX9sNKRxE5CiRW3kaSRlUu9HBrOSRA8mCDifsrzV55UC8oE4THwyLyIH456Bd5cMJBxH5A5yigByIz6DGCCorB+IzaG/hiFIwswfz9GY0PwMfgZ/Ad/4Pcf5K+61Gzvr+AAeAF2XKGRXUsflwaMZ4HwEPyDCLabFeK3JgoSArzUtEngJXKbgmp2Td1uTAQkHtMoWZjDlLBWJM/VblwEJBW4oUYgK7RMxwgS9cyIGFgtbmLaDsEjcbuJIDw4JaeR8Q06ZsfWHkbMfRFxR9DtqY58RA5PQXQznL3qigdVlPCkiO86YdFbQmywkmsImQA8OCVo472LT3/UyIHBgWtCrD8aeo9m7l/Y45blZjgIjcpUSnryxlFoOXIZpBq5MOMh1NLz/FNiLi9nmXA8OClsUdYK47hxhZeeWQiyP1v6ciOTDcxJYnHHMLv8HdE5G39Lo9P6iwWcPwrMbv0aEO8+1twV/2BEe0iX2K+fwsEyxnlCP0sqjy/9kTEqMTh21gJ/ABBz3jKVMmj39oLj/tWfnkbQAAAABJRU5ErkJggg==";class M{constructor({STACK_SIZE:i,STACKING_TIME:e}={}){this._undoStack=[],this._redoStack=[],this._STACK_SIZE=1e3,this._STACKING_TIME=600,this._toolsList={},this._modalList={},this._syntheticActionList=[],this.selection=null,this.selectedElement=null,this.range=null,this._actionList={input:[],paste:[],copy:[],contextmenu:[],"document-selectionchange":[]},i&&(this._STACK_SIZE=i),e&&(this._STACKING_TIME=e)}installOn(i="pub"){const e=document.getElementById(i);window.innerWidth<600?e.className="rabbit-editor-container mobile":e.className="rabbit-editor-container",e.contentEditable="true",this._el=e,this._createDefaultTools(),this._createDefaultActions(),this._installTools(),this._ActivateActions(),this._el.focus()}installTool(i,e){//! checking type
this._toolsList[i]=e}installAction(i,e){//! checking type
this._actionList[i]?this._actionList[i].push(e):this._actionList[i]=[e]}installModalTool(i,e){this._modalList[i]=e}showModal(i,e){this._Mel.innerHTML="",this._Mel.appendChild(this._modalList[i](e)),this._Mel.classList.remove("in-active"),this._Mel.classList.add("active")}hideModal(){this._Mel.classList.remove("active"),this._Mel.classList.add("in-active")}fireSyntheticAction(i){var e;(e=this._syntheticActionList[i])==null||e.call()}_createDefaultActions(){const i=async()=>{var o;const r=window.getSelection();if(r.rangeCount>0){const a=r.getRangeAt(0),l=a.startContainer,c=l.textContent||"";if(c&&((o=l.parentNode)==null?void 0:o.nodeName)!=="P"){const d=document.createElement("p");d.textContent=c,l.parentNode.id?(l.remove(),a.deleteContents(),a.insertNode(d),r.removeRange(a),this._el.focus()):(l.parentNode.insertAdjacentElement("afterend",d),l.parentNode.remove())}}this._el.focus()},e=async()=>{var o,a;const r=window.getSelection();if(r.rangeCount>0){const l=r.getRangeAt(0),c=l.startContainer,d=c.textContent||"";d&&((o=c.parentNode)==null?void 0:o.nodeName)==="P"&&(this.selection=l.toString(),this.selectedElement=c.parentNode,this.range=l),d&&((a=c.parentNode)==null?void 0:a.nodeName)==="SPAN"&&c.parentNode}},n=U(()=>{this._saveState()},this._STACKING_TIME);this._actionList.input.push(n,i),this._actionList["document-selectionchange"].push(e)}_createDefaultTools(){const i=this;this._toolsList.redo={image:T,tooling(){i._redo()}},this._toolsList.undo={image:Y,tooling(){i._undo(),i._undoStack.length>i._STACK_SIZE&&(i._undoStack.length=i._STACK_SIZE)}}}_installTools(){var n;const i=document.createElement("div"),e=document.createElement("div");window.innerWidth<600?(i.className="rabbit-tool-container mobile",e.className="rabbit-modal mobile"):(i.className="rabbit-tool-container",e.className="rabbit-modal");for(const r in this._toolsList){let o=null;this._toolsList[r].image&&(o=b({src:this._toolsList[r].image,className:"rabbit-tool"})),this._toolsList[r].text&&(o=I(this._toolsList[r].text,{className:"rabbit-tool"})),this._toolsList[r].html&&(this._toolsList[r].html.className="rabbit-tool",o=this._toolsList[r].html),o.addEventListener("click",()=>this._apply(r)),o.title=r,i.appendChild(o)}i.appendChild(e),this._Mel=e,(n=this._el.parentElement)==null||n.appendChild(i)}async _apply(i){const e=this._toolsList[i].tooling;e({selectedElement:this.selectedElement,selection:this.selection,range:this.range}),this._el.focus()}_saveState(){const i=this._el.innerHTML;i!==this._undoStack.at(-1)&&(this._undoStack.push(i),this._redoStack=[])}_undo(){if(this._undoStack.length>0){const i=this._el.innerHTML;this._redoStack.push(i);const e=this._undoStack.pop();e&&(this._el.innerHTML=e)}}_redo(){if(this._redoStack.length>0){const i=this._el.innerHTML;this._undoStack.push(i);const e=this._redoStack.pop();e&&(this._el.innerHTML=e)}}_ActivateActions(){for(const[i,e]of Object.entries(this._actionList))for(let n=0;n<e.length;n++)i.includes("document-")?document.addEventListener(i.split("document-")[1],e[n]):i.includes("synthetic-")?this._syntheticActionList[i]=e[0]:this._el.addEventListener(i,e[n])}}const O="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABHNCSVQICAgIfAhkiAAAA+5JREFUeJztnD2LU0EUhh/FHxBLmUazzYKtVoLNEhvtbUStFmy0E2KjNitYabUgNoqN9jYu24h2CjaCjavNIFZ7/4EWd4Jr9s7c3GRuzoR9nyqbyXzseTMf52bOASGEEEIIIYQQQgghhBBCCBsGwE3gBfAD2Pfe//He/wl/fwDGwNBshJk4Zj2AKQbALeCu934wSwXn3EfgOrDX58D6oiQBxnQw/DTOuafAA6DKOai+KUWAsfd+a9FGnHM/gQ1WaDaUIMAT7/2dXI2tmgjHjfsf5zQ+gPf+NPAyZ5t9YjkDht77720fcs5VwFfgO7AGuGDktnr3gEeLDrJvLAX44L2/ECsMS8kzYJvDG+sIuN9SvwLONNQtCisBkt/+cLS8Qrvxkpv3KswCqz3gfqwgfPNnMT7Ao3D8jHG347iWjpUAFxNlG3RbNh4E0Q4RfIpRh7aWjoUAg9gmGpaersfHinqviHGuY3tLxUKA84myt3O2+TpRtj5nm0vB2g+Y5tec9VbC6WrCQgBn0GexlDYDjhwSwBgJYMwqCDCkfmwx+TVsnKndiY8wCq9NOGHV8YwMgc+TH2mC/7DlnIPFHjH8167lI+zSZ8DtyC9kmwu0OQB2D7YbhP2MwUwoXYCTTW/O8jg6wfmm+kGQlJPYC6UL0AcpP2TpPspRFKAoJIAxEsAYCWCMBDBGAhgjAYyRAMZIAGMkgDESwBgJYIwEMEYCGCMBjJEAxkgAY0oXYD9RNo687tKGOaXfivgdK/DebznnLofX0UgZ4Ev2UWWkdAG2gWgETIvhJ7zPN5z8lL4EVS0RMEmccy8p/OZ06QJAIgImRajzMPtoMrMKAlTARhcRFrjp5jt+fmEsBEj9k6ci7+9Ri9AagB3CnFLGj/VhgsUmnArOToUT7QE3nHOvgGvA2mQTDt/498ArYKel/1QfrYHjubGKE95vuvMZgqsbryNm5EfT1cQl9X0Iqz3ga9ObSwgrHSXulTaOqW+sBEhFQ0aDuDOQavt5j/1GsRJgO1YQ1vU+ZsHNFsfNxGGzEqAKp5UYb8ibD25IOj2CmcNm6QdEnaSwF+ySR4QhdUDG6XnG0jeWAuykzvXBYIuK0Gp868cV1inLBtTHwmRo0BxpZ2bKvlhCejNrAaA+Gr5r+9CBBE6viRtsCFxlxuyLzrlLtDtuvVKCANAxa+JUGjOoU5md7ZLyspRkTqUIAJlSV85CKcaHsgSAJYhQkvGhPAFgtmNjZ8Iesonxmj9NiQJMyJVNtwIe05x90ZySBYB/p5rNrjOidMNPKF2Ag4yo87+tM3XqCcauqJ/nfAM+UdhSI4QQQgghhBBCCCGEEEKIo8tf+nE2xEEA1t4AAAAASUVORK5CYII=",J="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAAuCAYAAABkgjQ+AAAABHNCSVQICAgIfAhkiAAAAlhJREFUaIHdWruRhDAMtZnrwgWRUAUJKclWQUJ6yVVBsgWpDi7yDcNhJFmysPfNbLSApcfTz8Y7IQBgT/0XQvDS59eATnLzHUHx/34ebq9pAdlvGiPojJZVlaUkLkGtQxRuHLRMLJukT8gxXLDzhEQRreYls3Bzrl0VskiSOvnz+pbc/hhY8sdCLYTgKddw1qwBX9YLAsBeiqjcfInZQw43qkKeUEo/D7ukoGCTAdkhThhZhlyJ/utsn2l1i9BwDABE6rnDWVWkN0ox5sx+aTVZdPDRRhUl5TgscdK630JJqrEBtOq34otESco1qGSVG5eJbMPVj3p/BOqIJLfk5DIqNHZE+3nYMRGEEPytkmoMtYgrIsZlYpH+Xjf02n4e9tuLMCWMy4QuVPuYQlF7cQdLhpwWMBuT4VZzqFkjSRKW0DgVhmdSfciuTBznrUMOAPZxmdT6qUvDtJ2illrq865QckzJ2k/iNmPvdfPu5dSdsDqByZrdSowFXIctC8s/iT95PqbZKWvikf0kCawJcu6kpBpOWTE1adl4zKsY6eYHARJwCGJVS6SoVBduUqXE7RAte5w7kPQJY0ip7v6PpFZPV6WgKJeckyjbIlRQvpCraebrnKOFmhZBNYGaYjrnPifUOEmf02+Rqht3VsNACaXcQkK5DwBYDam3mNCvUOLAM/UMaZeOfioTF8peIYHcdZ+YCtBw0w61iJqqFwaUpNqq2hPkdqWUQkHu2ppEYc8KIfjuvW7JY9/Sb+1OpRTjJS/4OOOl1orPT1YPa1lL1uZUL8qx/Hm6+AVVmWu0cDrHYAAAAABJRU5ErkJggg==",x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABHNCSVQICAgIfAhkiAAABI1JREFUeJztnL+LXUUUxz+Kf8CC5WCIN6ZJJSGVhcQV0ipIwELiEzFVIEkjKSJGkkJsXMEqEkyRIpDG2mI32ivpzT6XyKQT3n8QizcXnvpm7p07P87c5Xyqzc7NzNn7Pd95M+fOu6AoiqIoiqIoiqIoiqIoiqIoitImC+DAWvvCWvsCOHC/mx0vSQcwgbvW2s+2NRhjfgAuV44niZelA4jklu/mA7i2W/XCSWdODuistYdDFxljVsDrwKp8SOnMyQE3xlxkrd0BrhWOJRtzccCo7N/EGHMKWBaKJxtzccCo7M/wf6ozBwdEZ3/PHFwwBwekZPK9bFEUonUHBLPfGHMdwFr7beCad4H9ArFloXUHeLPfGHMI7AF7xpjHgT6+yB1UTloWYDe06QLubPx823eRtfY8sJsrqNy0LIA3c13G39/41f5cXdCqAAuXuT62ZfwsXdCqADd9Da7gtu1DdZYuaFGAhbX2VKD960Db7FzQogBD2R/aWA254O7UoErRmgAp2d/zqa/B9b2IDaokrQkQyv7HjCsrLJ1ToseQoCUBhrL/l4i+vE5xYzRTrm5JgKHMPIroa8gFXwI7Ef0VoxUBhrIf4K3IPj93T8f+R0sPbVoQoGPcvHw6st8V8F2g/SoNuKAFAS6NyP6p6/i91l0gLUAHfBRxfexutnkXSAtwY0z29xxHF0gK0A2Um33E7mabdoGkAJMeNU7czQ654JspseRASoCp2d9zk7isXQFf+RpdLF1CPJOREiDpyMjE3eyee4zpQ+QYi4QAqdnfM2XuvhNouzihv2QkBHg7RycTVzD3fS5w/S1S44pFQoCPM/aV2wXvJcQyidoCdAPPeqOY6IKfAiui81SehmoLcLJAn7EuWAGPAu3vp4UTR20BPszd4UQXPAy0xVZdk6gtQGxFcyxXiVvH/x5oKxXjVmoL8GaJTp0LYtbxq8CeoEiMPmoKsONuVBEm7Ga3Hth1MVbbFdcU4GyFMWJc8LxYFBFIl6Oz4lwwtlx9FGg7mRzMSI6VAI4cRxBPZOhjFDUFqPJHtXoE0cdxdACku+BZlihGUFOAan/USBeIn4iAugIcVRwLhl1wJtB2lDGOIDUFWPqKYCUY4YJQW7Wvttb+DHhSeTyfCzrfaYyB4+3ZqS1AzAHbZJwLFluaQhu2P4oE46G2AL9WHg/WD/A3Swsd4eknVCnNjsQXtZ/GHMbKgSu8fe/+eSUw/RwCb1QLDHil5mCOB6yPh1fD3XDvt+k3CD2uLIKEA3aAP0tWRqcgkf0gsxMOHpISpHr2g+zLOg5yPqBPwS0935EYW1KADvhNeipyU88FhN4rJFmMWwIfCI7fI3bzQb4aum+M+URqcDe26Bu1Wnlh08Ja+2OtwVxN6jr/fuOKCK0IAOvPhJ9Lb9Kk5/z/Ij0FbbIELgx8vzcJ1/c5Grn50JYDNumAe7mWqW6ZeZsG3x3XqgA9u6yPM16MXa66ef4R6+Jacze+p3UBNunFOA28Brzai+Ju9t/AX6zLyQ9ZHz+cxfujFUVRFEVRFEVRFEVRFEVRFEU53vwDG0dbJNeJtiUAAAAASUVORK5CYII=",F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABHNCSVQICAgIfAhkiAAAAV1JREFUeJzt281Nw0AUReELFWT/NqYDSjEdQCURlZAOSCl0QDZvnw5gEUtEiOjKz3FmkM63zGSUpyMrP2NFAgAAAADc2l3rAc4MkkZJG0lHSXtJh4bzSOon0HNmvv1+MCJeJO1uP86PHgKNmfl+aTEinnS6mpq4b/XCZ7YL11fV/ArKzC/3nIhoNmcPV1DXCGQQyCCQQSCDQAaBDAIZBDIIZBDIIJBBIINABoGMJecso6RtZj5ea5i1RMSHpFcVTiargf48Q+5d5Yy7EmjIzM/Cvi5ExINm3C2pvAeNhT09mTV/JdCmsKcns+avBDoW9vRk1vyVQM3uUV3JrPkrgQ7Tp8G/M819mLOH70EGNw4NfmoYBDIIZBDIIJBBIINABoEMAhkEMghkEMggkEEgg0BG80DTYVZ5fW3NA+l00rdkfVU9BNpfOuOeHm96k6D5keuZQR3+XwwAAAAAVvAN22A8g9syGFoAAAAASUVORK5CYII=",G="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABHNCSVQICAgIfAhkiAAAAxdJREFUeJzt3DFvEzEYxvE/iL1hxQIpDIgp6gBzhQidOyKWlm58gUpl6NABJDYm1AWF78BGBzrTATGgiqFIIO/hG7D41AhSp7n47n0veX5jnPq1/Jyd9q4xiIiIiIiIiIiISCuuWQ+ghh6wBawDa+m1P8BX4AT4aTSuWroUQB84ijE+yb0phDACDulIEF0JYD/G+GqeHwghvAReNzSeYroQwNyTX+lCCN4DqD35Fe8heA6gH2M8L9FRCOEuTj8TrlsPIOOgYF9HBfsqyusKyF79IYTfwC5wCoyBIfA+xng78zM303td8boCNi5rSJM/AI65mNBjYJDaLrNVbnjleA1gPdO2y/QreZza6vRpxmsAvUzbcabtNNO2lmkz4zWAutzt8bMsWwCdowCMKQBjCsCYAjCmAIwpAGMKwJgCMKYAjCkAYwrAmAIwpgCMKQBjCsCYAjCmAIx1MYDc8+J+a6MopIsBvMi0PW1tFIV0LoD0v6LTrvQh+XBcumE9gDpijOchhA/A5/TSRoxxx25E9XUyAIAY4zawbT2ORXVuC1o2CsCYAjCmAIwpAGNeA7hlPYC2eA3gfgN9Pm6gz4V5DGA/91WjulKf+6X7XZS374gt/LXUWUIIz4FRkzXm4WkF9GnnXs4hju6aeloBv5rYeqYJIXwCNtuoNYuXFbDT1uQDpAM/hm3Vy/ESwDODmnsGNf/jYQsqdiTBvDwcYeBhBVg+xTJ/guYhgEcrWhvwEYClJv7inot5ALOOIFt25gFYavNX38usdAAemAcw44iZpa1dMQ8AOFvR2oCPAL6vaG3ARwAfV7Q24ONWBLR4J7SS9v87bdacxsMKAHhnULPkqYy1eVkBPeBbi88DqoP/zE/Y8rICxrR7RR7gYPLBTwAAoxDC26aLpBqjputclZctaFJjH8hePngneVoBlUF6ZltU6nNQut9FeQxgDGymU8+LSNvOJk72/Uket6BJfeCk7paUrvo35A97NeU9gMoQ2LvKs4O0z5/hfOIrXQmg0gMeAA+Be/+0/QC+cHGiuoiIiIiIiIiIiMiFvxZYoxUsvAurAAAAAElFTkSuQmCC",K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABHNCSVQICAgIfAhkiAAAANxJREFUeJzt2rFtwzAQBdCfFNkh4G5eI6lSpErW8G6Ed3CVIq1EQgYps3ivpQQcryDAz0sAAIDjXhprb0m+k1xqre8n1XOqUsotyTXJV5L71jetBv3UWj9mFLaaUspvks+ttdfGf5c55Sxpd6+tBpF2g66nVfF8u3t1SHcOaQAA4BGtq8ZRT7+azLg6jGzQMvlRK985amTcsVJ+NKwWeVDHyAatlB8Nq8UhDQAATODp2XxQn/mgPvNBjzIf9M980Bb5EQAAzOLpucN8UIf5oA55UIf5oA6HNAAAm/4Ax3VUJaGLDYsAAAAASUVORK5CYII=",V="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABHNCSVQICAgIfAhkiAAAAiRJREFUeJzt3DFSFFEUheGjxQLGyOBmbeAKTHULkBGKm9CEiGTchGNIRpU7IHYFBJK9gIwlGNBTZUBht3Le6Yb/S5m6l55D97w3xbsSAAAAAAAAAAAAAACweBHouZF0JOmtpNeB/ve5kXQl6VLSdc/GPQMYJJ231t517DlbVX2XdKZOQfQK4KS19q1Tr0dRVV8lfXH3eeluIGm7tjdfklprnyVt3X3cd8B2vJDVqqpPknau+s4AhtbaL2P9bqrqjUyfCc5H0Kmxdm/nrsKuO+DJ/PXvVdUrSbePXdd1B3ww1U06chQ9cBTV3SZrsnHt3dtGUs3Yl8y6pqlcAUze4To/4CYYJE19VFp27T32AX+TevPTvSUtI4BnjQDCCCCMAMKWEMAm/QskuZahc+wk/Zj5+ocMmr4RfD+jr0U8gNbaoaTDqa+vqgcDWNtXIEt4BD1rBBBGAGEEEEYAYQQQRgBhBBBGAGEEEEYAYQQQRgBhBBBGAGEEEEYAYQQQRgBhBBBGAGEEEEYAYQQQtsYAhn/82SK5/jPuxlRXujux2HTPgbnW2kdjX8s1uQK4MtXVeKYrMW/Cck2uR9CFqW7SpaOoK4Dbqvppqt3deIpzdSflj421eztzFXYGcD0Ouli1cWyN7TSlexm6Gy9glXrMDOo1sGl1Y2vcY2r2eo8sOzWv1f/buHg41hMbWfan/RmuJQ7tu5BhIgoAAAAAAAAAAAAAAAj4DdjXYkK7VEucAAAAAElFTkSuQmCC",H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAA9CAYAAADlNZQ2AAAABHNCSVQICAgIfAhkiAAAAk5JREFUeJztmjuSwyAMhmVPbsGB0uQUadKm8SlygjS5nc7hrch4PbwEEkjs/mWckeFDCEl4gYQQcU891yjn3CJlew39iIi7RVAAANfnTWzsv1bBKqCYuL3sa2w2UF6cwILbcCZxOsHCbVCrODxs/QuguLTkYN1fD/hsb9EjuVWlC946hywszZCOKgHWOpdkgLcCCqDPWKc/DTk1FSxp72qChYj79XnbfYkx+8maDPCxldJ8KNTMp1Rkzyrxnlk9jAzr/noU/W9GYGRYn+0tMQ4TEjsNSz2QW7G4xBFHyQGesr0sJbUlmirPkpYYrNm8CqAC1owQSlXlWR5YLIjPCrQqg9coPw/ff8upZm6mYXEkvpQ5mj0NuSoESgPgwvHCnpIqo7zdlKeJw+JMYnvUm4i4x8YhAktiUj0L8xgw9phlHVTqnWywpDqlLTadc0vLiX5+dzMs31putRNTbffiCKkW2Pnd1XkWtxe1djhy9jhsVXnWjF3QEpFg9bzB0bQgfixFsKQhhbbgqE5rSllYo1ZYY68/CWsUKE1b0AsRd7OF9AiZK6S9qLkTR9053LNqEkaJPluJzeGwqJJsSOZsm4MlGfxztofDqpn8qILdbICnfvbEAXi4Z1nSPyyCVMLSeAXnnFtWDQPTWN6EtALoXElNamr+9ZDGBfzCyn3sMUIagB3HcAk+2MBEDOmt4TfAADpuokM6j2u4m5eqN7DQApqBBTDe003BApAHlgoJ5mAByAHLxU6TsLy4oJWmKKZhedVCo+ZxU8A6KwavNcn9AX1dWCe4ga5kAAAAAElFTkSuQmCC",j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAElBMVEUAAAAAAAAAAAAAAAAAAAAAAADgKxmiAAAABXRSTlMAUIAQz6lK3+MAAAC9SURBVHgBYhghYBQIKRIWMQkNdSYkwuAaGhpigCzADGCkjk4YAIEYDGMncIQulf1XKX0JMfBDXuX8FL3Lf+WtOZI3GpLuU/SRTBmSvl1kylAXHQVlSLcubsqQLx68KUN5fC/nFqAAKgqgohBKKiGkAmIqIKYCYiogphJiKiGmDDFliCmG9iI+br/4/gT8mPu37B/MrbI33d6+PAj7SO3DiWO+B8YePRxiUxyuwbpH9B72v+GuNghXQCMDjAIA0b6qzf9qWjYAAAAASUVORK5CYII=",w=new p,A=new M;A.installTool("Bold",{image:V,tooling({selectedElement:t,selection:i,range:e}){if(console.log(i,t),t&&i)if(i===t.innerText)(t==null?void 0:t.style.fontWeight)==="bold"?t.style.fontWeight="unset":t.style.fontWeight="bold";else{const n=document.createElement("span");n.innerText=i,n.style.fontWeight="bold",e.deleteContents(),e.insertNode(n)}}});A.installTool("Italic",{image:J,tooling({selectedElement:t,selection:i,range:e}){if(console.log(i,t),t&&i)if(i===t.innerText)(t==null?void 0:t.style.fontStyle)==="italic"?t.style.fontStyle="unset":t.style.fontStyle="italic";else{const n=document.createElement("span");n.innerText=i,n.style.fontWeight="bold",e.deleteContents(),e.insertNode(n)}}});A.installTool("Color",{image:x,tooling({selectedElement:t,selection:i,range:e}){const n=document.createElement("input");n.type="color",n.addEventListener("change",r=>{const o=r.target.value;if(t&&i)if(i===t.innerText)(t==null?void 0:t.style.color)===o?t.style.color="unset":t.style.color=o;else{const a=document.createElement("span");a.innerText=i,a.style.color=o,e.deleteContents(),e.insertNode(a)}}),n.click()}});A.installTool("BackgroundColor",{image:G,tooling({selectedElement:t,selection:i,range:e}){const n=document.createElement("input");n.type="color",n.addEventListener("change",r=>{const o=r.target.value;if(t&&i)if(i===t.innerText)(t==null?void 0:t.style.backgroundColor)===o?t.style.backgroundColor="unset":t.style.backgroundColor=o;else{const a=document.createElement("span");a.innerText=i,a.style.color=o,e.deleteContents(),e.insertNode(a)}}),n.click()}});A.installTool("Image",{image:H,tooling({selectedElement:t,selection:i,range:e}){const n=document.createElement("input");n.type="file",n.accept="image/*",n.click(),n.addEventListener("change",r=>{const o=r.target.files[0];if(o&&o.type.startsWith("image/")){const a=new FileReader;a.onload=l=>{const c=document.createElement("img");c.src=l.target.result,t?t==null||t.insertAdjacentElement("afterend",c):A._el.appendChild(c)},a.readAsDataURL(o)}})}});A.installTool("Asset",{image:F,tooling(){console.log("asset")}});A.installTool("Link",{image:O,tooling({selectedElement:t,selection:i,range:e}){A.showModal("link",{selectedElement:t,selection:i,range:e})}});A.installTool("Alignment",{image:K,tooling({selectedElement:t,selection:i,range:e}){if(i){const n=document.createElement("div");n.style.textAlign="center",n.appendChild(e.extractContents()),e.insertNode(n)}}});A.installAction("paste",t=>{var r;t.preventDefault();const i=t.clipboardData||window.clipboardData,e=i.getData("text/plain"),n=i.files[0];if(n&&n.type.startsWith("image/")){const o=new FileReader;o.onload=a=>{var c;const l=document.createElement("img");l.src=a.target.result,A.selectedElement?(c=A.selectedElement)==null||c.insertAdjacentElement("afterend",l):A._el.appendChild(l)},o.readAsDataURL(n)}if(console.log({text:e}),e){const o=document.createElement("p");o.innerText=e.replace(/\n/g,""),A.selectedElement?(r=A.selectedElement)==null||r.insertAdjacentElement("afterend",o):A._el.appendChild(o)}});A.installModalTool("link",({selection:t,range:i})=>E({className:"flex-y mw"},E({className:"flex-x mw flex-cx"},Q,b({style:{width:"24px"},src:j,onclick(){A.hideModal()}})),L({placeholder:"input link here",reference:w.bindAs("link")}),I("Done",{onclick(){const e=w.link.value;if(e){const n=document.createElement("a");n.href=e,n.textContent=t,i.deleteContents(),i.insertNode(n)}A.hideModal()}})));A.installOn("pub");