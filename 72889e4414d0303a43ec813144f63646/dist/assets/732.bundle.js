(window.webpackJsonp=window.webpackJsonp||[]).push([[732],{1821:function(r,s,n){"use strict";n.r(s),s.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as styles from './StickyFooter.scss';\r\n\r\nexport interface IStickyFooterProps {\r\n    isOpened: boolean;\r\n    id?: string;\r\n    className?: string;\r\n}\r\n\r\nexport class StickyFooter extends React.Component<IStickyFooterProps> {\r\n    static ID = 'StickyFooter';\r\n    static defaultProps: Partial<IStickyFooterProps> = {\r\n        id: StickyFooter.ID,\r\n    };\r\n\r\n    render() {\r\n        const {id, className, isOpened} = this.props;\r\n        return (\r\n            <div\r\n                id={id}\r\n                className={classNames(styles.stickyFooter, {[styles.stickyFooterOpened]: isOpened}, className)}\r\n            >\r\n                {this.props.children}\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=732.bundle.js.map