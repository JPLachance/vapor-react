(window.webpackJsonp=window.webpackJsonp||[]).push([[496],{1591:function(r,n,t){"use strict";t.r(n),n.default="import {mount, ReactWrapper} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {LoadingConnected} from '../LoadingConnected';\r\n\r\ndescribe('<LoadingConnected />', () => {\r\n    it('should render without errors', () => {\r\n        const store: Store<IReactVaporState> = TestUtils.buildStore();\r\n        expect(() => {\r\n            const wrapper: ReactWrapper<any, any> = mount(\r\n                <Provider store={store}>\r\n                    <div>\r\n                        <LoadingConnected id=\"loading\" />\r\n                    </div>\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            wrapper.unmount();\r\n            wrapper.detach();\r\n        }).not.toThrow();\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=496.bundle.js.map