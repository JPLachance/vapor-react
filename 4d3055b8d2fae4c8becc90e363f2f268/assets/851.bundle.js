(window.webpackJsonp=window.webpackJsonp||[]).push([[851],{1932:function(e,n,o){"use strict";o.r(n),n.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {TableCollapsibleRowToggle} from '../TableCollapsibleRowToggle';\r\nimport {ITableHeadingRowProps, TableHeadingRow} from '../TableHeadingRow';\r\n\r\ndescribe('Tables', () => {\r\n    let basicTableHeadingRowProps: ITableHeadingRowProps;\r\n\r\n    describe('<TableHeadingRow />', () => {\r\n        it('should render without errors', () => {\r\n            basicTableHeadingRowProps = {\r\n                isCollapsible: false,\r\n            };\r\n\r\n            expect(() => {\r\n                shallow(<TableHeadingRow {...basicTableHeadingRowProps} />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<TableHeadingRow />', () => {\r\n        let tableHeadingRow: ReactWrapper<ITableHeadingRowProps, any>;\r\n        let tableHeadingRowInstance: TableHeadingRow;\r\n\r\n        beforeEach(() => {\r\n            document.getElementById('App').innerHTML = '<table><tbody id=\"AppTableBody\"></tbody></table>';\r\n\r\n            basicTableHeadingRowProps = {\r\n                isCollapsible: true,\r\n            };\r\n\r\n            tableHeadingRow = mount(\r\n                <TableHeadingRow {...basicTableHeadingRowProps}>\r\n                    <td>\r\n                        <div className=\"dropdown\" />\r\n                    </td>\r\n                </TableHeadingRow>,\r\n                {attachTo: document.getElementById('AppTableBody')}\r\n            );\r\n            tableHeadingRowInstance = tableHeadingRow.instance() as TableHeadingRow;\r\n        });\r\n\r\n        afterEach(() => {\r\n            tableHeadingRow.detach();\r\n        });\r\n\r\n        it('should get if it is collapsible as a prop', () => {\r\n            const isCollapsibleProp = tableHeadingRow.props().isCollapsible;\r\n\r\n            expect(isCollapsibleProp).toBeDefined();\r\n            expect(isCollapsibleProp).toBe(basicTableHeadingRowProps.isCollapsible);\r\n        });\r\n\r\n        it('should have heading-row as a class if collapsible', () => {\r\n            const rowClass = 'heading-row';\r\n\r\n            expect(tableHeadingRow.find('tr').hasClass(rowClass)).toBe(true);\r\n\r\n            tableHeadingRow.setProps({isCollapsible: false});\r\n            expect(tableHeadingRow.find('tr').hasClass(rowClass)).toBe(false);\r\n        });\r\n\r\n        it('should render a <TableCollapsibleRowToggle /> if collapsible', () => {\r\n            expect(tableHeadingRow.find(TableCollapsibleRowToggle).length).toBe(1);\r\n\r\n            tableHeadingRow.setProps({isCollapsible: false});\r\n            expect(tableHeadingRow.find(TableCollapsibleRowToggle).length).toBe(0);\r\n        });\r\n\r\n        it('should have class opened if opened prop is set to true', () => {\r\n            const expectedClass = 'opened';\r\n            const newTabledHeadingRowProps = _.extend({}, basicTableHeadingRowProps, {opened: true});\r\n\r\n            expect(tableHeadingRow.find('tr').hasClass(expectedClass)).toBe(false);\r\n\r\n            tableHeadingRow.setProps(newTabledHeadingRowProps);\r\n            expect(tableHeadingRow.find('tr').hasClass(expectedClass)).toBe(true);\r\n        });\r\n\r\n        it('should call onRender prop if set on mount', () => {\r\n            const onRenderSpy = jasmine.createSpy('onRender');\r\n            const newTabledHeadingRowProps = _.extend({}, basicTableHeadingRowProps, {onRender: onRenderSpy});\r\n\r\n            expect(() => tableHeadingRowInstance.componentWillMount()).not.toThrow();\r\n\r\n            tableHeadingRow.unmount();\r\n            tableHeadingRow.setProps(newTabledHeadingRowProps);\r\n            tableHeadingRow.mount();\r\n            expect(onRenderSpy).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should call onDestroy prop if set when unmounting', () => {\r\n            const onDestroySpy = jasmine.createSpy('onDestroy');\r\n            const newTabledHeadingRowProps = _.extend({}, basicTableHeadingRowProps, {onDestroy: onDestroySpy});\r\n\r\n            expect(() => tableHeadingRowInstance.componentWillUnmount()).not.toThrow();\r\n\r\n            tableHeadingRow.unmount();\r\n            tableHeadingRow.setProps(newTabledHeadingRowProps);\r\n            tableHeadingRow.mount();\r\n            tableHeadingRow.unmount();\r\n            expect(onDestroySpy).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should call onClick prop if set when clicking on row', () => {\r\n            const onClickSpy = jasmine.createSpy('onClick');\r\n            const newTabledHeadingRowProps = _.extend({}, basicTableHeadingRowProps, {onClick: onClickSpy});\r\n\r\n            tableHeadingRow.setProps(newTabledHeadingRowProps);\r\n            tableHeadingRow.find('tr').simulate('click');\r\n\r\n            expect(onClickSpy).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should call onDoubleClick prop if set when double clicking on row', () => {\r\n            const onDoubleClickSpy = jasmine.createSpy('onDoubleClick');\r\n            const newTabledHeadingRowProps = _.extend({}, basicTableHeadingRowProps, {onDoubleClick: onDoubleClickSpy});\r\n\r\n            tableHeadingRow.setProps(newTabledHeadingRowProps);\r\n            tableHeadingRow.find('tr').simulate('dblclick');\r\n\r\n            expect(onDoubleClickSpy).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should call onClickCallBack prop if set when clicking on row', () => {\r\n            const onClickCallback = jasmine.createSpy('onClickCallback');\r\n            const newTabledHeadingRowProps = _.extend({}, basicTableHeadingRowProps, {onClickCallback});\r\n            tableHeadingRow.setProps(newTabledHeadingRowProps);\r\n\r\n            tableHeadingRow.find('tr').simulate('click');\r\n\r\n            expect(onClickCallback).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should not call onClick prop if set when clicking inside an underlying dropdown', () => {\r\n            const onClickSpy = jasmine.createSpy('onClick');\r\n            const newTabledHeadingRowProps = _.extend({}, basicTableHeadingRowProps, {onClick: onClickSpy});\r\n\r\n            tableHeadingRow.setProps(newTabledHeadingRowProps);\r\n            tableHeadingRow.find('.dropdown').simulate('click');\r\n\r\n            expect(onClickSpy).not.toHaveBeenCalled();\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=851.bundle.js.map