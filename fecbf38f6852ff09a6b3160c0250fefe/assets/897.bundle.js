(window.webpackJsonp=window.webpackJsonp||[]).push([[897],{1984:function(n,o,e){"use strict";e.r(o),o.default="import {mount, shallow, ShallowWrapper} from 'enzyme';\nimport * as React from 'react';\nimport {Provider} from 'react-redux';\n\nimport {getStoreMock} from '../../../utils/tests/TestUtils';\nimport {ModalCompositeConnected} from '../../modal/ModalCompositeConnected';\nimport {UnsavedChangesModalProvider} from '../UnsavedChangeModalProvider';\n\ndescribe('<UnsavedChangeModalProvider/>', () => {\n    let unsavedChangesModalProvider: ShallowWrapper;\n    let heavyUnsavedChangesModalProvider;\n    let regularClickActionSpy: jasmine.Spy;\n    let promptBeforeClickActionSpy: jasmine.Spy;\n    const store = getStoreMock();\n    beforeEach(() => {\n        regularClickActionSpy = jasmine.createSpy('🥔');\n        promptBeforeClickActionSpy = jasmine.createSpy('🍟');\n    });\n\n    afterEach(() => {\n        regularClickActionSpy.calls.reset();\n        promptBeforeClickActionSpy.calls.reset();\n        if (unsavedChangesModalProvider?.exists()) {\n            unsavedChangesModalProvider.unmount();\n        }\n    });\n\n    const shallowMountUnsavedModalProvider = (isDirty: boolean = false) =>\n        shallow(\n            <UnsavedChangesModalProvider isDirty={isDirty}>\n                {({promptBefore}) => {\n                    return (\n                        <ModalCompositeConnected\n                            id=\"👾\"\n                            title=\"🙄\"\n                            classes={['mod-slide-in-bottom', 'mod-big', 'mod-stick-bottom']}\n                            modalBodyChildren=\"🙈 🙉 🙊\"\n                            modalFooterChildren={\n                                <button\n                                    className=\"btn\"\n                                    onClick={() => promptBefore(promptBeforeClickActionSpy) && regularClickActionSpy()}\n                                />\n                            }\n                            modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}\n                            docLink={{url: 'https://www.coveo.com', tooltip: {title: 'Go to coveo.com'}}}\n                        />\n                    );\n                }}\n            </UnsavedChangesModalProvider>\n        );\n\n    const heavilyMountUnsavedModalProvider = (isDirty: boolean = false) =>\n        mount(\n            <UnsavedChangesModalProvider isDirty={isDirty}>\n                {({promptBefore}) => {\n                    return (\n                        <Provider store={store}>\n                            <ModalCompositeConnected\n                                id=\"👾\"\n                                title=\"🙄\"\n                                classes={['mod-slide-in-bottom', 'mod-big', 'mod-stick-bottom']}\n                                modalBodyChildren=\"🙈 🙉 🙊\"\n                                modalFooterChildren={\n                                    <button\n                                        className=\"btn\"\n                                        onClick={() =>\n                                            promptBefore(promptBeforeClickActionSpy) && regularClickActionSpy()\n                                        }\n                                    />\n                                }\n                                modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}\n                                docLink={{url: 'https://www.coveo.com', tooltip: {title: 'Go to coveo.com'}}}\n                            />\n                        </Provider>\n                    );\n                }}\n            </UnsavedChangesModalProvider>\n        );\n\n    it('should mount and unmount without trowing', () => {\n        expect(() => {\n            shallowMountUnsavedModalProvider().unmount();\n        }).not.toThrow();\n    });\n\n    describe('when dirty changes', () => {\n        it('should open the UnsavedChangesModal to interrupt the leaving action', () => {\n            heavyUnsavedChangesModalProvider = heavilyMountUnsavedModalProvider(true);\n            expect(heavyUnsavedChangesModalProvider.childAt(1).prop('isOpen')).toBeFalsy();\n\n            const heavyModal: any = heavyUnsavedChangesModalProvider.find(ModalCompositeConnected);\n            heavyModal.props().modalFooterChildren.props.onClick();\n            heavyUnsavedChangesModalProvider.update();\n            expect(heavyUnsavedChangesModalProvider.childAt(1).prop('isOpen')).toBeTruthy();\n        });\n        describe('PromptBefore function', () => {\n            it('should return false', () => {\n                unsavedChangesModalProvider = shallowMountUnsavedModalProvider(true);\n                unsavedChangesModalProvider\n                    .childAt(0)\n                    .props()\n                    .modalFooterChildren.props.onClick();\n                expect(regularClickActionSpy).not.toHaveBeenCalled();\n            });\n        });\n        it('should use the callback function in the promptBefore function when confirming the exit', () => {\n            heavyUnsavedChangesModalProvider = heavilyMountUnsavedModalProvider(true);\n\n            const modal: any = heavyUnsavedChangesModalProvider.find(ModalCompositeConnected);\n            modal.props().modalFooterChildren.props.onClick();\n            heavyUnsavedChangesModalProvider.update();\n            const exitWithoutSavingButton: any = heavyUnsavedChangesModalProvider\n                .childAt(1)\n                .find('Button')\n                .first();\n            exitWithoutSavingButton.prop('onClick')();\n\n            expect(promptBeforeClickActionSpy).toHaveBeenCalled();\n        });\n        it('should not use the callback function in the promptBefore function when cancelling the exit', () => {\n            heavyUnsavedChangesModalProvider = heavilyMountUnsavedModalProvider(true);\n\n            const modal: any = heavyUnsavedChangesModalProvider.find(ModalCompositeConnected);\n            modal.props().modalFooterChildren.props.onClick();\n            heavyUnsavedChangesModalProvider.update();\n            const exitWithoutSavingButton: any = heavyUnsavedChangesModalProvider\n                .childAt(1)\n                .find('Button')\n                .last();\n            exitWithoutSavingButton.prop('onClick')();\n\n            expect(promptBeforeClickActionSpy).not.toHaveBeenCalled();\n        });\n    });\n\n    describe('when the modal is not dirty', () => {\n        it('should not open the UnsavedChangesModal to interrupt the leaving action', () => {\n            heavyUnsavedChangesModalProvider = heavilyMountUnsavedModalProvider(false);\n            expect(heavyUnsavedChangesModalProvider.childAt(1).prop('isOpen')).toBeFalsy();\n\n            const heavyModal: any = heavyUnsavedChangesModalProvider.find(ModalCompositeConnected);\n            heavyModal.props().modalFooterChildren.props.onClick();\n            heavyUnsavedChangesModalProvider.update();\n            expect(heavyUnsavedChangesModalProvider.childAt(1).prop('isOpen')).toBeFalsy();\n        });\n        it('promptBefore function should return true', () => {\n            unsavedChangesModalProvider = shallowMountUnsavedModalProvider();\n            unsavedChangesModalProvider\n                .childAt(0)\n                .props()\n                .modalFooterChildren.props.onClick();\n            expect(regularClickActionSpy).toHaveBeenCalled();\n        });\n    });\n});\n"}}]);
//# sourceMappingURL=897.bundle.js.map