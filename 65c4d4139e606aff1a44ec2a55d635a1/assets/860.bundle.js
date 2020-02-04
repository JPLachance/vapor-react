(window.webpackJsonp=window.webpackJsonp||[]).push([[860],{1960:function(n,o,t){"use strict";t.r(o),o.default="import * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {NavigationConnected} from '../../navigation/NavigationConnected';\r\nimport {ITableProps} from '../Table';\r\nimport {TableChildComponent} from '../TableConstants';\r\nimport {getTableChildComponentId} from '../TableUtils';\r\n\r\nexport const TableChildNavigation = (props: ITableProps): JSX.Element => {\r\n    const tableData = props.tableCompositeState.data || props.initialTableData;\r\n    const navigationProps = _.isBoolean(props.navigation) ? {} : props.navigation;\r\n\r\n    return !!navigationProps ? (\r\n        <NavigationConnected\r\n            {...navigationProps}\r\n            totalEntries={tableData.totalEntries}\r\n            totalPages={tableData.totalPages}\r\n            id={getTableChildComponentId(props.id, TableChildComponent.NAVIGATION)}\r\n            loadingIds={[getTableChildComponentId(props.id, TableChildComponent.LOADING_NAVIGATION)]}\r\n        />\r\n    ) : null;\r\n};\r\n"}}]);
//# sourceMappingURL=860.bundle.js.map