(window.webpackJsonp=window.webpackJsonp||[]).push([[1e3],{2294:function(e,t,o){"use strict";o.r(t),o.d(t,"CodeEditorExamples",(function(){return c}));var r,n=o(0),a=o(623),i=o(569),s=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.render=function(){return n.createElement("div",{className:"mt2"},n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label"},"Code Editor using codemirror"),n.createElement(a.a,{value:"",mode:i.b.Python})),n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label"},"Code Editor using codemirror in readonly mode"),n.createElement(a.a,{value:"",mode:i.b.Python,readOnly:!0})),n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label"},"Code Editor using codemirror with an action on change"),n.createElement(a.a,{value:"",mode:i.b.Python,onChange:function(e){return alert(e)}})))},t}(n.Component)},569:function(e,t,o){"use strict";o.d(t,"a",(function(){return r})),o.d(t,"b",(function(){return n}));var r={LineNumbers:"CodeMirror-linenumbers",FoldGutter:"CodeMirror-foldgutter",LintMarkers:"CodeMirror-lint-markers"},n={JSON:"application/json",XML:"xml",Python:"python"}},623:function(e,t,o){"use strict";o.d(t,"a",(function(){return u}));o(817),o(1133),o(1134),o(1135),o(1136),o(1137),o(1138),o(1139),o(1140);var r,n=o(553),a=o(0),i=o(1141),s=o(1),c=o(569),l=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),u=function(e){function t(t,o){var r=e.call(this,t,o)||this;return r.codemirror=a.createRef(),r.state={value:t.value},r}return l(t,e),t.prototype.componentDidMount=function(){var e,t;null===(t=(e=this.props).onMount)||void 0===t||t.call(e,this.codemirror.current)},t.prototype.componentDidUpdate=function(e){e.value!==this.props.value&&this.editor&&(this.setState({value:this.props.value}),this.editor.getDoc().clearHistory())},t.prototype.render=function(){var e=this;return a.createElement(i.Controlled,{ref:this.codemirror,editorDidMount:function(t){e.editor=t,e.addExtraKeywords()},onBeforeChange:function(t,o,r){e.setState({value:r})},value:this.state.value,onChange:function(t,o,r){return e.handleChange(r)},options:s.extend({},t.Options,{readOnly:this.removeCursorWhenEditorIsReadOnly(),mode:this.props.mode}),className:this.props.className})},t.prototype.removeCursorWhenEditorIsReadOnly=function(){return this.props.readOnly?"nocursor":this.props.readOnly},t.prototype.handleChange=function(e){var t,o;null===(o=(t=this.props).onChange)||void 0===o||o.call(t,e)},t.prototype.addExtraKeywords=function(){if(this.props.extraKeywords){var e=this.props.mode.name||this.props.mode;n.helpers.hintWords[e]=n.helpers.hintWords[e].concat(this.props.extraKeywords)}},t.defaultProps={className:"mod-border"},t.Options={lineNumbers:!0,foldGutter:!0,lint:!0,gutters:[c.a.LineNumbers,c.a.FoldGutter,c.a.LintMarkers],extraKeys:{"Ctrl-Space":"autocomplete","Alt-F":"findPersistent"}},t}(a.Component)}}]);
//# sourceMappingURL=1000.bundle.js.map