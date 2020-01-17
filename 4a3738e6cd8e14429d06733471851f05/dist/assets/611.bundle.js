(window.webpackJsonp=window.webpackJsonp||[]).push([[611],{1699:function(t,n,e){"use strict";e.r(n),n.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {IChangeOptionsCyclePayload, IOptionsCyclePayload, OptionsCycleActions} from '../OptionsCycleActions';\r\nimport {\r\n    IOptionsCycleState,\r\n    optionsCycleInitialState,\r\n    optionsCycleReducer,\r\n    optionsCyclesInitialState,\r\n    optionsCyclesReducer,\r\n} from '../OptionsCycleReducers';\r\n\r\ndescribe('Options cycle', () => {\r\n    const genericAction: IReduxAction<IOptionsCyclePayload> = {\r\n        type: 'DO_SOMETHING',\r\n        payload: {\r\n            id: 'some-options-cycle',\r\n        },\r\n    };\r\n\r\n    describe('optionsCyclesReducer', () => {\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const optionsCyclesState: IOptionsCycleState[] = optionsCyclesReducer(undefined, genericAction);\r\n\r\n            expect(optionsCyclesState).toBe(optionsCyclesInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: IOptionsCycleState[] = [{id: 'some-options-cycle', currentOption: 3}];\r\n            const optionsCyclesState: IOptionsCycleState[] = optionsCyclesReducer(oldState, genericAction);\r\n\r\n            expect(optionsCyclesState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state with one more IOptionsCycleState when the action is \"ADD_OPTIONS_CYCLE\"', () => {\r\n            let oldState: IOptionsCycleState[] = optionsCyclesInitialState;\r\n            const action: IReduxAction<IChangeOptionsCyclePayload> = {\r\n                type: OptionsCycleActions.add,\r\n                payload: {\r\n                    id: 'some-options-cycle',\r\n                    currentOption: 2,\r\n                },\r\n            };\r\n            let optionsCyclesState: IOptionsCycleState[] = optionsCyclesReducer(oldState, action);\r\n\r\n            expect(optionsCyclesState.length).toBe(oldState.length + 1);\r\n            expect(\r\n                optionsCyclesState.filter((optionsCycle: IOptionsCycleState) => optionsCycle.id === action.payload.id)\r\n                    .length\r\n            ).toBe(1);\r\n\r\n            oldState = optionsCyclesState;\r\n            action.payload.id = 'some-options-cycle2';\r\n            optionsCyclesState = optionsCyclesReducer(oldState, action);\r\n\r\n            expect(optionsCyclesState.length).toBe(oldState.length + 1);\r\n            expect(\r\n                optionsCyclesState.filter((optionsCycle: IOptionsCycleState) => optionsCycle.id === action.payload.id)\r\n                    .length\r\n            ).toBe(1);\r\n        });\r\n\r\n        it('should return the old state without the IOptionsCycleState when the action is \"REMOVE_OPTIONS_CYCLE', () => {\r\n            let oldState: IOptionsCycleState[] = [\r\n                {\r\n                    id: 'some-options-cycle2',\r\n                    currentOption: 1,\r\n                },\r\n                {\r\n                    id: 'some-options-cycle',\r\n                    currentOption: 0,\r\n                },\r\n                {\r\n                    id: 'some-options-cycle3',\r\n                    currentOption: 2,\r\n                },\r\n            ];\r\n            const action: IReduxAction<IOptionsCyclePayload> = {\r\n                type: OptionsCycleActions.remove,\r\n                payload: {\r\n                    id: 'some-options-cycle',\r\n                },\r\n            };\r\n            let optionsCyclesState: IOptionsCycleState[] = optionsCyclesReducer(oldState, action);\r\n\r\n            expect(optionsCyclesState.length).toBe(oldState.length - 1);\r\n            expect(\r\n                optionsCyclesState.filter((optionsCycle: IOptionsCycleState) => optionsCycle.id === action.payload.id)\r\n                    .length\r\n            ).toBe(0);\r\n\r\n            oldState = optionsCyclesState;\r\n            action.payload.id = 'some-options-cycle2';\r\n            optionsCyclesState = optionsCyclesReducer(oldState, action);\r\n\r\n            expect(optionsCyclesState.length).toBe(oldState.length - 1);\r\n            expect(\r\n                optionsCyclesState.filter((optionsCycle: IOptionsCycleState) => optionsCycle.id === action.payload.id)\r\n                    .length\r\n            ).toBe(0);\r\n        });\r\n\r\n        it('should return the old state when the action is \"REMOVE_OPTIONS_CYCLE\" and the options cycle id does not exist', () => {\r\n            const oldState: IOptionsCycleState[] = [\r\n                {\r\n                    id: 'some-options-cycle2',\r\n                    currentOption: 4,\r\n                },\r\n                {\r\n                    id: 'some-options-cycle',\r\n                    currentOption: 2,\r\n                },\r\n                {\r\n                    id: 'some-options-cycle3',\r\n                    currentOption: 1,\r\n                },\r\n            ];\r\n            const action: IReduxAction<IOptionsCyclePayload> = {\r\n                type: OptionsCycleActions.remove,\r\n                payload: {\r\n                    id: 'some-option-cycle4',\r\n                },\r\n            };\r\n            const optionsCyclesState: IOptionsCycleState[] = optionsCyclesReducer(oldState, action);\r\n\r\n            expect(optionsCyclesState.length).toBe(oldState.length);\r\n            expect(\r\n                optionsCyclesState.filter((optionsCycle: IOptionsCycleState) => optionsCycle.id === action.payload.id)\r\n                    .length\r\n            ).toBe(0);\r\n        });\r\n\r\n        it('should return the state with the new current option for the options cycle with the action id when the action is \"CHANGE_OPTIONS_CYCLE\"', () => {\r\n            const oldState: IOptionsCycleState[] = [\r\n                {\r\n                    id: 'some-options-cycle2',\r\n                    currentOption: 7,\r\n                },\r\n                {\r\n                    id: 'some-options-cycle',\r\n                    currentOption: 9,\r\n                },\r\n                {\r\n                    id: 'some-options-cycle3',\r\n                    currentOption: 3,\r\n                },\r\n            ];\r\n            const action: IReduxAction<IChangeOptionsCyclePayload> = {\r\n                type: OptionsCycleActions.change,\r\n                payload: {\r\n                    id: 'some-options-cycle',\r\n                    currentOption: 4,\r\n                },\r\n            };\r\n            const optionsCyclesState: IOptionsCycleState[] = optionsCyclesReducer(oldState, action);\r\n            expect(_.findWhere(optionsCyclesState, {id: action.payload.id}).currentOption).toBe(\r\n                action.payload.currentOption\r\n            );\r\n        });\r\n\r\n        it('should not change the original state', () => {\r\n            const expectedState = optionsCyclesInitialState.slice(0);\r\n            const action: IReduxAction<IOptionsCyclePayload> = {\r\n                type: OptionsCycleActions.add,\r\n                payload: {\r\n                    id: 'some-options-cycle',\r\n                },\r\n            };\r\n            optionsCyclesReducer(optionsCyclesInitialState, action);\r\n\r\n            expect(expectedState).toEqual(optionsCyclesInitialState);\r\n        });\r\n    });\r\n\r\n    describe('optionsCycleReducer', () => {\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const optionsCycleState: IOptionsCycleState = optionsCycleReducer(undefined, genericAction);\r\n\r\n            expect(optionsCycleState).toBe(optionsCycleInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: IOptionsCycleState = {id: 'some-option-cycle', currentOption: 2};\r\n            const optionsCycleState: IOptionsCycleState = optionsCycleReducer(oldState, genericAction);\r\n\r\n            expect(optionsCycleState).toBe(oldState);\r\n        });\r\n\r\n        it('should return a new options cycle with the specified id and current option when the action is \"ADD_OPTIONS_CYCLE\"', () => {\r\n            const oldState: IOptionsCycleState = optionsCycleInitialState;\r\n            const action: IReduxAction<IChangeOptionsCyclePayload> = {\r\n                type: OptionsCycleActions.add,\r\n                payload: {\r\n                    id: 'some-options-cycle',\r\n                    currentOption: 4,\r\n                },\r\n            };\r\n            const optionsCycleState: IOptionsCycleState = optionsCycleReducer(oldState, action);\r\n\r\n            expect(optionsCycleState.id).toBe(action.payload.id);\r\n            expect(optionsCycleState.currentOption).toBe(action.payload.currentOption);\r\n        });\r\n\r\n        it('should return the original state if the action is \"CHANGE_OPTIONS_CYCLE\" and the id is not the one specified in the action', () => {\r\n            const oldState: IOptionsCycleState = {\r\n                id: 'some-options-cycle',\r\n                currentOption: 7,\r\n            };\r\n            const action: IReduxAction<IChangeOptionsCyclePayload> = {\r\n                type: OptionsCycleActions.change,\r\n                payload: {\r\n                    id: 'some-options-cycle5',\r\n                    currentOption: 2,\r\n                },\r\n            };\r\n            const optionsCycleState: IOptionsCycleState = optionsCycleReducer(oldState, action);\r\n\r\n            expect(optionsCycleState.currentOption).toBe(oldState.currentOption);\r\n        });\r\n\r\n        it('should return the options cycle with a new item when the action is \"CHANGE_OPTIONS_CYCLE\" and the id is the one specified', () => {\r\n            const oldState: IOptionsCycleState = {\r\n                id: 'some-options-cycle',\r\n                currentOption: 2,\r\n            };\r\n            const action: IReduxAction<IChangeOptionsCyclePayload> = {\r\n                type: OptionsCycleActions.change,\r\n                payload: {\r\n                    id: 'some-options-cycle',\r\n                    currentOption: 3,\r\n                },\r\n            };\r\n            const optionsCycleState: IOptionsCycleState = optionsCycleReducer(oldState, action);\r\n\r\n            expect(optionsCycleState.currentOption).toBe(action.payload.currentOption);\r\n        });\r\n\r\n        it('should not change the original state', () => {\r\n            const expectedState = _.extend({}, optionsCycleInitialState);\r\n            const action: IReduxAction<IChangeOptionsCyclePayload> = {\r\n                type: OptionsCycleActions.change,\r\n                payload: {\r\n                    id: 'some-options-cycle',\r\n                    currentOption: 3,\r\n                },\r\n            };\r\n            optionsCycleReducer(optionsCycleInitialState, action);\r\n\r\n            expect(expectedState).toEqual(optionsCycleInitialState);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=611.bundle.js.map