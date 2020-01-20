(window.webpackJsonp=window.webpackJsonp||[]).push([[527],{1622:function(e,r,t){"use strict";t.r(r),r.default="import {mount, ReactWrapper} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {IModalProps, Modal} from '../Modal';\r\nimport {closeModal, openModal} from '../ModalActions';\r\nimport {ModalConnected} from '../ModalConnected';\r\n\r\ndescribe('Modal', () => {\r\n    describe('<ModalConnected />', () => {\r\n        let modal: ReactWrapper<IModalProps, any>;\r\n        let id: string;\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let store: Store<IReactVaporState>;\r\n\r\n        beforeEach(() => {\r\n            id = 'modal';\r\n\r\n            store = TestUtils.buildStore();\r\n\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <ModalConnected id={id} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            modal = wrapper.find(Modal).first();\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n        });\r\n\r\n        it('should get its id as a prop', () => {\r\n            const idProp = modal.props().id;\r\n\r\n            expect(idProp).toBeDefined();\r\n            expect(idProp).toBe(id);\r\n        });\r\n\r\n        it('should get isOpened false as a prop', () => {\r\n            const isOpened = modal.props().isOpened;\r\n\r\n            expect(isOpened).toBeDefined();\r\n            expect(isOpened).toBe(false);\r\n        });\r\n\r\n        it('should get what to do on render as a prop', () => {\r\n            const onRenderProp = modal.props().onRender;\r\n\r\n            expect(onRenderProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on destroy as a prop', () => {\r\n            const onDestroyProp = modal.props().onDestroy;\r\n\r\n            expect(onDestroyProp).toBeDefined();\r\n        });\r\n\r\n        it('should add the modal not opened by default in the store on render', () => {\r\n            const modalInState = store.getState().modals.filter((currentModal) => currentModal.id === id);\r\n            expect(modalInState.length).toBe(1);\r\n            expect(modalInState[0].isOpened).toBe(false);\r\n        });\r\n\r\n        it('should add the modal opened in the store on render if openOnMount is passed as prop', () => {\r\n            wrapper.unmount();\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <ModalConnected id={id} openOnMount />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n\r\n            const modalInState = store.getState().modals.filter((currentModal) => currentModal.id === id);\r\n            expect(modalInState.length).toBe(1);\r\n            expect(modalInState[0].isOpened).toBe(true);\r\n        });\r\n\r\n        it('should open the modal in the store when dispatching a \"openModal\" action', () => {\r\n            expect(store.getState().modals.filter((currentModal) => currentModal.id === id).length).toBe(1);\r\n            expect(store.getState().modals.filter((currentModal) => currentModal.id === id)[0].isOpened).toBe(false);\r\n\r\n            store.dispatch(openModal(id));\r\n            expect(store.getState().modals.filter((currentModal) => currentModal.id === id)[0].isOpened).toBe(true);\r\n        });\r\n\r\n        it('should close the modal in the store when dispatching a \"closeModal\" action', () => {\r\n            expect(store.getState().modals.filter((currentModal) => currentModal.id === id)[0].isOpened).toBe(false);\r\n            store.dispatch(openModal(id));\r\n            expect(store.getState().modals.filter((currentModal) => currentModal.id === id)[0].isOpened).toBe(true);\r\n\r\n            store.dispatch(closeModal(id));\r\n            expect(store.getState().modals.filter((currentModal) => currentModal.id === id)[0].isOpened).toBe(false);\r\n        });\r\n\r\n        it('should remove the modal in the store on destroy', () => {\r\n            wrapper.unmount();\r\n            expect(store.getState().modals.filter((currentModal) => currentModal.id === id).length).toBe(0);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=527.bundle.js.map