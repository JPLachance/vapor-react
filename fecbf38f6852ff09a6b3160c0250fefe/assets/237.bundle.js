(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{1337:function(n,e,r){"use strict";r.r(e),e.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {Input} from '../input/Input';\r\nimport {ChildForm} from './ChildForm';\r\n\r\nexport interface IToggleFormProps {\r\n    classes?: string[];\r\n    checked?: boolean;\r\n    children?: React.ReactElement<Input | ChildForm> | Array<React.ReactElement<Input | ChildForm>>;\r\n    onClick?: (e: React.MouseEvent<HTMLElement>) => void;\r\n    value?: string;\r\n}\r\n\r\nexport class ToggleForm extends React.Component<IToggleFormProps, any> {\r\n    private handleClick(e: React.MouseEvent<HTMLElement>) {\r\n        if (this.props.onClick) {\r\n            this.props.onClick(e);\r\n        }\r\n    }\r\n\r\n    private getChildren() {\r\n        return React.Children.map(this.props.children, (child: React.ReactElement<any>) => {\r\n            if (child.type === ChildForm) {\r\n                return this.cloneChildForm(child);\r\n            } else {\r\n                return this.cloneControl(child);\r\n            }\r\n        });\r\n    }\r\n\r\n    private cloneControl(child: React.ReactElement<any>) {\r\n        return React.cloneElement(child, {\r\n            checked: this.props.checked,\r\n            onClick: (e: React.MouseEvent<HTMLElement>) => this.handleClick(e),\r\n        });\r\n    }\r\n\r\n    private cloneChildForm(child: React.ReactElement<any>) {\r\n        return React.cloneElement(child, {\r\n            disabled: !this.props.checked,\r\n        });\r\n    }\r\n\r\n    render() {\r\n        const classes: string = classNames('coveo-parent', this.props.classes);\r\n        const children = this.getChildren();\r\n\r\n        return <div className={classes}>{children}</div>;\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=237.bundle.js.map