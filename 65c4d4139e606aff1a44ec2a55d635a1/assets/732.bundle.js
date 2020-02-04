(window.webpackJsonp=window.webpackJsonp||[]).push([[732],{1832:function(e,t,i){"use strict";i.r(t),t.default="import {ISliderState} from '../SliderReducers';\nimport {SliderSelectors} from '../SliderSelectors';\n\ndescribe('SliderSelectors', () => {\n    describe('getSliderValue', () => {\n        it('should not throw when no slider exist at the specified id', () => {\n            expect(() => {\n                SliderSelectors.getSliderValue({sliders: []}, {id: '🥔'});\n            }).not.toThrow();\n        });\n        it('should return undefined when the slider does not exist in the state', () => {\n            expect(SliderSelectors.getSliderValue({sliders: []}, {id: '🥔'})).toBeUndefined();\n        });\n        it('should return the slider value if it exist in the state', () => {\n            const expectedSlider: ISliderState = {\n                id: '🥔',\n                value: 300,\n            };\n\n            const selectedSliderValue = SliderSelectors.getSliderValue({sliders: [expectedSlider]}, {id: '🥔'});\n\n            expect(selectedSliderValue).toEqual(expectedSlider.value);\n        });\n    });\n});\n"}}]);
//# sourceMappingURL=732.bundle.js.map