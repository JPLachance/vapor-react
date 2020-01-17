(window.webpackJsonp=window.webpackJsonp||[]).push([[618],{1706:function(o,r,e){"use strict";e.r(r),r.default="import * as _ from 'underscore';\r\n\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {PopoverActions, PopoverPayload} from './PopoverActions';\r\n\r\nexport interface PopoverState {\r\n    id: string;\r\n    isOpen: boolean;\r\n}\r\n\r\nexport const popoverInitialState: PopoverState = {\r\n    id: undefined,\r\n    isOpen: undefined,\r\n};\r\n\r\nexport const popoversInitialState: PopoverState[] = [];\r\n\r\nexport const popoversReducer = (\r\n    state: PopoverState[] = popoversInitialState,\r\n    action: IReduxAction<PopoverPayload>\r\n): PopoverState[] => {\r\n    switch (action.type) {\r\n        case PopoverActions.add:\r\n            return [...state, action.payload as PopoverState];\r\n        case PopoverActions.remove:\r\n            return _.reject(state, (popover: PopoverState) => popover.id === action.payload.id);\r\n        case PopoverActions.setIsOpen:\r\n            return state.map((popover: PopoverState) =>\r\n                popover.id === action.payload.id ? (action.payload as PopoverState) : popover\r\n            );\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=618.bundle.js.map