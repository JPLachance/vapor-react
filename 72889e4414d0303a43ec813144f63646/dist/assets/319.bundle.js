(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{1416:function(r,t,e){"use strict";e.r(t),t.default="import {ReactWrapper, ShallowWrapper} from 'enzyme';\r\nimport {mountWithStore, shallowWithState} from 'enzyme-redux';\r\nimport * as React from 'react';\r\n\r\nimport {RTestUtils} from '../../../utils/tests/RTestUtils';\r\nimport {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';\r\nimport {Drop, IDropProps} from '../Drop';\r\nimport {DropPod} from '../DropPod';\r\nimport {DefaultGroupIds, DropActions} from '../redux/DropActions';\r\n\r\ndescribe('Drop', () => {\r\n    describe('<Drop />', () => {\r\n        const defaultButton: React.ReactNode = <div className={'onclick'}></div>;\r\n\r\n        it('should mount without errors', () => {\r\n            expect(() => {\r\n                shallowWithState(<Drop id={'test'} renderOpenButton={() => defaultButton} />, {}).dive();\r\n            }).not.toThrow();\r\n        });\r\n\r\n        it('should unmount without errors', () => {\r\n            const wrapper = shallowWithState(<Drop id={'test'} renderOpenButton={() => defaultButton} />, {}).dive();\r\n            expect(() => {\r\n                wrapper.unmount();\r\n            }).not.toThrow();\r\n        });\r\n\r\n        it('should call renderOpenButton on mount', () => {\r\n            const renderOpenButtonSpy = jasmine.createSpy('renderOpenButton').and.returnValue(<div>DIV</div>);\r\n            shallowWithState(<Drop id={'test'} renderOpenButton={renderOpenButtonSpy} />, {}).dive();\r\n\r\n            expect(renderOpenButtonSpy).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        describe('once mounted', () => {\r\n            const id = 'DropId';\r\n\r\n            let wrapper: ReactWrapper<IDropProps>;\r\n            const defaultStore = (isOpen: boolean) => ({\r\n                drop: {\r\n                    [DefaultGroupIds.default]: {\r\n                        id,\r\n                        isOpen,\r\n                    },\r\n                },\r\n            });\r\n\r\n            beforeEach(() => RTestUtils.addHTMLElementWithId());\r\n\r\n            afterEach(() => {\r\n                if (wrapper.length) {\r\n                    wrapper.unmount();\r\n                }\r\n                RTestUtils.removeHTMLElementWithId();\r\n            });\r\n\r\n            const mountDropWithStore = (\r\n                props?: Partial<IDropProps>,\r\n                store?: ReactVaporMockStore,\r\n                child: React.ReactNode = null\r\n            ) => {\r\n                wrapper = mountWithStore(\r\n                    <Drop\r\n                        id={id}\r\n                        renderOpenButton={(onClick: () => void) => (\r\n                            <div id={'Button'} className={'button'} onClick={onClick}></div>\r\n                        )}\r\n                        {...props}\r\n                    >\r\n                        {child}\r\n                    </Drop>,\r\n                    store || getStoreMock()\r\n                );\r\n                return wrapper;\r\n            };\r\n\r\n            it('should toggle false on unmount', () => {\r\n                const store = getStoreMock(defaultStore(true));\r\n                wrapper = mountDropWithStore({}, store);\r\n\r\n                wrapper.unmount();\r\n\r\n                expect(store.getActions()).toContain(DropActions.toggle(id, DefaultGroupIds.default, false));\r\n            });\r\n\r\n            it('should render a <DropPod>', () => {\r\n                wrapper = mountDropWithStore();\r\n\r\n                expect(wrapper.find(DropPod).length).toBe(1);\r\n            });\r\n\r\n            it('should not dispatch an action to toggle the drop if the element is not in the document.body', () => {\r\n                const store = getStoreMock(defaultStore(false));\r\n                mountDropWithStore({}, store);\r\n\r\n                RTestUtils.clickOnElement(document.head);\r\n\r\n                expect(store.getActions()).not.toContain(DropActions.toggle(id, DefaultGroupIds.default, false));\r\n            });\r\n\r\n            it('should dispatch an action to toggle drop isOpen if the element target is in the body but not inside the button', () => {\r\n                const store = getStoreMock(defaultStore(true));\r\n                mountDropWithStore({}, store);\r\n\r\n                store.dispatch(DropActions.toggle(id, DefaultGroupIds.default));\r\n\r\n                RTestUtils.clickOnElement();\r\n\r\n                expect(store.getActions()).toContain(DropActions.toggle(id, DefaultGroupIds.default, false));\r\n            });\r\n\r\n            it('should not dispatch an action to toggle drop isOpen if the element target is in the body but not inside the button if closeOnClickOutside is false', () => {\r\n                const store = getStoreMock(defaultStore(false));\r\n                mountDropWithStore(\r\n                    {\r\n                        closeOnClickOutside: false,\r\n                    },\r\n                    store\r\n                );\r\n\r\n                RTestUtils.clickOnElement();\r\n\r\n                expect(store.getActions()).not.toContain(DropActions.toggle(id, DefaultGroupIds.default, false));\r\n            });\r\n\r\n            it('should dispatch an action to toggle drop isOpen if the element target is in the body and inside the drop element', () => {\r\n                const store = getStoreMock(defaultStore(true));\r\n                mountDropWithStore({}, store, <div id={'Drop'} className={'drop'}></div>);\r\n\r\n                store.dispatch(DropActions.toggle(id, DefaultGroupIds.default));\r\n\r\n                RTestUtils.clickOnElement(document.getElementById('Drop'));\r\n\r\n                expect(store.getActions()).toContain(DropActions.toggle(id, DefaultGroupIds.default, false));\r\n            });\r\n\r\n            it('should not dispatch an action to toggle drop isOpen if drop is close', () => {\r\n                const store = getStoreMock(defaultStore(false));\r\n                mountDropWithStore({}, store, <div id={'Drop'} className={'drop'}></div>);\r\n\r\n                store.dispatch(DropActions.toggle(id, DefaultGroupIds.default));\r\n\r\n                RTestUtils.clickOnElement(document.getElementById('Drop'));\r\n\r\n                expect(store.getActions()).not.toContain(DropActions.toggle(id, DefaultGroupIds.default, false));\r\n            });\r\n\r\n            it('should not dispatch an action to toggle drop isOpen if the element target is in the body and inside the drop element if closeOnClickDrop is false', () => {\r\n                const store = getStoreMock(defaultStore(true));\r\n                mountDropWithStore(\r\n                    {\r\n                        closeOnClickDrop: false,\r\n                    },\r\n                    store,\r\n                    <div id={'Drop'} className={'drop'}></div>\r\n                );\r\n\r\n                RTestUtils.clickOnElement(document.getElementById('Drop'));\r\n\r\n                expect(store.getActions()).not.toContain(DropActions.toggle(id, DefaultGroupIds.default, false));\r\n            });\r\n\r\n            it('should dispatch a toggle event when we call onClick sent with renderOpenButton', () => {\r\n                const store = getStoreMock(defaultStore(false));\r\n                mountDropWithStore(\r\n                    {\r\n                        renderOpenButton: (onClick: () => void) => {\r\n                            onClick();\r\n                            return <div></div>;\r\n                        },\r\n                    },\r\n                    store,\r\n                    <div id={'Drop'} className={'drop'}></div>\r\n                );\r\n\r\n                expect(store.getActions()).toContain(DropActions.toggle(id, DefaultGroupIds.default, true));\r\n            });\r\n\r\n            it('should not add data-open attribute to open if the drop is closed', () => {\r\n                const store = getStoreMock(defaultStore(false));\r\n                mountDropWithStore({}, store);\r\n                const shallowWrapperDropPod: ShallowWrapper = shallowWithState(\r\n                    wrapper\r\n                        .find(DropPod)\r\n                        .props()\r\n                        .renderDrop({} as any, {} as any, {} as any) as any,\r\n                    {}\r\n                );\r\n                expect(shallowWrapperDropPod.prop('data-open')).toBe(false);\r\n            });\r\n\r\n            it('should add data-open attribute to open if the drop is open', () => {\r\n                const store = getStoreMock(defaultStore(true));\r\n                mountDropWithStore({}, store);\r\n                const shallowWrapperDropPod: ShallowWrapper = shallowWithState(\r\n                    wrapper\r\n                        .find(DropPod)\r\n                        .props()\r\n                        .renderDrop({} as any, {} as any, {} as any) as any,\r\n                    {}\r\n                );\r\n                expect(shallowWrapperDropPod.prop('data-open')).toBe(true);\r\n            });\r\n\r\n            describe('events', () => {\r\n                it('should add the event on click if the drop is opening', () => {\r\n                    const spy = spyOn(document, 'addEventListener');\r\n                    let shallowWrapper: ShallowWrapper;\r\n\r\n                    shallowWrapper = shallowWithState(\r\n                        <Drop id={'test'} renderOpenButton={() => defaultButton} />,\r\n                        {}\r\n                    ).dive();\r\n\r\n                    expect(spy).toHaveBeenCalledTimes(0);\r\n\r\n                    shallowWrapper.setProps({isOpen: true});\r\n\r\n                    expect(spy).toHaveBeenCalledTimes(1);\r\n                });\r\n\r\n                it('should remove the event on click if the drop is closing', () => {\r\n                    const spy = spyOn(document, 'removeEventListener');\r\n                    let shallowWrapper: ShallowWrapper;\r\n\r\n                    shallowWrapper = shallowWithState(\r\n                        <Drop id={'test'} renderOpenButton={() => defaultButton} />,\r\n                        {}\r\n                    ).dive();\r\n\r\n                    shallowWrapper.setProps({isOpen: true});\r\n                    shallowWrapper.setProps({isOpen: false});\r\n\r\n                    expect(spy).toHaveBeenCalledTimes(1);\r\n                });\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=319.bundle.js.map