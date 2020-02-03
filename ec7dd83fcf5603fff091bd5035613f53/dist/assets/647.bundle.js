(window.webpackJsonp=window.webpackJsonp||[]).push([[647],{1750:function(e,t,o){"use strict";o.r(t),t.default="import {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {\r\n    IRadioSelectAllProps,\r\n    IRadioSelectDispatchProps,\r\n    IRadioSelectProps,\r\n    IRadioSelectStateProps,\r\n    RadioSelect,\r\n} from './RadioSelect';\r\nimport {removeRadioSelect, setRadioSelect} from './RadioSelectActions';\r\nimport {RadioSelectSelectors} from './RadioSelectSelectors';\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: IRadioSelectProps): IRadioSelectStateProps => ({\r\n    value: RadioSelectSelectors.getValue(state, {id: ownProps.id}),\r\n    disabledValues: RadioSelectSelectors.getDisabledValue(state, {id: ownProps.id}),\r\n});\r\n\r\nconst mapDispatchToProps = (dispatch: IDispatch): IRadioSelectDispatchProps => ({\r\n    onMount: (id: string, valueOnMount: string, disabledValuesOnMount?: string[]) =>\r\n        dispatch(setRadioSelect(id, {value: valueOnMount, disabledValues: disabledValuesOnMount})),\r\n    onUnmount: (id: string) => dispatch(removeRadioSelect(id)),\r\n    onChange: (value: string, id: string) => dispatch(setRadioSelect(id, {value})),\r\n});\r\n\r\nexport const RadioSelectConnected: React.ComponentClass<IRadioSelectAllProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(RadioSelect);\r\n"}}]);
//# sourceMappingURL=647.bundle.js.map