(window.webpackJsonp=window.webpackJsonp||[]).push([[472],{1568:function(t,e,r){"use strict";r.r(e),e.default="import {mount, ReactWrapper} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport * as s from 'underscore.string';\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {ILastUpdatedProps, LastUpdated} from '../LastUpdated';\r\nimport {changeLastUpdated} from '../LastUpdatedActions';\r\nimport {LastUpdatedConnected} from '../LastUpdatedConnected';\r\n\r\ndescribe('LastUpdated', () => {\r\n    describe('<LastUpdatedConnected />', () => {\r\n        let lastUpdated: ReactWrapper<ILastUpdatedProps, any>;\r\n        let id: string;\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let store: Store<IReactVaporState>;\r\n\r\n        beforeEach(() => {\r\n            id = 'last-update';\r\n\r\n            store = TestUtils.buildStore();\r\n\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <LastUpdatedConnected id={id} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            lastUpdated = wrapper.find(LastUpdated).first();\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n        });\r\n\r\n        it('should get its id as a prop', () => {\r\n            const idProp = lastUpdated.props().id;\r\n\r\n            expect(idProp).toBeDefined();\r\n            expect(idProp).toBe(id);\r\n        });\r\n\r\n        it('should get last update time as a prop', () => {\r\n            const timeProp = lastUpdated.props().time;\r\n\r\n            expect(timeProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on render as a prop', () => {\r\n            const onRenderProp = lastUpdated.props().onRender;\r\n\r\n            expect(onRenderProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on destroy as a prop', () => {\r\n            const onDestroyProp = lastUpdated.props().onDestroy;\r\n\r\n            expect(onDestroyProp).toBeDefined();\r\n        });\r\n\r\n        it('should display the last update time', () => {\r\n            expect(s.contains(lastUpdated.html(), 'AM') || s.contains(lastUpdated.html(), 'PM')).toBe(true);\r\n        });\r\n\r\n        it('should add the last update time in the store on render', () => {\r\n            expect(store.getState().lastUpdatedComposite.filter((timer) => timer.id === id).length).toBe(1);\r\n        });\r\n\r\n        it('should update the last update time in the store when dispatching a \"changeLastUpdated\" action', () => {\r\n            expect(store.getState().lastUpdatedComposite.filter((timer) => timer.id === id).length).toBe(1);\r\n\r\n            const storedTime = store.getState().lastUpdatedComposite.filter((timer) => timer.id === id)[0].time;\r\n            store.dispatch(changeLastUpdated(id));\r\n            expect(store.getState().lastUpdatedComposite.filter((timer) => timer.id === id)[0].time).not.toBe(\r\n                storedTime\r\n            );\r\n        });\r\n\r\n        it('should remove the last update time in the store on destroy', () => {\r\n            wrapper.unmount();\r\n            expect(store.getState().lastUpdatedComposite.filter((timer) => timer.id === id).length).toBe(0);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=472.bundle.js.map