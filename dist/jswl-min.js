!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.jswl=r():t.jswl=r()}(window,function(){return function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=1)}([function(t,r,e){var n=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{c({},"")}catch(t){c=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),u=new k(n||[]);return i._invoke=function(t,r,e){var n=s;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return A()}for(e.method=o,e.arg=i;;){var u=e.delegate;if(u){var a=P(u,e);if(a){if(a===v)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===s)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var c=l(t,r,e);if("normal"===c.type){if(n=e.done?y:h,c.arg===v)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n=y,e.method="throw",e.arg=c.arg)}}}(t,e,u),i}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var s="suspendedStart",h="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function b(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,O=w&&w(w(_([])));O&&O!==e&&n.call(O,i)&&(m=O);var x=b.prototype=d.prototype=Object.create(m);function j(t){["next","throw","return"].forEach(function(r){c(t,r,function(t){return this._invoke(r,t)})})}function E(t,r){var e;this._invoke=function(o,i){function u(){return new r(function(e,u){!function e(o,i,u,a){var c=l(t[o],t,i);if("throw"!==c.type){var f=c.arg,s=f.value;return s&&"object"==typeof s&&n.call(s,"__await")?r.resolve(s.__await).then(function(t){e("next",t,u,a)},function(t){e("throw",t,u,a)}):r.resolve(s).then(function(t){f.value=t,u(f)},function(t){return e("throw",t,u,a)})}a(c.arg)}(o,i,e,u)})}return e=e?e.then(u,u):u()}}function P(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,P(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function L(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function _(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,u=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return u.next=u}}return{next:A}}function A(){return{value:r,done:!0}}return g.prototype=x.constructor=b,b.constructor=g,g.displayName=c(b,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c(t,a,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},j(E.prototype),E.prototype[u]=function(){return this},t.AsyncIterator=E,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var u=new E(f(r,e,n,o),i);return t.isGeneratorFunction(e)?u:u.next().then(function(t){return t.done?t.value:u.next()})},j(x),c(x,a,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var u=this.tryEntries[i],a=u.completion;if("root"===u.tryLoc)return o("end");if(u.tryLoc<=this.prev){var c=n.call(u,"catchLoc"),f=n.call(u,"finallyLoc");if(c&&f){if(this.prev<u.catchLoc)return o(u.catchLoc,!0);if(this.prev<u.finallyLoc)return o(u.finallyLoc)}else if(c){if(this.prev<u.catchLoc)return o(u.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return o(u.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(u)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,r,e){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.r(r);var o=function(t){return null!=t},i=function(t){var r=t.split("[");return r.forEach(function(t,r,e){e[r]=t.replace(/\]/g,"")}),r},u=function(t){return o(t)&&"object"===n(t)},a=function(t){for(var r in t)if(t.hasOwnProperty(r))return!1;return!0},c=function(t){return null==t||""===t||0===t||"0"===t||o(t.length)&&0===t.length||!1===t||u(t)&&a(t)},f={isNullOrUndefined:function(t){return null==t},isDefined:o,isObject:u,isObjectEmpty:a,isEmpty:c,getPropIfObjectDefined:function(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return u(t)?t[r]:e},getSquareBracketedFragments:i,getSquareBracketedFragmentByNumber:function(t,r){return i(t)[r]},checkForSubstring:function(t,r){return-1!==t.indexOf(r)},cloneByJson:function(t){return JSON.parse(JSON.stringify(t))},hello:function(){console.log("Hello JSWL! ;)")}},l=function(t,r){var e={found:!1,value:void 0};"."===r.charAt(0)&&(r=r.substring(1));for(var n=r.split("."),i=t,u=0;u<n.length;u++){if(!o(i)){e.found=!1;break}e.found=!!i.hasOwnProperty(n[u]),i=i[n[u]]}return e.found&&(e.value=i),e},s={getPropByPath:l,getObjectPropBySubprop:function(t,r,e){var n=void 0,o=null;for(var i in t)if((o=l(t[i],r)).found&&o.value===e){n=t[i];break}return n}},h=function(t,r){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!c(e)){if("boolean"!=typeof e)throw new Error("3rd param must be boolean");if(e)return!(-1===r.indexOf(t))}for(var n=0;n<r.length;n++)if(r[n]==t)return!0;return!1},p=function(t,r,e){for(var n={key:i,value:t[i]},o=null,i=0;i<t.length;i++)if((o=l(t[i],r)).found&&o.value===e){n={key:i,value:t[i]};break}return n},y={inArray:h,isAnyInArray:function(t,r){for(var e=!1,n=0;n<t.length;n++)if(h(t[n],r,!0)){e=!0;break}return e},removeAllElementsLike:function(t,r){var e=[];return t.forEach(function(t,n,o){t!==r&&e.push(t)}),e},uniqueArray:function(t){return Array.from(new Set(t))},allNotEmpty:function(t){for(var r=!0,e=0;e<t.length;e++)if(c(t[e])){r=!1;break}return r},getArrElementAndIndexByObjectProp:p,getArrElementByObjectProp:function(t,r,e){var n=p(t,r,e);return n?n.value:n},countSubElementsWithValue:function t(r,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"[]",i=e.split(o),u=0;if(i.length>0){var a=i[0];if(i.length>1)for(var c=0;c<r.length;c++)r[c]&&r[c][a]&&(u+=t(r[c][a],i.slice(1).join(o),n));else for(c=0;c<r.length;c++)if(r[c]){var f=l(r[c],a);f.found&&(u+=f.value===n?1:0)}}return u},countElementsInSubArrays:function t(r,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"[]",o=e.split(n),i=0;if(o.length>0){var u=o[0];if(o.length>1)for(var a=0;a<r.length;a++)r[a]&&r[a][u]&&(i+=t(r[a][u],o.slice(1).join(n)));else for(a=0;a<r.length;a++)if(r[a]){var c=l(r[a],u);c.found&&Array.isArray(c.value)&&(i+=c.value.length)}}return i}},v=e(0),d=e.n(v);function g(t,r,e,n,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void e(t)}a.done?r(c):Promise.resolve(c).then(n,o)}var b={downloadBlobOrGetErrorInJson:function(){var t,r=(t=d.a.mark(function t(r,e){var n,o,i,u,a=arguments;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>2&&void 0!==a[2]?a[2]:function(){},t.next=3,fetch(r);case 3:if(!(o=t.sent).ok){t.next=11;break}return t.next=7,o.blob();case 7:i=t.sent,e(i),t.next=15;break;case 11:return t.next=13,o.json();case 13:u=t.sent,n(u);case 15:case"end":return t.stop()}},t)}),function(){var r=this,e=arguments;return new Promise(function(n,o){var i=t.apply(r,e);function u(t){g(i,n,o,u,a,"next",t)}function a(t){g(i,n,o,u,a,"throw",t)}u(void 0)})});return function(t,e){return r.apply(this,arguments)}}()},m={addPrefixIfNotExists:function(t,r){var e=t;return t.startsWith(r)||(e=r+t),e},removePrefixIfExists:function(t,r){var e=t;return t.startsWith(r)&&(e=t.slice(r.length)),e}};function w(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,n)}return e}function O(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?w(Object(e),!0).forEach(function(r){x(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}function x(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var j=O(O({},f),{},{obj:s,arr:y,file:b,str:m});r.default=j}]).default});