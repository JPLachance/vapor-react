(window.webpackJsonp=window.webpackJsonp||[]).push([[451],{1556:function(t,e,n){"use strict";n.r(e),e.default="import {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {\r\n    addInput,\r\n    changeInputValue,\r\n    IInputActionPayload,\r\n    removeInput,\r\n    setDisabledInput,\r\n    validateInputValue,\r\n} from '../InputActions';\r\nimport {IInputState, inputInitialState, inputReducer, inputsInitialState, inputsReducer} from '../InputReducers';\r\n\r\ndescribe('Reducers', () => {\r\n    let oldState: IInputState[];\r\n\r\n    beforeEach(() => {\r\n        oldState = [\r\n            {\r\n                ...inputInitialState,\r\n            },\r\n        ];\r\n    });\r\n\r\n    describe('InputReducers', () => {\r\n        const unrelatedAction: IReduxAction<any> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {id: ''},\r\n        };\r\n\r\n        it('should return the default state if the action is not related and the state is undefined ', () => {\r\n            expect(inputsReducer(undefined, unrelatedAction)).toEqual(inputsInitialState);\r\n        });\r\n\r\n        it('should return the default state if the action is not related and the state is undefined for one input state', () => {\r\n            expect(inputReducer(undefined, unrelatedAction)).toEqual(inputInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is unrelated to input containers', () => {\r\n            const newState: IInputState[] = inputsReducer(oldState, unrelatedAction);\r\n\r\n            expect(oldState).toEqual(newState);\r\n        });\r\n\r\n        it('should return the old state when the action is unrelated for one container', () => {\r\n            const newState: IInputState = inputReducer(oldState[0], unrelatedAction);\r\n\r\n            expect(oldState[0]).toEqual(newState);\r\n        });\r\n\r\n        describe('addInput', () => {\r\n            const getNewInput = (state: IInputState[], action: IReduxAction<IInputActionPayload>): IInputState[] =>\r\n                state.filter((input) => input.id === action.payload.id);\r\n\r\n            it('should return the old state with one more Input', () => {\r\n                const action = addInput('new-input');\r\n                const newState = inputsReducer(oldState, action);\r\n\r\n                expect(newState.length).toBe(oldState.length + 1);\r\n                expect(getNewInput(newState, action).length).toBe(1);\r\n            });\r\n\r\n            it('should return an input with the default value, valid, and disabled prop if not passed', () => {\r\n                const action = addInput('new-input');\r\n                const newState = inputsReducer(oldState, action);\r\n                const newInput: IInputState = getNewInput(newState, action)[0];\r\n\r\n                expect(newInput).toEqual(jasmine.objectContaining(action.payload));\r\n            });\r\n\r\n            it('should return an input with the value in the payload if passed', () => {\r\n                const testValue = 'testValue';\r\n                const action = addInput('new-input', testValue);\r\n                const newState = inputsReducer(oldState, action);\r\n                const newInput = getNewInput(newState, action)[0];\r\n\r\n                expect(newInput.value).toBe(testValue);\r\n            });\r\n\r\n            it('should return an input with the valid value in the payload if passed', () => {\r\n                const validValue = false;\r\n                const action = addInput('new-input', undefined, validValue);\r\n                const newState = inputsReducer(oldState, action);\r\n                const newInput = getNewInput(newState, action)[0];\r\n\r\n                expect(newInput.valid).toBe(validValue);\r\n            });\r\n\r\n            it('should return an input with the disabled value in the payload if passed', () => {\r\n                const disabledValue = true;\r\n                const action = addInput('new-input', undefined, undefined, disabledValue);\r\n                const newState = inputsReducer(oldState, action);\r\n                const newInput = getNewInput(newState, action)[0];\r\n\r\n                expect(newInput.disabled).toBe(disabledValue);\r\n            });\r\n        });\r\n\r\n        describe('changeInputValue', () => {\r\n            describe('with a different id', () => {\r\n                it('should not change an input not having the id passed in the payload', () => {\r\n                    const action = changeInputValue('a different id', 'a new value');\r\n                    expect(inputsReducer(oldState, action)[0]).toEqual(oldState[0]);\r\n                });\r\n            });\r\n\r\n            describe('with the same id', () => {\r\n                it('should return an input with the default value and valid props if only id is passed', () => {\r\n                    oldState[0] = {...oldState[0], value: 'some non default value', valid: false};\r\n                    const action = changeInputValue(oldState[0].id);\r\n                    const newState = inputsReducer(oldState, action);\r\n\r\n                    expect(action.payload.value).toBe('');\r\n                    expect(action.payload.valid).toBe(true);\r\n                    expect(newState[0].value).toBe(action.payload.value);\r\n                    expect(newState[0].valid).toBe(action.payload.valid);\r\n                });\r\n\r\n                it('should return an input with the value in the payload if passed', () => {\r\n                    const action = changeInputValue(oldState[0].id, 'some new value');\r\n                    const newState = inputsReducer(oldState, action);\r\n\r\n                    expect(newState[0].value).toBe(action.payload.value);\r\n                });\r\n\r\n                it('should return an input with the valid value in the payload if passed', () => {\r\n                    const action = changeInputValue(oldState[0].id, undefined, false);\r\n                    const newState = inputsReducer(oldState, action);\r\n\r\n                    expect(newState[0].valid).toBe(action.payload.valid);\r\n                });\r\n            });\r\n        });\r\n\r\n        it('should return the old state with one less Input when the action is InputActions.remove', () => {\r\n            const action = removeInput(oldState[0].id);\r\n            const newState = inputsReducer(oldState, action);\r\n\r\n            expect(newState.length).toBe(oldState.length - 1);\r\n            expect(newState.filter((input) => input.id === oldState[0].id).length).toBe(0);\r\n        });\r\n\r\n        it('should modify the disabled state for the Input having the same id as in the action payload', () => {\r\n            const setDisabledTrueAction = setDisabledInput(oldState[0].id, true);\r\n            const newState = inputsReducer(oldState, setDisabledTrueAction);\r\n\r\n            expect(newState[0].disabled).toBe(true);\r\n\r\n            const setDisabledFalseAction = setDisabledInput(oldState[0].id, false);\r\n            const secondNewState = inputsReducer(oldState, setDisabledFalseAction);\r\n\r\n            expect(secondNewState[0].disabled).toBe(false);\r\n        });\r\n\r\n        it('should not modify the disabled state for the Input having a different id as in the action payload', () => {\r\n            const setDisabledTrueAction = setDisabledInput('a different id', true);\r\n            const newState = inputsReducer(oldState, setDisabledTrueAction);\r\n\r\n            expect(newState[0].disabled).toBe(oldState[0].disabled);\r\n            expect(oldState).toEqual(oldState);\r\n\r\n            const setDisabledFalseAction = setDisabledInput('a different id', false);\r\n            const secondNewState = inputsReducer(oldState, setDisabledFalseAction);\r\n\r\n            expect(secondNewState[0].disabled).toBe(oldState[0].disabled);\r\n            expect(oldState).toEqual(oldState);\r\n        });\r\n\r\n        it('should modify the valid state for the Input having the same id as in the action payload', () => {\r\n            const setValidToFalseAction = validateInputValue(oldState[0].id, false);\r\n            const newState = inputsReducer(oldState, setValidToFalseAction);\r\n\r\n            expect(newState[0].valid).toBe(false);\r\n\r\n            const setValidToTrueAction = validateInputValue(oldState[0].id, true);\r\n            const secondNewState = inputsReducer(oldState, setValidToTrueAction);\r\n\r\n            expect(secondNewState[0].valid).toBe(true);\r\n        });\r\n\r\n        it('should not modify the valid state for the Input having a different id as in the action payload', () => {\r\n            const setValidToFalseAction = validateInputValue('different id', false);\r\n            const newState = inputsReducer(oldState, setValidToFalseAction);\r\n\r\n            expect(newState[0].valid).toBe(oldState[0].valid);\r\n            expect(oldState).toEqual(oldState);\r\n\r\n            const setDisabledFalseAction = setDisabledInput('a different id', false);\r\n            const secondNewState = inputsReducer(oldState, setDisabledFalseAction);\r\n\r\n            expect(secondNewState[0].valid).toBe(oldState[0].valid);\r\n            expect(oldState).toEqual(oldState);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=451.bundle.js.map