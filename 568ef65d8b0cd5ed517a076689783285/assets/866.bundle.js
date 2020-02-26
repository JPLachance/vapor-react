(window.webpackJsonp=window.webpackJsonp||[]).push([[866],{1967:function(r,t,e){"use strict";e.r(t),t.default="import {mount} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {ITableProps} from '../Table';\r\nimport {TableChildLastUpdated} from '../table-children/TableChildLastUpdated';\r\nimport {tablePropsMock} from './TableTestCommon';\r\n\r\ndescribe('<TableChildLastUpdated />', () => {\r\n    let store: Store<IReactVaporState>;\r\n\r\n    beforeEach(() => {\r\n        store = TestUtils.buildStore();\r\n    });\r\n\r\n    afterEach(() => {\r\n        store.dispatch(clearState());\r\n    });\r\n\r\n    describe('render', () => {\r\n        const mountComponentWithProps = (props: ITableProps) => {\r\n            return mount(\r\n                <Provider store={store}>\r\n                    <TableChildLastUpdated {...props} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n        };\r\n\r\n        describe('render without error', () => {\r\n            it('should render without error if basic props are passed', () => {\r\n                expect(() => {\r\n                    mountComponentWithProps(tablePropsMock);\r\n                }).not.toThrow();\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=866.bundle.js.map