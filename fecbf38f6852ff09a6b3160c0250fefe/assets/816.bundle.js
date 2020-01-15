(window.webpackJsonp=window.webpackJsonp||[]).push([[816],{1905:function(t,e,a){"use strict";a.r(e),e.default="import * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport {createSelector} from 'reselect';\r\nimport * as _ from 'underscore';\r\nimport {contains} from 'underscore.string';\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {IDispatch} from '../../utils/ReduxUtils';\r\nimport {ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {IActionOptions} from '../actions/Action';\r\nimport {addActionsToActionBar} from '../actions/ActionBarActions';\r\nimport {IDatePickerState} from '../datePicker/DatePickerReducers';\r\nimport {IDropdownOption} from '../dropdownSearch/DropdownSearch';\r\nimport {closeDropdownSearch, selectOptionDropdownSearch} from '../dropdownSearch/DropdownSearchActions';\r\nimport {IDropdownSearchState} from '../dropdownSearch/DropdownSearchReducers';\r\nimport {IFilterState} from '../filterBox/FilterBoxReducers';\r\nimport {IPaginationState} from '../navigation/pagination/NavigationPaginationReducers';\r\nimport {IPerPageState} from '../navigation/perPage/NavigationPerPageReducers';\r\nimport {IData, ITableCompositeStateProps, ITableDispatchProps, ITableOwnProps, ITableProps, Table} from './Table';\r\nimport {addTable, removeTable} from './TableActions';\r\nimport {DEFAULT_TABLE_DATA, TABLE_PREDICATE_DEFAULT_VALUE, TableChildComponent} from './TableConstants';\r\nimport {defaultTableStateModifierThunk} from './TableDataModifier';\r\nimport {ITableHeaderCellState} from './TableHeaderCellReducers';\r\nimport {ITableById, ITableCompositeState, ITableData, ITableState} from './TableReducers';\r\nimport {getTableChildComponentId} from './TableUtils';\r\n\r\nexport const getTableCompositeState = (state: IReactVaporState, id: string): ITableCompositeState => {\r\n    const tableState: ITableState = state.tables[id] || ({} as ITableState);\r\n    const filterState: IFilterState = tableState && _.findWhere(state.filters, {id: tableState.filterId});\r\n    const paginationState: IPaginationState =\r\n        tableState && _.findWhere(state.paginationComposite, {id: tableState.paginationId});\r\n    const perPageState: IPerPageState = tableState && _.findWhere(state.perPageComposite, {id: tableState.perPageId});\r\n    const tableHeaderCellState: ITableHeaderCellState =\r\n        tableState && state.tableHeaderCells[tableState.tableHeaderCellId];\r\n    const predicateStates: IDropdownSearchState[] =\r\n        (tableState &&\r\n            _.reject(\r\n                state.dropdownSearch,\r\n                (dropdownSearch: IDropdownSearchState) => !contains(dropdownSearch.id, id)\r\n            )) ||\r\n        [];\r\n    const datePickerState: IDatePickerState =\r\n        tableState && _.findWhere(state.datePickers, {id: tableState.datePickerRangeId});\r\n\r\n    return {\r\n        id: tableState.id,\r\n        data: tableState.data || DEFAULT_TABLE_DATA,\r\n        dataDeleted: tableState.dataDeleted,\r\n        isInError: tableState.isInError,\r\n        isLoading: tableState.isLoading,\r\n        filter: filterState && filterState.filterText,\r\n        page: paginationState && paginationState.pageNb,\r\n        perPage: perPageState && perPageState.perPage,\r\n        sortState: {\r\n            attribute: tableHeaderCellState && tableHeaderCellState.attributeToSort,\r\n            order: tableHeaderCellState && tableHeaderCellState.sorted,\r\n        },\r\n        predicates: predicateStates.reduce((currentPredicates, nextPredicate: IDropdownSearchState) => {\r\n            // the attribute name is stored in the id of the dropdownSearch\r\n            const attributeName = nextPredicate.id.split(\r\n                getTableChildComponentId(id, TableChildComponent.PREDICATE)\r\n            )[1];\r\n            const selectedOption = _.findWhere(nextPredicate.options, {selected: true});\r\n            return {\r\n                ...currentPredicates,\r\n                [attributeName]: (selectedOption && selectedOption.value) || TABLE_PREDICATE_DEFAULT_VALUE,\r\n            };\r\n        }, {}),\r\n        from: datePickerState && datePickerState.appliedLowerLimit,\r\n        to: datePickerState && datePickerState.appliedUpperLimit,\r\n    } as ITableCompositeState;\r\n};\r\n\r\nconst getDataById = (data: ITableData, props: ITableOwnProps): ITableById => data.byId;\r\n\r\nconst getSelectedIds = (data: ITableData, props: ITableOwnProps): string[] => data.selectedIds || [];\r\n\r\nconst getMultiSelect = (data: ITableData, props: ITableOwnProps): boolean => props.rowsMultiSelect;\r\n\r\nconst getGetActionsMethod = (data: ITableData, props: ITableOwnProps): ((rowData?: IData) => IActionOptions[]) =>\r\n    props.getActions;\r\n\r\nconst getFinalActions = (\r\n    byId: ITableById,\r\n    selectedIds: string[],\r\n    isMultiSelect: boolean,\r\n    getActions: (rowData?: IData) => IActionOptions[]\r\n): IActionOptions[] =>\r\n    getActions && selectedIds.length\r\n        ? getActions(byId[selectedIds[0]]).filter((action) => !isMultiSelect || (isMultiSelect && !!action.grouped))\r\n        : [];\r\n\r\nconst actionsSelector = createSelector(\r\n    getDataById,\r\n    getSelectedIds,\r\n    getMultiSelect,\r\n    getGetActionsMethod,\r\n    getFinalActions\r\n);\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: ITableOwnProps): ITableCompositeStateProps => {\r\n    const table: ITableState = state.tables && state.tables[ownProps.id];\r\n    return {\r\n        tableCompositeState: getTableCompositeState(state, ownProps.id),\r\n        actions: table && table.data ? actionsSelector(table.data, ownProps) : [],\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (dispatch: IDispatch, ownProps: ITableOwnProps): ITableDispatchProps => ({\r\n    onDidMount: () => {\r\n        dispatch(addTable(ownProps.id, ownProps.initialTableData || DEFAULT_TABLE_DATA, ownProps.predicates));\r\n    },\r\n    onUnmount: () => {\r\n        dispatch(removeTable(ownProps.id));\r\n    },\r\n    onWillUpdate: (actions: IActionOptions[]) => {\r\n        const actionBarId: string = getTableChildComponentId(ownProps.id, TableChildComponent.ACTION_BAR);\r\n        const newAction: IActionOptions[] = actions.length ? actions : [];\r\n        dispatch(addActionsToActionBar(actionBarId, newAction));\r\n    },\r\n    onModifyData: (\r\n        shouldResetPage: boolean,\r\n        tableCompositeState: ITableCompositeState,\r\n        previousTableCompositeState: ITableCompositeState\r\n    ) => {\r\n        if (ownProps.manual) {\r\n            dispatch(ownProps.manual(ownProps, shouldResetPage, tableCompositeState, previousTableCompositeState));\r\n        } else {\r\n            dispatch(defaultTableStateModifierThunk(ownProps, shouldResetPage, tableCompositeState));\r\n        }\r\n    },\r\n    onRowClick: (actions: IActionOptions[] = [], numberOfSelectedIds: number) => {\r\n        actions =\r\n            ownProps.rowsMultiSelect && numberOfSelectedIds >= 2\r\n                ? _.filter(actions, (action: IActionOptions) => !!action.grouped)\r\n                : actions;\r\n        dispatch(addActionsToActionBar(getTableChildComponentId(ownProps.id, TableChildComponent.ACTION_BAR), actions));\r\n    },\r\n    onPredicateOptionClick: (predicateId: string, option: IDropdownOption) => {\r\n        dispatch(selectOptionDropdownSearch(predicateId, option));\r\n        dispatch(closeDropdownSearch(predicateId));\r\n    },\r\n});\r\n\r\nexport const TableConnected: React.ComponentClass<ITableProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(Table);\r\n\r\nexport const TableConnectedUtils = {\r\n    getTableCompositeState,\r\n    getDataById,\r\n    getSelectedIds,\r\n    getMultiSelect,\r\n    getGetActionsMethod,\r\n    getFinalActions,\r\n};\r\n"}}]);
//# sourceMappingURL=816.bundle.js.map