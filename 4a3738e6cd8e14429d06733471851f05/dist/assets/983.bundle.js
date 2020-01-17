(window.webpackJsonp=window.webpackJsonp||[]).push([[983],{2435:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(756),a=[{label:"Badge 1",extraClasses:["bg-blue"]},{label:"Badge 2",extraClasses:["bg-medium-blue"]},{label:"Badge 3",extraClasses:["bg-darker-blue"]}],s={label:"Ribbon",extraClasses:["bg-orange","bold"]};r.d(e,"LogoCardExamples",(function(){return c}));var i,l=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return l(e,t),e.prototype.render=function(){return n.createElement("div",{className:"mt2"},n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label"},"Default LogoCard"),n.createElement("div",{className:"form-control"},n.createElement(o.a,{title:"Card title",description:"Card description"}))),n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label"},"LogoCard with badges, description and ribbon"),n.createElement("div",{className:"form-control"},n.createElement(o.a,{title:"Card title",badges:a,ribbon:s,description:"Card description"}))),n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label"},"Disabled logo card"),n.createElement("div",{className:"form-control"},n.createElement(o.a,{title:"Card title",badges:a,description:"Card description",disabled:!0}))))},e}(n.Component)},593:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n,o=r(2),a=r(0),s=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.render=function(){var t=o("badge",this.props.extraClasses);return a.createElement("span",{className:t},this.props.label)},e.defaultProps={extraClasses:[]},e}(a.Component)},604:function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"d",(function(){return o})),r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return p}));var n,o,a,s=r(2),i=r(0),l=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),c="ribbon-container";!function(t){t.Top="top",t.Bottom="bottom"}(o||(o={})),function(t){t.Left="left",t.Right="right"}(a||(a={}));var p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return l(e,t),e.prototype.render=function(){var t=s("corner-ribbon",this.props.placementY,this.props.placementX,this.props.extraClasses);return i.createElement("div",{className:t},this.props.label)},e.defaultProps={placementY:o.Top,placementX:a.Right,extraClasses:[]},e}(i.Component)},756:function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var n,o=r(2),a=r(93),s=r(0),i=r(1),l=r(25),c=r(593),p=r(604),u=r(13),d=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),b=function(){return(b=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},f=a.svg.sourceCustom.name,m=["badges","description","disabled","disabledRibbon","extraContainerClasses","onClick","ribbon","svgName","title"],h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return d(e,t),e.prototype.handleClick=function(){this.props.onClick&&!this.props.disabled&&this.props.onClick()},e.prototype.render=function(){var t=this,e=o("logo-card",this.props.disabled||this.props.ribbon?p.b:"",this.props.extraContainerClasses,this.props.disabled?"disabled":""),r=o("icon","mod-4x"),n=o(this.props.badges.length?"ml1":""),a=this.props.badges.map((function(t){return s.createElement(c.a,b({},t,{key:Object(l.slugify)(t.label)}))})),d=this.props.description?s.createElement("span",{className:n},this.props.description):null,f=null;return this.props.disabled?f=s.createElement(p.a,b({},this.props.disabledRibbon)):this.props.ribbon&&(f=s.createElement(p.a,b({},this.props.ribbon))),s.createElement("div",b({className:e,onClick:function(){return t.handleClick()}},i.omit(this.props,m)),s.createElement("div",{className:"logo-card-logo"},s.createElement(u.a,{svgName:this.props.svgName,className:r})),s.createElement("div",{className:"logo-card-content"},s.createElement("h2",{className:"logo-card-title"},this.props.title),s.createElement("div",null,a,d)),f)},e.defaultProps={badges:[],disabled:!1,disabledRibbon:{label:"Unavailable"},extraContainerClasses:[],svgName:f},e}(s.Component)}}]);
//# sourceMappingURL=983.bundle.js.map