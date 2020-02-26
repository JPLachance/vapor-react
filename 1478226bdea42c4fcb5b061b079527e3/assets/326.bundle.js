(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{1432:function(o,n,t){"use strict";t.r(n),n.default="import {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {DropdownActions, IDropdownActionPayload} from '../DropdownActions';\r\nimport {\r\n    dropdownInitialState,\r\n    dropdownReducer,\r\n    dropdownsInitialState,\r\n    dropdownsReducer,\r\n    IDropdownState,\r\n} from '../DropdownReducers';\r\n\r\ndescribe('Reducers', () => {\r\n    describe('facets', () => {\r\n        const genericAction: IReduxAction<IDropdownActionPayload> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {\r\n                id: 'dropdown',\r\n            },\r\n        };\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const dropdownsState: IDropdownState[] = dropdownsReducer(undefined, genericAction);\r\n\r\n            expect(dropdownsState).toBe(dropdownsInitialState);\r\n        });\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined for one dropdown', () => {\r\n            const dropdownState: IDropdownState = dropdownReducer(undefined, genericAction);\r\n\r\n            expect(dropdownState).toBe(dropdownInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: IDropdownState[] = [dropdownInitialState];\r\n            const dropdownsState: IDropdownState[] = dropdownsReducer(oldState, genericAction);\r\n\r\n            expect(dropdownsState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined for one facet', () => {\r\n            const oldState: IDropdownState = dropdownInitialState;\r\n            const dropdownState: IDropdownState = dropdownReducer(oldState, genericAction);\r\n\r\n            expect(dropdownState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state with one more DropdownState when the action is \"ADD_DROPDOWN\"', () => {\r\n            let oldState: IDropdownState[] = dropdownsInitialState;\r\n            const action: IReduxAction<IDropdownActionPayload> = {\r\n                type: DropdownActions.add,\r\n                payload: {\r\n                    id: 'dropdown',\r\n                },\r\n            };\r\n            let dropdownsState: IDropdownState[] = dropdownsReducer(oldState, action);\r\n\r\n            expect(dropdownsState.length).toBe(oldState.length + 1);\r\n            expect(dropdownsState.filter((dropdown) => dropdown.id === action.payload.id).length).toBe(1);\r\n\r\n            oldState = dropdownsState;\r\n            action.payload.id = 'dropdown2';\r\n            dropdownsState = dropdownsReducer(oldState, action);\r\n\r\n            expect(dropdownsState.length).toBe(oldState.length + 1);\r\n            expect(dropdownsState.filter((dropdown) => dropdown.id === action.payload.id).length).toBe(1);\r\n        });\r\n\r\n        it('should return the old state without the DropdownState with the action facet when the action is \"REMOVE_DROPDOWN\"', () => {\r\n            let oldState: IDropdownState[] = [\r\n                {\r\n                    id: 'dropdown2',\r\n                    opened: false,\r\n                },\r\n                {\r\n                    id: 'dropdown3',\r\n                    opened: true,\r\n                },\r\n                {\r\n                    id: 'dropdown1',\r\n                    opened: false,\r\n                },\r\n            ];\r\n            const action: IReduxAction<IDropdownActionPayload> = {\r\n                type: DropdownActions.remove,\r\n                payload: {\r\n                    id: 'dropdown1',\r\n                },\r\n            };\r\n            let dropdownsState: IDropdownState[] = dropdownsReducer(oldState, action);\r\n\r\n            expect(dropdownsState.length).toBe(oldState.length - 1);\r\n            expect(dropdownsState.filter((dropdown) => dropdown.id === action.payload.id).length).toBe(0);\r\n\r\n            oldState = dropdownsState;\r\n            action.payload.id = 'dropdown2';\r\n            dropdownsState = dropdownsReducer(oldState, action);\r\n\r\n            expect(dropdownsState.length).toBe(oldState.length - 1);\r\n            expect(dropdownsState.filter((dropdown) => dropdown.id === action.payload.id).length).toBe(0);\r\n        });\r\n\r\n        it('should toggle the open property value of a dropdown when the action is \"TOGGLE_DROPDOWN\"', () => {\r\n            const openValue = false;\r\n            const oldState: IDropdownState[] = [\r\n                {\r\n                    id: 'dropdown1',\r\n                    opened: openValue,\r\n                },\r\n                {\r\n                    id: 'dropdown3',\r\n                    opened: openValue,\r\n                },\r\n                {\r\n                    id: 'dropdown',\r\n                    opened: openValue,\r\n                },\r\n            ];\r\n            const action: IReduxAction<IDropdownActionPayload> = {\r\n                type: DropdownActions.toggle,\r\n                payload: {\r\n                    id: 'dropdown1',\r\n                },\r\n            };\r\n            let dropdownsState: IDropdownState[] = dropdownsReducer(oldState, action);\r\n\r\n            expect(dropdownsState.length).toBe(oldState.length);\r\n            expect(dropdownsState.filter((dropdown) => dropdown.id === action.payload.id)[0].opened).toBe(!openValue);\r\n            expect(dropdownsState.filter((dropdown) => dropdown.id !== action.payload.id)[0].opened).toBe(openValue);\r\n\r\n            dropdownsState = dropdownsReducer(dropdownsState, action);\r\n\r\n            expect(dropdownsState.filter((dropdown) => dropdown.id === action.payload.id)[0].opened).toBe(openValue);\r\n            expect(dropdownsState.filter((dropdown) => dropdown.id !== action.payload.id)[0].opened).toBe(openValue);\r\n        });\r\n\r\n        it('should set opened property value to false for all facets when the action is \"CLOSE_DROPDOWN\"', () => {\r\n            const oldState: IDropdownState[] = [\r\n                {\r\n                    id: 'dropdown3',\r\n                    opened: true,\r\n                },\r\n                {\r\n                    id: 'dropdown2',\r\n                    opened: false,\r\n                },\r\n                {\r\n                    id: 'dropdown1',\r\n                    opened: true,\r\n                },\r\n            ];\r\n            const action: IReduxAction<IDropdownActionPayload> = {\r\n                type: DropdownActions.close,\r\n                payload: {\r\n                    id: 'dropdown3',\r\n                },\r\n            };\r\n            let dropdownsState: IDropdownState[] = dropdownsReducer(oldState, action);\r\n\r\n            expect(dropdownsState.length).toBe(oldState.length);\r\n            expect(dropdownsState.filter((dropdown) => dropdown.id === action.payload.id)[0].opened).toBe(false);\r\n\r\n            dropdownsState = dropdownsReducer(dropdownsState, action);\r\n            expect(dropdownsState.filter((dropdown) => dropdown.id === action.payload.id)[0].opened).toBe(false);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=326.bundle.js.map