(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{1322:function(e,t,n){"use strict";n.r(t),t.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {CheckboxActions, ICheckboxActionPayload} from './CheckboxActions';\r\n\r\nexport interface ICheckboxState {\r\n    id: string;\r\n    checked: boolean;\r\n    disabled: boolean;\r\n}\r\n\r\nexport const checkboxInitialState: ICheckboxState = {id: undefined, checked: false, disabled: false};\r\nexport const checkboxesInitialState: ICheckboxState[] = [];\r\n\r\nexport const checkboxReducer = (\r\n    state: ICheckboxState = checkboxInitialState,\r\n    action: IReduxAction<ICheckboxActionPayload>\r\n): ICheckboxState => {\r\n    switch (action.type) {\r\n        case CheckboxActions.add:\r\n            return {\r\n                id: action.payload.id,\r\n                checked: !!action.payload.checked,\r\n                disabled: !!action.payload.disabled,\r\n            };\r\n        case CheckboxActions.toggle:\r\n            return state.id !== action.payload.id\r\n                ? state\r\n                : {\r\n                      ...state,\r\n                      checked: _.isUndefined(action.payload.checked) ? !state.checked : action.payload.checked,\r\n                  };\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nexport const checkboxesReducer = (\r\n    state: ICheckboxState[] = checkboxesInitialState,\r\n    action: IReduxAction<ICheckboxActionPayload>\r\n): ICheckboxState[] => {\r\n    switch (action.type) {\r\n        case CheckboxActions.add:\r\n            return [...state, checkboxReducer(undefined, action)];\r\n        case CheckboxActions.remove:\r\n            return _.reject(state, (checkbox: ICheckboxState) => {\r\n                return action.payload.id === checkbox.id;\r\n            });\r\n        case CheckboxActions.toggle:\r\n            return state.map((checkbox: ICheckboxState) => checkboxReducer(checkbox, action));\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=221.bundle.js.map