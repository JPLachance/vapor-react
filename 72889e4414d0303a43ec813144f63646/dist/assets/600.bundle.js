(window.webpackJsonp=window.webpackJsonp||[]).push([[600],{1695:function(n,r,i){"use strict";i.r(r),r.default="import * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {IOption, Option} from './Option';\r\n\r\nexport interface IOptionPickerOwnProps extends React.ClassAttributes<OptionPicker> {\r\n    id?: string;\r\n    options: IOption[];\r\n}\r\n\r\nexport interface IOptionPickerStateProps {\r\n    activeLabel?: string;\r\n}\r\n\r\nexport interface IOptionPickerDispatchProps {\r\n    onRender?: () => void;\r\n    onDestroy?: () => void;\r\n    onClick?: (value: string, label: string) => void;\r\n}\r\n\r\nexport interface IOptionPickerProps\r\n    extends IOptionPickerOwnProps,\r\n        IOptionPickerStateProps,\r\n        IOptionPickerDispatchProps {}\r\n\r\nexport class OptionPicker extends React.Component<IOptionPickerProps, any> {\r\n    private handleClick(value: string, label: string) {\r\n        if (this.props.onClick) {\r\n            this.props.onClick(value, label);\r\n        }\r\n    }\r\n\r\n    componentWillMount() {\r\n        if (this.props.onRender) {\r\n            this.props.onRender();\r\n        }\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        if (this.props.onDestroy) {\r\n            this.props.onDestroy();\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const options: JSX.Element[] = _.map(this.props.options, (option: IOption, index: number) => {\r\n            return (\r\n                <li key={`option-${this.props.id}-${index}`}>\r\n                    <Option\r\n                        option={option}\r\n                        onClick={(value: string, label: string) => this.handleClick(value, label)}\r\n                        isActive={this.props.activeLabel && option.label === this.props.activeLabel}\r\n                    />\r\n                </li>\r\n            );\r\n        });\r\n\r\n        return <ul className=\"option-picker flex flex-wrap mt2 mb2\">{options}</ul>;\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=600.bundle.js.map