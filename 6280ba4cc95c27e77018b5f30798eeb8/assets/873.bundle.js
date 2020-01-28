(window.webpackJsonp=window.webpackJsonp||[]).push([[873],{1971:function(t,e,r){"use strict";r.r(e),e.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {ITableEmptyRowProps, TableEmptyRow} from '../TableEmptyRow';\r\n\r\ndescribe('Tables', () => {\r\n    const tableEmptyRowBasicProps: ITableEmptyRowProps = {\r\n        text: 'No result',\r\n        nbColumns: 2,\r\n    };\r\n\r\n    describe('<TableEmptyRow />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<TableEmptyRow {...tableEmptyRowBasicProps} />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<TableEmptyRow />', () => {\r\n        let tableEmptyRow: ReactWrapper<ITableEmptyRowProps, any>;\r\n\r\n        beforeEach(() => {\r\n            document.getElementById('App').innerHTML = '<table id=\"AppTable\"></table>';\r\n\r\n            tableEmptyRow = mount(<TableEmptyRow {...tableEmptyRowBasicProps} />, {\r\n                attachTo: document.getElementById('AppTable'),\r\n            });\r\n        });\r\n\r\n        afterEach(() => {\r\n            tableEmptyRow.detach();\r\n        });\r\n\r\n        it('should get its text as a prop', () => {\r\n            const textProp = tableEmptyRow.props().text;\r\n\r\n            expect(textProp).toBeDefined();\r\n            expect(textProp).toBe(tableEmptyRowBasicProps.text);\r\n        });\r\n\r\n        it('should get the number of columns as a prop', () => {\r\n            const nbColumnsProp = tableEmptyRow.props().nbColumns;\r\n\r\n            expect(nbColumnsProp).toBeDefined();\r\n            expect(nbColumnsProp).toBe(tableEmptyRowBasicProps.nbColumns);\r\n        });\r\n\r\n        it('should display the text received as prop', () => {\r\n            expect(tableEmptyRow.html()).toContain(tableEmptyRowBasicProps.text);\r\n        });\r\n\r\n        it('should have the number of columns received as prop set as the colspan', () => {\r\n            expect(tableEmptyRow.find('td').props().colSpan).toBe(tableEmptyRowBasicProps.nbColumns);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=873.bundle.js.map