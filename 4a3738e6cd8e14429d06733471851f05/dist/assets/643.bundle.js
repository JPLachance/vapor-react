(window.webpackJsonp=window.webpackJsonp||[]).push([[643],{1728:function(t,n,e){"use strict";e.r(n),n.default="import {shallowWithState, shallowWithStore} from 'enzyme-redux';\nimport * as React from 'react';\nimport {getStoreMock} from '../../../utils/tests/TestUtils';\nimport {Button} from '../../button/Button';\nimport {ButtonWithRefreshCallback, IButtonWithRefreshCallbackProps} from '../ButtonWithRefreshCallback';\nimport {RefreshCallBackActions} from '../RefeshCallbackActions';\nimport {RefreshStatus} from '../RefreshCallbackReducer';\n\ndescribe('ButtonWithRefreshCallback tests', () => {\n    describe('<ButtonWithRefreshCallback />', () => {\n        const defaultProps: IButtonWithRefreshCallbackProps = {\n            id: '🛶',\n            callback: () => '🏎',\n            button: {\n                name: '🥐',\n                enabled: true,\n            },\n        };\n\n        it('should mount and unmount without error', () => {\n            const component = shallowWithState(<ButtonWithRefreshCallback {...defaultProps} />, {}).dive();\n            component.unmount();\n        });\n\n        describe('once mounted', () => {\n            it('should call the callback on click button', () => {\n                const spy = jasmine.createSpy('callback');\n\n                const component = shallowWithState(<ButtonWithRefreshCallback {...defaultProps} callback={spy} />, {\n                    refreshCallback: {id: RefreshStatus.inProgress},\n                }).dive();\n                component\n                    .find(Button)\n                    .props()\n                    .onClick();\n\n                expect(spy).toHaveBeenCalledTimes(1);\n            });\n\n            it('should dispatch a stop on click button', () => {\n                const store = getStoreMock({\n                    refreshCallback: {id: RefreshStatus.inProgress},\n                });\n\n                const component = shallowWithStore(<ButtonWithRefreshCallback {...defaultProps} />, store).dive();\n                component\n                    .find(Button)\n                    .props()\n                    .onClick();\n\n                expect(store.getActions()).toContain(RefreshCallBackActions.stop(defaultProps.id));\n            });\n\n            it('should disable the button if the status is \"stop\"', () => {\n                const component = shallowWithState(\n                    <ButtonWithRefreshCallback {...defaultProps} callback={() => ''} />,\n                    {\n                        refreshCallback: {[defaultProps.id]: RefreshStatus.stopped},\n                    }\n                ).dive();\n\n                expect(component.find(Button).props().enabled).toBe(false);\n            });\n        });\n    });\n});\n"}}]);
//# sourceMappingURL=643.bundle.js.map