(window.webpackJsonp=window.webpackJsonp||[]).push([[632],{1725:function(e,t,a){"use strict";a.r(t),t.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {IRadioSelectActionPayload, RadioSelectActions} from './RadioSelectActions';\r\n\r\nexport interface IRadioSelectState {\r\n    id: string;\r\n    value: string;\r\n    disabledValues: string[];\r\n}\r\n\r\nexport const radioSelectInitialState: IRadioSelectState = {id: undefined, value: undefined, disabledValues: undefined};\r\nexport const radioSelectsInitialState: IRadioSelectState[] = [];\r\n\r\nexport const radioSelectsReducer = (\r\n    state: IRadioSelectState[] = radioSelectsInitialState,\r\n    action: IReduxAction<IRadioSelectActionPayload>\r\n): IRadioSelectState[] => {\r\n    switch (action.type) {\r\n        case RadioSelectActions.set:\r\n            const radioSelect = _.findWhere(state, {id: action.payload.id});\r\n            const shouldReplaceValue =\r\n                radioSelect &&\r\n                !_.isUndefined(action.payload.value) &&\r\n                (!radioSelect.disabledValues || !_.contains(radioSelect.disabledValues, action.payload.value));\r\n\r\n            return radioSelect\r\n                ? _.reject(state, (radio) => radio.id === action.payload.id).concat({\r\n                      ...radioSelect,\r\n                      ...action.payload,\r\n                      value: shouldReplaceValue ? action.payload.value : radioSelect.value,\r\n                  })\r\n                : [...state, {...radioSelectInitialState, ...action.payload}];\r\n        case RadioSelectActions.remove:\r\n            return _.reject(state, (radio) => action.payload.id === radio.id);\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=632.bundle.js.map