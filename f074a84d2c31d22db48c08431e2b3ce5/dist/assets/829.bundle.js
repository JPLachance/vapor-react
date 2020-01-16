(window.webpackJsonp=window.webpackJsonp||[]).push([[829],{1917:function(e,o,r){"use strict";r.r(o),o.default="import * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {updateSelectedRows} from './TableActions';\r\nimport {ITableHeadingRowOwnProps, ITableHeadingRowProps, TableHeadingRow} from './TableHeadingRow';\r\nimport {ITableState} from './TableReducers';\r\nimport {addRow, removeRow, selectRow, toggleRowOpened} from './TableRowActions';\r\nimport {ITableRowState} from './TableRowReducers';\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: ITableHeadingRowOwnProps) => {\r\n    const item: ITableRowState = _.findWhere(state.rows, {id: ownProps.id});\r\n    const table: ITableState = state.tables && state.tables[ownProps.tableId];\r\n\r\n    return {\r\n        opened: item && item.opened,\r\n        selected:\r\n            table &&\r\n            table.data.selectedIds &&\r\n            !!table.data.selectedIds.length &&\r\n            table.data.selectedIds.indexOf(ownProps.rowId) !== -1,\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (dispatch: IDispatch, ownProps: ITableHeadingRowOwnProps) => ({\r\n    onClick: (hasMultipleSelectedRow: boolean) => {\r\n        if (!ownProps.selectionDisabled) {\r\n            dispatch(selectRow(ownProps.id, ownProps.tableId, ownProps.rowId));\r\n            dispatch(updateSelectedRows(ownProps.tableId, [ownProps.rowId], hasMultipleSelectedRow));\r\n        }\r\n        if (ownProps.isCollapsible) {\r\n            dispatch(toggleRowOpened(ownProps.id, ownProps.tableId, ownProps.rowId));\r\n        }\r\n    },\r\n    onRender: () => dispatch(addRow(ownProps.id, ownProps.tableId)),\r\n    onDestroy: () => dispatch(removeRow(ownProps.id)),\r\n});\r\n\r\nexport const TableHeadingRowConnected: React.ComponentClass<ITableHeadingRowProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(TableHeadingRow);\r\n"}}]);
//# sourceMappingURL=829.bundle.js.map