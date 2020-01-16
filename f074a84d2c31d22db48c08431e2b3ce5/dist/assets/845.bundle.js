(window.webpackJsonp=window.webpackJsonp||[]).push([[845],{1933:function(e,r,t){"use strict";t.r(r),r.default="import {mount} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {ITableProps} from '../Table';\r\nimport {TableChildHeader} from '../table-children/TableChildHeader';\r\nimport {TableHeader} from '../TableHeader';\r\nimport {TableHeaderCell} from '../TableHeaderCell';\r\nimport {TableHeaderCellConnected} from '../TableHeaderCellConnected';\r\nimport {tablePropsMock} from './TableTestCommon';\r\n\r\ndescribe('<TableChildHeader />', () => {\r\n    let store: Store<IReactVaporState>;\r\n\r\n    beforeEach(() => {\r\n        store = TestUtils.buildStore();\r\n    });\r\n\r\n    afterEach(() => {\r\n        store.dispatch(clearState());\r\n    });\r\n\r\n    describe('render', () => {\r\n        const mountComponentWithProps = (props: ITableProps) => {\r\n            return mount(\r\n                <Provider store={store}>\r\n                    <TableChildHeader {...props} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n        };\r\n\r\n        it('should render without error if basic props are passed', () => {\r\n            expect(() => {\r\n                mountComponentWithProps(tablePropsMock);\r\n            }).not.toThrow();\r\n        });\r\n\r\n        it('should have as many non-connected header cells as there are headerAttribute', () => {\r\n            const tableHeader = mountComponentWithProps(tablePropsMock).find(TableHeader);\r\n\r\n            expect(tableHeader.find(TableHeaderCell).length).toBe(tablePropsMock.headingAttributes.length);\r\n        });\r\n\r\n        it('should render with a mod-no-border-top and no mod-deactivate-pointer class by default', () => {\r\n            const tableHeader = mountComponentWithProps(tablePropsMock).find(TableHeader);\r\n\r\n            expect(tableHeader.props().headerClass).toContain('mod-no-border-top');\r\n            expect(tableHeader.props().headerClass).not.toContain('mod-deactivate-pointer');\r\n        });\r\n\r\n        it('should render with a mod-no-border-top and a mod-deactivate-pointer class if table is loading', () => {\r\n            const tableHeader = mountComponentWithProps({\r\n                ...tablePropsMock,\r\n                tableCompositeState: {isLoading: true},\r\n            } as any).find(TableHeader);\r\n\r\n            expect(tableHeader.props().headerClass).toContain('mod-no-border-top');\r\n            expect(tableHeader.props().headerClass).toContain('mod-deactivate-pointer');\r\n        });\r\n\r\n        it('should render with class name if defined', () => {\r\n            const newClassToAdd = 'wow';\r\n            const tableHeader = mountComponentWithProps({...tablePropsMock, tableHeaderClasses: [newClassToAdd]}).find(\r\n                TableHeader\r\n            );\r\n\r\n            expect(tableHeader.props().headerClass).toContain(newClassToAdd);\r\n        });\r\n\r\n        it('should have class on header when defined in the attributes', () => {\r\n            const newClassToAdd = 'wow';\r\n            const headerAttributesWithHeaderClasses = tablePropsMock.headingAttributes.map((attribute) => ({\r\n                ...attribute,\r\n                headerClasses: [newClassToAdd],\r\n            }));\r\n            const tableHeader = mountComponentWithProps({\r\n                ...tablePropsMock,\r\n                headingAttributes: headerAttributesWithHeaderClasses,\r\n            }).find(TableHeader);\r\n\r\n            tableHeader.find(TableHeaderCell).forEach((headerCell) => {\r\n                expect(headerCell.props().className).toContain(newClassToAdd);\r\n            });\r\n        });\r\n\r\n        it('should have no connected header cells if no headerAttribute has sort', () => {\r\n            const tableHeader = mountComponentWithProps(tablePropsMock).find(TableHeader);\r\n\r\n            expect(tableHeader.find(TableHeaderCellConnected).length).toBe(0);\r\n            expect(tableHeader.find(TableHeaderCell).length).not.toBe(0);\r\n        });\r\n\r\n        it('should have as many connected header cells as there are headerAttribute with sort', () => {\r\n            const headerAttributesWithSort = tablePropsMock.headingAttributes.map((attribute) => ({\r\n                ...attribute,\r\n                sort: true,\r\n            }));\r\n            const tableHeader = mountComponentWithProps({\r\n                ...tablePropsMock,\r\n                headingAttributes: headerAttributesWithSort,\r\n            }).find(TableHeader);\r\n\r\n            expect(tableHeader.find(TableHeaderCellConnected).length).toBe(headerAttributesWithSort.length);\r\n        });\r\n\r\n        it('should have proper sort information for each connected header cell', () => {\r\n            const headerAttributesWithSort = tablePropsMock.headingAttributes.map((attribute) => ({\r\n                ...attribute,\r\n                sort: true,\r\n            }));\r\n            const tableHeader = mountComponentWithProps({\r\n                ...tablePropsMock,\r\n                headingAttributes: headerAttributesWithSort,\r\n            }).find(TableHeader);\r\n\r\n            tableHeader.find(TableHeaderCellConnected).forEach((headerCell, index) => {\r\n                expect(headerCell.props().tableId).toBe(tablePropsMock.id);\r\n                expect(headerCell.props().attributeToSort).toBe(headerAttributesWithSort[index].attributeName);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=845.bundle.js.map