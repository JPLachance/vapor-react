(window.webpackJsonp=window.webpackJsonp||[]).push([[1048],{2307:function(t,n,e){"use strict";e.r(n),e.d(n,"NavigationConnectedExamples",(function(){return f}));var o,a=e(0),r=e(1),i=e(191),c=e(17),s=e(204),u=(o=function(t,n){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),p=function(){return(p=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var a in n=arguments[e])Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t}).apply(this,arguments)},l=["loading-navigation-connected"],f=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return u(n,t),n.prototype.componentWillMount=function(){i.a.subscribe((function(){r.contains([c.a.turnOn,c.a.add],i.a.getState().lastAction.type)&&setTimeout((function(){i.a.dispatch(Object(c.d)(l))}),2e3)}))},n.prototype.render=function(){var t={id:"navigation-connected",totalPages:10,totalEntries:50,loadingIds:l};return a.createElement("div",{className:"mt2"},a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"Navigation with Redux state and loading"),a.createElement(s.a,p({},t))))},n}(a.Component)}}]);
//# sourceMappingURL=1048.bundle.js.map