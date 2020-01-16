(window.webpackJsonp=window.webpackJsonp||[]).push([[862],{1950:function(e,t,a){"use strict";a.r(t),t.default="import {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {turnOffLoading, turnOnLoading} from '../../loading/LoadingActions';\r\nimport {\r\n    addTable,\r\n    addTableDataEntry,\r\n    deleteTableDataEntry,\r\n    ITableActionPayload,\r\n    modifyState,\r\n    removeTable,\r\n    setIsInError,\r\n    TableActions,\r\n    updateTableDataEntry,\r\n} from '../TableActions';\r\nimport {DEFAULT_TABLE_DATA, TableChildComponent} from '../TableConstants';\r\nimport {sortFromHeaderCell} from '../TableHeaderCellActions';\r\nimport {ITablesState, ITableState, tableReducer, tablesInitialState, tablesReducer} from '../TableReducers';\r\nimport {getTableChildComponentId} from '../TableUtils';\r\nimport {IData} from './../Table';\r\n\r\ndescribe('TableReducers', () => {\r\n    const tableId = 'super-table';\r\n\r\n    const getEmptyOldState = () => ({\r\n        id: 'table1',\r\n        data: {},\r\n    });\r\n\r\n    const genericAction: IReduxAction<ITableActionPayload> = {\r\n        type: 'DO_SOMETHING',\r\n        payload: {\r\n            id: 'row1',\r\n        },\r\n    };\r\n\r\n    it('should return the default state if the action is not defined and the state is undefined', () => {\r\n        const oldState: ITablesState = undefined;\r\n        const newState: ITablesState = tablesReducer(oldState, genericAction);\r\n\r\n        expect(newState).toEqual(tablesInitialState);\r\n    });\r\n\r\n    it('should return the old state when the action is not defined', () => {\r\n        expect(tablesReducer(tablesInitialState, genericAction)).toBe(tablesInitialState);\r\n    });\r\n\r\n    it('should return the old state with a new table in it on add table', () => {\r\n        expect(tablesInitialState[tableId]).toBeUndefined();\r\n        const newState = tablesReducer(tablesInitialState, addTable(tableId, DEFAULT_TABLE_DATA, []));\r\n        expect(newState[tableId]).toBeDefined();\r\n    });\r\n\r\n    it('should remove a table state from the tables state in it on remove table', () => {\r\n        let newState = tablesReducer(tablesInitialState, addTable(tableId, DEFAULT_TABLE_DATA, []));\r\n        expect(newState[tableId]).toBeDefined();\r\n\r\n        newState = tablesReducer(tablesInitialState, removeTable(tableId));\r\n        expect(newState[tableId]).toBeUndefined();\r\n    });\r\n\r\n    describe('with a table state in the tables state', () => {\r\n        let oldState: ITablesState;\r\n\r\n        beforeEach(() => {\r\n            oldState = tablesReducer(tablesInitialState, addTable(tableId, DEFAULT_TABLE_DATA, []));\r\n        });\r\n\r\n        it('should toggle the inError state of the table with the id in the payload on setIsInError', () => {\r\n            expect(oldState[tableId].isInError).toBe(false);\r\n            let newState = tablesReducer(oldState, setIsInError(tableId, true));\r\n            expect(newState[tableId].isInError).toBe(true);\r\n            newState = tablesReducer(oldState, setIsInError(tableId, false));\r\n            expect(newState[tableId].isInError).toBe(false);\r\n        });\r\n\r\n        it('should not toggle the inError state of the table if the id in the payload is not the table id on setIsInError', () => {\r\n            expect(oldState[tableId].isInError).toBe(false);\r\n            let newState = tablesReducer(oldState, setIsInError('other id', true));\r\n            expect(newState[tableId].isInError).toBe(false);\r\n            newState = tablesReducer(oldState, setIsInError('other id', false));\r\n            expect(newState[tableId].isInError).toBe(false);\r\n        });\r\n\r\n        it('should toggle the isLoading state of the table with the id in the payload on loading actions', () => {\r\n            expect(oldState[tableId].isLoading).toBe(false);\r\n            let newState = tablesReducer(oldState, turnOnLoading([tableId]));\r\n            expect(newState[tableId].isLoading).toBe(true);\r\n            newState = tablesReducer(oldState, turnOffLoading([tableId]));\r\n            expect(newState[tableId].isLoading).toBe(false);\r\n        });\r\n\r\n        it('should not toggle the isLoading state of the table if the id is not in the payload on loading actions', () => {\r\n            expect(oldState[tableId].isLoading).toBe(false);\r\n            let newState = tablesReducer(oldState, turnOnLoading(['other id']));\r\n            expect(newState[tableId].isLoading).toBe(false);\r\n            newState = tablesReducer(oldState, turnOffLoading(['other id']));\r\n            expect(newState[tableId].isLoading).toBe(false);\r\n        });\r\n\r\n        it('should store the tableHeaderCellId received from a sort action if it is associated to the table', () => {\r\n            const headerCellId = getTableChildComponentId(tableId, TableChildComponent.TABLE_HEADER_CELL);\r\n            expect(oldState[tableId].tableHeaderCellId).toBeUndefined();\r\n            const newState = tablesReducer(oldState, sortFromHeaderCell(headerCellId, 'someAttributeToSort', tableId));\r\n            expect(newState[tableId].tableHeaderCellId).toBe(headerCellId);\r\n        });\r\n\r\n        it('should not store the tableHeaderCellId received from a sort action if it is unassociated to the table', () => {\r\n            const headerCellId = 'unassociated to table';\r\n            expect(oldState[tableId].tableHeaderCellId).toBeUndefined();\r\n            const newState = tablesReducer(oldState, sortFromHeaderCell(headerCellId, 'someAttributeToSort', tableId));\r\n            expect(newState[tableId].tableHeaderCellId).toBeUndefined();\r\n        });\r\n\r\n        it('should call and return the result of the function received from the payload on modify state', () => {\r\n            // make a minor change to the state just to test that it works (using isLoading, but could have been anything)\r\n            const tableDataModifier = (state: ITableState) => ({...state, isLoading: true});\r\n            const newStateFromModifier = tableDataModifier(oldState[tableId]);\r\n\r\n            expect(tablesReducer(oldState, modifyState(tableId, tableDataModifier, true))[tableId]).toEqual(\r\n                newStateFromModifier\r\n            );\r\n        });\r\n\r\n        it('should not call and return the result of the function received from the payload on modify state if the table id is not the same', () => {\r\n            // make a minor change to the state just to test that it works (using isLoading, but could have been anything)\r\n            const tableDataModifier = (state: ITableState) => ({...state, isLoading: true});\r\n\r\n            expect(tablesReducer(oldState, modifyState('some other id', tableDataModifier, true))[tableId]).toEqual(\r\n                oldState[tableId]\r\n            );\r\n        });\r\n    });\r\n\r\n    describe('ModifyState action', () => {\r\n        const getModifyStateAction = () => ({\r\n            type: TableActions.modifyState,\r\n            payload: {\r\n                id: 'row1',\r\n                tableStateModifier: (state: ITableState) => state,\r\n            },\r\n        });\r\n\r\n        const getOldState = (selectedIds = ['id1', 'id2']) => ({\r\n            id: 'table1',\r\n            data: {\r\n                selectedIds,\r\n                displayedIds: ['id2', 'id3'],\r\n            },\r\n            dataDeleted: false,\r\n        });\r\n\r\n        it('should not throw if the selectedIds array is not defined', () => {\r\n            expect(() => {\r\n                const oldState = getOldState([]);\r\n                tableReducer(oldState as ITableState, getModifyStateAction());\r\n            }).not.toThrow();\r\n        });\r\n\r\n        it('should remove selected ids from the list if the displayedIds do not contain the id', () => {\r\n            const oldState = getOldState();\r\n            const newState: ITableState = tableReducer(oldState as ITableState, getModifyStateAction());\r\n\r\n            expect(newState.data.selectedIds.length).toBe(1);\r\n            expect(newState.data.selectedIds[0]).toBe('id2');\r\n        });\r\n\r\n        it('should return a selectedIds empty if the displayedIds is empty and the selectedIds undefined', () => {\r\n            const oldState = getEmptyOldState();\r\n            const newState: ITableState = tableReducer(oldState as ITableState, getModifyStateAction());\r\n\r\n            expect(newState.data.selectedIds.length).toBe(0);\r\n        });\r\n    });\r\n\r\n    describe('UpdateSelectedIds action', () => {\r\n        const getUpdateSelectedIdsAction = (hasMultipleSelectedRow: boolean = false) => ({\r\n            type: TableActions.updateSelectedIds,\r\n            payload: {\r\n                id: 'table1',\r\n                selectedIds: ['id3', 'id4'],\r\n                hasMultipleSelectedRow,\r\n            },\r\n        });\r\n\r\n        const getOldState = (selectedIds = ['id1', 'id2']) => ({\r\n            id: 'table1',\r\n            data: {\r\n                selectedIds,\r\n                displayedIds: ['id2', 'id3'],\r\n            },\r\n        });\r\n\r\n        it('should return only the first selected ids if hasMultipleSelectedRow is false', () => {\r\n            const oldState = getOldState();\r\n            const newState: ITableState = tableReducer(oldState as ITableState, getUpdateSelectedIdsAction());\r\n\r\n            expect(newState.data.selectedIds.length).toBe(1);\r\n            expect(newState.data.selectedIds[0]).toBe('id3');\r\n        });\r\n\r\n        it('should combine all selected ids if hasMultipleSelectedRow is true', () => {\r\n            const oldState = getOldState();\r\n            const newState: ITableState = tableReducer(oldState as ITableState, getUpdateSelectedIdsAction(true));\r\n\r\n            expect(newState.data.selectedIds.length).toBe(4);\r\n        });\r\n\r\n        it('should not add a duplicate id if hasMultipleSelectedRow is true', () => {\r\n            const oldState = getOldState(['id1', 'id3']);\r\n            const newState: ITableState = tableReducer(oldState as ITableState, getUpdateSelectedIdsAction(true));\r\n\r\n            expect(newState.data.selectedIds.length).toBe(3);\r\n        });\r\n    });\r\n\r\n    describe('single table data entry actions', () => {\r\n        const getOldState = () => ({\r\n            id: 'table1',\r\n            data: {\r\n                selectedIds: ['id2', 'id3'],\r\n                displayedIds: ['id2', 'id3'],\r\n                allIds: ['id2', 'id3'],\r\n                byId: {\r\n                    id2: {id: 'id2'},\r\n                    id3: {id: 'id3'},\r\n                },\r\n            },\r\n            dataDeleted: false,\r\n        });\r\n\r\n        let oldState: any;\r\n        beforeEach(() => {\r\n            oldState = getOldState();\r\n        });\r\n\r\n        describe('deleteTableDataEntry', () => {\r\n            it('should remove the specified data if present in the table', () => {\r\n                const newState = tableReducer(oldState, deleteTableDataEntry(oldState.id, 'id2'));\r\n\r\n                expect(newState.data.byId['id2']).toBeUndefined();\r\n                expect(newState.data.allIds.length).toBe(1);\r\n                expect(newState.data.allIds[0]).toBe('id3');\r\n                expect(newState.data.displayedIds.length).toBe(1);\r\n                expect(newState.data.displayedIds[0]).toBe('id3');\r\n                expect(newState.data.selectedIds.length).toBe(1);\r\n                expect(newState.data.selectedIds[0]).toBe('id3');\r\n                expect(newState.dataDeleted).toBe(true);\r\n            });\r\n\r\n            it('should keep the old state if the id specified is not in the table', () => {\r\n                const newState = tableReducer(oldState, deleteTableDataEntry(oldState.id, 'idontexistid'));\r\n\r\n                expect(newState).toEqual(oldState);\r\n            });\r\n        });\r\n\r\n        describe('addTableDataEntry', () => {\r\n            it('should add the specified data in the table', () => {\r\n                const newData: IData = {id: 'newDataId'};\r\n                const newState = tableReducer(oldState, addTableDataEntry(oldState.id, newData));\r\n\r\n                expect(newState.data.byId[newData.id]).toEqual(newData);\r\n                expect(newState.data.allIds).toContain(newData.id);\r\n                expect(newState.data.displayedIds).toContain(newData.id);\r\n            });\r\n        });\r\n\r\n        describe('updateTableDataEntry', () => {\r\n            it('should update the specified data in the table', () => {\r\n                const existingDataUpdated: IData = {id: 'id2', someNewProp: 'hello there!'};\r\n                const newState = tableReducer(oldState, updateTableDataEntry(oldState.id, existingDataUpdated));\r\n\r\n                expect(newState.data.byId[existingDataUpdated.id]).toEqual(existingDataUpdated);\r\n                expect(newState.data.allIds.length).toBe(oldState.data.allIds.length);\r\n                expect(newState.data.displayedIds.length).toBe(oldState.data.displayedIds.length);\r\n            });\r\n\r\n            it('should do nothing if the data is not already in the table', () => {\r\n                const nonExistingDataUpdated: IData = {id: 'nonexistingid', someNewProp: 'hello there!'};\r\n                const newState = tableReducer(oldState, updateTableDataEntry(oldState.id, nonExistingDataUpdated));\r\n\r\n                expect(newState.data.byId[nonExistingDataUpdated.id]).toBeUndefined();\r\n                expect(newState).toEqual(oldState);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=862.bundle.js.map