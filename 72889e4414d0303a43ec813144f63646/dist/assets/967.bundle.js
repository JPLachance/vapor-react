(window.webpackJsonp=window.webpackJsonp||[]).push([[967],{2283:function(e,t,n){"use strict";n.r(t),n.d(t,"CollapsibleExamples",(function(){return m}));var o=n(0),i=n(1),l=n(190),a=n(94),r=n(178),s=n(107),p=n(564),c=n(758),d=n(759),m=function(){return o.createElement(r.a,{title:"Collapsible Examples"},o.createElement(r.a,{level:3,title:"A basic collapsible"},o.createElement(p.a,{id:"collapsible-example-1",className:"bg-white",headerContent:o.createElement("h3",{className:"p2"},"Collapsible header")},"Collapsible content")),o.createElement(r.a,{level:2,title:"Collapsible info boxes"},o.createElement(r.a,{level:3,title:"A collapsible information box"},o.createElement(d.a,{id:"collapsible-info-box-example-1",title:"Lean more about collapsible info boxes."},"Some latin stuff: Lorem ipsum dolor sit amet.")),o.createElement(r.a,{level:3,title:"A collapsible information box for a page section"},o.createElement(d.a,{id:"collapsible-info-box-example-2",title:"Section A",sectionAdditionalContent:o.createElement("span",{style:{position:"relative",top:"8px",marginLeft:"20px"}},"Add anything here"),isSection:!0},"Lorem ipsum dolor sit amet.")),o.createElement(r.a,{level:3,title:"Collapsible information box for a page section with additional information only showing if the minute is\r\n                even"},o.createElement(d.a,{id:"collapsible-info-box-example-3",title:"Section A",sectionAdditionalContent:o.createElement("span",{style:{position:"relative",top:"8px",marginLeft:"20px"}},"Add anything here"),sectionAdditionalContentCondition:function(){return!((new Date).getMinutes()%2)},isSection:!0},"Lorem ipsum dolor sit amet."))),o.createElement(r.a,{level:2,title:"Collapsible containers"},o.createElement(r.a,{level:3,title:"Collapsible Container expanded on mount"},o.createElement(c.a,{id:"collapsible-container-example-1",title:"CollapsibleContainer expanded on mount",informationUrl:"http://coveo.github.io/vapor/",informationTooltip:{title:"I display information and if you click me you'll be led to a url that was provided to me.",placement:"top"},expandedOnMount:!0},"I am expanded on mount!")),o.createElement(r.a,{level:3,title:"Collapsible Container not expanded on mount"},o.createElement(c.a,{id:"collapsible-container-example-2",title:"CollapsibleContainer not expanded on mount",informationTooltip:{title:"I display information only since no url was given to me.",placement:"top"}},"I was not expanded on mount, but now I am! Thanks!")),o.createElement(r.a,{level:3,title:"CollapsibleContainer is expandable from outside the component."},o.createElement(a.a,{enabled:!0,small:!0,name:"Toggle Container",onClick:function(){var e=i.findWhere(l.a.getState().collapsibles,{id:"collapsible-container-example-3"});l.a.dispatch(Object(s.e)("collapsible-container-example-3",!e.expanded))}}),o.createElement(c.a,{id:"collapsible-container-example-3",title:"CollapsibleContainer"},"You just expanded me with a button!"))))}},564:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(7),i=n(1),l=n(6),a=n(138),r=n(107),s=Object(o.b)((function(e,t){var n=Object(i.findWhere)(e.collapsibles,{id:t.id});return n?{expanded:n.expanded}:{expanded:t.expandedOnMount}}),(function(e,t){return{onMount:function(){return e(Object(r.b)(t.id,!!t.expandedOnMount))},onUnmount:function(){return e(Object(r.c)(t.id))},onToggleExpandedState:function(n){return e(Object(r.d)(t.id,!n))}}}),l.c.mergeProps)(a.a)},604:function(e,t,n){(t=e.exports=n(70)(!1)).push([e.i,"/* ----------- Deprecated Palette ----------- */\n.CollapsibleContainer-collapsible-3Xnefm3nu7QJpdNNBcOF9i {\n  margin-top: -1px; }\n\n.CollapsibleContainer-header-hsM-1Omgb-DsES_qBzjTp {\n  min-height: 50px; }\n\n.CollapsibleContainer-content-18SAr6ipBZGJCaW7ymVKtT {\n  padding: 20px 40px; }\n",""]),t.locals={collapsible:"CollapsibleContainer-collapsible-3Xnefm3nu7QJpdNNBcOF9i",header:"CollapsibleContainer-header-hsM-1Omgb-DsES_qBzjTp",content:"CollapsibleContainer-content-18SAr6ipBZGJCaW7ymVKtT"}},605:function(e,t,n){(t=e.exports=n(70)(!1)).push([e.i,"/* ----------- Deprecated Palette ----------- */\n.CollapsibleInfoBox-container-2AVLcrwnfIhiV96yxLJfIb {\n  transition: background-color 150ms ease-in-out; }\n  .CollapsibleInfoBox-container-2AVLcrwnfIhiV96yxLJfIb:hover {\n    background-color: #f1f3f4; }\n\n.CollapsibleInfoBox-alignWithIcon-3NwHWqKdQE7Gc1n9v4DLzL {\n  margin-left: calc(1rem + 20px); }\n",""]),t.locals={container:"CollapsibleInfoBox-container-2AVLcrwnfIhiV96yxLJfIb",alignWithIcon:"CollapsibleInfoBox-alignWithIcon-3NwHWqKdQE7Gc1n9v4DLzL"}},668:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o,i=n(2),l=n(0),a=n(655),r=n(13),s=n(40),p=n(564),c=n(832),d=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=function(){return(m=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.getHeader=function(){var e=i("inline-flex flex-center text-medium-blue caps p2 bold ml3",t.props.collapsibleHeaderClassName);return l.createElement("div",{className:e},l.createElement("div",null,t.props.title),t.getCollapsibleHeaderIcon())},t}return d(t,e),t.prototype.render=function(){var e,t=i(((e={})[c.content]=!this.props.withoutContentPadding,e),this.props.collapsibleBodyClassName,"mod-border-bottom");return l.createElement(p.a,{id:this.props.id,className:i(this.props.className,c.collapsible),headerContent:this.getHeader(),expandedOnMount:this.props.expandedOnMount,headerClasses:i(c.header,this.props.expanded?"bg-light-grey":"bg-white"),toggleIconClassName:"fill-medium-blue mr4",withBorders:!0},l.createElement("div",{className:t},this.props.children))},t.prototype.getSvgClass=function(){return i("icon mod-lg ml1",{"fill-orange":!!this.props.informationUrl,"fill-medium-grey":!this.props.informationUrl})},t.prototype.getCollapsibleHeaderIcon=function(){if(!this.props.informationUrl&&!this.props.informationTooltip)return null;var e=m({placement:"right"},this.props.informationTooltip),t={svgName:this.props.informationUrl?"help":"info",svgClass:this.getSvgClass()},n=this.props.informationUrl?l.createElement(a.a,{url:this.props.informationUrl,target:"_blank",tooltip:e,svg:t}):l.createElement(s.a,m({},e),l.createElement(r.a,m({},t)));return l.createElement("span",{className:"round-contextual-help"},n)},t}(l.Component)},758:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(7),i=n(1),l=n(6),a=n(668),r=Object(o.b)((function(e,t){var n=Object(i.findWhere)(e.collapsibles,{id:t.id});return{expanded:n&&n.expanded}}),void 0,l.c.mergeProps)(a.a)},759:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o,i=n(2),l=n(0),a=n(13),r=n(564),s=n(833),p=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return p(t,e),t.prototype.render=function(){return l.createElement(r.a,{id:this.props.id,className:i(s.container,"text-grey-9 mod-rounded-border-2"),headerClasses:"p1",toggleIconClassName:"fill-medium-blue",headerContent:this.getHeader(),expandedOnMount:this.props.expandedOnMount},l.createElement("div",{className:i(s.alignWithIcon,"px1 pb1 mr3")},this.props.children))},t.prototype.getHeader=function(){return this.props.isSection?l.createElement("div",{className:"flex pl1"},l.createElement("h2",{className:"text-medium-blue"},this.props.title),this.props.sectionAdditionalContent&&l.createElement("span",{className:this.getAdditionalInfoClasses()},this.props.sectionAdditionalContent)):l.createElement("div",{className:"inline-flex"},l.createElement(a.a,{svgName:"info",className:"icon mod-20 mx1 js-info-svg",svgClass:"fill-medium-grey"}),l.createElement("h3",{className:"text-medium-blue"},this.props.title))},t.prototype.getAdditionalInfoClasses=function(){return i(this.props.sectionAdditionalContentClasses,{hidden:this.props.sectionAdditionalContentCondition&&!this.props.sectionAdditionalContentCondition()})},t}(l.PureComponent)},832:function(e,t,n){var o=n(604);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0},l=n(71)(o,i);o.locals&&(e.exports=o.locals),e.hot.accept(604,(function(){var t=n(604);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,o=0;for(n in e){if(!t||e[n]!==t[n])return!1;o++}for(n in t)o--;return 0===o}(o.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");l(t)})),e.hot.dispose((function(){l()}))},833:function(e,t,n){var o=n(605);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0},l=n(71)(o,i);o.locals&&(e.exports=o.locals),e.hot.accept(605,(function(){var t=n(605);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,o=0;for(n in e){if(!t||e[n]!==t[n])return!1;o++}for(n in t)o--;return 0===o}(o.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");l(t)})),e.hot.dispose((function(){l()}))}}]);
//# sourceMappingURL=967.bundle.js.map