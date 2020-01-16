(window.webpackJsonp=window.webpackJsonp||[]).push([[443],{1539:function(n,r,t){"use strict";t.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {keys} from 'ts-transformer-keys';\r\nimport * as _ from 'underscore';\r\nimport {contains, isUndefined, uniqueId} from 'underscore';\r\nimport {IClassName} from '../../utils/ClassNameUtils';\r\nimport {PropsToOmitUtils} from '../../utils/PropsToOmitUtils';\r\nimport {TooltipPlacement} from '../../utils/TooltipUtils';\r\nimport {Tooltip} from '../tooltip/Tooltip';\r\nimport {IInputState} from './InputReducers';\r\nimport {ILabelProps, Label} from './Label';\r\n\r\nconst validatedInputTypes: string[] = ['number', 'text', 'password'];\r\n\r\ntype IInputNativeTagOwnProps = Omit<\r\n    React.AllHTMLAttributes<HTMLInputElement>,\r\n    'defaultValue' | 'onClick' | 'onChange' | 'onBlur' | 'value'\r\n>;\r\n\r\nexport interface IInputAdditionalOwnProps {\r\n    id?: string;\r\n    classes?: IClassName;\r\n    innerInputClasses?: IClassName;\r\n    validate?: (value: any) => boolean;\r\n    labelTitle?: React.ReactNode;\r\n    labelProps?: ILabelProps;\r\n    validateOnChange?: boolean;\r\n    disabledOnMount?: boolean;\r\n    validateOnMount?: boolean;\r\n    disabledTooltip?: string;\r\n    minimum?: number /* @deprecated use min instead */;\r\n    maximum?: number /* @deprecated use max instead */;\r\n    onBlur?: (value: string) => void;\r\n    defaultValue?: string;\r\n}\r\n\r\nexport interface IInputNativeTagStateProps {\r\n    value?: string;\r\n    checked?: boolean;\r\n    disabled?: boolean;\r\n}\r\n\r\nexport interface IInputAdditionalStateProps {\r\n    valid?: boolean;\r\n    indeterminate?: boolean;\r\n}\r\n\r\nexport interface IInputStateProps extends IInputNativeTagStateProps, IInputAdditionalStateProps {}\r\n\r\nexport interface IInputDispatchProps {\r\n    onDestroy?: () => void;\r\n    onRender?: (value?: string, valid?: boolean, disabled?: boolean) => void;\r\n    onChange?: (value?: string, valid?: boolean) => void;\r\n    onClick?: (e: React.MouseEvent<HTMLElement>) => void;\r\n}\r\n\r\nconst inputPropsToOmit = keys<IInputAdditionalOwnProps & IInputAdditionalStateProps & IInputDispatchProps>();\r\n\r\nexport interface IInputOwnProps extends IInputAdditionalOwnProps, IInputNativeTagOwnProps {}\r\n\r\nexport interface IInputProps extends IInputOwnProps, Partial<IInputStateProps>, Partial<IInputDispatchProps> {}\r\n\r\nexport interface IInputComponentState {\r\n    valid: boolean;\r\n}\r\n\r\nexport class Input extends React.Component<IInputProps, IInputComponentState> {\r\n    private innerInput: HTMLInputElement;\r\n\r\n    static defaultProps: Partial<IInputProps> = {\r\n        id: uniqueId('input'),\r\n        type: 'text',\r\n        valid: true,\r\n        labelTitle: '',\r\n        required: true,\r\n    };\r\n\r\n    constructor(props: IInputProps, state: IInputState) {\r\n        super(props, state);\r\n        this.state = {\r\n            valid: this.props.valid,\r\n        };\r\n    }\r\n\r\n    componentWillMount() {\r\n        if (this.props.onRender) {\r\n            // undefined validOnMount will default to true in the state\r\n            const validOnMount =\r\n                this.props.validateOnMount && this.props.validate && this.props.validate(this.props.defaultValue || '');\r\n\r\n            this.props.onRender(this.props.defaultValue, validOnMount, this.props.disabledOnMount);\r\n        }\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        if (this.props.onDestroy) {\r\n            this.props.onDestroy();\r\n        }\r\n    }\r\n\r\n    componentDidUpdate(prevProps: IInputProps) {\r\n        if (this.props.valid !== prevProps.valid) {\r\n            this.validate();\r\n        }\r\n\r\n        if (prevProps.value !== this.props.value && this.innerInput) {\r\n            this.innerInput.value = this.props.value;\r\n        }\r\n    }\r\n\r\n    reset() {\r\n        this.innerInput.value = '';\r\n    }\r\n\r\n    getInnerValue(): string {\r\n        return (this.innerInput && this.innerInput.value) || '';\r\n    }\r\n\r\n    validate() {\r\n        this.setState({\r\n            valid: this.props.valid && !(this.props.validate && !this.props.validate(this.getInnerValue())),\r\n        });\r\n    }\r\n\r\n    private handleBlur() {\r\n        if (this.props.onBlur) {\r\n            this.props.onBlur(this.getInnerValue());\r\n        }\r\n    }\r\n\r\n    private handleChange() {\r\n        if (this.props.onChange) {\r\n            const validOnChange =\r\n                this.props.validateOnChange && this.props.validate && this.props.validate(this.getInnerValue());\r\n            this.props.onChange(this.getInnerValue(), validOnChange);\r\n        }\r\n    }\r\n\r\n    private handleClick(e: React.MouseEvent<HTMLElement>) {\r\n        if (this.props.onClick) {\r\n            this.props.onClick(e);\r\n        }\r\n    }\r\n\r\n    private handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {\r\n        if (this.props.onKeyUp) {\r\n            this.props.onKeyUp(event);\r\n        }\r\n    }\r\n\r\n    private getLabel(): React.ReactNode {\r\n        const {labelProps, labelTitle} = this.props;\r\n        if (typeof labelTitle === 'string') {\r\n            return labelTitle || this.props.validate ? (\r\n                <Label key={this.props.id + 'label'} htmlFor={this.props.id} {...labelProps}>\r\n                    {labelTitle}\r\n                </Label>\r\n            ) : null;\r\n        } else {\r\n            return labelTitle;\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const classes = classNames(\r\n            'input-wrapper validate',\r\n            {\r\n                'input-field': contains(validatedInputTypes, this.props.type),\r\n            },\r\n            this.props.classes\r\n        );\r\n        const innerInputClasses = classNames(\r\n            {\r\n                invalid: !this.state.valid && contains(validatedInputTypes, this.props.type),\r\n            },\r\n            this.props.innerInputClasses\r\n        );\r\n\r\n        const inputElements = [\r\n            <input\r\n                key={this.props.id}\r\n                id={this.props.id}\r\n                className={innerInputClasses}\r\n                defaultValue={!isUndefined(this.props.value) ? this.props.value : this.props.defaultValue}\r\n                ref={(innerInput: HTMLInputElement) => (this.innerInput = innerInput)}\r\n                onBlur={() => this.handleBlur()}\r\n                onChange={() => this.handleChange()}\r\n                onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => this.handleKeyUp(event)}\r\n                min={this.props.minimum}\r\n                max={this.props.maximum}\r\n                {..._.omit(this.props, [...PropsToOmitUtils.input, ...inputPropsToOmit])}\r\n            />,\r\n            this.getLabel(),\r\n            this.props.children,\r\n        ];\r\n\r\n        return this.props.disabled && this.props.disabledTooltip ? (\r\n            <div className={classes} onClick={(e: React.MouseEvent<HTMLElement>) => this.handleClick(e)}>\r\n                <Tooltip title={this.props.disabledTooltip} placement={TooltipPlacement.Right}>\r\n                    {inputElements}\r\n                </Tooltip>\r\n            </div>\r\n        ) : (\r\n            <div className={classes} onClick={(e: React.MouseEvent<HTMLElement>) => this.handleClick(e)}>\r\n                {inputElements}\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=443.bundle.js.map