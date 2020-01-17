(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{1317:function(e,r,o){"use strict";o.r(r),r.default="import {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {IInputDispatchProps, IInputStateProps} from '../input/Input';\r\nimport {Checkbox, ICheckboxProps} from './Checkbox';\r\nimport {ICheckboxState} from './CheckboxReducers';\r\nimport {\r\n    addGroupedCheckbox,\r\n    IGroupableCheckboxActionPayload,\r\n    removeGroupedCheckbox,\r\n    toggleGroupedCheckbox,\r\n} from './GroupableCheckboxActions';\r\nimport {IGroupableCheckboxesState} from './GroupableCheckboxReducers';\r\n\r\nexport interface IGroupableCheckboxOwnProps extends ICheckboxProps {\r\n    isParent?: boolean;\r\n    parentId?: string;\r\n}\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: IGroupableCheckboxOwnProps): IInputStateProps => {\r\n    const groupableCheckboxesState: IGroupableCheckboxesState = _.findWhere(state.groupableCheckboxes, {\r\n        parentId: ownProps.parentId || ownProps.id,\r\n    });\r\n    if (groupableCheckboxesState) {\r\n        const checkbox: ICheckboxState = ownProps.isParent\r\n            ? groupableCheckboxesState.parent\r\n            : _.findWhere(groupableCheckboxesState.checkboxes, {id: ownProps.id});\r\n        return {\r\n            checked: checkbox ? checkbox.checked : !!ownProps.defaultChecked,\r\n            disabled: checkbox ? checkbox.disabled : !!ownProps.defaultDisabled,\r\n            indeterminate:\r\n                ownProps.isParent &&\r\n                groupableCheckboxesState.nbChecked > 0 &&\r\n                groupableCheckboxesState.nbChecked < groupableCheckboxesState.total,\r\n        };\r\n    }\r\n\r\n    return {\r\n        checked: !!ownProps.defaultChecked,\r\n        disabled: !!ownProps.defaultDisabled,\r\n        indeterminate: false,\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (\r\n    dispatch: (action: IReduxAction<IGroupableCheckboxActionPayload>) => void,\r\n    ownProps: IGroupableCheckboxOwnProps\r\n): IInputDispatchProps => {\r\n    return {\r\n        onRender: () =>\r\n            dispatch(\r\n                addGroupedCheckbox(\r\n                    ownProps.id,\r\n                    ownProps.defaultChecked,\r\n                    !!ownProps.defaultDisabled,\r\n                    ownProps.parentId,\r\n                    !!ownProps.isParent\r\n                )\r\n            ),\r\n        onDestroy: () => dispatch(removeGroupedCheckbox(ownProps.id, ownProps.parentId, !!ownProps.isParent)),\r\n        onClick: () => dispatch(toggleGroupedCheckbox(ownProps.id, ownProps.parentId, !!ownProps.isParent)),\r\n    };\r\n};\r\n\r\nexport const GroupableCheckboxConnected: React.ComponentClass<IGroupableCheckboxOwnProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(Checkbox);\r\n"}}]);
//# sourceMappingURL=223.bundle.js.map