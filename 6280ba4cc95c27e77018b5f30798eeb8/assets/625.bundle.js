(window.webpackJsonp=window.webpackJsonp||[]).push([[625],{1729:function(e,n,a){"use strict";a.r(n),n.default="import {FunctionComponent} from 'react';\nimport * as React from 'react';\nimport {TableHOCUtils} from '../table-hoc/utils/TableHOCUtils';\nimport {PaginationPagesNumber} from './PaginationPagesNumber';\nimport {PaginationPerPage} from './PaginationPerPage';\n\nexport interface ITablePaginationProps {\n    id: string;\n    totalPages: number;\n    perPageNumbers: number[];\n    defaultPerPageSelected: number;\n    totalEntries: number;\n    disabled?: boolean;\n}\n\nexport const TablePagination: FunctionComponent<ITablePaginationProps> = ({\n    id,\n    disabled = false,\n    totalPages,\n    perPageNumbers,\n    defaultPerPageSelected,\n    totalEntries,\n}) => (\n    <div className=\"pagination-container\">\n        <PaginationPerPage\n            id={id}\n            perPage={perPageNumbers}\n            disabled={disabled}\n            defaultPerPageSelected={defaultPerPageSelected}\n            hidden={perPageNumbers.length && totalEntries < perPageNumbers[0] && !disabled}\n        />\n        <div className=\"flex-auto\" />\n        <PaginationPagesNumber\n            id={TableHOCUtils.getPaginationId(id)}\n            totalPages={totalPages || 1}\n            disabled={disabled}\n            hidden={totalPages === 1}\n        />\n    </div>\n);\n\nexport const TablePaginationDefaultValue = {\n    PerPage: [10, 20, 30],\n    perPageLabel: 'Results per page',\n};\n"}}]);
//# sourceMappingURL=625.bundle.js.map