(window.webpackJsonp=window.webpackJsonp||[]).push([[385],{1481:function(t,r,e){"use strict";e.r(r),r.default="import * as _ from 'underscore';\r\nimport {IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {DropReducerActions, IDropPayload} from '../drop/redux/DropActions';\r\nimport {ListBoxActions} from '../listBox/ListBoxActions';\r\nimport {FilterActions} from './FilterBoxActions';\r\n\r\nexport interface IFilterState {\r\n    id: string;\r\n    filterText: string;\r\n}\r\n\r\nexport const filterBoxInitialState: IFilterState = {id: undefined, filterText: undefined};\r\nexport const filtersInitialState: IFilterState[] = [];\r\n\r\nexport const filterBoxReducer = (\r\n    state: IFilterState = filterBoxInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): IFilterState => {\r\n    if (state.id !== action.payload.id && action.type !== FilterActions.addFilter) {\r\n        return state;\r\n    }\r\n\r\n    switch (action.type) {\r\n        case FilterActions.filterThrough:\r\n            return {\r\n                id: state.id,\r\n                filterText: action.payload.filterText,\r\n            };\r\n        case FilterActions.addFilter:\r\n            return {\r\n                id: action.payload.id,\r\n                filterText: '',\r\n            };\r\n        case ListBoxActions.select:\r\n            return {\r\n                id: state.id,\r\n                filterText: '',\r\n            };\r\n        case DropReducerActions.toggle:\r\n            const cast = action.payload as IDropPayload;\r\n            return cast.isOpen === true || _.isUndefined(cast.isOpen)\r\n                ? state\r\n                : {\r\n                      id: state.id,\r\n                      filterText: '',\r\n                  };\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nexport const filterBoxesReducer = (\r\n    state: IFilterState[] = filtersInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): IFilterState[] => {\r\n    switch (action.type) {\r\n        case ListBoxActions.select:\r\n        case DropReducerActions.toggle:\r\n        case FilterActions.filterThrough:\r\n            return state.map((filterBox) => filterBoxReducer(filterBox, action));\r\n        case FilterActions.addFilter:\r\n            return [...state, filterBoxReducer(undefined, action)];\r\n        case FilterActions.removeFilter:\r\n            return _.reject(state, (filterBox: IFilterState) => action.payload.id === filterBox.id);\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=385.bundle.js.map