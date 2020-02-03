(window.webpackJsonp=window.webpackJsonp||[]).push([[723],{1822:function(e,n,t){"use strict";t.r(n),n.default="import {IReduxAction} from '../../utils/ReduxUtils';\nimport {ISetSliderValuePayload, SliderActionTypes} from './SliderActions';\n\nexport interface ISlidersState {\n    [key: string]: ISliderState;\n}\n\nexport interface ISliderState {\n    id: string;\n    value: number;\n}\n\nexport const SliderReducer = (state: ISlidersState = null, action: IReduxAction<ISetSliderValuePayload>) => {\n    if (action?.type === SliderActionTypes.setValue) {\n        return {\n            ...state,\n            [action.payload.id]: {\n                id: action.payload.id,\n                value: action.payload.value,\n            },\n        };\n    }\n    return state;\n};\n"}}]);
//# sourceMappingURL=723.bundle.js.map