(window.webpackJsonp=window.webpackJsonp||[]).push([[1018],{2329:function(e,t,n){"use strict";n.r(t),n.d(t,"SyncFeedbackExample",(function(){return r}));var a,s=n(0),c=n(697),o=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),r=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){return s.createElement("div",{className:"mt2"},s.createElement("label",{className:"form-control-label"},"SyncFeedback"),s.createElement("div",{className:"form-control"},s.createElement("div",{className:"mb2"},"A SyncFeedback component on state NONE is invisible.",s.createElement(c.a,{state:c.b.NONE})),s.createElement("div",{className:"mb2"},"There is a default feedback message for each state",s.createElement(c.a,{state:c.b.SYNCING}),s.createElement(c.a,{state:c.b.SUCCESS}),s.createElement(c.a,{state:c.b.ERROR})),s.createElement("div",{className:"mb2"},"You can pass a custom feedback message",s.createElement(c.a,{state:c.b.SYNCING,feedback:"This message is a SyncFeedback component on state SYNCING"}),s.createElement(c.a,{state:c.b.SUCCESS,feedback:"This message is a SyncFeedback component on state SUCCESS"}),s.createElement(c.a,{state:c.b.ERROR,feedback:"This message is a SyncFeedback component on state ERROR"}))))},t}(s.Component)},697:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var a,s=n(0),c=n(13),o=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),r={SYNCING:"SYNCING",SUCCESS:"SUCCESS",ERROR:"ERROR",NONE:"NONE"},i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){var e=["sync-feedback"];return this.props.state===r.ERROR?e.push("mod-error"):this.props.state===r.SUCCESS&&e.push("mod-success"),s.createElement("div",{className:e.join(" ")},this.renderIcon(),this.renderContent())},t.prototype.renderIcon=function(){return this.props.state===r.SYNCING?s.createElement("span",{className:"status-dot syncing sync-feedback-icon"}):this.props.state===r.SUCCESS?s.createElement(c.a,{svgName:"check",className:"sync-feedback-icon",svgClass:"icon"}):this.props.state===r.ERROR?s.createElement(c.a,{svgName:"clear",className:"sync-feedback-icon",svgClass:"icon"}):null},t.prototype.renderContent=function(){return this.props.state===r.SYNCING?s.createElement("span",{className:"sync-feedback-text"},this.props.feedback||"Saving changes..."):this.props.state===r.SUCCESS?s.createElement("span",{className:"sync-feedback-text"},this.props.feedback||"Changes saved"):this.props.state===r.ERROR?s.createElement("span",{className:"sync-feedback-text"},this.props.feedback||"Changes could not be saved."):null},t}(s.Component)}}]);
//# sourceMappingURL=1018.bundle.js.map