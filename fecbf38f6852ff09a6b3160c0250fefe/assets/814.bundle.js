(window.webpackJsonp=window.webpackJsonp||[]).push([[814],{1903:function(e,r,o){"use strict";o.r(r),r.default='import * as React from \'react\';\r\nimport {Svg} from \'../svg/Svg\';\r\n\r\nexport interface ITableCollapsibleRowToggleProps extends React.ClassAttributes<TableCollapsibleRowToggle> {\r\n    isExpanded: boolean;\r\n}\r\n\r\nexport class TableCollapsibleRowToggle extends React.Component<ITableCollapsibleRowToggleProps, any> {\r\n    render() {\r\n        const arrowIcon: JSX.Element = this.props.isExpanded ? (\r\n            <Svg svgName="arrow-top" className="state-expanded" svgClass="icon" />\r\n        ) : (\r\n            <Svg svgName="arrow-bottom" className="state-collapsed" svgClass="icon" />\r\n        );\r\n\r\n        return <td>{arrowIcon}</td>;\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=814.bundle.js.map