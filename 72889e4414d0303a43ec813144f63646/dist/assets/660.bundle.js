(window.webpackJsonp=window.webpackJsonp||[]).push([[660],{1752:function(e,a,r){"use strict";r.r(a),a.default="import {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {\r\n    addSearchBar,\r\n    ISearchBarActionPayload,\r\n    removeSearchBar,\r\n    setSearchBarValue,\r\n    toggleSearchBarDisabled,\r\n    toggleSearching,\r\n} from './SearchBarActions';\r\nimport {ISearchBarState, searchBarDefaultState, searchBarsInitialState, searchBarsReducer} from './SearchBarReducers';\r\n\r\ndescribe('Reducers', () => {\r\n    describe('SearchBarReducers', () => {\r\n        const genericAction: IReduxAction<ISearchBarActionPayload> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {\r\n                id: 'searching something',\r\n            },\r\n        };\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined ', () => {\r\n            const searchBarState: ISearchBarState[] = searchBarsReducer(undefined, genericAction);\r\n\r\n            expect(searchBarState).toEqual(searchBarsInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined for the searchBar state', () => {\r\n            const oldState: ISearchBarState[] = [\r\n                {\r\n                    id: 'some-searchBar',\r\n                    searching: false,\r\n                    disabled: false,\r\n                    value: 'anywoulddo',\r\n                },\r\n            ];\r\n            const searchBarState: ISearchBarState[] = searchBarsReducer(oldState, genericAction);\r\n\r\n            expect(searchBarState).toEqual(oldState);\r\n        });\r\n\r\n        it('should add the searchBar in the state on addSearchBar', () => {\r\n            const searchBarState: ISearchBarState[] = searchBarsReducer(undefined, addSearchBar('search-bar'));\r\n\r\n            expect(searchBarState[0]).toEqual({...searchBarDefaultState, id: 'search-bar'});\r\n        });\r\n\r\n        it('should add the searchBar in the state on addSearchBar with disabled is passed on addSearchBar', () => {\r\n            const searchBarState: ISearchBarState[] = searchBarsReducer(undefined, addSearchBar('search-bar', true));\r\n\r\n            expect(searchBarState[0]).toEqual({...searchBarDefaultState, id: 'search-bar', disabled: true});\r\n        });\r\n\r\n        it('should remove the searchBar in the state on removeSearchBar', () => {\r\n            const oldState = [\r\n                {...searchBarDefaultState, id: 'search-bar'},\r\n                {...searchBarDefaultState, id: 'search-bar-2'},\r\n            ];\r\n            const searchBarState: ISearchBarState[] = searchBarsReducer(oldState, removeSearchBar('search-bar'));\r\n\r\n            expect(searchBarState[0]).toEqual(oldState[1]);\r\n            expect(searchBarState.length).toBe(oldState.length - 1);\r\n        });\r\n\r\n        it('should toggle the searching property of the searchBar with the id passed in the payload', () => {\r\n            let oldState = [\r\n                {...searchBarDefaultState, id: 'search-bar'},\r\n                {...searchBarDefaultState, id: 'search-bar-2'},\r\n            ];\r\n            let newState: ISearchBarState[] = searchBarsReducer(\r\n                oldState,\r\n                toggleSearching('search-bar', !oldState[0].searching)\r\n            );\r\n\r\n            expect(newState[0].searching).toBe(!oldState[0].searching);\r\n            expect(newState[1].searching).toBe(oldState[1].searching);\r\n\r\n            oldState = [...newState];\r\n            newState = searchBarsReducer(oldState, toggleSearching('search-bar-2', !oldState[1].searching));\r\n\r\n            expect(newState[0].searching).toBe(oldState[0].searching);\r\n            expect(newState[1].searching).toBe(!oldState[1].searching);\r\n\r\n            oldState = [...newState];\r\n            const thisIsObsolete = true;\r\n            newState = searchBarsReducer(oldState, toggleSearching('unknown-search-bar', thisIsObsolete));\r\n\r\n            expect(newState).toEqual(oldState);\r\n        });\r\n\r\n        it('should toggle the disabled property of the searchBar with the id passed in the payload', () => {\r\n            let oldState = [\r\n                {...searchBarDefaultState, id: 'search-bar'},\r\n                {...searchBarDefaultState, id: 'search-bar-2'},\r\n            ];\r\n            let newState: ISearchBarState[] = searchBarsReducer(\r\n                oldState,\r\n                toggleSearchBarDisabled('search-bar', !oldState[0].disabled)\r\n            );\r\n\r\n            expect(newState[0].disabled).toBe(!oldState[0].disabled);\r\n            expect(newState[1].disabled).toBe(oldState[1].disabled);\r\n\r\n            oldState = [...newState];\r\n            newState = searchBarsReducer(oldState, toggleSearchBarDisabled('search-bar-2', !oldState[1].disabled));\r\n\r\n            expect(newState[0].disabled).toBe(oldState[0].disabled);\r\n            expect(newState[1].disabled).toBe(!oldState[1].disabled);\r\n\r\n            oldState = [...newState];\r\n            const thisIsObsolete = true;\r\n            newState = searchBarsReducer(oldState, toggleSearchBarDisabled('unknown-search-bar', thisIsObsolete));\r\n\r\n            expect(newState).toEqual(oldState);\r\n        });\r\n\r\n        it('should set the value property of the search bar with the id passed in the payload', () => {\r\n            const oldState = [\r\n                {...searchBarDefaultState, id: 'search-bar'},\r\n                {...searchBarDefaultState, id: 'search-bar-2'},\r\n            ];\r\n            const newState: ISearchBarState[] = searchBarsReducer(\r\n                oldState,\r\n                setSearchBarValue('search-bar', 'new value')\r\n            );\r\n\r\n            expect(newState[0].value).toBe('new value');\r\n            expect(newState[1].value).toBe(oldState[1].value);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=660.bundle.js.map