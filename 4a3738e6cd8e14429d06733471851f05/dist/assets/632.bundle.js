(window.webpackJsonp=window.webpackJsonp||[]).push([[632],{1718:function(n,r,e){"use strict";e.r(r),r.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {IInputProps} from '../../input/Input';\r\nimport {Radio} from '../Radio';\r\n\r\ndescribe('Radio', () => {\r\n    const anId = 'patate';\r\n\r\n    describe('<Radio />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<Radio id={anId} />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<Radio />', () => {\r\n        let radio: ReactWrapper<IInputProps, any>;\r\n\r\n        beforeEach(() => {\r\n            radio = mount(<Radio id={anId} />, {attachTo: document.getElementById('App')});\r\n        });\r\n\r\n        afterEach(() => {\r\n            radio.detach();\r\n        });\r\n\r\n        it('should set id prop', () => {\r\n            const innerInput = radio.find('input').first();\r\n            expect(innerInput.prop('id')).toBe(anId);\r\n        });\r\n\r\n        it('should set name prop when specified', () => {\r\n            const name = 'salut';\r\n            expect(radio.find('input').prop('name')).toBe(undefined);\r\n\r\n            radio\r\n                .setProps({name})\r\n                .mount()\r\n                .update();\r\n            expect(radio.find('input').prop('name')).toBe(name);\r\n        });\r\n\r\n        it('should set value prop when specified', () => {\r\n            const value = 'blueberry';\r\n            expect(radio.prop('value')).toBe(undefined);\r\n\r\n            radio.setProps({value}).mount();\r\n            expect(radio.prop('value')).toBe(value);\r\n        });\r\n\r\n        it('should set not disable inner input when disabled prop is not specified', () => {\r\n            const innerInput = radio.find('input').first();\r\n            expect(innerInput.prop('disabled')).toBe(false);\r\n        });\r\n\r\n        it('should set not check inner input when checked prop is not specified', () => {\r\n            const innerInput = radio.find('input').first();\r\n            expect(innerInput.prop('checked')).toBe(false);\r\n        });\r\n\r\n        it('should set disabled prop when specified', () => {\r\n            radio\r\n                .setProps({disabled: false})\r\n                .mount()\r\n                .update();\r\n            expect(radio.find('input').prop('disabled')).toBe(false);\r\n\r\n            radio\r\n                .setProps({disabled: true})\r\n                .mount()\r\n                .update();\r\n            expect(radio.find('input').prop('disabled')).toBe(true);\r\n        });\r\n\r\n        it('should set checked prop when specified', () => {\r\n            radio\r\n                .setProps({checked: false})\r\n                .mount()\r\n                .update();\r\n            expect(radio.find('input').prop('checked')).toBe(false);\r\n\r\n            radio\r\n                .setProps({checked: true})\r\n                .mount()\r\n                .update();\r\n            expect(radio.find('input').prop('checked')).toBe(true);\r\n        });\r\n\r\n        it('should set classes when specified', () => {\r\n            const innerClass = 'salut';\r\n            const classes = [innerClass];\r\n            expect(radio.find('div').hasClass(innerClass)).toBe(false);\r\n\r\n            radio\r\n                .setProps({classes})\r\n                .mount()\r\n                .update();\r\n            expect(radio.find('div').hasClass(innerClass)).toBe(true);\r\n        });\r\n\r\n        it('should call prop onChange when specified on click', () => {\r\n            const changeSpy = jasmine.createSpy('onChange');\r\n            const innerInput = radio.find('input');\r\n\r\n            radio.setProps({onChange: changeSpy}).mount();\r\n            innerInput.simulate('change');\r\n\r\n            expect(changeSpy.calls.count()).toBe(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=632.bundle.js.map