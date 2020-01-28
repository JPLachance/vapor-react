(window.webpackJsonp=window.webpackJsonp||[]).push([[628],{1732:function(n,e,a){"use strict";a.r(e),e.default="import {ShallowWrapper} from 'enzyme';\nimport {shallowWithState, shallowWithStore} from 'enzyme-redux';\nimport * as React from 'react';\nimport {getStoreMock} from '../../../utils/tests/TestUtils';\nimport {PaginationReduxActions} from '../../navigation/pagination';\nimport {Svg} from '../../svg';\nimport {IPaginationPagesNumberProps, PaginationPagesNumber} from '../PaginationPagesNumber';\nimport {PaginationSelect} from '../PaginationSelect';\n\ndescribe('PaginationPagesNumber tests', () => {\n    describe('<PaginationPagesNumber />', () => {\n        it('should mount and unmount without errors', () => {\n            expect(() => {\n                const wrapper = shallowWithState(<PaginationPagesNumber id={'id'} totalPages={10} />, {}).dive();\n                wrapper.unmount();\n            });\n        });\n\n        describe('once mounted', () => {\n            const id = 'test';\n            const defaultStore = {paginationComposite: [{id, pageNb: 0}]};\n\n            let wrapper: ShallowWrapper<IPaginationPagesNumberProps>;\n            const shallowPaginationPagesNumber = (props?: Partial<IPaginationPagesNumberProps>, state = defaultStore) =>\n                shallowWithState(<PaginationPagesNumber id={id} totalPages={10} {...props} />, state);\n\n            describe('previous arrow', () => {\n                it('should be disabled if the current page is equal to 0', () => {\n                    wrapper = shallowPaginationPagesNumber({}).dive();\n                    expect(\n                        wrapper\n                            .find('a.flat-select-option')\n                            .at(0)\n                            .hasClass('disabled')\n                    ).toBe(true);\n                });\n\n                it('should be selectable if the current page is not equal to 0', () => {\n                    wrapper = shallowPaginationPagesNumber({}, {paginationComposite: [{id, pageNb: 1}]}).dive();\n                    expect(\n                        wrapper\n                            .find('a.flat-select-option')\n                            .at(0)\n                            .hasClass('selectable')\n                    ).toBe(true);\n                });\n\n                it('should be hidden if the component is hidden', () => {\n                    wrapper = shallowPaginationPagesNumber(\n                        {hidden: true},\n                        {paginationComposite: [{id, pageNb: 5}]}\n                    ).dive();\n                    expect(\n                        wrapper\n                            .find('a.flat-select-option')\n                            .at(0)\n                            .hasClass('hidden')\n                    ).toBe(true);\n                });\n\n                it('should use the previous label set as prop if defined', () => {\n                    const label = 'label';\n                    wrapper = shallowPaginationPagesNumber(\n                        {previousLabel: label},\n                        {paginationComposite: [{id, pageNb: 5}]}\n                    ).dive();\n                    expect(\n                        wrapper\n                            .find('a.flat-select-option')\n                            .at(0)\n                            .text()\n                    ).toContain(label);\n                });\n\n                it('should have a <Svg />', () => {\n                    wrapper = shallowPaginationPagesNumber().dive();\n                    expect(\n                        wrapper\n                            .find('a.flat-select-option')\n                            .at(0)\n                            .find(Svg).length\n                    ).toBe(1);\n                });\n            });\n\n            describe('next arrow', () => {\n                it('should disabled the next arrow if the current page is equal to the last page', () => {\n                    wrapper = shallowPaginationPagesNumber(\n                        {totalPages: 11},\n                        {paginationComposite: [{id, pageNb: 10}]}\n                    ).dive();\n                    expect(\n                        wrapper\n                            .find('a.flat-select-option')\n                            .at(1)\n                            .hasClass('disabled')\n                    ).toBe(true);\n                });\n\n                it('should be selectable if the current page is not equal to the last page', () => {\n                    wrapper = shallowPaginationPagesNumber({}, {paginationComposite: [{id, pageNb: 5}]}).dive();\n                    expect(\n                        wrapper\n                            .find('a.flat-select-option')\n                            .at(1)\n                            .hasClass('selectable')\n                    ).toBe(true);\n                });\n\n                it('should be hidden if the component is hidden', () => {\n                    wrapper = shallowPaginationPagesNumber(\n                        {hidden: true},\n                        {paginationComposite: [{id, pageNb: 5}]}\n                    ).dive();\n                    expect(\n                        wrapper\n                            .find('a.flat-select-option')\n                            .at(1)\n                            .hasClass('hidden')\n                    ).toBe(true);\n                });\n\n                it('should use the previous label set as prop if defined', () => {\n                    const label = 'label';\n                    wrapper = shallowPaginationPagesNumber(\n                        {nextLabel: label},\n                        {paginationComposite: [{id, pageNb: 5}]}\n                    ).dive();\n                    expect(\n                        wrapper\n                            .find('a.flat-select-option')\n                            .at(1)\n                            .text()\n                    ).toContain(label);\n                });\n\n                it('should have a <Svg />', () => {\n                    wrapper = shallowPaginationPagesNumber().dive();\n                    expect(\n                        wrapper\n                            .find('a.flat-select-option')\n                            .at(1)\n                            .find(Svg).length\n                    ).toBe(1);\n                });\n            });\n\n            describe('PaginationSelect', () => {\n                it('should show 3 pages if only 3 pages available', () => {\n                    wrapper = shallowPaginationPagesNumber(\n                        {totalPages: 3},\n                        {paginationComposite: [{id, pageNb: 2}]}\n                    ).dive();\n                    expect(wrapper.find(PaginationSelect).length).toBe(3);\n                });\n\n                it('should a maximum of 7 pages by default', () => {\n                    wrapper = shallowPaginationPagesNumber(\n                        {totalPages: 12},\n                        {paginationComposite: [{id, pageNb: 2}]}\n                    ).dive();\n                    expect(wrapper.find(PaginationSelect).length).toBe(7);\n                });\n\n                it('should not extend the numberOfPagesToShow defined as prop', () => {\n                    wrapper = shallowPaginationPagesNumber(\n                        {totalPages: 12, numberOfPagesToShow: 5},\n                        {paginationComposite: [{id, pageNb: 2}]}\n                    ).dive();\n                    expect(wrapper.find(PaginationSelect).length).toBe(5);\n                });\n            });\n\n            describe('dispatch', () => {\n                let store: ReturnType<typeof getStoreMock>;\n\n                it('should dispatch an addPagination on mount', () => {\n                    store = getStoreMock();\n                    shallowWithStore(<PaginationPagesNumber id={id} totalPages={10} />, store).dive();\n\n                    expect(store.getActions()).toContain(PaginationReduxActions.addPagination(id));\n                });\n\n                it('should dispatch a removePagination on unmount', () => {\n                    store = getStoreMock();\n                    wrapper = shallowWithStore(<PaginationPagesNumber id={id} totalPages={10} />, store).dive();\n                    wrapper.unmount();\n\n                    expect(store.getActions()).toContain(PaginationReduxActions.removePagination(id));\n                });\n\n                it('should dispatch a changePage on click on a <PaginationSelect />', () => {\n                    store = getStoreMock();\n                    wrapper = shallowWithStore(<PaginationPagesNumber id={id} totalPages={10} />, store).dive();\n                    wrapper\n                        .find(PaginationSelect)\n                        .at(0)\n                        .props()\n                        .onPageClick(2);\n\n                    expect(store.getActions()).toContain(PaginationReduxActions.changePage(id, 2));\n                });\n\n                it('should dispatch a changePage on previous if the pageNb is greater than 0 and not equal to the current page', () => {\n                    store = getStoreMock({paginationComposite: [{id, pageNb: 2}]});\n                    wrapper = shallowWithStore(<PaginationPagesNumber id={id} totalPages={10} />, store).dive();\n                    wrapper\n                        .find('a.flat-select-option')\n                        .at(0)\n                        .props()\n                        .onClick({} as any);\n\n                    expect(store.getActions()).toContain(PaginationReduxActions.changePage(id, 1));\n                });\n\n                it('should dispatch a changePage on next if the pageNb is greater than 0 and not equal to the current page', () => {\n                    store = getStoreMock({paginationComposite: [{id, pageNb: 6}]});\n                    wrapper = shallowWithStore(<PaginationPagesNumber id={id} totalPages={10} />, store).dive();\n                    wrapper\n                        .find('a.flat-select-option')\n                        .at(1)\n                        .props()\n                        .onClick({} as any);\n\n                    expect(store.getActions()).toContain(PaginationReduxActions.changePage(id, 7));\n                });\n\n                it('should dispatch a changePage on update if the current page greater than the totalPage', () => {\n                    store = getStoreMock({paginationComposite: [{id, pageNb: 6}]});\n                    wrapper = shallowWithStore(<PaginationPagesNumber id={id} totalPages={10} />, store).dive();\n                    wrapper.setProps({totalPages: 4});\n\n                    expect(store.getActions()).toContain(PaginationReduxActions.changePage(id, 3));\n                });\n            });\n        });\n    });\n});\n"}}]);
//# sourceMappingURL=628.bundle.js.map