(window.webpackJsonp=window.webpackJsonp||[]).push([[552],{1648:function(n,r,t){"use strict";t.r(r),r.default="import * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {IInputProps, Input} from '../input/Input';\r\nimport {AddInputAction} from './AddInputAction';\r\n\r\nexport class AddInput extends React.Component<IInputProps, any> {\r\n    private innerInput: Input;\r\n\r\n    private onAdd(): void {\r\n        if (this.props.onBlur) {\r\n            this.props.onBlur(this.innerInput.getInnerValue());\r\n            this.innerInput.reset();\r\n        }\r\n    }\r\n\r\n    private handleAddKeys(event: React.KeyboardEvent<HTMLInputElement>) {\r\n        if (event.key === 'Enter') {\r\n            this.onAdd();\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const props: IInputProps = _.omit(this.props, ['children']);\r\n        props.onBlur = () => this.onAdd();\r\n        props.onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => this.handleAddKeys(event);\r\n        return (\r\n            <Input ref={(innerInput: Input) => (this.innerInput = innerInput)} {...props}>\r\n                {this.props.children}\r\n                <AddInputAction onClick={() => this.onAdd()} />\r\n            </Input>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=552.bundle.js.map