(window.webpackJsonp=window.webpackJsonp||[]).push([[756],{1856:function(t,e,n){"use strict";n.r(e),e.default="import {findWhere} from 'underscore';\r\nimport {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {ISubNavigationActionPayload, SubNavigationActions} from '../SubNavigationActions';\r\nimport {\r\n    ISubNavigationState,\r\n    subNavigationInitialState,\r\n    subNavigationReducer,\r\n    subNavigationsInitialState,\r\n    subNavigationsReducer,\r\n} from '../SubNavigationReducers';\r\n\r\ndescribe('Reducers', () => {\r\n    describe('subNavigations', () => {\r\n        const genericAction: IReduxAction<ISubNavigationActionPayload> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {\r\n                id: 'sub-navigation',\r\n            },\r\n        };\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const newState: ISubNavigationState[] = subNavigationsReducer(undefined, genericAction);\r\n\r\n            expect(newState).toBe(subNavigationsInitialState);\r\n        });\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined for one sub navigation', () => {\r\n            const newState: ISubNavigationState = subNavigationReducer(undefined, genericAction);\r\n\r\n            expect(newState).toBe(subNavigationInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: ISubNavigationState[] = [subNavigationInitialState];\r\n            const newState: ISubNavigationState[] = subNavigationsReducer(oldState, genericAction);\r\n\r\n            expect(newState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined for one facet', () => {\r\n            const oldState: ISubNavigationState = subNavigationInitialState;\r\n            const newState: ISubNavigationState = subNavigationReducer(oldState, genericAction);\r\n\r\n            expect(newState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state with one more SubNavigationState when the action is \"ADD_SUB_NAVIGATION\"', () => {\r\n            let oldState: ISubNavigationState[] = subNavigationsInitialState;\r\n            const action: IReduxAction<ISubNavigationActionPayload> = {\r\n                type: SubNavigationActions.add,\r\n                payload: {\r\n                    id: 'one',\r\n                },\r\n            };\r\n            let newState: ISubNavigationState[] = subNavigationsReducer(oldState, action);\r\n\r\n            expect(newState.length).toBe(oldState.length + 1);\r\n            expect(newState.filter((subNav) => subNav.id === action.payload.id).length).toBe(1);\r\n\r\n            oldState = newState;\r\n            action.payload.id = 'two';\r\n            newState = subNavigationsReducer(oldState, action);\r\n\r\n            expect(newState.length).toBe(oldState.length + 1);\r\n            expect(newState.filter((subNav) => subNav.id === action.payload.id).length).toBe(1);\r\n        });\r\n\r\n        it('should return the old state without the SubNavigationState with the action facet when the action is \"REMOVE_SUB_NAVIGATION\"', () => {\r\n            const firstIdtoRemove = 'sub-nav-3';\r\n            const secondIdtoRemove = 'sub-nav-2';\r\n            let oldState: ISubNavigationState[] = [\r\n                {\r\n                    id: secondIdtoRemove,\r\n                    selected: '',\r\n                },\r\n                {\r\n                    id: firstIdtoRemove,\r\n                    selected: 'one',\r\n                },\r\n                {\r\n                    id: 'sub-nav-1',\r\n                    selected: 'test',\r\n                },\r\n            ];\r\n            const action: IReduxAction<ISubNavigationActionPayload> = {\r\n                type: SubNavigationActions.remove,\r\n                payload: {\r\n                    id: firstIdtoRemove,\r\n                },\r\n            };\r\n            let newState: ISubNavigationState[] = subNavigationsReducer(oldState, action);\r\n\r\n            expect(newState.length).toBe(oldState.length - 1);\r\n            expect(newState.filter((subNav) => subNav.id === action.payload.id).length).toBe(0);\r\n\r\n            oldState = newState;\r\n            action.payload.id = secondIdtoRemove;\r\n            newState = subNavigationsReducer(oldState, action);\r\n\r\n            expect(newState.length).toBe(oldState.length - 1);\r\n            expect(newState.filter((subNav) => subNav.id === action.payload.id).length).toBe(0);\r\n        });\r\n\r\n        it('should set the selected value in SubNavigationState when the action is \"SELECT_SUB_NAVIGATION\"', () => {\r\n            const firstIdToSet = 'sub-nav-1';\r\n            const firstExpectedSelected = 'k';\r\n\r\n            const secondIdToSet = 'sub-nav-2';\r\n            const secondExpectedSelected = 'k-again';\r\n\r\n            const oldState: ISubNavigationState[] = [\r\n                {\r\n                    id: secondIdToSet,\r\n                    selected: '',\r\n                },\r\n                {\r\n                    id: 'sub-nav-3',\r\n                    selected: 'one',\r\n                },\r\n                {\r\n                    id: firstIdToSet,\r\n                    selected: 'test',\r\n                },\r\n            ];\r\n            const action: IReduxAction<ISubNavigationActionPayload> = {\r\n                type: SubNavigationActions.select,\r\n                payload: {\r\n                    id: firstIdToSet,\r\n                    selected: firstExpectedSelected,\r\n                },\r\n            };\r\n            let newState: ISubNavigationState[] = subNavigationsReducer(oldState, action);\r\n\r\n            expect(findWhere(newState, {id: firstIdToSet}).selected).toBe(firstExpectedSelected);\r\n\r\n            action.payload = {id: secondIdToSet, selected: secondExpectedSelected};\r\n            newState = subNavigationsReducer(oldState, action);\r\n\r\n            expect(findWhere(newState, {id: secondIdToSet}).selected).toBe(secondExpectedSelected);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=756.bundle.js.map