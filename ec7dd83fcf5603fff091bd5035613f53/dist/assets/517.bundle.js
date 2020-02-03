(window.webpackJsonp=window.webpackJsonp||[]).push([[517],{1622:function(o,t,r){"use strict";r.r(t),t.default="import * as React from 'react';\r\nimport * as ReactModal from 'react-modal';\r\nimport {connect} from 'react-redux';\r\n\r\nimport {IWithDirtyProps} from '../../hoc/withDirty/withDirty';\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {addModal, closeModal, removeModal} from './ModalActions';\r\nimport {\r\n    IModalCompositeDispatchProps,\r\n    IModalCompositeOwnProps,\r\n    IModalCompositeProps,\r\n    IModalCompositeStateProps,\r\n    ModalComposite,\r\n} from './ModalComposite';\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: IModalCompositeOwnProps): IModalCompositeStateProps => ({\r\n    withReduxState: true,\r\n    isOpened: state.modals && state.modals.some((modal) => modal.id === ownProps.id && modal.isOpened),\r\n    layer: state.openModals ? state.openModals.indexOf(ownProps.id) + 1 : 0,\r\n});\r\n\r\nconst mapDispatchToProps = (dispatch: IDispatch, ownProps: IModalCompositeOwnProps): IModalCompositeDispatchProps => ({\r\n    onRender: () => dispatch(addModal(ownProps.id, ownProps.openOnMount)),\r\n    onDestroy: () => dispatch(removeModal(ownProps.id)),\r\n    onClose: () => dispatch(closeModal(ownProps.id)),\r\n});\r\n\r\nexport const ModalCompositeConnected: React.ComponentClass<IModalCompositeProps &\r\n    Partial<ReactModal.Props> &\r\n    Partial<IWithDirtyProps>> = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(ModalComposite);\r\n"}}]);
//# sourceMappingURL=517.bundle.js.map