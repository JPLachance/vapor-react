(window.webpackJsonp=window.webpackJsonp||[]).push([[949],{2047:function(n,e,r){"use strict";r.r(e),e.default="import * as React from 'react';\r\nimport {callIfDefined, convertUndefinedAndNullToEmptyString} from './FalsyValuesUtils';\r\n\r\ndescribe('FalsyValuesUtils', () => {\r\n    it('should return empty string if the value is undefined', () => {\r\n        expect(convertUndefinedAndNullToEmptyString(undefined)).toBe('');\r\n    });\r\n\r\n    it('should return empty string if the value is null', () => {\r\n        expect(convertUndefinedAndNullToEmptyString(null)).toBe('');\r\n    });\r\n\r\n    it('should return the value as is if it is not null or undefined', () => {\r\n        [1000, 'non empty string', '', <div>testing a jsx element</div>].forEach((value: any) => {\r\n            expect(convertUndefinedAndNullToEmptyString(value)).toBe(value);\r\n        });\r\n    });\r\n});\r\n\r\ndescribe('callIfDefined', () => {\r\n    let callbackSpy: jasmine.Spy;\r\n\r\n    beforeEach(() => {\r\n        callbackSpy = jasmine.createSpy('callback');\r\n    });\r\n\r\n    it('should call the callback when it is a defined function', () => {\r\n        callIfDefined(callbackSpy);\r\n\r\n        expect(callbackSpy).toHaveBeenCalled();\r\n    });\r\n\r\n    it('should call the callback and pass down args properly', () => {\r\n        const args = ['some'[1], -10, true, () => 'ooookay'];\r\n\r\n        callIfDefined(callbackSpy, ...args);\r\n\r\n        expect(callbackSpy).toHaveBeenCalledWith(...args);\r\n    });\r\n\r\n    it('should not throw errors when calling with undefined values', () => {\r\n        const someDeclaredButNotAssignedCallback: any = undefined;\r\n\r\n        expect(() => callIfDefined(undefined)).not.toThrow();\r\n        expect(() => callIfDefined(null)).not.toThrow();\r\n        expect(() => callIfDefined(someDeclaredButNotAssignedCallback)).not.toThrow();\r\n    });\r\n\r\n    it('should return what the callback returns', () => {\r\n        const returnBananas = () => 'bananas';\r\n\r\n        expect(callIfDefined(returnBananas)).toBe('bananas');\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=949.bundle.js.map