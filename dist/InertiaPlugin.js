/*!
 * InertiaPlugin 3.12.2
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * *** DO NOT DEPLOY THIS FILE ***
 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
 * Loading it on an unauthorized domain violates the license and will cause a redirect.
 * Get the unrestricted file by joining Club GreenSock at https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function m(){return n||"undefined"!=typeof window&&(n=window.gsap)}function p(t){return c(t).id}function q(t){return f[p("string"==typeof t?g(t)[0]:t)]}function r(t){var e,n=o;if(.05<=t-s)for(s=t;n;)((e=n.g(n.t,n.p))!==n.v1||.2<t-n.t1)&&(n.v2=n.v1,n.v1=e,n.t2=n.t1,n.t1=t),n=n._next}function t(){(n=m())&&(g=n.utils.toArray,i=n.utils.getUnit,c=n.core.getCache,a=n.ticker,l=1)}function u(t,e,n,r){this.t=t,this.p=e,this.g=t._gsap.get,this.rCap=d[n||i(this.g(t,e))],this.v1=this.v2=0,this.t1=this.t2=a.time,r&&((this._next=r)._prev=this)}var n,l,g,i,o,a,s,c,f={},d={deg:360,rad:2*Math.PI},h=function(){function VelocityTracker(e,n){l||t(),this.target=g(e)[0],(f[p(this.target)]=this)._props={},n&&this.add(n)}VelocityTracker.register=function register(e){n=e,t()};var e=VelocityTracker.prototype;return e.get=function get(t,e){var n,r,i=this._props[t]||console.warn("Not tracking "+t+" velocity.");return n=parseFloat(e?i.v1:i.g(i.t,i.p))-parseFloat(i.v2),(r=i.rCap)&&(n%=r)!==n%(r/2)&&(n=n<0?n+r:n-r),function _round(t){return Math.round(1e4*t)/1e4}(n/((e?i.t1:a.time)-i.t2))},e.getAll=function getAll(){var t,e={},n=this._props;for(t in n)e[t]=this.get(t);return e},e.isTracking=function isTracking(t){return t in this._props},e.add=function add(t,e){t in this._props||(o||(a.add(r),s=a.time),o=this._props[t]=new u(this.target,t,e,o))},e.remove=function remove(t){var e,n,i=this._props[t];i&&(e=i._prev,n=i._next,e&&(e._next=n),n?n._prev=e:o===i&&(a.remove(r),o=0),delete this._props[t])},e.kill=function kill(t){for(var e in this._props)this.remove(e);t||delete f[p(this.target)]},VelocityTracker.track=function track(e,n,r){l||t();for(var i,o,a=[],s=g(e),c=n.split(","),u=(r||"").split(","),f=s.length;f--;){for(i=q(s[f])||new VelocityTracker(s[f]),o=c.length;o--;)i.add(c[o],u[o]||u[0]);a.push(i)}return a},VelocityTracker.untrack=function untrack(t,e){var n=(e||"").split(",");g(t).forEach(function(t){var e=q(t);e&&(n.length?n.forEach(function(t){return e.remove(t)}):e.kill(1))})},VelocityTracker.isTracking=function isTracking(t,e){var n=q(t);return n&&n.isTracking(e)},VelocityTracker.getVelocity=function getVelocity(t,e){var n=q(t);return n&&n.isTracking(e)?n.get(e):console.warn("Not tracking velocity of "+e)},VelocityTracker}();h.getByTarget=q,m()&&n.registerPlugin(h);function L(){return v||"undefined"!=typeof window&&(v=window.gsap)&&v.registerPlugin&&v}function N(t){return"number"==typeof t}function O(t){return"object"==typeof t}function P(t){return"function"==typeof t}function S(){return String.fromCharCode.apply(null,arguments)}function Y(t){return t}function aa(t){return Math.round(1e4*t)/1e4}function ba(t,e,n){for(var r in e)r in t||r===n||(t[r]=e[r]);return t}function ca(t){var e,n,r={};for(e in t)r[e]=O(n=t[e])&&!D(n)?ca(n):n;return r}function da(t,e,n,r,i){var o,a,s,c,u=e.length,f=0,l=$;if(O(t)){for(;u--;){for(s in o=e[u],a=0,t)a+=(c=o[s]-t[s])*c;a<l&&(f=u,l=a)}if((i||$)<$&&i<Math.sqrt(l))return t}else for(;u--;)(a=(o=e[u])-t)<0&&(a=-a),a<l&&r<=o&&o<=n&&(f=u,l=a);return e[f]}function ea(t,e,n,r,i,o,a){if("auto"===t.end)return t;var s,c,u=t.end;if(n=isNaN(n)?$:n,r=isNaN(r)?-$:r,O(e)){if(s=e.calculated?e:(P(u)?u(e,a):da(e,u,n,r,o))||e,!e.calculated){for(c in s)e[c]=s[c];e.calculated=!0}s=s[i]}else s=P(u)?u(e,a):D(u)?da(e,u,n,r,o):parseFloat(u);return n<s?s=n:s<r&&(s=r),{max:s,min:s,unitFactor:t.unitFactor}}function fa(t,e,n){return isNaN(t[e])?n:+t[e]}function ga(t,e){return.05*e*t/k}function ha(t,e,n){return Math.abs((e-t)*k/n/.05)}function ja(t,e,n,r){if(e.linkedProps){var i,o,a,s,c,u,f=e.linkedProps.split(","),l={};for(i=0;i<f.length;i++)(a=e[o=f[i]])&&(s=N(a.velocity)?a.velocity:(c=c||C(t))&&c.isTracking(o)?c.get(o):0,u=Math.abs(s/fa(a,"resistance",r)),l[o]=parseFloat(n(t,o))+ga(s,u));return l}}function la(){(v=L())&&(y=v.parseEase,T=v.utils.toArray,b=v.utils.getUnit,V=v.core.getCache,j=v.utils.clamp,A=v.core.getStyleSaver,E=v.core.reverting||function(){},w=y("power3"),k=w(.05),F=v.core.PropTween,v.config({resistance:100,unitFactors:{time:1e3,totalTime:1e3,progress:1e3,totalProgress:1e3}}),x=v.config(),v.registerPlugin(h),_=1)}var v,_,y,T,w,x,b,F,V,k,j,M,A,E,C=h.getByTarget,W="InertiaPlugin",I=S(103,114,101,101,110,115,111,99,107,46,99,111,109),B=S(103,115,97,112,46,99,111,109),R=/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,U=function(t){var e="undefined"!=typeof window,n=0===(e?window.location.href:"").indexOf(S(102,105,108,101,58,47,47))||-1!==t.indexOf(S(108,111,99,97,108,104,111,115,116))||R.test(t),r=[I,B,S(99,111,100,101,112,101,110,46,105,111),S(99,111,100,101,112,101,110,46,112,108,117,109,98,105,110,103),S(99,111,100,101,112,101,110,46,100,101,118),S(99,111,100,101,112,101,110,46,97,112,112),S(99,111,100,101,112,101,110,46,119,101,98,115,105,116,101),S(112,101,110,115,46,99,108,111,117,100),S(99,115,115,45,116,114,105,99,107,115,46,99,111,109),S(99,100,112,110,46,105,111),S(112,101,110,115,46,105,111),S(103,97,110,110,111,110,46,116,118),S(99,111,100,101,99,97,110,121,111,110,46,110,101,116),S(116,104,101,109,101,102,111,114,101,115,116,46,110,101,116),S(99,101,114,101,98,114,97,120,46,99,111,46,117,107),S(116,121,109,112,97,110,117,115,46,110,101,116),S(116,119,101,101,110,109,97,120,46,99,111,109),S(112,108,110,107,114,46,99,111),S(104,111,116,106,97,114,46,99,111,109),S(119,101,98,112,97,99,107,98,105,110,46,99,111,109),S(97,114,99,104,105,118,101,46,111,114,103),S(99,111,100,101,115,97,110,100,98,111,120,46,105,111),S(99,115,98,46,97,112,112),S(115,116,97,99,107,98,108,105,116,122,46,99,111,109),S(115,116,97,99,107,98,108,105,116,122,46,105,111),S(99,111,100,105,101,114,46,105,111),S(109,111,116,105,111,110,116,114,105,99,107,115,46,99,111,109),S(115,116,97,99,107,111,118,101,114,102,108,111,119,46,99,111,109),S(115,116,97,99,107,101,120,99,104,97,110,103,101,46,99,111,109),S(115,116,117,100,105,111,102,114,101,105,103,104,116,46,99,111,109),S(119,101,98,99,111,110,116,97,105,110,101,114,46,105,111),S(106,115,102,105,100,100,108,101,46,110,101,116)],i=r.length;for(setTimeout(function checkWarn(){if(e)if("loading"===document.readyState||"interactive"===document.readyState)document.addEventListener("readystatechange",checkWarn);else{document.removeEventListener("readystatechange",checkWarn);var t="object"==typeof v?v:e&&window.gsap;e&&window.console&&!window._gsapWarned&&"object"==typeof t&&!1!==t.config().trialWarn&&(console.log(S(37,99,87,97,114,110,105,110,103),S(102,111,110,116,45,115,105,122,101,58,51,48,112,120,59,99,111,108,111,114,58,114,101,100,59)),console.log(S(65,32,116,114,105,97,108,32,118,101,114,115,105,111,110,32,111,102,32)+W+S(32,105,115,32,108,111,97,100,101,100,32,116,104,97,116,32,111,110,108,121,32,119,111,114,107,115,32,108,111,99,97,108,108,121,32,97,110,100,32,111,110,32,100,111,109,97,105,110,115,32,108,105,107,101,32,99,111,100,101,112,101,110,46,105,111,32,97,110,100,32,99,111,100,101,115,97,110,100,98,111,120,46,105,111,46,32,42,42,42,32,68,79,32,78,79,84,32,68,69,80,76,79,89,32,84,72,73,83,32,70,73,76,69,32,42,42,42,32,76,111,97,100,105,110,103,32,105,116,32,111,110,32,97,110,32,117,110,97,117,116,104,111,114,105,122,101,100,32,115,105,116,101,32,118,105,111,108,97,116,101,115,32,116,104,101,32,108,105,99,101,110,115,101,32,97,110,100,32,119,105,108,108,32,99,97,117,115,101,32,97,32,114,101,100,105,114,101,99,116,46,32,80,108,101,97,115,101,32,106,111,105,110,32,67,108,117,98,32,71,114,101,101,110,83,111,99,107,32,116,111,32,103,101,116,32,102,117,108,108,32,97,99,99,101,115,115,32,116,111,32,116,104,101,32,98,111,110,117,115,32,112,108,117,103,105,110,115,32,116,104,97,116,32,98,111,111,115,116,32,121,111,117,114,32,97,110,105,109,97,116,105,111,110,32,115,117,112,101,114,112,111,119,101,114,115,46,32,68,105,115,97,98,108,101,32,116,104,105,115,32,119,97,114,110,105,110,103,32,119,105,116,104,32,103,115,97,112,46,99,111,110,102,105,103,40,123,116,114,105,97,108,87,97,114,110,58,32,102,97,108,115,101,125,41,59)),console.log(S(37,99,71,101,116,32,117,110,114,101,115,116,114,105,99,116,101,100,32,102,105,108,101,115,32,97,116,32,104,116,116,112,115,58,47,47,103,114,101,101,110,115,111,99,107,46,99,111,109,47,99,108,117,98),S(102,111,110,116,45,115,105,122,101,58,49,54,112,120,59,99,111,108,111,114,58,35,52,101,57,56,49,53)),window._gsapWarned=1)}},50);-1<--i;)if(-1!==t.indexOf(r[i]))return!0;return n||!setTimeout(function(){e&&(window.location.href=S(104,116,116,112,115,58,47,47)+I+S(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47)+"?plugin="+W+"&source=trial")},4e3)}("undefined"!=typeof window?window.location.host:""),D=Array.isArray,$=1e10,z={resistance:1,checkpoint:1,preventOvershoot:1,linkedProps:1,radius:1,duration:1},G={version:"3.12.2",name:"inertia",register:function register(t){v=t,la()},init:function init(t,e,n,r,i){_||la();var o=C(t);if("auto"===e){if(!o)return void console.warn("No inertia tracking on "+t+". InertiaPlugin.track(target) first.");e=o.getAll()}this.styles=A&&"object"==typeof t.style&&A(t),this.target=t,this.tween=n,M=e;var a,s,c,u,f,l,g,d,p,h=t._gsap,v=h.get,y=e.duration,m=O(y),S=e.preventOvershoot||m&&0===y.overshoot,w=fa(e,"resistance",x.resistance),k=N(y)?y:function _calculateTweenDuration(t,e,n,r,i,o){if(void 0===n&&(n=10),void 0===r&&(r=.2),void 0===i&&(i=1),void 0===o&&(o=0),function _isString(t){return"string"==typeof t}(t)&&(t=T(t)[0]),!t)return 0;var a,s,c,u,f,l,g,d,p,h,v=0,y=$,m=e.inertia||e,S=V(t).get,w=fa(m,"resistance",x.resistance);for(a in h=ja(t,m,S,w),m)z[a]||(s=m[a],O(s)||((d=d||C(t))&&d.isTracking(a)?s=N(s)?{velocity:s}:{velocity:d.get(a)}:(u=+s||0,c=Math.abs(u/w))),O(s)&&(u=N(s.velocity)?s.velocity:(d=d||C(t))&&d.isTracking(a)?d.get(a):0,c=j(r,n,Math.abs(u/fa(s,"resistance",w))),l=(f=parseFloat(S(t,a))||0)+ga(u,c),"end"in s&&(s=ea(s,h&&a in h?h:l,s.max,s.min,a,m.radius,u),o&&(M===e&&(M=m=ca(e)),m[a]=ba(s,m[a],"end"))),"max"in s&&l>+s.max+1e-10?(p=s.unitFactor||x.unitFactors[a]||1,(g=f>s.max&&s.min!==s.max||-15<u*p&&u*p<45?r+.1*(n-r):ha(f,s.max,u))+i<y&&(y=g+i)):"min"in s&&l<s.min-1e-10&&(p=s.unitFactor||x.unitFactors[a]||1,(g=f<s.min&&s.min!==s.max||-45<u*p&&u*p<15?r+.1*(n-r):ha(f,s.min,u))+i<y&&(y=g+i)),v<g&&(v=g)),v<c&&(v=c));return y<v&&(v=y),n<v?n:v<r?r:v}(t,e,m&&y.max||10,m&&y.min||.2,m&&"overshoot"in y?+y.overshoot:S?0:1,!0);for(a in e=M,M=0,p=ja(t,e,v,w),e)z[a]||(s=e[a],P(s)&&(s=s(r,t,i)),N(s)?f=s:O(s)&&!isNaN(s.velocity)?f=+s.velocity:o&&o.isTracking(a)?f=o.get(a):console.warn("ERROR: No velocity was defined for "+t+" property: "+a),l=ga(f,k),d=0,c=v(t,a),u=b(c),c=parseFloat(c),O(s)&&(g=c+l,"end"in s&&(s=ea(s,p&&a in p?p:g,s.max,s.min,a,e.radius,f)),"max"in s&&+s.max<g?S||s.preventOvershoot?l=s.max-c:d=s.max-c-l:"min"in s&&+s.min>g&&(S||s.preventOvershoot?l=s.min-c:d=s.min-c-l)),this._props.push(a),this.styles&&this.styles.save(a),this._pt=new F(this._pt,t,a,c,0,Y,0,h.set(t,a,this)),this._pt.u=u||0,this._pt.c1=l,this._pt.c2=d);return n.duration(k),U},render:function render(t,e){var n=e._pt;if((t=w(e.tween._time/e.tween._dur))||!E())for(;n;)n.set(n.t,n.p,aa(n.s+n.c1*t+n.c2*t*t)+n.u,n.d,t),n=n._next;else e.styles.revert()}};"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(t){return G[t]=h[t]}),L()&&v.registerPlugin(G),e.InertiaPlugin=G,e.VelocityTracker=h,e.default=G;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});
