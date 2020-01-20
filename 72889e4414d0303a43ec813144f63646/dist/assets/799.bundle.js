(window.webpackJsonp=window.webpackJsonp||[]).push([[799],{1888:function(e,n,t){"use strict";t.r(n),n.default="import {ShallowWrapper} from 'enzyme';\r\nimport {mountWithStore, shallowWithStore} from 'enzyme-redux';\r\nimport * as React from 'react';\r\n\r\nimport {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';\r\nimport {addActionsToActionBar} from '../../actions/ActionBarActions';\r\nimport {CollapsibleToggle} from '../../collapsible/CollapsibleToggle';\r\nimport {TableHOCRowActions} from '../actions/TableHOCRowActions';\r\nimport {ITableRowConnectedProps, TableRowConnected} from '../TableRowConnected';\r\nimport {TableSelectors} from '../TableSelectors';\r\n\r\ndescribe('Table HOC', () => {\r\n    describe('TableRowConnected', () => {\r\n        let store: ReactVaporMockStore;\r\n        const defaultProps = {\r\n            id: 'a',\r\n            tableId: 'b',\r\n        };\r\n\r\n        beforeEach(() => {\r\n            store = getStoreMock({\r\n                tableHOCRow: [\r\n                    {\r\n                        id: defaultProps.id,\r\n                        tableId: defaultProps.tableId,\r\n                        selected: false,\r\n                    },\r\n                ],\r\n            });\r\n        });\r\n\r\n        it('should not throw', () => {\r\n            expect(() => shallowWithStore(<TableRowConnected id=\"a\" tableId=\"b\" />, store)).not.toThrow();\r\n            expect(() =>\r\n                shallowWithStore(\r\n                    <TableRowConnected id=\"b\" tableId=\"c\" actions={[{enabled: false, name: 'test'}]} />,\r\n                    store\r\n                )\r\n            ).not.toThrow();\r\n        });\r\n\r\n        it('should render a tr', () => {\r\n            const wrapper = shallowWithStore(<TableRowConnected id=\"a\" tableId=\"b\" />, store).dive();\r\n            expect(wrapper.find('tr').exists()).toBe(true);\r\n        });\r\n\r\n        it('should have the class selected if the row is selected in the state', () => {\r\n            store = getStoreMock({\r\n                tableHOCRow: [\r\n                    {\r\n                        id: defaultProps.id,\r\n                        tableId: defaultProps.tableId,\r\n                        selected: true,\r\n                    },\r\n                ],\r\n            });\r\n            const wrapper = shallowWithStore(<TableRowConnected id=\"a\" tableId=\"b\" />, store).dive();\r\n            expect(wrapper.find('tr').hasClass('selected')).toBe(true);\r\n        });\r\n\r\n        it('should have the class \"row-disabled\" if the row has disabled prop to true', () => {\r\n            const wrapper = shallowWithStore(<TableRowConnected id=\"a\" tableId=\"b\" disabled />, store).dive();\r\n            expect(wrapper.find('tr').hasClass('row-disabled')).toBe(true);\r\n        });\r\n\r\n        it('should have the class \"no-hover\" if the row has actions prop empty', () => {\r\n            const wrapper = shallowWithStore(<TableRowConnected id=\"a\" tableId=\"b\" />, store).dive();\r\n            expect(wrapper.find('tr').hasClass('no-hover')).toBe(true);\r\n        });\r\n\r\n        it('should not have the class \"no-hover\" if the row has actions prop', () => {\r\n            const actions = [{name: 'name', enabled: true}];\r\n            const wrapper = shallowWithStore(<TableRowConnected id=\"a\" tableId=\"b\" actions={actions} />, store).dive();\r\n            expect(wrapper.find('tr').hasClass('no-hover')).not.toBe(true);\r\n        });\r\n\r\n        it('should not have the class selected if the row is not selected in the state', () => {\r\n            store = getStoreMock({\r\n                tableHOCRow: [\r\n                    {\r\n                        id: defaultProps.id,\r\n                        tableId: defaultProps.tableId,\r\n                        selected: false,\r\n                    },\r\n                ],\r\n            });\r\n            const wrapper = shallowWithStore(<TableRowConnected id=\"a\" tableId=\"b\" />, store).dive();\r\n            expect(wrapper.find('tr').hasClass('selected')).toBe(false);\r\n        });\r\n\r\n        it('should dispatch a TableHOCRowActions.add on componentDidMount', () => {\r\n            const expectedAction = TableHOCRowActions.add(defaultProps.id, defaultProps.tableId);\r\n\r\n            shallowWithStore(<TableRowConnected {...defaultProps} />, store).dive();\r\n\r\n            expect(store.getActions()).toContain(expectedAction);\r\n        });\r\n\r\n        it('should dispatch an TableHOCRowActions.remove on componentWillUnmount', () => {\r\n            const expectedAction = TableHOCRowActions.remove(defaultProps.id, defaultProps.tableId, true);\r\n            spyOn(TableSelectors, 'getTableRow').and.returnValue({selected: true, opened: false});\r\n\r\n            const wrapper = shallowWithStore(<TableRowConnected {...defaultProps} />, store).dive();\r\n            wrapper.unmount();\r\n\r\n            expect(store.getActions()).toContain(expectedAction);\r\n        });\r\n\r\n        it('should dispatch an addActionsToActionBar on click', () => {\r\n            const actions = [{name: 'name', enabled: false}];\r\n            const expectedAction = addActionsToActionBar(defaultProps.tableId, actions);\r\n\r\n            const wrapper = shallowWithStore(<TableRowConnected {...defaultProps} actions={actions} />, store).dive();\r\n            wrapper.find('tr').simulate('click', {});\r\n\r\n            expect(store.getActions()).toContain(expectedAction);\r\n        });\r\n\r\n        it('should dispatch a TableHOCRowActions.select action on click when actions is not empty', () => {\r\n            const expectedAction = TableHOCRowActions.select(defaultProps.id, false);\r\n\r\n            const wrapper = shallowWithStore(\r\n                <TableRowConnected {...defaultProps} actions={[{enabled: true, name: 'action'}]} />,\r\n                store\r\n            ).dive();\r\n            wrapper.find('tr').simulate('click', {});\r\n\r\n            expect(store.getActions()).toContain(expectedAction);\r\n        });\r\n\r\n        it('should dispatch an addActionsToActionBar when the actions change and the row was selected', () => {\r\n            const actions = [{name: 'name', enabled: false}];\r\n            const newActions = [{name: 'name', enabled: true}];\r\n            const expectedAction = addActionsToActionBar(defaultProps.tableId, actions);\r\n            spyOn(TableSelectors, 'getTableRow').and.returnValue({selected: true, opened: false});\r\n\r\n            const wrapper = shallowWithStore(<TableRowConnected {...defaultProps} actions={actions} />, store).dive();\r\n            wrapper.setProps({actions: newActions});\r\n\r\n            expect(store.getActions()).toContain(expectedAction);\r\n        });\r\n\r\n        it('should dispatch a TableHOCRowActions.select action when the action change and the row was selected', () => {\r\n            const actions = [{name: 'name', enabled: false}];\r\n            const newActions = [{name: 'name', enabled: true}];\r\n            const expectedAction = TableHOCRowActions.select(defaultProps.id, false);\r\n            spyOn(TableSelectors, 'getTableRow').and.returnValue({selected: true, opened: false});\r\n\r\n            const wrapper = shallowWithStore(<TableRowConnected {...defaultProps} actions={actions} />, store).dive();\r\n            wrapper.setProps({actions: newActions});\r\n\r\n            expect(store.getActions()).toContain(expectedAction);\r\n        });\r\n\r\n        it('should not dispatch a TableHOCRowActions.select action on click when actions is empty', () => {\r\n            const actionNotExpected = TableHOCRowActions.select(defaultProps.id, false);\r\n\r\n            const wrapper = shallowWithStore(<TableRowConnected {...defaultProps} />, store).dive();\r\n            wrapper.find('tr').simulate('click', {});\r\n\r\n            expect(store.getActions()).not.toContain(actionNotExpected);\r\n        });\r\n\r\n        it('should not dispatch a TableHOCRowActions.select action on click when clicking inside an underlying dropdown', () => {\r\n            const actionNotExpected = TableHOCRowActions.select(defaultProps.id, false);\r\n\r\n            // We must mount the component here because simulated events don't propagate throughout ShallowWrappers\r\n            const wrapper = mountWithStore(\r\n                <TableRowConnected {...defaultProps} actions={[{enabled: true, name: 'action'}]}>\r\n                    <td>\r\n                        <div className=\"dropdown\"></div>\r\n                    </td>\r\n                </TableRowConnected>,\r\n                store\r\n            );\r\n\r\n            wrapper.find('.dropdown').simulate('click');\r\n\r\n            expect(store.getActions()).not.toContain(actionNotExpected);\r\n        });\r\n\r\n        it('should dispatch an TableHOCRowActions.select on click and handle multi-select', () => {\r\n            const expectedActionWithMulti = TableHOCRowActions.select(defaultProps.id, true);\r\n            const expectedActionWithoutMulti = TableHOCRowActions.select(defaultProps.id, false);\r\n\r\n            const wrapper = shallowWithStore(\r\n                <TableRowConnected {...defaultProps} actions={[{enabled: true, name: 'action'}]} isMultiselect />,\r\n                store\r\n            ).dive();\r\n\r\n            wrapper.find('tr').simulate('click', {ctrlKey: true});\r\n            expect(store.getActions()).toContain(expectedActionWithMulti);\r\n\r\n            wrapper.find('tr').simulate('click', {ctrlKey: false});\r\n            expect(store.getActions()).toContain(expectedActionWithoutMulti);\r\n        });\r\n\r\n        it('should dispatch trigger actions with callOnDoubleClick=true when double clicking the row', () => {\r\n            const triggerActionSpy = jasmine.createSpy('triggerAction');\r\n\r\n            const wrapper = shallowWithStore(\r\n                <TableRowConnected\r\n                    {...defaultProps}\r\n                    actions={[{enabled: true, name: 'action', callOnDoubleClick: true, trigger: triggerActionSpy}]}\r\n                />,\r\n                store\r\n            ).dive();\r\n\r\n            wrapper.find('tr').simulate('doubleclick');\r\n            expect(triggerActionSpy).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        describe('when the row is collapsible', () => {\r\n            let wrapper: ShallowWrapper<ITableRowConnectedProps>;\r\n            const collapsibleContent = <div>Collapsible content</div>;\r\n\r\n            beforeEach(() => {\r\n                store = getStoreMock({\r\n                    tableHOCRow: [\r\n                        {\r\n                            id: defaultProps.id,\r\n                            tableId: defaultProps.tableId,\r\n                            selected: false,\r\n                            opened: true,\r\n                        },\r\n                    ],\r\n                });\r\n\r\n                wrapper = shallowWithStore(\r\n                    <TableRowConnected\r\n                        id={defaultProps.id}\r\n                        tableId={defaultProps.tableId}\r\n                        collapsible={{\r\n                            content: collapsibleContent,\r\n                        }}\r\n                    >\r\n                        <td>Column 1</td>\r\n                        <td>Column 2</td>\r\n                        <td>Column 3</td>\r\n                        {null}\r\n                        {[]}\r\n                        {false}\r\n                    </TableRowConnected>,\r\n                    store\r\n                ).dive();\r\n            });\r\n\r\n            it('should render an additional row for the collapsible content', () => {\r\n                expect(wrapper.find('tr').length).toBe(2);\r\n                expect(\r\n                    wrapper\r\n                        .find('tr')\r\n                        .at(0)\r\n                        .hasClass('heading-row')\r\n                ).toBe(true);\r\n                expect(\r\n                    wrapper\r\n                        .find('tr')\r\n                        .at(1)\r\n                        .hasClass('collapsible-row')\r\n                ).toBe(true);\r\n            });\r\n\r\n            it('should render a single cell in the collapsible row that spans accross all the columns +1 for the toggle', () => {\r\n                expect(wrapper.find('tr.collapsible-row td').props().colSpan).toBe(3 + 1);\r\n            });\r\n\r\n            it('should render the collapsible content node inside the collapsible row', () => {\r\n                expect(wrapper.find('tr.collapsible-row td').contains(collapsibleContent)).toBe(true);\r\n            });\r\n\r\n            it('should have the class opened if the row is opened in the state', () => {\r\n                expect(wrapper.find('tr.heading-row').hasClass('opened')).toBe(true);\r\n            });\r\n\r\n            it('should render a CollapsibleToggle as collapsed state indicator if no customToggle is specified', () => {\r\n                expect(wrapper.find(CollapsibleToggle).exists()).toBe(true);\r\n                expect(wrapper.find(CollapsibleToggle).props().expanded).toBe(true);\r\n            });\r\n\r\n            it('should render a collapsible row custom toggle when specified using the prop renderCustomToggleCell', () => {\r\n                const expectedToggle = <td>Opened</td>;\r\n                wrapper.setProps({\r\n                    collapsible: {\r\n                        content: collapsibleContent,\r\n                        renderCustomToggleCell: (opened: boolean) => expectedToggle,\r\n                    },\r\n                });\r\n\r\n                expect(\r\n                    wrapper\r\n                        .find('tr.heading-row td')\r\n                        .last()\r\n                        .equals(expectedToggle)\r\n                ).toBe(true);\r\n            });\r\n\r\n            it('should dispatch a toggleCollapsible action when clicking on the collapsible button', () => {\r\n                const expectedAction = TableHOCRowActions.toggleCollapsible(defaultProps.id);\r\n\r\n                wrapper\r\n                    .find(CollapsibleToggle)\r\n                    .simulate('click', jasmine.createSpyObj('event', ['preventDefault', 'stopPropagation']));\r\n\r\n                expect(store.getActions()).toContain(expectedAction);\r\n            });\r\n        });\r\n\r\n        it('should dispatch a toggleCollapsible action with opened:true on mount when expandOnMount is set to true', () => {\r\n            const expectedAction = TableHOCRowActions.toggleCollapsible(defaultProps.id, true);\r\n\r\n            store = getStoreMock({\r\n                tableHOCRow: [\r\n                    {\r\n                        id: defaultProps.id,\r\n                        tableId: defaultProps.tableId,\r\n                        selected: false,\r\n                        opened: false,\r\n                    },\r\n                ],\r\n            });\r\n\r\n            shallowWithStore(\r\n                <TableRowConnected\r\n                    id={defaultProps.id}\r\n                    tableId={defaultProps.tableId}\r\n                    collapsible={{\r\n                        content: <div>Whatever</div>,\r\n                        expandOnMount: true,\r\n                    }}\r\n                />,\r\n                store\r\n            ).dive();\r\n\r\n            expect(store.getActions()).toContain(expectedAction);\r\n        });\r\n\r\n        it('should dispatch a toggleCollapsible action with opened:true when changing from a non-collapsible to a collapsible row', () => {\r\n            const expectedAction = TableHOCRowActions.toggleCollapsible(defaultProps.id, true);\r\n\r\n            store = getStoreMock({\r\n                tableHOCRow: [\r\n                    {\r\n                        id: defaultProps.id,\r\n                        tableId: defaultProps.tableId,\r\n                        selected: false,\r\n                        opened: false,\r\n                    },\r\n                ],\r\n            });\r\n\r\n            const row = shallowWithStore(\r\n                <TableRowConnected\r\n                    id={defaultProps.id}\r\n                    tableId={defaultProps.tableId}\r\n                    collapsible={{expandOnMount: true}}\r\n                />,\r\n                store\r\n            ).dive();\r\n            expect(store.getActions()).not.toContain(expectedAction);\r\n\r\n            row.setProps({\r\n                collapsible: {\r\n                    expandOnMount: true,\r\n                    content: <div>Whatever</div>,\r\n                },\r\n            });\r\n            expect(store.getActions()).toContain(expectedAction);\r\n        });\r\n\r\n        it('should not dispatch a toggleCollapsible action when changing from a non-collapsible to a collapsible row if expandOnMount is false', () => {\r\n            const actionNotExpected = TableHOCRowActions.toggleCollapsible(defaultProps.id, true);\r\n\r\n            store = getStoreMock({\r\n                tableHOCRow: [\r\n                    {\r\n                        id: defaultProps.id,\r\n                        tableId: defaultProps.tableId,\r\n                        selected: false,\r\n                        opened: false,\r\n                    },\r\n                ],\r\n            });\r\n\r\n            const row = shallowWithStore(\r\n                <TableRowConnected id={defaultProps.id} tableId={defaultProps.tableId} />,\r\n                store\r\n            ).dive();\r\n            expect(store.getActions()).not.toContain(actionNotExpected);\r\n\r\n            row.setProps({\r\n                collapsible: {\r\n                    content: <div>Whatever</div>,\r\n                },\r\n            });\r\n            expect(store.getActions()).not.toContain(actionNotExpected);\r\n        });\r\n\r\n        it('should call the onToggleCollapsible props with true the row is opened', () => {\r\n            const spy = jasmine.createSpy('onToggle');\r\n            store = getStoreMock({\r\n                tableHOCRow: [\r\n                    {\r\n                        id: defaultProps.id,\r\n                        tableId: defaultProps.tableId,\r\n                        selected: false,\r\n                        opened: false,\r\n                    },\r\n                ],\r\n            });\r\n\r\n            const row = shallowWithStore(\r\n                <TableRowConnected\r\n                    id={defaultProps.id}\r\n                    tableId={defaultProps.tableId}\r\n                    collapsible={{\r\n                        content: <div>Whatever</div>,\r\n                        onToggleCollapsible: spy,\r\n                    }}\r\n                />,\r\n                store\r\n            ).dive();\r\n\r\n            row.find(CollapsibleToggle).simulate(\r\n                'click',\r\n                jasmine.createSpyObj('event', ['preventDefault', 'stopPropagation'])\r\n            );\r\n            expect(spy).toHaveBeenCalledWith(true);\r\n        });\r\n\r\n        it('should call the onToggleCollapsible props with false the row is closed', () => {\r\n            const spy = jasmine.createSpy('onToggle');\r\n            store = getStoreMock({\r\n                tableHOCRow: [\r\n                    {\r\n                        id: defaultProps.id,\r\n                        tableId: defaultProps.tableId,\r\n                        selected: false,\r\n                        opened: true,\r\n                    },\r\n                ],\r\n            });\r\n\r\n            const row = shallowWithStore(\r\n                <TableRowConnected\r\n                    id={defaultProps.id}\r\n                    tableId={defaultProps.tableId}\r\n                    collapsible={{\r\n                        content: <div>Whatever</div>,\r\n                        onToggleCollapsible: spy,\r\n                    }}\r\n                />,\r\n                store\r\n            ).dive();\r\n\r\n            row.find(CollapsibleToggle).simulate(\r\n                'click',\r\n                jasmine.createSpyObj('event', ['preventDefault', 'stopPropagation'])\r\n            );\r\n            expect(spy).toHaveBeenCalledWith(false);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=799.bundle.js.map