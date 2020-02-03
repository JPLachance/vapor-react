(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{1266:function(e,t,o){"use strict";o.r(t),t.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {keyCode} from '../../../utils/InputUtils';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {IItemBoxProps} from '../../itemBox/ItemBox';\r\nimport {AutocompleteConnected, IAutocompleteProps} from '../AutocompleteConnected';\r\n\r\ndescribe('Autocomplete', () => {\r\n    describe('<AutocompleteConnected />', () => {\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let autocomplete: ReactWrapper<IAutocompleteProps, void>;\r\n        let store: Store<IReactVaporState>;\r\n\r\n        const id: string = 'autocomplete-connected';\r\n\r\n        const mountAutocomplete = (items: IItemBoxProps[] = [], otherProps: Partial<IAutocompleteProps> = {}) => {\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <AutocompleteConnected id={id} items={items} {...otherProps} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            autocomplete = wrapper.find(AutocompleteConnected).first();\r\n        };\r\n\r\n        beforeEach(() => {\r\n            store = TestUtils.buildStore();\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n        });\r\n\r\n        describe('mount and unmount', () => {\r\n            it('should not throw on mount', () => {\r\n                expect(() => mountAutocomplete()).not.toThrow();\r\n            });\r\n\r\n            it('should not throw on unmount', () => {\r\n                mountAutocomplete();\r\n                expect(() => wrapper.unmount()).not.toThrow();\r\n            });\r\n\r\n            it('should add the autocomplete to the state when mounted', () => {\r\n                expect(store.getState().autocompletes.length).toBe(0);\r\n\r\n                mountAutocomplete();\r\n\r\n                expect(store.getState().autocompletes.length).toBe(1);\r\n            });\r\n\r\n            it('should remove the autocomplete from the state when the component unmount', () => {\r\n                mountAutocomplete();\r\n\r\n                expect(store.getState().autocompletes.length).toBe(1);\r\n                wrapper.unmount();\r\n\r\n                expect(store.getState().autocompletes.length).toBe(0);\r\n            });\r\n        });\r\n\r\n        it('should contains a the selected value', () => {\r\n            const selectedValue = 'dis 1';\r\n            mountAutocomplete([{value: 'a'}, {value: selectedValue, selected: true}]);\r\n\r\n            expect(autocomplete.html()).toContain(selectedValue);\r\n        });\r\n\r\n        it('should contains the display value when the selected value has one', () => {\r\n            const selectedDisplayValue = 'dis 2';\r\n            mountAutocomplete([{value: 'a'}, {value: 'dis 1', displayValue: selectedDisplayValue, selected: true}]);\r\n\r\n            expect(autocomplete.html()).toContain(selectedDisplayValue);\r\n        });\r\n\r\n        it('should contains the selected item as a prop', () => {\r\n            const selectedValue = 'dis 1';\r\n            mountAutocomplete([{value: 'a'}, {value: selectedValue, selected: true}]);\r\n\r\n            const value: string = autocomplete.find('input').prop<string>('value');\r\n            expect(value).toBe(selectedValue);\r\n        });\r\n\r\n        it('should open the autocomplete when the user focus on the input', () => {\r\n            mountAutocomplete();\r\n\r\n            expect(store.getState().autocompletes[0].open).toBe(false);\r\n\r\n            autocomplete.find('input').simulate('focus');\r\n            expect(store.getState().autocompletes[0].open).toBe(true);\r\n        });\r\n\r\n        it('should filter the visible values with custom function', () => {\r\n            const spy = jasmine.createSpy('matchFilter').and.callFake(() => false);\r\n            mountAutocomplete([{value: 'a'}, {value: 'b'}], {\r\n                // Take the value twice and make it uppercase\r\n                matchFilter: spy,\r\n            });\r\n\r\n            autocomplete\r\n                .find('input')\r\n                .simulate('focus')\r\n                .simulate('change', {target: {value: 'anything'}});\r\n\r\n            expect(spy).toHaveBeenCalled();\r\n        });\r\n\r\n        describe('keyboard events', () => {\r\n            it('should not throw on keydown in the autocomplete', () => {\r\n                mountAutocomplete();\r\n\r\n                const el = autocomplete.find('input');\r\n                _.each(keyCode, (code) => {\r\n                    expect(() => el.simulate('keydown', {keyCode: code})).not.toThrow();\r\n                });\r\n            });\r\n\r\n            it('should change the value when the user types in the input', () => {\r\n                const expectedValue = 'blou blou';\r\n                mountAutocomplete();\r\n\r\n                autocomplete.find('input').simulate('change', {target: {value: expectedValue}});\r\n                expect(store.getState().autocompletes[0].value).toBe(expectedValue);\r\n            });\r\n\r\n            it('should open the autocomplete when the user press enter on the input', () => {\r\n                mountAutocomplete();\r\n\r\n                expect(store.getState().autocompletes[0].open).toBe(false);\r\n\r\n                autocomplete.find('input').simulate('keyup', {keyCode: keyCode.enter});\r\n                expect(store.getState().autocompletes[0].open).toBe(true);\r\n            });\r\n\r\n            it('should close the autocomplete when the user press escape on the input and the autocomplete is open', () => {\r\n                mountAutocomplete();\r\n\r\n                expect(store.getState().autocompletes[0].open).toBe(false);\r\n                autocomplete.find('input').simulate('keyup', {keyCode: keyCode.escape});\r\n                expect(store.getState().autocompletes[0].open).toBe(false);\r\n\r\n                autocomplete.find('input').simulate('keyup', {keyCode: keyCode.enter});\r\n                expect(store.getState().autocompletes[0].open).toBe(true);\r\n\r\n                autocomplete.find('input').simulate('keyup', {keyCode: keyCode.escape});\r\n                expect(store.getState().autocompletes[0].open).toBe(false);\r\n            });\r\n\r\n            it('should open the autocomplete when the user press down arrow or up arrow the input', () => {\r\n                mountAutocomplete();\r\n\r\n                expect(store.getState().autocompletes[0].open).toBe(false);\r\n                autocomplete.find('input').simulate('keyup', {keyCode: keyCode.downArrow});\r\n                expect(store.getState().autocompletes[0].open).toBe(true);\r\n\r\n                autocomplete.find('input').simulate('keyup', {keyCode: keyCode.escape});\r\n                expect(store.getState().autocompletes[0].open).toBe(false);\r\n\r\n                autocomplete.find('input').simulate('keyup', {keyCode: keyCode.upArrow});\r\n                expect(store.getState().autocompletes[0].open).toBe(true);\r\n            });\r\n\r\n            it('should change the value when the user press enter and a value is active', () => {\r\n                const expectedValue = 'b';\r\n                mountAutocomplete([{value: 'a'}, {value: expectedValue}, {value: 'c'}]);\r\n\r\n                autocomplete.find('input').simulate('keyup', {keyCode: keyCode.downArrow}); // select a\r\n                autocomplete.find('input').simulate('keyup', {keyCode: keyCode.downArrow}); // select expectedValue\r\n                autocomplete.find('input').simulate('keyup', {keyCode: keyCode.enter});\r\n\r\n                expect(store.getState().autocompletes[0].value).toBe(expectedValue);\r\n            });\r\n\r\n            it('should not change the value if no item is active', () => {\r\n                mountAutocomplete([{value: 'a'}, {value: 'b'}, {value: 'c'}]);\r\n\r\n                expect(autocomplete.prop('active')).toBeUndefined();\r\n                autocomplete\r\n                    .find('input')\r\n                    .simulate('focus')\r\n                    .simulate('keyup', {keyCode: keyCode.enter});\r\n\r\n                expect(autocomplete.prop('active')).toBeUndefined();\r\n                expect(store.getState().autocompletes[0].value).toBe('');\r\n            });\r\n        });\r\n\r\n        describe('click handler', () => {\r\n            beforeEach(() => {\r\n                const otherElement: HTMLDivElement = document.createElement('div');\r\n                otherElement.setAttribute('id', 'other');\r\n                document.body.appendChild(otherElement);\r\n            });\r\n\r\n            afterEach(() => document.getElementById('other').remove());\r\n\r\n            const clickOnEl = (el: Element = document.getElementById('other')) => {\r\n                const evt = new MouseEvent('mousedown', {\r\n                    view: window,\r\n                    bubbles: true,\r\n                    cancelable: true,\r\n                    clientX: 20,\r\n                });\r\n                el.dispatchEvent(evt);\r\n            };\r\n\r\n            it('should close the autocomplete when the user click outside the autocomplete and the autocomplete is open', () => {\r\n                mountAutocomplete();\r\n\r\n                autocomplete.find('input').simulate('keyup', {keyCode: keyCode.enter});\r\n                expect(store.getState().autocompletes[0].open).toBe(true, '1');\r\n\r\n                clickOnEl(autocomplete.find('.autocomplete-list-container').getDOMNode());\r\n                expect(store.getState().autocompletes[0].open).toBe(true, '2');\r\n\r\n                clickOnEl();\r\n                expect(store.getState().autocompletes[0].open).toBe(false, '3');\r\n            });\r\n\r\n            it('should not open the autocomplete when the user click outside the autocomplete', () => {\r\n                mountAutocomplete();\r\n\r\n                expect(store.getState().autocompletes[0].open).toBe(false);\r\n\r\n                clickOnEl();\r\n                expect(store.getState().autocompletes[0].open).toBe(false);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=154.bundle.js.map