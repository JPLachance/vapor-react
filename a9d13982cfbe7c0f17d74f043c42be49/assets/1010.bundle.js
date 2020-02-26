(window.webpackJsonp=window.webpackJsonp||[]).push([[1010],{2247:function(e,t,n){"use strict";n.r(t),n.d(t,"CheckboxExamples",(function(){return f}));var r=n(1),a=n(167),o=n(451),i=n(473),l=n(559),c=n(453),s=n(503),p=n(644),u=n(37),d=n(645),h=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i},f=function(){return r.createElement(c.a,null,r.createElement(m,null),r.createElement(b,null))};f.description="Checkboxes allow users to select multiple options from a set.";var m=function(){var e=h(r.useState(!1),2),t=e[0],n=e[1];return r.createElement(c.a,{title:"Checkbox set"},r.createElement(c.a,{level:2,title:"Checkboxes with labels"},r.createElement(l.a,{label:"The label of the checkbox set"},r.createElement(p.a,{id:"checkbox1",clearSides:!0},r.createElement(i.a,null,"An unchecked checkbox")),r.createElement(p.a,{id:"checkbox2",defaultChecked:!0,clearSides:!0},r.createElement(i.a,null,"A checked checkbox")),r.createElement(p.a,{id:"checkbox3",disabled:!0,clearSides:!0},r.createElement(i.a,null,"A force disabled checkbox")),r.createElement(p.a,{id:"checkbox4",indeterminate:!0,clearSides:!0},r.createElement(i.a,null,"A force checked and indeterminate (partially selected) checkbox")),r.createElement(s.a,{id:"checkbox5",checked:t,onClick:function(){return n(!t)}},r.createElement(i.a,null,"A checkbox with local state")))),r.createElement(c.a,{level:2},r.createElement(l.a,{label:"A checkbox with no label"},r.createElement(p.a,{id:"checkbox-nolabel"}))))},b=function(){return r.createElement(c.a,{level:2,title:"Groupable Checkboxes"},r.createElement(c.a,null,r.createElement(l.a,{label:"A groupable checkbox with some child checkboxes selected by default"},r.createElement(d.a,{id:"parentId1",isParent:!0,clearSides:!0},r.createElement(i.a,null,"A parent checkbox connected")),r.createElement(d.a,{id:"parentId11",parentId:"parentId1",defaultChecked:!0},r.createElement(i.a,null,"Checkbox child 1")),r.createElement(d.a,{id:"parentId12",parentId:"parentId1",defaultChecked:!1},r.createElement(i.a,null,"Checkbox child 2")),r.createElement(d.a,{id:"parentId13",parentId:"parentId1",defaultChecked:!0},r.createElement(i.a,null,"Checkbox child 3")),r.createElement(d.a,{id:"parentId14",parentId:"parentId1",defaultChecked:!1},r.createElement(i.a,null,"Checkbox child 4"))),r.createElement("br",null)),r.createElement(c.a,null,r.createElement(l.a,{label:"A groupable checkbox with all checkboxes disabled or enabled"},r.createElement("div",null,r.createElement(o.a,{name:"Toggle checkboxes",enabled:!0,onClick:function(){return e="parentId2",void a.a.dispatch(Object(u.d)(e,void 0,t));var e,t}})),r.createElement(d.a,{id:"parentId2",isParent:!0,defaultDisabled:!0,clearSides:!0},r.createElement(i.a,null,"A parent checkbox connected")),r.createElement(d.a,{id:"parentId21",parentId:"parentId2",defaultChecked:!0,defaultDisabled:!0},r.createElement(i.a,null,"Checkbox child 1")),r.createElement(d.a,{id:"parentId22",parentId:"parentId2",defaultChecked:!1,defaultDisabled:!0},r.createElement(i.a,null,"Checkbox child 2")),r.createElement(d.a,{id:"parentId23",parentId:"parentId2",defaultChecked:!0,defaultDisabled:!0},r.createElement(i.a,null,"Checkbox child 3")),r.createElement(d.a,{id:"parentId24",parentId:"parentId2",defaultChecked:!1,defaultDisabled:!0},r.createElement(i.a,null,"Checkbox child 4")))))}},451:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r,a=n(9),o=n(1),i=n(0),l=n(85),c=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},p=["small","classes","enabled","name","link","target","primary","tooltip","tooltipPlacement","hideDisabled","onClick"],u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.onClick=function(){this.props.onClick&&this.props.enabled&&this.props.onClick()},t.prototype.getTemplate=function(e){var t,n=this,r=s(s({},i.omit(this.props,p)),{disabled:!this.props.enabled,onClick:function(){return n.onClick()}});return this.props.link?(r=i.extend(r,{target:this.props.target,rel:"noopener noreferrer",href:this.props.link}),t=o.createElement("a",s({className:e+" btn-container"},r),this.props.name,this.props.children)):t=o.createElement("button",s({className:e},r),this.props.name,this.props.children),i.isEmpty(this.props.tooltip)?t:o.createElement(l.a,{title:this.props.tooltip,placement:this.props.tooltipPlacement,className:"btn-container"},t)},t.prototype.getClasses=function(){return a("btn",{"mod-primary":this.props.primary,"mod-small":this.props.small,"state-disabled disabled":!this.props.enabled,"text-medium-grey":!this.props.primary&&!this.props.enabled},this.props.classes)},t.prototype.render=function(){return this.getTemplate(this.getClasses())},t.defaultProps={enabled:!0,name:"",tooltip:"",primary:!1,small:!1,tooltipPlacement:"right",target:""},t}(o.Component)},453:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(9),a=n(1),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=function(e){var t=e.children,n=e.title,i=e.description,l=e.className,c=e.mods,s=e.level,p=void 0===s?1:s,u={className:"text-medium-blue mb1",children:n},d="h"+(p+1);return a.createElement("fieldset",{className:r(l,c,"level-"+p+" form-group mod-padding-children")},n&&a.createElement(d,o({},u)),i&&a.createElement("p",{className:"description"},i),t)}},468:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r,a=n(9),o=n(1),i=n(0),l=n(469),c=n(461),s=n(85),p=n(473),u=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),d=function(){return(d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},h=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i},f=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(h(arguments[t]));return e},m=["number","text","password"],b=["id","classes","innerInputClasses","validate","labelTitle","labelProps","validateOnChange","disabledOnMount","validateOnMount","disabledTooltip","minimum","maximum","onBlur","defaultValue","valid","indeterminate","onDestroy","onRender","onChange","onClick","changeDirtyState"],y=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.state={valid:r.props.valid},r}return u(t,e),t.prototype.componentWillMount=function(){if(this.props.onRender){var e=this.props.validateOnMount&&this.props.validate&&this.props.validate(this.props.defaultValue||"");this.props.onRender(this.props.defaultValue,e,this.props.disabledOnMount)}},t.prototype.componentWillUnmount=function(){this.props.onDestroy&&this.props.onDestroy()},t.prototype.componentDidUpdate=function(e){this.props.valid!==e.valid&&this.validate(),e.value!==this.props.value&&this.innerInput&&(this.innerInput.value=this.props.value)},t.prototype.reset=function(){this.innerInput.value=""},t.prototype.getInnerValue=function(){return this.innerInput&&this.innerInput.value||""},t.prototype.validate=function(){this.setState({valid:this.props.valid&&!(this.props.validate&&!this.props.validate(this.getInnerValue()))})},t.prototype.handleBlur=function(){this.props.onBlur&&this.props.onBlur(this.getInnerValue())},t.prototype.handleChange=function(){if(this.props.onChange){var e=this.props.validateOnChange&&this.props.validate&&this.props.validate(this.getInnerValue());this.props.onChange(this.getInnerValue(),e)}},t.prototype.handleClick=function(e){this.props.onClick&&this.props.onClick(e)},t.prototype.handleKeyUp=function(e){this.props.onKeyUp&&this.props.onKeyUp(e)},t.prototype.getLabel=function(){var e=this.props,t=e.labelProps,n=e.labelTitle;return"string"==typeof n?n||this.props.validate?o.createElement(p.a,d({key:this.props.id+"label",htmlFor:this.props.id},t),n):null:n},t.prototype.render=function(){var e=this,t=a("input-wrapper validate",{"input-field":Object(i.contains)(m,this.props.type)},this.props.classes),n=a({invalid:!this.state.valid&&Object(i.contains)(m,this.props.type)},this.props.innerInputClasses),r=[o.createElement("input",d({key:this.props.id,id:this.props.id,className:n,defaultValue:Object(i.isUndefined)(this.props.value)?this.props.defaultValue:this.props.value,ref:function(t){return e.innerInput=t},onBlur:function(){return e.handleBlur()},onChange:function(){return e.handleChange()},onKeyUp:function(t){return e.handleKeyUp(t)},min:this.props.minimum,max:this.props.maximum},i.omit(this.props,f(l.a.input,b)))),this.getLabel(),this.props.children];return this.props.disabled&&this.props.disabledTooltip?o.createElement("div",{className:t,onClick:function(t){return e.handleClick(t)}},o.createElement(s.a,{title:this.props.disabledTooltip,placement:c.a.Right},r)):o.createElement("div",{className:t,onClick:function(t){return e.handleClick(t)}},r)},t.defaultProps={id:Object(i.uniqueId)("input"),type:"text",valid:!0,labelTitle:"",required:!0},t}(o.Component)},469:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i},a=["children","dangerouslySetInnerHTML"],o={internal:a,input:function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(r(arguments[t]));return e}(a,["defaultValue","onClick","onChange","onBlur","value","valid","changeDirtyState"])}},473:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r,a=n(9),o=n(1),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=a(this.props.classes),t=this.props,n=t.validMessage,r=t.invalidMessage,i=t.children,s=c(t,["validMessage","invalidMessage","children"]);return o.createElement("label",l({className:e,"data-valid-message":n,"data-invalid-message":r},s),i)},t}(o.Component)},503:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r,a=n(9),o=n(1),i=n(12),l=n(468),c=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.componentDidMount=function(){this.updateIndeterminate()},t.prototype.componentDidUpdate=function(){this.updateIndeterminate()},t.prototype.updateIndeterminate=function(){var e=i.findDOMNode(this).getElementsByTagName("input");e.length&&(e[0].indeterminate=!!this.props.indeterminate)},t.prototype.handleOnClick=function(e){this.props.disabled||(this.props.onClick&&(e.preventDefault(),e.stopPropagation(),this.props.onClick(e)),this.props.handleOnClick&&this.props.handleOnClick(this.props.checked))},t.prototype.render=function(){var e=this,t=a("coveo-checkbox-label",{disabled:!!this.props.disabled,"checkbox-clear":this.props.clearSides},this.props.classes),n=a("coveo-checkbox","react-vapor-checkbox",this.props.innerInputClasses);return o.createElement(l.a,s({},this.props,{classes:[t],innerInputClasses:[n],type:"checkbox",onClick:function(t){return e.handleOnClick(t)},readOnly:!0}),o.createElement("button",{type:"button",disabled:!!this.props.disabled}),this.props.children)},t}(o.Component)},521:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(1),a=function(e){var t=e.children;return r.createElement("section",{className:"text-dark-medium-grey help-text"},t)}},559:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(9),a=n(1),o=n(461),i=n(84),l=n(85),c=n(521),s=function(e){var t=e.children,n=e.label,s=e.message,p=e.helpText,u=e.headerClassName,d=e.optionalInformation,h=n||d?a.createElement("header",{className:r("label","text-light-blue",u)},n?a.createElement("span",null,n):null,d?a.createElement(l.a,{title:d,placement:o.a.Top,className:"ml1"},a.createElement(i.a,{svgName:"info-14",svgClass:"icon fill-medium-grey"})):null):null;return a.createElement("div",{className:"labeled-input"},h,t,!!s&&a.createElement(c.a,null,s),!!p&&a.createElement(c.a,null,p))}},566:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(28),a=n(0),o={getIsSelected:Object(r.a)((function(e,t){var n=t.id;return a.findWhere(e.checkboxes,{id:n})}),(function(e){return e&&e.checked}))}},644:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(58),a=n(57),o=n(503),i=n(66),l=n(566),c=Object(r.b)((function(e,t){return{checked:l.a.getIsSelected(e,{id:t.id})}}),(function(e,t){return{onRender:function(){return e(Object(i.b)(t.id,t.defaultChecked))},onDestroy:function(){return e(Object(i.c)(t.id))},onClick:function(n){return e(Object(i.d)(t.id))}}}),a.c.mergeProps)(o.a)},645:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(58),a=n(0),o=n(57),i=n(503),l=n(37),c=Object(r.b)((function(e,t){var n=a.findWhere(e.groupableCheckboxes,{parentId:t.parentId||t.id});if(n){var r=t.isParent?n.parent:a.findWhere(n.checkboxes,{id:t.id});return{checked:r?r.checked:!!t.defaultChecked,disabled:r?r.disabled:!!t.defaultDisabled,indeterminate:t.isParent&&n.nbChecked>0&&n.nbChecked<n.total}}return{checked:!!t.defaultChecked,disabled:!!t.defaultDisabled,indeterminate:!1}}),(function(e,t){return{onRender:function(){return e(Object(l.b)(t.id,t.defaultChecked,!!t.defaultDisabled,t.parentId,!!t.isParent))},onDestroy:function(){return e(Object(l.c)(t.id,t.parentId,!!t.isParent))},onClick:function(){return e(Object(l.e)(t.id,t.parentId,!!t.isParent))}}}),o.c.mergeProps)(i.a)}}]);
//# sourceMappingURL=1010.bundle.js.map