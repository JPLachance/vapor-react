(window.webpackJsonp=window.webpackJsonp||[]).push([[750],{1832:function(r,s,a){"use strict";a.r(s),s.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {IClassName} from '../../utils/ClassNameUtils';\r\n\r\nexport interface ITabPaneOwnProps {\r\n    groupId?: string;\r\n    id?: string;\r\n    className?: IClassName;\r\n}\r\n\r\nexport interface ITabPaneStateProps {\r\n    isActive?: boolean;\r\n}\r\n\r\nexport interface ITabPaneDispatchProps {}\r\n\r\nexport interface ITabPaneProps extends ITabPaneOwnProps, ITabPaneStateProps, ITabPaneDispatchProps {}\r\n\r\nexport class TabPane extends React.Component<ITabPaneProps, any> {\r\n    render() {\r\n        const classes = classNames('tab-pane', this.props.className, {active: this.props.isActive});\r\n\r\n        return <div className={classes}>{this.props.children}</div>;\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=750.bundle.js.map