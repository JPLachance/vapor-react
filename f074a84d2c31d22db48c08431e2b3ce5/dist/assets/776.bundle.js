(window.webpackJsonp=window.webpackJsonp||[]).push([[776],{1864:function(n,t,e){"use strict";e.r(t),t.default="import * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {IDispatch} from '../../utils/ReduxUtils';\r\nimport {TableHOCRowActions} from './actions/TableHOCRowActions';\r\nimport {ITableHOCOwnProps} from './TableHOC';\r\nimport {TableSelectors} from './TableSelectors';\r\n\r\nexport interface ITableWithActionsProps extends ITableHOCOwnProps {}\r\n\r\ntype TableWithActionsComponent = React.ComponentClass<ITableWithActionsProps>;\r\n\r\nexport const tableWithActions = () => (Component: TableWithActionsComponent): TableWithActionsComponent => {\r\n    const mapStateToProps = (state: IReactVaporState, ownProps: ITableHOCOwnProps) => ({\r\n        hasSelectedRow: TableSelectors.getSelectedRows(state, ownProps).length > 0,\r\n    });\r\n\r\n    const mapDispatchToProps = (dispatch: IDispatch, ownProps: ITableHOCOwnProps) => ({\r\n        deselectRows: () => dispatch(TableHOCRowActions.deselectAll(ownProps.id)),\r\n    });\r\n\r\n    class TableWithActions extends React.Component<\r\n        ITableWithActionsProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>\r\n    > {\r\n        componentDidMount() {\r\n            document.addEventListener('mousedown', this.handleDocumentClick);\r\n        }\r\n\r\n        componentWillUnmount() {\r\n            document.removeEventListener('mousedown', this.handleDocumentClick);\r\n        }\r\n\r\n        render() {\r\n            return (\r\n                <Component {..._.omit(this.props, 'hasSelectedRow', 'deselectRows')} hasActionButtons>\r\n                    {this.props.children}\r\n                </Component>\r\n            );\r\n        }\r\n\r\n        private handleDocumentClick = (e: MouseEvent) => {\r\n            if (this.props.hasSelectedRow && document.body.contains(e.target as HTMLElement)) {\r\n                const target = e.target as HTMLElement;\r\n                const isNotInTable = !target.closest('.table-container');\r\n\r\n                if (isNotInTable) {\r\n                    this.props.deselectRows();\r\n                }\r\n            }\r\n        };\r\n    }\r\n\r\n    return connect(mapStateToProps, mapDispatchToProps)(TableWithActions);\r\n};\r\n"}}]);
//# sourceMappingURL=776.bundle.js.map