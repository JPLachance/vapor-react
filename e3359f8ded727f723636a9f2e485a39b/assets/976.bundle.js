(window.webpackJsonp=window.webpackJsonp||[]).push([[976],{2296:function(t,e,n){"use strict";n.r(e),n.d(e,"FlatSelectExamples",(function(){return u}));var o,r=n(0),a=n(536),i=n(78),c=n(13),p=n(626),l=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(){return(s=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return l(e,t),e.prototype.render=function(){var t=[{id:a.a.generate(),option:{content:"Option 1"}},{id:a.a.generate(),option:{content:"Option 2"}},{id:a.a.generate(),option:{content:"Option 3"}}],e={svgName:"domain-google",svgClass:"icon"},n={content:function(){return r.createElement(c.a,s({},e))},classes:["mr1"]},o={content:function(){return r.createElement(c.a,s({},e))},classes:["ml1"]};return r.createElement("div",{className:"mt2"},r.createElement("h1",{className:"text-blue mb1"},"Flat Select List"),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Default Flat Select"),r.createElement("div",{className:"form-control"},r.createElement(p.a,s({},{id:a.a.generate(),options:t})))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Flat Select mod group"),r.createElement("div",{className:"form-control"},r.createElement(p.a,s({},{id:a.a.generate(),options:t,group:!0})))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Flat Select mod option picker"),r.createElement("div",{className:"form-control"},r.createElement(p.a,s({},{id:a.a.generate(),options:t,optionPicker:!0})))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Flat Select with option tooltip"),r.createElement("div",{className:"form-control"},r.createElement(p.a,s({},{id:a.a.generate(),options:[{id:a.a.generate(),option:{content:"Option 1"},tooltip:{title:"Option 1 tooltip",container:"body",placement:"bottom"}},{id:a.a.generate(),option:{content:"Option 2"},tooltip:{title:"Option 2 tooltip",container:"body",placement:"bottom"}}]})))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Flat Select mod group with option tooltip"),r.createElement("div",{className:"form-control"},r.createElement(p.a,s({},{id:a.a.generate(),options:[{id:a.a.generate(),option:{content:"Option 1"},tooltip:{title:"Option 1 tooltip",container:"body",placement:"bottom"}},{id:a.a.generate(),option:{content:"Option 2"},tooltip:{title:"Option 2 tooltip",container:"body",placement:"bottom"}}],group:!0})))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Flat Select with option prepend"),r.createElement("div",{className:"form-control"},r.createElement(p.a,s({},{id:a.a.generate(),options:[{id:a.a.generate(),option:{content:"Option 1"},prepend:n},{id:a.a.generate(),option:{content:"Option 2"},prepend:n}]})))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Flat Select with option append"),r.createElement("div",{className:"form-control"},r.createElement(p.a,s({},{id:a.a.generate(),options:[{id:a.a.generate(),option:{content:"Option 1"},append:o},{id:a.a.generate(),option:{content:"Option 2"},append:o}]})))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Flat Select with option component"),r.createElement("div",{className:"form-control"},r.createElement(p.a,s({},{id:a.a.generate(),options:[{id:a.a.generate(),option:{content:i.a}},{id:a.a.generate(),option:{content:i.a}}]})))))},e}(r.Component)},536:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=function(){function t(){}return t.generate=function(){var t=Date.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var n=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"===e?n:3&n|8).toString(16)}))},t}()},577:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n(50),r=n(1),a=n(198),i=function(t,e){return r.findWhere(t.flatSelect,{id:e.id})||a.a},c={getInput:i,getSelectedOptionId:Object(o.a)(i,(function(t){return t&&t.selectedOptionId}))}},624:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o,r=n(2),a=n(0),i=n(1),c=n(625),p=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=function(){return(l=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return p(e,t),e.prototype.componentWillMount=function(){this.props.onRender&&this.props.onRender()},e.prototype.componentWillUnmount=function(){this.props.onDestroy&&this.props.onDestroy()},e.prototype.handleOnOptionClick=function(t){this.props.onOptionClick&&this.props.onOptionClick(t),this.props.onClick&&this.props.onClick(t)},e.prototype.getOptions=function(){var t=this;return i.map(this.props.options,(function(e,n){return e.selected=t.props.selectedOptionId&&t.props.selectedOptionId===e.id,e.onClick=function(e){return t.handleOnOptionClick(e)},a.createElement(c.a,l({key:n},e))}))},e.prototype.render=function(){var t=r("flat-select",{"mod-btn-group":this.props.group,"mod-option-picker":this.props.optionPicker},this.props.classes);return a.createElement("div",{className:t},this.getOptions())},e}(a.Component)},625:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o,r=n(2),a=n(0),i=n(52),c=n(40),p=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=function(){return(l=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return p(e,t),e.prototype.onClick=function(){this.props.onClick&&this.props.onClick(this.props)},e.prototype.render=function(){var t=this,e=r("flat-select-option",{selectable:!this.props.selected},this.props.classes);return a.createElement("a",{className:e,onClick:function(){return t.onClick()}},a.createElement(c.a,l({},this.props.tooltip),this.props.prepend?a.createElement(i.a,l({},this.props.prepend)):null,a.createElement(i.a,l({},this.props.option)),this.props.append?a.createElement(i.a,l({},this.props.append)):null))},e.defaultProps={selected:!1},e}(a.Component)},626:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var o=n(7),r=n(6),a=n(624),i=n(83),c=n(577),p=Object(o.b)((function(t,e){return{selectedOptionId:c.a.getSelectedOptionId(t,e)}}),(function(t,e){return{onRender:function(){return t(Object(i.b)(e.id,e.defaultSelectedOptionId||e.options.length&&e.options[0].id))},onDestroy:function(){return t(Object(i.c)(e.id))},onOptionClick:function(n){return t(Object(i.d)(e.id,n.id))}}}),r.c.mergeProps)(a.a)}}]);
//# sourceMappingURL=976.bundle.js.map