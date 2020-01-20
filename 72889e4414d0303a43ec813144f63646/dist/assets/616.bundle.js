(window.webpackJsonp=window.webpackJsonp||[]).push([[616],{1711:function(n,o,e){"use strict";e.r(o),o.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {IOptionsCycleProps, OptionsCycle} from '../OptionsCycle';\r\n\r\ndescribe('Options cycle', () => {\r\n    const OPTIONS = ['option 1', 'option 2', 'option 3', 'option 4'];\r\n\r\n    describe('<OptionsCycle />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<OptionsCycle options={OPTIONS} />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<OptionsCycle />', () => {\r\n        let optionsCycle: ReactWrapper<IOptionsCycleProps, any>;\r\n        let optionsCycleInstance: OptionsCycle;\r\n\r\n        beforeEach(() => {\r\n            optionsCycle = mount(<OptionsCycle options={OPTIONS} />, {attachTo: document.getElementById('App')});\r\n            optionsCycleInstance = optionsCycle.instance() as OptionsCycle;\r\n        });\r\n\r\n        afterEach(() => {\r\n            optionsCycle.detach();\r\n        });\r\n\r\n        it('should get the options as a prop', () => {\r\n            const optionsProp = optionsCycle.props().options;\r\n\r\n            expect(optionsProp).toBeDefined();\r\n            expect(optionsProp).toEqual(OPTIONS);\r\n        });\r\n\r\n        it('should call prop onRender on mounting if set', () => {\r\n            const renderSpy = jasmine.createSpy('onRender');\r\n\r\n            expect(() => optionsCycleInstance.componentDidMount()).not.toThrow();\r\n\r\n            optionsCycle.setProps({options: OPTIONS, onRender: renderSpy});\r\n            optionsCycle.unmount();\r\n            optionsCycle.mount();\r\n            expect(renderSpy.calls.count()).toBe(1);\r\n        });\r\n\r\n        it('should call prop onDestroy on unmounting if set', () => {\r\n            const destroySpy = jasmine.createSpy('onDestroy');\r\n\r\n            expect(() => optionsCycleInstance.componentWillUnmount()).not.toThrow();\r\n\r\n            optionsCycle.setProps({options: OPTIONS, onDestroy: destroySpy});\r\n            optionsCycle.mount();\r\n            optionsCycle.unmount();\r\n            expect(destroySpy.calls.count()).toBe(1);\r\n        });\r\n\r\n        it('should display the selected option', () => {\r\n            expect(optionsCycle.html()).toContain(OPTIONS[0]);\r\n\r\n            optionsCycle.setProps({options: OPTIONS, currentOption: 2});\r\n\r\n            expect(optionsCycle.html()).toContain(OPTIONS[2]);\r\n        });\r\n\r\n        it('should display the selected option even if it is not a string', () => {\r\n            const className = 'catch-me-if-you-can';\r\n            const options = [\r\n                <span className=\"something\" />,\r\n                <span className={className} />,\r\n                <span className=\"something-else\" />,\r\n            ];\r\n            optionsCycle.setProps({options, currentOption: 1});\r\n\r\n            expect(optionsCycle.find(`.${className}`).exists()).toBe(true);\r\n        });\r\n\r\n        it('should allow custom classes', () => {\r\n            const className = 'i-wonder';\r\n            const previousClassName = 'where-is';\r\n            const nextClassName = 'the-closest';\r\n            const buttonClassName = 'wonder-there-is';\r\n\r\n            optionsCycle.setProps({className, previousClassName, nextClassName, buttonClassName});\r\n\r\n            expect(optionsCycle.find(`.${className}`).exists()).toBe(true);\r\n            expect(optionsCycle.find(`.${previousClassName}`).exists()).toBe(true);\r\n            expect(optionsCycle.find(`.${nextClassName}`).exists()).toBe(true);\r\n            expect(optionsCycle.find(`.${buttonClassName}`).exists()).toBe(true);\r\n        });\r\n\r\n        it('should not throw on goToPreviousOption or goToNextOption when onChange prop is not defined', () => {\r\n            expect(() => {\r\n                optionsCycleInstance['goToPreviousOption'].call(optionsCycleInstance);\r\n            }).not.toThrow();\r\n\r\n            expect(() => {\r\n                optionsCycleInstance['goToNextOption'].call(optionsCycleInstance);\r\n            }).not.toThrow();\r\n        });\r\n\r\n        it('should call goToPreviousOption when clicking the previous arrow', () => {\r\n            const goToPreviousOptionSpy = spyOn<any>(optionsCycleInstance, 'goToPreviousOption');\r\n\r\n            optionsCycle.find('.previous-option').simulate('click');\r\n            expect(goToPreviousOptionSpy.calls.count()).toBe(1);\r\n        });\r\n\r\n        it('should call goToNextOption when clicking the previous arrow', () => {\r\n            const goToNextOptionSpy = spyOn<any>(optionsCycleInstance, 'goToNextOption');\r\n\r\n            optionsCycle.find('.next-option').simulate('click');\r\n            expect(goToNextOptionSpy.calls.count()).toBe(1);\r\n        });\r\n\r\n        it('should call onChange when clicking the previous or next arrow if the prop is defined', () => {\r\n            const onChangeSpy = jasmine.createSpy('onChange');\r\n\r\n            optionsCycle.setProps({options: OPTIONS, onChange: onChangeSpy});\r\n\r\n            optionsCycle.find('.previous-option').simulate('click');\r\n\r\n            expect(onChangeSpy.calls.count()).toBe(1);\r\n\r\n            optionsCycle.find('.next-option').simulate('click');\r\n\r\n            expect(onChangeSpy.calls.count()).toBe(2);\r\n        });\r\n\r\n        it('should call onChange with the last option when clicking on the previous arrow if the current option is the first one', () => {\r\n            const onChangeSpy = jasmine.createSpy('onChange');\r\n\r\n            optionsCycle.setProps({options: OPTIONS, onChange: onChangeSpy, currentOption: 0});\r\n            optionsCycle.find('.previous-option').simulate('click');\r\n\r\n            expect(onChangeSpy).toHaveBeenCalledWith(OPTIONS.length - 1);\r\n        });\r\n\r\n        it('should call onChange with the previous option when clicking on the previous arrow if the current option is not the first one', () => {\r\n            const onChangeSpy = jasmine.createSpy('onChange');\r\n\r\n            optionsCycle.setProps({options: OPTIONS, onChange: onChangeSpy, currentOption: 2});\r\n            optionsCycle.find('.previous-option').simulate('click');\r\n\r\n            expect(onChangeSpy).toHaveBeenCalledWith(1);\r\n        });\r\n\r\n        it('should call onChange with the first option when clicking on the next arrow if the current option is the last one', () => {\r\n            const onChangeSpy = jasmine.createSpy('onChange');\r\n\r\n            optionsCycle.setProps({options: OPTIONS, onChange: onChangeSpy, currentOption: OPTIONS.length - 1});\r\n            optionsCycle.find('.next-option').simulate('click');\r\n\r\n            expect(onChangeSpy).toHaveBeenCalledWith(0);\r\n        });\r\n\r\n        it('should call onChange with the previous option when clicking on the next arrow if the current option is not the last one', () => {\r\n            const onChangeSpy = jasmine.createSpy('onChange');\r\n\r\n            optionsCycle.setProps({options: OPTIONS, onChange: onChangeSpy, currentOption: 2});\r\n            optionsCycle.find('.next-option').simulate('click');\r\n\r\n            expect(onChangeSpy).toHaveBeenCalledWith(3);\r\n        });\r\n\r\n        it('should have the class \"mod-inline\" if isInline prop is set to true', () => {\r\n            expect(optionsCycle.find('.mod-inline').length).toBe(0);\r\n\r\n            optionsCycle.setProps({options: OPTIONS, isInline: true});\r\n\r\n            expect(optionsCycle.find('.mod-inline').length).toBe(1);\r\n        });\r\n\r\n        it('should show the option which is at index startAt if it is defined as a prop on mount or just show the first one', () => {\r\n            const startAt: number = 3;\r\n\r\n            expect(optionsCycle.html()).toContain(OPTIONS[0]);\r\n\r\n            optionsCycle.unmount();\r\n            optionsCycle = mount(<OptionsCycle options={OPTIONS} currentOption={startAt} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n\r\n            expect(optionsCycle.html()).toContain(OPTIONS[startAt]);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=616.bundle.js.map