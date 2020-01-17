(window.webpackJsonp=window.webpackJsonp||[]).push([[390],{1480:function(t,e,a){"use strict";a.r(e),e.default="import {IItemBoxProps} from '../../itemBox/ItemBox';\nimport {defaultListBoxMatchFilter} from '../FilterBoxUtils';\n\ndescribe('defaultListBoxMatchFilter', () => {\n    const defaultItemBox: IItemBoxProps = {\n        value: 'abc',\n    };\n\n    it('should return true if the filterValue is empty', () => {\n        expect(defaultListBoxMatchFilter('', defaultItemBox)).toBe(true);\n    });\n\n    it('should not throw for falsy values', () => {\n        expect(() => defaultListBoxMatchFilter(null, defaultItemBox)).not.toThrow();\n        expect(() => defaultListBoxMatchFilter(undefined, defaultItemBox)).not.toThrow();\n        expect(() => defaultListBoxMatchFilter('', defaultItemBox)).not.toThrow();\n    });\n\n    it('should not throw errors when the filterValue contains special characters', () => {\n        expect(() => {\n            defaultListBoxMatchFilter('(', defaultItemBox);\n            defaultListBoxMatchFilter('/', defaultItemBox);\n            defaultListBoxMatchFilter('\\\\', defaultItemBox);\n            defaultListBoxMatchFilter('[', defaultItemBox);\n        }).not.toThrow();\n    });\n\n    describe('with value', () => {\n        it('should return true if the item value contain the filterValue', () => {\n            expect(defaultListBoxMatchFilter('a', defaultItemBox)).toBe(true);\n        });\n\n        it('should return true if the item value contain a exact match with the filterValue', () => {\n            expect(defaultListBoxMatchFilter(defaultItemBox.value, defaultItemBox)).toBe(true);\n        });\n\n        it('should return false if the item value do not contain the filterValue', () => {\n            expect(defaultListBoxMatchFilter('d', defaultItemBox)).toBe(false);\n        });\n    });\n\n    describe('with displayValue', () => {\n        const itemBoxWithDisplayValue: IItemBoxProps = {\n            displayValue: 'abc',\n            value: 'z',\n        };\n\n        it('should return true if the item displayValue contain the filterValue', () => {\n            expect(defaultListBoxMatchFilter('a', itemBoxWithDisplayValue)).toBe(true);\n        });\n\n        it('should return true if the item displayValue contain a exact match with the filterValue', () => {\n            expect(\n                defaultListBoxMatchFilter(itemBoxWithDisplayValue.displayValue as string, itemBoxWithDisplayValue)\n            ).toBe(true);\n        });\n\n        it('should return false if the item displayValue do not contain the filterValue', () => {\n            expect(defaultListBoxMatchFilter('d', itemBoxWithDisplayValue)).toBe(false);\n        });\n    });\n});\n"}}]);
//# sourceMappingURL=390.bundle.js.map