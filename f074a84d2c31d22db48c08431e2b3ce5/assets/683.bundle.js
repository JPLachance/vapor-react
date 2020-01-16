(window.webpackJsonp=window.webpackJsonp||[]).push([[683],{1772:function(t,e,n){"use strict";n.r(e),e.default="import {StringListActions} from '../../../../reusableState/customList/StringListActions';\r\nimport * as StringListReducers from '../../../../reusableState/customList/StringListReducers';\r\nimport {IStringListCompositeState} from '../../../../reusableState/customList/StringListReducers';\r\nimport {stringListInitialState} from '../../../../reusableState/customList/StringListReducers';\r\nimport {IReduxAction} from '../../../../utils/ReduxUtils';\r\nimport {clearListBoxOption, selectListBoxOption, unselectListBoxOption} from '../../../listBox/ListBoxActions';\r\nimport {\r\n    ISelectWithFilterCompositeState,\r\n    ISelectWithFilterPayload,\r\n    selectWithFilterCompositeReducer,\r\n} from '../SelectWithFilterReducers';\r\n\r\ndescribe('Select', () => {\r\n    describe('SelectWithFilter reducers', () => {\r\n        const stateId: string = 'test_id';\r\n        const stateValue: string = 'a';\r\n        const oldState: ISelectWithFilterCompositeState = {\r\n            [stateId]: {\r\n                id: stateId,\r\n                list: [stateValue],\r\n            },\r\n        };\r\n\r\n        const genericAction: IReduxAction<ISelectWithFilterPayload> = {\r\n            type: 'pokeball',\r\n        };\r\n\r\n        let spyStringListCompositeState: jasmine.Spy;\r\n\r\n        beforeEach(() => {\r\n            spyStringListCompositeState = spyOn(StringListReducers, 'stringListCompositeReducer');\r\n        });\r\n\r\n        it('should return the default state if the action has no payload ', () => {\r\n            const newState: IStringListCompositeState = selectWithFilterCompositeReducer({}, {type: undefined});\r\n\r\n            expect(newState).toEqual(stringListInitialState);\r\n        });\r\n\r\n        it('should return the default state if the state is undefined', () => {\r\n            const newState: IStringListCompositeState = selectWithFilterCompositeReducer(undefined, genericAction);\r\n\r\n            expect(newState).toEqual(stringListInitialState);\r\n        });\r\n\r\n        it('should return the default state if the id is not in the state', () => {\r\n            const newState: IStringListCompositeState = selectWithFilterCompositeReducer(oldState, genericAction);\r\n\r\n            expect(newState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the default state if the action type do not exist', () => {\r\n            const newState: IStringListCompositeState = selectWithFilterCompositeReducer(oldState, {\r\n                ...genericAction,\r\n                payload: {id: stateId},\r\n            });\r\n\r\n            expect(newState).toBe(oldState);\r\n        });\r\n\r\n        it('should call stringListCompositeReducer if the action type is contains in the StringListActions', () => {\r\n            selectWithFilterCompositeReducer(oldState, {type: StringListActions.add, payload: {id: stateId}});\r\n\r\n            expect(spyStringListCompositeState).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        describe('SELECT_ITEM_LIST_BOX', () => {\r\n            const newValue: string = 'b';\r\n\r\n            it('should add the value in the list if multi and the id exist in the state', () => {\r\n                const newState: IStringListCompositeState = selectWithFilterCompositeReducer(\r\n                    oldState,\r\n                    selectListBoxOption(stateId, true, newValue)\r\n                );\r\n\r\n                expect(newState[stateId].list.length).toBe(2);\r\n                expect(newState[stateId].list[1]).toBe(newValue);\r\n            });\r\n\r\n            it('should add only the value in the list if no multi and the id exist in the state', () => {\r\n                const newState: IStringListCompositeState = selectWithFilterCompositeReducer(\r\n                    oldState,\r\n                    selectListBoxOption(stateId, false, newValue)\r\n                );\r\n\r\n                expect(newState[stateId].list.length).toBe(1);\r\n                expect(newState[stateId].list[0]).toBe(newValue);\r\n            });\r\n        });\r\n\r\n        describe('UNSELECT_ITEM_LIST_BOX', () => {\r\n            it('should remove the value in the list if the id exist in the state', () => {\r\n                expect(oldState[stateId].list.length).toBe(1);\r\n\r\n                const newState: IStringListCompositeState = selectWithFilterCompositeReducer(\r\n                    oldState,\r\n                    unselectListBoxOption(stateId, stateValue)\r\n                );\r\n\r\n                expect(newState[stateId].list.length).toBe(0);\r\n            });\r\n        });\r\n\r\n        describe('CLEAR_ITEM_LIST_BOX', () => {\r\n            const oldStateTest: ISelectWithFilterCompositeState = {\r\n                [stateId]: {\r\n                    id: stateId,\r\n                    list: ['a', 'b', 'c'],\r\n                },\r\n            };\r\n\r\n            it('should clear the list if the id exist in the state', () => {\r\n                const newState: IStringListCompositeState = selectWithFilterCompositeReducer(\r\n                    oldStateTest,\r\n                    clearListBoxOption(stateId)\r\n                );\r\n\r\n                expect(newState[stateId].list.length).toBe(0);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=683.bundle.js.map