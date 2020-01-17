(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{1402:function(o,r,p){"use strict";p.r(r),r.default="import * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {SlideY} from '../../../animations/SlideY';\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {PropsToOmitUtils} from '../../../utils/PropsToOmitUtils';\r\nimport {ReduxConnect} from '../../../utils/ReduxUtils';\r\nimport {DropPodPosition} from '../DomPositionCalculator';\r\nimport {Drop, IDropOwnProps, IDropProps, IDropStateProps} from '../Drop';\r\nimport {DefaultGroupIds} from '../redux/DropActions';\r\nimport {DropSelectors} from '../redux/DropReducers';\r\n\r\nexport type DropWithDropdownComponent<T = IDropProps> = React.ComponentClass<IDropProps>;\r\n\r\nconst mapStateToProps = (state: IReactVaporState, {id, groupId}: IDropOwnProps): IDropStateProps => ({\r\n    isOpen: DropSelectors.isOpen(state, {id, groupId}),\r\n});\r\n\r\nexport const dropWithDropdown = () => (Component: DropWithDropdownComponent): DropWithDropdownComponent => {\r\n    @ReduxConnect(mapStateToProps)\r\n    class DropWithDropdown extends React.PureComponent<IDropProps> {\r\n        static defaultProps: Partial<IDropProps>;\r\n\r\n        render() {\r\n            return (\r\n                <Component {..._.omit(this.props, PropsToOmitUtils.internal)}>\r\n                    <SlideY in={this.props.isOpen}>{this.props.children}</SlideY>\r\n                </Component>\r\n            );\r\n        }\r\n    }\r\n\r\n    DropWithDropdown.defaultProps = {\r\n        ...Drop.defaultProps,\r\n        positions: [DropPodPosition.bottom, DropPodPosition.top],\r\n        groupId: DefaultGroupIds.dropdown,\r\n    };\r\n\r\n    return DropWithDropdown;\r\n};\r\n"}}]);
//# sourceMappingURL=312.bundle.js.map