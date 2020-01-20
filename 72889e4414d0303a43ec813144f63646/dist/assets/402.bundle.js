(window.webpackJsonp=window.webpackJsonp||[]).push([[402],{1499:function(n,e,r){"use strict";r.r(e),e.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {UUID} from '../../../utils/UUID';\r\nimport {FlatSelect, IFlatSelectOwnProps, IFlatSelectProps} from '../FlatSelect';\r\nimport {FlatSelectOption, IFlatSelectOptionProps} from '../FlatSelectOption';\r\n\r\ndescribe('FlatSelect', () => {\r\n    const id = 'id';\r\n    const defaultOptions: IFlatSelectOptionProps[] = [\r\n        {\r\n            id: UUID.generate(),\r\n            option: {\r\n                content: 'test',\r\n            },\r\n        },\r\n        {\r\n            id: UUID.generate(),\r\n            option: {\r\n                content: 'test',\r\n            },\r\n        },\r\n    ];\r\n\r\n    const ownProps: IFlatSelectOwnProps = {\r\n        id,\r\n        options: defaultOptions,\r\n        classes: ['test'],\r\n        group: false,\r\n        optionPicker: false,\r\n    };\r\n\r\n    describe('<FlatSelect />', () => {\r\n        let flatSelect: ReactWrapper<IFlatSelectProps, any>;\r\n        let flatSelectInstance: FlatSelect;\r\n\r\n        const renderFlatSelect = (props?: IFlatSelectProps) => {\r\n            flatSelect = mount(<FlatSelect {...props} />, {attachTo: document.getElementById('App')});\r\n            flatSelectInstance = flatSelect.instance() as FlatSelect;\r\n        };\r\n\r\n        afterEach(() => {\r\n            flatSelect.detach();\r\n        });\r\n\r\n        describe('default props', () => {\r\n            beforeEach(() => {\r\n                renderFlatSelect(ownProps);\r\n            });\r\n\r\n            it('should have the same object sent has parameter than the component props', () => {\r\n                expect(flatSelect.props()).toEqual(ownProps);\r\n            });\r\n        });\r\n\r\n        describe('render', () => {\r\n            it('should render without error', () => {\r\n                expect(() => {\r\n                    renderFlatSelect(_.extend({}, ownProps));\r\n                }).not.toThrow();\r\n            });\r\n\r\n            it('should render without error with no options provided', () => {\r\n                expect(() => {\r\n                    renderFlatSelect(\r\n                        _.extend({}, ownProps, {\r\n                            options: [],\r\n                        })\r\n                    );\r\n                }).not.toThrow();\r\n            });\r\n        });\r\n\r\n        describe('event props', () => {\r\n            beforeEach(() => {\r\n                renderFlatSelect(ownProps);\r\n            });\r\n\r\n            it('should call onMount prop if set when mounting', () => {\r\n                const onRenderSpy = jasmine.createSpy('onRender');\r\n\r\n                expect(() => flatSelectInstance.componentWillMount()).not.toThrow();\r\n\r\n                flatSelect.unmount();\r\n                flatSelect.setProps({onRender: onRenderSpy});\r\n                flatSelect.mount();\r\n\r\n                expect(onRenderSpy).toHaveBeenCalled();\r\n            });\r\n\r\n            it('should call onDestroy prop if set when will unmount', () => {\r\n                const onDestroy = jasmine.createSpy('onDestroy');\r\n\r\n                expect(() => flatSelectInstance.componentWillUnmount()).not.toThrow();\r\n\r\n                flatSelect.setProps({onDestroy});\r\n                flatSelect.unmount();\r\n\r\n                expect(onDestroy).toHaveBeenCalled();\r\n            });\r\n\r\n            it('should call onClick if defined when click the FlatSelectOption button', () => {\r\n                const onClick = jasmine.createSpy('onClick');\r\n                flatSelect.setProps({onClick});\r\n\r\n                flatSelect\r\n                    .find(FlatSelectOption)\r\n                    .first()\r\n                    .props()\r\n                    .onClick({} as any);\r\n\r\n                expect(onClick).toHaveBeenCalled();\r\n            });\r\n\r\n            it('should call onOptionClick if defined when click the FlatSelectOption button', () => {\r\n                const onOptionClick = jasmine.createSpy('onOptionClick');\r\n                flatSelect.setProps({onOptionClick});\r\n\r\n                flatSelect\r\n                    .find(FlatSelectOption)\r\n                    .first()\r\n                    .props()\r\n                    .onClick({} as any);\r\n\r\n                expect(onOptionClick).toHaveBeenCalled();\r\n            });\r\n        });\r\n\r\n        describe('Props functionality', () => {\r\n            it('should add the class mod-btn-group if group is set to true', () => {\r\n                renderFlatSelect(\r\n                    _.extend({}, ownProps, {\r\n                        group: true,\r\n                    })\r\n                );\r\n\r\n                expect(flatSelect.find('.flat-select').hasClass('mod-btn-group')).toBe(true);\r\n            });\r\n\r\n            it('should add the class mod-option-picker if optionPicker is set to true', () => {\r\n                renderFlatSelect(\r\n                    _.extend({}, ownProps, {\r\n                        optionPicker: true,\r\n                    })\r\n                );\r\n\r\n                expect(flatSelect.find('.flat-select').hasClass('mod-option-picker')).toBe(true);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=402.bundle.js.map