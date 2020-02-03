(window.webpackJsonp=window.webpackJsonp||[]).push([[377],{1483:function(e,t,n){"use strict";n.r(t),t.default="import {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {IFacet} from '../Facet';\r\nimport {emptyAllFacets, FacetActions, IChangeFacetActionPayload, IFacetActionPayload} from '../FacetActions';\r\nimport {facetInitialState, facetReducer, facetsInitialState, facetsReducer, IFacetState} from '../FacetReducers';\r\n\r\ndescribe('Facets', () => {\r\n    describe('FacetReducers', () => {\r\n        const genericAction: IReduxAction<IFacetActionPayload> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {\r\n                facet: 'a facet',\r\n            },\r\n        };\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const facetsState: IFacetState[] = facetsReducer(undefined, genericAction);\r\n\r\n            expect(facetsState).toBe(facetsInitialState);\r\n        });\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined for one facet', () => {\r\n            const facetState: IFacetState = facetReducer(undefined, genericAction);\r\n\r\n            expect(facetState).toBe(facetInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: IFacetState[] = [facetInitialState];\r\n            const facetsState: IFacetState[] = facetsReducer(oldState, genericAction);\r\n\r\n            expect(facetsState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined for one facet', () => {\r\n            const oldState: IFacetState = facetInitialState;\r\n            const facetState: IFacetState = facetReducer(oldState, genericAction);\r\n\r\n            expect(facetState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state with one more FacetState when the action is \"ADD_FACET\"', () => {\r\n            let oldState: IFacetState[] = facetsInitialState;\r\n            const action: IReduxAction<IFacetActionPayload> = {\r\n                type: FacetActions.addFacet,\r\n                payload: {\r\n                    facet: 'some-facet',\r\n                },\r\n            };\r\n            let facetsState: IFacetState[] = facetsReducer(oldState, action);\r\n\r\n            expect(facetsState.length).toBe(oldState.length + 1);\r\n            expect(facetsState.filter((f) => f.facet === action.payload.facet).length).toBe(1);\r\n\r\n            oldState = facetsState;\r\n            action.payload.facet = 'some-facet2';\r\n            facetsState = facetsReducer(oldState, action);\r\n\r\n            expect(facetsState.length).toBe(oldState.length + 1);\r\n            expect(facetsState.filter((f) => f.facet === action.payload.facet).length).toBe(1);\r\n        });\r\n\r\n        it('should return the old state without the FacetState with the action facet when the action is \"REMOVE_FACET\"', () => {\r\n            let oldState: IFacetState[] = [\r\n                {\r\n                    facet: 'some-facet2',\r\n                    opened: false,\r\n                    selected: [],\r\n                },\r\n                {\r\n                    facet: 'some-facet1',\r\n                    opened: true,\r\n                    selected: [],\r\n                },\r\n                {\r\n                    facet: 'some-facet3',\r\n                    opened: false,\r\n                    selected: [],\r\n                },\r\n            ];\r\n            const action: IReduxAction<IFacetActionPayload> = {\r\n                type: FacetActions.removeFacet,\r\n                payload: {\r\n                    facet: 'some-facet1',\r\n                },\r\n            };\r\n            let facetsState: IFacetState[] = facetsReducer(oldState, action);\r\n\r\n            expect(facetsState.length).toBe(oldState.length - 1);\r\n            expect(facetsState.filter((f) => f.facet === action.payload.facet).length).toBe(0);\r\n\r\n            oldState = facetsState;\r\n            action.payload.facet = 'some-facet2';\r\n            facetsState = facetsReducer(oldState, action);\r\n\r\n            expect(facetsState.length).toBe(oldState.length - 1);\r\n            expect(facetsState.filter((f) => f.facet === action.payload.facet).length).toBe(0);\r\n        });\r\n\r\n        it('should toggle the open property value of a facet when the action is \"TOGGLE_MORE_FACET_ROWS\"', () => {\r\n            const openValue = false;\r\n            const oldState: IFacetState[] = [\r\n                {\r\n                    facet: 'some-facet2',\r\n                    opened: openValue,\r\n                    selected: [],\r\n                },\r\n                {\r\n                    facet: 'some-facet1',\r\n                    opened: openValue,\r\n                    selected: [],\r\n                },\r\n                {\r\n                    facet: 'some-facet3',\r\n                    opened: openValue,\r\n                    selected: [],\r\n                },\r\n            ];\r\n            const action: IReduxAction<IFacetActionPayload> = {\r\n                type: FacetActions.toggleMoreFacetRows,\r\n                payload: {\r\n                    facet: 'some-facet1',\r\n                },\r\n            };\r\n            let facetsState: IFacetState[] = facetsReducer(oldState, action);\r\n\r\n            expect(facetsState.length).toBe(oldState.length);\r\n            expect(facetsState.filter((f) => f.facet === action.payload.facet)[0].opened).toBe(!openValue);\r\n            expect(facetsState.filter((f) => f.facet !== action.payload.facet)[0].opened).toBe(openValue);\r\n\r\n            facetsState = facetsReducer(facetsState, action);\r\n\r\n            expect(facetsState.filter((f) => f.facet === action.payload.facet)[0].opened).toBe(openValue);\r\n            expect(facetsState.filter((f) => f.facet !== action.payload.facet)[0].opened).toBe(openValue);\r\n        });\r\n\r\n        it('should set opened property value to false for all facets when the action is \"CLOSE_MORE_FACET_ROWS\"', () => {\r\n            const oldState: IFacetState[] = [\r\n                {\r\n                    facet: 'some-facet2',\r\n                    opened: true,\r\n                    selected: [],\r\n                },\r\n                {\r\n                    facet: 'some-facet1',\r\n                    opened: false,\r\n                    selected: [],\r\n                },\r\n                {\r\n                    facet: 'some-facet3',\r\n                    opened: true,\r\n                    selected: [],\r\n                },\r\n            ];\r\n            const action: IReduxAction<IFacetActionPayload> = {\r\n                type: FacetActions.closeMoreFacetRows,\r\n                payload: {\r\n                    facet: 'all',\r\n                },\r\n            };\r\n            const facetsState: IFacetState[] = facetsReducer(oldState, action);\r\n\r\n            expect(facetsState.length).toBe(oldState.length);\r\n            expect(facetsState.filter((f) => f.opened).length).toBe(0);\r\n            expect(facetsState.filter((f) => !f.opened).length).toBe(oldState.length);\r\n        });\r\n\r\n        it('should set selected property to an empty array the facet when the action is \"EMPTY_FACET', () => {\r\n            const selectedRows = [\r\n                {\r\n                    name: 'row',\r\n                    formattedName: 'Row',\r\n                },\r\n                {\r\n                    name: 'row2',\r\n                    formattedName: 'Row 2',\r\n                },\r\n            ];\r\n            const oldState: IFacetState[] = [\r\n                {\r\n                    facet: 'some-facet2',\r\n                    opened: true,\r\n                    selected: selectedRows,\r\n                },\r\n                {\r\n                    facet: 'some-facet1',\r\n                    opened: false,\r\n                    selected: selectedRows,\r\n                },\r\n                {\r\n                    facet: 'some-facet3',\r\n                    opened: true,\r\n                    selected: selectedRows,\r\n                },\r\n            ];\r\n            const action: IReduxAction<IFacetActionPayload> = {\r\n                type: FacetActions.emptyFacet,\r\n                payload: {\r\n                    facet: 'some-facet1',\r\n                },\r\n            };\r\n            const facetsState: IFacetState[] = facetsReducer(oldState, action);\r\n\r\n            expect(facetsState.length).toBe(oldState.length);\r\n            expect(facetsState.filter((f) => f.facet === action.payload.facet)[0].selected.length).toBe(0);\r\n            expect(facetsState.filter((f) => f.facet !== action.payload.facet)[0].selected.length).toBe(\r\n                selectedRows.length\r\n            );\r\n        });\r\n\r\n        it('should set the selected facet exclude property to true if it aleady selected to not exclude', () => {\r\n            const selectedRows: IFacet[] = [\r\n                {\r\n                    name: 'row',\r\n                    formattedName: 'Row',\r\n                    exclude: false,\r\n                },\r\n            ];\r\n            const oldState: IFacetState[] = [\r\n                {\r\n                    facet: 'some-facet2',\r\n                    opened: true,\r\n                    selected: selectedRows,\r\n                },\r\n                {\r\n                    facet: 'some-facet1',\r\n                    opened: false,\r\n                    selected: [],\r\n                },\r\n            ];\r\n            const action: IReduxAction<IChangeFacetActionPayload> = {\r\n                type: FacetActions.changeFacet,\r\n                payload: {\r\n                    facet: 'some-facet2',\r\n                    facetRow: {\r\n                        ...selectedRows[0],\r\n                        exclude: true,\r\n                    },\r\n                },\r\n            };\r\n            const facetsState: IFacetState[] = facetsReducer(oldState, action);\r\n\r\n            expect(facetsState[0].selected[0].exclude).toBeTruthy();\r\n        });\r\n\r\n        it('should set selected property to an empty array in all facets when the action is \"EMPTY_ALL_FACET', () => {\r\n            const selectedRows = [\r\n                {\r\n                    name: 'row',\r\n                    formattedName: 'Row',\r\n                },\r\n                {\r\n                    name: 'row2',\r\n                    formattedName: 'Row 2',\r\n                },\r\n            ];\r\n            const oldState: IFacetState[] = [\r\n                {\r\n                    facet: 'some-facet2',\r\n                    opened: true,\r\n                    selected: selectedRows,\r\n                },\r\n                {\r\n                    facet: 'some-facet1',\r\n                    opened: false,\r\n                    selected: selectedRows,\r\n                },\r\n                {\r\n                    facet: 'some-facet3',\r\n                    opened: true,\r\n                    selected: selectedRows,\r\n                },\r\n            ];\r\n\r\n            const facetsState: IFacetState[] = facetsReducer(oldState, emptyAllFacets());\r\n\r\n            expect(facetsState.length).toBe(oldState.length);\r\n            facetsState.forEach((facet) => expect(facet.selected.length).toBe(0));\r\n        });\r\n\r\n        it('should add the row to the beginning selected property of the facet when the action is \"CHANGE_FACET\" and remove it if it is already there', () => {\r\n            const selectedRows = [\r\n                {\r\n                    name: 'row',\r\n                    formattedName: 'Row',\r\n                },\r\n                {\r\n                    name: 'row2',\r\n                    formattedName: 'Row 2',\r\n                },\r\n            ];\r\n            const oldState: IFacetState[] = [\r\n                {\r\n                    facet: 'some-facet2',\r\n                    opened: true,\r\n                    selected: selectedRows,\r\n                },\r\n                {\r\n                    facet: 'some-facet1',\r\n                    opened: false,\r\n                    selected: selectedRows,\r\n                },\r\n                {\r\n                    facet: 'some-facet3',\r\n                    opened: true,\r\n                    selected: selectedRows,\r\n                },\r\n            ];\r\n            const newRow = {\r\n                name: 'newRow',\r\n                formattedName: 'A New Row',\r\n            };\r\n            let action: IReduxAction<IChangeFacetActionPayload> = {\r\n                type: FacetActions.changeFacet,\r\n                payload: {\r\n                    facet: 'some-facet1',\r\n                    facetRow: newRow,\r\n                },\r\n            };\r\n            let facetsState: IFacetState[] = facetsReducer(oldState, action);\r\n\r\n            expect(facetsState.length).toBe(oldState.length);\r\n            expect(facetsState.filter((f) => f.facet === action.payload.facet)[0].selected.length).toBe(\r\n                selectedRows.length + 1\r\n            );\r\n            expect(facetsState.filter((f) => f.facet === action.payload.facet)[0].selected[0].name).toBe(newRow.name);\r\n            expect(facetsState.filter((f) => f.facet !== action.payload.facet)[0].selected.length).toBe(\r\n                selectedRows.length\r\n            );\r\n\r\n            action = {\r\n                type: FacetActions.changeFacet,\r\n                payload: {\r\n                    facet: 'some-facet1',\r\n                    facetRow: newRow,\r\n                },\r\n            };\r\n            facetsState = facetsReducer(facetsState, action);\r\n            expect(facetsState.filter((f) => f.facet === action.payload.facet)[0].selected.length).toBe(\r\n                selectedRows.length\r\n            );\r\n            expect(facetsState.filter((f) => f.facet !== action.payload.facet)[0].selected.length).toBe(\r\n                selectedRows.length\r\n            );\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=377.bundle.js.map