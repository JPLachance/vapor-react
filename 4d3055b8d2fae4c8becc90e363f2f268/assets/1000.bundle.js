(window.webpackJsonp=window.webpackJsonp||[]).push([[1e3],{2283:function(e,t,n){"use strict";n.r(t),n.d(t,"LastUpdatedConnectedExamples",(function(){return s}));var o,r=n(0),c=n(6),i=n(80),a=n(660),u=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(e,t,n,o){var r,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(c<3?r(i):c>3?r(t,n,i):r(t,n))||i);return c>3&&i&&Object.defineProperty(t,n,i),i},f=function(){return{}},d=function(e){return{onRefresh:function(){e(Object(i.c)("LastUpdatedConnectedExampleComponent"))}}},s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),t.prototype.componentDidMount=function(){var e=this;setInterval((function(){e.props.onRefresh()}),1e4)},t.prototype.render=function(){return r.createElement("div",{className:"form-group",style:{width:400}},r.createElement("div",null,r.createElement("label",{className:"form-control-label"},"Last update updating with Redux (every 10 seconds here with the changeLastUpdated action with the id)"),r.createElement(a.a,{id:"LastUpdatedConnectedExampleComponent"})))},t=p([Object(c.b)(f,d)],t)}(r.Component)},660:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o=n(7),r=n(1),c=n(6),i=n(192),a=n(80),u=Object(o.b)((function(e,t){var n=r.findWhere(e.lastUpdatedComposite,{id:t.id});return{time:n?n.time:new Date}}),(function(e,t){return{onRender:function(){return e(Object(a.b)(t.id))},onDestroy:function(){return e(Object(a.d)(t.id))}}}),c.c.mergeProps)(i.a)}}]);
//# sourceMappingURL=1000.bundle.js.map