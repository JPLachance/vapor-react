(window.webpackJsonp=window.webpackJsonp||[]).push([[720],{1819:function(n,e,t){"use strict";t.r(e),e.default="import {IReduxAction} from '../../utils/ReduxUtils';\n\nexport const SliderActionTypes = {\n    setValue: 'SLIDER_SET_VALUE',\n};\n\nexport interface ISetSliderValuePayload {\n    id: string;\n    value: number;\n}\n\nconst setValue = (id: string, value: number): IReduxAction<ISetSliderValuePayload> => ({\n    type: SliderActionTypes.setValue,\n    payload: {id, value},\n});\n\nexport const SliderActions = {\n    setValue,\n};\n"}}]);
//# sourceMappingURL=720.bundle.js.map