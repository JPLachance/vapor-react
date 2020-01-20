(window.webpackJsonp=window.webpackJsonp||[]).push([[551],{1647:function(n,t,r){"use strict";r.r(t),t.default="import {ShallowWrapper} from 'enzyme';\r\nimport {shallowWithState, shallowWithStore} from 'enzyme-redux';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {StringListActions} from '../../../reusableState/customList/StringListActions';\r\nimport {RTestUtils} from '../../../utils/tests/RTestUtils';\r\nimport {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';\r\nimport {Button, IButtonProps} from '../../button/Button';\r\nimport {multilineBoxWithRemoveButton} from '../hoc/MultilineBoxWithRemoveButton';\r\nimport {IMultilineBoxOwnProps, MultilineBox} from '../MultilineBox';\r\n\r\ndescribe('Multiline box with remove button', () => {\r\n    describe('<MultilineBoxWithRemoveButton/>', () => {\r\n        let store: ReactVaporMockStore;\r\n\r\n        const id = 'multiline-box';\r\n        const DefaultMultilineBoxWithRemoveButton = _.compose(multilineBoxWithRemoveButton())(MultilineBox);\r\n\r\n        const shallowComponent = (\r\n            Component: any,\r\n            props: Partial<IMultilineBoxOwnProps> = {},\r\n            state = {}\r\n        ): ShallowWrapper => {\r\n            return shallowWithState(<Component {...props} id={id} />, state)\r\n                .dive()\r\n                .dive()\r\n                .dive();\r\n        };\r\n\r\n        it('should mount without errors', () => {\r\n            expect(() =>\r\n                shallowComponent(DefaultMultilineBoxWithRemoveButton, {\r\n                    data: [],\r\n                    renderBody: () => _.identity,\r\n                    defaultProps: {},\r\n                })\r\n            ).not.toThrow();\r\n        });\r\n\r\n        it('should unmount without errors', () => {\r\n            const wrapper = shallowComponent(DefaultMultilineBoxWithRemoveButton, {\r\n                data: [],\r\n                renderBody: () => _.identity,\r\n                defaultProps: {},\r\n            });\r\n\r\n            expect(() => wrapper.unmount()).not.toThrow();\r\n        });\r\n\r\n        it('should not throw if the containerNode and data is not defined', () => {\r\n            expect(() => shallowComponent(DefaultMultilineBoxWithRemoveButton, {id})).not.toThrow();\r\n        });\r\n\r\n        it('should not throw if the containerNode is not defined without data', () => {\r\n            const testId = 'id';\r\n            RTestUtils.mockUUID(testId);\r\n\r\n            expect(() =>\r\n                shallowComponent(\r\n                    DefaultMultilineBoxWithRemoveButton,\r\n                    {},\r\n                    {\r\n                        multilineIds: {\r\n                            [id]: {\r\n                                id: id,\r\n                                list: [testId],\r\n                            },\r\n                        },\r\n                    }\r\n                )\r\n            ).not.toThrow();\r\n        });\r\n\r\n        it('should not throw if he containerNode is not defined and the data is defined ', () => {\r\n            const testId = 'id';\r\n            RTestUtils.mockUUID(testId);\r\n\r\n            expect(() =>\r\n                shallowComponent(\r\n                    DefaultMultilineBoxWithRemoveButton,\r\n                    {\r\n                        data: [{name: 'test'}],\r\n                    },\r\n                    {\r\n                        multilineIds: {\r\n                            [id]: {\r\n                                id: id,\r\n                                list: [testId],\r\n                            },\r\n                        },\r\n                    }\r\n                )\r\n            ).not.toThrow();\r\n        });\r\n\r\n        describe('once rendered', () => {\r\n            const shallowComponentWithStore = (\r\n                Component: any,\r\n                props: Partial<IMultilineBoxOwnProps> = {},\r\n                s: any\r\n            ): ShallowWrapper => {\r\n                return shallowWithStore(<Component {...props} id={id} />, s)\r\n                    .dive()\r\n                    .dive()\r\n                    .dive();\r\n            };\r\n\r\n            it('should contains a Button inside the remove button element sent as arguments', () => {\r\n                store = getStoreMock();\r\n\r\n                const wrapper = shallowComponentWithStore(\r\n                    DefaultMultilineBoxWithRemoveButton,\r\n                    {\r\n                        data: [],\r\n                    },\r\n                    store\r\n                );\r\n\r\n                expect(wrapper.find(Button).length).toBe(1);\r\n            });\r\n\r\n            it('should trigger a dispatch to remove the id from the multiline box on click button', () => {\r\n                const testId = 'testid';\r\n\r\n                RTestUtils.mockUUID(testId);\r\n                store = getStoreMock({\r\n                    multilineIds: {\r\n                        [id]: {\r\n                            id: id,\r\n                            list: [testId, '1234'],\r\n                        },\r\n                    },\r\n                });\r\n\r\n                const wrapper = shallowComponentWithStore(\r\n                    DefaultMultilineBoxWithRemoveButton,\r\n                    {\r\n                        data: [{name: 'potatos'}],\r\n                    },\r\n                    store\r\n                );\r\n\r\n                wrapper\r\n                    .find(Button)\r\n                    .first()\r\n                    .props()\r\n                    .onClick();\r\n\r\n                expect(_.pluck(store.getActions(), 'type')).toContain(StringListActions.removeValue);\r\n            });\r\n\r\n            describe('with a containerNode', () => {\r\n                const ModifiedMultilineBoxWithRemoveButton = _.compose(\r\n                    multilineBoxWithRemoveButton({\r\n                        containerNode: (\r\n                            child: React.ReactNode,\r\n                            getRemoveButton: (props?: Partial<IButtonProps>) => React.ReactNode\r\n                        ): React.ReactNode => (\r\n                            <div className={'pick-me-plz'}>\r\n                                {child}\r\n                                {getRemoveButton({})}\r\n                            </div>\r\n                        ),\r\n                    })\r\n                )(MultilineBox);\r\n\r\n                it('should render the container node', () => {\r\n                    const testId = 'testid';\r\n\r\n                    RTestUtils.mockUUID(testId);\r\n                    store = getStoreMock({\r\n                        multilineIds: {\r\n                            [id]: {\r\n                                id: id,\r\n                                list: [testId, '1234'],\r\n                            },\r\n                        },\r\n                    });\r\n\r\n                    const wrapper = shallowComponentWithStore(\r\n                        ModifiedMultilineBoxWithRemoveButton,\r\n                        {\r\n                            data: [{name: 'potatos'}],\r\n                        },\r\n                        store\r\n                    );\r\n\r\n                    expect(wrapper.find('.pick-me-plz').length).toBe(1);\r\n                });\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=551.bundle.js.map