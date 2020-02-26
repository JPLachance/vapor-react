(window.webpackJsonp=window.webpackJsonp||[]).push([[763],{1844:function(n,o,r){"use strict";r.r(o),o.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {keys} from 'ts-transformer-keys';\r\nimport * as _ from 'underscore';\r\n\r\nimport {SlideY} from '../../animations/SlideY';\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {EventUtils} from '../../utils/EventUtils';\r\nimport {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';\r\nimport {IActionOptions} from '../actions/Action';\r\nimport {addActionsToActionBar} from '../actions/ActionBarActions';\r\nimport {Collapsible} from '../collapsible/Collapsible';\r\nimport {CollapsibleToggle} from '../collapsible/CollapsibleToggle';\r\nimport {TableHOCRowActions} from './actions/TableHOCRowActions';\r\nimport {TableSelectors} from './TableSelectors';\r\n\r\nexport interface CollapsibleRowProps {\r\n    content?: React.ReactNode;\r\n    className?: string;\r\n    expandOnMount?: boolean;\r\n    renderCustomToggleCell?: (opened: boolean) => React.ReactNode;\r\n    onToggleCollapsible?: (open: boolean) => void;\r\n}\r\n\r\nexport interface ITableRowOwnProps {\r\n    id: string;\r\n    tableId: string;\r\n    actions?: IActionOptions[];\r\n    isMultiselect?: boolean;\r\n    collapsible?: CollapsibleRowProps;\r\n    disabled?: boolean;\r\n}\r\n\r\nexport type ITableRowStateProps = ReturnType<typeof mapStateToProps>;\r\nexport type ITableRowDispatchProps = ReturnType<typeof mapDispatchToProps>;\r\n\r\nexport interface ITableRowConnectedProps\r\n    extends ITableRowOwnProps,\r\n        Partial<ITableRowStateProps>,\r\n        Partial<ITableRowDispatchProps> {}\r\n\r\nconst TableRowPropsToOmit = keys<ITableRowConnectedProps>();\r\n\r\nconst isCollapsible = (props: ITableRowOwnProps): boolean =>\r\n    props.collapsible && (React.isValidElement(props.collapsible.content) || _.isString(props.collapsible.content));\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: ITableRowOwnProps) => {\r\n    const {selected, opened} = TableSelectors.getTableRow(state, {id: ownProps.id}) || {selected: false, opened: false};\r\n    return {\r\n        selected,\r\n        opened,\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (dispatch: IDispatch, ownProps: ITableRowOwnProps) => {\r\n    const refreshActionBarActions = (isMulti: boolean) => {\r\n        if (!_.isEmpty(ownProps.actions)) {\r\n            dispatch(addActionsToActionBar(ownProps.tableId, ownProps.actions));\r\n            dispatch(TableHOCRowActions.select(ownProps.id, isMulti));\r\n        }\r\n    };\r\n\r\n    return {\r\n        onMount: () => {\r\n            dispatch(TableHOCRowActions.add(ownProps.id, ownProps.tableId));\r\n            if (isCollapsible(ownProps) && ownProps.collapsible.expandOnMount) {\r\n                dispatch(TableHOCRowActions.toggleCollapsible(ownProps.id, true));\r\n            }\r\n        },\r\n        onUnmount: (isSelected?: boolean) => {\r\n            dispatch(TableHOCRowActions.remove(ownProps.id, ownProps.tableId, isSelected));\r\n        },\r\n        handleClick: (isMulti: boolean) => {\r\n            refreshActionBarActions(isMulti);\r\n        },\r\n        onCollapsibleClick: (isOpened: boolean) => {\r\n            ownProps.collapsible.onToggleCollapsible?.(!isOpened);\r\n            dispatch(TableHOCRowActions.toggleCollapsible(ownProps.id));\r\n        },\r\n        onUpdateToCollapsibleRow: () => {\r\n            if (ownProps.collapsible.expandOnMount) {\r\n                dispatch(TableHOCRowActions.toggleCollapsible(ownProps.id, true));\r\n            }\r\n        },\r\n        onActionBarActionsChanged: () => refreshActionBarActions(false),\r\n    };\r\n};\r\n\r\n@ReduxConnect(mapStateToProps, mapDispatchToProps)\r\nclass TableRowConnected extends React.PureComponent<\r\n    ITableRowConnectedProps & React.HTMLAttributes<HTMLTableRowElement>\r\n> {\r\n    static defaultProps: Partial<ITableRowOwnProps>;\r\n\r\n    componentDidUpdate(prevProps: ITableRowConnectedProps) {\r\n        if (!isCollapsible(prevProps) && isCollapsible(this.props)) {\r\n            this.props.onUpdateToCollapsibleRow();\r\n        }\r\n\r\n        if (JSON.stringify(prevProps.actions) !== JSON.stringify(this.props.actions) && this.props.selected) {\r\n            this.props.onActionBarActionsChanged();\r\n        }\r\n    }\r\n\r\n    componentDidMount() {\r\n        this.props.onMount();\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        this.props.onUnmount(this.props.selected);\r\n    }\r\n\r\n    render() {\r\n        const rowIsCollapsible = isCollapsible(this.props);\r\n        const collapsibleContentRow = rowIsCollapsible && (\r\n            <tr\r\n                key={`${this.props.tableId}-${this.props.id}-collapsible`}\r\n                className={classNames('collapsible-row', this.props.collapsible.className, {\r\n                    in: this.props.opened,\r\n                })}\r\n            >\r\n                <td colSpan={this.columnCount + 1}>\r\n                    <SlideY\r\n                        id={`${this.props.tableId}-${this.props.id}-collapsible`}\r\n                        in={this.props.opened}\r\n                        timeout={Collapsible.TIMEOUT}\r\n                        duration={Collapsible.TIMEOUT}\r\n                    >\r\n                        {this.props.collapsible.content}\r\n                    </SlideY>\r\n                </td>\r\n            </tr>\r\n        );\r\n\r\n        let collapsibleRowToggle: React.ReactNode = [];\r\n        if (rowIsCollapsible) {\r\n            const customToggle = this.props.collapsible.renderCustomToggleCell?.(this.props.opened);\r\n            collapsibleRowToggle = React.isValidElement(customToggle) ? (\r\n                customToggle\r\n            ) : (\r\n                <td>\r\n                    <CollapsibleToggle\r\n                        onClick={this.onToggleCollapsible}\r\n                        expanded={this.props.opened}\r\n                        svgClassName=\"mod-12\"\r\n                        className=\"btn mod-no-border right px1\"\r\n                    />\r\n                </td>\r\n            );\r\n        }\r\n\r\n        return (\r\n            <React.Fragment key={`${this.props.tableId}-${this.props.id}`}>\r\n                <tr\r\n                    key={`${this.props.tableId}-${this.props.id}-heading`}\r\n                    {..._.omit(this.props, TableRowPropsToOmit)}\r\n                    className={classNames(this.props.className, {\r\n                        selected: this.props.selected,\r\n                        opened: this.props.opened,\r\n                        'heading-row': rowIsCollapsible,\r\n                        'row-disabled': this.props.disabled,\r\n                        'no-hover': _.isEmpty(this.props.actions),\r\n                    })}\r\n                    onClick={this.handleClick}\r\n                    onDoubleClick={this.handleDoubleClick}\r\n                >\r\n                    {this.props.children}\r\n                    {collapsibleRowToggle}\r\n                </tr>\r\n                {collapsibleContentRow}\r\n            </React.Fragment>\r\n        );\r\n    }\r\n\r\n    private get columnCount(): number {\r\n        return React.Children.toArray(this.props.children).filter((child: React.ReactChild) =>\r\n            React.isValidElement(child)\r\n        ).length;\r\n    }\r\n\r\n    private handleClick = (e: React.MouseEvent<HTMLTableRowElement>) => {\r\n        if (!EventUtils.isClickingInsideElementWithClassname(e, 'dropdown')) {\r\n            this.props.onClick?.(e);\r\n            const isMulti = (e.metaKey || e.ctrlKey) && this.props.isMultiselect;\r\n            this.props.handleClick(isMulti);\r\n        }\r\n    };\r\n\r\n    private handleDoubleClick = () => {\r\n        _(this.props.actions)\r\n            .filter((action: IActionOptions) => action.callOnDoubleClick)\r\n            .forEach((action: IActionOptions) => {\r\n                if (action.link) {\r\n                    window.location.href = action.link;\r\n                } else if (action.trigger) {\r\n                    action.trigger();\r\n                }\r\n            });\r\n    };\r\n\r\n    private onToggleCollapsible = (e: React.MouseEvent<HTMLElement>) => {\r\n        e.preventDefault();\r\n        e.stopPropagation();\r\n\r\n        this.props.onCollapsibleClick(this.props.opened);\r\n    };\r\n}\r\n\r\nTableRowConnected.defaultProps = {\r\n    actions: [],\r\n    isMultiselect: false,\r\n    collapsible: {},\r\n};\r\n\r\nexport {TableRowConnected};\r\n"}}]);
//# sourceMappingURL=763.bundle.js.map