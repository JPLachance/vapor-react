(window.webpackJsonp=window.webpackJsonp||[]).push([[768],{1856:function(t,e,a){"use strict";a.r(e),e.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {ITabActionPayload, TabAction} from '../TabActions';\r\nimport {\r\n    DEFAULT_GROUP_ID,\r\n    ITabGroupState,\r\n    ITabState,\r\n    tabGroupInitialState,\r\n    tabGroupReducer,\r\n    tabGroupsInitialState,\r\n    tabGroupsReducer,\r\n    tabInitialState,\r\n    tabReducer,\r\n    tabsInitialState,\r\n    tabsReducer,\r\n} from '../TabReducers';\r\n\r\ndescribe('Tab', () => {\r\n    describe('TabReducers', () => {\r\n        const genericAction: IReduxAction<ITabActionPayload> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {\r\n                groupId: undefined,\r\n                id: 'some-tab',\r\n            },\r\n        };\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const oldState: ITabState[] = undefined;\r\n            const tabsState: ITabState[] = tabsReducer(oldState, genericAction);\r\n\r\n            expect(tabsState).toBe(tabsInitialState);\r\n        });\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined for one tab', () => {\r\n            const oldState: ITabState = undefined;\r\n            const tabState: ITabState = tabReducer(oldState, genericAction);\r\n\r\n            expect(tabState).toBe(tabInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: ITabState[] = [tabInitialState];\r\n            const tabsState: ITabState[] = tabsReducer(oldState, genericAction);\r\n\r\n            expect(tabsState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined for one tab', () => {\r\n            const oldState: ITabState = tabInitialState;\r\n            const tabState: ITabState = tabReducer(oldState, genericAction);\r\n\r\n            expect(tabState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state with one more ITabState when the action is \"TabAction.addTab\"', () => {\r\n            let oldState: ITabState[] = tabsInitialState;\r\n            const action: IReduxAction<ITabActionPayload> = {\r\n                type: TabAction.addTab,\r\n                payload: {\r\n                    groupId: undefined,\r\n                    id: 'some-tab',\r\n                },\r\n            };\r\n            let tabsState: ITabState[] = tabsReducer(oldState, action);\r\n\r\n            expect(tabsState.length).toBe(oldState.length + 1);\r\n            expect(tabsState.filter((tab) => tab.id === action.payload.id).length).toBe(1);\r\n\r\n            oldState = tabsState;\r\n            action.payload.id = 'some-tab2';\r\n            tabsState = tabsReducer(oldState, action);\r\n\r\n            expect(tabsState.length).toBe(oldState.length + 1);\r\n            expect(tabsState.filter((tab) => tab.id === action.payload.id).length).toBe(1);\r\n        });\r\n\r\n        it('should return the old state without the ITabState when the action is \"TabAction.removeTab\"', () => {\r\n            let oldState: ITabState[] = [\r\n                {\r\n                    id: 'some-tab2',\r\n                    isSelected: true,\r\n                },\r\n                {\r\n                    id: 'some-tab1',\r\n                    isSelected: false,\r\n                },\r\n                {\r\n                    id: 'some-tab3',\r\n                    isSelected: false,\r\n                },\r\n            ];\r\n            const action: IReduxAction<ITabActionPayload> = {\r\n                type: TabAction.removeTab,\r\n                payload: {\r\n                    groupId: undefined,\r\n                    id: 'some-tab1',\r\n                },\r\n            };\r\n            let tabsState: ITabState[] = tabsReducer(oldState, action);\r\n\r\n            expect(tabsState.length).toBe(oldState.length - 1);\r\n            expect(tabsState.filter((tab) => tab.id === action.payload.id).length).toBe(0);\r\n\r\n            oldState = tabsState;\r\n            action.payload.id = 'some-tab2';\r\n            tabsState = tabsReducer(oldState, action);\r\n\r\n            expect(tabsState.length).toBe(oldState.length - 1);\r\n            expect(tabsState.filter((tab) => tab.id === action.payload.id).length).toBe(0);\r\n        });\r\n\r\n        it('should select a tab when the action is \"TabAction.selectTab\"', () => {\r\n            const oldState: ITabState[] = [\r\n                {\r\n                    id: 'some-tab1',\r\n                    isSelected: false,\r\n                },\r\n                {\r\n                    id: 'some-tab2',\r\n                    isSelected: false,\r\n                },\r\n                {\r\n                    id: 'some-tab3',\r\n                    isSelected: true,\r\n                },\r\n            ];\r\n\r\n            const action: IReduxAction<ITabActionPayload> = {\r\n                type: TabAction.selectTab,\r\n                payload: {\r\n                    groupId: undefined,\r\n                    id: 'some-tab1',\r\n                },\r\n            };\r\n            const tabsState: ITabState[] = tabsReducer(oldState, action);\r\n\r\n            expect(tabsState.length).toBe(oldState.length);\r\n            expect(tabsState.filter((tab) => tab.id === action.payload.id)[0].isSelected).toBe(true);\r\n            expect(tabsState.filter((tab) => tab.id === 'some-tab2')[0].isSelected).toBe(false);\r\n            expect(tabsState.filter((tab) => tab.id === 'some-tab3')[0].isSelected).toBe(false);\r\n        });\r\n    });\r\n\r\n    describe('TabGroupReducers', () => {\r\n        const genericAction: IReduxAction<ITabActionPayload> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {\r\n                groupId: undefined,\r\n                id: 'some-tab',\r\n            },\r\n        };\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const oldState: ITabGroupState[] = undefined;\r\n            const tabsState: ITabGroupState[] = tabGroupsReducer(oldState, genericAction);\r\n\r\n            expect(tabsState).toBe(tabGroupsInitialState);\r\n        });\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined for one tab group', () => {\r\n            const oldState: ITabGroupState = undefined;\r\n            const tabState: ITabGroupState = tabGroupReducer(oldState, genericAction);\r\n\r\n            expect(tabState).toBe(tabGroupInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: ITabGroupState[] = [tabGroupInitialState];\r\n            const tabsState: ITabGroupState[] = tabGroupsReducer(oldState, genericAction);\r\n\r\n            expect(tabsState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined for one tab group', () => {\r\n            const oldState: ITabGroupState = tabGroupInitialState;\r\n            const tabState: ITabGroupState = tabGroupReducer(oldState, genericAction);\r\n\r\n            expect(tabState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state with one more ITabGroupState when the action is \"TabAction.addTab\"', () => {\r\n            let oldState: ITabGroupState[] = tabGroupsInitialState;\r\n            const action: IReduxAction<ITabActionPayload> = {\r\n                type: TabAction.addTab,\r\n                payload: {\r\n                    groupId: undefined,\r\n                    id: 'some-tab',\r\n                },\r\n            };\r\n            let tabsState: ITabGroupState[] = tabGroupsReducer(oldState, action);\r\n\r\n            expect(tabsState.length).toBe(oldState.length + 1);\r\n            expect(tabsState.filter((tabGroup) => tabGroup.id === DEFAULT_GROUP_ID).length).toBe(1);\r\n\r\n            oldState = tabsState;\r\n            action.payload.groupId = 'some-group';\r\n\r\n            tabsState = tabGroupsReducer(oldState, action);\r\n\r\n            expect(tabsState.length).toBe(oldState.length + 1);\r\n            expect(tabsState.filter((tabGroup) => tabGroup.id === action.payload.groupId).length).toBe(1);\r\n        });\r\n\r\n        it('should return the old state without the ITabGroupState when the action is \"TabAction.removeTab\" and no tab remains', () => {\r\n            let oldState: ITabGroupState[] = [\r\n                {\r\n                    id: DEFAULT_GROUP_ID,\r\n                    tabs: [\r\n                        {\r\n                            id: 'some-tab2',\r\n                            isSelected: true,\r\n                        },\r\n                        {\r\n                            id: 'some-tab1',\r\n                            isSelected: false,\r\n                        },\r\n                    ],\r\n                },\r\n            ];\r\n            const action: IReduxAction<ITabActionPayload> = {\r\n                type: TabAction.removeTab,\r\n                payload: {\r\n                    groupId: undefined,\r\n                    id: 'some-tab1',\r\n                },\r\n            };\r\n            let tabsState: ITabGroupState[] = tabGroupsReducer(oldState, action);\r\n\r\n            expect(tabsState.length).toBe(oldState.length);\r\n\r\n            oldState = tabsState;\r\n            action.payload.id = 'some-tab2';\r\n            tabsState = tabGroupsReducer(oldState, action);\r\n\r\n            expect(tabsState.length).toBe(oldState.length - 1);\r\n            expect(tabsState.filter((tab) => tab.id === DEFAULT_GROUP_ID).length).toBe(0);\r\n        });\r\n\r\n        it('should select a tab when the action is \"TabAction.selectTab\"', () => {\r\n            const GROUP_2_ID = 'group2';\r\n            const oldState: ITabGroupState[] = [\r\n                {\r\n                    id: DEFAULT_GROUP_ID,\r\n                    tabs: [\r\n                        {\r\n                            id: 'some-tab2',\r\n                            isSelected: true,\r\n                        },\r\n                        {\r\n                            id: 'some-tab1',\r\n                            isSelected: false,\r\n                        },\r\n                    ],\r\n                },\r\n                {\r\n                    id: GROUP_2_ID,\r\n                    tabs: [\r\n                        {\r\n                            id: 'some-tab2',\r\n                            isSelected: true,\r\n                        },\r\n                        {\r\n                            id: 'some-tab1',\r\n                            isSelected: false,\r\n                        },\r\n                    ],\r\n                },\r\n            ];\r\n\r\n            const action: IReduxAction<ITabActionPayload> = {\r\n                type: TabAction.selectTab,\r\n                payload: {\r\n                    groupId: undefined,\r\n                    id: 'some-tab1',\r\n                },\r\n            };\r\n            const tabsState: ITabGroupState[] = tabGroupsReducer(oldState, action);\r\n\r\n            const defaultGroup = _.find(tabsState, (state: ITabGroupState) => state.id === DEFAULT_GROUP_ID);\r\n            expect(defaultGroup.tabs.length).toBe(2);\r\n            expect(defaultGroup.tabs.filter((tab) => tab.id === action.payload.id)[0].isSelected).toBe(true);\r\n            expect(defaultGroup.tabs.filter((tab) => tab.id === 'some-tab2')[0].isSelected).toBe(false);\r\n\r\n            const group2 = _.find(tabsState, (state: ITabGroupState) => state.id === GROUP_2_ID);\r\n            expect(group2.tabs.length).toBe(2);\r\n            expect(group2.tabs.filter((tab) => tab.id === action.payload.id)[0].isSelected).toBe(false);\r\n            expect(group2.tabs.filter((tab) => tab.id === 'some-tab2')[0].isSelected).toBe(true);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=768.bundle.js.map