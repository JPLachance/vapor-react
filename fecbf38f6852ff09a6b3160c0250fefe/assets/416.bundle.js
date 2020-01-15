(window.webpackJsonp=window.webpackJsonp||[]).push([[416],{1513:function(r,n,e){"use strict";e.r(n),n.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\n\r\ntype FormMods = 'mod-header-padding' | 'mod-form-top-bottom-padding' | 'material-card';\r\n\r\nexport interface IFormProps {\r\n    title?: string;\r\n    className?: string;\r\n    mods?: FormMods | FormMods[];\r\n}\r\n\r\nexport const Form: React.FunctionComponent<IFormProps> = ({children, className, title, mods}) => {\r\n    return (\r\n        <fieldset className={classNames(className, mods, 'coveo-form mb2 mt2 mod-padding-children')}>\r\n            {title && <h2 className=\"text-medium-blue mb2\">{title}</h2>}\r\n            {children}\r\n        </fieldset>\r\n    );\r\n};\r\n"}}]);
//# sourceMappingURL=416.bundle.js.map