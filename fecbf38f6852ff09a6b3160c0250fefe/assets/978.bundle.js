(window.webpackJsonp=window.webpackJsonp||[]).push([[978],{1166:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return g})),n.d(e,"c",(function(){return w}));var r,o=n(0),c=n(550),a=n(1167),i=n.n(a),u=n(77),l=n(279),f=n(1),s=n(1168),p=n.n(s),d=n(283),m=n(6),y=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),v=function(){return(v=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},b=function(t,e,n,r){var o,c=arguments.length,a=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(a=(c<3?o(a):c>3?o(e,n,a):o(e,n))||a);return c>3&&a&&Object.defineProperty(e,n,a),a},h=function(){function t(){}return t.buildStore=function(){var t=u.combineReducers(v({},d.a));return u.createStore((function(e,n){return e=n.type===m.a.clearState?void 0:e,t(e,n)}),u.applyMiddleware(l.a))},t.randomDate=function(){return new Date(+new Date-Math.floor(1e10*Math.random()))},t.randomValue1To100=function(){return Math.floor(100*Math.random()+1)},t.makeDebounceStatic=function(){spyOn(f,"debounce").and.callFake((function(t){return function(){t.apply(this,arguments)}}))},t.makeDeferSync=function(){spyOn(f,"defer").and.callFake((function(t){t.apply(this,arguments)}))},t.wrapComponentInDnDContext=function(t){return function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return y(n,e),n.prototype.render=function(){return o.createElement(t,this.props)},n=b([Object(c.DragDropContext)(i.a)],n)}(o.Component)},t}(),g={svgName:"domain-google",svgClass:"icon mod-2x"},w={title:"default tooltip description",placement:"bottom",container:"body"};p()([l.a])},1167:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1153);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.createTestBackend}})},1168:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};function n(){var t=[],n=[];return{getState:function(){return u(e)?e(t):e},getActions:function(){return t},dispatch:function(e){if(!(0,a.default)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant? Action: '+JSON.stringify(e));t.push(e);for(var r=0;r<n.length;r++)n[r]();return e},clearActions:function(){t=[]},subscribe:function(t){return u(t)&&n.push(t),function(){var e=n.indexOf(t);e<0||n.splice(e,1)}},replaceReducer:function(t){if(!u(t))throw new Error("Expected the nextReducer to be a function.")}}}var r=o.applyMiddleware.apply(void 0,i(t))(n);return r()}};var r,o=n(77),c=n(1169),a=(r=c)&&r.__esModule?r:{default:r};function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var u=function(t){return"function"==typeof t}},1169:function(t,e){var n,r,o=Function.prototype,c=Object.prototype,a=o.toString,i=c.hasOwnProperty,u=a.call(Object),l=c.toString,f=(n=Object.getPrototypeOf,r=Object,function(t){return n(r(t))});t.exports=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=l.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=f(t);if(null===e)return!0;var n=i.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&a.call(n)==u}},2328:function(t,e,n){"use strict";n.r(e),n.d(e,"LinkSvgExamples",(function(){return f}));var r,o=n(0),c=n(1),a=n(1166),i=n(660),u=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=function(){return(l=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u(e,t),e.prototype.render=function(){var t={url:"https://www.google.ca",target:"_blank"};return o.createElement("div",{className:"mt2"},o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"Default LinkSvg"),o.createElement("div",{className:"form-control"},o.createElement(i.a,l({},t)))),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"LinkSvg with a tooltip"),o.createElement("div",{className:"form-control"},o.createElement(i.a,l({},c.extend({},t,{tooltip:a.c}))))),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"LinkSvg with a custom svg"),o.createElement("div",{className:"form-control"},o.createElement(i.a,l({},c.extend({},t,{svg:a.b}))))),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"LinkSvg with a tooltip and without a href"),o.createElement("div",{className:"form-control"},o.createElement(i.a,{tooltip:a.c,svg:a.b}))))},e}(o.Component)}}]);
//# sourceMappingURL=978.bundle.js.map