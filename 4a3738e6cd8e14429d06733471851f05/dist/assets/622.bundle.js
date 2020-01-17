(window.webpackJsonp=window.webpackJsonp||[]).push([[622],{1709:function(o,r,e){"use strict";e.r(r),r.default="import {mount} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport {findWhere} from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {IPopoverProps, Popover} from '../Popover';\r\nimport {PopoverConnected} from '../PopoverConnected';\r\n\r\ndescribe('<PopoverConnected />', () => {\r\n    let store: Store<IReactVaporState>;\r\n    let basicPopoverProps: IPopoverProps;\r\n\r\n    beforeEach(() => {\r\n        store = TestUtils.buildStore();\r\n        basicPopoverProps = {attachment: 'top left', id: 'popover-connected'};\r\n    });\r\n\r\n    afterEach(() => {\r\n        store.dispatch(clearState());\r\n    });\r\n\r\n    const mountComponentWithProps = (props: IPopoverProps) => {\r\n        return mount(\r\n            <Provider store={store}>\r\n                <PopoverConnected {...props}>\r\n                    <div className=\"toggler\">toggler</div>\r\n                    <div>popover</div>\r\n                </PopoverConnected>\r\n            </Provider>,\r\n            {attachTo: document.getElementById('App')}\r\n        );\r\n    };\r\n\r\n    it('should not throw when calling onMount', () => {\r\n        expect(() =>\r\n            mountComponentWithProps(basicPopoverProps)\r\n                .find(Popover)\r\n                .props()\r\n                .onMount(true)\r\n        ).not.toThrow();\r\n    });\r\n\r\n    it('should not throw when calling onUnmount', () => {\r\n        expect(() =>\r\n            mountComponentWithProps(basicPopoverProps)\r\n                .find(Popover)\r\n                .props()\r\n                .onUnmount()\r\n        ).not.toThrow();\r\n    });\r\n\r\n    it('should not throw when calling onToggle', () => {\r\n        expect(() =>\r\n            mountComponentWithProps(basicPopoverProps)\r\n                .find(Popover)\r\n                .props()\r\n                .onToggle(true)\r\n        ).not.toThrow();\r\n    });\r\n\r\n    describe('render', () => {\r\n        it('should render without error', () => {\r\n            expect(() => mountComponentWithProps(basicPopoverProps)).not.toThrow();\r\n        });\r\n\r\n        it('should put the popover in the store on mount', () => {\r\n            expect(findWhere(store.getState().popovers, {id: basicPopoverProps.id})).toBeUndefined();\r\n            mountComponentWithProps(basicPopoverProps);\r\n            expect(findWhere(store.getState().popovers, {id: basicPopoverProps.id})).toBeDefined();\r\n        });\r\n\r\n        it('should put the popover in the store on mount', () => {\r\n            const popover = mountComponentWithProps(basicPopoverProps);\r\n            expect(findWhere(store.getState().popovers, {id: basicPopoverProps.id})).toBeDefined();\r\n            popover.unmount();\r\n            expect(findWhere(store.getState().popovers, {id: basicPopoverProps.id})).toBeUndefined();\r\n        });\r\n    });\r\n\r\n    describe('after render', () => {\r\n        describe('Toggling logic', () => {\r\n            it('should toggle the isOpen prop on click of the popover toggler', () => {\r\n                const popover = mountComponentWithProps(basicPopoverProps);\r\n                const isOpenBeforeClick = findWhere(store.getState().popovers, {id: basicPopoverProps.id}).isOpen;\r\n                popover.find('.toggler').simulate('click');\r\n                expect(findWhere(store.getState().popovers, {id: basicPopoverProps.id}).isOpen).toBe(\r\n                    !isOpenBeforeClick\r\n                );\r\n\r\n                popover.find('.toggler').simulate('click');\r\n                expect(findWhere(store.getState().popovers, {id: basicPopoverProps.id}).isOpen).toBe(isOpenBeforeClick);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=622.bundle.js.map