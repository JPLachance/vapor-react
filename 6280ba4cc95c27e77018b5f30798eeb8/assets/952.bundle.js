(window.webpackJsonp=window.webpackJsonp||[]).push([[952],{2048:function(n,i,r){"use strict";r.r(i),i.default="import {HocUtils} from './HocUtils';\r\n\r\ndescribe('HocUtils', () => {\r\n    describe('supplyConfig', () => {\r\n        it('should return the supplier directly if it is not a function', () => {\r\n            const supplier = {key: 'value'};\r\n\r\n            expect(HocUtils.supplyConfig(supplier)).toBe(supplier);\r\n        });\r\n\r\n        it('should call the supplier if it is a function and return the value of that function', () => {\r\n            const config = {key: 'value'};\r\n            const supplier = () => config;\r\n\r\n            expect(HocUtils.supplyConfig(supplier)).toBe(config);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=952.bundle.js.map