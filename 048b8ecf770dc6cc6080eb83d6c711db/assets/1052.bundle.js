(window.webpackJsonp=window.webpackJsonp||[]).push([[1052],{2323:function(e,t,n){"use strict";n.r(t),n.d(t,"ChosenSelectExamples",(function(){return i}));var o,s=n(1),r=n(0),l=n(744),a=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.getNumberOfOptions=function(e){return r.times(e,(function(e){var t=e+1;return s.createElement("option",{key:e,value:t},"Option ",t)}))},t.prototype.render=function(){return s.createElement("div",{className:"mt2"},s.createElement("div",{className:"form-group"},s.createElement("label",{className:"form-control-label"},"Default Chosen single select"),s.createElement("div",{className:"form-control"},s.createElement(l.a,{placeholderTextSingle:"Choose a country",value:"France",width:"400px",onChosenChange:function(e,t){console.log("Changed: ",t)}},s.createElement("option",{value:"Canada"},"Canada"),s.createElement("option",{value:"France"},"France"),s.createElement("option",{value:"United States"},"United States")))),s.createElement("div",{className:"form-group"},s.createElement("label",{className:"form-control-label"},"Chosen multi select"),s.createElement("div",{className:"form-control"},s.createElement(l.a,{placeholderTextSingle:"Choose a country",defaultValue:["Canada"],multiple:!0,width:"400px",onChosenChange:function(e,t){console.log("Changed: ",t)}},s.createElement("option",{value:"Canada"},"Canada"),s.createElement("option",{value:"France"},"France"),s.createElement("option",{value:"United States"},"United States")))),s.createElement("div",{className:"form-group"},s.createElement("label",{className:"form-control-label"},"Chosen single select with 2000 options"),s.createElement("div",{className:"form-control"},s.createElement(l.a,{placeholderTextSingle:"Choose a option",width:"400px"},this.getNumberOfOptions(2e3)))))},t.deprecated=!0,t}(s.Component)},744:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n(829);var o,s=n(165),r=n(1),l=n(0),a=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=function(){return(i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},c=["allowSingleDeselect","children","disableSearch","disableSearchThreshold","displayDisabledOptions","displaySelectedOptions","enableSplitWordSearch","inheritSelectClasses","maxSelectedOptions","noResultsText","onChosenChange","placeholderTextMultiple","placeholderTextSingle","searchContains","singleBackstrokeDelete","width"],p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.componentDidMount=function(){var e=this;this.select.chosen({allow_single_deselect:this.props.allowSingleDeselect,case_sensitive_search:this.props.caseSensitiveSearch,disable_search:this.props.disableSearch,disable_search_threshold:this.props.disableSearchThreshold,display_disabled_options:this.props.displayDisabledOptions,display_selected_options:this.props.displaySelectedOptions,enable_split_word_search:this.props.enableSplitWordSearch,include_group_label_in_selected:this.props.includeGroupLabelInSelected,inherit_select_classes:this.props.inheritSelectClasses,max_selected_options:this.props.maxSelectedOptions,max_shown_results:this.props.maxShownResults,no_results_text:this.props.noResultsText,placeholder_text_multiple:this.props.placeholderTextMultiple,placeholder_text_single:this.props.placeholderTextSingle,search_contains:this.props.searchContains,single_backstroke_delete:this.props.singleBackstrokeDelete,width:this.props.width}).change((function(t,n){return e.props.onChosenChange&&e.props.onChosenChange(t,n)}))},t.prototype.componentWillUnmount=function(){this.select.off("change").chosen("destroy")},t.prototype.render=function(){var e=this,t=l.extend({},l.omit(this.props,c));return r.createElement("select",i({},t,{ref:function(t){return e.select=s(t)},onChange:l.noop}),this.props.children)},t}(r.Component)}}]);
//# sourceMappingURL=1052.bundle.js.map