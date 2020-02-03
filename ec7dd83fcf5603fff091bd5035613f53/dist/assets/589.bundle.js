(window.webpackJsonp=window.webpackJsonp||[]).push([[589],{1694:function(e,a,t){"use strict";t.r(a),a.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {INavigationPerPageSelectProps, NavigationPerPageSelect} from '../NavigationPerPageSelect';\r\n\r\ndescribe('NavigationPerPageSelect', () => {\r\n    const basicNavigationPerPageSelectProps: INavigationPerPageSelectProps = {\r\n        perPageNb: 20,\r\n        selected: false,\r\n        onPerPageClick: jasmine.createSpy('onPerPageClick'),\r\n    };\r\n\r\n    describe('<NavigationPerPageSelect />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<NavigationPerPageSelect {...basicNavigationPerPageSelectProps} />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('NavigationPerPageSelectView', () => {\r\n        let navigationPerPageSelect: ReactWrapper<INavigationPerPageSelectProps, any>;\r\n\r\n        beforeEach(() => {\r\n            navigationPerPageSelect = mount(<NavigationPerPageSelect {...basicNavigationPerPageSelectProps} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n        });\r\n\r\n        afterEach(() => {\r\n            navigationPerPageSelect.detach();\r\n        });\r\n\r\n        it('should get the per page number as a prop', () => {\r\n            const perPageNumberProp = navigationPerPageSelect.props().perPageNb;\r\n\r\n            expect(perPageNumberProp).toBeDefined();\r\n            expect(perPageNumberProp).toBe(basicNavigationPerPageSelectProps.perPageNb);\r\n        });\r\n\r\n        it('should get if it is selected  as a prop', () => {\r\n            const selectedProp = navigationPerPageSelect.props().selected;\r\n\r\n            expect(selectedProp).toBeDefined();\r\n            expect(selectedProp).toBe(basicNavigationPerPageSelectProps.selected);\r\n        });\r\n\r\n        it('should get what to do on click as a prop', () => {\r\n            const onPerPageClickProp = navigationPerPageSelect.props().onPerPageClick;\r\n\r\n            expect(onPerPageClickProp).toBeDefined();\r\n        });\r\n\r\n        it('should have \"selectable\" class if it is not selected', () => {\r\n            const newNavigationPerPageSelectProps = _.extend({}, basicNavigationPerPageSelectProps, {selected: true});\r\n\r\n            expect(navigationPerPageSelect.find('.flat-select-option').hasClass('selectable')).toBe(true);\r\n\r\n            navigationPerPageSelect.setProps(newNavigationPerPageSelectProps).update();\r\n\r\n            expect(navigationPerPageSelect.find('.flat-select-option').hasClass('selectable')).toBe(false);\r\n        });\r\n\r\n        it('should have \"selected-value\" \"state-selected\" classes when selected', () => {\r\n            const newNavigationPerPageSelectProps = _.extend({}, basicNavigationPerPageSelectProps, {selected: true});\r\n\r\n            expect(navigationPerPageSelect.find('.flat-select-option .enabled').hasClass('selected-value')).toBe(false);\r\n            expect(navigationPerPageSelect.find('.flat-select-option .enabled').hasClass('state-selected')).toBe(false);\r\n\r\n            navigationPerPageSelect.setProps(newNavigationPerPageSelectProps).update();\r\n\r\n            expect(navigationPerPageSelect.find('.flat-select-option .enabled').hasClass('selected-value')).toBe(true);\r\n            expect(navigationPerPageSelect.find('.flat-select-option .enabled').hasClass('state-selected')).toBe(true);\r\n        });\r\n\r\n        it('should call onPerPageClick when clicking link', () => {\r\n            expect(basicNavigationPerPageSelectProps.onPerPageClick).not.toHaveBeenCalled();\r\n\r\n            navigationPerPageSelect.find('a').simulate('click');\r\n            expect(basicNavigationPerPageSelectProps.onPerPageClick).toHaveBeenCalled();\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=589.bundle.js.map