(window.webpackJsonp=window.webpackJsonp||[]).push([[413],{1510:function(e,r,p){"use strict";p.r(r),r.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {Flippable, IFlippableProps} from '../Flippable';\r\nimport {changeFlippableSide} from '../FlippableActions';\r\nimport {FlippableConnected} from '../FlippableConnected';\r\n\r\ndescribe('Flippable', () => {\r\n    describe('<FlippableConnected />', () => {\r\n        const FLIPPABLE_BASIC_PROPS: IFlippableProps = {\r\n            id: 'some-id',\r\n        };\r\n\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let flippable: ReactWrapper<IFlippableProps, any>;\r\n        let store: Store<IReactVaporState>;\r\n\r\n        const mountWithProps = (props: IFlippableProps) => {\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <FlippableConnected {...props} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            flippable = wrapper.find(Flippable).first();\r\n        };\r\n\r\n        beforeEach(() => {\r\n            store = TestUtils.buildStore();\r\n            mountWithProps(FLIPPABLE_BASIC_PROPS);\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n        });\r\n\r\n        it('should get an id as prop', () => {\r\n            expect(flippable.props().id).toBe(FLIPPABLE_BASIC_PROPS.id);\r\n        });\r\n\r\n        it('should get if the flippable is flipped as prop', () => {\r\n            const isFlippedProp = flippable.props().isFlipped;\r\n\r\n            expect(isFlippedProp).toBeDefined();\r\n            expect(isFlippedProp).toBe(false);\r\n        });\r\n\r\n        it('should get what to do on render', () => {\r\n            expect(flippable.props().onRender).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on destroy', () => {\r\n            expect(flippable.props().onDestroy).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on flip', () => {\r\n            expect(flippable.props().onFlip).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on unflip', () => {\r\n            expect(flippable.props().onUnflip).toBeDefined();\r\n        });\r\n\r\n        it('should be removed from the store when unmounted', () => {\r\n            expect(store.getState().flippables.length).toBe(1);\r\n\r\n            wrapper.unmount();\r\n\r\n            expect(store.getState().flippables.length).toBe(0);\r\n        });\r\n\r\n        it('should add a Flippable in the store when mounted', () => {\r\n            wrapper.unmount();\r\n            store.dispatch(clearState());\r\n\r\n            expect(store.getState().flippables.length).toBe(0);\r\n\r\n            wrapper.mount();\r\n\r\n            expect(store.getState().flippables.length).toBe(1);\r\n        });\r\n\r\n        it('should flip the flippable component when calling onFlip prop', () => {\r\n            expect(flippable.props().isFlipped).toBe(false);\r\n\r\n            flippable.props().onFlip();\r\n            wrapper.update();\r\n\r\n            expect(wrapper.find(Flippable).props().isFlipped).toBe(true);\r\n        });\r\n\r\n        it('should unflip the flippable component when calling onUnflip prop', () => {\r\n            store.dispatch(changeFlippableSide(FLIPPABLE_BASIC_PROPS.id, true));\r\n            wrapper.update();\r\n\r\n            expect(wrapper.find(Flippable).props().isFlipped).toBe(true);\r\n\r\n            wrapper\r\n                .find(Flippable)\r\n                .props()\r\n                .onUnflip();\r\n            wrapper.update();\r\n\r\n            expect(wrapper.find(Flippable).props().isFlipped).toBe(false);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=413.bundle.js.map