(window.webpackJsonp=window.webpackJsonp||[]).push([[1063],{2211:function(e,n,r){"use strict";r.r(n),n.default="@import '~coveo-styleguide/scss/common/palette.scss';\r\n@import '~coveo-styleguide/scss/variables.scss';\r\n@import '~coveo-styleguide/scss/placeholders.scss';\r\n\r\n:global(.coveo-styleguide .table.table-numbered) {\r\n    tr:global(.selected) td {\r\n        &:first-child::before {\r\n            display: none;\r\n        }\r\n\r\n        &:nth-child(2)::before {\r\n            @extend %selection-indicator;\r\n        }\r\n    }\r\n}\r\n\r\n:global(.coveo-styleguide .table) .tableNumberedRow:first-child {\r\n    width: 60px;\r\n    padding: 0;\r\n}\r\n\r\n:global(.coveo-styleguide .table) .tableNumberedRowContainer {\r\n    width: 60px;\r\n    padding: $default-margin;\r\n    color: $medium-blue;\r\n    text-align: center;\r\n    border-left: none;\r\n}\r\n"}}]);
//# sourceMappingURL=1063.bundle.js.map