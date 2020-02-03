(window.webpackJsonp=window.webpackJsonp||[]).push([[926],{2023:function(n,e,t){"use strict";t.r(e),e.default="import {shallowWithState} from 'enzyme-redux';\nimport * as React from 'react';\nimport {ValidationState} from '../../ValidationState';\nimport {IValidationMessageProps, ValidationMessage, ValidationMessageClasses} from '../ValidationMessage';\n\ndescribe('ValidationMessage', () => {\n    const defaultProps: IValidationMessageProps = {\n        id: 'wow',\n    };\n    const nonEmptyValidationType = '⛳';\n    const nonEmptyMessage = 'ohnoitshouldbeempty';\n\n    const getValidationState = (validation: Partial<ValidationState>) =>\n        ({\n            isDirty: [],\n            error: [],\n            warning: [],\n            ...validation,\n        } as ValidationState);\n    const getStateForExistingComponent = (validation: Partial<ValidationState>) => ({\n        validation: {\n            [defaultProps.id]: getValidationState(validation),\n        },\n    });\n\n    it('should render nothing if the store is empty', () => {\n        const result = shallowWithState(<ValidationMessage {...defaultProps} />, {}).dive();\n        expect(result.text()).toBe('');\n    });\n\n    it('should render nothing if the store does not contain errors for the given ID', () => {\n        const result = shallowWithState(<ValidationMessage {...defaultProps} />, {\n            validation: {\n                anotherone: getValidationState({\n                    error: [\n                        {\n                            validationType: nonEmptyValidationType,\n                            value: nonEmptyMessage,\n                        },\n                    ],\n                }),\n            },\n        }).dive();\n        expect(result.text()).toBe('');\n    });\n\n    it('should render errors when there are errors', () => {\n        const result = shallowWithState(\n            <ValidationMessage {...defaultProps} />,\n            getStateForExistingComponent({\n                error: [\n                    {\n                        validationType: nonEmptyValidationType,\n                        value: nonEmptyMessage,\n                    },\n                    {\n                        validationType: 'anotherone',\n                        value: 'wow',\n                    },\n                ],\n            })\n        ).dive();\n\n        expect(result.find(`.${ValidationMessageClasses.error}`).length).toBe(2);\n        expect(\n            result\n                .find(`.${ValidationMessageClasses.error}`)\n                .first()\n                .text()\n        ).toContain(nonEmptyMessage);\n    });\n\n    it('should render warnings when there are warnings', () => {\n        const result = shallowWithState(\n            <ValidationMessage {...defaultProps} />,\n            getStateForExistingComponent({\n                warning: [\n                    {\n                        validationType: nonEmptyValidationType,\n                        value: nonEmptyMessage,\n                    },\n                    {\n                        validationType: 'anotherone',\n                        value: 'bloup',\n                    },\n                ],\n            })\n        ).dive();\n\n        expect(result.find(`.${ValidationMessageClasses.warning}`).length).toBe(2);\n        expect(\n            result\n                .find(`.${ValidationMessageClasses.warning}`)\n                .first()\n                .text()\n        ).toContain(nonEmptyMessage);\n    });\n\n    it('should render not render warnings if there are already errors', () => {\n        const result = shallowWithState(\n            <ValidationMessage {...defaultProps} />,\n            getStateForExistingComponent({\n                error: [\n                    {\n                        validationType: nonEmptyValidationType,\n                        value: nonEmptyMessage,\n                    },\n                ],\n                warning: [\n                    {\n                        validationType: 'somethingelse',\n                        value: 'ohno',\n                    },\n                ],\n            })\n        ).dive();\n\n        expect(result.find(`.${ValidationMessageClasses.error}`).length).toBe(1);\n        expect(result.find(`.${ValidationMessageClasses.warning}`).length).toBe(0);\n    });\n});\n"}}]);
//# sourceMappingURL=926.bundle.js.map