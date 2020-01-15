(window.webpackJsonp=window.webpackJsonp||[]).push([[985],{2314:function(t,e,n){"use strict";n.r(e),n.d(e,"RefreshExamples",(function(){return p}));var r=n(0),a=n(7),o=n(95),s=n(583),i=n(180),l=n(666),u=n(104),c=n(591),p=Object(a.b)(void 0,(function(t){return{start:function(e){return t(u.a.start(e))},stop:function(e){return t(u.a.stop(e))}}}))((function(t){return r.createElement(r.Fragment,null,r.createElement(i.a,{level:2,title:"Component to handle Refresh"},r.createElement(s.a,{label:"Refresh counter"},r.createElement(o.a,{name:"Start",className:"btn mr2",onClick:function(){return t.start("refresh-1")}}),r.createElement(o.a,{name:"Stop",className:"btn",onClick:function(){return t.stop("refresh-1")}}),r.createElement("div",null,r.createElement(c.a,{id:"refresh-1",callback:function(){return alert("refresh end")}})))),r.createElement(i.a,{level:2,title:"Component with a button to call the refreshCallback"},r.createElement(s.a,{label:"Refresh counter"},r.createElement(o.a,{name:"Start",className:"btn mr2",onClick:function(){return t.start("refresh-2")}}),r.createElement(o.a,{name:"Stop",className:"btn",onClick:function(){return t.stop("refresh-2")}}),r.createElement("div",null,r.createElement(l.a,{id:"refresh-2",delay:20,callback:function(t){alert("refresh end"),t()},button:{name:"Refresh",enabled:!0},buttonContainerProps:{className:"mb2"}})))))}))},564:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(0),a=function(t){var e=t.children;return r.createElement("section",{className:"text-dark-medium-grey help-text"},e)}},583:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(2),a=n(0),o=n(179),s=n(13),i=n(40),l=n(564),u=function(t){var e=t.children,n=t.label,u=t.message,c=t.helpText,p=t.headerClassName,f=t.optionalInformation,m=n||f?a.createElement("header",{className:r("label","text-light-blue",p)},n?a.createElement("span",null,n):null,f?a.createElement(i.a,{title:f,placement:o.a.Top,className:"ml1"},a.createElement(s.a,{svgName:"info-14",svgClass:"icon fill-medium-grey"})):null):null;return a.createElement("div",{className:"labeled-input"},m,e,!!u&&a.createElement(l.a,null,u),!!c&&a.createElement(l.a,null,c))}},591:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r,a=n(0),o=n(7),s=n(47),i=n(104),l=n(188),u=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={count:e.props.delay},e}return u(e,t),Object.defineProperty(e.prototype,"isInProgress",{get:function(){return 0===this.state.count&&this.props.status===l.a.inProgress},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isStopped",{get:function(){return this.props.status===l.a.stopped},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isStarted",{get:function(){return this.props.status===l.a.started},enumerable:!0,configurable:!0}),e.prototype.stopInterval=function(){clearInterval(this.activeInterval)},e.prototype.startInterval=function(){var t=this;this.activeInterval=window.setInterval((function(){t.setState((function(t){return{count:t.count-1}}))}),s.a.REFRESH_CALLBACK_INTERVAL_MS),this.props.inProgress()},e.prototype.componentDidMount=function(){this.startInterval()},e.prototype.componentDidUpdate=function(t,e){this.isStarted?(this.stopInterval(),this.setState({count:this.props.delay}),this.startInterval()):this.isStopped&&this.stopInterval()},e.prototype.componentWillUnmount=function(){this.stopInterval()},e.prototype.render=function(){var t,e;return this.isInProgress&&(this.stopInterval(),this.props.stop(),null===(e=(t=this.props).callback)||void 0===e||e.call(t,this.props.start)),this.props.renderCount(this.state.count)},e.defaultProps={delay:10,renderCount:function(t){return a.createElement("span",null,"Auto refresh in ",t," seconds")}},e}(a.PureComponent),p=Object(o.b)((function(t,e){return{status:l.b.getRefreshStatus(t,{id:e.id})}}),(function(t,e){return{start:function(){return t(i.a.start(e.id))},stop:function(){return t(i.a.stop(e.id))},inProgress:function(){return t(i.a.inProgress(e.id))}}}))(c)},666:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(0),a=n(7),o=n(95),s=n(104),i=n(591),l=n(188),u=function(){return(u=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},c=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n},p=function(t){return t!==l.a.stopped},f=Object(a.b)((function(t,e){return{status:l.b.getRefreshStatus(t,{id:e.id})}}),(function(t,e){return{start:function(){return t(s.a.start(e.id))},stop:function(){return t(s.a.stop(e.id))}}}))((function(t){var e=t.button,n=t.buttonContainerProps,a=t.status,s=t.start,l=t.stop,f=c(t,["button","buttonContainerProps","status","start","stop"]);return r.createElement(r.Fragment,null,r.createElement("div",u({},n||{}),r.createElement(o.a,u({},e,{onClick:function(){var t,e;l(),null===(e=(t=f).callback)||void 0===e||e.call(t,s)},enabled:p(a)}))),r.createElement(i.a,u({},f)))}))}}]);
//# sourceMappingURL=985.bundle.js.map