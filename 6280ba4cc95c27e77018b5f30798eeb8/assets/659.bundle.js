(window.webpackJsonp=window.webpackJsonp||[]).push([[659],{1761:function(e,t,a){"use strict";a.r(t),t.default="import {IReactVaporExampleState} from '../../../docs/Reducers';\nimport {BasePayload, IReduxAction} from '../../utils/ReduxUtils';\nimport {RefreshCallbackActionType} from './RefeshCallbackActions';\n\nexport enum RefreshStatus {\n    started = 'started',\n    stopped = 'stopped',\n    inProgress = 'inProgress',\n}\n\nexport interface IRefreshCallbackReducerState {\n    [id: string]: RefreshStatus;\n}\n\nexport const refreshCallbackInitialState: IRefreshCallbackReducerState = {};\n\nexport const refreshCallBackReducer = (\n    state: IRefreshCallbackReducerState = refreshCallbackInitialState,\n    action: IReduxAction<BasePayload>\n): IRefreshCallbackReducerState => {\n    switch (action.type) {\n        case RefreshCallbackActionType.start:\n            return {\n                ...state,\n                [action.payload.id]: RefreshStatus.started,\n            };\n        case RefreshCallbackActionType.stop:\n            return {\n                ...state,\n                [action.payload.id]: RefreshStatus.stopped,\n            };\n        case RefreshCallbackActionType.inProgress:\n            return {\n                ...state,\n                [action.payload.id]: RefreshStatus.inProgress,\n            };\n        default:\n            return state;\n    }\n};\n\nconst getRefreshStatus = (state: IReactVaporExampleState, {id}: {id: string}): string => state.refreshCallback?.[id];\n\nexport const RefreshStatusSelectors = {\n    getRefreshStatus,\n};\n"}}]);
//# sourceMappingURL=659.bundle.js.map