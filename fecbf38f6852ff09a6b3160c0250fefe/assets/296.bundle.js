(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{1392:function(e,r,t){"use strict";t.r(r),r.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport * as _ from 'underscore';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {CalendarConnected} from '../../calendar/CalendarConnected';\r\nimport {OptionPickerConnected} from '../../optionPicker/OptionPickerConnected';\r\nimport {DatePickerBox, DEFAULT_CLEAR_DATE_LABEL, IDatePickerBoxProps} from '../DatePickerBox';\r\nimport {DatesSelectionConnected} from '../DatesSelectionConnected';\r\n\r\ndescribe('Date picker', () => {\r\n    const DATE_PICKER_BOX_BASIC_PROPS: IDatePickerBoxProps = {\r\n        datesSelectionBoxes: [\r\n            {\r\n                title: 'The first box',\r\n            },\r\n        ],\r\n    };\r\n\r\n    describe('<DatePickerBox />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<DatePickerBox {...DATE_PICKER_BOX_BASIC_PROPS} />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<DatePicker />', () => {\r\n        let datePickerBox: ReactWrapper<IDatePickerBoxProps, any>;\r\n\r\n        beforeEach(() => {\r\n            datePickerBox = mount(<DatePickerBox {...DATE_PICKER_BOX_BASIC_PROPS} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n        });\r\n\r\n        afterEach(() => {\r\n            datePickerBox.detach();\r\n        });\r\n\r\n        it('should get the dates selection boxes as a prop', () => {\r\n            const datesSelectionBoxesProps = datePickerBox.props().datesSelectionBoxes;\r\n\r\n            expect(datesSelectionBoxesProps).toBeDefined();\r\n            expect(datesSelectionBoxesProps).toEqual(DATE_PICKER_BOX_BASIC_PROPS.datesSelectionBoxes);\r\n        });\r\n\r\n        it('should display a <Calendar /> component', () => {\r\n            expect(datePickerBox.find('Calendar').length).toBe(1);\r\n        });\r\n\r\n        it('should display as many <DatesSelection /> as there are datesSelectionBoxes', () => {\r\n            const moreBoxesProps: IDatePickerBoxProps = _.extend({}, DATE_PICKER_BOX_BASIC_PROPS, {\r\n                datesSelectionBoxes: [...DATE_PICKER_BOX_BASIC_PROPS.datesSelectionBoxes, {title: 'other box'}],\r\n            });\r\n\r\n            expect(datePickerBox.find('DatesSelection').length).toBe(\r\n                DATE_PICKER_BOX_BASIC_PROPS.datesSelectionBoxes.length\r\n            );\r\n\r\n            datePickerBox.setProps(moreBoxesProps);\r\n\r\n            expect(datePickerBox.find('DatesSelection').length).toBe(moreBoxesProps.datesSelectionBoxes.length);\r\n        });\r\n\r\n        it('should diplay a <OptionPicker /> for every dates selections box', () => {\r\n            const moreBoxesProps: IDatePickerBoxProps = _.extend({}, DATE_PICKER_BOX_BASIC_PROPS, {\r\n                datesSelectionBoxes: [...DATE_PICKER_BOX_BASIC_PROPS.datesSelectionBoxes, {title: 'other box'}],\r\n            });\r\n\r\n            expect(datePickerBox.find('OptionPicker').length).toBe(\r\n                DATE_PICKER_BOX_BASIC_PROPS.datesSelectionBoxes.length\r\n            );\r\n\r\n            datePickerBox.setProps(moreBoxesProps);\r\n\r\n            expect(datePickerBox.find('OptionPicker').length).toBe(moreBoxesProps.datesSelectionBoxes.length);\r\n        });\r\n\r\n        it('should not display a clear button when isClearable prop is false', () => {\r\n            expect(datePickerBox.find('button.clear-selection-button').length).toBe(0);\r\n        });\r\n\r\n        describe('DatePickerBox is clearable', () => {\r\n            const clearableBoxProps: IDatePickerBoxProps = _.extend({}, DATE_PICKER_BOX_BASIC_PROPS, {\r\n                isClearable: true,\r\n            });\r\n            let getClearButton: () => any;\r\n\r\n            beforeEach(() => {\r\n                datePickerBox.setProps(clearableBoxProps);\r\n                getClearButton = () => datePickerBox.find('button.clear-selection-button');\r\n            });\r\n\r\n            afterEach(() => {\r\n                datePickerBox.setProps(DATE_PICKER_BOX_BASIC_PROPS);\r\n            });\r\n\r\n            it('should display a clear button when isClearable prop is set to true', () => {\r\n                expect(getClearButton().length).toBe(1);\r\n            });\r\n\r\n            it('should display the clear label passed as a prop or use the default one', () => {\r\n                const clearLabel: string = 'CLEAR_LABEL';\r\n                const newProps: IDatePickerBoxProps = _.extend({}, datePickerBox.props(), {clearLabel});\r\n\r\n                expect(\r\n                    getClearButton()\r\n                        .first()\r\n                        .text()\r\n                ).toContain(DEFAULT_CLEAR_DATE_LABEL);\r\n\r\n                datePickerBox.setProps(newProps);\r\n\r\n                expect(\r\n                    getClearButton()\r\n                        .first()\r\n                        .text()\r\n                ).not.toContain(DEFAULT_CLEAR_DATE_LABEL);\r\n                expect(\r\n                    getClearButton()\r\n                        .first()\r\n                        .text()\r\n                ).toContain(clearLabel);\r\n            });\r\n\r\n            it('should call onClear prop when clicking on the clear button', () => {\r\n                const onClearSpy: jasmine.Spy = jasmine.createSpy('onClear');\r\n                const onClearProps: IDatePickerBoxProps = _.extend({}, datePickerBox.props(), {onClear: onClearSpy});\r\n\r\n                datePickerBox.setProps(onClearProps);\r\n                getClearButton()\r\n                    .first()\r\n                    .simulate('click');\r\n\r\n                expect(onClearSpy).toHaveBeenCalled();\r\n            });\r\n        });\r\n\r\n        it('should display anything sent as the footer prop', () => {\r\n            const footerClass: string = 'the-footer-added';\r\n            const propsWithFooter: IDatePickerBoxProps = _.extend({}, DATE_PICKER_BOX_BASIC_PROPS, {\r\n                footer: <div className={footerClass}></div>,\r\n            });\r\n\r\n            expect(datePickerBox.find(`.${footerClass}`).length).toBe(0);\r\n\r\n            datePickerBox.setProps(propsWithFooter);\r\n\r\n            expect(datePickerBox.find(`.${footerClass}`).length).toBe(1);\r\n        });\r\n\r\n        it('should have the class simple if it has the prop simple', () => {\r\n            expect(datePickerBox.find('.simple').length).toBe(0);\r\n\r\n            datePickerBox.setProps({\r\n                simple: true,\r\n            });\r\n\r\n            expect(datePickerBox.find('.simple').length).toBe(1);\r\n        });\r\n    });\r\n\r\n    describe('<DatePickerBox /> with redux state', () => {\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let datePickerBox: ReactWrapper<IDatePickerBoxProps, any>;\r\n\r\n        beforeEach(() => {\r\n            wrapper = mount(\r\n                <Provider store={TestUtils.buildStore()}>\r\n                    <DatePickerBox {...DATE_PICKER_BOX_BASIC_PROPS} withReduxState />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            datePickerBox = wrapper.find(DatePickerBox).first();\r\n        });\r\n\r\n        afterEach(() => {\r\n            wrapper.detach();\r\n        });\r\n\r\n        it('should get withReduxState as a prop', () => {\r\n            const withReduxStateProp = datePickerBox.props().withReduxState;\r\n\r\n            expect(withReduxStateProp).toBeDefined();\r\n            expect(withReduxStateProp).toBe(true);\r\n        });\r\n\r\n        it('should display a <CalendarConnected />', () => {\r\n            expect(datePickerBox.find(CalendarConnected).length).toBe(1);\r\n        });\r\n\r\n        it('should display a <DatesSelectionConnected />', () => {\r\n            expect(datePickerBox.find(DatesSelectionConnected).length).toBe(1);\r\n        });\r\n\r\n        it('should display an <OptionPickerConnected />', () => {\r\n            expect(datePickerBox.find(OptionPickerConnected).length).toBe(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=296.bundle.js.map