(window.webpackJsonp=window.webpackJsonp||[]).push([[966],{2063:function(n,r,e){"use strict";e.r(r),r.default="// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {ValidComponentChildren} from './ValidComponentChildren';\r\n\r\ndescribe('ValidComponentChildren', () => {\r\n    it('should call function for valid component', () => {\r\n        let counter = 0;\r\n        ValidComponentChildren.map(\r\n            <div></div>,\r\n            (child: React.ReactChild) => {\r\n                counter++;\r\n            },\r\n            null\r\n        );\r\n        expect(counter).toBe(1);\r\n    });\r\n\r\n    it('should not call function for non react node children only', () => {\r\n        let counter = 0;\r\n        ValidComponentChildren.map(\r\n            'Teenage mutan ninja trouts',\r\n            (child: React.ReactChild) => {\r\n                counter++;\r\n            },\r\n            null\r\n        );\r\n        expect(counter).toBe(0);\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=966.bundle.js.map