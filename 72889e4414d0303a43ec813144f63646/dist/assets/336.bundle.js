(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{1433:function(e,n,o){"use strict";o.r(n),n.default="import {IDropdownOption} from './DropdownSearch';\r\nimport {getDropdownSearchSelectedOption} from './DropdownSearchUtils';\r\n\r\ndescribe('DropdownSearchUtils', () => {\r\n    describe('getSelectedOption', () => {\r\n        it('should return undefined if the dropdown does not exist in the state', () => {\r\n            expect(getDropdownSearchSelectedOption('non-existing-dropdown', [])).toBeUndefined();\r\n        });\r\n\r\n        it('should return undefined if the dropdown does exist in the state but have no selected option', () => {\r\n            expect(\r\n                getDropdownSearchSelectedOption('existing-dropdown', [{options: [], id: 'existing-dropdown'}])\r\n            ).toBeUndefined();\r\n        });\r\n\r\n        it('should return the selected option if there is one', () => {\r\n            const selectedOption: IDropdownOption = {value: 'selected option', selected: true};\r\n            expect(\r\n                getDropdownSearchSelectedOption('existing-dropdown', [\r\n                    {options: [selectedOption], id: 'existing-dropdown'},\r\n                ])\r\n            ).toEqual(selectedOption);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=336.bundle.js.map