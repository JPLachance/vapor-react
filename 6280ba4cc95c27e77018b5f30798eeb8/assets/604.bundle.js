(window.webpackJsonp=window.webpackJsonp||[]).push([[604],{1708:function(t,e,n){"use strict";n.r(e),e.default="import * as _ from 'underscore';\r\nimport {IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {OptionPickerActions} from './OptionPickerActions';\r\n\r\nexport interface IOptionPickerState {\r\n    id: string;\r\n    selectedLabel: string;\r\n    selectedValue: string;\r\n}\r\n\r\nexport const optionPickerInitialState: IOptionPickerState = {\r\n    id: undefined,\r\n    selectedLabel: '',\r\n    selectedValue: '',\r\n};\r\nexport const optionPickersInitialState: IOptionPickerState[] = [];\r\n\r\nexport const optionPickerReducer = (\r\n    state: IOptionPickerState = optionPickerInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): IOptionPickerState => {\r\n    switch (action.type) {\r\n        case OptionPickerActions.add:\r\n            return {\r\n                id: action.payload.id,\r\n                selectedLabel: state.selectedLabel,\r\n                selectedValue: state.selectedValue,\r\n            };\r\n        case OptionPickerActions.change:\r\n            if (state.id !== action.payload.id) {\r\n                return state;\r\n            }\r\n            return _.extend({}, state, {\r\n                selectedLabel: action.payload.label,\r\n                selectedValue: action.payload.value,\r\n            });\r\n        case OptionPickerActions.reset:\r\n            if (state.id.indexOf(action.payload.id) !== 0) {\r\n                return state;\r\n            }\r\n            return _.extend({}, optionPickerInitialState, {\r\n                id: state.id,\r\n            });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nexport const optionPickersReducer = (\r\n    state: IOptionPickerState[] = optionPickersInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): IOptionPickerState[] => {\r\n    switch (action.type) {\r\n        case OptionPickerActions.add:\r\n            return [...state, optionPickerReducer(undefined, action)];\r\n        case OptionPickerActions.remove:\r\n            return _.reject(state, (optionPicker: IOptionPickerState) => {\r\n                return action.payload.id === optionPicker.id;\r\n            });\r\n        case OptionPickerActions.change:\r\n            return state.map((optionPicker: IOptionPickerState) => optionPickerReducer(optionPicker, action));\r\n        case OptionPickerActions.reset:\r\n            return state.map((optionPicker: IOptionPickerState) => optionPickerReducer(optionPicker, action));\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=604.bundle.js.map