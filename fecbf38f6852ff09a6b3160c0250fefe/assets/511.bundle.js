(window.webpackJsonp=window.webpackJsonp||[]).push([[511],{1607:function(o,r,a){"use strict";a.r(r),r.default="import * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {closeModals} from './ModalActions';\r\nimport {\r\n    IModalBackdropDispatchProps,\r\n    IModalBackdropOwnProps,\r\n    IModalBackdropProps,\r\n    IModalBackdropStateProps,\r\n    ModalBackdrop,\r\n} from './ModalBackdrop';\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: IModalBackdropOwnProps): IModalBackdropStateProps => {\r\n    let modals = state.modals;\r\n    if (ownProps.displayFor && ownProps.displayFor.length > 0) {\r\n        modals = modals.filter((modal) => _.contains(ownProps.displayFor, modal.id));\r\n    }\r\n    const lastOpenedModal = _.last(state.openModals);\r\n\r\n    return {\r\n        display: modals.some((modal) => modal.isOpened),\r\n        lastOpened: modals.some((modal) => modal.id === lastOpenedModal),\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (\r\n    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,\r\n    ownProps: IModalBackdropOwnProps\r\n): IModalBackdropDispatchProps => ({\r\n    onClick: () => dispatch(closeModals(ownProps.displayFor)),\r\n});\r\n\r\n/**\r\n * @deprecated use ModalCompositeConnected instead\r\n */\r\nexport const ModalBackdropConnected: React.ComponentClass<IModalBackdropProps &\r\n    React.HTMLAttributes<HTMLDivElement>> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(ModalBackdrop);\r\n"}}]);
//# sourceMappingURL=511.bundle.js.map