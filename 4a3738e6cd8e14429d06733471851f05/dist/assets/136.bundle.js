(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{1232:function(t,e,i){"use strict";i.r(e),e.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../../../utils/ReduxUtils';\r\nimport {IItemFilterActionPayload, IItemFilteringActionPayload, ItemFilterActions} from '../ItemFilterActions';\r\nimport {\r\n    IItemFilterState,\r\n    itemFilterOriginalState,\r\n    itemFilterReducer,\r\n    itemFiltersOriginalState,\r\n    itemFiltersReducer,\r\n} from '../ItemFilterReducers';\r\n\r\ndescribe('Item filters', () => {\r\n    const genericAction: IReduxAction<IItemFilterActionPayload> = {\r\n        type: 'DO_SOMETHING',\r\n        payload: {\r\n            id: 'some-filter',\r\n        },\r\n    };\r\n\r\n    describe('itemFiltersReducer', () => {\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const oldState: IItemFilterState[] = undefined;\r\n            const itemFilterState: IItemFilterState[] = itemFiltersReducer(oldState, genericAction);\r\n\r\n            expect(itemFilterState).toBe(itemFiltersOriginalState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: IItemFilterState[] = [{id: 'some-filter', item: ''}];\r\n            const itemFilterState: IItemFilterState[] = itemFiltersReducer(oldState, genericAction);\r\n\r\n            expect(itemFilterState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state with one more ItemFilterState when the action is \"ADD_ITEM_FILTER\"', () => {\r\n            let oldState: IItemFilterState[] = itemFiltersOriginalState;\r\n            const action: IReduxAction<IItemFilterActionPayload> = {\r\n                type: ItemFilterActions.add,\r\n                payload: {\r\n                    id: 'some-filter',\r\n                },\r\n            };\r\n            let itemFilterState: IItemFilterState[] = itemFiltersReducer(oldState, action);\r\n\r\n            expect(itemFilterState.length).toBe(oldState.length + 1);\r\n            expect(itemFilterState.filter((itemFilter) => itemFilter.id === action.payload.id).length).toBe(1);\r\n\r\n            oldState = itemFilterState;\r\n            action.payload.id = 'some-filter2';\r\n            itemFilterState = itemFiltersReducer(oldState, action);\r\n\r\n            expect(itemFilterState.length).toBe(oldState.length + 1);\r\n            expect(itemFilterState.filter((itemFilter) => itemFilter.id === action.payload.id).length).toBe(1);\r\n        });\r\n\r\n        it('should return the old state without the ItemFilterState when the action is \"REMOVE_ITEM_FILTER', () => {\r\n            let oldState: IItemFilterState[] = [\r\n                {\r\n                    id: 'some-filter2',\r\n                    item: '',\r\n                },\r\n                {\r\n                    id: 'some-filter',\r\n                    item: '',\r\n                },\r\n                {\r\n                    id: 'some-filter3',\r\n                    item: '',\r\n                },\r\n            ];\r\n            const action: IReduxAction<IItemFilterActionPayload> = {\r\n                type: ItemFilterActions.remove,\r\n                payload: {\r\n                    id: 'some-filter',\r\n                },\r\n            };\r\n            let itemFilterState: IItemFilterState[] = itemFiltersReducer(oldState, action);\r\n\r\n            expect(itemFilterState.length).toBe(oldState.length - 1);\r\n            expect(itemFilterState.filter((itemFilter) => itemFilter.id === action.payload.id).length).toBe(0);\r\n\r\n            oldState = itemFilterState;\r\n            action.payload.id = 'some-filter2';\r\n            itemFilterState = itemFiltersReducer(oldState, action);\r\n\r\n            expect(itemFilterState.length).toBe(oldState.length - 1);\r\n            expect(itemFilterState.filter((itemFilter) => itemFilter.id === action.payload.id).length).toBe(0);\r\n        });\r\n\r\n        it('should return the old state when the action is \"REMOVE_ITEM_FILTER\" and the filter id does not exist', () => {\r\n            const oldState: IItemFilterState[] = [\r\n                {\r\n                    id: 'some-filter2',\r\n                    item: '',\r\n                },\r\n                {\r\n                    id: 'some-filter',\r\n                    item: '',\r\n                },\r\n                {\r\n                    id: 'some-filter3',\r\n                    item: '',\r\n                },\r\n            ];\r\n            const action: IReduxAction<IItemFilterActionPayload> = {\r\n                type: ItemFilterActions.remove,\r\n                payload: {\r\n                    id: 'some-filter4',\r\n                },\r\n            };\r\n            const itemFilterState: IItemFilterState[] = itemFiltersReducer(oldState, action);\r\n\r\n            expect(itemFilterState.length).toBe(oldState.length);\r\n            expect(itemFilterState.filter((itemFilter) => itemFilter.id === action.payload.id).length).toBe(0);\r\n        });\r\n\r\n        it('should return the state with the new item for the filter with the action id when the action is \"FILTER_ITEMS\"', () => {\r\n            const oldState: IItemFilterState[] = [\r\n                {\r\n                    id: 'some-filter2',\r\n                    item: '',\r\n                },\r\n                {\r\n                    id: 'some-filter',\r\n                    item: '',\r\n                },\r\n                {\r\n                    id: 'some-filter3',\r\n                    item: '',\r\n                },\r\n            ];\r\n            const action: IReduxAction<IItemFilteringActionPayload> = {\r\n                type: ItemFilterActions.filter,\r\n                payload: {\r\n                    id: 'some-filter',\r\n                    item: 'new item',\r\n                },\r\n            };\r\n            const itemFilterState: IItemFilterState[] = itemFiltersReducer(oldState, action);\r\n            expect(_.findWhere(itemFilterState, {id: action.payload.id}).item).toBe(action.payload.item);\r\n            expect(itemFilterState.filter((itemFilter) => itemFilter.id !== action.payload.id).length).toBe(2);\r\n        });\r\n\r\n        it('should not change the original state', () => {\r\n            const expectedState = itemFiltersOriginalState.slice(0);\r\n            const action: IReduxAction<IItemFilterActionPayload> = {\r\n                type: ItemFilterActions.add,\r\n                payload: {\r\n                    id: 'some-filter',\r\n                },\r\n            };\r\n            itemFiltersReducer(itemFiltersOriginalState, action);\r\n\r\n            expect(expectedState).toEqual(itemFiltersOriginalState);\r\n        });\r\n    });\r\n\r\n    describe('itemFilterReducer', () => {\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const oldState: IItemFilterState = undefined;\r\n            const itemFilterState: IItemFilterState = itemFilterReducer(oldState, genericAction);\r\n\r\n            expect(itemFilterState).toBe(itemFilterOriginalState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: IItemFilterState = {id: 'some-filter', item: ''};\r\n            const itemFilterState: IItemFilterState = itemFilterReducer(oldState, genericAction);\r\n\r\n            expect(itemFilterState).toBe(oldState);\r\n        });\r\n\r\n        it('should return a new item filter with the specified id and an empty item when the action is \"ADD_ITEM_FILTER\"', () => {\r\n            const oldState: IItemFilterState = itemFilterOriginalState;\r\n            const action: IReduxAction<IItemFilterActionPayload> = {\r\n                type: ItemFilterActions.add,\r\n                payload: {\r\n                    id: 'some-filter',\r\n                },\r\n            };\r\n            const itemFilterState: IItemFilterState = itemFilterReducer(oldState, action);\r\n\r\n            expect(itemFilterState.id).toBe(action.payload.id);\r\n            expect(itemFilterState.item).toBe('');\r\n        });\r\n\r\n        it('should return the original state if the action is \"FILTER_ITEMS\" and the id is not the one specified in the action', () => {\r\n            const oldState: IItemFilterState = {\r\n                id: 'some-filter2',\r\n                item: '',\r\n            };\r\n            const action: IReduxAction<IItemFilteringActionPayload> = {\r\n                type: ItemFilterActions.filter,\r\n                payload: {\r\n                    id: 'some-filter',\r\n                    item: 'new item',\r\n                },\r\n            };\r\n            const itemFilterState: IItemFilterState = itemFilterReducer(oldState, action);\r\n\r\n            expect(itemFilterState.item).toBe(oldState.item);\r\n        });\r\n\r\n        it('should return the item filter with a new item when the action is \"FILTER_ITEMS\" and the id is the one specified', () => {\r\n            const oldState: IItemFilterState = {\r\n                id: 'some-filter',\r\n                item: '',\r\n            };\r\n            const action: IReduxAction<IItemFilteringActionPayload> = {\r\n                type: ItemFilterActions.filter,\r\n                payload: {\r\n                    id: 'some-filter',\r\n                    item: 'new item',\r\n                },\r\n            };\r\n            const itemFilterState: IItemFilterState = itemFilterReducer(oldState, action);\r\n\r\n            expect(itemFilterState.item).toBe(action.payload.item);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=136.bundle.js.map