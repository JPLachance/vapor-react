(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{1363:function(n,t,r){"use strict";r.r(t),t.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nexport interface IContentProps {\r\n    content: React.ReactNode;\r\n    componentProps?: {[key: string]: any};\r\n    classes?: string[];\r\n    tag?: string;\r\n}\r\n\r\n/**\r\n * @deprecated Use React.ReactNode instead.\r\n */\r\nexport class Content extends React.PureComponent<IContentProps> {\r\n    static defaultProps: Partial<IContentProps> = {\r\n        classes: [],\r\n        tag: 'span',\r\n    };\r\n\r\n    private getContent(): React.ReactNode {\r\n        if (_.isString(this.props.content) || _.isNumber(this.props.content)) {\r\n            return this.props.content;\r\n        }\r\n\r\n        return React.createElement(this.props.content as React.ComponentClass, this.props.componentProps);\r\n    }\r\n\r\n    render() {\r\n        const className = classNames(this.props.classes);\r\n        return React.isValidElement(this.props.content)\r\n            ? this.props.content\r\n            : React.createElement(this.props.tag, className ? {className} : null, this.getContent());\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=271.bundle.js.map