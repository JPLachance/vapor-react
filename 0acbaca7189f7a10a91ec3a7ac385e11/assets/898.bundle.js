(window.webpackJsonp=window.webpackJsonp||[]).push([[898],{1984:function(e,t,s){"use strict";s.r(t),t.default="import {shallow, ShallowWrapper} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {all, extend} from 'underscore';\r\nimport {DisplayClass} from '../../utils/ComponentUtils';\r\nimport {IUserFeedbackProps, TextColorClass, UserFeedback, UserFeedbackState} from './UserFeedback';\r\n\r\ndescribe('<UserFeedback>', () => {\r\n    const getShallowOutput = (\r\n        feedbackText: string,\r\n        state: string,\r\n        extraClasses?: string[],\r\n        displayOnShow?: string\r\n    ): ShallowWrapper<IUserFeedbackProps, any> => {\r\n        let props: IUserFeedbackProps = {\r\n            feedbackText,\r\n            state,\r\n        };\r\n\r\n        if (extraClasses) {\r\n            props = extend(props, {extraClasses});\r\n        }\r\n        if (displayOnShow) {\r\n            props = extend(props, {displayOnShow});\r\n        }\r\n\r\n        return shallow(<UserFeedback {...props} />);\r\n    };\r\n\r\n    describe('\"Shallow rendered\" component', () => {\r\n        describe('rendering', () => {\r\n            it('should render without errors', () => {\r\n                expect(() => getShallowOutput('', '')).not.toThrow();\r\n                expect(() => getShallowOutput('', '', [], DisplayClass.BLOCK)).not.toThrow();\r\n                expect(() => getShallowOutput('', '')).not.toThrow();\r\n                expect(() => getShallowOutput('hello', UserFeedbackState.VALID, ['m1'])).not.toThrow();\r\n                expect(() => getShallowOutput('hello', UserFeedbackState.WARNING, ['m1'])).not.toThrow();\r\n                expect(() => getShallowOutput('hello', UserFeedbackState.ERROR, ['m1'])).not.toThrow();\r\n                expect(() =>\r\n                    getShallowOutput('hello', UserFeedbackState.VALID, ['m1'], DisplayClass.BLOCK)\r\n                ).not.toThrow();\r\n                expect(() =>\r\n                    getShallowOutput('hello', UserFeedbackState.WARNING, ['m1'], DisplayClass.BLOCK)\r\n                ).not.toThrow();\r\n                expect(() =>\r\n                    getShallowOutput('hello', UserFeedbackState.ERROR, ['m1'], DisplayClass.BLOCK)\r\n                ).not.toThrow();\r\n            });\r\n        });\r\n\r\n        describe('text content', () => {\r\n            it('should contain the exact text passed to prop feedbackText', () => {\r\n                let testText = 'testing';\r\n                let wrongText: string;\r\n\r\n                expect(getShallowOutput(testText, '').text()).toBe(testText);\r\n\r\n                testText = 'hello this is a test over here';\r\n                wrongText = 'hello this is the wrong text over here';\r\n                expect(getShallowOutput(testText, '').text()).not.toBe(wrongText);\r\n            });\r\n        });\r\n\r\n        describe('style for each state', () => {\r\n            describe('non existent state', () => {\r\n                it('should be invisible if state provided does not exist', () => {\r\n                    const nonExistentState = 'NON_EXISTENT_STATE';\r\n                    const emptyState = '';\r\n\r\n                    expect(getShallowOutput('', nonExistentState).hasClass(DisplayClass.HIDDEN)).toBe(true);\r\n                    expect(getShallowOutput('', emptyState).hasClass(DisplayClass.HIDDEN)).toBe(true);\r\n                });\r\n            });\r\n\r\n            describe('VALID state', () => {\r\n                it('should be invisible on state VALID without displayOnShow prop', () => {\r\n                    expect(getShallowOutput('', UserFeedbackState.VALID).hasClass(DisplayClass.HIDDEN)).toBe(true);\r\n                });\r\n\r\n                it('should be invisible on state VALID, even with prop displayOnShow provided', () => {\r\n                    expect(\r\n                        getShallowOutput('', UserFeedbackState.VALID, [], DisplayClass.BLOCK).hasClass(\r\n                            DisplayClass.HIDDEN\r\n                        )\r\n                    ).toBe(true);\r\n                    expect(\r\n                        getShallowOutput('', UserFeedbackState.VALID, [], DisplayClass.BLOCK).hasClass(\r\n                            DisplayClass.BLOCK\r\n                        )\r\n                    ).toBe(false);\r\n                });\r\n            });\r\n\r\n            describe('WARNING state', () => {\r\n                it('should be visible (without prop displayOnShow)', () => {\r\n                    expect(getShallowOutput('', UserFeedbackState.WARNING).hasClass(DisplayClass.BLOCK)).toBe(true);\r\n                    expect(getShallowOutput('', UserFeedbackState.WARNING).hasClass(DisplayClass.HIDDEN)).toBe(false);\r\n                });\r\n\r\n                it('should have a display class equal to the value of the displayOnShow prop', () => {\r\n                    expect(\r\n                        getShallowOutput('', UserFeedbackState.WARNING, [], DisplayClass.INLINE_BLOCK).hasClass(\r\n                            DisplayClass.INLINE_BLOCK\r\n                        )\r\n                    ).toBe(true);\r\n                    expect(\r\n                        getShallowOutput('', UserFeedbackState.WARNING, [], DisplayClass.INLINE_BLOCK).hasClass(\r\n                            DisplayClass.HIDDEN\r\n                        )\r\n                    ).toBe(false);\r\n                });\r\n\r\n                it('should have the default text color class', () => {\r\n                    const componentOnStateWarning = getShallowOutput('', UserFeedbackState.WARNING);\r\n                    expect(componentOnStateWarning.hasClass(TextColorClass.default));\r\n                });\r\n            });\r\n\r\n            describe('ERROR state', () => {\r\n                it('should be visible (without prop displayOnShow)', () => {\r\n                    expect(getShallowOutput('', UserFeedbackState.ERROR).hasClass(DisplayClass.BLOCK)).toBe(true);\r\n                    expect(getShallowOutput('', UserFeedbackState.ERROR).hasClass(DisplayClass.HIDDEN)).toBe(false);\r\n                });\r\n\r\n                it('should have a display class equal to the value of the displayOnShow prop', () => {\r\n                    expect(\r\n                        getShallowOutput('', UserFeedbackState.ERROR, [], DisplayClass.INLINE_BLOCK).hasClass(\r\n                            DisplayClass.INLINE_BLOCK\r\n                        )\r\n                    ).toBe(true);\r\n                    expect(\r\n                        getShallowOutput('', UserFeedbackState.ERROR, [], DisplayClass.INLINE_BLOCK).hasClass(\r\n                            DisplayClass.HIDDEN\r\n                        )\r\n                    ).toBe(false);\r\n                });\r\n\r\n                it('should have the error text color class', () => {\r\n                    const componentOnStateError = getShallowOutput('', UserFeedbackState.ERROR);\r\n                    expect(componentOnStateError.hasClass(TextColorClass.error));\r\n                });\r\n            });\r\n        });\r\n\r\n        describe('constant classes', () => {\r\n            it('should only have the text-[color] and display classes if no extraClasses are passed as prop', () => {\r\n                const testComponentValid = getShallowOutput('', UserFeedbackState.VALID);\r\n                const testComponentWarning = getShallowOutput('', UserFeedbackState.WARNING);\r\n                const testComponentError = getShallowOutput('', UserFeedbackState.ERROR);\r\n\r\n                // a trailing space will be left at the end of the class property if no extraClasses are passed as prop\r\n                expect(/class=\\\"text-dark-grey hidden\\\"/.test(testComponentValid.html())).toBe(true);\r\n                expect(/class=\\\"text-dark-grey block\\\"/.test(testComponentWarning.html())).toBe(true);\r\n                expect(/class=\\\"text-red block\\\"/.test(testComponentError.html())).toBe(true);\r\n            });\r\n\r\n            it('should contain all classes passed through extraClasses, along with the text-[color] and display classes', () => {\r\n                const extraClass: string[] = ['onlyoneclass'];\r\n                const extraClasses: string[] = ['each', 'word', 'represents', 'a', 'class'];\r\n                const extraClassesRealLife: string[] = ['mt1', 'mb2'];\r\n                let testComponent: ShallowWrapper<IUserFeedbackProps, any> = getShallowOutput('', '', extraClass);\r\n\r\n                const areClassesAddedToElement = (\r\n                    currentExtraClasses: string[],\r\n                    shallowWrapper: ShallowWrapper<IUserFeedbackProps, any>\r\n                ): boolean => {\r\n                    const allClasses: string[] = currentExtraClasses;\r\n                    allClasses.unshift(TextColorClass.default, DisplayClass.HIDDEN);\r\n\r\n                    return all(allClasses, (className: string) => shallowWrapper.hasClass(className));\r\n                };\r\n\r\n                expect(areClassesAddedToElement(extraClass, testComponent)).toBe(true);\r\n\r\n                testComponent = getShallowOutput('', '', extraClasses);\r\n                expect(areClassesAddedToElement(extraClasses, testComponent)).toBe(true);\r\n\r\n                testComponent = getShallowOutput('', '', extraClassesRealLife);\r\n                expect(areClassesAddedToElement(extraClassesRealLife, testComponent)).toBe(true);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=898.bundle.js.map