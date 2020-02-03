(window.webpackJsonp=window.webpackJsonp||[]).push([[560],{1665:function(n,e,r){"use strict";r.r(e),e.default="import * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {UUID} from '../../utils/UUID';\r\nimport {Label} from '../input/Label';\r\nimport {AddInput} from './AddInput';\r\nimport {DeletableInput} from './DeletableInput';\r\n\r\nexport interface IMultilineInputValue {\r\n    id: string;\r\n    value: string;\r\n}\r\n\r\nexport interface IMultilineInputOwnProps {\r\n    id?: string;\r\n    placeholder?: string;\r\n    title?: string;\r\n    invalidMessage?: string;\r\n    validate?: (value: string) => boolean;\r\n}\r\n\r\nexport interface IMultilineInputStateProps {\r\n    values?: IMultilineInputValue[];\r\n}\r\n\r\nexport interface IMultilineInputDispatchProps {\r\n    onChange?: (values: IMultilineInputValue[]) => void;\r\n}\r\n\r\nexport interface IMultilineInputProps\r\n    extends IMultilineInputOwnProps,\r\n        IMultilineInputStateProps,\r\n        IMultilineInputDispatchProps {}\r\n\r\nexport class MultilineInput extends React.Component<IMultilineInputProps, any> {\r\n    private handleChange(newValues: IMultilineInputValue[]) {\r\n        if (this.props.onChange) {\r\n            this.props.onChange(newValues);\r\n        }\r\n    }\r\n\r\n    private handleDeleteInputChange(value: string, id: string) {\r\n        if (!value) {\r\n            this.removeValue(id);\r\n        } else {\r\n            this.updateValue(id, value);\r\n        }\r\n    }\r\n\r\n    private removeValue(id: string) {\r\n        const currentInput = _.findWhere(this.props.values, {id});\r\n        const nextValues = _.without(this.props.values, currentInput);\r\n        this.handleChange(nextValues);\r\n    }\r\n\r\n    private updateValue(id: string, value: string) {\r\n        const inputIndex = _.findIndex(this.props.values, {id});\r\n        const nextValues = this.props.values;\r\n        nextValues[inputIndex] = {\r\n            id,\r\n            value,\r\n        };\r\n        this.handleChange(nextValues);\r\n    }\r\n\r\n    private handleAddInputChange(value: string) {\r\n        if (value) {\r\n            const nextValues = this.props.values ? this.props.values : [];\r\n            nextValues.push({id: UUID.generate(), value});\r\n            this.handleChange(nextValues);\r\n        }\r\n    }\r\n\r\n    private getDeletableInput(inputValue: IMultilineInputValue, index: number): JSX.Element {\r\n        return (\r\n            <li key={`delete-input-${inputValue.id}`}>\r\n                <DeletableInput\r\n                    placeholder={this.props.placeholder}\r\n                    value={inputValue.value}\r\n                    onBlur={(newValue: string) => this.handleDeleteInputChange(newValue, inputValue.id)}\r\n                >\r\n                    <Label>{index === 0 ? this.props.title : ''}</Label>\r\n                </DeletableInput>\r\n            </li>\r\n        );\r\n    }\r\n\r\n    render() {\r\n        const deletableInputs: JSX.Element[] = this.props.values\r\n            ? this.props.values.map((input: IMultilineInputValue, index: number) =>\r\n                  this.getDeletableInput(input, index)\r\n              )\r\n            : null;\r\n\r\n        return (\r\n            <div className=\"input-field multiline-field form-group\">\r\n                <ul>{deletableInputs}</ul>\r\n                <AddInput\r\n                    id={this.props.id}\r\n                    placeholder={this.props.placeholder}\r\n                    value=\"\"\r\n                    onBlur={(newValue: string) => this.handleAddInputChange(newValue)}\r\n                    labelProps={{invalidMessage: this.props.invalidMessage}}\r\n                    validate={this.props.validate}\r\n                >\r\n                    <Label classes={this.props.values && this.props.values.length === 0 ? ['first-label'] : []}>\r\n                        {this.props.title}\r\n                    </Label>\r\n                </AddInput>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=560.bundle.js.map