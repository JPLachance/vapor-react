(window.webpackJsonp=window.webpackJsonp||[]).push([[1002],{2326:function(e,t,a){"use strict";a.r(t),a.d(t,"SubNavigationExamples",(function(){return i}));var n=a(0),l=a(180),r=a(13),s=a(804),i=function(){return n.createElement(o,null)},c=[{label:"Avatar",id:"avatar"},{label:"Titanic",id:"titanic"},{label:"Star Wars: The Force Awakens",id:"star-wars"},{label:"Jurassic World",id:"jurasic-world"},{label:"The Avengers",id:"the-avengers"}],o=function(){return n.createElement(l.a,{title:"Sub Navigation Examples"},n.createElement(l.a,{level:2,title:"Sub Navigation"},n.createElement("div",{className:"flex",style:{height:"200px"}},n.createElement(s.a,{id:"first-sub-nav",items:c}))),n.createElement(l.a,{level:2,title:"Sub Navigation with default selected"},n.createElement("div",{className:"flex",style:{height:"120px"}},n.createElement(s.a,{id:"second-sub-nav",items:c,defaultSelected:"star-wars"}))),n.createElement(l.a,{level:2,title:"Sub-navigation with custom JSX labels"},n.createElement("div",{className:"flex",style:{width:"250px",height:"200px"}},n.createElement(s.a,{id:"third-sub-nav",items:[{label:n.createElement("span",{className:"flex space-between"},n.createElement("span",{className:"truncate"},"Avatar"),n.createElement(r.a,{svgName:"thumb-up",svgClass:"icon fill-green"})),id:"avatar"},{label:n.createElement("span",{className:"flex space-between"},n.createElement("span",{className:"truncate"},"Titanic"),n.createElement(r.a,{svgName:"thumb-up",svgClass:"icon fill-green"})),id:"titanic"},{label:n.createElement("span",{className:"flex space-between"},n.createElement("span",{className:"truncate pr1"},"Star Wars: The Force Awakens"),n.createElement(r.a,{svgName:"thumb-up",svgClass:"icon fill-green"})),id:"star-wars"},{label:n.createElement("span",{className:"flex space-between"},n.createElement("span",{className:"truncate"},"Jurassic World"),n.createElement(r.a,{svgName:"thumb-down",svgClass:"icon fill-red"})),id:"jurasic-world"},{label:n.createElement("span",{className:"flex space-between"},n.createElement("span",{className:"truncate"},"The Avengers"),n.createElement(r.a,{svgName:"thumb-down",svgClass:"icon fill-red"})),id:"the-avengers"}]}))))}},696:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n,l=a(2),r=a(0),s=(a(41),a(1)),i=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),c=function(){return(c=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},o=["id","items","defaultSelected","ref","key","selected","onRender","onDestroy","onClickItem"],u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleItemClick=function(e,a){var n,l;e.preventDefault(),null===(l=(n=t.props).onClickItem)||void 0===l||l.call(n,a)},t}return i(t,e),t.prototype.componentWillMount=function(){var e,t;null===(t=(e=this.props).onRender)||void 0===t||t.call(e)},t.prototype.componentWillUnmount=function(){var e,t;null===(t=(e=this.props).onDestroy)||void 0===t||t.call(e)},t.prototype.render=function(){var e=this,t=this.props.selected||this.props.defaultSelected,a=Object(s.omit)(this.props,o),n=Object(s.map)(this.props.items,(function(a){var n=a.id,s=a.link,i=a.label;return r.createElement("li",{key:n,className:l("sub-navigation-item",{"mod-selected":n===t})},r.createElement("a",{href:s||"#",className:"sub-navigation-item-link",onClick:function(t){return e.handleItemClick(t,n)}},i))}));return r.createElement("nav",c({},a,{className:l("sub-navigation",a.className)}),r.createElement("ul",{className:"sub-navigation-items"},n))},t}(r.PureComponent)},804:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(7),l=a(1),r=a(6),s=a(696),i=a(88),c=Object(n.b)((function(e,t){var a=l.findWhere(e.subNavigations,{id:t.id});return{selected:a?a.selected:""}}),(function(e,t){return{onRender:function(){return e(Object(i.b)(t.id,t.defaultSelected?[t.defaultSelected]:l.pluck(t.items,"id")))},onDestroy:function(){return e(Object(i.c)(t.id))},onClickItem:function(a){return e(Object(i.d)(t.id,a))}}}),r.c.mergeProps)(s.a)}}]);
//# sourceMappingURL=1002.bundle.js.map