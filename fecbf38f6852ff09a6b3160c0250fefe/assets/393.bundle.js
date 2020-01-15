(window.webpackJsonp=window.webpackJsonp||[]).push([[393],{1490:function(t,e,r){"use strict";r.r(e),e.default="import {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {selectListBoxOption} from '../../listBox/ListBoxActions';\r\nimport {toggleSelect} from '../../select/SelectActions';\r\nimport {FilterActions, IChangeFilterActionPayload, IFilterActionPayload} from '../FilterBoxActions';\r\nimport {\r\n    filterBoxesReducer,\r\n    filterBoxInitialState,\r\n    filterBoxReducer,\r\n    filtersInitialState,\r\n    IFilterState,\r\n} from '../FilterBoxReducers';\r\n\r\ndescribe('FilterBox', () => {\r\n    describe('FilterBoxReducers', () => {\r\n        const genericAction: IReduxAction<IFilterActionPayload> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {\r\n                id: 'some-filter',\r\n            },\r\n        };\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const filtersState: IFilterState[] = filterBoxesReducer(undefined, genericAction);\r\n\r\n            expect(filtersState).toBe(filtersInitialState);\r\n        });\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined for one filter box', () => {\r\n            const filterBoxState: IFilterState = filterBoxReducer(undefined, genericAction);\r\n\r\n            expect(filterBoxState).toBe(filterBoxInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: IFilterState[] = [filterBoxInitialState];\r\n            const filtersState: IFilterState[] = filterBoxesReducer(oldState, genericAction);\r\n\r\n            expect(filtersState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined for one filter box', () => {\r\n            const oldState: IFilterState = filterBoxInitialState;\r\n            const filterBoxState: IFilterState = filterBoxReducer(oldState, genericAction);\r\n\r\n            expect(filterBoxState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined for one filter box but it exists in the state', () => {\r\n            const oldState: IFilterState = {...filterBoxInitialState, id: genericAction.payload.id};\r\n            const filterBoxState: IFilterState = filterBoxReducer(oldState, genericAction);\r\n\r\n            expect(filterBoxState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state with one more FilterState when the action is \"FilterActions.addFilter\"', () => {\r\n            let oldState: IFilterState[] = filtersInitialState;\r\n            const action: IReduxAction<IFilterActionPayload> = {\r\n                type: FilterActions.addFilter,\r\n                payload: {\r\n                    id: 'some-filter',\r\n                },\r\n            };\r\n            let filtersState: IFilterState[] = filterBoxesReducer(oldState, action);\r\n\r\n            expect(filtersState.length).toBe(oldState.length + 1);\r\n            expect(filtersState.filter((filterBox) => filterBox.id === action.payload.id).length).toBe(1);\r\n\r\n            oldState = filtersState;\r\n            action.payload.id = 'some-filter2';\r\n            filtersState = filterBoxesReducer(oldState, action);\r\n\r\n            expect(filtersState.length).toBe(oldState.length + 1);\r\n            expect(filtersState.filter((filterBox) => filterBox.id === action.payload.id).length).toBe(1);\r\n        });\r\n\r\n        it('should return the old state without the FilterState with the timer id when the action is \"FilterActions.removeFilter\"', () => {\r\n            let oldState: IFilterState[] = [\r\n                {\r\n                    id: 'some-filter2',\r\n                    filterText: '',\r\n                },\r\n                {\r\n                    id: 'some-filter1',\r\n                    filterText: 'sdf',\r\n                },\r\n                {\r\n                    id: 'some-filter3',\r\n                    filterText: '',\r\n                },\r\n            ];\r\n            const action: IReduxAction<IFilterActionPayload> = {\r\n                type: FilterActions.removeFilter,\r\n                payload: {\r\n                    id: 'some-filter1',\r\n                },\r\n            };\r\n            let filtersState: IFilterState[] = filterBoxesReducer(oldState, action);\r\n\r\n            expect(filtersState.length).toBe(oldState.length - 1);\r\n            expect(filtersState.filter((filterBox) => filterBox.id === action.payload.id).length).toBe(0);\r\n\r\n            oldState = filtersState;\r\n            action.payload.id = 'some-filter2';\r\n            filtersState = filterBoxesReducer(oldState, action);\r\n\r\n            expect(filtersState.length).toBe(oldState.length - 1);\r\n            expect(filtersState.filter((timer) => timer.id === action.payload.id).length).toBe(0);\r\n        });\r\n\r\n        it('should update the filter text of a filter box when the action is \"FilterActions.filterThrough\"', () => {\r\n            const oldState: IFilterState[] = [\r\n                {\r\n                    id: 'some-filter2',\r\n                    filterText: '',\r\n                },\r\n                {\r\n                    id: 'some-filter1',\r\n                    filterText: 'sdf',\r\n                },\r\n                {\r\n                    id: 'some-filter3',\r\n                    filterText: '',\r\n                },\r\n            ];\r\n            const newFilter = 'something';\r\n            const action: IReduxAction<IChangeFilterActionPayload> = {\r\n                type: FilterActions.filterThrough,\r\n                payload: {\r\n                    id: 'some-filter1',\r\n                    filterText: newFilter,\r\n                },\r\n            };\r\n            const filtersState: IFilterState[] = filterBoxesReducer(oldState, action);\r\n\r\n            expect(filtersState.length).toBe(oldState.length);\r\n            expect(filtersState.filter((filterBox) => filterBox.id === action.payload.id)[0].filterText).toBe(\r\n                newFilter\r\n            );\r\n        });\r\n\r\n        it('should clear the filter text of a filter box when the action is \"ListBoxActions.select\"', () => {\r\n            const id = 'some-filter';\r\n            const oldState: IFilterState[] = [\r\n                {\r\n                    id,\r\n                    filterText: 'some-value',\r\n                },\r\n            ];\r\n            const filtersState: IFilterState[] = filterBoxesReducer(\r\n                oldState,\r\n                selectListBoxOption(id, true, 'new value')\r\n            );\r\n\r\n            expect(filtersState[0].filterText).toBe('');\r\n        });\r\n\r\n        it('should clear the filter text of a filter box when the action is \"SelectActions.toggle\" and open is false', () => {\r\n            const id = 'some-filter';\r\n            const oldState: IFilterState[] = [\r\n                {\r\n                    id,\r\n                    filterText: 'some-value',\r\n                },\r\n            ];\r\n            const filtersState: IFilterState[] = filterBoxesReducer(oldState, toggleSelect(id, false));\r\n\r\n            expect(filtersState[0].filterText).toBe('');\r\n        });\r\n\r\n        it('should not clear the filter text of a filter box when the action is \"SelectActions.toggle\" but open is true', () => {\r\n            const id = 'some-filter';\r\n            const oldState: IFilterState[] = [\r\n                {\r\n                    id,\r\n                    filterText: 'some-value',\r\n                },\r\n            ];\r\n            const filtersState: IFilterState[] = filterBoxesReducer(oldState, toggleSelect(id, true));\r\n\r\n            expect(filtersState[0].filterText).not.toBe('');\r\n            expect(filtersState[0].filterText).toBe(oldState[0].filterText);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=393.bundle.js.map