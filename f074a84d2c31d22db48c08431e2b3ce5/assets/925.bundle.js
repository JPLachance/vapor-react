(window.webpackJsonp=window.webpackJsonp||[]).push([[925],{2011:function(n,r,t){"use strict";t.r(r),r.default="import {ILinkSvgProps} from '../components/svg/LinkSvg';\r\n\r\nexport type ComponentId = string;\r\n\r\n/**\r\n * DisplayClass is a reflection of the atomic display classes available in Vapor\r\n * see https://github.com/coveo/vapor/blob/04372c42cbabb06ddd79130c13902137a7956ad7/scss/utility/layout.scss\r\n * for more details\r\n */\r\nexport const DisplayClass = {\r\n    BLOCK: 'block',\r\n    INLINE: 'inline',\r\n    INLINE_BLOCK: 'inline-block',\r\n    HIDDEN: 'hidden',\r\n    TABLE: 'table',\r\n    TABLE_CELL: 'table-cell',\r\n};\r\n\r\nexport const getBasicDocumentLink = (url: string, title: string = ''): ILinkSvgProps => {\r\n    return {\r\n        url,\r\n        target: '_blank',\r\n        svg: {\r\n            svgName: 'help',\r\n            svgClass: 'fill-orange icon mod-20',\r\n        },\r\n        tooltip: {\r\n            title,\r\n            placement: 'bottom',\r\n            container: 'body',\r\n        },\r\n    };\r\n};\r\n"}}]);
//# sourceMappingURL=925.bundle.js.map