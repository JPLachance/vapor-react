(window.webpackJsonp=window.webpackJsonp||[]).push([[585],{1690:function(e,n,r){"use strict";r.r(n),n.default="import * as React from 'react';\r\n\r\nexport interface INavigationPerPageSelectOwnProps extends React.ClassAttributes<NavigationPerPageSelect> {\r\n    perPageNb: number;\r\n    selected: boolean;\r\n    onPerPageClick: (perPageNb: number) => void;\r\n}\r\n\r\nexport interface INavigationPerPageSelectProps extends INavigationPerPageSelectOwnProps {}\r\n\r\nexport class NavigationPerPageSelect extends React.Component<INavigationPerPageSelectProps, any> {\r\n    render() {\r\n        const selectClasses: string = 'flat-select-option' + (this.props.selected ? '' : ' selectable');\r\n        const spanClasses: string = 'enabled' + (this.props.selected ? ' selected-value state-selected' : '');\r\n\r\n        return (\r\n            <a className={selectClasses} onClick={() => this.props.onPerPageClick(this.props.perPageNb)}>\r\n                <span className={spanClasses}>{this.props.perPageNb}</span>\r\n            </a>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=585.bundle.js.map