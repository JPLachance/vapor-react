(window.webpackJsonp=window.webpackJsonp||[]).push([[988],{2186:function(t,e,o){"use strict";o.r(e),o.d(e,"ActionableItemExamples",(function(){return r}));var n=o(0),i=o(742),r=function(){return n.createElement("div",{className:"mt2"},n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label"},"ActionableItem without an onItemClick method"),n.createElement("div",{className:"form-control"},n.createElement(i.a,{id:"actionable-item-1",actions:[{value:"action 1",onOptionClick:function(){return alert("you triggered the first action")}},{value:"action 2",onOptionClick:function(){return alert("you triggered the second action")}}]},"click on the dots"))),n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label"},"ActionableItem with an onItemClick method"),n.createElement("div",{className:"form-control"},n.createElement(i.a,{id:"actionable-item-2",onItemClick:function(t){return alert("you triggered the onItemClick method")},actions:[{value:"action 1",onOptionClick:function(){return alert("you triggered the first action")}},{value:"action 2",onOptionClick:function(){return alert("you triggered the second action")}}]},"click on the dots"))),n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label",style:{marginTop:"75vh"}},"ActionableItem without an onItemClick method"),n.createElement("div",{className:"form-control"},n.createElement(i.a,{id:"actionable-item-3",actions:[{value:"action 1",onOptionClick:function(){return alert("you triggered the first action")}},{value:"action 2",onOptionClick:function(){return alert("you triggered the second action")}}],style:{marginBottom:"50vh"}},"click on the dots"))))}},601:function(t,e,o){(e=t.exports=o(71)(!1)).push([t.i,"/* ----------- Deprecated Palette ----------- */\n.ActionableItem-actionableItemContainer-ftoHUIOaRids7NNMyZuho {\n  height: 34px; }\n\n.ActionableItem-actionableItemContent-1YT886ZPm3OC7fEfjhxv8W,\n.ActionableItem-actionableItemDots-3GF73eU6E03kdjXTDL0W_1 {\n  border-radius: 2px; }\n\n.ActionableItem-actionableItemContent-1YT886ZPm3OC7fEfjhxv8W {\n  padding: 8.5px 16px;\n  border-radius: 2px 0 0 2px; }\n\n.ActionableItem-actionableItemDots-3GF73eU6E03kdjXTDL0W_1 {\n  padding: 8.5px 8px;\n  border-radius: 0 2px 2px 0; }\n  .ActionableItem-actionableItemDots-3GF73eU6E03kdjXTDL0W_1:hover {\n    background-color: #e6ecf0; }\n\n.actionable-item-target {\n  display: inline-block; }\n",""]),e.locals={actionableItemContainer:"ActionableItem-actionableItemContainer-ftoHUIOaRids7NNMyZuho",actionableItemContent:"ActionableItem-actionableItemContent-1YT886ZPm3OC7fEfjhxv8W",actionableItemDots:"ActionableItem-actionableItemDots-3GF73eU6E03kdjXTDL0W_1"}},742:function(t,e,o){"use strict";o.d(e,"a",(function(){return b}));var n,i=o(2),r=o(0),a=o(1),c=o(32),l=o(187),s=o(190),m=o(13),u=o(828),p=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),d=function(){return(d=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},b=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return p(e,t),e.prototype.render=function(){var t=this;return r.createElement("div",d({},a.omit(this.props,"actions","onItemClick","dropProps")),r.createElement("div",{className:i({"cursor-pointer":!!this.props.onItemClick},"actionable-item-content inline-block text-medium-blue border-color-medium-grey mod-border bg-pure-white",u.actionableItemContent,u.actionableItemContainer,this.props.containerClassName),onClick:function(e){var o,n;return null===(n=(o=t.props).onItemClick)||void 0===n?void 0:n.call(o,e)}},this.props.children),this.props.actions&&this.props.actions.length?r.createElement(l.a,d({id:this.props.id,positions:[c.b.bottom,c.b.top],buttonContainerProps:{className:"inline-block"},parentSelector:"body",renderOpenButton:function(t){return r.createElement("div",{onClick:t,className:i("actionable-item-dots cursor-pointer inline-block mod-border-top mod-border-right border-color-medium-grey mod-border-bottom bg-pure-white",u.actionableItemDots,u.actionableItemContainer)},r.createElement(m.a,{svgName:"more-append",svgClass:"icon mod-12 fill-medium-blue"}))}},this.props.dropProps||{}),r.createElement(s.a,{items:this.props.actions})):null)},e.defaultProps={actions:[]},e}(r.Component)},828:function(t,e,o){var n=o(601);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0},r=o(72)(n,i);n.locals&&(t.exports=n.locals),t.hot.accept(601,(function(){var e=o(601);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var o,n=0;for(o in t){if(!e||t[o]!==e[o])return!1;n++}for(o in e)n--;return 0===n}(n.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");r(e)})),t.hot.dispose((function(){r()}))}}]);
//# sourceMappingURL=988.bundle.js.map