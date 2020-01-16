(window.webpackJsonp=window.webpackJsonp||[]).push([[850],{1938:function(r,e,o){"use strict";o.r(e),e.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {ITableCollapsibleRowProps, TableCollapsibleRow} from '../TableCollapsibleRow';\r\nimport {TableCollapsibleRowConnected} from '../TableCollapsibleRowConnected';\r\nimport {addRow} from '../TableRowActions';\r\n\r\ndescribe('Tables', () => {\r\n    describe('<TableCollapsibleRowConnected />', () => {\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let tableCollapsibleRow: ReactWrapper<ITableCollapsibleRowProps, any>;\r\n        let basicTableCollapsibleRowProps: ITableCollapsibleRowProps;\r\n        let store: Store<IReactVaporState>;\r\n\r\n        beforeEach(() => {\r\n            basicTableCollapsibleRowProps = {\r\n                id: 'collapsible-row',\r\n                nbColumns: 6,\r\n                isInError: true,\r\n                error: {\r\n                    errorDescription: 'error',\r\n                    errorPrecision: 'the row is in error',\r\n                    errorTroubleshoot: 'you should do something',\r\n                    errorStatus: 'urgent',\r\n                    errorCode: 'error_1',\r\n                },\r\n            };\r\n\r\n            store = TestUtils.buildStore();\r\n\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <table>\r\n                        <tbody>\r\n                            <TableCollapsibleRowConnected {...basicTableCollapsibleRowProps} />\r\n                        </tbody>\r\n                    </table>\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            store.dispatch(addRow(basicTableCollapsibleRowProps.id));\r\n\r\n            wrapper.update();\r\n            tableCollapsibleRow = wrapper.find(TableCollapsibleRow).first();\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n        });\r\n\r\n        it('should get if it is opened as a prop', () => {\r\n            const openedProp = tableCollapsibleRow.props().opened;\r\n\r\n            expect(openedProp).toBeDefined();\r\n            expect(openedProp).toBe(false);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=850.bundle.js.map