(window.webpackJsonp=window.webpackJsonp||[]).push([[614],{1709:function(n,e,t){"use strict";t.r(e),e.default="import {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {\r\n    addOptionsCycle,\r\n    changeOptionsCycle,\r\n    IChangeOptionsCyclePayload,\r\n    IOptionsCyclePayload,\r\n    OptionsCycleActions,\r\n    removeOptionsCycle,\r\n} from '../OptionsCycleActions';\r\n\r\ndescribe('Options cycle', () => {\r\n    describe('OptionsCycleActions', () => {\r\n        const OPTIONS_CYCLE_ID: string = 'option-cycle';\r\n        const CURRENT_OPTION: number = 3;\r\n\r\n        it('should create an action to add the options cycle', () => {\r\n            const expectedAction: IReduxAction<IChangeOptionsCyclePayload> = {\r\n                type: OptionsCycleActions.add,\r\n                payload: {\r\n                    id: OPTIONS_CYCLE_ID,\r\n                    currentOption: CURRENT_OPTION,\r\n                },\r\n            };\r\n\r\n            expect(addOptionsCycle(OPTIONS_CYCLE_ID, CURRENT_OPTION)).toEqual(expectedAction);\r\n        });\r\n\r\n        it('should create an action to change the options cycle', () => {\r\n            const expectedAction: IReduxAction<IChangeOptionsCyclePayload> = {\r\n                type: OptionsCycleActions.change,\r\n                payload: {\r\n                    id: OPTIONS_CYCLE_ID,\r\n                    currentOption: CURRENT_OPTION,\r\n                },\r\n            };\r\n\r\n            expect(changeOptionsCycle(OPTIONS_CYCLE_ID, CURRENT_OPTION)).toEqual(expectedAction);\r\n        });\r\n\r\n        it('should create an action to remove the options cycle', () => {\r\n            const expectedAction: IReduxAction<IOptionsCyclePayload> = {\r\n                type: OptionsCycleActions.remove,\r\n                payload: {\r\n                    id: OPTIONS_CYCLE_ID,\r\n                },\r\n            };\r\n\r\n            expect(removeOptionsCycle(OPTIONS_CYCLE_ID)).toEqual(expectedAction);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=614.bundle.js.map