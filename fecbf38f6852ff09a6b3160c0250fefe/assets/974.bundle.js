(window.webpackJsonp=window.webpackJsonp||[]).push([[974],{1164:function(e,n,t){"use strict";t.d(n,"b",(function(){return f})),t.d(n,"c",(function(){return d})),t.d(n,"a",(function(){return c}));var i=function(){return(i=Object.assign||function(e){for(var n,t=1,i=arguments.length;t<i;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)},r=function(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var i,r,o=t.call(e),f=[];try{for(;(void 0===n||n-- >0)&&!(i=o.next()).done;)f.push(i.value)}catch(e){r={error:e}}finally{try{i&&!i.done&&(t=o.return)&&t.call(o)}finally{if(r)throw r.error}}return f},o=function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(r(arguments[n]));return e},f={_id:"5aa97c3a188912df4047d157",index:0,guid:"a77733c5-01ea-4d3d-9f22-9ec4d06c2da6",isActive:!1,balance:"$3,307.29",picture:"http://placehold.it/32x32",age:33,eyeColor:"green",name:{first:"Natasha",last:"Jenkins"},company:"ZANYMAX",email:"natasha.jenkins@zanymax.net",phone:"+1 (917) 404-3066",address:"555 Linden Boulevard, Stonybrook, Wisconsin, 2342",about:"Nulla sunt excepteur veniam elit laboris pariatur. Occaecat aliquip magna aliqua sunt tempor sunt id.",registered:"Sunday, January 31, 2016 2:37 AM",latitude:"-11.761137",longitude:"-23.176443",tags:["voluptate","et","sunt","sunt","cupidatat"],range:[0,1,2],friends:[{id:0,name:"Mccray Kerr"},{id:1,name:"Cristina Osborn"}],greeting:"Hello, Natasha! You have 8 unread messages.",favoriteFruit:"apple"},a=i(i({},f),{range:[5,6],friends:o(f.friends,[{id:4,name:"Someone New"}]),otherThing:"This is a new property"});delete a.isActive;var d=a,c=function(e){return JSON.stringify(e,void 0,2)}},2287:function(e,n,t){"use strict";t.r(n),t.d(n,"DiffViewerExamples",(function(){return d}));t(2288);var i,r=t(0),o=t(1164),f=t(777),a=(i=function(e,n){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}i(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),d=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return a(n,e),n.prototype.render=function(){return r.createElement("div",{className:"mt2"},r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Diff Viewer"),r.createElement(f.a,{first:Object(o.a)(o.b),second:Object(o.a)(o.c)})))},n}(r.Component)},623:function(e,n,t){(n=e.exports=t(71)(!1)).push([e.i,"/* ----------- Deprecated Palette ----------- */\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-file-wrapper {\n  border: none; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-file-diff {\n  overflow: initial; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-file-header {\n  display: none; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-code-wrapper {\n  position: relative; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-diff-table {\n  font-size: 14px;\n  font-family: source_code_pro_regular, \"Courier New\", Courier, monospace;\n  border-bottom: 1px solid #bcc3ca; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-code-linenumber {\n  top: -1px;\n  width: auto;\n  height: calc(20px + 1px);\n  margin-top: 1px;\n  color: #373737;\n  background: #f1f3f4;\n  border: none;\n  border-left: 1px solid #bcc3ca;\n  cursor: initial; }\n  .DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-code-linenumber.d2h-change {\n    background: #f1f3f4; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .line-num1,\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .line-num2 {\n  width: 45px; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U tr:last-child .d2h-code-linenumber {\n  height: calc(20px - 1px); }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U tr {\n  position: relative;\n  display: block; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U td {\n  border-right: 1px solid #bcc3ca; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U td:last-child {\n  display: block; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U td.d2h-info {\n  height: auto;\n  line-height: normal;\n  background: none;\n  border: 1px solid #bcc3ca;\n  border-right: none;\n  border-left: none; }\n  .DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U td.d2h-info.d2h-code-linenumber {\n    top: 0;\n    width: calc(45px * 2 + 45px);\n    height: 2px;\n    margin-top: 0;\n    background: #ffffff;\n    border-right: none;\n    border-bottom: none;\n    border-left: none; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U tr:first-child td.d2h-info {\n  border-top: none; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-code-line {\n  margin-left: 90px; }\n  .DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-code-line.d2h-info {\n    position: relative;\n    width: 100%;\n    margin-bottom: 10px;\n    margin-left: 0;\n    color: #ffffff;\n    font-size: 0;\n    background: #ffffff;\n    border-bottom: 2px solid #bcc3ca; }\n    .DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-code-line.d2h-info:before {\n      position: absolute;\n      top: 50%;\n      left: 0;\n      padding-bottom: 3px;\n      color: #7a7d81;\n      font-size: 10px;\n      line-height: 5px;\n      background: white;\n      border: 1px solid #f1f3f4;\n      border-radius: 2px;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      content: '...';\n      content: '...'; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-ins:not(.d2h-code-linenumber) {\n  background: #d0e9c4; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-code-line ins,\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-code-side-line ins {\n  background: #d0e9c4; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-del:not(.d2h-code-linenumber) {\n  background: #edbcbf; }\n",""]),n.locals={diffViewer:"DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U"}},777:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var i,r=t(949),o=t(0),f=t(959),a=t(185),d=t(972),c=(i=function(e,n){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}i(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),s=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return c(n,e),n.prototype.render=function(){var e=f.diffLines(this.props.first,this.props.second),t=f.formatLines(e,{context:3}),i=r.Diff2Html.getPrettyHtml(t,{inputFormat:n.InputFormat.Diff,showFiles:!1,matching:n.Matching.Words,outputFormat:n.OutputFormat.Line});return n.EmptyHtmlRegex.test(i)?o.createElement(a.a,{title:this.props.noChangesLabel,description:this.props.noChangesDescription}):o.createElement("div",{className:d.diffViewer,dangerouslySetInnerHTML:{__html:i}})},n.defaultProps={noChangesLabel:"No changes"},n.OutputFormat={Side:"side-by-side",Line:"line-by-line"},n.InputFormat={Diff:"diff",JSON:"json"},n.Matching={Lines:"lines",Words:"words",None:"none"},n.EmptyHtmlRegex=new RegExp(/<div class="d2h-wrapper"\>\s*<\/div>/),n}(o.Component)},953:function(e,n){},972:function(e,n,t){var i=t(623);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=t(72)(i,r);i.locals&&(e.exports=i.locals),e.hot.accept(623,(function(){var n=t(623);if("string"==typeof n&&(n=[[e.i,n,""]]),!function(e,n){var t,i=0;for(t in e){if(!n||e[t]!==n[t])return!1;i++}for(t in n)i--;return 0===i}(i.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(n)})),e.hot.dispose((function(){o()}))}}]);
//# sourceMappingURL=974.bundle.js.map