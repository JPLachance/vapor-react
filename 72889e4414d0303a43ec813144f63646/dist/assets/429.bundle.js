(window.webpackJsonp=window.webpackJsonp||[]).push([[429],{1526:function(s,r,n){"use strict";n.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as styles from './InfoBox.scss';\r\n\r\nexport class InfoBox extends React.PureComponent<React.HTMLProps<HTMLDivElement>> {\r\n    render() {\r\n        return (\r\n            <div\r\n                {...this.props}\r\n                className={classNames('text-oxford-blue bg-onahau', this.props.className, styles.infoBox)}\r\n            >\r\n                {this.props.children}\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=429.bundle.js.map