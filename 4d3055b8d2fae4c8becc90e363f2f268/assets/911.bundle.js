(window.webpackJsonp=window.webpackJsonp||[]).push([[911],{1990:function(a,s,n){"use strict";n.r(s),s.default="import * as _ from 'underscore';\r\nexport type ClassNameTypes = string | string[] | {[key: string]: boolean};\r\n\r\n/**\r\n * Type to use when typing a property or variable that will be used with\r\n * the \"classname\" library (https://www.npmjs.com/package/classnames)\r\n */\r\nexport type IClassName = ClassNameTypes | ClassNameTypes[];\r\n\r\nexport interface IAdditionalClass {\r\n    className: string;\r\n    condition?: (data: any) => boolean;\r\n}\r\n\r\nexport const getAdditionalClasses = (additionalClasses: IAdditionalClass[], dataToUse: any): IClassName => {\r\n    return _.map(additionalClasses, (additionalClass: IAdditionalClass) =>\r\n        additionalClass.condition\r\n            ? {\r\n                  [additionalClass.className]: additionalClass.condition(dataToUse),\r\n              }\r\n            : additionalClass.className\r\n    );\r\n};\r\n"}}]);
//# sourceMappingURL=911.bundle.js.map