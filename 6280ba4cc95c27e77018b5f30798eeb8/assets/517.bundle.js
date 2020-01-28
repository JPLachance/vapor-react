(window.webpackJsonp=window.webpackJsonp||[]).push([[517],{1622:function(o,r,n){"use strict";n.r(r),r.default="import {connect} from 'react-redux';\r\nimport {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {IModalDispatchProps, IModalOwnProps, IModalProps, IModalStateProps, Modal} from './Modal';\r\nimport {addModal, removeModal} from './ModalActions';\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: IModalOwnProps): IModalStateProps => {\r\n    return {\r\n        isOpened: state.modals.some((modal) => modal.id === ownProps.id && modal.isOpened),\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (\r\n    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,\r\n    ownProps: IModalOwnProps\r\n): IModalDispatchProps => ({\r\n    onRender: () => dispatch(addModal(ownProps.id, ownProps.openOnMount)),\r\n    onDestroy: () => dispatch(removeModal(ownProps.id)),\r\n});\r\n\r\n/**\r\n * @deprecated use ModalCompositeConnected instead\r\n */\r\nexport const ModalConnected: React.ComponentClass<IModalProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(Modal);\r\n"}}]);
//# sourceMappingURL=517.bundle.js.map