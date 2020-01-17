(window.webpackJsonp=window.webpackJsonp||[]).push([[859],{1941:function(e,r,n){"use strict";n.r(r),r.default="import * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport TextareaAutosize, {TextareaAutosizeProps} from 'react-textarea-autosize';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {addTextArea, changeTextAreaValue, removeTextArea} from './TextAreaActions';\r\n\r\n/**\r\n * TODO: autoresize is not yet implemented on TextArea\r\n */\r\n\r\nexport interface ITextAreaOwnProps {\r\n    id: string;\r\n    className?: string;\r\n    additionalAttributes?: React.DetailedHTMLProps<\r\n        React.TextareaHTMLAttributes<HTMLTextAreaElement>,\r\n        HTMLTextAreaElement\r\n    > &\r\n        TextareaAutosizeProps;\r\n    /**\r\n     * Use with TextAreaConnected. Only useful in a Redux context.\r\n     */\r\n    valueOnMount?: string;\r\n    /**\r\n     * Use with TextAreaConnected. Only useful in a Redux context.\r\n     */\r\n    disabledOnMount?: boolean;\r\n\r\n    isAutosize?: boolean;\r\n\r\n    onChangeCallback?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;\r\n}\r\n\r\nexport interface ITextAreaStateProps {\r\n    value?: string;\r\n    disabled?: boolean;\r\n}\r\n\r\nexport interface ITextAreaDispatchProps {\r\n    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;\r\n    onMount?: () => void;\r\n    onUnmount?: () => void;\r\n}\r\n\r\nexport interface ITextAreaProps extends ITextAreaOwnProps, ITextAreaStateProps, ITextAreaDispatchProps {}\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: ITextAreaOwnProps): ITextAreaStateProps => {\r\n    const {value, disabled} = _.findWhere(state.textAreas, {id: ownProps.id}) || {value: '', disabled: false};\r\n    return {value, disabled};\r\n};\r\n\r\nconst mapDispatchToProps = (dispatch: IDispatch, ownProps: ITextAreaOwnProps): ITextAreaDispatchProps => ({\r\n    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => dispatch(changeTextAreaValue(ownProps.id, e.target.value)),\r\n    onMount: () => dispatch(addTextArea(ownProps.id, ownProps.valueOnMount, ownProps.disabledOnMount)),\r\n    onUnmount: () => dispatch(removeTextArea(ownProps.id)),\r\n});\r\n\r\nexport class TextArea extends React.Component<ITextAreaProps, {}> {\r\n    static defaultProps: Partial<ITextAreaOwnProps> = {\r\n        additionalAttributes: {},\r\n        className: '',\r\n    };\r\n\r\n    componentWillMount() {\r\n        if (this.props.onMount) {\r\n            this.props.onMount();\r\n        }\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        if (this.props.onUnmount) {\r\n            this.props.onUnmount();\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const TextareaTagName: any = this.props.isAutosize ? TextareaAutosize : 'textarea';\r\n        return (\r\n            <TextareaTagName\r\n                {...this.props.additionalAttributes}\r\n                id={this.props.id}\r\n                disabled={this.props.disabled}\r\n                className={this.props.className}\r\n                value={this.props.value}\r\n                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => this.handleOnChange(e)}\r\n            />\r\n        );\r\n    }\r\n\r\n    private handleOnChange(e: React.ChangeEvent<HTMLTextAreaElement>) {\r\n        this.props.onChange?.(e);\r\n        this.props.onChangeCallback?.(e);\r\n    }\r\n}\r\n\r\nexport const TextAreaConnected: React.ComponentClass<ITextAreaProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(TextArea);\r\n"}}]);
//# sourceMappingURL=859.bundle.js.map