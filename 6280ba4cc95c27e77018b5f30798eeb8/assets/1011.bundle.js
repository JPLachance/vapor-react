(window.webpackJsonp=window.webpackJsonp||[]).push([[1011],{791:function(t,e,o){(function(e){function n(t){return-1===t.indexOf("s",t.length-1)?t+"s":t}t.exports=function(){var i=arguments.length?arguments[0]:{},r=i.count||1,a=i.units||"sentences",s=i.sentenceLowerBound||5,l=i.sentenceUpperBound||15,h=i.paragraphLowerBound||3,f=i.paragraphUpperBound||7,u=i.format||"plain",d=i.words||o(792).words,c=i.random||Math.random,p=i.suffix;if(!p){var m=t.exports,g="undefined"!=typeof product&&"ReactNative"===product.navigator,v=void 0!==e&&"win32"===e.platform;p=!g&&m&&v?"\r\n":"\n"}function b(t,e){return Math.floor(c()*(e-t+1)+t)}function y(t){return t[b(0,t.length-1)]}function w(t,e,o){for(var n="",i={min:0,max:b(e,o)};i.min<i.max;)n+=" "+y(t),i.min++;return n.length&&(n=(n=n.slice(1)).charAt(0).toUpperCase()+n.slice(1)),n}function C(t,e,o,n,i){for(var r="",a={min:0,max:b(e,o)};a.min<a.max;)r+=". "+w(t,n,i),a.min++;return r.length&&(r=r.slice(2),r+="."),r}a=n(a.toLowerCase());var O,_,E={min:0,max:r},x="";for("html"===u&&(O="<p>",_="</p>");E.min<E.max;){switch(a.toLowerCase()){case"words":x+=" "+y(d);break;case"sentences":x+=". "+w(d,s,l);break;case"paragraphs":var P=C(d,h,f,s,l);"html"===u?(P=O+P+_,E.min<E.max-1&&(P+=p)):E.min<E.max-1&&(P+=p+p),x+=P}E.min++}if(x.length){var T=0;0===x.indexOf(". ")?T=2:0!==x.indexOf(".")&&0!==x.indexOf(" ")||(T=1),x=x.slice(T),"sentences"===a&&(x+=".")}return x}}).call(this,o(823))},792:function(t,e){t.exports={words:["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"]}},968:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i.default}});var n,i=(n=o(969))&&n.__esModule?n:{default:n}},969:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(1),i=s(o(2)),r=s(o(12)),a=s(o(970));function s(t){return t&&t.__esModule?t:{default:t}}function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){if(null==t)return{};var o,n,i=function(t,e){if(null==t)return{};var o,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(i[o]=t[o]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function f(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}a.default||console.error("It looks like Tether has not been included. Please load this dependency first https://github.com/HubSpot/tether");var m=void 0!==r.default.createPortal,g=[i.default.string,i.default.shape({appendChild:i.default.func.isRequired})],v=["auto auto","top left","top center","top right","middle left","middle center","middle right","bottom left","bottom center","bottom right"],b=function(t){function e(t){var o,n,i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=!(i=u(e).call(this,t))||"object"!==l(i)&&"function"!=typeof i?c(n):i,p(c(c(o)),"_targetNode",null),p(c(c(o)),"_elementParentNode",null),p(c(c(o)),"_tether",null),p(c(c(o)),"_elementComponent",null),p(c(c(o)),"_targetComponent",null),o.updateChildrenComponents(o.props),o}var o,i,s;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,t),o=e,(i=[{key:"updateChildrenComponents",value:function(t){var e=n.Children.toArray(t.children);this._targetComponent=e[0],this._elementComponent=e[1],this._targetComponent&&this._elementComponent&&this._createContainer()}},{key:"componentWillUpdate",value:function(t){this.updateChildrenComponents(t)}},{key:"componentDidMount",value:function(){this._update()}},{key:"componentDidUpdate",value:function(){this._update()}},{key:"componentWillUnmount",value:function(){this._destroy()}},{key:"getTetherInstance",value:function(){return this._tether}},{key:"disable",value:function(){this._tether.disable()}},{key:"enable",value:function(){this._tether.enable()}},{key:"on",value:function(t,e,o){this._tether.on(t,e,o)}},{key:"once",value:function(t,e,o){this._tether.once(t,e,o)}},{key:"off",value:function(t,e){this._tether.off(t,e)}},{key:"position",value:function(){this._tether.position()}},{key:"_registerEventListeners",value:function(){var t=this;this.on("update",(function(){for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return t.props.onUpdate&&t.props.onUpdate.apply(t,o)})),this.on("repositioned",(function(){for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return t.props.onRepositioned&&t.props.onRepositioned.apply(t,o)}))}},{key:"_destroy",value:function(){this._elementParentNode&&(m||r.default.unmountComponentAtNode(this._elementParentNode),this._elementParentNode.parentNode.removeChild(this._elementParentNode)),this._tether&&this._tether.destroy(),this._elementParentNode=null,this._tether=null,this._targetNode=null,this._targetComponent=null,this._elementComponent=null}},{key:"_createContainer",value:function(){if(!this._elementParentNode){var t=this.props.renderElementTag;this._elementParentNode=document.createElement(t),this._renderNode.appendChild(this._elementParentNode)}}},{key:"_update",value:function(){var t=this,e=!this._elementComponent||!this._targetComponent;e||(this._targetNode=r.default.findDOMNode(this),e=!this._targetNode),e?this._destroy():m?this._updateTether():r.default.unstable_renderSubtreeIntoContainer(this,this._elementComponent,this._elementParentNode,(function(){t._elementParentNode&&t._updateTether()}))}},{key:"_updateTether",value:function(){var t=this.props,e=(t.children,t.renderElementTag,t.renderElementTo,t.id),o=t.className,n=t.style,i=h(t,["children","renderElementTag","renderElementTo","id","className","style"]),r=function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable})))),n.forEach((function(e){p(t,e,o[e])}))}return t}({target:this._targetNode,element:this._elementParentNode},i),s=e||"";this._elementParentNode.id!==s&&(this._elementParentNode.id=s);var l=o||"";if(this._elementParentNode.className!==l&&(this._elementParentNode.className=l),n){var f=this._elementParentNode.style;Object.keys(n).forEach((function(t){f[t]!==n[t]&&(f[t]=n[t])}))}this._tether?this._tether.setOptions(r):(this._tether=new a.default(r),this._registerEventListeners()),this._tether.position()}},{key:"render",value:function(){return this._targetComponent?m&&this._elementComponent?[this._targetComponent,r.default.createPortal(this._elementComponent,this._elementParentNode)]:this._targetComponent:null}},{key:"_renderNode",get:function(){var t=this.props.renderElementTo;return"string"==typeof t?document.querySelector(t):t||document.body}}])&&f(o.prototype,i),s&&f(o,s),e}(n.Component);p(b,"propTypes",{renderElementTag:i.default.string,renderElementTo:i.default.oneOfType(g),attachment:i.default.oneOf(v).isRequired,targetAttachment:i.default.oneOf(v),offset:i.default.string,targetOffset:i.default.string,targetModifier:i.default.string,enabled:i.default.bool,classes:i.default.object,classPrefix:i.default.string,optimizations:i.default.object,constraints:i.default.array,id:i.default.string,className:i.default.string,style:i.default.object,onUpdate:i.default.func,onRepositioned:i.default.func,children:function(t,e,o){var i=t.children,r=n.Children.count(i);return r<=0?new Error("".concat(o," expects at least one child to use as the target element.")):r>2?new Error("Only a max of two children allowed in ".concat(o,".")):void 0}}),p(b,"defaultProps",{renderElementTag:"div",renderElementTo:null});var y=b;e.default=y},970:function(t,e,o){var n,i,r;/*! tether 1.4.7 */i=[],void 0===(r="function"==typeof(n=function(){"use strict";var t=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}();function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=void 0;void 0===o&&(o={modules:[]});var n=null;function i(t){var e=t.getBoundingClientRect(),o={};for(var n in e)o[n]=e[n];try{if(t.ownerDocument!==document){var r=t.ownerDocument.defaultView.frameElement;if(r){var a=i(r);o.top+=a.top,o.bottom+=a.top,o.left+=a.left,o.right+=a.left}}}catch(t){}return o}function r(t){var e=(getComputedStyle(t)||{}).position,o=[];if("fixed"===e)return[t];for(var n=t;(n=n.parentNode)&&n&&1===n.nodeType;){var i=void 0;try{i=getComputedStyle(n)}catch(t){}if(null==i)return o.push(n),o;var r=i,a=r.overflow,s=r.overflowX,l=r.overflowY;/(auto|scroll|overlay)/.test(a+l+s)&&("absolute"!==e||["relative","absolute","fixed"].indexOf(i.position)>=0)&&o.push(n)}return o.push(t.ownerDocument.body),t.ownerDocument!==document&&o.push(t.ownerDocument.defaultView),o}var a,s=(a=0,function(){return++a}),l={};function h(){n&&document.body.removeChild(n),n=null}function f(t){var e=void 0;t===document?(e=document,t=document.documentElement):e=t.ownerDocument;var o=e.documentElement,r=i(t),a=function(){var t=n;t&&document.body.contains(t)||((t=document.createElement("div")).setAttribute("data-tether-id",s()),p(t.style,{top:0,left:0,position:"absolute"}),document.body.appendChild(t),n=t);var e=t.getAttribute("data-tether-id");return void 0===l[e]&&(l[e]=i(t),O((function(){delete l[e]}))),l[e]}();return r.top-=a.top,r.left-=a.left,void 0===r.width&&(r.width=document.body.scrollWidth-r.left-r.right),void 0===r.height&&(r.height=document.body.scrollHeight-r.top-r.bottom),r.top=r.top-o.clientTop,r.left=r.left-o.clientLeft,r.right=e.body.clientWidth-r.width-r.left,r.bottom=e.body.clientHeight-r.height-r.top,r}function u(t){return t.offsetParent||document.documentElement}var d=null;function c(){if(d)return d;var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var e=document.createElement("div");p(e.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);var o=t.offsetWidth;e.style.overflow="scroll";var n=t.offsetWidth;o===n&&(n=e.clientWidth),document.body.removeChild(e);var i=o-n;return d={width:i,height:i}}function p(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=[];return Array.prototype.push.apply(e,arguments),e.slice(1).forEach((function(e){if(e)for(var o in e)({}).hasOwnProperty.call(e,o)&&(t[o]=e[o])})),t}function m(t,e){if(void 0!==t.classList)e.split(" ").forEach((function(e){e.trim()&&t.classList.remove(e)}));else{var o=new RegExp("(^| )"+e.split(" ").join("|")+"( |$)","gi"),n=b(t).replace(o," ");y(t,n)}}function g(t,e){if(void 0!==t.classList)e.split(" ").forEach((function(e){e.trim()&&t.classList.add(e)}));else{m(t,e);var o=b(t)+" "+e;y(t,o)}}function v(t,e){if(void 0!==t.classList)return t.classList.contains(e);var o=b(t);return new RegExp("(^| )"+e+"( |$)","gi").test(o)}function b(t){return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString?t.className.baseVal:t.className}function y(t,e){t.setAttribute("class",e)}function w(t,e,o){o.forEach((function(o){-1===e.indexOf(o)&&v(t,o)&&m(t,o)})),e.forEach((function(e){v(t,e)||g(t,e)}))}var C=[],O=function(t){C.push(t)},_=function(){for(var t=void 0;t=C.pop();)t()},E=function(){function o(){e(this,o)}return t(o,[{key:"on",value:function(t,e,o){var n=!(arguments.length<=3||void 0===arguments[3])&&arguments[3];void 0===this.bindings&&(this.bindings={}),void 0===this.bindings[t]&&(this.bindings[t]=[]),this.bindings[t].push({handler:e,ctx:o,once:n})}},{key:"once",value:function(t,e,o){this.on(t,e,o,!0)}},{key:"off",value:function(t,e){if(void 0!==this.bindings&&void 0!==this.bindings[t])if(void 0===e)delete this.bindings[t];else for(var o=0;o<this.bindings[t].length;)this.bindings[t][o].handler===e?this.bindings[t].splice(o,1):++o}},{key:"trigger",value:function(t){if(void 0!==this.bindings&&this.bindings[t]){for(var e=0,o=arguments.length,n=Array(o>1?o-1:0),i=1;i<o;i++)n[i-1]=arguments[i];for(;e<this.bindings[t].length;){var r=this.bindings[t][e],a=r.handler,s=r.ctx,l=r.once,h=s;void 0===h&&(h=this),a.apply(h,n),l?this.bindings[t].splice(e,1):++e}}}}]),o}();o.Utils={getActualBoundingClientRect:i,getScrollParents:r,getBounds:f,getOffsetParent:u,extend:p,addClass:g,removeClass:m,hasClass:v,updateClasses:w,defer:O,flush:_,uniqueId:s,Evented:E,getScrollBarSize:c,removeUtilElements:h};var x=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var o=[],n=!0,i=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(o.push(a.value),!e||o.length!==e);n=!0);}catch(t){i=!0,r=t}finally{try{!n&&s.return&&s.return()}finally{if(i)throw r}}return o}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}if(t=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),void 0===o)throw new Error("You must include the utils.js file before tether.js");var r=(V=o.Utils).getScrollParents,u=(f=V.getBounds,V.getOffsetParent),g=(p=V.extend,V.addClass),m=V.removeClass,c=(w=V.updateClasses,O=V.defer,_=V.flush,V.getScrollBarSize),h=V.removeUtilElements;function P(t,e){var o=arguments.length<=2||void 0===arguments[2]?1:arguments[2];return t+o>=e&&e>=t-o}var T,k,N,A,S=function(){if("undefined"==typeof document)return"";for(var t=document.createElement("div"),e=["transform","WebkitTransform","OTransform","MozTransform","msTransform"],o=0;o<e.length;++o){var n=e[o];if(void 0!==t.style[n])return n}}(),j=[],M=function(){j.forEach((function(t){t.position(!1)})),_()};function W(){return"object"==typeof performance&&"function"==typeof performance.now?performance.now():+new Date}T=null,k=null,N=null,A=function t(){if(void 0!==k&&k>16)return k=Math.min(k-16,250),void(N=setTimeout(t,250));void 0!==T&&W()-T<10||(null!=N&&(clearTimeout(N),N=null),T=W(),M(),k=W()-T)},"undefined"!=typeof window&&void 0!==window.addEventListener&&["resize","scroll","touchmove"].forEach((function(t){window.addEventListener(t,A)}));var B={center:"center",left:"right",right:"left"},L={middle:"middle",top:"bottom",bottom:"top"},z={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"},D=function(t,e){var o=t.left,n=t.top;return"auto"===o&&(o=B[e.left]),"auto"===n&&(n=L[e.top]),{left:o,top:n}},R=function(t){var e=t.left,o=t.top;return void 0!==z[t.left]&&(e=z[t.left]),void 0!==z[t.top]&&(o=z[t.top]),{left:e,top:o}};function F(){for(var t={top:0,left:0},e=arguments.length,o=Array(e),n=0;n<e;n++)o[n]=arguments[n];return o.forEach((function(e){var o=e.top,n=e.left;"string"==typeof o&&(o=parseFloat(o,10)),"string"==typeof n&&(n=parseFloat(n,10)),t.top+=o,t.left+=n})),t}function Y(t,e){return"string"==typeof t.left&&-1!==t.left.indexOf("%")&&(t.left=parseFloat(t.left,10)/100*e.width),"string"==typeof t.top&&-1!==t.top.indexOf("%")&&(t.top=parseFloat(t.top,10)/100*e.height),t}var U=function(t){var e=t.split(" "),o=x(e,2);return{top:o[0],left:o[1]}},H=U,X=function(n){function i(t){var n=this;e(this,i),function(t,e,o){for(var n=!0;n;){var i=t,r=e,a=o;n=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,r);if(void 0!==s){if("value"in s)return s.value;var l=s.get;if(void 0===l)return;return l.call(a)}var h=Object.getPrototypeOf(i);if(null===h)return;t=h,e=r,o=a,n=!0,s=h=void 0}}(Object.getPrototypeOf(i.prototype),"constructor",this).call(this),this.position=this.position.bind(this),j.push(this),this.history=[],this.setOptions(t,!1),o.modules.forEach((function(t){void 0!==t.initialize&&t.initialize.call(n)})),this.position()}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(i,n),t(i,[{key:"getClass",value:function(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0],e=this.options.classes;return void 0!==e&&e[t]?this.options.classes[t]:this.options.classPrefix?this.options.classPrefix+"-"+t:t}},{key:"setOptions",value:function(t){var e=this,o=arguments.length<=1||void 0===arguments[1]||arguments[1],n={offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"};this.options=p(n,t);var i=this.options,a=i.element,s=i.target,l=i.targetModifier;if(this.element=a,this.target=s,this.targetModifier=l,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),["element","target"].forEach((function(t){if(void 0===e[t])throw new Error("Tether Error: Both element and target must be defined");void 0!==e[t].jquery?e[t]=e[t][0]:"string"==typeof e[t]&&(e[t]=document.querySelector(e[t]))})),g(this.element,this.getClass("element")),!1!==this.options.addTargetClasses&&g(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment");this.targetAttachment=H(this.options.targetAttachment),this.attachment=H(this.options.attachment),this.offset=U(this.options.offset),this.targetOffset=U(this.options.targetOffset),void 0!==this.scrollParents&&this.disable(),"scroll-handle"===this.targetModifier?this.scrollParents=[this.target]:this.scrollParents=r(this.target),!1!==this.options.enabled&&this.enable(o)}},{key:"getTargetBounds",value:function(){if(void 0===this.targetModifier)return f(this.target);if("visible"===this.targetModifier)return this.target===document.body?{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth}:((r={height:(t=f(this.target)).height,width:t.width,top:t.top,left:t.left}).height=Math.min(r.height,t.height-(pageYOffset-t.top)),r.height=Math.min(r.height,t.height-(t.top+t.height-(pageYOffset+innerHeight))),r.height=Math.min(innerHeight,r.height),r.height-=2,r.width=Math.min(r.width,t.width-(pageXOffset-t.left)),r.width=Math.min(r.width,t.width-(t.left+t.width-(pageXOffset+innerWidth))),r.width=Math.min(innerWidth,r.width),r.width-=2,r.top<pageYOffset&&(r.top=pageYOffset),r.left<pageXOffset&&(r.left=pageXOffset),r);if("scroll-handle"===this.targetModifier){var t=void 0,e=this.target;e===document.body?(e=document.documentElement,t={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):t=f(e);var o=getComputedStyle(e),n=0;(e.scrollWidth>e.clientWidth||[o.overflow,o.overflowX].indexOf("scroll")>=0||this.target!==document.body)&&(n=15);var i=t.height-parseFloat(o.borderTopWidth)-parseFloat(o.borderBottomWidth)-n,r={width:15,height:.975*i*(i/e.scrollHeight),left:t.left+t.width-parseFloat(o.borderLeftWidth)-15},a=0;i<408&&this.target===document.body&&(a=-11e-5*Math.pow(i,2)-.00727*i+22.58),this.target!==document.body&&(r.height=Math.max(r.height,24));var s=this.target.scrollTop/(e.scrollHeight-i);return r.top=s*(i-r.height-a)+t.top+parseFloat(o.borderTopWidth),this.target===document.body&&(r.height=Math.max(r.height,24)),r}}},{key:"clearCache",value:function(){this._cache={}}},{key:"cache",value:function(t,e){return void 0===this._cache&&(this._cache={}),void 0===this._cache[t]&&(this._cache[t]=e.call(this)),this._cache[t]}},{key:"enable",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]||arguments[0];!1!==this.options.addTargetClasses&&g(this.target,this.getClass("enabled")),g(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParents.forEach((function(e){e!==t.target.ownerDocument&&e.addEventListener("scroll",t.position)})),e&&this.position()}},{key:"disable",value:function(){var t=this;m(this.target,this.getClass("enabled")),m(this.element,this.getClass("enabled")),this.enabled=!1,void 0!==this.scrollParents&&this.scrollParents.forEach((function(e){e.removeEventListener("scroll",t.position)}))}},{key:"destroy",value:function(){var t=this;this.disable(),j.forEach((function(e,o){e===t&&j.splice(o,1)})),0===j.length&&h()}},{key:"updateAttachClasses",value:function(t,e){var o=this;t=t||this.attachment,e=e||this.targetAttachment,void 0!==this._addAttachClasses&&this._addAttachClasses.length&&this._addAttachClasses.splice(0,this._addAttachClasses.length),void 0===this._addAttachClasses&&(this._addAttachClasses=[]);var n=this._addAttachClasses;t.top&&n.push(this.getClass("element-attached")+"-"+t.top),t.left&&n.push(this.getClass("element-attached")+"-"+t.left),e.top&&n.push(this.getClass("target-attached")+"-"+e.top),e.left&&n.push(this.getClass("target-attached")+"-"+e.left);var i=[];["left","top","bottom","right","middle","center"].forEach((function(t){i.push(o.getClass("element-attached")+"-"+t),i.push(o.getClass("target-attached")+"-"+t)})),O((function(){void 0!==o._addAttachClasses&&(w(o.element,o._addAttachClasses,i),!1!==o.options.addTargetClasses&&w(o.target,o._addAttachClasses,i),delete o._addAttachClasses)}))}},{key:"position",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]||arguments[0];if(this.enabled){this.clearCache();var n=D(this.targetAttachment,this.attachment);this.updateAttachClasses(this.attachment,n);var i=this.cache("element-bounds",(function(){return f(t.element)})),r=i.width,a=i.height;if(0===r&&0===a&&void 0!==this.lastSize){var s=this.lastSize;r=s.width,a=s.height}else this.lastSize={width:r,height:a};var l=this.cache("target-bounds",(function(){return t.getTargetBounds()})),h=l,d=Y(R(this.attachment),{width:r,height:a}),p=Y(R(n),h),m=Y(this.offset,{width:r,height:a}),g=Y(this.targetOffset,h);d=F(d,m),p=F(p,g);for(var v=l.left+p.left-d.left,b=l.top+p.top-d.top,y=0;y<o.modules.length;++y){var w=o.modules[y],C=w.position.call(this,{left:v,top:b,targetAttachment:n,targetPos:l,elementPos:i,offset:d,targetOffset:p,manualOffset:m,manualTargetOffset:g,scrollbarSize:P,attachment:this.attachment});if(!1===C)return!1;void 0!==C&&"object"==typeof C&&(b=C.top,v=C.left)}var O={page:{top:b,left:v},viewport:{top:b-pageYOffset,bottom:pageYOffset-b-a+innerHeight,left:v-pageXOffset,right:pageXOffset-v-r+innerWidth}},E=this.target.ownerDocument,x=E.defaultView,P=void 0;return x.innerHeight>E.documentElement.clientHeight&&(P=this.cache("scrollbar-size",c),O.viewport.bottom-=P.height),x.innerWidth>E.documentElement.clientWidth&&(P=this.cache("scrollbar-size",c),O.viewport.right-=P.width),-1!==["","static"].indexOf(E.body.style.position)&&-1!==["","static"].indexOf(E.body.parentElement.style.position)||(O.page.bottom=E.body.scrollHeight-b-a,O.page.right=E.body.scrollWidth-v-r),void 0!==this.options.optimizations&&!1!==this.options.optimizations.moveElement&&void 0===this.targetModifier&&function(){var e=t.cache("target-offsetparent",(function(){return u(t.target)})),o=t.cache("target-offsetparent-bounds",(function(){return f(e)})),n=getComputedStyle(e),i=o,r={};if(["Top","Left","Bottom","Right"].forEach((function(t){r[t.toLowerCase()]=parseFloat(n["border"+t+"Width"])})),o.right=E.body.scrollWidth-o.left-i.width+r.right,o.bottom=E.body.scrollHeight-o.top-i.height+r.bottom,O.page.top>=o.top+r.top&&O.page.bottom>=o.bottom&&O.page.left>=o.left+r.left&&O.page.right>=o.right){var a=e.scrollTop,s=e.scrollLeft;O.offset={top:O.page.top-o.top+a-r.top,left:O.page.left-o.left+s-r.left}}}(),this.move(O),this.history.unshift(O),this.history.length>3&&this.history.pop(),e&&_(),!0}}},{key:"move",value:function(t){var e=this;if(void 0!==this.element.parentNode){var o={};for(var n in t)for(var i in o[n]={},t[n]){for(var r=!1,a=0;a<this.history.length;++a){var s=this.history[a];if(void 0!==s[n]&&!P(s[n][i],t[n][i])){r=!0;break}}r||(o[n][i]=!0)}var l,h,f={top:"",left:"",right:"",bottom:""},d=function(t,o){if(!1!==(void 0!==e.options.optimizations?e.options.optimizations.gpu:null)){var n=void 0,i=void 0;t.top?(f.top=0,n=o.top):(f.bottom=0,n=-o.bottom),t.left?(f.left=0,i=o.left):(f.right=0,i=-o.right),"number"==typeof window.devicePixelRatio&&devicePixelRatio%1==0&&(i=Math.round(i*devicePixelRatio)/devicePixelRatio,n=Math.round(n*devicePixelRatio)/devicePixelRatio),f[S]="translateX("+i+"px) translateY("+n+"px)","msTransform"!==S&&(f[S]+=" translateZ(0)")}else t.top?f.top=o.top+"px":f.bottom=o.bottom+"px",t.left?f.left=o.left+"px":f.right=o.right+"px"},c=!1;if((o.page.top||o.page.bottom)&&(o.page.left||o.page.right)?(f.position="absolute",d(o.page,t.page)):(o.viewport.top||o.viewport.bottom)&&(o.viewport.left||o.viewport.right)?(f.position="fixed",d(o.viewport,t.viewport)):void 0!==o.offset&&o.offset.top&&o.offset.left?function(){f.position="absolute";var n=e.cache("target-offsetparent",(function(){return u(e.target)}));u(e.element)!==n&&O((function(){e.element.parentNode.removeChild(e.element),n.appendChild(e.element)})),d(o.offset,t.offset),c=!0}():(f.position="absolute",d({top:!0,left:!0},t.page)),!c)if(this.options.bodyElement)this.element.parentNode!==this.options.bodyElement&&this.options.bodyElement.appendChild(this.element);else{for(var m=!0,g=this.element.parentNode;g&&1===g.nodeType&&"BODY"!==g.tagName&&(h=void 0,((h=(l=g).ownerDocument).fullscreenElement||h.webkitFullscreenElement||h.mozFullScreenElement||h.msFullscreenElement)!==l);){if("static"!==getComputedStyle(g).position){m=!1;break}g=g.parentNode}m||(this.element.parentNode.removeChild(this.element),this.element.ownerDocument.body.appendChild(this.element))}var v={},b=!1;for(var i in f){var y=f[i];this.element.style[i]!==y&&(b=!0,v[i]=y)}b&&O((function(){p(e.element.style,v),e.trigger("repositioned")}))}}}]),i}(E);X.modules=[],o.position=M;var q=p(X,o);x=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var o=[],n=!0,i=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(o.push(a.value),!e||o.length!==e);n=!0);}catch(t){i=!0,r=t}finally{try{!n&&s.return&&s.return()}finally{if(i)throw r}}return o}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},f=(V=o.Utils).getBounds;var p=V.extend,I=(w=V.updateClasses,O=V.defer,["left","top","right","bottom"]);o.modules.push({position:function(t){var e=this,o=t.top,n=t.left,i=t.targetAttachment;if(!this.options.constraints)return!0;var r=this.cache("element-bounds",(function(){return f(e.element)})),a=r.height,s=r.width;if(0===s&&0===a&&void 0!==this.lastSize){var l=this.lastSize;s=l.width,a=l.height}var h=this.cache("target-bounds",(function(){return e.getTargetBounds()})),u=h.height,d=h.width,c=[this.getClass("pinned"),this.getClass("out-of-bounds")];this.options.constraints.forEach((function(t){var e=t.outOfBoundsClass,o=t.pinnedClass;e&&c.push(e),o&&c.push(o)})),c.forEach((function(t){["left","top","right","bottom"].forEach((function(e){c.push(t+"-"+e)}))}));var m=[],g=p({},i),v=p({},this.attachment);return this.options.constraints.forEach((function(t){var r=t.to,l=t.attachment,h=t.pin;void 0===l&&(l="");var c=void 0,p=void 0;if(l.indexOf(" ")>=0){var b=l.split(" "),y=x(b,2);p=y[0],c=y[1]}else c=p=l;var w=function(t,e){return"scrollParent"===e?e=t.scrollParents[0]:"window"===e&&(e=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),e===document&&(e=e.documentElement),void 0!==e.nodeType&&function(){var t=e,o=f(e),n=o,i=getComputedStyle(e);if(e=[n.left,n.top,o.width+n.left,o.height+n.top],t.ownerDocument!==document){var r=t.ownerDocument.defaultView;e[0]+=r.pageXOffset,e[1]+=r.pageYOffset,e[2]+=r.pageXOffset,e[3]+=r.pageYOffset}I.forEach((function(t,o){"Top"===(t=t[0].toUpperCase()+t.substr(1))||"Left"===t?e[o]+=parseFloat(i["border"+t+"Width"]):e[o]-=parseFloat(i["border"+t+"Width"])}))}(),e}(e,r);"target"!==p&&"both"!==p||(o<w[1]&&"top"===g.top&&(o+=u,g.top="bottom"),o+a>w[3]&&"bottom"===g.top&&(o-=u,g.top="top")),"together"===p&&("top"===g.top&&("bottom"===v.top&&o<w[1]?(o+=u,g.top="bottom",o+=a,v.top="top"):"top"===v.top&&o+a>w[3]&&o-(a-u)>=w[1]&&(o-=a-u,g.top="bottom",v.top="bottom")),"bottom"===g.top&&("top"===v.top&&o+a>w[3]?(o-=u,g.top="top",o-=a,v.top="bottom"):"bottom"===v.top&&o<w[1]&&o+(2*a-u)<=w[3]&&(o+=a-u,g.top="top",v.top="top")),"middle"===g.top&&(o+a>w[3]&&"top"===v.top?(o-=a,v.top="bottom"):o<w[1]&&"bottom"===v.top&&(o+=a,v.top="top"))),"target"!==c&&"both"!==c||(n<w[0]&&"left"===g.left&&(n+=d,g.left="right"),n+s>w[2]&&"right"===g.left&&(n-=d,g.left="left")),"together"===c&&(n<w[0]&&"left"===g.left?"right"===v.left?(n+=d,g.left="right",n+=s,v.left="left"):"left"===v.left&&(n+=d,g.left="right",n-=s,v.left="right"):n+s>w[2]&&"right"===g.left?"left"===v.left?(n-=d,g.left="left",n-=s,v.left="right"):"right"===v.left&&(n-=d,g.left="left",n+=s,v.left="left"):"center"===g.left&&(n+s>w[2]&&"left"===v.left?(n-=s,v.left="right"):n<w[0]&&"right"===v.left&&(n+=s,v.left="left"))),"element"!==p&&"both"!==p||(o<w[1]&&"bottom"===v.top&&(o+=a,v.top="top"),o+a>w[3]&&"top"===v.top&&(o-=a,v.top="bottom")),"element"!==c&&"both"!==c||(n<w[0]&&("right"===v.left?(n+=s,v.left="left"):"center"===v.left&&(n+=s/2,v.left="left")),n+s>w[2]&&("left"===v.left?(n-=s,v.left="right"):"center"===v.left&&(n-=s/2,v.left="right"))),"string"==typeof h?h=h.split(",").map((function(t){return t.trim()})):!0===h&&(h=["top","left","right","bottom"]),h=h||[];var C,O,_=[],E=[];o<w[1]&&(h.indexOf("top")>=0?(o=w[1],_.push("top")):E.push("top")),o+a>w[3]&&(h.indexOf("bottom")>=0?(o=w[3]-a,_.push("bottom")):E.push("bottom")),n<w[0]&&(h.indexOf("left")>=0?(n=w[0],_.push("left")):E.push("left")),n+s>w[2]&&(h.indexOf("right")>=0?(n=w[2]-s,_.push("right")):E.push("right")),_.length&&(C=void 0,C=void 0!==e.options.pinnedClass?e.options.pinnedClass:e.getClass("pinned"),m.push(C),_.forEach((function(t){m.push(C+"-"+t)}))),E.length&&(O=void 0,O=void 0!==e.options.outOfBoundsClass?e.options.outOfBoundsClass:e.getClass("out-of-bounds"),m.push(O),E.forEach((function(t){m.push(O+"-"+t)}))),(_.indexOf("left")>=0||_.indexOf("right")>=0)&&(v.left=g.left=!1),(_.indexOf("top")>=0||_.indexOf("bottom")>=0)&&(v.top=g.top=!1),g.top===i.top&&g.left===i.left&&v.top===e.attachment.top&&v.left===e.attachment.left||(e.updateAttachClasses(v,g),e.trigger("update",{attachment:v,targetAttachment:g}))})),O((function(){!1!==e.options.addTargetClasses&&w(e.target,m,c),w(e.element,m,c)})),{top:o,left:n}}});var V,f=(V=o.Utils).getBounds,w=V.updateClasses;return O=V.defer,o.modules.push({position:function(t){var e=this,o=t.top,n=t.left,i=this.cache("element-bounds",(function(){return f(e.element)})),r=i.height,a=i.width,s=this.getTargetBounds(),l=o+r,h=n+a,u=[];o<=s.bottom&&l>=s.top&&["left","right"].forEach((function(t){var e=s[t];e!==n&&e!==h||u.push(t)})),n<=s.right&&h>=s.left&&["top","bottom"].forEach((function(t){var e=s[t];e!==o&&e!==l||u.push(t)}));var d=[],c=[];return d.push(this.getClass("abutted")),["left","top","right","bottom"].forEach((function(t){d.push(e.getClass("abutted")+"-"+t)})),u.length&&c.push(this.getClass("abutted")),u.forEach((function(t){c.push(e.getClass("abutted")+"-"+t)})),O((function(){!1!==e.options.addTargetClasses&&w(e.target,c,d),w(e.element,c,d)})),!0}}),x=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var o=[],n=!0,i=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(o.push(a.value),!e||o.length!==e);n=!0);}catch(t){i=!0,r=t}finally{try{!n&&s.return&&s.return()}finally{if(i)throw r}}return o}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o.modules.push({position:function(t){var e=t.top,o=t.left;if(this.options.shift){var n=this.options.shift;"function"==typeof this.options.shift&&(n=this.options.shift.call(this,{top:e,left:o}));var i=void 0,r=void 0;if("string"==typeof n){(n=n.split(" "))[1]=n[1]||n[0];var a=x(n,2);i=a[0],r=a[1],i=parseFloat(i,10),r=parseFloat(r,10)}else i=n.top,r=n.left;return{top:e+=i,left:o+=r}}}}),q})?n.apply(e,i):n)||(t.exports=r)}}]);
//# sourceMappingURL=1011.bundle.js.map