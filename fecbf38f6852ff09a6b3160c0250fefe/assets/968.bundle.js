(window.webpackJsonp=window.webpackJsonp||[]).push([[968],{2300:function(t,e,n){"use strict";n.r(e),n.d(e,"InfoBoxExamples",(function(){return u}));var o,r=n(0),a=n(565),c=n(682),i=n(786),l=n(683),p=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return p(e,t),e.prototype.render=function(){return r.createElement("div",{className:"mt2"},r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Empty InfoBox"),r.createElement(c.a,null)),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"InfoBox"),r.createElement(c.a,null,"Some information about the current component.")),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Collapsible InfoBox"),r.createElement(c.a,{className:"py0"},r.createElement(a.a,{headerClasses:"py2",id:"info-box-collapsible",headerContent:r.createElement("p",{className:"bold"},"Collapsible header"),expandedOnMount:!0},r.createElement("div",{className:"pb2"},r.createElement("p",null,"Some information about the current component."),r.createElement("p",{className:"mt2"},"Or some other piece of information"))))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"InfoBox with a link in the footer"),r.createElement(c.a,null,"Some information about the current component.",r.createElement(i.a,null,r.createElement(l.a,null,"More information about the current component")))))},e}(r.PureComponent)},565:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n(7),r=n(1),a=n(6),c=n(139),i=n(108),l=Object(o.b)((function(t,e){var n=Object(r.findWhere)(t.collapsibles,{id:e.id});return n?{expanded:n.expanded}:{expanded:e.expandedOnMount}}),(function(t,e){return{onMount:function(){return t(Object(i.b)(e.id,!!e.expandedOnMount))},onUnmount:function(){return t(Object(i.c)(e.id))},onToggleExpandedState:function(n){return t(Object(i.d)(e.id,!n))}}}),a.c.mergeProps)(c.a)},573:function(t,e,n){(e=t.exports=n(71)(!1)).push([t.i,"/* ----------- Deprecated Palette ----------- */\n.InfoBox-infoBox-1wF-uPZe11iTV_lVSZHpp7 {\n  padding: 1rem 1rem 1rem 1.5rem;\n  font-size: 14px;\n  line-height: 16px;\n  border-left: 4px solid #0d80ef;\n  border-radius: 2px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1); }\n\n.InfoBox-infoBoxFooter-128KFL1YtKWa5ExR2rCyzz {\n  margin-top: 1.5rem; }\n",""]),e.locals={infoBox:"InfoBox-infoBox-1wF-uPZe11iTV_lVSZHpp7",infoBoxFooter:"InfoBox-infoBoxFooter-128KFL1YtKWa5ExR2rCyzz"}},656:function(t,e,n){var o=n(573);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},a=n(72)(o,r);o.locals&&(t.exports=o.locals),t.hot.accept(573,(function(){var e=n(573);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var n,o=0;for(n in t){if(!e||t[n]!==e[n])return!1;o++}for(n in e)o--;return 0===o}(o.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(e)})),t.hot.dispose((function(){a()}))},682:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var o,r=n(2),a=n(0),c=n(656),i=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=function(){return(l=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.render=function(){return a.createElement("div",l({},this.props,{className:r("text-oxford-blue bg-onahau",this.props.className,c.infoBox)}),this.props.children)},e}(a.PureComponent)},683:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o,r=n(2),a=n(0),c=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=function(){return(i=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.render=function(){return a.createElement("a",i({},this.props,{className:r("text-oxford-blue underline",this.props.className)}),this.props.children)},e}(a.PureComponent)},786:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var o,r=n(2),a=n(0),c=n(656),i=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=function(){return(l=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.render=function(){return a.createElement("div",l({},this.props,{className:r(this.props.className,c.infoBoxFooter)}),this.props.children)},e}(a.PureComponent)}}]);
//# sourceMappingURL=968.bundle.js.map