(window.webpackJsonp=window.webpackJsonp||[]).push([[866],{1955:function(e,r,n){"use strict";n.r(r),r.default="import {IReduxAction} from '../../utils/ReduxUtils';\r\n\r\nexport const TextAreaActions = {\r\n    add: 'ADD_TEXTAREA',\r\n    remove: 'REMOVE_TEXTAREA',\r\n    changeValue: 'CHANGE_VALUE_TEXTAREA',\r\n    setDisabled: 'SET_DISABLED_TEXTAREA',\r\n};\r\n\r\nexport interface ITextAreaActionPayload {\r\n    id: string;\r\n    value?: string;\r\n    disabled?: boolean;\r\n}\r\n\r\nexport const addTextArea = (id: string, value = '', disabled = false): IReduxAction<ITextAreaActionPayload> => ({\r\n    type: TextAreaActions.add,\r\n    payload: {id, value, disabled},\r\n});\r\n\r\nexport const removeTextArea = (id: string): IReduxAction<ITextAreaActionPayload> => ({\r\n    type: TextAreaActions.remove,\r\n    payload: {id},\r\n});\r\n\r\nexport const changeTextAreaValue = (id: string, value = ''): IReduxAction<ITextAreaActionPayload> => ({\r\n    type: TextAreaActions.changeValue,\r\n    payload: {id, value},\r\n});\r\n\r\nexport const setDisabledTextArea = (id: string, disabled = false): IReduxAction<ITextAreaActionPayload> => ({\r\n    type: TextAreaActions.setDisabled,\r\n    payload: {id, disabled},\r\n});\r\n\r\nexport const TextAreaReduxActions = {\r\n    addTextArea,\r\n    removeTextArea,\r\n    changeTextAreaValue,\r\n    setDisabledTextArea,\r\n};\r\n"}}]);
//# sourceMappingURL=866.bundle.js.map