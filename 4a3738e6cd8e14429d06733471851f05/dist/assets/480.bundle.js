(window.webpackJsonp=window.webpackJsonp||[]).push([[480],{1569:function(t,e,n){"use strict";n.r(e),e.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {setAutocompleteValue} from '../../autocomplete/AutocompleteActions';\r\nimport {\r\n    addListBox,\r\n    clearListBoxOption,\r\n    IListBoxPayload,\r\n    removeListBox,\r\n    reorderListBoxOption,\r\n    selectListBoxOption,\r\n    setActiveListBoxOption,\r\n    unselectListBoxOption,\r\n} from '../ListBoxActions';\r\nimport {\r\n    IListBoxState,\r\n    listBoxesInitialState,\r\n    listBoxesReducer,\r\n    listBoxInitialState,\r\n    listBoxReducer,\r\n} from '../ListBoxReducers';\r\n\r\ndescribe('ListBox', () => {\r\n    describe('ListBox Reducers', () => {\r\n        const genericAction: IReduxAction<IListBoxPayload> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {\r\n                id: 'list-box-id',\r\n            },\r\n        };\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const newState: IListBoxState[] = listBoxesReducer(undefined, genericAction);\r\n\r\n            expect(newState).toBe(listBoxesInitialState);\r\n        });\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined for one list box', () => {\r\n            const newState: IListBoxState = listBoxReducer(undefined, genericAction);\r\n\r\n            expect(newState).toBe(listBoxInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: IListBoxState[] = [listBoxInitialState];\r\n            const newState: IListBoxState[] = listBoxesReducer(oldState, genericAction);\r\n\r\n            expect(newState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined for one list box', () => {\r\n            const oldState: IListBoxState = listBoxInitialState;\r\n            const newState: IListBoxState = listBoxReducer(oldState, genericAction);\r\n\r\n            expect(newState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined for one list box which is in the state', () => {\r\n            const oldState: IListBoxState = {...listBoxInitialState, id: genericAction.payload.id};\r\n            const newState: IListBoxState = listBoxReducer(oldState, genericAction);\r\n\r\n            expect(newState).toBe(oldState);\r\n        });\r\n\r\n        describe('ADD_LIST_BOX', () => {\r\n            const id = 'added-list-box';\r\n            const items = [{value: 'a'}, {value: 'b', selected: true}];\r\n            const selected = _.chain(items)\r\n                .where({selected: true})\r\n                .pluck('value')\r\n                .value();\r\n\r\n            it('should return the old state with one more list box', () => {\r\n                const oldState: IListBoxState[] = [listBoxInitialState];\r\n                const newState: IListBoxState[] = listBoxesReducer(oldState, addListBox(id, items));\r\n\r\n                expect(newState.length).toBe(oldState.length + 1);\r\n                expect(newState[1].id).toBe(id);\r\n            });\r\n\r\n            it('should set the selected when there is one in the action', () => {\r\n                const oldState: IListBoxState[] = [listBoxInitialState];\r\n                const newState: IListBoxState[] = listBoxesReducer(oldState, addListBox(id, items));\r\n\r\n                expect(newState.length).toBe(oldState.length + 1);\r\n                expect(newState[1].id).toBe(id);\r\n                expect(newState[1].selected).toEqual(selected);\r\n            });\r\n\r\n            it('should not modify the old state', () => {\r\n                const oldState: IListBoxState[] = [listBoxInitialState];\r\n                const oldStateBefore = _.clone(oldState);\r\n                listBoxesReducer(oldState, addListBox(id, items));\r\n\r\n                expect(oldState).toEqual(oldStateBefore);\r\n            });\r\n        });\r\n\r\n        describe('REMOVE_LIST_BOX', () => {\r\n            const id = 'exisiting-list-box';\r\n            let defaultState: IListBoxState[];\r\n\r\n            beforeEach(() => {\r\n                defaultState = [_.extend({}, listBoxInitialState, {id, selected: []}), listBoxInitialState];\r\n            });\r\n\r\n            it('should return the old state with one less list box', () => {\r\n                const oldState: IListBoxState[] = defaultState;\r\n                const newState: IListBoxState[] = listBoxesReducer(oldState, removeListBox(id));\r\n\r\n                expect(newState.length).toBe(oldState.length - 1);\r\n                expect(newState[0].id).not.toBe(id);\r\n            });\r\n\r\n            it('should not modify the old state', () => {\r\n                const oldState: IListBoxState[] = defaultState;\r\n                const oldStateBefore = _.clone(oldState);\r\n                listBoxesReducer(oldState, removeListBox(id));\r\n\r\n                expect(oldState).toEqual(oldStateBefore);\r\n            });\r\n        });\r\n\r\n        describe('SELECT_ITEM_LIST_BOX', () => {\r\n            const id = 'list-box-id';\r\n            const items = [\r\n                {value: 'a'},\r\n                {value: 'b', selected: true},\r\n                {value: 'c'},\r\n                {value: 'd', disabled: true},\r\n                {value: 'e'},\r\n            ];\r\n            const selected = _.chain(items)\r\n                .where({selected: true})\r\n                .pluck('value')\r\n                .value();\r\n            let defaultState: IListBoxState[];\r\n\r\n            beforeEach(() => {\r\n                defaultState = [_.extend({}, listBoxInitialState, {id, selected}), listBoxInitialState];\r\n            });\r\n\r\n            it('should select the new item when the list box is not multi', () => {\r\n                const expectedValue = items[0].value;\r\n                const oldState: IListBoxState[] = defaultState;\r\n                const newState: IListBoxState[] = listBoxesReducer(\r\n                    oldState,\r\n                    selectListBoxOption(id, false, expectedValue)\r\n                );\r\n\r\n                expect(newState.length).toBe(oldState.length);\r\n                expect(newState[0].id).toBe(id);\r\n\r\n                expect(newState[0].selected.length).toBe(1);\r\n                expect(newState[0].selected[0]).toBe(expectedValue);\r\n            });\r\n\r\n            it('should select the new item (and the old one) when the list box is multi', () => {\r\n                const newValue = items[0].value;\r\n                const oldState: IListBoxState[] = defaultState;\r\n                const newState: IListBoxState[] = listBoxesReducer(oldState, selectListBoxOption(id, true, newValue));\r\n\r\n                expect(newState.length).toBe(oldState.length);\r\n                expect(newState[0].id).toBe(id);\r\n\r\n                expect(newState[0].selected.length).toBe(2, 'length');\r\n                expect(newState[0].selected).toEqual([items[1].value, newValue]);\r\n            });\r\n\r\n            it('should activate the new item when the list box is not multi', () => {\r\n                const expectedValue = items[2].value;\r\n                const oldState: IListBoxState[] = defaultState;\r\n                const newState: IListBoxState[] = listBoxesReducer(\r\n                    oldState,\r\n                    selectListBoxOption(id, false, expectedValue, 2)\r\n                );\r\n\r\n                expect(newState.length).toBe(oldState.length);\r\n                expect(newState[0].id).toBe(id);\r\n\r\n                expect(newState[0].selected.length).toBe(1);\r\n                expect(newState[0].selected[0]).toBe(expectedValue);\r\n                expect(newState[0].active).toBe(2);\r\n            });\r\n\r\n            it('should not activate the new item (and the old one) when the list box is multi', () => {\r\n                const newValue = items[2].value;\r\n                const oldState: IListBoxState[] = defaultState;\r\n                const newState: IListBoxState[] = listBoxesReducer(\r\n                    oldState,\r\n                    selectListBoxOption(id, true, newValue, 2)\r\n                );\r\n\r\n                expect(newState.length).toBe(oldState.length);\r\n                expect(newState[0].id).toBe(id);\r\n\r\n                expect(newState[0].selected.length).toBe(2, 'length');\r\n                expect(newState[0].selected).toEqual([items[1].value, newValue]);\r\n                expect(newState[0].active).toBe(null);\r\n            });\r\n\r\n            it('should not modify the old state', () => {\r\n                const oldState: IListBoxState[] = _.clone(defaultState);\r\n                listBoxesReducer(oldState, selectListBoxOption(id, false, items[0].value));\r\n\r\n                expect(oldState).toEqual(defaultState);\r\n            });\r\n        });\r\n\r\n        describe('SET_VALUE_AUTOCOMPLETE', () => {\r\n            const id = 'list-box-id';\r\n            const items = [{value: 'a'}, {value: 'b', selected: true}];\r\n            const selected = _.chain(items)\r\n                .where({selected: true})\r\n                .pluck('value')\r\n                .value();\r\n            let defaultState: IListBoxState[];\r\n\r\n            beforeEach(() => {\r\n                defaultState = [_.extend({}, listBoxInitialState, {id, selected}), listBoxInitialState];\r\n            });\r\n\r\n            it('should select the new item', () => {\r\n                const expectedValue = items[0].value;\r\n                const oldState: IListBoxState[] = defaultState;\r\n                const newState: IListBoxState[] = listBoxesReducer(\r\n                    oldState,\r\n                    setAutocompleteValue(id, expectedValue, false)\r\n                );\r\n\r\n                expect(newState.length).toBe(oldState.length);\r\n                expect(newState[0].id).toBe(id);\r\n\r\n                expect(newState[0].selected.length).toBe(1);\r\n                expect(newState[0].selected[0]).toBe(expectedValue);\r\n            });\r\n\r\n            it('should not modify the old state', () => {\r\n                const oldState: IListBoxState[] = _.clone(defaultState);\r\n                listBoxesReducer(oldState, setAutocompleteValue(id, items[0].value, true));\r\n\r\n                expect(oldState).toEqual(defaultState);\r\n            });\r\n        });\r\n\r\n        describe('UNSELECT_ITEM_LIST_BOX', () => {\r\n            const id = 'list-box-id';\r\n            const items = [{value: 'a'}, {value: 'b', selected: true}];\r\n            let defaultState: IListBoxState[];\r\n            let selected: any[];\r\n\r\n            beforeEach(() => {\r\n                selected = _.chain(items)\r\n                    .where({selected: true})\r\n                    .pluck('value')\r\n                    .value();\r\n                defaultState = [_.extend({}, listBoxInitialState, {id, selected}), listBoxInitialState];\r\n            });\r\n\r\n            it('should unselect the item if selected', () => {\r\n                const oldState: IListBoxState[] = defaultState;\r\n                const newState: IListBoxState[] = listBoxesReducer(oldState, unselectListBoxOption(id, selected[0]));\r\n\r\n                expect(newState.length).toBe(oldState.length);\r\n                expect(newState[0].id).toBe(id);\r\n                expect(newState[0].selected.length).toBe(0);\r\n            });\r\n\r\n            it('should unselect the correct item when more than one is selected', () => {\r\n                const toUnselect = items[1].value;\r\n                const expected = items[0].value;\r\n\r\n                const state = _.clone(defaultState);\r\n                state[0].selected.push(expected);\r\n                const oldState: IListBoxState[] = state;\r\n                const newState: IListBoxState[] = listBoxesReducer(oldState, unselectListBoxOption(id, toUnselect));\r\n\r\n                expect(newState.length).toBe(oldState.length);\r\n                expect(newState[0].id).toBe(id);\r\n                expect(newState[0].selected.length).toBe(1);\r\n                expect(newState[0].selected[0]).toBe(expected);\r\n            });\r\n\r\n            it('should not unselect the item if its not selected', () => {\r\n                const oldState: IListBoxState[] = defaultState;\r\n                const newState: IListBoxState[] = listBoxesReducer(oldState, unselectListBoxOption(id, items[0].value));\r\n\r\n                expect(newState.length).toBe(oldState.length);\r\n                expect(newState[0].id).toBe(id);\r\n                expect(newState[0].selected.length).toBe(1);\r\n                expect(newState[0].selected[0]).toBe(selected[0]);\r\n            });\r\n\r\n            it('should not modify the old state', () => {\r\n                const oldState: IListBoxState[] = _.clone(defaultState);\r\n                listBoxesReducer(oldState, unselectListBoxOption(id, selected[0]));\r\n\r\n                expect(oldState).toEqual(defaultState);\r\n            });\r\n        });\r\n\r\n        describe('REORDER_ITEM_LIST_BOX', () => {\r\n            const id = 'list-box-id';\r\n            const items = [\r\n                {value: 'a', selected: true},\r\n                {value: 'b', selected: true},\r\n            ];\r\n            const selected = _.chain(items)\r\n                .where({selected: true})\r\n                .pluck('value')\r\n                .value();\r\n            let defaultState: IListBoxState[];\r\n\r\n            beforeEach(() => {\r\n                defaultState = [_.extend({}, listBoxInitialState, {id, selected}), listBoxInitialState];\r\n            });\r\n\r\n            it('should reorder with the new values', () => {\r\n                const oldState: IListBoxState[] = defaultState;\r\n                const newOrder = [selected[1], selected[0]];\r\n                const newState: IListBoxState[] = listBoxesReducer(oldState, reorderListBoxOption(id, newOrder));\r\n\r\n                expect(newState.length).toBe(oldState.length);\r\n                expect(newState[0].selected.length).toBe(2);\r\n                expect(newState[0].selected[0]).toBe(newOrder[0]);\r\n                expect(newState[0].selected[1]).toBe(newOrder[1]);\r\n            });\r\n\r\n            it('should not modify the old state', () => {\r\n                const oldState: IListBoxState[] = _.clone(defaultState);\r\n                listBoxesReducer(oldState, reorderListBoxOption(id, selected[0]));\r\n\r\n                expect(oldState).toEqual(defaultState);\r\n            });\r\n        });\r\n\r\n        describe('SET_ACTIVE_ITEM_LIST_BOX', () => {\r\n            const id = 'list-box-id';\r\n            const items = [\r\n                {value: 'a', selected: true},\r\n                {value: 'b', selected: true},\r\n            ];\r\n            const selected = _.chain(items)\r\n                .where({selected: true})\r\n                .pluck('value')\r\n                .value();\r\n            let defaultState: IListBoxState[];\r\n\r\n            beforeEach(() => {\r\n                defaultState = [_.extend({}, listBoxInitialState, {id, selected}), listBoxInitialState];\r\n            });\r\n\r\n            it('should set the active to 0 if the diff is 1 and set the active is undefined in the state', () => {\r\n                const expectedValue = 0;\r\n                defaultState[0].active = undefined;\r\n                const oldState: IListBoxState[] = defaultState;\r\n                const newState: IListBoxState[] = listBoxesReducer(oldState, setActiveListBoxOption(id, 1));\r\n\r\n                expect(newState.length).toBe(oldState.length);\r\n                expect(newState[0].id).toBe(id);\r\n                expect(newState[0].active).toBe(expectedValue);\r\n            });\r\n\r\n            it('should modify  the active to 0 if the diff is 1 and set the active is undefined in the state', () => {\r\n                const expectedValue = -1;\r\n                defaultState[0].active = undefined;\r\n                const oldState: IListBoxState[] = defaultState;\r\n                const newState: IListBoxState[] = listBoxesReducer(oldState, setActiveListBoxOption(id, -1));\r\n\r\n                expect(newState.length).toBe(oldState.length);\r\n                expect(newState[0].id).toBe(id);\r\n                expect(newState[0].active).toBe(expectedValue);\r\n            });\r\n\r\n            it('should increment the active from the state by 1 if the diff is 1', () => {\r\n                const initialValue = 5;\r\n                const increment = 1;\r\n                const expectedValue = initialValue + increment;\r\n\r\n                defaultState[0].active = initialValue;\r\n                const oldState: IListBoxState[] = defaultState;\r\n                const newState: IListBoxState[] = listBoxesReducer(oldState, setActiveListBoxOption(id, increment));\r\n\r\n                expect(newState.length).toBe(oldState.length);\r\n                expect(newState[0].id).toBe(id);\r\n                expect(newState[0].active).toBe(expectedValue);\r\n            });\r\n\r\n            it('should not modify the old state', () => {\r\n                const oldState: IListBoxState[] = [listBoxInitialState];\r\n                const oldStateBefore = _.clone(oldState);\r\n                listBoxesReducer(oldState, setActiveListBoxOption(id, 1));\r\n\r\n                expect(oldState).toEqual(oldStateBefore);\r\n            });\r\n        });\r\n\r\n        describe('CLEAR_ITEM_LIST_BOX', () => {\r\n            const id = 'list-box-id';\r\n            const items = [{value: 'a'}, {value: 'b', selected: true}];\r\n\r\n            it('should unselect the selected item', () => {\r\n                const selected = items[1].value;\r\n                const oldState: IListBoxState[] = [\r\n                    _.extend({}, listBoxInitialState, {id, selected: [selected]}),\r\n                    listBoxInitialState,\r\n                ];\r\n                const newState: IListBoxState[] = listBoxesReducer(oldState, clearListBoxOption(id));\r\n\r\n                expect(newState.length).toBe(oldState.length);\r\n                expect(newState[0].id).toBe(id);\r\n                expect(newState[0].selected.length).toBe(0);\r\n            });\r\n\r\n            it('should unselect all items when there is more than one', () => {\r\n                const selected = _.pluck(items, 'value');\r\n                const oldState: IListBoxState[] = [\r\n                    _.extend({}, listBoxInitialState, {id, selected}),\r\n                    listBoxInitialState,\r\n                ];\r\n                const newState: IListBoxState[] = listBoxesReducer(oldState, clearListBoxOption(id));\r\n\r\n                expect(newState.length).toBe(oldState.length);\r\n                expect(newState[0].id).toBe(id);\r\n                expect(newState[0].selected.length).toBe(0);\r\n            });\r\n\r\n            it('should not modify the old state', () => {\r\n                const selected = _.pluck(items, 'value');\r\n                const defaultState = [_.extend({}, listBoxInitialState, {id, selected}), listBoxInitialState];\r\n                const oldState: IListBoxState[] = _.clone(defaultState);\r\n                listBoxesReducer(oldState, clearListBoxOption(id));\r\n\r\n                expect(oldState).toEqual(defaultState);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=480.bundle.js.map