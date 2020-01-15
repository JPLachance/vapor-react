(window.webpackJsonp=window.webpackJsonp||[]).push([[572],{1668:function(t,n,a){"use strict";a.r(n),n.default="import * as _ from 'underscore';\r\nimport * as s from 'underscore.string';\r\nimport {IReduxActionsPayload} from '../../../ReactVapor';\r\nimport {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {FilterActions} from '../../filterBox/FilterBoxActions';\r\nimport {ListBoxActions} from '../../listBox/ListBoxActions';\r\nimport {TableActions} from '../../tables/TableActions';\r\nimport {TableHOCUtils} from './../../table-hoc/TableHOCUtils';\r\nimport {PaginationActions} from './NavigationPaginationActions';\r\n\r\nexport interface IPaginationState {\r\n    id: string;\r\n    pageNb: number;\r\n}\r\n\r\nexport const paginationInitialState: IPaginationState = {\r\n    id: undefined,\r\n    pageNb: 0,\r\n};\r\n\r\nexport const paginationCompositeInitialState: IPaginationState[] = [];\r\n\r\nexport const paginationReducer = (\r\n    state: IPaginationState = paginationInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): IPaginationState => {\r\n    switch (action.type) {\r\n        case PaginationActions.add:\r\n            return {\r\n                id: action.payload.id,\r\n                pageNb: state.pageNb,\r\n            };\r\n        case PaginationActions.changePage:\r\n        case PaginationActions.reset:\r\n            return state.id === action.payload.id ? {id: state.id, pageNb: action.payload.pageNb} : state;\r\n        case TableActions.modifyState:\r\n            return s.contains(state.id, action.payload.id) && action.payload.shouldResetPage\r\n                ? {...state, pageNb: 0}\r\n                : state;\r\n        case FilterActions.filterThrough:\r\n            return s.contains(state.id, action.payload.id) ? {...state, pageNb: 0} : state;\r\n        case ListBoxActions.select: {\r\n            const tableId = TableHOCUtils.getTableIdFromPredicateId(action.payload.id);\r\n            return tableId && s.contains(state.id, tableId) ? {...state, pageNb: 0} : state;\r\n        }\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nexport const paginationCompositeReducer = (\r\n    state: IPaginationState[] = paginationCompositeInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): IPaginationState[] => {\r\n    switch (action.type) {\r\n        case PaginationActions.add:\r\n            return [...state, paginationReducer(undefined, action)];\r\n        case PaginationActions.remove:\r\n            return _.reject(state, (pagination: IPaginationState) => {\r\n                return pagination.id === action.payload.id;\r\n            });\r\n        case PaginationActions.changePage:\r\n        case PaginationActions.reset:\r\n        case FilterActions.filterThrough:\r\n        case ListBoxActions.select:\r\n        case TableActions.modifyState:\r\n            return state.map((pagination: IPaginationState) => paginationReducer(pagination, action));\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=572.bundle.js.map