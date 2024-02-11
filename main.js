(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,'* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: 1fr;\n  height: 100vh;\n}\n\n.sidebar {\n  grid-column: 1 / 2;\n  padding: 20px;\n  background-color: #f0f0f0;\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n}\n\n.main {\n  grid-column: 2 / 3;\n}\n\n.menu {\n  display: grid;\n  gap: 20px;\n}\n\n.projects {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.projects-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.project {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nbutton.project-remove-button {\n  border: none;\n}\n\nbutton.btn-remove-todo {\n  border: none;\n  background-color: transparent;\n  opacity: 0.75;\n}\n\nbutton.btn-edit-todo {\n  border: none;\n  background-color: transparent;\n  opacity: 0.75;\n}\n\n.project:hover {\n  cursor: pointer;\n}\n\nbutton.btn-new-project-modal {\n  border-style: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5rem;\n  background-color: transparent;\n}\n\n.main {\n  display: grid;\n  padding: 50px;\n  grid-template-rows: 50px 1fr;\n  gap: 20px;\n  justify-content: center;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton.btn-new-todo-modal {\n  justify-self: center;\n  border-style: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  padding: 0 10px;\n  font-size: 1.5rem;\n  border-radius: 20px;\n  background-color: transparent;\n}\n\n.modal-buttons {\n  display: flex;\n  gap: 10px;\n  /* justify-content: space-between; */\n}\n\n.modal-buttons > button {\n  padding: 10px;\n  border-radius: 15px;\n}\n\nbutton.btn-new-todo-modal:hover {\n  background-color: #ececec;\n}\n\ninput, select {\n  padding: 10px;\n}\n\n.form-content > :user-invalid {\n  border-style: solid;\n  border-color: red\n}\n\n.todos {\n  grid-row: 2 / 3;\n  display: grid;\n  gap: 10px;\n  width: 600px;\n  grid-template-rows: 50px 1fr;\n  grid-template-columns: 1fr;\n}\n\n.items-container {\n  display: grid;\n  grid-auto-rows: min-content;\n  gap: 20px;\n}\n\n.todo-item {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 10px;\n  background-color: #f8f8f8;\n  border-radius: 20px;\n  padding: 20px;\n  cursor: pointer;\n}\n\n.todo-item:hover {\n  background-color: #f0f0f0;\n}\n\n.todo-complete-title {\n  display: flex;\n  gap: 10px;\n}\n\n.todo-cont-title, .todo-cont-others {\n  display: flex;\n  gap: 10px;\n}\n\n.todo-cont-title {\n  flex-direction: column;\n  align-items: start;\n}\n\n.todo-desc {\n  opacity: 0.5;\n}\n\n.todo-date {\n  opacity: 0.5;\n}\n\n.todo-cont-others {\n  justify-content: end;\n  align-items: center;\n}\n\n.new-todo-dialog {\n  margin: auto;\n}\n\ndialog {\n  padding: 10px;\n  width: 400px;\n}\n\n.add-form {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n\n.form-content {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\nlabel {\n  font-size: 0.8rem;\n}\n\ndialog {\n  border: 5px solid #007bff;\n  padding: 20px;\n}\n\ndialog::backdrop {\n  background-color: #6c757d;\n  opacity: 0.75;\n}\n\n.todo-item.completed {\n  order: 1;\n}\n\n.completed > * {\n  text-decoration: line-through;\n  opacity: 0.5;\n}\n\n.priority {\n  padding: 5px;\n  border-radius: 10px;\n}\n\n.low-priority {\n  background-color: lightgrey;\n}\n\n.mid-priority {\n  background-color: #ffc107;\n}\n\n.high-priority {\n  background-color: #dc3545;\n}\n\n.todo-low-priority {\n  border-right: 10px solid lightgrey;\n}\n\n.todo-mid-priority {\n  border-right: 10px solid #ffc107;\n}\n\n.todo-high-priority {\n  border-right: 10px solid #dc3545;\n}',""]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],u=r.base?s[0]+r.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var m=n(l),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(h);else{var f=o(h,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var s=r(t,o),u=0;u<a.length;u++){var d=n(a[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!t;)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),u=n(216),d=n.n(u),l=n(589),m=n.n(l),h=n(426),f={};function g(t){localStorage.setItem("projects",JSON.stringify(t))}f.styleTagTransform=m(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),e()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const p=[];function b(t){return{name:t,todos:[]}}function y(t){p.push(t),g(p)}const w={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function v(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const x={date:v({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:v({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:v({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},k={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function M(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,o=n?.width?String(n.width):e;r=t.formattingValues[o]||t.formattingValues[e]}else{const e=t.defaultWidth,o=n?.width?String(n.width):t.defaultWidth;r=t.values[o]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const S={ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:M({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:M({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:M({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:M({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:M({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function C(t){return(e,n={})=>{const r=n.width,o=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],a=e.match(o);if(!a)return null;const i=a[0],c=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(c)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(c):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(c);let u;return u=t.valueCallback?t.valueCallback(s):s,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}const E={ordinalNumber:(P={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(P.matchPattern);if(!n)return null;const r=n[0],o=t.match(P.parsePattern);if(!o)return null;let a=P.valueCallback?P.valueCallback(o[0]):o[0];return a=e.valueCallback?e.valueCallback(a):a,{value:a,rest:t.slice(r.length)}}),era:C({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:C({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:C({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:C({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:C({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var P;const D={code:"en-US",formatDistance:(t,e,n)=>{let r;const o=w[t];return r="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:x,formatRelative:(t,e,n,r)=>k[t],localize:S,match:E,options:{weekStartsOn:0,firstWeekContainsDate:1}};let T={};function j(){return T}Math.pow(10,8);const L=6048e5,W=864e5;function q(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function O(t){const e=q(t);return e.setHours(0,0,0,0),e}function N(t){const e=q(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function Y(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function A(t){const e=q(t);return function(t,e){const n=O(t),r=O(e),o=+n-N(n),a=+r-N(r);return Math.round((o-a)/W)}(e,function(t){const e=q(t),n=Y(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function F(t,e){const n=j(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,o=q(t),a=o.getDay(),i=(a<r?7:0)+a-r;return o.setDate(o.getDate()-i),o.setHours(0,0,0,0),o}function H(t){return F(t,{weekStartsOn:1})}function z(t){const e=q(t),n=e.getFullYear(),r=Y(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=H(r),a=Y(t,0);a.setFullYear(n,0,4),a.setHours(0,0,0,0);const i=H(a);return e.getTime()>=o.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function I(t){const e=q(t),n=+H(e)-+function(t){const e=z(t),n=Y(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),H(n)}(e);return Math.round(n/L)+1}function Q(t,e){const n=q(t),r=n.getFullYear(),o=j(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,i=Y(t,0);i.setFullYear(r+1,0,a),i.setHours(0,0,0,0);const c=F(i,e),s=Y(t,0);s.setFullYear(r,0,a),s.setHours(0,0,0,0);const u=F(s,e);return n.getTime()>=c.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function B(t,e){const n=q(t),r=+F(n,e)-+function(t,e){const n=j(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,o=Q(t,e),a=Y(t,0);return a.setFullYear(o,0,r),a.setHours(0,0,0,0),F(a,e)}(n,e);return Math.round(r/L)+1}function G(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const X={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return G("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):G(n+1,2)},d:(t,e)=>G(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>G(t.getHours()%12||12,e.length),H:(t,e)=>G(t.getHours(),e.length),m:(t,e)=>G(t.getMinutes(),e.length),s:(t,e)=>G(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return G(Math.trunc(r*Math.pow(10,n-3)),e.length)}},$={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return X.y(t,e)},Y:function(t,e,n,r){const o=Q(t,r),a=o>0?o:1-o;return"YY"===e?G(a%100,2):"Yo"===e?n.ordinalNumber(a,{unit:"year"}):G(a,e.length)},R:function(t,e){return G(z(t),e.length)},u:function(t,e){return G(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return G(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return G(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return X.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return G(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const o=B(t,r);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):G(o,e.length)},I:function(t,e,n){const r=I(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):G(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):X.d(t,e)},D:function(t,e,n){const r=A(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):G(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const o=t.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return G(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const o=t.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return G(a,e.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),o=0===r?7:r;switch(e){case"i":return String(o);case"ii":return G(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let o;switch(o=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let o;switch(o=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return X.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):X.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):G(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):G(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):X.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):X.s(t,e)},S:function(t,e){return X.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return J(r);case"XXXX":case"XX":return R(r);default:return R(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return J(r);case"xxxx":case"xx":return R(r);default:return R(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+U(r,":");default:return"GMT"+R(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+U(r,":");default:return"GMT"+R(r,":")}},t:function(t,e,n){return G(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return G(t.getTime(),e.length)}};function U(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),o=Math.trunc(r/60),a=r%60;return 0===a?n+String(o):n+String(o)+e+G(a,2)}function J(t,e){return t%60==0?(t>0?"-":"+")+G(Math.abs(t)/60,2):R(t,e)}function R(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+G(Math.trunc(r/60),2)+e+G(r%60,2)}const Z=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},V=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},K={p:V,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return Z(t,e);let a;switch(r){case"P":a=e.dateTime({width:"short"});break;case"PP":a=e.dateTime({width:"medium"});break;case"PPP":a=e.dateTime({width:"long"});break;default:a=e.dateTime({width:"full"})}return a.replace("{{date}}",Z(r,e)).replace("{{time}}",V(o,e))}},_=/^D+$/,tt=/^Y+$/,et=["D","DD","YY","YYYY"];function nt(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=q(t);return!isNaN(Number(n))}const rt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ot=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,at=/^'([^]*?)'?$/,it=/''/g,ct=/[a-zA-Z]/;function st(t,e,n){const r=j(),o=n?.locale??r.locale??D,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,c=q(t);if(!nt(c))throw new RangeError("Invalid time value");let s=e.match(ot).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,K[e])(t,o.formatLong):t})).join("").match(rt).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:ut(t)};if($[e])return{isToken:!0,value:t};if(e.match(ct))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));o.localize.preprocessor&&(s=o.localize.preprocessor(c,s));const u={firstWeekContainsDate:a,weekStartsOn:i,locale:o};return s.map((r=>{if(!r.isToken)return r.value;const a=r.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return tt.test(t)}(a)||!n?.useAdditionalDayOfYearTokens&&function(t){return _.test(t)}(a))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),et.includes(t))throw new RangeError(r)}(a,e,String(t)),(0,$[a[0]])(c,a,o.localize,u)})).join("")}function ut(t){const e=t.match(at);return e?e[1].replace(it,"'"):t}function dt(t,e,n,r,o){return{title:t,desc:e,dueDate:st(new Date(n),"dd LLL yyyy"),priority:r,list:o,complete:!1}}function lt(t){p.forEach((e=>{e.name===t.list&&e.todos.push(t)})),g(p)}const mt=n.p+"d6f9c69058c26f573934.svg";function ht(){const t=document.querySelector(".projects");t.textContent="",p.forEach((e=>{const n=document.createElement("div");n.classList.toggle("project"),n.setAttribute("data-index",p.indexOf(e));const r=document.createElement("div");r.classList.toggle("project-name"),r.textContent=`# ${e.name}`,n.appendChild(r),r.addEventListener("click",(()=>{ft(e)}));const o=document.createElement("button");o.classList.toggle("project-remove-button"),n.appendChild(o);const a=new Image;a.src=mt,a.setAttribute("height","20px"),"Default"!==e.name&&o.appendChild(a),o.addEventListener("click",(()=>{p.splice(n.dataset.index,1),ht(),ft(p[0]),g(p)})),t.appendChild(n)}))}function ft(t){const e=document.querySelector(".todos");e.textContent="";const n=document.createElement("h2");n.classList.toggle("project-name"),n.textContent=`${t.name} list`,e.appendChild(n);const r=document.createElement("div");r.classList.toggle("items-container"),e.appendChild(r),t.todos.forEach((e=>{const n=document.createElement("div");n.classList.toggle("todo-item"),n.setAttribute("data-index",t.todos.indexOf(e));const o=document.createElement("div"),a=document.createElement("div");o.classList.toggle("todo-cont-title"),a.classList.toggle("todo-cont-others");const i=document.createElement("div");i.classList.toggle("todo-complete-title");const c=document.createElement("input");c.setAttribute("type","checkbox"),e.complete&&(n.classList.toggle("completed"),c.setAttribute("checked","checked")),i.appendChild(c),c.addEventListener("click",(t=>{!function(t){t.complete=!t.complete}(e),e.complete?n.classList.toggle("completed"):n.classList.remove("completed"),t.stopImmediatePropagation()}));const s=document.createElement("p");s.textContent=e.title,i.appendChild(s),o.appendChild(i);const u=document.createElement("p");u.classList.toggle("todo-date"),u.textContent=e.dueDate,o.appendChild(u);const d=document.createElement("p");d.classList.toggle("todo-desc"),d.textContent=e.desc,a.appendChild(d);const l=document.createElement("p");switch(l.textContent=e.priority,l.classList.toggle("priority"),e.priority){case"low":l.classList.toggle("low-priority"),n.classList.toggle("todo-low-priority");break;case"medium":l.classList.toggle("mid-priority"),n.classList.toggle("todo-mid-priority");break;case"high":l.classList.toggle("high-priority"),n.classList.toggle("todo-high-priority")}a.appendChild(l);const m=document.createElement("button");m.classList.toggle("btn-remove-todo");const h=new Image;h.src=mt,h.setAttribute("height","20px"),m.appendChild(h),a.appendChild(m),m.addEventListener("click",(()=>{t.todos.splice(n.dataset.index,1),ft(t)})),n.appendChild(o),n.addEventListener("click",(()=>{n.contains(a)?n.removeChild(a):n.appendChild(a)})),r.appendChild(n)}))}const gt=n.p+"ea69b56b7ead87a19cd2.svg";function pt(){const t=new Image;return t.src=gt,t.setAttribute("height","20px"),t}const bt=b("Default");y(bt);const yt=dt("Create a website","Using Tilda","2024 1 1","low","Default"),wt=dt("Create a website","Using JavaScript","2024 2 9","medium","Default"),vt=dt("Create a website","Using React","2024 8 6","high","Default");lt(yt),lt(wt),lt(vt),ht(),ft(bt),function(){const t=document.querySelector(".btn-new-project-modal");t.appendChild(pt()),t.addEventListener("click",(()=>{let t=prompt("Enter new Project name");""!==t?null!==t&&(y(b(t)),ht()):alert("Project should have name")}))}(),function(){const t=document.querySelector(".new-todo-dialog"),e=document.querySelector(".btn-new-todo-modal"),n=document.querySelector(".add-task-text-button");e.insertBefore(pt(),n),e.addEventListener("click",(()=>{t.showModal(),function(){document.querySelector("#addform").reset();const t=document.querySelector("#list");t.textContent="",p.forEach((e=>{const n=document.createElement("option");n.textContent=e.name,n.setAttribute("value",e.name),t.appendChild(n)}))}()}))}(),function(){const t=document.querySelector(".new-todo-dialog"),e=document.querySelector("#title"),n=document.querySelector("#description"),r=document.querySelector("#dueDate"),o=document.querySelector("#priority"),a=document.querySelector("#list");document.querySelector(".add-button").addEventListener("click",(()=>{e.checkValidity()&&r.checkValidity()&&(lt(dt(e.value,n.value,r.value,o.value,a.value)),p.forEach((t=>{t.name===a.value&&ft(t)})))})),document.querySelector(".close-modal").addEventListener("click",(()=>{t.close()}))}()})()})();