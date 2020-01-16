(window.webpackJsonp=window.webpackJsonp||[]).push([[986],{2311:function(e,n,t){"use strict";t.r(n),t.d(n,"NumericInputExamples",(function(){return a}));var r=t(0),i=t(179),o=t(796),a=function(){return r.createElement(i.a,{title:"Numeric Inputs Examples"},r.createElement(u,null))};a.description="Numeric inputs are used to require the input of a numeric value. They can be configured in discrete jumps, when precision is not mandatory (e.g., 0, 5, 10, etc.).";var u=function(){return r.createElement(i.a,{level:2,title:"Numeric input examples"},r.createElement(i.a,{level:3,title:"A numeric input with an initial value"},r.createElement(o.a,{id:"numeric-2",initialValue:5})),r.createElement(i.a,{level:3,title:"A numeric with an initial value of 500, a step of 50, a minimum of 25 and a max of 950 with three digits. Its inital value is 500."},r.createElement(o.a,{id:"numeric-4",initialValue:500,step:50,min:25,max:950,maxLength:3,invalidMessage:"The value must be between 25 and 999."})),r.createElement(i.a,{level:3}))}},632:function(e,n,t){(n=e.exports=t(70)(!1)).push([e.i,"/* ----------- Deprecated Palette ----------- */\n.numeric-input-numericInput-3tL1iu3fVGsmDW2t_zxL0A {\n  height: 26px;\n  padding: 0.5rem;\n  overflow: hidden;\n  color: #1d4f76;\n  font-size: 16px;\n  text-overflow: ellipsis;\n  border: 1px solid #bcc3ca;\n  border-radius: 2px;\n  box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.1); }\n\n.numeric-input-numericInputButton-27-DchXTMYUtrfzcO2BUDm {\n  width: 26px;\n  height: 26px;\n  color: #ffffff;\n  line-height: 24px;\n  background-color: #354878;\n  border-radius: 4px; }\n\n.coveo-styleguide .numeric-input-numericInputButton-27-DchXTMYUtrfzcO2BUDm {\n  outline: none; }\n",""]),n.locals={numericInput:"numeric-input-numericInput-3tL1iu3fVGsmDW2t_zxL0A",numericInputButton:"numeric-input-numericInputButton-27-DchXTMYUtrfzcO2BUDm"}},686:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(50),i=t(194),o=function(e,n){return e&&e.numericInputs[n.id]||i.a},a={getValue:Object(r.a)(o,(function(e){return e.value})),getHasError:Object(r.a)(o,(function(e){return e.hasError}))}},796:function(e,n,t){"use strict";t.d(n,"a",(function(){return y}));var r,i=t(2),o=t(0),a=t(1),u=t(10),s=t(6),c=t(94),l=t(13),p=t(973),m=t(109),f=t(194),d=t(686),h=(r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),v=function(){return(v=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)},g=function(e,n,t,r){var i,o=arguments.length,a=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var u=e.length-1;u>=0;u--)(i=e[u])&&(a=(o<3?i(a):o>3?i(n,t,a):i(n,t))||a);return o>3&&a&&Object.defineProperty(n,t,a),a},x=function(e,n){return{value:d.a.getValue(e,n),hasError:d.a.getHasError(e,n)}},b=function(e,n){return{mount:function(t){return e(m.b.mount(n.id,t,n.min,n.max))},unmount:function(){return e(m.b.unmount(n.id))},setValue:function(t){return e(m.b.setValue(n.id,t,n.min,n.max))}}},y=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.onKeyDown=function(e){var t=e.keyCode;t===u.b.upArrow?n.onIncrement():t===u.b.downArrow&&n.onDecrement()},n.onChange=function(e){var t=e.target.value;n.props.setValue(t)},n.onDecrement=function(){var e=n.normalizeValue(n.getValueAsNumber()-(n.props.step||1));a.isUndefined(n.props.min)||(e=Math.max(e,n.props.min)),n.props.setValue(e)},n.onIncrement=function(){var e=n.normalizeValue(n.getValueAsNumber()+(n.props.step||1));a.isUndefined(n.props.max)||(e=Math.min(e,n.props.max)),n.props.setValue(e)},n}return h(n,e),n.prototype.componentDidMount=function(){var e=a.isUndefined(this.props.initialValue)?f.a.value:this.props.initialValue;this.props.mount(e)},n.prototype.componentWillUnmount=function(){this.props.unmount()},n.prototype.render=function(){var e,n=parseFloat(""+this.props.value),t=a.isUndefined(this.props.max)||a.isNaN(n)||n<this.props.max,r=a.isUndefined(this.props.min)||a.isNaN(n)||n>this.props.min;return o.createElement("div",{className:"numeric-input flex flex-column"},o.createElement("div",{className:"flex flex-row"},o.createElement(c.a,{classes:["js-decrement mr1 p0",p.numericInputButton],enabled:r,onClick:this.onDecrement,type:"button"},o.createElement(l.a,{svgName:"minus",svgClass:"icon mod-12 fill-pure-white"})),o.createElement("div",{className:"flex flex-column"},o.createElement("input",v({},a.omit(this.props,["id","initialValue","step","min","max","invalidMessage","maxLength","value","hasError","mount","unmount","setValue"]),{className:i("js-numeric-input",(e={},e["mod-max-"+this.props.maxLength+"-digit"]=a.isNumber(this.props.maxLength)&&this.props.maxLength>0,e),this.props.className,p.numericInput),value:this.props.value,onChange:this.onChange,onKeyDown:this.onKeyDown}))),o.createElement(c.a,{classes:["js-increment ml1 p0",p.numericInputButton],enabled:t,onClick:this.onIncrement,type:"button"},o.createElement(l.a,{svgName:"plus",svgClass:"icon mod-12 fill-pure-white"}))),o.createElement("div",{className:"flex flex-row"},this.props.hasError&&o.createElement("span",{className:"generic-form-error my1"},this.props.invalidMessage)))},n.prototype.getValueAsNumber=function(){var e=this.props.value;return"string"==typeof e&&(e=parseFloat(e)),e},n.prototype.normalizeValue=function(e){return a.isNaN(e)?this.props.initialValue||f.a.value:e},n.defaultProps={invalidMessage:"Value is not valid"},n=g([Object(s.b)(x,b)],n)}(o.PureComponent)},973:function(e,n,t){var r=t(632);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0},o=t(71)(r,i);r.locals&&(e.exports=r.locals),e.hot.accept(632,(function(){var n=t(632);if("string"==typeof n&&(n=[[e.i,n,""]]),!function(e,n){var t,r=0;for(t in e){if(!n||e[t]!==n[t])return!1;r++}for(t in n)r--;return 0===r}(r.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(n)})),e.hot.dispose((function(){o()}))}}]);
//# sourceMappingURL=986.bundle.js.map