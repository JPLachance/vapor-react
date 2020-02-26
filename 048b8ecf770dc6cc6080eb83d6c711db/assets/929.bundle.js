(window.webpackJsonp=window.webpackJsonp||[]).push([[929],{2025:function(n,t,r){"use strict";r.r(t),t.default="import * as React from 'react';\nimport {connect} from 'react-redux';\nimport * as _ from 'underscore';\nimport {IDispatch} from '../../../utils/ReduxUtils';\nimport {IInputOwnProps} from '../../input/Input';\nimport {ValidationActions} from '../ValidationActions';\nimport {ValidationIds} from '../ValidationIds';\nimport {InferableComponentEnhancer} from './connectHOC';\n\nexport interface INonEmptyInputValidationProps {\n    validationMessage?: string;\n    resetErrorOnUnmount?: boolean;\n}\n\nconst mapDispatchToProps = (dispatch: IDispatch) => ({\n    setError: (id: string, error: string) => dispatch(ValidationActions.setError(id, error, ValidationIds.nonEmpty)),\n    clearError: (id: string) => dispatch(ValidationActions.clearError(id)),\n});\n\nexport const nonEmptyInputValidationHOC = <T extends IInputOwnProps>(\n    Component: React.ComponentClass<T> | React.FunctionComponent<T>\n) => {\n    type NewOwnProps = T & INonEmptyInputValidationProps;\n    type DispatchProps = ReturnType<typeof mapDispatchToProps>;\n    const WrappedInput: React.FunctionComponent<NewOwnProps & DispatchProps> = ({\n        setError,\n        clearError,\n        validationMessage = 'Input is empty and should not be empty',\n        resetErrorOnUnmount,\n        validate,\n        ...props\n    }) => {\n        React.useEffect(() => {\n            setError(props.id, '');\n            return () => {\n                resetErrorOnUnmount && clearError(props.id!);\n            };\n        }, []);\n\n        return (\n            <Component\n                {...(props as T)}\n                validate={(value: string) => {\n                    const isEmpty = _.isEmpty(value);\n                    setError(props.id, isEmpty ? validationMessage : '');\n                    return !isEmpty || (validate ? validate(value) : true);\n                }}\n            />\n        );\n    };\n\n    const enhance = connect(\n        null,\n        mapDispatchToProps\n    ) as InferableComponentEnhancer<DispatchProps>;\n    return enhance(WrappedInput);\n};\n"}}]);
//# sourceMappingURL=929.bundle.js.map