(window.webpackJsonp=window.webpackJsonp||[]).push([[790],{1878:function(e,n,a){"use strict";a.r(n),n.default="import * as _ from 'underscore';\r\n\r\nimport {BasePayload, IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {PaginationActions} from '../../navigation/pagination/NavigationPaginationActions';\r\nimport {PerPageActions} from '../../navigation/perPage/NavigationPerPageActions';\r\nimport {\r\n    ITableRowAddPayload,\r\n    ITableRowSelectPayload,\r\n    ITableRowToggleCollapsiblePayload,\r\n    TableHOCRowActionsType,\r\n} from '../actions/TableHOCRowActions';\r\nimport {TableHOCUtils} from '../TableHOCUtils';\r\n\r\nexport interface HOCTableRowState {\r\n    id: string;\r\n    tableId: string;\r\n    selected: boolean;\r\n    opened?: boolean;\r\n}\r\n\r\nconst addTableRowReducer = (state: HOCTableRowState[], action: IReduxAction<ITableRowAddPayload>) => {\r\n    return [\r\n        ...state,\r\n        {\r\n            id: action.payload.id,\r\n            tableId: action.payload.tableId,\r\n            selected: false,\r\n            opened: false,\r\n        },\r\n    ];\r\n};\r\n\r\nconst removeTableRowReducer = (state: HOCTableRowState[], {payload}: IReduxAction<ITableRowAddPayload>) => {\r\n    return _.reject(\r\n        state,\r\n        ({tableId, id}: HOCTableRowState) => (!payload.tableId || payload.tableId === tableId) && id === payload.id\r\n    );\r\n};\r\n\r\nconst selectTableRowReducer = (state: HOCTableRowState[], action: IReduxAction<ITableRowSelectPayload>) => {\r\n    const current = _.findWhere(state, {id: action.payload.id});\r\n    if (current) {\r\n        return _.map(state, (row: HOCTableRowState) => {\r\n            if (row.id === current.id) {\r\n                return {\r\n                    ...row,\r\n                    selected: true,\r\n                };\r\n            }\r\n            return row.tableId === current.tableId ? {...row, selected: row.selected && action.payload.isMulti} : row;\r\n        });\r\n    }\r\n    return state;\r\n};\r\n\r\nconst toggleCollasibleTableRowReducer = (\r\n    state: HOCTableRowState[],\r\n    action: IReduxAction<ITableRowToggleCollapsiblePayload>\r\n) => {\r\n    const current = _.findWhere(state, {id: action.payload.id});\r\n    if (current) {\r\n        return _.map(state, (row: HOCTableRowState) => {\r\n            if (row.id === current.id) {\r\n                return {\r\n                    ...row,\r\n                    opened: _.isBoolean(action.payload.opened) ? action.payload.opened : !current.opened,\r\n                };\r\n            }\r\n            return row;\r\n        });\r\n    }\r\n    return state;\r\n};\r\n\r\nconst deselectTableRowReducer = (state: HOCTableRowState[], action: IReduxAction<ITableRowSelectPayload>) => {\r\n    return _.map(state, (row: HOCTableRowState) => {\r\n        return row.tableId === action.payload.id || TableHOCUtils.getPaginationId(row.tableId) === action.payload.id\r\n            ? {...row, selected: false}\r\n            : row;\r\n    });\r\n};\r\n\r\nconst TableRowActionReducers: {[key: string]: (...args: any[]) => any} = {\r\n    [TableHOCRowActionsType.add]: addTableRowReducer,\r\n    [TableHOCRowActionsType.remove]: removeTableRowReducer,\r\n    [TableHOCRowActionsType.select]: selectTableRowReducer,\r\n    [TableHOCRowActionsType.deselectAll]: deselectTableRowReducer,\r\n    [TableHOCRowActionsType.toggleCollapsible]: toggleCollasibleTableRowReducer,\r\n    [PerPageActions.change]: deselectTableRowReducer,\r\n    [PaginationActions.changePage]: deselectTableRowReducer,\r\n};\r\n\r\ntype ITableRowPayload = BasePayload | ITableRowAddPayload | ITableRowSelectPayload;\r\nexport const TableRowReducers = (state: HOCTableRowState[] = [], action: IReduxAction<ITableRowPayload>) => {\r\n    if (!_.isUndefined(TableRowActionReducers[action.type])) {\r\n        return TableRowActionReducers[action.type](state, action);\r\n    }\r\n    return state;\r\n};\r\n"}}]);
//# sourceMappingURL=790.bundle.js.map