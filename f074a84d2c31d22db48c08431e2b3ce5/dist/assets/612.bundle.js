(window.webpackJsonp=window.webpackJsonp||[]).push([[612],{1706:function(r,t,n){"use strict";n.r(t),t.default="import * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../ReactVapor';\r\n\r\nconst getCurrentOption = (state: IReactVaporState, props: {id: string; startAt?: number}): number => {\r\n    const cycle = _.findWhere(state.optionsCycles, {id: props.id});\r\n    return _.result(cycle, 'currentOption', props.startAt || 0);\r\n};\r\n\r\nexport const OptionsCycleSelectors = {\r\n    getCurrentOption,\r\n};\r\n"}}]);
//# sourceMappingURL=612.bundle.js.map