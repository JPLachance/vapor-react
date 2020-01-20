(window.webpackJsonp=window.webpackJsonp||[]).push([[765],{1853:function(r,e,t){"use strict";t.r(e),e.default="import {mount, ReactWrapper} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {addTab} from '../TabActions';\r\nimport {ITabPaneProps, TabPane} from '../TabPane';\r\nimport {TabPaneConnected} from '../TabPaneConnected';\r\n\r\ndescribe('TabPane', () => {\r\n    describe('<TabPaneConnected />', () => {\r\n        let tabPane: ReactWrapper<ITabPaneProps, any>;\r\n        let id: string;\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let store: Store<IReactVaporState>;\r\n\r\n        beforeEach(() => {\r\n            id = 'tab';\r\n\r\n            store = TestUtils.buildStore();\r\n\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <TabPaneConnected id={id} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            tabPane = wrapper.find(TabPane).first();\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n        });\r\n\r\n        it('should get its id as a prop', () => {\r\n            const idProp = tabPane.props().id;\r\n\r\n            expect(idProp).toBeDefined();\r\n            expect(idProp).toBe(id);\r\n        });\r\n\r\n        it('should get isActive false as a prop', () => {\r\n            const isActive = tabPane.props().isActive;\r\n\r\n            expect(isActive).toBeDefined();\r\n            expect(isActive).toBe(false);\r\n        });\r\n\r\n        it('should set the tab pane as active when adding a tab with same ID and no other tab is in the store', () => {\r\n            store.dispatch(addTab(id));\r\n            wrapper.update();\r\n\r\n            expect(wrapper.find(TabPane).props().isActive).toBe(true);\r\n        });\r\n\r\n        it('should not set the tab pane as active when adding a tab with same ID and another tab is in the store', () => {\r\n            store.dispatch(addTab('tab-id-2'));\r\n            store.dispatch(addTab(id));\r\n            wrapper.update();\r\n\r\n            expect(wrapper.find(TabPane).props().isActive).toBe(false);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=765.bundle.js.map