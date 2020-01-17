(window.webpackJsonp=window.webpackJsonp||[]).push([[933],{2013:function(e,r,n){"use strict";n.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {renderToStaticMarkup} from 'react-dom/server';\r\nimport * as _ from 'underscore';\r\nimport * as s from 'underscore.string';\r\n\r\nimport {decodeHtml} from './InputUtils';\r\n\r\nexport type JSXRenderable = JSX.Element | JSX.Element[] | string | number;\r\n\r\nexport const getReactNodeTextContent = (node: React.ReactNode): string => {\r\n    return _.compose(s.clean, decodeHtml, s.stripTags)(renderToStaticMarkup(<div>{node}</div>));\r\n};\r\n\r\nexport const addClassNameToChildren = (children: React.ReactNode, className: string) =>\r\n    React.Children.map(children, (child) =>\r\n        React.isValidElement(child) ? (\r\n            React.cloneElement(child, {className: classNames(child.props.className, className)})\r\n        ) : (\r\n            <span className={className}>{child}</span>\r\n        )\r\n    );\r\n"}}]);
//# sourceMappingURL=933.bundle.js.map