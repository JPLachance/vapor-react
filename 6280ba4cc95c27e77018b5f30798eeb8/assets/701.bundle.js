(window.webpackJsonp=window.webpackJsonp||[]).push([[701],{1800:function(e,t,n){"use strict";n.r(t),t.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {addSelect, ISelectPayload, removeSelect} from '../SelectActions';\r\nimport {\r\n    ISelectState,\r\n    selectCompositeInitialState,\r\n    selectCompositeReducer,\r\n    selectInitialState,\r\n    selectReducer,\r\n} from '../SelectReducers';\r\n\r\ndescribe('Select', () => {\r\n    describe('Select Reducers', () => {\r\n        const genericAction: IReduxAction<ISelectPayload> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {\r\n                id: 'select-id',\r\n            },\r\n        };\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const newState: ISelectState[] = selectCompositeReducer(undefined, genericAction);\r\n\r\n            expect(newState).toBe(selectCompositeInitialState);\r\n        });\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined for one select', () => {\r\n            const newState: ISelectState = selectReducer(undefined, genericAction);\r\n\r\n            expect(newState).toBe(selectInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: ISelectState[] = [selectInitialState];\r\n            const newState: ISelectState[] = selectCompositeReducer(oldState, genericAction);\r\n\r\n            expect(newState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined for one select', () => {\r\n            const oldState: ISelectState = selectInitialState;\r\n            const newState: ISelectState = selectReducer(oldState, genericAction);\r\n\r\n            expect(newState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined for one select which is in the state', () => {\r\n            const oldState: ISelectState = {...selectInitialState, id: genericAction.payload.id};\r\n            const newState: ISelectState = selectReducer(oldState, genericAction);\r\n\r\n            expect(newState).toBe(oldState);\r\n        });\r\n\r\n        describe('ADD_SELECT', () => {\r\n            const id = 'added-select';\r\n\r\n            it('should return the old state with one more select', () => {\r\n                const oldState: ISelectState[] = [selectInitialState];\r\n                const newState: ISelectState[] = selectCompositeReducer(oldState, addSelect(id));\r\n\r\n                expect(newState.length).toBe(oldState.length + 1);\r\n                expect(newState[1].id).toBe(id);\r\n            });\r\n\r\n            it('should not modify the old state', () => {\r\n                const oldState: ISelectState[] = [selectInitialState];\r\n                const oldStateBefore = _.clone(oldState);\r\n                selectCompositeReducer(oldState, addSelect(id));\r\n\r\n                expect(oldState).toEqual(oldStateBefore);\r\n            });\r\n        });\r\n\r\n        describe('REMOVE_SELECT', () => {\r\n            const id = 'to-remove-select';\r\n            let defaultState: ISelectState[];\r\n\r\n            beforeEach(() => {\r\n                defaultState = [_.extend({}, selectInitialState, {id}), selectInitialState];\r\n            });\r\n\r\n            it('should return the old state with one less select', () => {\r\n                const oldState: ISelectState[] = defaultState;\r\n                const newState: ISelectState[] = selectCompositeReducer(oldState, removeSelect(id));\r\n\r\n                expect(newState.length).toBe(oldState.length - 1);\r\n                expect(newState[0].id).not.toBe(id);\r\n            });\r\n\r\n            it('should not modify the old state', () => {\r\n                const oldState: ISelectState[] = [selectInitialState];\r\n                const oldStateBefore = _.clone(oldState);\r\n                selectCompositeReducer(oldState, removeSelect(id));\r\n\r\n                expect(oldState).toEqual(oldStateBefore);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=701.bundle.js.map