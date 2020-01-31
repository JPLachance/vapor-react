(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{1340:function(e,t,c){"use strict";c.r(t),t.default="import {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {CheckboxActions, ICheckboxActionPayload} from '../CheckboxActions';\r\nimport {\r\n    checkboxesInitialState,\r\n    checkboxesReducer,\r\n    checkboxInitialState,\r\n    checkboxReducer,\r\n    ICheckboxState,\r\n} from '../CheckboxReducers';\r\n\r\ndescribe('Checkbox', () => {\r\n    describe('CheckboxReducers', () => {\r\n        const genericAction: IReduxAction<ICheckboxActionPayload> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {\r\n                id: 'some-checkbox',\r\n            },\r\n        };\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const oldState: ICheckboxState[] = undefined;\r\n            const checkboxsState: ICheckboxState[] = checkboxesReducer(oldState, genericAction);\r\n\r\n            expect(checkboxsState).toBe(checkboxesInitialState);\r\n        });\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined for one checkbox', () => {\r\n            const oldState: ICheckboxState = undefined;\r\n            const checkboxState: ICheckboxState = checkboxReducer(oldState, genericAction);\r\n\r\n            expect(checkboxState).toBe(checkboxInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: ICheckboxState[] = [checkboxInitialState];\r\n            const checkboxsState: ICheckboxState[] = checkboxesReducer(oldState, genericAction);\r\n\r\n            expect(checkboxsState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined for one checkbox', () => {\r\n            const oldState: ICheckboxState = checkboxInitialState;\r\n            const checkboxState: ICheckboxState = checkboxReducer(oldState, genericAction);\r\n\r\n            expect(checkboxState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state with one more ICheckboxState when the action is \"CheckboxAction.add\"', () => {\r\n            let oldState: ICheckboxState[] = checkboxesInitialState;\r\n            const action: IReduxAction<ICheckboxActionPayload> = {\r\n                type: CheckboxActions.add,\r\n                payload: {\r\n                    id: 'some-checkbox',\r\n                    checked: true,\r\n                },\r\n            };\r\n            let checkboxesState: ICheckboxState[] = checkboxesReducer(oldState, action);\r\n\r\n            expect(checkboxesState.length).toBe(oldState.length + 1);\r\n            expect(checkboxesState.filter((checkbox) => checkbox.id === action.payload.id).length).toBe(1);\r\n\r\n            oldState = checkboxesState;\r\n            action.payload.id = 'some-checkbox2';\r\n            checkboxesState = checkboxesReducer(oldState, action);\r\n\r\n            expect(checkboxesState.length).toBe(oldState.length + 1);\r\n            expect(checkboxesState.filter((checkbox) => checkbox.id === action.payload.id).length).toBe(1);\r\n        });\r\n\r\n        it('should return the old state without the ICheckboxState when the action is \"CheckboxAction.remove\"', () => {\r\n            let oldState: ICheckboxState[] = [\r\n                {\r\n                    id: 'some-checkbox2',\r\n                    checked: false,\r\n                    disabled: false,\r\n                },\r\n                {\r\n                    id: 'some-checkbox1',\r\n                    checked: false,\r\n                    disabled: false,\r\n                },\r\n                {\r\n                    id: 'some-checkbox3',\r\n                    checked: false,\r\n                    disabled: false,\r\n                },\r\n            ];\r\n            const action: IReduxAction<ICheckboxActionPayload> = {\r\n                type: CheckboxActions.remove,\r\n                payload: {\r\n                    id: 'some-checkbox1',\r\n                },\r\n            };\r\n            let checkboxsState: ICheckboxState[] = checkboxesReducer(oldState, action);\r\n\r\n            expect(checkboxsState.length).toBe(oldState.length - 1);\r\n            expect(checkboxsState.filter((checkbox) => checkbox.id === action.payload.id).length).toBe(0);\r\n\r\n            oldState = checkboxsState;\r\n            action.payload.id = 'some-checkbox2';\r\n            checkboxsState = checkboxesReducer(oldState, action);\r\n\r\n            expect(checkboxsState.length).toBe(oldState.length - 1);\r\n            expect(checkboxsState.filter((checkbox) => checkbox.id === action.payload.id).length).toBe(0);\r\n        });\r\n\r\n        it('should toggle a checkbox when the action is \"CheckboxAction.toggle\"', () => {\r\n            const oldState: ICheckboxState[] = [\r\n                {\r\n                    id: 'some-checkbox1',\r\n                    checked: false,\r\n                    disabled: false,\r\n                },\r\n                {\r\n                    id: 'some-checkbox2',\r\n                    checked: false,\r\n                    disabled: false,\r\n                },\r\n                {\r\n                    id: 'some-checkbox3',\r\n                    checked: true,\r\n                    disabled: false,\r\n                },\r\n            ];\r\n\r\n            const action: IReduxAction<ICheckboxActionPayload> = {\r\n                type: CheckboxActions.toggle,\r\n                payload: {\r\n                    id: 'some-checkbox1',\r\n                },\r\n            };\r\n            const checkboxesState: ICheckboxState[] = checkboxesReducer(oldState, action);\r\n\r\n            expect(checkboxesState.length).toBe(oldState.length);\r\n            expect(checkboxesState.filter((checkbox) => checkbox.id === action.payload.id)[0].checked).toBe(true);\r\n            expect(checkboxesState.filter((checkbox) => checkbox.id === 'some-checkbox2')[0].checked).toBe(false);\r\n            expect(checkboxesState.filter((checkbox) => checkbox.id === 'some-checkbox3')[0].checked).toBe(true);\r\n        });\r\n\r\n        it('should toggle a checkbox to the checked state passed in the payload if there is one when the action is \"CheckboxAction.toggle\"', () => {\r\n            const oldState: ICheckboxState[] = [\r\n                {\r\n                    id: 'some-checkbox1',\r\n                    checked: false,\r\n                    disabled: false,\r\n                },\r\n                {\r\n                    id: 'some-checkbox2',\r\n                    checked: false,\r\n                    disabled: false,\r\n                },\r\n                {\r\n                    id: 'some-checkbox3',\r\n                    checked: true,\r\n                    disabled: false,\r\n                },\r\n            ];\r\n\r\n            const action: IReduxAction<ICheckboxActionPayload> = {\r\n                type: CheckboxActions.toggle,\r\n                payload: {\r\n                    id: 'some-checkbox1',\r\n                    checked: false,\r\n                },\r\n            };\r\n            const action2: IReduxAction<ICheckboxActionPayload> = {\r\n                type: CheckboxActions.toggle,\r\n                payload: {\r\n                    id: 'some-checkbox1',\r\n                    checked: true,\r\n                },\r\n            };\r\n            const checkboxesState: ICheckboxState[] = checkboxesReducer(oldState, action);\r\n            const checkboxesState2: ICheckboxState[] = checkboxesReducer(oldState, action2);\r\n\r\n            expect(checkboxesState.length).toBe(oldState.length);\r\n            expect(checkboxesState2.length).toBe(oldState.length);\r\n            expect(checkboxesState.filter((checkbox) => checkbox.id === action.payload.id)[0].checked).toBe(false);\r\n            expect(checkboxesState2.filter((checkbox) => checkbox.id === action.payload.id)[0].checked).toBe(true);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=230.bundle.js.map