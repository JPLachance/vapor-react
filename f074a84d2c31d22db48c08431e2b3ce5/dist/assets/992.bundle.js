(window.webpackJsonp=window.webpackJsonp||[]).push([[992],{1023:function(t,e,a){var r=a(642);"string"==typeof r&&(r=[[t.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},s=a(71)(r,n);r.locals&&(t.exports=r.locals),t.hot.accept(642,(function(){var e=a(642);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var a,r=0;for(a in t){if(!e||t[a]!==e[a])return!1;r++}for(a in e)r--;return 0===r}(r.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");s(e)})),t.hot.dispose((function(){s()}))},2325:function(t,e,a){"use strict";a.r(e),a.d(e,"StatusCardExamples",(function(){return s}));var r=a(0),n=a(802),s=function(){return r.createElement("div",{className:"mt2"},r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Status card"),r.createElement("div",{className:"form-control"},r.createElement(n.a,{color:"green",title:"Tasks",icon:"date-today"},"10/10 done!"))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Status card red"),r.createElement("div",{className:"form-control"},r.createElement(n.a,{color:"red",title:"Tasks",icon:"date-today"},"2/10 done!"))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Simple status card"),r.createElement("div",{className:"form-control"},r.createElement(n.a,{color:"yellow",title:"Tasks",simple:!0},"6/10 done!"))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Many status cards"),r.createElement("div",{className:"form-control"},r.createElement("div",{className:"status-card-wrapper"},r.createElement(n.a,{color:"red-berry",title:"Engine 1",icon:"settings"},"Limited"),r.createElement(n.a,{color:"curious-blue-1",title:"Engine 2",icon:"settings",loading:!0},"Cool"),r.createElement(n.a,{color:"persian-green",title:"Speed",icon:"peak"},"Below the limit"),r.createElement(n.a,{color:"sunglow",title:"View",icon:"view"},"Hazardeous"),r.createElement(n.a,{color:"tropical-rain-forest",title:"Boost",icon:"update"},"Ready")))))}},642:function(t,e,a){(e=t.exports=a(70)(!1)).push([t.i,"/* ----------- Deprecated Palette ----------- */\n.StatusCard-statusCard-1ns9jGYyvQagy43BSLCaQQ {\n  position: relative;\n  background: #ffffff;\n  border-left: 4px solid transparent;\n  border-radius: 2px;\n  box-shadow: 0 2px 8px 1px #bcc3ca; }\n  .StatusCard-statusCard-1ns9jGYyvQagy43BSLCaQQ.simple {\n    background: transparent;\n    box-shadow: none; }\n  .StatusCard-statusCard-1ns9jGYyvQagy43BSLCaQQ .spinner {\n    position: absolute;\n    top: 50%;\n    width: 100%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n\n.StatusCard-statusCardIcon-1z0ogwrnjdNGNdMx8Vwjqy {\n  margin: 25px; }\n\n.StatusCard-statusCardTitle-Xy8uh6KXAOh54Yt_gVWXO {\n  margin: 13px 25px 5px 0;\n  font-size: 15px; }\n  .simple .StatusCard-statusCardTitle-Xy8uh6KXAOh54Yt_gVWXO {\n    margin: 0 10px 5px; }\n\n.StatusCard-statusCardInfo-JzyKj3iEMrQuxr7oeB3JU {\n  margin: 0 25px 13px 0;\n  font-size: 16px; }\n  .simple .StatusCard-statusCardInfo-JzyKj3iEMrQuxr7oeB3JU {\n    margin: 0 10px; }\n\n.status-card-wrapper {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap; }\n  .status-card-wrapper .StatusCard-statusCard-1ns9jGYyvQagy43BSLCaQQ {\n    width: calc((100% - 10px * 3) / 4);\n    margin-right: 10px;\n    margin-bottom: 10px; }\n    .status-card-wrapper .StatusCard-statusCard-1ns9jGYyvQagy43BSLCaQQ:nth-child(4n) {\n      margin-right: 0; }\n    .status-card-wrapper .StatusCard-statusCard-1ns9jGYyvQagy43BSLCaQQ.simple {\n      width: 160px; }\n",""]),e.locals={statusCard:"StatusCard-statusCard-1ns9jGYyvQagy43BSLCaQQ",statusCardIcon:"StatusCard-statusCardIcon-1z0ogwrnjdNGNdMx8Vwjqy",statusCardTitle:"StatusCard-statusCardTitle-Xy8uh6KXAOh54Yt_gVWXO",statusCardInfo:"StatusCard-statusCardInfo-JzyKj3iEMrQuxr7oeB3JU"}},802:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var r,n=a(2),s=a(0),o=a(78),l=a(13),i=a(1023),c=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a])})(t,e)},function(t,e){function a(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}),d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.render=function(){var t,e=n(i.statusCard,"flex",((t={simple:this.props.simple})["border-left-color-"+this.props.color]=!this.props.loading,t));return s.createElement("div",{className:e},this.getContent())},e.prototype.getContent=function(){var t=n("text-medium-blue",i.statusCardTitle);return this.props.loading?[s.createElement(o.a,{key:"loading",className:"center-align"})]:[this.props.icon&&s.createElement(l.a,{key:"icon",svgName:this.props.icon,svgClass:"icon mod-2x",className:i.statusCardIcon}),s.createElement("div",{key:"status"},s.createElement("h3",{className:t},this.props.title),s.createElement("div",{className:i.statusCardInfo},this.props.children))]},e}(s.Component)}}]);
//# sourceMappingURL=992.bundle.js.map