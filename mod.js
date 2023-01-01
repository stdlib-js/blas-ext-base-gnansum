// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,a=t.__defineSetter__,u=t.__lookupGetter__,i=t.__lookupSetter__;var l=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,l){var c,f,_,p;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(u.call(r,e)||i.call(r,e)?(c=r.__proto__,r.__proto__=t,delete r[e],r[e]=l.value,r.__proto__=c):r[e]=l.value),_="get"in l,p="set"in l,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(r,e,l.get),p&&a&&a.call(r,e,l.set),r};function c(r,e,t){l(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function f(r){return r!=r}function _(r){return Math.abs(r)}function p(r,e,t){var n,o,a,u,i,l;if(r<=0)return 0;if(1===r||0===t)return f(e[0])?0:e[0];for(o=t<0?(1-r)*t:0,n=0,i=0,l=0;l<r;l++)!1===f(a=e[o])&&(u=n+a,_(n)>=_(a)?i+=n-u+a:i+=a-u+n,n=u),o+=t;return n+i}function b(r,e,t,n){var o,a,u,i,l,c;if(r<=0)return 0;if(1===r||0===t)return f(e[n])?0:e[n];for(a=n,o=0,l=0,c=0;c<r;c++)!1===f(u=e[a])&&(i=o+u,_(o)>=_(u)?l+=o-i+u:l+=u-i+o,o=i),a+=t;return o+l}function y(r,e,t){return p(r,e,t)}function d(r,e,t,n){return b(r,e,t,n)}c(p,"ndarray",b),c(y,"ndarray",d);export{y as default,d as ndarray};
//# sourceMappingURL=mod.js.map