(window.webpackJsonp=window.webpackJsonp||[]).push([[786],{1875:function(e,r,t){"use strict";t.r(r),r.default="import * as $ from 'jquery';\r\nimport * as moment from 'moment';\r\nimport * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport {RouteComponentProps, withRouter} from 'react-router';\r\nimport * as _ from 'underscore';\r\n\r\nimport {ExampleComponent} from '../../../../docs/src/components/ComponentsInterface';\r\nimport {withServerSideProcessing} from '../../../hoc/withServerSideProcessing/withServerSideProcessing';\r\nimport {DateUtils} from '../../../utils/DateUtils';\r\nimport {IDispatch, IReduxAction, IThunkAction} from '../../../utils/ReduxUtils';\r\nimport {IReactVaporTestState} from '../../../utils/tests/TestUtils';\r\nimport {SELECTION_BOXES_LONG} from '../../datePicker/examples/DatePickerExamplesCommon';\r\nimport {LastUpdated} from '../../lastUpdated/LastUpdated';\r\nimport {turnOffLoading} from '../../loading/LoadingActions';\r\nimport {Section} from '../../section/Section';\r\nimport {TableWithPaginationActions} from '../actions/TableWithPaginationActions';\r\nimport {TableHeaderWithSort} from '../TableHeaderWithSort';\r\nimport {TableHOC} from '../TableHOC';\r\nimport {ITableHOCCompositeState, TableHOCUtils} from '../TableHOCUtils';\r\nimport {TableRowConnected} from '../TableRowConnected';\r\nimport {TableRowNumberColumn} from '../TableRowNumberColumn';\r\nimport {TableRowNumberHeader} from '../TableRowNumberHeader';\r\nimport {tableWithActions} from '../TableWithActions';\r\nimport {tableWithBlankSlate} from '../TableWithBlankSlate';\r\nimport {tableWithDatePicker} from '../TableWithDatePicker';\r\nimport {tableWithFilter} from '../TableWithFilter';\r\nimport {tableWithPagination} from '../TableWithPagination';\r\nimport {tableWithPredicate} from '../TableWithPredicate';\r\nimport {tableWithSort} from '../TableWithSort';\r\nimport {tableWithUrlState} from '../TableWithUrlState';\r\n\r\ntype TableHOCServerProps = RouteComponentProps &\r\n    ReturnType<typeof mapStateToProps> &\r\n    ReturnType<typeof mapDispatchToProps>;\r\n\r\nexport interface IExampleRowData {\r\n    city: string;\r\n    email: string;\r\n\r\n    username: string;\r\n    dateOfBirth: Date;\r\n    id: string;\r\n}\r\n\r\nexport interface IExampleServerTableState {\r\n    data: IExampleRowData[];\r\n    isLoading: boolean;\r\n}\r\n\r\ninterface ISetExampleDataPayload {\r\n    data: any[];\r\n}\r\n\r\ninterface ISetExampleIsLoadingPayload {\r\n    isLoading: boolean;\r\n}\r\n\r\ntype IExamplePayload = ISetExampleDataPayload | ISetExampleIsLoadingPayload;\r\n\r\nexport const TableHOCServerExamples: ExampleComponent = () => <TableHOCServer />;\r\n\r\nTableHOCServerExamples.title = 'TableHOC server';\r\n\r\n// start-print\r\nexport const TableHOCServerExampleId = 'complex-example';\r\n\r\nconst tableActions = (username: string) => [\r\n    {\r\n        primary: true,\r\n        icon: 'edit',\r\n        name: 'edit',\r\n        enabled: true,\r\n        trigger: () => alert(username),\r\n        callOnDoubleClick: true,\r\n    },\r\n];\r\n\r\nconst generateRows = (allData: IExampleRowData[]) =>\r\n    allData.map((data: IExampleRowData, i: number) => (\r\n        <TableRowConnected\r\n            id={data.username}\r\n            tableId={TableHOCServerExampleId}\r\n            key={data.username}\r\n            actions={tableActions(data.username)}\r\n            isMultiselect\r\n            disabled={i % 3 === 0}\r\n            collapsible={{content: <div className=\"py2\">👋</div>}}\r\n        >\r\n            <TableRowNumberColumn number={i + 1} />\r\n            <td key=\"city\">{data.city}</td>\r\n            <td key=\"email\">{data.email.toLowerCase()}</td>\r\n            <td key=\"username\">{data.username.toLowerCase()}</td>\r\n            <td key=\"date-of-birth\">{data.dateOfBirth.toLocaleDateString()}</td>\r\n        </TableRowConnected>\r\n    ));\r\n\r\nconst renderHeader = () => (\r\n    <thead>\r\n        <tr>\r\n            <TableRowNumberHeader />\r\n            <TableHeaderWithSort id=\"address.city\" tableId={TableHOCServerExampleId}>\r\n                City\r\n            </TableHeaderWithSort>\r\n            <TableHeaderWithSort id=\"email\" tableId={TableHOCServerExampleId}>\r\n                Email\r\n            </TableHeaderWithSort>\r\n            <TableHeaderWithSort id=\"username\" tableId={TableHOCServerExampleId} isDefault>\r\n                Username\r\n            </TableHeaderWithSort>\r\n            <th key=\"date-of-birth\">Date of Birth</th>\r\n            <th>{/* Empty th for the collapsible */}</th>\r\n        </tr>\r\n    </thead>\r\n);\r\n\r\nconst tablePredicates = [\r\n    {\r\n        id: 'address.city',\r\n        prepend: <span className=\"mr1 text-medium-grey\">City:</span>,\r\n        values: [\r\n            {displayValue: 'All', value: '', selected: true},\r\n            {displayValue: 'Lebsackbury', value: 'Lebsackbury'},\r\n        ],\r\n    },\r\n    {\r\n        id: 'username',\r\n        prepend: <span className=\"mr1 text-medium-grey\">Username:</span>,\r\n        values: [\r\n            {displayValue: 'All', value: '', selected: true},\r\n            {displayValue: 'bret', value: 'Bret'},\r\n        ],\r\n    },\r\n];\r\n\r\nconst tableDatePickerConfig = {\r\n    datesSelectionBoxes: SELECTION_BOXES_LONG,\r\n    years: [...DateUtils.getPreviousYears(25), DateUtils.currentYear.toString()],\r\n    initialDateRange: [\r\n        moment()\r\n            .subtract(25, 'years')\r\n            .toDate(),\r\n        moment().toDate(),\r\n    ],\r\n};\r\n\r\nconst mapStateToProps = (state: IReactVaporTestState) => ({\r\n    isLoading: state.tableHOCExample.isLoading,\r\n    serverData: state.tableHOCExample.data,\r\n});\r\nconst mapDispatchToProps = (dispatch: IDispatch) => ({\r\n    fetch: _.debounce(() => dispatch(TableHOCServerActions.fetchData()), 400),\r\n});\r\n\r\nconst TableExampleDisconnected: React.FunctionComponent<TableHOCServerProps> = (props) => {\r\n    const onUpdate = () => {\r\n        props.fetch();\r\n    };\r\n\r\n    const updateUrl = (query: string) => {\r\n        props.history.push({search: query});\r\n    };\r\n\r\n    return (\r\n        <Section title=\"Server table with numbered rows\">\r\n            <span className=\"block my2 text-grey-7\">\r\n                Please note that the backend service doesn't support dates but we still make a request for every change\r\n                in the date range.\r\n            </span>\r\n            <ServerTableComposed\r\n                id={TableHOCServerExampleId}\r\n                className=\"table table-numbered mod-collapsible-rows\"\r\n                data={props.serverData}\r\n                renderBody={generateRows}\r\n                tableHeader={renderHeader()}\r\n                onUpdate={onUpdate}\r\n                onUpdateUrl={updateUrl}\r\n                isLoading={props.isLoading}\r\n            >\r\n                <LastUpdated time={new Date()} />\r\n            </ServerTableComposed>\r\n        </Section>\r\n    );\r\n};\r\n\r\nconst ServerTableComposed = _.compose(\r\n    withServerSideProcessing,\r\n    tableWithUrlState,\r\n    tableWithBlankSlate({title: 'No data fetched from the server'}),\r\n    tableWithPredicate({...tablePredicates[0]}),\r\n    tableWithPredicate({...tablePredicates[1]}),\r\n    tableWithFilter(),\r\n    tableWithDatePicker({...(tableDatePickerConfig as any)}),\r\n    tableWithSort(),\r\n    tableWithPagination({perPageNumbers: [3, 5, 10]}),\r\n    tableWithActions()\r\n)(TableHOC);\r\n\r\nconst TableHOCServer = connect(\r\n    mapStateToProps,\r\n\r\n    mapDispatchToProps\r\n)(withRouter(TableExampleDisconnected));\r\n\r\n/* ACTIONS */\r\n\r\nexport const TableHOCServerActionsType = {\r\n    setData: 'TABLE_HOC_SET_DATA',\r\n    setIsLoading: 'TABLE_HOC_SET_IS_LOADING',\r\n    fetch: 'TABLE_HOC_FETCH_DATA',\r\n};\r\n\r\nconst setData = (data: any[]): IReduxAction<ISetExampleDataPayload> => ({\r\n    type: TableHOCServerActionsType.setData,\r\n    payload: {data},\r\n});\r\n\r\nconst setIsLoading = (isLoading: boolean): IReduxAction<ISetExampleIsLoadingPayload> => ({\r\n    type: TableHOCServerActionsType.setIsLoading,\r\n    payload: {isLoading},\r\n});\r\n\r\nconst fetchData = (): IThunkAction => (dispatch: IDispatch, getState: () => IReactVaporTestState) => {\r\n    const compositeState: ITableHOCCompositeState = TableHOCUtils.getCompositeState(\r\n        TableHOCServerExampleId,\r\n        getState()\r\n    );\r\n    const [from, to] = _.map(compositeState.dateLimits, (limit) => limit && limit.toISOString());\r\n    const params: any = {\r\n        _page: compositeState.pageNb + 1,\r\n        _limit: compositeState.perPage,\r\n        _sort: compositeState.sortKey,\r\n        _order: compositeState.sortAscending ? 'asc' : 'desc',\r\n        q: compositeState.filter || undefined,\r\n        from,\r\n        to,\r\n    };\r\n    _.each(compositeState.predicates, (predicate: {id: string; value: string}) => {\r\n        params[predicate.id] = predicate.value;\r\n    });\r\n    dispatch(setIsLoading(true));\r\n    $.get('https://jsonplaceholder.typicode.com/users', params).done((response: any[], status, request) => {\r\n        const count = request.getResponseHeader('x-total-count');\r\n        const users = response.map((user: any) => ({\r\n            city: user.address.city,\r\n            username: user.username,\r\n            email: user.email,\r\n            dateOfBirth: moment()\r\n                .subtract(user.address.city.length, 'years')\r\n                .toDate(), // fake a year of birth\r\n        }));\r\n        dispatch(setData(users));\r\n        dispatch(turnOffLoading([TableHOCServerExampleId]));\r\n        dispatch(TableWithPaginationActions.setCount(TableHOCServerExampleId, count));\r\n    });\r\n};\r\n\r\nexport const TableHOCServerActions = {\r\n    setData,\r\n    setIsLoading,\r\n    fetchData,\r\n};\r\n\r\n/* REDUCER */\r\n\r\nexport const TableHOCServerExampleReducer = (\r\n    state: IExampleServerTableState = {data: [], isLoading: true},\r\n    action: IReduxAction<IExamplePayload>\r\n) => {\r\n    if (action.type === TableHOCServerActionsType.setData) {\r\n        const payload = action.payload as ISetExampleDataPayload;\r\n        return {\r\n            ...state,\r\n            data: [...payload.data],\r\n            isLoading: false,\r\n        };\r\n    }\r\n    if (action.type === TableHOCServerActionsType.setIsLoading) {\r\n        const payload = action.payload as ISetExampleIsLoadingPayload;\r\n        return {\r\n            ...state,\r\n            isLoading: payload.isLoading,\r\n        };\r\n    }\r\n    return state;\r\n};\r\n"}}]);
//# sourceMappingURL=786.bundle.js.map