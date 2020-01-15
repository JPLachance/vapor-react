(window.webpackJsonp=window.webpackJsonp||[]).push([[810],{1898:function(t,e,r){"use strict";r.r(e),e.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {IAdditionalClass, IClassName} from '../../utils/ClassNameUtils';\r\nimport {IThunkAction} from '../../utils/ReduxUtils';\r\nimport {IActionOptions} from '../actions/Action';\r\nimport {IActionBarProps} from '../actions/ActionBar';\r\nimport {IBlankSlateProps} from '../blankSlate/BlankSlate';\r\nimport {IContentProps} from '../content/Content';\r\nimport {IDatePickerDropdownProps} from '../datePicker/DatePickerDropdown';\r\nimport {IDropdownOption, IDropdownSearchProps} from '../dropdownSearch/DropdownSearch';\r\nimport {IFilterBoxProps} from '../filterBox/FilterBox';\r\nimport {INavigationChildrenProps} from '../navigation/Navigation';\r\nimport {TableChildActionBar} from './table-children/TableChildActionBar';\r\nimport {TableChildBlankSlate} from './table-children/TableChildBlankSlate';\r\nimport {ITableBodyInheritedFromTableProps, TableChildBody} from './table-children/TableChildBody';\r\nimport {TableChildHeader} from './table-children/TableChildHeader';\r\nimport {TableChildLastUpdated} from './table-children/TableChildLastUpdated';\r\nimport {TableChildLoadingRow} from './table-children/TableChildLoadingRow';\r\nimport {TableChildNavigation} from './table-children/TableChildNavigation';\r\nimport {DEFAULT_TABLE_DATA, DEFAULT_TABLE_PER_PAGE, TableSortingOrder} from './TableConstants';\r\nimport {ITableCompositeState, ITableData} from './TableReducers';\r\n\r\nexport interface IData {\r\n    id: string;\r\n    [attribute: string]: any;\r\n}\r\n\r\nexport interface ITableRowData {\r\n    [id: string]: IData;\r\n}\r\n\r\nexport type IAttributeValue = any;\r\nexport interface IPredicateAttributes {\r\n    [attributeName: string]: IAttributeValue;\r\n}\r\n\r\nexport type IAttributeFormatter = (attributeValue: any, attributeName?: string, data?: IData) => React.ReactNode;\r\nexport type IAttributeNameOrValueFormatter = (attributeNameOrValue: string, data?: IData) => React.ReactNode;\r\n\r\nexport interface ITableHeadingAttribute {\r\n    attributeName: string;\r\n    titleFormatter: IAttributeNameOrValueFormatter | IAttributeFormatter;\r\n    filterFormatter?: IAttributeNameOrValueFormatter; // use this for filter if you render JSX through the attribute formatter\r\n    sort?: boolean;\r\n    sortByMethod?: (attributeValue: any, data?: IData) => string;\r\n    sortMethod?: (data: IData[], attribute: string, ascending: boolean) => IData[];\r\n    attributeFormatter?: IAttributeFormatter;\r\n    onClickCell?: (event?: any, data?: any) => void;\r\n    additionalCellClasses?: IAdditionalClass[];\r\n    headerClasses?: IClassName;\r\n}\r\n\r\nexport interface ITablePredicate {\r\n    props: IDropdownSearchProps;\r\n    attributeName: string;\r\n    attributeNameFormatter?: IAttributeNameOrValueFormatter;\r\n}\r\n\r\nexport interface ITableOwnProps extends React.ClassAttributes<Table>, ITableBodyInheritedFromTableProps {\r\n    id: string;\r\n    blankSlateDefault: IBlankSlateProps;\r\n    tableContainerClasses?: IClassName;\r\n    tableClasses?: IClassName;\r\n    tableBodyClasses?: IClassName;\r\n    tableHeaderClasses?: IClassName;\r\n    initialTableData?: ITableData;\r\n    actionBar?: true | IActionBarProps;\r\n    blankSlateNoResultsOnAction?: IBlankSlateProps;\r\n    blankSlateOnError?: IBlankSlateProps;\r\n    datePicker?: IDatePickerDropdownProps;\r\n    filter?: true | IFilterBoxProps;\r\n    predicates?: ITablePredicate[];\r\n    prefixContent?: IContentProps;\r\n    navigation?: true | INavigationChildrenProps;\r\n    pullLastUpdateLeft?: boolean;\r\n    lastUpdatedLabel?: string;\r\n    withoutLastUpdated?: boolean;\r\n    withFixedHeader?: boolean;\r\n    rowsMultiSelect?: boolean;\r\n    disabled?: boolean;\r\n    asCard?: boolean;\r\n    handleOnRowClick?: (actions: IActionOptions[], rowData: IData) => void;\r\n    filterMethod?: (attributeValue: any, props: ITableOwnProps, filterValue: string) => boolean;\r\n    /**\r\n     * A custom thunk action replacing the default table state modification taking place each time an action is\r\n     * performed on the table (page change, per page change, filtering, predicate selection, etc).\r\n     *\r\n     * The manual prop (thunk action) is thus dispatched each time the onModifyData prop is called,\r\n     * where the specified parameters (tableOwnProps, shouldResetPage, tableCompositeState, and previousTableCompositeState)\r\n     * are provided as arguments.\r\n     *\r\n     * This prop can be particularly useful in cases where new data needs to be fetched from the server\r\n     * on each table action (page change, per page change, filtering, predicate selection, etc),\r\n     * or if you need to refresh the table data periodically.\r\n     */\r\n    manual?: (\r\n        tableOwnProps?: Partial<ITableOwnProps>,\r\n        shouldResetPage?: boolean,\r\n        tableCompositeState?: ITableCompositeState,\r\n        previousTableCompositeState?: ITableCompositeState\r\n    ) => IThunkAction;\r\n}\r\n\r\nexport interface ITableCompositeStateProps {\r\n    readonly tableCompositeState?: ITableCompositeState;\r\n    actions?: IActionOptions[];\r\n}\r\n\r\nexport interface ITableDispatchProps {\r\n    onDidMount?: () => void;\r\n    onUnmount?: () => void;\r\n    onWillUpdate?: (actions: IActionOptions[]) => void;\r\n    onModifyData?: (\r\n        shouldResetPage: boolean,\r\n        tableCompositeState: ITableCompositeState,\r\n        previousTableCompositeState?: ITableCompositeState\r\n    ) => void;\r\n    onPredicateOptionClick?: (predicateId: string, option: IDropdownOption) => void;\r\n    onRowClick?: (actions: IActionOptions[], numberOfSelectedIds: number) => void;\r\n}\r\n\r\nexport interface ITableProps extends ITableOwnProps, ITableCompositeStateProps, ITableDispatchProps {}\r\n\r\n/*\r\n * @deprecated use the TableHOC\r\n */\r\nexport class Table extends React.Component<ITableProps> {\r\n    private isInitialLoad: boolean;\r\n\r\n    static defaultProps = {\r\n        tableCompositeState: {\r\n            sortState: {\r\n                attribute: undefined,\r\n                order: TableSortingOrder.UNSORTED,\r\n            },\r\n            filter: '',\r\n            page: 0,\r\n            perPage: DEFAULT_TABLE_PER_PAGE,\r\n        } as Partial<ITableCompositeState>,\r\n        initialTableData: DEFAULT_TABLE_DATA,\r\n        rowsMultiSelect: false,\r\n        withoutHoverOnRow: false,\r\n    } as Partial<ITableOwnProps>;\r\n\r\n    constructor(props: ITableProps) {\r\n        super(props);\r\n\r\n        // tslint:disable\r\n        // Only use the initial load strategy for tables that do not provide initialTableData in their own props\r\n        this.isInitialLoad = props.initialTableData == DEFAULT_TABLE_DATA;\r\n        // tslint:enable\r\n    }\r\n\r\n    componentDidMount() {\r\n        if (this.props.onDidMount) {\r\n            this.props.onDidMount();\r\n        }\r\n    }\r\n\r\n    componentWillUpdate(nextProps: ITableProps) {\r\n        if (this.props.onWillUpdate && JSON.stringify(nextProps.actions) !== JSON.stringify(this.props.actions)) {\r\n            this.props.onWillUpdate(nextProps.actions);\r\n        }\r\n    }\r\n\r\n    componentDidUpdate() {\r\n        if (\r\n            this.isInitialLoad &&\r\n            JSON.stringify(this.props.tableCompositeState.data) !== JSON.stringify(DEFAULT_TABLE_DATA)\r\n        ) {\r\n            this.isInitialLoad = false;\r\n        }\r\n    }\r\n\r\n    componentWillReceiveProps(nextProps: ITableProps) {\r\n        const {tableCompositeState} = this.props;\r\n\r\n        if (this.hasTableCompositeStateChanged(tableCompositeState, nextProps.tableCompositeState)) {\r\n            // if the change occurs outside the navigation (per page, pagination), reset the pagination to 0\r\n            const shouldResetPage =\r\n                tableCompositeState.page === nextProps.tableCompositeState.page &&\r\n                tableCompositeState.perPage === nextProps.tableCompositeState.perPage;\r\n\r\n            this.props.onModifyData(shouldResetPage, nextProps.tableCompositeState, tableCompositeState);\r\n        }\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        if (this.props.onUnmount) {\r\n            this.props.onUnmount();\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const tableClasses = classNames(\r\n            'table',\r\n            'mod-collapsible-rows',\r\n            'mod-align-header',\r\n            {\r\n                'mod-loading-content': !!(this.props.tableCompositeState && this.props.tableCompositeState.isLoading),\r\n                'loading-component': this.isInitialLoad && !this.props.tableCompositeState.isInError,\r\n            },\r\n            this.props.tableClasses\r\n        );\r\n\r\n        const tableBodyNode: React.ReactNode = this.shouldShowTableBody() ? (\r\n            this.getTableBody()\r\n        ) : (\r\n            <TableChildBlankSlate {...this.props} />\r\n        );\r\n\r\n        const tableChildLastUpdatedNode: React.ReactNode = !this.props.withoutLastUpdated ? (\r\n            <TableChildLastUpdated {...this.props} pullLeft={this.props.pullLastUpdateLeft} />\r\n        ) : null;\r\n\r\n        return (\r\n            <div\r\n                className={classNames('table-container', this.props.tableContainerClasses, {\r\n                    'table-card': this.props.asCard,\r\n                })}\r\n            >\r\n                <TableChildActionBar {...this.props} />\r\n                {this.setFixedHeaderWrapper(\r\n                    <table id={`table-${this.props.id}`} className={tableClasses}>\r\n                        <TableChildLoadingRow {...this.props} isInitialLoad={this.isInitialLoad} />\r\n                        {!this.props.asCard || this.shouldShowTableBody() ? <TableChildHeader {...this.props} /> : null}\r\n                        {tableBodyNode}\r\n                    </table>\r\n                )}\r\n                <TableChildNavigation {...this.props} />\r\n                {tableChildLastUpdatedNode}\r\n            </div>\r\n        );\r\n    }\r\n\r\n    private setFixedHeaderWrapper(tableElement: React.ReactNode) {\r\n        return this.props.withFixedHeader ? (\r\n            <div className=\"fixed-header-table-container\">\r\n                <div className=\"fixed-header-table\">{tableElement}</div>\r\n            </div>\r\n        ) : (\r\n            tableElement\r\n        );\r\n    }\r\n\r\n    private hasTableCompositeStateChanged(\r\n        currentTableCompositeState: ITableCompositeState,\r\n        nextTableCompositeState: ITableCompositeState\r\n    ): boolean {\r\n        return (\r\n            !!currentTableCompositeState &&\r\n            (currentTableCompositeState.filter !== nextTableCompositeState.filter ||\r\n                currentTableCompositeState.perPage !== nextTableCompositeState.perPage ||\r\n                currentTableCompositeState.page !== nextTableCompositeState.page ||\r\n                currentTableCompositeState.sortState.attribute !== nextTableCompositeState.sortState.attribute ||\r\n                currentTableCompositeState.sortState.order !== nextTableCompositeState.sortState.order ||\r\n                (_.isEmpty(currentTableCompositeState.predicates) && !_.isEmpty(nextTableCompositeState.predicates)) ||\r\n                _.some(\r\n                    currentTableCompositeState.predicates,\r\n                    (attributeValue: any, attributeName: string) =>\r\n                        attributeValue !== nextTableCompositeState.predicates[attributeName]\r\n                ) ||\r\n                currentTableCompositeState.from !== nextTableCompositeState.from ||\r\n                currentTableCompositeState.to !== nextTableCompositeState.to ||\r\n                !!currentTableCompositeState.dataDeleted)\r\n        );\r\n    }\r\n\r\n    private getTableBody() {\r\n        const tableData = this.props.tableCompositeState.data || this.props.initialTableData;\r\n        const numberOfSelectedIds: number = tableData.selectedIds ? tableData.selectedIds.length : 0;\r\n\r\n        const tableBodyNode: React.ReactNode = tableData.displayedIds.map(\r\n            (id: string, yPosition: number): JSX.Element => {\r\n                const currentRowData: IData = tableData.byId[id];\r\n\r\n                return (\r\n                    <TableChildBody\r\n                        key={id}\r\n                        disabled={this.props.disabled}\r\n                        tableId={this.props.id}\r\n                        rowData={currentRowData}\r\n                        isLoading={this.props.tableCompositeState.isLoading}\r\n                        getActions={(rowData?: IData) =>\r\n                            (this.props.getActions && this.props.getActions(rowData)) || []\r\n                        }\r\n                        headingAttributes={this.props.headingAttributes}\r\n                        collapsibleFormatter={this.props.collapsibleFormatter}\r\n                        onRowClick={(actions: IActionOptions[]) => this.props.onRowClick(actions, numberOfSelectedIds)}\r\n                        handleOnRowClick={this.props.handleOnRowClick}\r\n                        additionalRowClasses={this.props.additionalRowClasses}\r\n                        isMultiSelect={this.props.rowsMultiSelect}\r\n                        withoutHoverOnRow={this.props.withoutHoverOnRow}\r\n                    />\r\n                );\r\n            }\r\n        );\r\n\r\n        return this.props.collapsibleFormatter ? (\r\n            tableBodyNode\r\n        ) : (\r\n            <tbody className={classNames(this.props.tableBodyClasses)}>{tableBodyNode}</tbody>\r\n        );\r\n    }\r\n\r\n    private shouldShowTableBody(): boolean {\r\n        const tableData = this.props.tableCompositeState.data || this.props.initialTableData;\r\n\r\n        return (\r\n            !this.props.tableCompositeState.isInError &&\r\n            !!(tableData.displayedIds.length || this.props.tableCompositeState.isLoading || this.isInitialLoad)\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=810.bundle.js.map