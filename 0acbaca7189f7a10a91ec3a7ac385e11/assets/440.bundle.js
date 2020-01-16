(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{1536:function(n,e,r){"use strict";r.r(e),e.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {Svg} from '../../svg/Svg';\r\nimport {IInlinePromptOptions, InlinePrompt} from '../InlinePrompt';\r\n\r\ndescribe('InlinePrompt', () => {\r\n    let options: IInlinePromptOptions;\r\n\r\n    describe('<InlinePrompt />', () => {\r\n        it('should render without errors', () => {\r\n            options = {\r\n                onClick: jasmine.createSpy('onClick'),\r\n                userChoice: {},\r\n            };\r\n\r\n            expect(() => {\r\n                shallow(<InlinePrompt options={options} />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<InlinePrompt />', () => {\r\n        let inlinePrompt: ReactWrapper;\r\n        let onClickSpy: jasmine.Spy;\r\n\r\n        beforeEach(() => {\r\n            onClickSpy = jasmine.createSpy('onClick');\r\n            options = {\r\n                onClick: onClickSpy,\r\n                userChoice: {\r\n                    icon: 'icon',\r\n                    description: 'description',\r\n                    cancel: 'cancel',\r\n                    choices: {\r\n                        confirm: 'confirm',\r\n                        other: 'other',\r\n                        newChoice: 'some other choice',\r\n                    },\r\n                },\r\n                isOpened: false,\r\n                className: 'some-class',\r\n            };\r\n\r\n            inlinePrompt = mount(<InlinePrompt options={options} />, {attachTo: document.getElementById('App')});\r\n        });\r\n\r\n        afterEach(() => {\r\n            inlinePrompt.detach();\r\n        });\r\n\r\n        it('should have the className as a class if defined', () => {\r\n            const newOptions: IInlinePromptOptions = _.extend({}, options, {className: undefined});\r\n\r\n            expect(inlinePrompt.find('.prompt-' + options.className).length).toBe(1);\r\n\r\n            inlinePrompt.setProps({options: newOptions});\r\n            expect(inlinePrompt.find('.prompt-' + options.className).length).toBe(0);\r\n            expect(inlinePrompt.find('.prompt-info').length).toBe(1);\r\n        });\r\n\r\n        it('should have the opened as a class if opened', () => {\r\n            const newOptions = _.extend({}, options, {isOpened: true});\r\n\r\n            expect(inlinePrompt.find('.opened').length).toBe(0);\r\n\r\n            inlinePrompt.setProps({options: newOptions});\r\n            expect(inlinePrompt.find('.opened').length).toBe(1);\r\n        });\r\n\r\n        it('should display an icon if there is one set in the user choice', () => {\r\n            const newUserChoice = _.extend({}, options.userChoice, {icon: undefined});\r\n            const newOptions = _.extend({}, options, {userChoice: newUserChoice});\r\n\r\n            expect(inlinePrompt.find(Svg).length).toBe(1);\r\n\r\n            inlinePrompt.setProps({options: newOptions});\r\n            expect(inlinePrompt.find(Svg).length).toBe(0);\r\n        });\r\n\r\n        it('should render as many choice buttons as there are choices', () => {\r\n            expect(inlinePrompt.find('.prompt-action.action').length).toBe(_.size(options.userChoice.choices));\r\n        });\r\n\r\n        it('should display the description if there is one set in the user choice', () => {\r\n            const newUserChoice = _.extend({}, options.userChoice, {description: undefined});\r\n            const newOptions = _.extend({}, options, {userChoice: newUserChoice});\r\n\r\n            expect(inlinePrompt.find('.description').length).toBe(1);\r\n\r\n            inlinePrompt.setProps({options: newOptions});\r\n            expect(inlinePrompt.find('.description').length).toBe(0);\r\n        });\r\n\r\n        it('should have a cancel button if there is one set in the user choice', () => {\r\n            const newUserChoice = _.extend({}, options.userChoice, {cancel: undefined});\r\n            const newOptions = _.extend({}, options, {userChoice: newUserChoice});\r\n\r\n            expect(inlinePrompt.find('.cancel').length).toBe(1);\r\n\r\n            inlinePrompt.setProps({options: newOptions});\r\n            expect(inlinePrompt.find('.cancel').length).toBe(0);\r\n        });\r\n\r\n        it('should call the onClick prop when choice is clicked', () => {\r\n            inlinePrompt\r\n                .find('.prompt-action')\r\n                .first()\r\n                .simulate('click');\r\n            expect(onClickSpy.calls.count()).toBe(1);\r\n        });\r\n\r\n        it('should call the onCancel prop if set when clicking the cancel button', () => {\r\n            const onCancelSpy = jasmine.createSpy('onCancel');\r\n\r\n            inlinePrompt.setProps({options: options, onCancel: onCancelSpy});\r\n            inlinePrompt\r\n                .find('.cancel')\r\n                .first()\r\n                .simulate('click');\r\n            expect(onCancelSpy.calls.count()).toBe(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=440.bundle.js.map