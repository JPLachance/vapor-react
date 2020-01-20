(window.webpackJsonp=window.webpackJsonp||[]).push([[683],{1773:function(t,e,r){"use strict";r.r(e),e.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\n\r\nimport {IReactVaporState} from '../../../../ReactVapor';\r\nimport {clearState} from '../../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../../utils/tests/TestUtils';\r\nimport {UUID} from '../../../../utils/UUID';\r\nimport {IFlatSelectOptionProps} from '../../../flatSelect/FlatSelectOption';\r\nimport {IItemBoxProps} from '../../../itemBox/ItemBox';\r\nimport {MultiSelectWithPredicateAndFilter} from '../SelectComponents';\r\n\r\ndescribe('Select', () => {\r\n    describe('<MultiSelectWithPredicateAndFilter/>', () => {\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let store: Store<IReactVaporState>;\r\n\r\n        const id: string = 'multi-select-with-predicate-and-filter';\r\n\r\n        const defaultFlatSelectOptions: IFlatSelectOptionProps[] = [\r\n            {id: UUID.generate(), option: {content: 'All'}, selected: true},\r\n            {id: UUID.generate(), option: {content: 'None'}},\r\n        ];\r\n\r\n        const matchPredicate = (predicate: string, item: IItemBoxProps) => {\r\n            return predicate === defaultFlatSelectOptions[0].id;\r\n        };\r\n\r\n        const mountMultiSelect = () => {\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <MultiSelectWithPredicateAndFilter\r\n                        id={id}\r\n                        items={[]}\r\n                        options={defaultFlatSelectOptions}\r\n                        matchPredicate={matchPredicate}\r\n                    />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n        };\r\n\r\n        beforeEach(() => {\r\n            store = TestUtils.buildStore();\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n        });\r\n\r\n        describe('mount and unmount', () => {\r\n            it('should not throw on mount', () => {\r\n                expect(() => mountMultiSelect()).not.toThrow();\r\n            });\r\n\r\n            it('should not throw on unmount', () => {\r\n                mountMultiSelect();\r\n                expect(() => wrapper.unmount()).not.toThrow();\r\n            });\r\n\r\n            it('should add the list box to the state when mounted', () => {\r\n                expect(store.getState().selects.length).toBe(0);\r\n\r\n                mountMultiSelect();\r\n\r\n                expect(store.getState().selects.length).toBe(1);\r\n            });\r\n\r\n            it('should remove the list box from the state when the component unmount', () => {\r\n                mountMultiSelect();\r\n\r\n                expect(store.getState().selects.length).toBe(1);\r\n                wrapper.unmount();\r\n\r\n                expect(store.getState().selects.length).toBe(0);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=683.bundle.js.map