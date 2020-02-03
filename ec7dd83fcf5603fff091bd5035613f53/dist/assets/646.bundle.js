(window.webpackJsonp=window.webpackJsonp||[]).push([[646],{1749:function(n,e,r){"use strict";r.r(e),e.default="import {IReduxAction} from '../../utils/ReduxUtils';\r\n\r\nexport interface IRadioSelectActionPayload {\r\n    id: string;\r\n    value?: string;\r\n    disabledValues?: string[];\r\n}\r\n\r\nexport const RadioSelectActions = {\r\n    set: 'SET_RADIOSELECT',\r\n    remove: 'REMOVE_RADIOSELECT',\r\n};\r\n\r\nexport const setRadioSelect = (\r\n    id: string,\r\n    state: {value?: string; disabledValues?: string[]}\r\n): IReduxAction<IRadioSelectActionPayload> => ({\r\n    type: RadioSelectActions.set,\r\n    payload: {\r\n        id,\r\n        ...state,\r\n    },\r\n});\r\n\r\nexport const removeRadioSelect = (id: string): IReduxAction<IRadioSelectActionPayload> => ({\r\n    type: RadioSelectActions.remove,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n"}}]);
//# sourceMappingURL=646.bundle.js.map