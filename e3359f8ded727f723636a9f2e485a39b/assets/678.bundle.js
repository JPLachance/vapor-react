(window.webpackJsonp=window.webpackJsonp||[]).push([[678],{1767:function(e,t,r){"use strict";r.r(t),t.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\n\r\nimport {IReactVaporState} from '../../../../ReactVapor';\r\nimport {clearState} from '../../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../../utils/tests/TestUtils';\r\nimport {filterThrough} from '../../../filterBox/FilterBoxActions';\r\nimport {ItemBox} from '../../../itemBox/ItemBox';\r\nimport {toggleSelect} from '../../SelectActions';\r\nimport {SelectConnected} from '../../SelectConnected';\r\nimport {MultiSelectWithFilter} from '../SelectComponents';\r\nimport {ISelectWithFilterProps} from '../SelectWithFilter';\r\n\r\ndescribe('Select', () => {\r\n    describe('MultiSelectWithFilter', () => {\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let store: Store<IReactVaporState>;\r\n\r\n        const id: string = 'multi-select-with-filter';\r\n\r\n        const mountMultiSelect = (props: Partial<ISelectWithFilterProps> = {items: []}) => {\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <MultiSelectWithFilter id={id} {...props} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n\r\n            store.dispatch(toggleSelect(id, true));\r\n            wrapper.update();\r\n        };\r\n\r\n        beforeEach(() => {\r\n            store = TestUtils.buildStore();\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n        });\r\n\r\n        beforeAll(() => {\r\n            TestUtils.makeDebounceStatic();\r\n        });\r\n\r\n        it('should add a duplicate if the filterValue is already selected', () => {\r\n            const filterValue: string = 'a';\r\n            const duplicateText: string = 'duplicate';\r\n\r\n            mountMultiSelect({items: [{value: filterValue, selected: true}], duplicateText});\r\n            store.dispatch(filterThrough(id, filterValue));\r\n\r\n            wrapper.update();\r\n            const itemBox = wrapper\r\n                .find(SelectConnected)\r\n                .find(ItemBox)\r\n                .first();\r\n\r\n            expect(itemBox.props().value).toBe(duplicateText);\r\n        });\r\n\r\n        it('should open the dropdown even if the list is empty with customValue', () => {\r\n            const noItemsText = 'not an item text';\r\n\r\n            mountMultiSelect({items: [], noItemsText, customValues: true});\r\n\r\n            const itemBox = wrapper\r\n                .find(SelectConnected)\r\n                .find(ItemBox)\r\n                .first();\r\n\r\n            expect(itemBox.props().value).toBe(noItemsText);\r\n        });\r\n\r\n        it('should set the noItems in noResultItem if items is not empty and all values are selected', () => {\r\n            const noItemsText = 'not an item text';\r\n\r\n            mountMultiSelect({\r\n                items: [\r\n                    {value: 'a', selected: true},\r\n                    {value: 'b', selected: true},\r\n                ],\r\n                noItemsText,\r\n                customValues: true,\r\n            });\r\n\r\n            const itemBox = wrapper\r\n                .find(SelectConnected)\r\n                .find(ItemBox)\r\n                .first();\r\n\r\n            expect(itemBox.props().value).toBe(noItemsText);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=678.bundle.js.map