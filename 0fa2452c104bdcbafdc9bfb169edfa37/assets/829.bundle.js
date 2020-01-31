(window.webpackJsonp=window.webpackJsonp||[]).push([[829],{1928:function(e,n,a){"use strict";a.r(n),n.default="import * as moment from 'moment';\nimport * as React from 'react';\nimport {DateUtils} from '../../../utils/DateUtils';\nimport {SELECTION_BOXES_LONG} from '../../datePicker/examples/DatePickerExamplesCommon';\nimport {IExampleRowData, TableHOCServerExampleId} from '../examples/TableHOCServerExamples';\nimport {TableRowConnected} from '../TableRowConnected';\nimport {TableRowNumberColumn} from '../TableRowNumberColumn';\n\nexport interface ITableHOCServerExampleContext {\n    isLoading: boolean;\n    id: string;\n}\n\nexport const TableHOCServerExampleContext = React.createContext<ITableHOCServerExampleContext>({\n    isLoading: true,\n    id: undefined,\n});\n\nconst generateRows = (allData: IExampleRowData[]) =>\n    allData.map((data: IExampleRowData, i: number) => (\n        <TableRowConnected\n            id={data.username}\n            tableId={TableHOCServerExampleId}\n            key={data.username}\n            actions={tableActions(data.username)}\n            isMultiselect\n            disabled={i % 3 === 0}\n            collapsible={{content: <div className=\"py2\">👋</div>}}\n        >\n            <TableRowNumberColumn number={i + 1} />\n            <td key=\"city\">{data.city}</td>\n            <td key=\"email\">{data.email.toLowerCase()}</td>\n            <td key=\"username\">{data.username.toLowerCase()}</td>\n            <td key=\"date-of-birth\">{data.dateOfBirth.toLocaleDateString()}</td>\n        </TableRowConnected>\n    ));\n\nconst tableActions = (username: string) => [\n    {\n        primary: true,\n        icon: 'edit',\n        name: 'edit',\n        enabled: true,\n        trigger: () => alert(username),\n        callOnDoubleClick: true,\n    },\n];\n\nconst tablePredicates = [\n    {\n        id: 'address.city',\n        prepend: <span className=\"mr1 text-medium-grey\">City:</span>,\n        values: [\n            {displayValue: 'All', value: '', selected: true},\n            {displayValue: 'Lebsackbury', value: 'Lebsackbury'},\n        ],\n    },\n    {\n        id: 'username',\n        prepend: <span className=\"mr1 text-medium-grey\">Username:</span>,\n        values: [\n            {displayValue: 'All', value: '', selected: true},\n            {displayValue: 'bret', value: 'Bret'},\n        ],\n    },\n];\n\nconst tableDatePickerConfig = {\n    datesSelectionBoxes: SELECTION_BOXES_LONG,\n    years: [...DateUtils.getPreviousYears(25), DateUtils.currentYear.toString()],\n    initialDateRange: [\n        moment()\n            .subtract(25, 'years')\n            .toDate(),\n        moment().toDate(),\n    ],\n};\n\nexport const TableHOCExampleUtils = {\n    generateRows,\n    tableActions,\n    tablePredicates,\n    tableDatePickerConfig,\n};\n"}}]);
//# sourceMappingURL=829.bundle.js.map