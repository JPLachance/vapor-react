(window.webpackJsonp=window.webpackJsonp||[]).push([[490],{1596:function(n,a,e){"use strict";e.r(a),a.default="import * as classNames from 'classnames';\nimport * as React from 'react';\n\nexport interface ITextLoadingPlaceholder {\n    small?: boolean;\n    word?: boolean;\n    large?: boolean;\n    className?: string;\n}\n\nexport const TextLoadingPlaceholder = ({small, word, large, className = ''}: ITextLoadingPlaceholder) => (\n    <div\n        className={classNames(\n            'text-content-placeholder',\n            {\n                'mod-small': small,\n                'mod-word': word,\n                'mod-large': large,\n            },\n            className\n        )}\n    />\n);\n"}}]);
//# sourceMappingURL=490.bundle.js.map