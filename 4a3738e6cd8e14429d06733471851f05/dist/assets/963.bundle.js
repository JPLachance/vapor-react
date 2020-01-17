(window.webpackJsonp=window.webpackJsonp||[]).push([[963],{2300:function(e,t,n){"use strict";n.r(t),n.d(t,"SectionExamples",(function(){return f}));var r,o=n(0),i=n(755),a=n(538),l=n(539),s=n(586),p=n(679),c=n(617),u=n(193),d=n(178),h=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return h(t,e),t.prototype.render=function(){return o.createElement(o.Fragment,null,o.createElement(i.a,null,o.createElement(d.a,{title:"Search panel",description:"Customizing the display and behavior of the interface displayed withing the search panel can be done by editing the code of your search interface directly or via the JavaScript Search Interface Editor. As for style, it can be modified by applying your own stylesheet or adding styling rules in the Advanced tab."},o.createElement(d.a,{title:"Main button",level:2},o.createElement(s.a,{label:"Location on screen",helpText:"The widget button's position is fixed, which means it is positioned relative to the viewport and stays in the same place even if the page is scrolled.",optionalInformation:"INFORMATION"},o.createElement(c.a,null,o.createElement(p.a,{value:"1"},o.createElement(l.a,null,"Value 1")),o.createElement(p.a,{value:"2"},o.createElement(l.a,null,"Value 2")))),o.createElement(d.a,{title:"Content",level:2},o.createElement(s.a,{helpText:"The text that appears on the main widget button."},o.createElement(a.a,{value:"Help"},o.createElement(l.a,null,"Text"))),o.createElement(s.a,{helpText:"This is the font family that will be used on the button..."},o.createElement(a.a,{value:"Lato, Arial, sans serif"},o.createElement(l.a,null,"Font Family"))))))),o.createElement(i.a,{className:"mt4"},o.createElement(d.a,{title:"Define your products structure",description:"Inputs inside a Section of level 1"},o.createElement(s.a,{label:"Product Object Type",helpText:"Select the object type value that identifies a Product object"},o.createElement(u.a,{id:"first",items:[{selected:!0,value:"Product"},{selected:!1,value:"Variant"}]})),o.createElement(s.a,{label:"Product Id Field",helpText:"The product unique identifier is often associated with a model number. It is used to link variants and products together. This field should appear in both objects",message:"31 different products identified"},o.createElement(u.a,{id:"second",items:[{selected:!0,value:"productid"},{selected:!1,value:"anotherfield"}]}))),o.createElement(d.a,{title:"Level 2",description:"Inputs inside a Section of level 2",level:2},o.createElement(s.a,{label:"Product Object Type",helpText:"Select the object type value that identifies a Product object"},o.createElement(u.a,{id:"first",items:[{selected:!0,value:"Product"},{selected:!1,value:"Variant"}]})),o.createElement(s.a,{label:"Product Id Field",helpText:"The product unique identifier is often associated with a model number. It is used to link variants and products together. This field should appear in both objects",message:"31 different products identified"},o.createElement(u.a,{id:"second",items:[{selected:!0,value:"productid"},{selected:!1,value:"anotherfield"}]}))),o.createElement(d.a,{title:"Level 3",description:"Inputs inside a Section of level 3",level:3},o.createElement(s.a,{label:"Product Object Type",helpText:"Select the object type value that identifies a Product object"},o.createElement(u.a,{id:"first",items:[{selected:!0,value:"Product"},{selected:!1,value:"Variant"}]})),o.createElement(s.a,{label:"Product Id Field",helpText:"The product unique identifier is often associated with a model number. It is used to link variants and products together. This field should appear in both objects",message:"31 different products identified"},o.createElement(u.a,{id:"second",items:[{selected:!0,value:"productid"},{selected:!1,value:"anotherfield"}]})))))},t}(o.Component)},538:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r,o=n(2),i=n(0),a=n(1),l=n(558),s=n(179),p=n(40),c=n(539),u=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),d=function(){return(d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},h=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},f=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(h(arguments[t]));return e},m=["number","text","password"],v=["id","classes","innerInputClasses","validate","labelTitle","labelProps","validateOnChange","disabledOnMount","validateOnMount","disabledTooltip","minimum","maximum","onBlur","defaultValue","valid","indeterminate","onDestroy","onRender","onChange","onClick"],y=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.state={valid:r.props.valid},r}return u(t,e),t.prototype.componentWillMount=function(){if(this.props.onRender){var e=this.props.validateOnMount&&this.props.validate&&this.props.validate(this.props.defaultValue||"");this.props.onRender(this.props.defaultValue,e,this.props.disabledOnMount)}},t.prototype.componentWillUnmount=function(){this.props.onDestroy&&this.props.onDestroy()},t.prototype.componentDidUpdate=function(e){this.props.valid!==e.valid&&this.validate(),e.value!==this.props.value&&this.innerInput&&(this.innerInput.value=this.props.value)},t.prototype.reset=function(){this.innerInput.value=""},t.prototype.getInnerValue=function(){return this.innerInput&&this.innerInput.value||""},t.prototype.validate=function(){this.setState({valid:this.props.valid&&!(this.props.validate&&!this.props.validate(this.getInnerValue()))})},t.prototype.handleBlur=function(){this.props.onBlur&&this.props.onBlur(this.getInnerValue())},t.prototype.handleChange=function(){if(this.props.onChange){var e=this.props.validateOnChange&&this.props.validate&&this.props.validate(this.getInnerValue());this.props.onChange(this.getInnerValue(),e)}},t.prototype.handleClick=function(e){this.props.onClick&&this.props.onClick(e)},t.prototype.handleKeyUp=function(e){this.props.onKeyUp&&this.props.onKeyUp(e)},t.prototype.getLabel=function(){var e=this.props,t=e.labelProps,n=e.labelTitle;return"string"==typeof n?n||this.props.validate?i.createElement(c.a,d({key:this.props.id+"label",htmlFor:this.props.id},t),n):null:n},t.prototype.render=function(){var e=this,t=o("input-wrapper validate",{"input-field":Object(a.contains)(m,this.props.type)},this.props.classes),n=o({invalid:!this.state.valid&&Object(a.contains)(m,this.props.type)},this.props.innerInputClasses),r=[i.createElement("input",d({key:this.props.id,id:this.props.id,className:n,defaultValue:Object(a.isUndefined)(this.props.value)?this.props.defaultValue:this.props.value,ref:function(t){return e.innerInput=t},onBlur:function(){return e.handleBlur()},onChange:function(){return e.handleChange()},onKeyUp:function(t){return e.handleKeyUp(t)},min:this.props.minimum,max:this.props.maximum},a.omit(this.props,f(l.a.input,v)))),this.getLabel(),this.props.children];return this.props.disabled&&this.props.disabledTooltip?i.createElement("div",{className:t,onClick:function(t){return e.handleClick(t)}},i.createElement(p.a,{title:this.props.disabledTooltip,placement:s.a.Right},r)):i.createElement("div",{className:t,onClick:function(t){return e.handleClick(t)}},r)},t.defaultProps={id:Object(a.uniqueId)("input"),type:"text",valid:!0,labelTitle:"",required:!0},t}(i.Component)},539:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r,o=n(2),i=n(0),a=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){var e=o(this.props.classes),t=this.props,n=t.validMessage,r=t.invalidMessage,a=t.children,p=s(t,["validMessage","invalidMessage","children"]);return i.createElement("label",l({className:e,"data-valid-message":n,"data-invalid-message":r},p),a)},t}(i.Component)},558:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},o=["children","dangerouslySetInnerHTML"],i={internal:o,input:function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(r(arguments[t]));return e}(o,["defaultValue","onClick","onChange","onBlur","value","valid"])}},565:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),o=function(e){var t=e.children;return r.createElement("section",{className:"text-dark-medium-grey help-text"},t)}},586:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(2),o=n(0),i=n(179),a=n(13),l=n(40),s=n(565),p=function(e){var t=e.children,n=e.label,p=e.message,c=e.helpText,u=e.headerClassName,d=e.optionalInformation,h=n||d?o.createElement("header",{className:r("label","text-light-blue",u)},n?o.createElement("span",null,n):null,d?o.createElement(l.a,{title:d,placement:i.a.Top,className:"ml1"},o.createElement(a.a,{svgName:"info-14",svgClass:"icon fill-medium-grey"})):null):null;return o.createElement("div",{className:"labeled-input"},h,t,!!p&&o.createElement(s.a,null,p),!!c&&o.createElement(s.a,null,c))}},617:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r,o=n(2),i=n(0),a=n(1),l=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.componentDidMount=function(){var e,t;null===(t=(e=this.props).onMount)||void 0===t||t.call(e,this.props.id,this.props.valueOnMount,this.props.disabledValuesOnMount)},t.prototype.componentWillUnmount=function(){var e,t;null===(t=(e=this.props).onUnmount)||void 0===t||t.call(e,this.props.id)},t.prototype.render=function(){var e=this,t=i.Children.map(this.props.children,(function(t){return i.cloneElement(t,{name:t.props.name||e.props.name,checked:e.props.value===t.props.value,disabled:e.isValueDisabled(t.props.value),disabledTooltip:e.props.disabledTooltip,onClick:function(n){t.props.onClick&&t.props.onClick(n),e.handleToggle(t.props.value,n)}})}));return i.createElement("div",{className:o("form-control radio-select",this.props.className)},t)},t.prototype.handleToggle=function(e,t){var n,r,o,i;null===(r=(n=this.props).onChange)||void 0===r||r.call(n,e,this.props.id,t),null===(i=(o=this.props).onChangeCallback)||void 0===i||i.call(o,e,this.props.id,t)},t.prototype.isValueDisabled=function(e){return this.props.disabled||!!this.props.disabledValues&&a.contains(this.props.disabledValues,e)},t}(i.PureComponent)},679:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r,o=n(2),i=n(0),a=n(538),l=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e=o("radio-option",this.props.classes);return i.createElement(a.a,s({},this.props,{classes:[e],type:"radio"}))},t.defaultProps=s(s({},a.a.defaultProps),{checked:!1,disabled:!1}),t}(a.a)},755:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(2),o=n(0),i=function(e){var t=e.children,n=e.className,i=e.title,a=e.mods;return o.createElement("fieldset",{className:r(n,a,"coveo-form mb2 mt2 mod-padding-children")},i&&o.createElement("h2",{className:"text-medium-blue mb2"},i),t)}}}]);
//# sourceMappingURL=963.bundle.js.map