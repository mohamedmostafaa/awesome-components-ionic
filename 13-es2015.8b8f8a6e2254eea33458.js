(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"7a3y":function(e,t,n){"use strict";n.r(t),n.d(t,"startInputShims",(function(){return u}));var o=n("pM1R");const r=new WeakMap,i=(e,t,n,o=0)=>{r.has(e)!==n&&(n?a(e,t,o):l(e,t))},s=e=>e===e.getRootNode().activeElement,a=(e,t,n)=>{const o=t.parentNode,i=t.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,o.appendChild(i),r.set(e,i);const s="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${s}px,${n}px,0) scale(0)`},l=(e,t)=>{const n=r.get(e);n&&(r.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},c="input, textarea, [no-blur]",d=(e,t)=>{if("INPUT"!==e.tagName)return;if(e.parentElement&&"ION-INPUT"===e.parentElement.tagName)return;if(e.parentElement&&e.parentElement.parentElement&&"ION-SEARCHBAR"===e.parentElement.parentElement.tagName)return;const n=e.closest("ion-content");if(null===n)return;const o=n.$ionPaddingTimer;o&&clearTimeout(o),t>0?n.style.setProperty("--keyboard-offset",`${t}px`):n.$ionPaddingTimer=setTimeout(()=>{n.style.setProperty("--keyboard-offset","0px")},120)},u=e=>{const t=document,n=e.getNumber("keyboardHeight",290),r=e.getBoolean("scrollAssist",!0),a=e.getBoolean("hideCaretOnScroll",!0),l=e.getBoolean("inputBlurring",!0),u=e.getBoolean("scrollPadding",!0),m=Array.from(t.querySelectorAll("ion-input, ion-textarea")),p=new WeakMap,f=new WeakMap,v=async e=>{e.componentOnReady&&await e.componentOnReady();const t=e.shadowRoot||e,l=t.querySelector("input")||t.querySelector("textarea"),c=e.closest("ion-content");if(l){if(c&&a&&!p.has(e)){const t=((e,t,n)=>{if(!n||!t)return()=>{};const o=n=>{s(t)&&i(e,t,n)},r=()=>i(e,t,!1),a=()=>o(!0),l=()=>o(!1);return n.addEventListener("ionScrollStart",a),n.addEventListener("ionScrollEnd",l),t.addEventListener("blur",r),()=>{n.removeEventListener("ionScrollStart",a),n.removeEventListener("ionScrollEnd",l),t.addEventListener("ionBlur",r)}})(e,l,c);p.set(e,t)}if(c&&r&&!f.has(e)){const t=((e,t,n,r)=>{let a;const l=e=>{a=Object(o.j)(e)},c=l=>{if(!a)return;const c=Object(o.j)(l);((e,t,n)=>{if(t&&n){const e=t.x-n.x,o=t.y-n.y;return e*e+o*o>36}return!1})(0,a,c)||s(t)||(l.preventDefault(),l.stopPropagation(),((e,t,n,o)=>{const r=((e,t,n)=>((e,t,n,o)=>{const r=e.top,i=e.bottom,s=t.top,a=s+15,l=.5*Math.min(t.bottom,o-n)-i,c=a-r,d=Math.round(l<0?-l:c>0?-c:0),u=Math.min(d,r-s),m=Math.abs(u);return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,m/.3)),scrollPadding:n,inputSafeY:4-(r-a)}})((e.closest("ion-item,[ion-item]")||e).getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight))(e,n,o);if(Math.abs(r.scrollAmount)<4)t.focus();else if(i(e,t,!0,r.inputSafeY),t.focus(),"undefined"!=typeof window){let o;const s=async()=>{void 0!==o&&clearTimeout(o),window.removeEventListener("resize",s),await n.scrollByPoint(0,r.scrollAmount,r.scrollDuration),i(e,t,!1,r.inputSafeY),t.focus()};window.addEventListener("resize",s),o=setTimeout(s,1e3)}})(e,t,n,r))};return e.addEventListener("touchstart",l,!0),e.addEventListener("touchend",c,!0),()=>{e.removeEventListener("touchstart",l,!0),e.removeEventListener("touchend",c,!0)}})(e,l,c,n);f.set(e,t)}}};l&&(()=>{let e=!0,t=!1;const n=document;n.addEventListener("ionScrollStart",()=>{t=!0}),n.addEventListener("focusin",()=>{e=!0},!0),n.addEventListener("touchend",o=>{if(t)return void(t=!1);const r=n.activeElement;if(!r)return;if(r.matches(c))return;const i=o.target;i!==r&&(i.matches(c)||i.closest(c)||(e=!1,setTimeout(()=>{e||r.blur()},50)))},!1)})(),u&&(e=>{const t=document;t.addEventListener("focusin",t=>{d(t.target,e)}),t.addEventListener("focusout",e=>{d(e.target,0)})})(n);for(const o of m)v(o);t.addEventListener("ionInputDidLoad",e=>{v(e.detail)}),t.addEventListener("ionInputDidUnload",e=>{(e=>{if(a){const t=p.get(e);t&&t(),p.delete(e)}if(r){const t=f.get(e);t&&t(),f.delete(e)}})(e.detail)})}}}]);