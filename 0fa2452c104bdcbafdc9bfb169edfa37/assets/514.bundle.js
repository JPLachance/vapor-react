(window.webpackJsonp=window.webpackJsonp||[]).push([[514],{1620:function(s,r,a){"use strict";a.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {IClassName} from '../../utils/ClassNameUtils';\r\n\r\nexport interface IModalBodyProps {\r\n    classes?: IClassName;\r\n}\r\n\r\nexport class ModalBody extends React.Component<IModalBodyProps, {}> {\r\n    render() {\r\n        const classes = classNames('modal-body relative', this.props.classes);\r\n\r\n        return <div className={classes}>{this.props.children}</div>;\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=514.bundle.js.map