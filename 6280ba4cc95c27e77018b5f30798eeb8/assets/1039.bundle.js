(window.webpackJsonp=window.webpackJsonp||[]).push([[1039],{2475:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(604),a={width:"200px",height:"200px"},c={width:"200px",height:"100px"};n.d(t,"CornerRibbonExamples",(function(){return p}));var l,i=(l=function(e,t){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){return o.createElement("div",{className:"mt2"},o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"CornerRibbon placement (default is top right)"),o.createElement("div",{className:"form-control"},o.createElement("div",{style:a,className:r.b+" bg-white"},o.createElement(r.a,{label:"Top Right"}),o.createElement(r.a,{label:"Top Left",placementX:r.c.Left,placementY:r.d.Top}),o.createElement(r.a,{label:"Bottom Left",placementX:r.c.Left,placementY:r.d.Bottom}),o.createElement(r.a,{label:"Bottom Right",placementX:r.c.Right,placementY:r.d.Bottom})))),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"CornerRibbon with extra classes"),o.createElement("div",{className:"form-control"},o.createElement("div",{style:c,className:r.b+" bg-white"},o.createElement(r.a,{label:"Ribbon",extraClasses:["bg-orange","bold"]}),o.createElement(r.a,{label:"Ribbon",placementX:r.c.Left,placementY:r.d.Top,extraClasses:["bg-pure-white","text-red","bold","mod-border","border-red"]})))))},t}(o.Component)},604:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return s}));var o,r,a,c=n(9),l=n(1),i=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p="ribbon-container";!function(e){e.Top="top",e.Bottom="bottom"}(r||(r={})),function(e){e.Left="left",e.Right="right"}(a||(a={}));var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=c("corner-ribbon",this.props.placementY,this.props.placementX,this.props.extraClasses);return l.createElement("div",{className:e},this.props.label)},t.defaultProps={placementY:r.Top,placementX:a.Right,extraClasses:[]},t}(l.Component)}}]);
//# sourceMappingURL=1039.bundle.js.map