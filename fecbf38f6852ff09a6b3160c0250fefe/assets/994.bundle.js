(window.webpackJsonp=window.webpackJsonp||[]).push([[994],{2443:function(e,t,n){"use strict";n.r(t),n.d(t,"TextAreaExamples",(function(){return c}));var r=n(0),o=n(1),a=n(191),i=n(540),s=n(807),l=n(97),u=n(805),c=function(){return r.createElement("div",{className:"mt2"},r.createElement("div",{className:"mt2"},r.createElement("div",{className:"form-group"},r.createElement(s.a,{id:"super-textarea",className:"admin-invisible-textbox mod-border",additionalAttributes:{placeholder:"I am a simple text area"}})),r.createElement("div",{className:"form-group"},r.createElement(s.a,{id:"awesome-textarea-2",className:"admin-invisible-textbox mod-border",additionalAttributes:{placeholder:"I am a simple text area"},valueOnMount:"I have a non empty value on mount"})),r.createElement("div",{className:"form-group"},r.createElement(s.a,{id:"super-textarea-3",className:"admin-invisible-textbox mod-border",additionalAttributes:{placeholder:"I am a simple text area"},valueOnMount:"I am disabled on mount, enable me!",disabledOnMount:!0}),r.createElement("button",{className:"mb2 block",onClick:function(){a.a.dispatch(Object(l.e)("super-textarea-3",!Object(o.findWhere)(a.a.getState().textAreas,{id:"super-textarea-3"}).disabled))}},"Toggle TextArea disabled state")),r.createElement("div",{className:"form-group"},r.createElement(u.a,{label:"simple text area with label"},r.createElement(s.a,{id:"super-textarea-4"}))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Default textarea autosize empty"),r.createElement("div",{className:"form-control"},r.createElement(s.a,{id:"super-textarea-5",isAutosize:!0}))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Textarea with a placeholder"),r.createElement("div",{className:"form-control"},r.createElement(s.a,{id:"super-textarea-6",additionalAttributes:{placeholder:"Try to enter a lot of text here"},isAutosize:!0}))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Textarea with a default value"),r.createElement("div",{className:"form-control"},r.createElement(s.a,{id:"super-textarea-7",valueOnMount:"this is the default value",isAutosize:!0}))),r.createElement("div",{className:"form-group input-field validate"},r.createElement(s.a,{id:"super-textarea-8",isAutosize:!0,additionalAttributes:{required:!0}}),r.createElement(i.a,{htmlFor:"super-textarea-8"},"Beautiful Textarea"))))}},540:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r,o=n(2),a=n(0),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=o(this.props.classes),t=this.props,n=t.validMessage,r=t.invalidMessage,i=t.children,u=l(t,["validMessage","invalidMessage","children"]);return a.createElement("label",s({className:e,"data-valid-message":n,"data-invalid-message":r},u),i)},t}(a.Component)},805:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(2),o=n(0),a=function(e){return o.createElement("div",{className:r("input-field form-group",e.containerClassName)},e.children,o.createElement("label",{htmlFor:e.children.props.id},e.label))}},807:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(7),i=n(15),s=n(29),l=n(27),u=n(91),c=(n(3),!!document.documentElement.currentStyle),d={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},p=["letter-spacing","line-height","font-family","font-weight","font-size","font-style","tab-size","text-rendering","text-transform","width","text-indent","padding-top","padding-right","padding-bottom","padding-left","border-top-width","border-right-width","border-bottom-width","border-left-width","box-sizing"],h={},m=document.createElement("textarea"),f=function(e){Object.keys(d).forEach((function(t){e.style.setProperty(t,d[t],"important")}))};function b(e,t,n,r,o){void 0===n&&(n=!1),void 0===r&&(r=null),void 0===o&&(o=null),null===m.parentNode&&document.body.appendChild(m);var a=function(e,t,n){void 0===n&&(n=!1);if(n&&h[t])return h[t];var r=window.getComputedStyle(e);if(null===r)return null;var o=p.reduce((function(e,t){return e[t]=r.getPropertyValue(t),e}),{}),a=o["box-sizing"];if(""===a)return null;c&&"border-box"===a&&(o.width=parseFloat(o.width)+parseFloat(r["border-right-width"])+parseFloat(r["border-left-width"])+parseFloat(r["padding-right"])+parseFloat(r["padding-left"])+"px");var i=parseFloat(o["padding-bottom"])+parseFloat(o["padding-top"]),s=parseFloat(o["border-bottom-width"])+parseFloat(o["border-top-width"]),l={sizingStyle:o,paddingSize:i,borderSize:s,boxSizing:a};n&&(h[t]=l);return l}(e,t,n);if(null===a)return null;var i=a.paddingSize,s=a.borderSize,l=a.boxSizing,u=a.sizingStyle;Object.keys(u).forEach((function(e){m.style[e]=u[e]})),f(m),m.value=e.value||e.placeholder||"x";var d=-1/0,b=1/0,g=m.scrollHeight;"border-box"===l?g+=s:"content-box"===l&&(g-=i),m.value="x";var v=m.scrollHeight-i,x=Math.floor(g/v);return null!==r&&(d=v*r,"border-box"===l&&(d=d+i+s),g=Math.max(d,g)),null!==o&&(b=v*o,"border-box"===l&&(b=b+i+s),g=Math.min(b,g)),{height:g,minHeight:d,maxHeight:b,rowCount:Math.floor(g/v),valueRowCount:x}}f(m);var g=function(){},v=0,x=function(e){function t(t){var n;return(n=e.call(this,t)||this)._onRef=function(e){n._ref=e;var t=n.props.inputRef;"function"!=typeof t?t.current=e:t(e)},n._onChange=function(e){n._controlled||n._resizeComponent(),n.props.onChange(e,Object(u.a)(Object(u.a)(n)))},n._resizeComponent=function(e){void 0===e&&(e=g);var t=b(n._ref,n._uid,n.props.useCacheForDOMMeasurements,n.props.minRows,n.props.maxRows);if(null!==t){var r=t.height,o=t.minHeight,a=t.maxHeight,i=t.rowCount,s=t.valueRowCount;n.rowCount=i,n.valueRowCount=s,n.state.height===r&&n.state.minHeight===o&&n.state.maxHeight===a?e():n.setState({height:r,minHeight:o,maxHeight:a},e)}else e()},n.state={height:t.style&&t.style.height||0,minHeight:-1/0,maxHeight:1/0},n._uid=v++,n._controlled=void 0!==t.value,n._resizeLock=!1,n}Object(l.a)(t,e);var n=t.prototype;return n.render=function(){var e=this.props,t=(e.inputRef,e.maxRows,e.minRows,e.onHeightChange,e.useCacheForDOMMeasurements,Object(s.a)(e,["inputRef","maxRows","minRows","onHeightChange","useCacheForDOMMeasurements"]));return t.style=Object(i.a)({},t.style,{height:this.state.height}),Math.max(t.style.maxHeight||1/0,this.state.maxHeight)<this.state.height&&(t.style.overflow="hidden"),o.a.createElement("textarea",Object(i.a)({},t,{onChange:this._onChange,ref:this._onRef}))},n.componentDidMount=function(){var e=this;this._resizeComponent(),this._resizeListener=function(){e._resizeLock||(e._resizeLock=!0,e._resizeComponent((function(){e._resizeLock=!1})))},window.addEventListener("resize",this._resizeListener)},n.componentDidUpdate=function(e,t){e!==this.props&&this._resizeComponent(),this.state.height!==t.height&&this.props.onHeightChange(this.state.height,this)},n.componentWillUnmount=function(){window.removeEventListener("resize",this._resizeListener),function(e){delete h[e]}(this._uid)},t}(o.a.Component);x.defaultProps={inputRef:g,onChange:g,onHeightChange:g,useCacheForDOMMeasurements:!1};var y=x,w=n(1),O=n(6),E=n(97);n.d(t,"a",(function(){return N}));var _,C=(_=function(e,t){return(_=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}_(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),z=function(){return(z=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},M=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.componentWillMount=function(){this.props.onMount&&this.props.onMount()},t.prototype.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount()},t.prototype.render=function(){var e=this,t=this.props.isAutosize?y:"textarea";return r.createElement(t,z({},this.props.additionalAttributes,{id:this.props.id,disabled:this.props.disabled,className:this.props.className,value:this.props.value,onChange:function(t){return e.handleOnChange(t)}}))},t.prototype.handleOnChange=function(e){var t,n,r,o;null===(n=(t=this.props).onChange)||void 0===n||n.call(t,e),null===(o=(r=this.props).onChangeCallback)||void 0===o||o.call(r,e)},t.defaultProps={additionalAttributes:{},className:""},t}(r.Component),N=Object(a.b)((function(e,t){var n=w.findWhere(e.textAreas,{id:t.id})||{value:"",disabled:!1};return{value:n.value,disabled:n.disabled}}),(function(e,t){return{onChange:function(n){return e(Object(E.c)(t.id,n.target.value))},onMount:function(){return e(Object(E.b)(t.id,t.valueOnMount,t.disabledOnMount))},onUnmount:function(){return e(Object(E.d)(t.id))}}}),O.c.mergeProps)(M)}}]);
//# sourceMappingURL=994.bundle.js.map