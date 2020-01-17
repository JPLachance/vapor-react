(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{1404:function(r,n,o){"use strict";o.r(n),n.default="import * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {ListBoxActions} from '../../listBox/ListBoxActions';\r\nimport {SelectConnected} from '../../select/SelectConnected';\r\nimport {DropReducerActions, IDropPayload} from './DropActions';\r\n\r\nexport interface IDropState {\r\n    [groupId: string]: {\r\n        id: string;\r\n        isOpen: boolean;\r\n    };\r\n}\r\n\r\nexport const dropInitialState: IDropState = {};\r\n\r\nexport const dropReducer = (state: IDropState = dropInitialState, action: IReduxAction<IDropPayload>): IDropState => {\r\n    switch (action.type) {\r\n        case ListBoxActions.select:\r\n            const selectGroup = DropSelectors.getByGroup({drop: state}, {groupId: SelectConnected.DropGroup});\r\n            if (selectGroup && action.payload.id === selectGroup.id) {\r\n                return {\r\n                    ...state,\r\n                    [SelectConnected.DropGroup]: {\r\n                        ...selectGroup,\r\n                        isOpen: false,\r\n                    },\r\n                };\r\n            }\r\n            return state;\r\n        case DropReducerActions.toggle:\r\n            const group = DropSelectors.getByGroup({drop: state}, {groupId: action.payload.groupId});\r\n            if (group && action.payload.id === group.id) {\r\n                return {\r\n                    ...state,\r\n                    [action.payload.groupId]: {\r\n                        ...group,\r\n                        isOpen: !group.isOpen,\r\n                    },\r\n                };\r\n            }\r\n            return {\r\n                ...state,\r\n                [action.payload.groupId]: {\r\n                    id: action.payload.id,\r\n                    isOpen: _.isUndefined(action.payload.isOpen) ? true : action.payload.isOpen,\r\n                },\r\n            };\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nconst getDropByGroup = (state: IReactVaporState, {groupId}: {groupId: string}) =>\r\n    (state.drop && state.drop[groupId]) || undefined;\r\n\r\nconst isDropOpen = (state: IReactVaporState, {id, groupId}: {id: string; groupId: string}): boolean => {\r\n    const drop = getDropByGroup(state, {groupId});\r\n    return drop && drop.id === id ? drop.isOpen : false;\r\n};\r\n\r\nexport const DropSelectors = {\r\n    isOpen: isDropOpen,\r\n    getByGroup: getDropByGroup,\r\n};\r\n"}}]);
//# sourceMappingURL=314.bundle.js.map