(window.webpackJsonp=window.webpackJsonp||[]).push([[379],{1469:function(r,n,t){"use strict";t.r(n),n.default="import {IReduxAction} from '../../utils/ReduxUtils';\r\n\r\nexport const FilterActions = {\r\n    addFilter: 'ADD_FILTER',\r\n    removeFilter: 'REMOVE_FILTER',\r\n    filterThrough: 'FILTER',\r\n};\r\n\r\nexport interface IFilterActionPayload {\r\n    id: string;\r\n}\r\n\r\nexport interface IChangeFilterActionPayload extends IFilterActionPayload {\r\n    filterText: string;\r\n}\r\n\r\nexport const addFilter = (id: string): IReduxAction<IFilterActionPayload> => ({\r\n    type: FilterActions.addFilter,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const removeFilter = (id: string): IReduxAction<IFilterActionPayload> => ({\r\n    type: FilterActions.removeFilter,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const filterThrough = (id: string, filterText: string): IReduxAction<IChangeFilterActionPayload> => ({\r\n    type: FilterActions.filterThrough,\r\n    payload: {\r\n        id,\r\n        filterText,\r\n    },\r\n});\r\n\r\nexport const FilterBoxActions = {\r\n    addFilter,\r\n    removeFilter,\r\n    filterThrough,\r\n};\r\n"}}]);
//# sourceMappingURL=379.bundle.js.map