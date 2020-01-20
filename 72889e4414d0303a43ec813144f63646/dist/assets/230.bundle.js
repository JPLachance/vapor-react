(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{1330:function(e,r,t){"use strict";t.r(r),r.default="import {mount, ReactWrapper} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {IInputProps} from '../../input/Input';\r\nimport {Checkbox} from '../Checkbox';\r\nimport {toggleCheckbox} from '../CheckboxActions';\r\nimport {CheckboxConnected} from '../CheckboxConnected';\r\n\r\ndescribe('Checkbox', () => {\r\n    describe('<CheckboxConnected />', () => {\r\n        let checkbox: ReactWrapper<IInputProps, any>;\r\n        let id: string;\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let store: Store<IReactVaporState>;\r\n\r\n        beforeEach(() => {\r\n            id = 'checkbox';\r\n\r\n            store = TestUtils.buildStore();\r\n\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <CheckboxConnected id={id} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            checkbox = wrapper.find(Checkbox).first();\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n        });\r\n\r\n        it('should get its id as a prop', () => {\r\n            const idProp = checkbox.props().id;\r\n\r\n            expect(idProp).toBeDefined();\r\n            expect(idProp).toBe(id);\r\n        });\r\n\r\n        it('should get checked false as a prop', () => {\r\n            expect(store.getState().checkboxes.filter((currentCheckbox) => currentCheckbox.id === id)[0].checked).toBe(\r\n                false\r\n            );\r\n        });\r\n\r\n        it('should get what to do on render as a prop', () => {\r\n            const onRenderProp = checkbox.props().onRender;\r\n\r\n            expect(onRenderProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on destroy as a prop', () => {\r\n            const onDestroyProp = checkbox.props().onDestroy;\r\n\r\n            expect(onDestroyProp).toBeDefined();\r\n        });\r\n\r\n        it('should add the checkbox in the store on render', () => {\r\n            expect(store.getState().checkboxes.filter((currentCheckbox) => currentCheckbox.id === id).length).toBe(1);\r\n        });\r\n\r\n        it('should toggle the checkbox in the store when dispatching a \"toggleCheckbox\" action', () => {\r\n            expect(store.getState().checkboxes.filter((currentCheckbox) => currentCheckbox.id === id).length).toBe(1);\r\n            expect(store.getState().checkboxes.filter((currentCheckbox) => currentCheckbox.id === id)[0].checked).toBe(\r\n                false\r\n            );\r\n\r\n            store.dispatch(toggleCheckbox(id));\r\n            expect(store.getState().checkboxes.filter((currentCheckbox) => currentCheckbox.id === id)[0].checked).toBe(\r\n                true\r\n            );\r\n        });\r\n\r\n        it('should toggle the checkbox in the store when clicking on it', () => {\r\n            expect(store.getState().checkboxes.filter((currentCheckbox) => currentCheckbox.id === id).length).toBe(1);\r\n            expect(store.getState().checkboxes.filter((currentCheckbox) => currentCheckbox.id === id)[0].checked).toBe(\r\n                false\r\n            );\r\n\r\n            checkbox.props().onClick(null);\r\n            expect(store.getState().checkboxes.filter((currentCheckbox) => currentCheckbox.id === id)[0].checked).toBe(\r\n                true\r\n            );\r\n        });\r\n\r\n        it('should remove the checkbox in the store on destroy', () => {\r\n            wrapper.unmount();\r\n            expect(store.getState().checkboxes.filter((checkboxs) => checkboxs.id === id).length).toBe(0);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=230.bundle.js.map