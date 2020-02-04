(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{1287:function(r,e,s){"use strict";s.r(e),e.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {borderedLine} from './styles/BorderedLine.scss';\r\n\r\nexport class BorderedLine extends React.PureComponent<React.HTMLAttributes<HTMLDivElement>> {\r\n    static defaultClassName = classNames(\r\n        borderedLine,\r\n        'bg-light-grey border-medium-grey mod-border-top mod-border-bottom'\r\n    );\r\n\r\n    render() {\r\n        return (\r\n            <div {...this.props} className={classNames(this.props.className, BorderedLine.defaultClassName)}>\r\n                {this.props.children}\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=174.bundle.js.map