(window.webpackJsonp=window.webpackJsonp||[]).push([[597],{1691:function(t,e,n){"use strict";n.r(e),e.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {NumericInputActions} from '../NumericInputActions';\r\nimport {\r\n    initialNumericInputsState,\r\n    initialNumericInputState,\r\n    INumericInputPayload,\r\n    INumericInputsState,\r\n    numericInputReducer,\r\n} from '../NumericInputReducers';\r\n\r\ndescribe('Numeric Input', () => {\r\n    describe('Numeric Input Reducers', () => {\r\n        const genericAction: IReduxAction<INumericInputPayload> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {\r\n                id: 'numeric-input-id',\r\n            },\r\n        };\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const newState: INumericInputsState = numericInputReducer(undefined, genericAction);\r\n\r\n            expect(newState).toBe(initialNumericInputsState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: INumericInputsState = {...initialNumericInputsState};\r\n            const newState: INumericInputsState = numericInputReducer(oldState, genericAction);\r\n\r\n            expect(newState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined for one select', () => {\r\n            const oldState: INumericInputsState = {[genericAction.payload.id]: initialNumericInputState};\r\n            const newState: INumericInputsState = numericInputReducer(oldState, genericAction);\r\n\r\n            expect(newState).toEqual(oldState);\r\n        });\r\n\r\n        describe('mount', () => {\r\n            const id = 'added-numeric-input';\r\n\r\n            it('should return the old state with one more numeric input', () => {\r\n                const expectedValue = 5;\r\n                const oldState: INumericInputsState = {other: initialNumericInputState};\r\n                const newState: INumericInputsState = numericInputReducer(\r\n                    oldState,\r\n                    NumericInputActions.mount(id, expectedValue)\r\n                );\r\n\r\n                expect(_.keys(newState).length).toBe(_.keys(oldState).length + 1);\r\n                expect(newState[id].value).toBe(expectedValue);\r\n            });\r\n\r\n            it('should not modify the old state', () => {\r\n                const oldState: INumericInputsState = {};\r\n                const oldStateBefore = _.clone(oldState);\r\n                numericInputReducer(oldState, NumericInputActions.mount(id, 2));\r\n\r\n                expect(oldState).toEqual(oldStateBefore);\r\n            });\r\n        });\r\n\r\n        describe('unmount', () => {\r\n            const id = 'to-remove-numeric-input';\r\n\r\n            it('should return the old state without the numeric input', () => {\r\n                const oldState: INumericInputsState = {other: initialNumericInputState, [id]: initialNumericInputState};\r\n                const newState: INumericInputsState = numericInputReducer(oldState, NumericInputActions.unmount(id));\r\n\r\n                expect(_.keys(newState).length).toBe(_.keys(oldState).length - 1);\r\n                expect(newState[id]).toBeUndefined();\r\n            });\r\n\r\n            it('should not throw if the numeric input does not exists', () => {\r\n                const oldState: INumericInputsState = {other: initialNumericInputState};\r\n                const newState: INumericInputsState = numericInputReducer(oldState, NumericInputActions.unmount(id));\r\n\r\n                expect(_.keys(newState).length).toBe(_.keys(oldState).length);\r\n                expect(newState[id]).toBeUndefined();\r\n            });\r\n\r\n            it('should not modify the old state', () => {\r\n                const oldState: INumericInputsState = {[id]: initialNumericInputState};\r\n                const oldStateBefore = _.clone(oldState);\r\n                numericInputReducer(oldState, NumericInputActions.unmount(id));\r\n\r\n                expect(oldState).toEqual(oldStateBefore);\r\n            });\r\n        });\r\n\r\n        describe('set', () => {\r\n            const id = 'to-change-numeric-input';\r\n\r\n            it('should update the numeric input value in the state', () => {\r\n                const expectedValue = 5;\r\n                const oldState: INumericInputsState = {other: initialNumericInputState, [id]: initialNumericInputState};\r\n                const newState: INumericInputsState = numericInputReducer(\r\n                    oldState,\r\n                    NumericInputActions.setValue(id, expectedValue)\r\n                );\r\n\r\n                expect(newState[id].value).toBe(expectedValue);\r\n                expect(newState[id].hasError).toBe(false);\r\n            });\r\n\r\n            it('should not throw if the numeric input does not exists', () => {\r\n                const oldState: INumericInputsState = {other: initialNumericInputState};\r\n                const newState: INumericInputsState = numericInputReducer(\r\n                    oldState,\r\n                    NumericInputActions.setValue(id, 25)\r\n                );\r\n\r\n                expect(newState[id]).toBeUndefined();\r\n            });\r\n\r\n            it('should set the input in error but still update the value if the value is not numeric', () => {\r\n                const expectedValue = 'ToBeOrNot2Be';\r\n                const oldState: INumericInputsState = {[id]: initialNumericInputState};\r\n                const newState: INumericInputsState = numericInputReducer(\r\n                    oldState,\r\n                    NumericInputActions.setValue(id, expectedValue)\r\n                );\r\n\r\n                expect(newState[id].hasError).toBe(true);\r\n                expect(newState[id].value).toBe(expectedValue);\r\n            });\r\n\r\n            it('should set the input in error but still update the value if the value is lower than the min', () => {\r\n                const expectedValue = 200;\r\n                const min = expectedValue + 1;\r\n\r\n                const oldState: INumericInputsState = {[id]: initialNumericInputState};\r\n                const newState: INumericInputsState = numericInputReducer(\r\n                    oldState,\r\n                    NumericInputActions.setValue(id, expectedValue, min)\r\n                );\r\n\r\n                expect(newState[id].hasError).toBe(true);\r\n                expect(newState[id].value).toBe(expectedValue);\r\n            });\r\n\r\n            it('should set the input in error but still update the initial value if the value is lower than the min', () => {\r\n                const expectedValue = 200;\r\n                const min = expectedValue + 1;\r\n\r\n                const oldState: INumericInputsState = {[id]: initialNumericInputState};\r\n                const newState: INumericInputsState = numericInputReducer(\r\n                    oldState,\r\n                    NumericInputActions.mount(id, expectedValue, min)\r\n                );\r\n\r\n                expect(newState[id].hasError).toBe(true);\r\n                expect(newState[id].value).toBe(expectedValue);\r\n            });\r\n\r\n            it('should set the input in error but still update the value if the value is greater than the max', () => {\r\n                const expectedValue = 200;\r\n                const max = expectedValue - 1;\r\n\r\n                const oldState: INumericInputsState = {[id]: initialNumericInputState};\r\n                const newState: INumericInputsState = numericInputReducer(\r\n                    oldState,\r\n                    NumericInputActions.setValue(id, expectedValue, undefined, max)\r\n                );\r\n\r\n                expect(newState[id].hasError).toBe(true);\r\n                expect(newState[id].value).toBe(expectedValue);\r\n            });\r\n\r\n            it('should set the input in error but still update the value if the initial value is greater than the max', () => {\r\n                const expectedValue = 200;\r\n                const max = expectedValue - 1;\r\n\r\n                const oldState: INumericInputsState = {[id]: initialNumericInputState};\r\n                const newState: INumericInputsState = numericInputReducer(\r\n                    oldState,\r\n                    NumericInputActions.mount(id, expectedValue, undefined, max)\r\n                );\r\n\r\n                expect(newState[id].hasError).toBe(true);\r\n                expect(newState[id].value).toBe(expectedValue);\r\n            });\r\n\r\n            it('should not set the input in error if the value is not lower than the min', () => {\r\n                const expectedValue = 200;\r\n                const min = 100;\r\n\r\n                const oldState: INumericInputsState = {[id]: initialNumericInputState};\r\n                const newState: INumericInputsState = numericInputReducer(\r\n                    oldState,\r\n                    NumericInputActions.setValue(id, expectedValue, min)\r\n                );\r\n\r\n                expect(newState[id].hasError).toBe(false);\r\n                expect(newState[id].value).toBe(expectedValue);\r\n            });\r\n\r\n            it('should not set the input in error if the initial value is not lower than the min', () => {\r\n                const expectedValue = 200;\r\n                const min = 100;\r\n\r\n                const oldState: INumericInputsState = {[id]: initialNumericInputState};\r\n                const newState: INumericInputsState = numericInputReducer(\r\n                    oldState,\r\n                    NumericInputActions.mount(id, expectedValue, min)\r\n                );\r\n\r\n                expect(newState[id].hasError).toBe(false);\r\n                expect(newState[id].value).toBe(expectedValue);\r\n            });\r\n\r\n            it('should not set the input in error if the value is not greater than the max', () => {\r\n                const expectedValue = 200;\r\n                const max = 9001;\r\n\r\n                const oldState: INumericInputsState = {[id]: initialNumericInputState};\r\n                const newState: INumericInputsState = numericInputReducer(\r\n                    oldState,\r\n                    NumericInputActions.setValue(id, expectedValue, undefined, max)\r\n                );\r\n\r\n                expect(newState[id].hasError).toBe(false);\r\n                expect(newState[id].value).toBe(expectedValue);\r\n            });\r\n\r\n            it('should not set the input in error if the initial value is not greater than the max', () => {\r\n                const expectedValue = 200;\r\n                const max = 9001;\r\n\r\n                const oldState: INumericInputsState = {[id]: initialNumericInputState};\r\n                const newState: INumericInputsState = numericInputReducer(\r\n                    oldState,\r\n                    NumericInputActions.mount(id, expectedValue, undefined, max)\r\n                );\r\n\r\n                expect(newState[id].hasError).toBe(false);\r\n                expect(newState[id].value).toBe(expectedValue);\r\n            });\r\n\r\n            it('should not modify the old state', () => {\r\n                const oldState: INumericInputsState = {[id]: initialNumericInputState};\r\n                const oldStateBefore = _.clone(oldState);\r\n                numericInputReducer(oldState, NumericInputActions.setValue(id, 10));\r\n\r\n                expect(oldState).toEqual(oldStateBefore);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=597.bundle.js.map