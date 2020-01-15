(window.webpackJsonp=window.webpackJsonp||[]).push([[736],{1824:function(n,t,o){"use strict";o.r(t),t.default="import {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {\r\n    ISubNavigationDispatchProps,\r\n    ISubNavigationOwnProps,\r\n    ISubNavigationProps,\r\n    ISubNavigationStateProps,\r\n    SubNavigation,\r\n} from './SubNavigation';\r\nimport {addSubNavigation, removeSubNavigation, selectSubNavigation} from './SubNavigationActions';\r\nimport {ISubNavigationState} from './SubNavigationReducers';\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: ISubNavigationOwnProps): ISubNavigationStateProps => {\r\n    const item: ISubNavigationState = _.findWhere(state.subNavigations, {id: ownProps.id});\r\n    return {\r\n        selected: item ? item.selected : '',\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (\r\n    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,\r\n    ownProps: ISubNavigationOwnProps\r\n): ISubNavigationDispatchProps => ({\r\n    onRender: () =>\r\n        dispatch(\r\n            addSubNavigation(\r\n                ownProps.id,\r\n                ownProps.defaultSelected ? [ownProps.defaultSelected] : _.pluck(ownProps.items, 'id')\r\n            )\r\n        ),\r\n    onDestroy: () => dispatch(removeSubNavigation(ownProps.id)),\r\n    onClickItem: (itemId) => dispatch(selectSubNavigation(ownProps.id, itemId)),\r\n});\r\n\r\nexport const SubNavigationConnected: React.ComponentClass<ISubNavigationProps &\r\n    React.HTMLAttributes<HTMLElement>> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(SubNavigation);\r\n"}}]);
//# sourceMappingURL=736.bundle.js.map