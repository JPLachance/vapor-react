(window.webpackJsonp=window.webpackJsonp||[]).push([[947],{2034:function(t,n,c){"use strict";c.r(n),n.default="import * as React from 'react';\r\n\r\n// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/utils/ValidComponentChildren.js\r\nexport class ValidComponentChildren {\r\n    static map(children: React.ReactNode, func: (child: React.ReactChild) => any, context: any): any[] {\r\n        return React.Children.map(children, (child) =>\r\n            React.isValidElement(child) ? func.call(context, child) : child\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=947.bundle.js.map