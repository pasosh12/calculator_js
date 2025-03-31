(()=>{var n={56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var b=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:b,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),u=0;u<a.length;u++){var l=t(a[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},101:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>h});var r=t(72),o=t.n(r),a=t(825),i=t.n(a),c=t(659),s=t.n(c),u=t(56),l=t.n(u),d=t(540),p=t.n(d),f=t(113),b=t.n(f),g=t(462),v={};v.styleTagTransform=b(),v.setAttributes=l(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),o()(g.A,v);const h=g.A&&g.A.locals?g.A.locals:void 0},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},462:(n,e,t)=>{"use strict";t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    background-color: white;\n}\n\n.calculator {\n    background-color: #575555;\n    border-radius: 6px;\n    overflow: hidden;\n    width: 300px;\n}\n\n\n.display {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    background-color: #535353;\n    color: #fff;\n    font-size: 2rem;\n    padding: 10px;\n    height: 80px;\n    overflow: hidden;\n    word-break: break-word;\n    text-align: right;\n}\n\n.display span {\n    display: inline-block;\n    width: 100%;\n    font-size: clamp(1rem, 5vw, 2rem);\n    line-height: 1.2;\n}\n\n.buttons {\n    font-size: 26px;\n    gap: 2px;\n    border-radius: 4px;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-row: 2/3;\n}\n\n.buttons button {\n    font-size: 1em;\n    padding: 15px;\n    border: none;\n    border-radius: 1px;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n    color: white;\n    background-color: #797878;\n}\n\n.buttons .btnGrey {\n    background-color: #646464;\n}\n\n.buttons button:hover {\n    background-color: #aca7a7;\n}\n\n.buttons button.operator {\n    background-color: #FF9F0A;\n}\n\n.zero {\n    grid-column: span 2;\n}\n\n.traffic-light {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n    padding: 10px;\n}\n\n.circle {\n\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n    position: relative;\n    transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;\n}\n\n.red {\n    background-color: #ff605c;\n}\n\n.yellow {\n    background-color: #ffbd44;\n}\n\n.green {\n    background-color: #00ca4e;\n}\n\n.buttons button.operator:hover {\n    background-color: #e08400;\n}\n\n.circle:hover {\n    transform: translateY(-10px);\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n}\n",""]);const c=i},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},601:n=>{"use strict";n.exports=function(n){return n[1]}},659:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.nc=void 0,t(101);const r=document.querySelector(".display"),o=document.querySelectorAll(".buttons button");let a="",i="",c="",s=!1;function u(n){r.textContent=n}function l(n){var e;e=n.target.textContent,isNaN(e)?[",","."].includes(e)?f():["+","-","×","÷"].includes(e)?g(e):"="===e?v():"AC"===e?h():"±"===e?"0"!==r.textContent&&(c&&i?(i=(-1*parseFloat(i)).toString(),u(`${a} ${c} ${i}`)):(a=(-1*parseFloat(a)).toString(),u(a))):"%"===e&&(c?""!==i&&(i=(parseFloat(a)*parseFloat(i)/100).toString(),u(`${a} ${c} ${i}`)):""!==a&&(a=(parseFloat(a)/100).toString(),u(a))):d(e)}function d(n){"."!==n||c?"."===n&&c?i.includes(".")||(i+=""===i?"0.":".",u(`${a} ${c} ${i}`)):(s?(r.textContent=n,s=!1):r.textContent="0"===r.textContent?n:r.textContent+n,c?(i=p(i+n),u(`${a} ${c} ${i}`)):(a=p(a+n),u(a))):a.includes(".")||(a+=""===a?"0.":".",u(a))}function p(n){return n.startsWith(".")&&(n="0"+n),""===(n=n.replace(/^0+(?!\.)/,""))?"0":n}function f(){c?!i.includes(".")&&b(i)&&(i+=""===i?"0.":".",u(`${a} ${c} ${i}`)):!a.includes(".")&&b(a)&&(a+=""===a?"0.":".",u(a))}function b(n){const e=n.replace(/^0+/,"");return""===e||e.length>0}function g(n){c&&i&&v(),c=n,u(`${a} ${c} ${i}`)}function v(){const n=parseFloat(a),e=parseFloat(i);let t;switch(c){case"+":t=n+e;break;case"-":t=n-e;break;case"×":t=n*e;break;case"÷":t=0!==e?n/e:"Ошибка";break;default:return}Number.isInteger(t)||(t=t.toFixed(2)),u(t),s=!0,a=t.toString(),i="",c=""}function h(){a="",i="",c="",u(0)}o.forEach((n=>{n.addEventListener("click",l)})),document.addEventListener("keydown",(function(n){const e=n.key;isNaN(e)?["+","-","*","/"].includes(e)?g(function(n){switch(n){case"/":return"÷";case"*":return"×";default:return n}}(e)):[",","."].includes(e)?f():"Enter"===e||"="===e?v():"Escape"===e||"Delete"===e?h():"Backspace"===e&&(s||(r.textContent=r.textContent.slice(0,-1)||"0",c?i=i.slice(0,-1):a=a.slice(0,-1))):d(e)}))})();