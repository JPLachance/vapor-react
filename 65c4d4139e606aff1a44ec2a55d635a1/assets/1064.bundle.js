(window.webpackJsonp=window.webpackJsonp||[]).push([[1064],{2218:function(e,n,t){"use strict";t.r(n),t.d(n,"ActionBarConnectedExamples",(function(){return p}));var r,o=t(1),i=t(165),a=t(517),c=t(478),l=t(58),u=t(701),d=(r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),p=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return d(n,e),n.prototype.componentDidMount=function(){var e=[u.a,{name:"Link to Coveo",link:"http://coveo.com",target:"_blank",icon:"edit",primary:!0,enabled:!0},u.a,{name:"Confirm Me",trigger:function(){return alert("You confirmed this action !")},target:"_blank",icon:"disable",primary:!0,enabled:!0,requiresConfirmation:{confirmLabel:"Want to do this action ?",confirmType:"danger",buttonLabels:{confirm:"sure !",cancel:"never !"}}},u.a,{name:"Action 1",trigger:function(){return alert("Action 1 was triggered")},enabled:!0,icon:"edit",requiresConfirmation:{confirmType:"danger",buttonLabels:{confirm:"Yes",cancel:"Cancel"}}},u.a,u.a,{name:"Action 2",trigger:function(){return alert("Action 2 was triggered")},enabled:!0,requiresConfirmation:{confirmType:"danger",buttonLabels:{confirm:"Pretty sure!",cancel:"Cancel"}}},{name:"Action 4",trigger:function(){return alert("Action 4 was triggered")},enabled:!0},u.a,{name:"Link to Coveo (disabled)",link:"http://coveo.com",target:"_blank",icon:"edit",primary:!0,enabled:!1,hideDisabled:!1},{name:"Action 3",trigger:function(){return alert("You cannot trigger me")},icon:"edit",primary:!0,enabled:!1,hideDisabled:!1},u.a];setTimeout((function(){i.a.dispatch(Object(l.c)("action-bar-connected",e))}),4e3)},n.prototype.render=function(){return o.createElement(a.a,{title:"Action bar examples"},o.createElement(a.a,{level:2,title:"Action bar with Redux state and inline prompt (actions appear after 4 seconds)"},o.createElement(c.b,{id:"action-bar-connected"})))},n}(o.Component)}}]);
//# sourceMappingURL=1064.bundle.js.map