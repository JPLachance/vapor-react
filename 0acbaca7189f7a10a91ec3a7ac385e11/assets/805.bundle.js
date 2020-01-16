(window.webpackJsonp=window.webpackJsonp||[]).push([[805],{1893:function(t,e,n){"use strict";n.r(e),e.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {ITableWithPaginationBasePayload, TableWithPaginationActions} from '../actions/TableWithPaginationActions';\r\nimport {ITableWithPaginationState, TableWithPaginationReducers} from '../reducers/TableWithPaginationReducers';\r\n\r\ndescribe('Table HOC', () => {\r\n    describe('TableWithPaginationReducers', () => {\r\n        const genericAction: IReduxAction<ITableWithPaginationBasePayload> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {\r\n                id: 'some-table-header',\r\n            },\r\n        };\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const oldState: ITableWithPaginationState[] = undefined;\r\n            const tableHeadersState: ITableWithPaginationState[] = TableWithPaginationReducers(oldState, genericAction);\r\n\r\n            expect(tableHeadersState).toEqual([]);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: ITableWithPaginationState[] = [{id: 'a', count: 0}];\r\n            const tableHeadersState: ITableWithPaginationState[] = TableWithPaginationReducers(oldState, genericAction);\r\n\r\n            expect(tableHeadersState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state with one more ITableWithPaginationState when the action is \"TableWithPaginationActions.add\"', () => {\r\n            const expectedId = 'a';\r\n            const action = TableWithPaginationActions.add(expectedId);\r\n\r\n            const oldState: ITableWithPaginationState[] = [];\r\n            const tableHeadersState: ITableWithPaginationState[] = TableWithPaginationReducers(oldState, action);\r\n\r\n            expect(tableHeadersState.length).toBe(oldState.length + 1);\r\n            const headerState = _.findWhere(tableHeadersState, {id: action.payload.id});\r\n\r\n            expect(headerState).toBeDefined();\r\n            expect(headerState.id).toBe(expectedId);\r\n        });\r\n\r\n        it('should return the old state without the ITableWithPaginationState when the action is \"TableWithPaginationActions.remove\"', () => {\r\n            const oldState: ITableWithPaginationState[] = [\r\n                {\r\n                    id: 'some-table-header-1',\r\n                    count: 0,\r\n                },\r\n                {\r\n                    id: 'some-table-header-2',\r\n                    count: 5,\r\n                },\r\n                {\r\n                    id: 'some-table-header-3',\r\n                    count: 0,\r\n                },\r\n            ];\r\n            const action = TableWithPaginationActions.remove(oldState[1].id);\r\n            const tableHeadersState: ITableWithPaginationState[] = TableWithPaginationReducers(oldState, action);\r\n\r\n            expect(tableHeadersState.length).toBe(oldState.length - 1);\r\n            expect(_.findWhere(tableHeadersState, {id: action.payload.id})).toBeUndefined();\r\n        });\r\n\r\n        it('should set the sort on the table header when the action is \"TableWithPaginationActions.setCount\"', () => {\r\n            const expectedCount = 404;\r\n            const oldState: ITableWithPaginationState[] = [\r\n                {\r\n                    id: 'some-table-header-1',\r\n                    count: 0,\r\n                },\r\n                {\r\n                    id: 'some-table-header-2',\r\n                    count: 0,\r\n                },\r\n            ];\r\n\r\n            const action = TableWithPaginationActions.setCount(oldState[0].id, expectedCount);\r\n            const tableHeadersState: ITableWithPaginationState[] = TableWithPaginationReducers(oldState, action);\r\n\r\n            expect(tableHeadersState.length).toBe(oldState.length);\r\n            expect(_.findWhere(tableHeadersState, {id: oldState[0].id}).count).toBe(expectedCount);\r\n            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).count).toBe(oldState[1].count);\r\n        });\r\n\r\n        it('should not throw when setting the count for an inexisting table', () => {\r\n            const oldState: ITableWithPaginationState[] = [];\r\n            const action = TableWithPaginationActions.setCount('how-can-this-be', 1);\r\n            expect(() => TableWithPaginationReducers(oldState, action)).not.toThrow();\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=805.bundle.js.map