(window.webpackJsonp=window.webpackJsonp||[]).push([[463],{1568:function(t,d,a){"use strict";a.r(d),d.default="import {IReduxAction} from '../../utils/ReduxUtils';\r\n\r\nexport const LastUpdatedActions = {\r\n    addLastUpdated: 'ADD_LAST_UPDATED',\r\n    removeLastUpdated: 'REMOVE_LAST_UPDATED',\r\n    changeLastUpdated: 'CHANGE_LAST_UPDATED',\r\n};\r\n\r\nexport interface ILastUpdatedPayload {\r\n    id: string;\r\n}\r\n\r\nexport const addLastUpdated = (id: string): IReduxAction<ILastUpdatedPayload> => ({\r\n    type: LastUpdatedActions.addLastUpdated,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const removeLastUpdated = (id: string): IReduxAction<ILastUpdatedPayload> => ({\r\n    type: LastUpdatedActions.removeLastUpdated,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const changeLastUpdated = (id: string): IReduxAction<ILastUpdatedPayload> => ({\r\n    type: LastUpdatedActions.changeLastUpdated,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n"}}]);
//# sourceMappingURL=463.bundle.js.map