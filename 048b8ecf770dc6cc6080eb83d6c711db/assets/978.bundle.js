(window.webpackJsonp=window.webpackJsonp||[]).push([[978],{2074:function(t,e,r){"use strict";r.r(e),e.default="import {UrlUtils} from './UrlUtils';\n\ndescribe('UrlUtils', () => {\n    describe('toObject', () => {\n        it('should parse the query string into the proper object ', () => {\n            expect(UrlUtils.toObject('a=b&c=d')).toEqual({a: 'b', c: 'd'});\n        });\n        it('should parse \"true\" and \"false\" as booleans in the object', () => {\n            expect(UrlUtils.toObject('story=true')).not.toEqual({story: 'true'});\n            expect(UrlUtils.toObject('story=true')).toEqual({story: true});\n        });\n        it('should parse digits as numbers in the object', () => {\n            expect(UrlUtils.toObject('count=123')).not.toEqual({count: '123'});\n            expect(UrlUtils.toObject('count=123')).toEqual({count: 123});\n        });\n        it('should return an object that extends the Object prototype', () => {\n            expect(UrlUtils.toObject('abc=def') instanceof Object).toBe(true);\n        });\n        it('should not change the order of the key-value pairs in the object', () => {\n            const obj = UrlUtils.toObject('vehicle=🛥&beverage=🥛');\n            expect(JSON.stringify(obj)).toBe(JSON.stringify({vehicle: '🛥', beverage: '🥛'}));\n            expect(JSON.stringify(obj)).not.toBe(JSON.stringify({beverage: '🥛', vehicle: '🛥'}));\n        });\n    });\n\n    describe('toQueryString', () => {\n        it('should translate objects into query strings properly', () => {\n            expect(UrlUtils.toQueryString({a: 'b', c: 'd'})).toBe('a=b&c=d');\n        });\n        it('should encode values so that it produces a valid url', () => {\n            const favoriteBaconFlavor = 'smoked maple';\n            expect(UrlUtils.toQueryString({flavor: favoriteBaconFlavor})).toBe(\n                `flavor=${encodeURIComponent(favoriteBaconFlavor)}`\n            );\n            expect(UrlUtils.toQueryString({flavor: favoriteBaconFlavor})).not.toBe(`flavor=${favoriteBaconFlavor}`);\n        });\n        it('should not change the order of the key-value pairs in the query string', () => {\n            const query = UrlUtils.toQueryString({fruit: 'apple', color: 'red'});\n            expect(query).toBe('fruit=apple&color=red');\n            expect(query).not.toBe('color=red&fruit=apple');\n        });\n    });\n\n    describe('getSearchParams', () => {\n        it('should transform the current query string into a parameters object', () => {\n            spyOn(UrlUtils, 'getQuery').and.returnValue('animal=tiger&age=7');\n            expect(UrlUtils.getSearchParams()).toEqual({animal: 'tiger', age: 7});\n        });\n    });\n});\n"}}]);
//# sourceMappingURL=978.bundle.js.map