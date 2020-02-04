(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{1351:function(r,n,e){"use strict";e.r(n),n.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {Radio} from '../../radio/Radio';\r\nimport {ChildForm} from '../ChildForm';\r\nimport {IToggleFormProps, ToggleForm} from '../ToggleForm';\r\n\r\ndescribe('ToggleForm', () => {\r\n    describe('<ToggleForm />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<ToggleForm />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<ToggleForm />', () => {\r\n        let toggleForm: ReactWrapper<IToggleFormProps, any>;\r\n\r\n        beforeEach(() => {\r\n            toggleForm = mount(\r\n                <ToggleForm>\r\n                    <Radio id=\"id\" />\r\n                    <ChildForm />\r\n                </ToggleForm>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n        });\r\n\r\n        afterEach(() => {\r\n            toggleForm.detach();\r\n        });\r\n\r\n        it('should set classes when specified', () => {\r\n            const innerClass = 'salut';\r\n            const classes = [innerClass];\r\n            expect(\r\n                toggleForm\r\n                    .find('div')\r\n                    .first()\r\n                    .hasClass(innerClass)\r\n            ).toBe(false);\r\n\r\n            toggleForm\r\n                .setProps({classes})\r\n                .mount()\r\n                .update();\r\n            expect(\r\n                toggleForm\r\n                    .find('div')\r\n                    .first()\r\n                    .hasClass(innerClass)\r\n            ).toBe(true);\r\n        });\r\n\r\n        it('should check inner radio control when checked property is true', () => {\r\n            toggleForm\r\n                .setProps({checked: false})\r\n                .mount()\r\n                .update();\r\n            expect(\r\n                toggleForm\r\n                    .find('Radio')\r\n                    .first()\r\n                    .prop('checked')\r\n            ).toBe(false);\r\n\r\n            toggleForm\r\n                .setProps({checked: true})\r\n                .mount()\r\n                .update();\r\n            expect(\r\n                toggleForm\r\n                    .find('Radio')\r\n                    .first()\r\n                    .prop('checked')\r\n            ).toBe(true);\r\n        });\r\n\r\n        it('should not throw when parent control is clicked and prop is undefined', () => {\r\n            const parentControlInnerInput = toggleForm.find('.radio-option').first();\r\n\r\n            toggleForm.mount();\r\n            expect(() => parentControlInnerInput.simulate('click')).not.toThrow();\r\n        });\r\n\r\n        it('should call onClick handler when parent control is clicked and prop is set', () => {\r\n            const clickSpy = jasmine.createSpy('onClick');\r\n            const parentControlInnerInput = toggleForm.find('.radio-option').first();\r\n\r\n            toggleForm.setProps({onClick: clickSpy});\r\n            toggleForm.mount();\r\n            parentControlInnerInput.simulate('click');\r\n\r\n            expect(clickSpy.calls.count()).toBe(1);\r\n        });\r\n\r\n        it('should disable ChildForm children when checked property is false', () => {\r\n            expect(\r\n                toggleForm\r\n                    .find('ChildForm')\r\n                    .first()\r\n                    .prop('disabled')\r\n            ).toBe(true);\r\n\r\n            toggleForm\r\n                .setProps({checked: false})\r\n                .mount()\r\n                .update();\r\n            expect(\r\n                toggleForm\r\n                    .find('ChildForm')\r\n                    .first()\r\n                    .prop('disabled')\r\n            ).toBe(true);\r\n\r\n            toggleForm\r\n                .setProps({checked: true})\r\n                .mount()\r\n                .update();\r\n            expect(\r\n                toggleForm\r\n                    .find('ChildForm')\r\n                    .first()\r\n                    .prop('disabled')\r\n            ).toBe(false);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=241.bundle.js.map