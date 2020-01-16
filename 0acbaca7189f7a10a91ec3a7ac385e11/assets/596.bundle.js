(window.webpackJsonp=window.webpackJsonp||[]).push([[596],{1690:function(n,t,e){"use strict";e.r(t),t.default="import {ShallowWrapper} from 'enzyme';\r\nimport {shallowWithStore} from 'enzyme-redux';\r\nimport * as React from 'react';\r\n\r\nimport {keyCode} from '../../../utils/InputUtils';\r\nimport {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';\r\nimport {Button} from '../../button/Button';\r\nimport {NumericInputActions} from '../NumericInputActions';\r\nimport {NumericInputConnected} from '../NumericInputConnected';\r\nimport {initialNumericInputState} from '../NumericInputReducers';\r\n\r\ndescribe('Numeric Input', () => {\r\n    describe('<NumericInputConnected />', () => {\r\n        let store: ReactVaporMockStore;\r\n        const id = 'numeric-input';\r\n        const initialValue = 50;\r\n\r\n        beforeEach(() => {\r\n            store = getStoreMock({\r\n                numericInputs: {\r\n                    [id]: {value: initialValue, hasError: false},\r\n                },\r\n            });\r\n        });\r\n\r\n        it('should not throw', () => {\r\n            expect(() => {\r\n                store = getStoreMock({numericInputs: {}});\r\n\r\n                const component = shallowWithStore(<NumericInputConnected id={id} />, store).dive();\r\n                component.unmount();\r\n            }).not.toThrow();\r\n        });\r\n\r\n        it('should mount with the initial value when passed as a prop', () => {\r\n            const expectedInitialValue = 1000;\r\n            const expectedAction = NumericInputActions.mount(id, expectedInitialValue);\r\n\r\n            shallowWithStore(<NumericInputConnected id={id} initialValue={expectedInitialValue} />, store).dive();\r\n\r\n            expect(store.getActions()).toContain(expectedAction);\r\n        });\r\n\r\n        it('should disable the decrement button when the value is lower than the min', () => {\r\n            const component = shallowWithStore(\r\n                <NumericInputConnected id={id} initialValue={initialValue} min={initialValue} />,\r\n                store\r\n            ).dive();\r\n\r\n            expect(\r\n                component\r\n                    .find(Button)\r\n                    .at(0)\r\n                    .prop('enabled')\r\n            ).toBe(false);\r\n        });\r\n\r\n        it('should trigger a setValue onClick on the decrement button', () => {\r\n            const component = shallowWithStore(\r\n                <NumericInputConnected id={id} initialValue={initialValue} />,\r\n                store\r\n            ).dive();\r\n\r\n            component\r\n                .find(Button)\r\n                .at(0)\r\n                .prop('onClick')();\r\n            expect(store.getActions()).toContain(NumericInputActions.setValue(id, initialValue - 1));\r\n        });\r\n\r\n        it('should decrement by the step prop value onClick on the increment button', () => {\r\n            const step = 10;\r\n            const component = shallowWithStore(\r\n                <NumericInputConnected id={id} initialValue={initialValue} step={step} />,\r\n                store\r\n            ).dive();\r\n\r\n            component\r\n                .find(Button)\r\n                .at(0)\r\n                .prop('onClick')();\r\n            expect(store.getActions()).toContain(NumericInputActions.setValue(id, initialValue - step));\r\n        });\r\n        describe('keyboard events', () => {\r\n            const step = 10;\r\n            let input: ShallowWrapper;\r\n\r\n            beforeEach(() => {\r\n                const component = shallowWithStore(\r\n                    <NumericInputConnected id={id} initialValue={initialValue} step={step} />,\r\n                    store\r\n                ).dive();\r\n                input = component.find('.js-numeric-input');\r\n            });\r\n            it('should increment by the step prop value onKeyDown on the input', () => {\r\n                input.simulate('keydown', {keyCode: keyCode.upArrow});\r\n                expect(store.getActions()).toContain(NumericInputActions.setValue(id, initialValue + step));\r\n            });\r\n\r\n            it('should decrement by the step prop value onKeyDown on the input', () => {\r\n                input.simulate('keydown', {keyCode: keyCode.downArrow});\r\n                expect(store.getActions()).toContain(NumericInputActions.setValue(id, initialValue - step));\r\n            });\r\n\r\n            it('should not change by another arrow than up or down on keydown', () => {\r\n                store.clearActions();\r\n                input.simulate('keydown', {keyCode: keyCode.rightArrow});\r\n                expect(store.getActions()).toEqual([]);\r\n            });\r\n        });\r\n\r\n        it('should disable the increment button when the value is greater than the max', () => {\r\n            const component = shallowWithStore(\r\n                <NumericInputConnected id={id} initialValue={initialValue} max={initialValue} />,\r\n                store\r\n            ).dive();\r\n\r\n            expect(\r\n                component\r\n                    .find(Button)\r\n                    .at(1)\r\n                    .prop('enabled')\r\n            ).toBe(false);\r\n        });\r\n\r\n        it('should not overflow the min onClick on the decrement button', () => {\r\n            const step = 10;\r\n            const min = initialValue - 1;\r\n            const component = shallowWithStore(\r\n                <NumericInputConnected id={id} initialValue={initialValue} step={step} min={min} />,\r\n                store\r\n            ).dive();\r\n\r\n            component\r\n                .find(Button)\r\n                .at(0)\r\n                .prop('onClick')();\r\n            expect(store.getActions()).toContain(NumericInputActions.setValue(id, min, min));\r\n        });\r\n\r\n        it('should trigger a setValue onClick on the increment button', () => {\r\n            const component = shallowWithStore(\r\n                <NumericInputConnected id={id} initialValue={initialValue} />,\r\n                store\r\n            ).dive();\r\n\r\n            component\r\n                .find(Button)\r\n                .at(1)\r\n                .prop('onClick')();\r\n            expect(store.getActions()).toContain(NumericInputActions.setValue(id, initialValue + 1));\r\n        });\r\n\r\n        it('should increment by the step prop value onClick on the increment button', () => {\r\n            const step = 10;\r\n            const component = shallowWithStore(\r\n                <NumericInputConnected id={id} initialValue={initialValue} step={step} />,\r\n                store\r\n            ).dive();\r\n\r\n            component\r\n                .find(Button)\r\n                .at(1)\r\n                .prop('onClick')();\r\n            expect(store.getActions()).toContain(NumericInputActions.setValue(id, initialValue + step));\r\n        });\r\n\r\n        it('should not overflow the max onClick on the increment button', () => {\r\n            const step = 10;\r\n            const max = initialValue + 1;\r\n            const component = shallowWithStore(\r\n                <NumericInputConnected id={id} initialValue={initialValue} step={step} max={max} />,\r\n                store\r\n            ).dive();\r\n\r\n            component\r\n                .find(Button)\r\n                .at(1)\r\n                .prop('onClick')();\r\n            expect(store.getActions()).toContain(NumericInputActions.setValue(id, max, undefined, max));\r\n        });\r\n\r\n        it('should display the error if the input is in error', () => {\r\n            const expectedMessage = 'why?!?';\r\n            store = getStoreMock({\r\n                numericInputs: {\r\n                    [id]: {value: 20, hasError: true},\r\n                },\r\n            });\r\n            const component = shallowWithStore(\r\n                <NumericInputConnected id={id} invalidMessage={expectedMessage} />,\r\n                store\r\n            ).dive();\r\n            expect(component.find('.generic-form-error').text()).toBe(expectedMessage);\r\n        });\r\n\r\n        it('should trigger a setValue when the input change', () => {\r\n            const newValue = '125';\r\n            const component = shallowWithStore(<NumericInputConnected id={id} />, store).dive();\r\n\r\n            component.find('.js-numeric-input').simulate('change', {target: {value: newValue}});\r\n            expect(store.getActions()).toContain(NumericInputActions.setValue(id, newValue));\r\n        });\r\n\r\n        describe('when the value is a string', () => {\r\n            beforeEach(() => {\r\n                store = getStoreMock({\r\n                    numericInputs: {\r\n                        [id]: {value: 'not over 9000', hasError: false},\r\n                    },\r\n                });\r\n            });\r\n\r\n            it('should decrement to the default value if initialValue is not defined', () => {\r\n                const component = shallowWithStore(<NumericInputConnected id={id} />, store).dive();\r\n\r\n                component\r\n                    .find(Button)\r\n                    .at(0)\r\n                    .prop('onClick')();\r\n                expect(store.getActions()).toContain(NumericInputActions.setValue(id, initialNumericInputState.value));\r\n            });\r\n\r\n            it('should increment to the default value if initialValue is not defined', () => {\r\n                const component = shallowWithStore(<NumericInputConnected id={id} />, store).dive();\r\n\r\n                component\r\n                    .find(Button)\r\n                    .at(1)\r\n                    .prop('onClick')();\r\n                expect(store.getActions()).toContain(NumericInputActions.setValue(id, initialNumericInputState.value));\r\n            });\r\n\r\n            it('should decrement to the initialValue if initialValue is defined', () => {\r\n                const component = shallowWithStore(\r\n                    <NumericInputConnected id={id} initialValue={initialValue} />,\r\n                    store\r\n                ).dive();\r\n\r\n                component\r\n                    .find(Button)\r\n                    .at(0)\r\n                    .prop('onClick')();\r\n                expect(store.getActions()).toContain(NumericInputActions.setValue(id, initialValue));\r\n            });\r\n\r\n            it('should increment to the default value if initialValue is not defined', () => {\r\n                const component = shallowWithStore(\r\n                    <NumericInputConnected id={id} initialValue={initialValue} />,\r\n                    store\r\n                ).dive();\r\n\r\n                component\r\n                    .find(Button)\r\n                    .at(1)\r\n                    .prop('onClick')();\r\n                expect(store.getActions()).toContain(NumericInputActions.setValue(id, initialValue));\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=596.bundle.js.map