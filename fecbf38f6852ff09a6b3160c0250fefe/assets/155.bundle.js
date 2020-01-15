(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{1258:function(t,e,o){"use strict";o.r(e),e.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {selectListBoxOption} from '../../listBox/ListBoxActions';\r\nimport {\r\n    addAutocomplete,\r\n    IAutocompletePayload,\r\n    removeAutocomplete,\r\n    setAutocompleteActive,\r\n    setAutocompleteValue,\r\n    toggleAutocomplete,\r\n} from '../AutocompleteActions';\r\nimport {\r\n    autocompleteCompositeInitialState,\r\n    autocompleteInitialState,\r\n    autocompleteReducer,\r\n    autocompletesReducer,\r\n    IAutocompleteState,\r\n} from '../AutocompleteReducers';\r\n\r\ndescribe('Autocomplete', () => {\r\n    describe('Autocomplete Reducers', () => {\r\n        const genericAction: IReduxAction<IAutocompletePayload> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {\r\n                id: 'autocomplete-id',\r\n            },\r\n        };\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const newState: IAutocompleteState[] = autocompletesReducer(undefined, genericAction);\r\n\r\n            expect(newState).toBe(autocompleteCompositeInitialState);\r\n        });\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined for one autocomplete', () => {\r\n            const newState: IAutocompleteState = autocompleteReducer(undefined, genericAction);\r\n\r\n            expect(newState).toBe(autocompleteInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: IAutocompleteState[] = [autocompleteInitialState];\r\n            const newState: IAutocompleteState[] = autocompletesReducer(oldState, genericAction);\r\n\r\n            expect(newState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined for one autocomplete', () => {\r\n            const oldState: IAutocompleteState = autocompleteInitialState;\r\n            const newState: IAutocompleteState = autocompleteReducer(oldState, genericAction);\r\n\r\n            expect(newState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined for one autocomplete which is in the state', () => {\r\n            const oldState: IAutocompleteState = {...autocompleteInitialState, id: genericAction.payload.id};\r\n            const newState: IAutocompleteState = autocompleteReducer(oldState, genericAction);\r\n\r\n            expect(newState).toBe(oldState);\r\n        });\r\n\r\n        describe('ADD_AUTOCOMPLETE', () => {\r\n            const id = 'added-autocomplete';\r\n\r\n            it('should return the old state with one more autocomplete', () => {\r\n                const oldState: IAutocompleteState[] = [autocompleteInitialState];\r\n                const newState: IAutocompleteState[] = autocompletesReducer(oldState, addAutocomplete(id));\r\n\r\n                expect(newState.length).toBe(oldState.length + 1);\r\n                expect(newState[1].id).toBe(id);\r\n            });\r\n\r\n            it('should not modify the old state', () => {\r\n                const oldState: IAutocompleteState[] = [autocompleteInitialState];\r\n                const oldStateBefore = _.clone(oldState);\r\n                autocompletesReducer(oldState, addAutocomplete(id));\r\n\r\n                expect(oldState).toEqual(oldStateBefore);\r\n            });\r\n        });\r\n\r\n        describe('REMOVE_AUTOCOMPLETE', () => {\r\n            const id = 'to-remove-autocomplete';\r\n            let defaultState: IAutocompleteState[];\r\n\r\n            beforeEach(() => {\r\n                defaultState = [_.extend({}, autocompleteInitialState, {id}), autocompleteInitialState];\r\n            });\r\n\r\n            it('should return the old state with one less autocomplete', () => {\r\n                const oldState: IAutocompleteState[] = defaultState;\r\n                const newState: IAutocompleteState[] = autocompletesReducer(oldState, removeAutocomplete(id));\r\n\r\n                expect(newState.length).toBe(oldState.length - 1);\r\n                expect(newState[0].id).not.toBe(id);\r\n            });\r\n\r\n            it('should not modify the old state', () => {\r\n                const oldState: IAutocompleteState[] = [autocompleteInitialState];\r\n                const oldStateBefore = _.clone(oldState);\r\n                autocompletesReducer(oldState, removeAutocomplete(id));\r\n\r\n                expect(oldState).toEqual(oldStateBefore);\r\n            });\r\n        });\r\n\r\n        describe('TOGGLE_AUTOCOMPLETE', () => {\r\n            const id = 'to-toggle-autocomplete';\r\n            let defaultState: IAutocompleteState[];\r\n\r\n            beforeEach(() => {\r\n                defaultState = [_.extend({}, autocompleteInitialState, {id, open: false}), autocompleteInitialState];\r\n            });\r\n\r\n            it('should toggle the open property if not specified', () => {\r\n                const oldState: IAutocompleteState[] = defaultState;\r\n                const newState: IAutocompleteState[] = autocompletesReducer(oldState, toggleAutocomplete(id));\r\n\r\n                expect(newState.length).toBe(oldState.length);\r\n                expect(newState[0].id).toBe(id);\r\n                expect(newState[0].open).toBe(true);\r\n\r\n                const newerState: IAutocompleteState[] = autocompletesReducer(newState, toggleAutocomplete(id));\r\n\r\n                expect(newerState.length).toBe(oldState.length);\r\n                expect(newerState[0].id).toBe(id);\r\n                expect(newerState[0].open).toBe(false);\r\n            });\r\n\r\n            it('should set the open property to specified value', () => {\r\n                const oldState: IAutocompleteState[] = defaultState;\r\n                const newState: IAutocompleteState[] = autocompletesReducer(oldState, toggleAutocomplete(id, false));\r\n\r\n                expect(newState.length).toBe(oldState.length);\r\n                expect(newState[0].id).toBe(id);\r\n                expect(newState[0].open).toBe(false);\r\n\r\n                const newerState: IAutocompleteState[] = autocompletesReducer(newState, toggleAutocomplete(id, true));\r\n\r\n                expect(newerState.length).toBe(oldState.length);\r\n                expect(newerState[0].id).toBe(id);\r\n                expect(newerState[0].open).toBe(true);\r\n            });\r\n\r\n            it('should not modify the old state', () => {\r\n                const oldState: IAutocompleteState[] = [autocompleteInitialState];\r\n                const oldStateBefore = _.clone(oldState);\r\n                autocompletesReducer(oldState, toggleAutocomplete(id));\r\n\r\n                expect(oldState).toEqual(oldStateBefore);\r\n            });\r\n        });\r\n\r\n        describe('SET_VALUE_AUTOCOMPLETE', () => {\r\n            const id = 'to-set-value-autocomplete';\r\n            let defaultState: IAutocompleteState[];\r\n\r\n            beforeEach(() => {\r\n                defaultState = [_.extend({}, autocompleteInitialState, {id, open: false}), autocompleteInitialState];\r\n            });\r\n\r\n            it('should set the value and set the open property to open', () => {\r\n                const expectedValue = 'new-value';\r\n                const oldState: IAutocompleteState[] = defaultState;\r\n                const newState: IAutocompleteState[] = autocompletesReducer(\r\n                    oldState,\r\n                    setAutocompleteValue(id, expectedValue, true)\r\n                );\r\n\r\n                expect(newState.length).toBe(oldState.length);\r\n                expect(newState[0].id).toBe(id);\r\n                expect(newState[0].open).toBe(true);\r\n                expect(newState[0].value).toBe(expectedValue);\r\n\r\n                const newerState: IAutocompleteState[] = autocompletesReducer(\r\n                    oldState,\r\n                    setAutocompleteValue(id, expectedValue, false)\r\n                );\r\n                expect(newerState.length).toBe(oldState.length);\r\n                expect(newerState[0].id).toBe(id);\r\n                expect(newerState[0].open).toBe(false);\r\n                expect(newerState[0].value).toBe(expectedValue);\r\n            });\r\n\r\n            it('should not modify the old state', () => {\r\n                const oldState: IAutocompleteState[] = [autocompleteInitialState];\r\n                const oldStateBefore = _.clone(oldState);\r\n                autocompletesReducer(oldState, setAutocompleteValue(id, '¯_(ツ)_/¯', true));\r\n\r\n                expect(oldState).toEqual(oldStateBefore);\r\n            });\r\n        });\r\n\r\n        describe('SET_ACTIVE_AUTOCOMPLETE', () => {\r\n            const id = 'to-set-active-autocomplete';\r\n            let defaultState: IAutocompleteState[];\r\n\r\n            beforeEach(() => {\r\n                defaultState = [_.extend({}, autocompleteInitialState, {id, open: false}), autocompleteInitialState];\r\n            });\r\n\r\n            it('should set the active and set the open property to true', () => {\r\n                const expectedValue = -1;\r\n                defaultState[0].active = 0;\r\n                const oldState: IAutocompleteState[] = defaultState;\r\n                const newState: IAutocompleteState[] = autocompletesReducer(\r\n                    oldState,\r\n                    setAutocompleteActive(id, expectedValue)\r\n                );\r\n\r\n                expect(newState.length).toBe(oldState.length);\r\n                expect(newState[0].id).toBe(id);\r\n                expect(newState[0].open).toBe(true);\r\n                expect(newState[0].active).toBe(expectedValue);\r\n            });\r\n\r\n            it('should set the active to 0 if the diff is 1 and set the active is undefined in the state', () => {\r\n                const expectedValue = 0;\r\n                defaultState[0].active = undefined;\r\n                const oldState: IAutocompleteState[] = defaultState;\r\n                const newState: IAutocompleteState[] = autocompletesReducer(oldState, setAutocompleteActive(id, 1));\r\n\r\n                expect(newState.length).toBe(oldState.length);\r\n                expect(newState[0].id).toBe(id);\r\n                expect(newState[0].open).toBe(true);\r\n                expect(newState[0].active).toBe(expectedValue);\r\n            });\r\n\r\n            it('should modify  the active to 0 if the diff is 1 and set the active is undefined in the state', () => {\r\n                const expectedValue = -1;\r\n                defaultState[0].active = undefined;\r\n                const oldState: IAutocompleteState[] = defaultState;\r\n                const newState: IAutocompleteState[] = autocompletesReducer(oldState, setAutocompleteActive(id, -1));\r\n\r\n                expect(newState.length).toBe(oldState.length);\r\n                expect(newState[0].id).toBe(id);\r\n                expect(newState[0].open).toBe(true);\r\n                expect(newState[0].active).toBe(expectedValue);\r\n            });\r\n\r\n            it('should not modify the old state', () => {\r\n                const oldState: IAutocompleteState[] = [autocompleteInitialState];\r\n                const oldStateBefore = _.clone(oldState);\r\n                autocompletesReducer(oldState, setAutocompleteActive(id, 1));\r\n\r\n                expect(oldState).toEqual(oldStateBefore);\r\n            });\r\n        });\r\n\r\n        // The Autocomplete Reducer closes itself when a list box item is selected\r\n        describe('SELECT_ITEM_LIST_BOX', () => {\r\n            const id = 'list-box-id';\r\n            let defaultState: IAutocompleteState[];\r\n\r\n            beforeEach(() => {\r\n                defaultState = [_.extend({}, autocompleteInitialState, {id, open: true}), autocompleteInitialState];\r\n            });\r\n\r\n            it('should set the open property to true', () => {\r\n                const oldState: IAutocompleteState[] = defaultState;\r\n                const newState: IAutocompleteState[] = autocompletesReducer(\r\n                    oldState,\r\n                    selectListBoxOption(id, false, 'anything')\r\n                );\r\n\r\n                expect(newState.length).toBe(oldState.length);\r\n                expect(newState[0].id).toBe(id);\r\n                expect(newState[0].open).toBe(false);\r\n            });\r\n\r\n            it('should not throw if the the open property is already false', () => {\r\n                const state = _.clone(defaultState);\r\n                state[0].open = false;\r\n\r\n                const oldState: IAutocompleteState[] = state;\r\n                let newState: IAutocompleteState[] = [];\r\n                expect(\r\n                    () => (newState = autocompletesReducer(oldState, selectListBoxOption(id, false, 'value')))\r\n                ).not.toThrow();\r\n\r\n                expect(newState.length).toBe(oldState.length);\r\n                expect(newState[0].id).toBe(id);\r\n                expect(newState[0].open).toBe(false);\r\n            });\r\n\r\n            it('should not modify the old state', () => {\r\n                const oldState: IAutocompleteState[] = [autocompleteInitialState];\r\n                const oldStateBefore = _.clone(oldState);\r\n                autocompletesReducer(oldState, selectListBoxOption(id, false, 'abc'));\r\n\r\n                expect(oldState).toEqual(oldStateBefore);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=155.bundle.js.map