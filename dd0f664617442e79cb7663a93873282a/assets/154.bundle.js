(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{590:function(e,t,o){"use strict";o.r(t);var n,r=o(0),l=o(9),a=o(19),i=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),c=function(e,t,o,n){var r,l=arguments.length,a=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(l<3?r(a):l>3?r(t,o,a):r(t,o))||a);return l>3&&a&&Object.defineProperty(t,o,a),a},s=function(e,t){var o="function"==typeof Symbol&&e[Symbol.iterator];if(!o)return e;var n,r,l=o.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=l.next()).done;)a.push(n.value)}catch(e){r={error:e}}finally{try{n&&!n.done&&(o=l.return)&&o.call(l)}finally{if(r)throw r.error}}return a},m=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(s(arguments[t]));return e},u=function(e,t){var o=e.listBoxExampleState[t.id];return o?{items:Object(l.convertStringListToItemsBox)(o.options)}:{}},p=function(e,t){return{updateOptions:function(){e(Object(a.d)(t.id,m(Object(l.convertItemsBoxToStringList)(t.items),[Math.floor(100*Math.random()+1)+"_new_value"])))},addListBoxExample:function(){return e(Object(a.b)(t.id,Object(l.convertItemsBoxToStringList)(t.items)))},removeListBoxExample:function(){return e(Object(a.c)(t.id))}}},d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.componentWillMount=function(){this.props.addListBoxExample()},t.prototype.componentWillUnmount=function(){this.props.removeListBoxExample()},t.prototype.handleOnClick=function(){this.props.updateOptions()},t.prototype.render=function(){var e=this;return r.createElement("div",null,r.createElement(l.ListBoxConnected,{id:this.props.id,items:this.props.items,multi:!!this.props.multi}),r.createElement(l.Button,{key:this.props.id+"button",classes:["my2"],enabled:!0,name:"Update options with a reset on selected values",onClick:function(){return e.handleOnClick()}}))},t=c([Object(l.ReduxConnect)(u,p,l.ReduxUtils.defaultMergeProps)],t)}(r.Component);o.d(t,"ListBoxExamples",(function(){return v}));var f=function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.idSingle="listbox_connected_updated_single",t.idMulti="listbox_connected_updated_multi",t}return f(t,e),t.prototype.render=function(){var e=function(e){alert("The item value triggered is "+e.value)},t=[{value:"test"},{value:"test1"},{value:"test2 disabled",disabled:!0},{value:"test3",tooltip:{title:"title test",placement:"bottom",container:"body"}},{value:"test4"},{value:"test5"},{value:"test6"},{value:"test7"}],o=t.concat([{value:"test8",onOptionClick:e}]);return r.createElement("div",{className:"mt2"},r.createElement("h1",{className:"text-blue mb1"},"List Box"),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Default List Box"),r.createElement("div",{className:"form-control"},r.createElement(l.ListBox,{items:t}))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"List Box with no items"),r.createElement("div",{className:"form-control"},r.createElement(l.ListBox,{items:[],noResultItem:{value:"no items"}}))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"List Box with an trigger on click items"),r.createElement("div",{className:"form-control"},r.createElement(l.ListBox,{items:t,selected:["test1"],onOptionClick:e}))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"List Box with custom classes"),r.createElement("div",{className:"form-control"},r.createElement(l.ListBox,{items:t,classes:["bg-light-blue"]}))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"List Box with an onClick event on the last element"),r.createElement("div",{className:"form-control"},r.createElement(l.ListBox,{items:o}))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"List Box Connected (single)"),r.createElement("div",{className:"form-control"},r.createElement(l.ListBoxConnected,{id:l.UUID.generate(),items:t}))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"List Box Connected (multi)"),r.createElement("div",{className:"form-control"},r.createElement(l.ListBoxConnected,{id:l.UUID.generate(),items:t,multi:!0}))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"List Box Connected updated with new options (single)"),r.createElement("div",{className:"form-control"},r.createElement(d,{id:this.idSingle,items:t}))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"List Box Connected updated with new options (multi)"),r.createElement("div",{className:"form-control"},r.createElement(d,{id:this.idMulti,items:t,multi:!0}))))},t}(r.Component)}}]);
//# sourceMappingURL=154.bundle.js.map