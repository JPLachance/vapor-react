(window.webpackJsonp=window.webpackJsonp||[]).push([[700],{1799:function(e,t,n){"use strict";n.r(t),t.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {SelectedOption} from '../../dropdownSearch/MultiSelectDropdownSearch/SelectedOption';\r\nimport {IItemBoxProps} from '../../itemBox/ItemBox';\r\nimport {IMultiSelectProps, MultiSelectConnected} from '../MultiSelectConnected';\r\nimport {SelectConnected} from '../SelectConnected';\r\n\r\ndescribe('Select', () => {\r\n    describe('<MultiSelectConnected />', () => {\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let multiSelect: ReactWrapper<IMultiSelectProps, void>;\r\n        let store: Store<IReactVaporState>;\r\n\r\n        const id: string = 'list-box-connected';\r\n\r\n        const mountMultiSelect = (items: IItemBoxProps[] = [], props: Partial<IMultiSelectProps> = {}) => {\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <MultiSelectConnected id={id} items={items} {...props} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            multiSelect = wrapper.find(SelectConnected).first();\r\n        };\r\n\r\n        beforeEach(() => {\r\n            store = TestUtils.buildStore();\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n        });\r\n\r\n        describe('mount and unmount', () => {\r\n            it('should not throw on mount', () => {\r\n                expect(() => mountMultiSelect()).not.toThrow();\r\n            });\r\n\r\n            it('should not throw on unmount', () => {\r\n                mountMultiSelect();\r\n                expect(() => wrapper.unmount()).not.toThrow();\r\n            });\r\n\r\n            it('should add the list box to the state when mounted', () => {\r\n                expect(store.getState().selects.length).toBe(0);\r\n\r\n                mountMultiSelect();\r\n\r\n                expect(store.getState().selects.length).toBe(1);\r\n            });\r\n\r\n            it('should remove the list box from the state when the component unmount', () => {\r\n                mountMultiSelect();\r\n\r\n                expect(store.getState().selects.length).toBe(1);\r\n                wrapper.unmount();\r\n\r\n                expect(store.getState().selects.length).toBe(0);\r\n            });\r\n        });\r\n\r\n        it('should allow a custom placeholder', () => {\r\n            const expectedPlaceholder = 'select thingy';\r\n\r\n            mountMultiSelect([{value: 'a'}, {value: 'b'}], {placeholder: expectedPlaceholder});\r\n\r\n            expect(multiSelect.html()).toContain(expectedPlaceholder);\r\n        });\r\n\r\n        it('should contains a the selected value', () => {\r\n            const selectedValue = 'dis 1';\r\n            mountMultiSelect([{value: 'a'}, {value: selectedValue, selected: true}]);\r\n\r\n            expect(multiSelect.html()).toContain(selectedValue);\r\n        });\r\n\r\n        it('should contains the display value when the selected value has one', () => {\r\n            const selectedDisplayValue = 'dis 2';\r\n            mountMultiSelect([{value: 'a'}, {value: 'dis 1', displayValue: selectedDisplayValue, selected: true}]);\r\n\r\n            expect(multiSelect.html()).toContain(selectedDisplayValue);\r\n        });\r\n\r\n        it('should contains a SelectedOption for every selected item', () => {\r\n            const firstSelected = 'dis 1';\r\n            const secondSelected = 'dis two';\r\n\r\n            mountMultiSelect([\r\n                {value: 'a'},\r\n                {value: firstSelected, selected: true},\r\n                {value: secondSelected, selected: true},\r\n            ]);\r\n\r\n            expect(multiSelect.find(SelectedOption).length).toBe(2);\r\n            expect(\r\n                multiSelect\r\n                    .find(SelectedOption)\r\n                    .at(0)\r\n                    .props().value\r\n            ).toBe(firstSelected);\r\n            expect(\r\n                multiSelect\r\n                    .find(SelectedOption)\r\n                    .at(1)\r\n                    .props().value\r\n            ).toBe(secondSelected);\r\n        });\r\n\r\n        it('should disable the dropdown if there is no options', () => {\r\n            mountMultiSelect([]);\r\n\r\n            expect(multiSelect.find('.multiselect-add').prop('disabled')).toBe(true);\r\n        });\r\n\r\n        it('should not disable the dropdown if one of the options is not is selected', () => {\r\n            mountMultiSelect([\r\n                {value: 'a', selected: false},\r\n                {value: 'b', selected: true},\r\n            ]);\r\n\r\n            expect(multiSelect.find('.multiselect-add').prop('disabled')).toBeUndefined();\r\n        });\r\n\r\n        it('should disable the dropdown when every option is selected', () => {\r\n            mountMultiSelect([\r\n                {value: 'a', selected: true},\r\n                {value: 'b', selected: true},\r\n            ]);\r\n\r\n            expect(multiSelect.find('.multiselect-add').prop('disabled')).toBe(true);\r\n        });\r\n\r\n        it('should remove the selected item when a X on SelectedOption is clicked', () => {\r\n            const firstSelected = 'dis 1';\r\n            const secondSelected = 'dis two';\r\n\r\n            mountMultiSelect([\r\n                {value: 'a'},\r\n                {value: firstSelected, selected: true},\r\n                {value: secondSelected, selected: true},\r\n            ]);\r\n\r\n            let state = _.findWhere(store.getState().listBoxes, {id});\r\n            expect(state.selected).toEqual([firstSelected, secondSelected]);\r\n\r\n            multiSelect\r\n                .find(SelectedOption)\r\n                .at(0)\r\n                .find('.remove-option')\r\n                .simulate('click');\r\n\r\n            state = _.findWhere(store.getState().listBoxes, {id});\r\n            expect(state.selected).toEqual([secondSelected]);\r\n        });\r\n\r\n        it('should remove all selected items when the clear button is clicked', () => {\r\n            const firstSelected = 'dis 1';\r\n            const secondSelected = 'dis two';\r\n\r\n            mountMultiSelect([\r\n                {value: 'a'},\r\n                {value: firstSelected, selected: true},\r\n                {value: secondSelected, selected: true},\r\n            ]);\r\n\r\n            let state = _.findWhere(store.getState().listBoxes, {id});\r\n            expect(state.selected).toEqual([firstSelected, secondSelected]);\r\n\r\n            multiSelect.find('.remove-all-selected-options').simulate('click');\r\n\r\n            state = _.findWhere(store.getState().listBoxes, {id});\r\n            expect(state.selected).toEqual([]);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=700.bundle.js.map