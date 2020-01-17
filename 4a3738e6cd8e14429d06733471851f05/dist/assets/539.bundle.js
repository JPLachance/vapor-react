(window.webpackJsonp=window.webpackJsonp||[]).push([[539],{1628:function(n,r,t){"use strict";t.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as VaporSVG from 'coveo-styleguide';\r\nimport * as React from 'react';\r\nimport {removeValueStringList} from '../../../reusableState/customList/StringListActions';\r\nimport {ConfigSupplier, HocUtils} from '../../../utils/HocUtils';\r\nimport {IDispatch, ReduxConnect} from '../../../utils/ReduxUtils';\r\nimport {Button, IButtonProps} from '../../button/Button';\r\nimport {Svg} from '../../svg/Svg';\r\nimport {\r\n    IMultilineBoxDispatchProps,\r\n    IMultilineBoxOwnProps,\r\n    IMultilineParentProps,\r\n    IMultilineSingleBoxProps,\r\n} from '../MultilineBox';\r\n\r\ntype MultilineBoxWithRemoveButtonComponent<T = any> = React.ComponentClass<IMultilineBoxOwnProps<T>>;\r\n\r\nexport interface IMultilineBoxWithRemoveButtonSupplierProps<T = any> {\r\n    containerNode?: (\r\n        child: React.ReactNode,\r\n        getRemoveButton: (props?: Partial<IButtonProps>) => React.ReactNode,\r\n        data: Array<IMultilineSingleBoxProps<T>>,\r\n        index: number\r\n    ) => React.ReactNode;\r\n}\r\n\r\nexport interface IMultilineBoxWithRemoveButtonProps<T>\r\n    extends IMultilineBoxWithRemoveButtonSupplierProps<T>,\r\n        IMultilineBoxOwnProps<T>,\r\n        Partial<IMultilineBoxDispatchProps> {}\r\n\r\nconst defaultContainerNode = (\r\n    child: React.ReactNode,\r\n    getRemoveButton: (props?: Partial<IButtonProps>) => React.ReactNode,\r\n    data: IMultilineSingleBoxProps[],\r\n    index: number\r\n) => (\r\n    <React.Fragment key={`${(data.length && data[index].id) || index}RemoveButton`}>\r\n        {child}\r\n        {getRemoveButton()}\r\n    </React.Fragment>\r\n);\r\n\r\nexport const defaultMultilineBoxRemoveButtonClasses: string = 'center-align mod-no-border';\r\n\r\nexport const multilineBoxWithRemoveButton = (\r\n    supplier: ConfigSupplier<IMultilineBoxWithRemoveButtonSupplierProps> = {containerNode: defaultContainerNode}\r\n) => (Component: MultilineBoxWithRemoveButtonComponent): MultilineBoxWithRemoveButtonComponent => {\r\n    const mapDispatchToProps = (\r\n        dispatch: IDispatch,\r\n        ownProps: IMultilineBoxOwnProps\r\n    ): Partial<IMultilineBoxDispatchProps> => ({\r\n        removeBox: (id: string) => dispatch(removeValueStringList(ownProps.id, id)),\r\n    });\r\n\r\n    @ReduxConnect(null, mapDispatchToProps)\r\n    class MultilineBoxWithRemoveButton<T> extends React.PureComponent<IMultilineBoxWithRemoveButtonProps<T>> {\r\n        static defaultProps = {\r\n            renderBody: () => <div />,\r\n        };\r\n\r\n        private getRemoveButtonNode(\r\n            data: Partial<IMultilineSingleBoxProps<T>> = {},\r\n            props: Partial<IButtonProps> = {}\r\n        ) {\r\n            return (\r\n                <Button\r\n                    classes={[\r\n                        classNames(defaultMultilineBoxRemoveButtonClasses, {\r\n                            'cursor-pointer': !data.isLast,\r\n                        }),\r\n                    ]}\r\n                    style={{\r\n                        visibility: !data.isLast ? 'visible' : 'hidden',\r\n                    }}\r\n                    onClick={() => !data.isLast && this.props.removeBox(data.id)}\r\n                    enabled={!data.isLast}\r\n                    {...props}\r\n                >\r\n                    <Svg\r\n                        svgName={VaporSVG.svg.remove.name}\r\n                        className=\"icon fill-medium-blue mod-18\"\r\n                        style={{\r\n                            visibility: !data.isLast ? 'visible' : 'hidden',\r\n                        }}\r\n                    />\r\n                </Button>\r\n            );\r\n        }\r\n\r\n        private getWrapper(children: React.ReactNode, data: Array<IMultilineSingleBoxProps<T>>) {\r\n            return React.Children.map(children, (child: React.ReactNode, index: number) =>\r\n                HocUtils.supplyConfig(supplier).containerNode(\r\n                    child,\r\n                    (props?: Partial<IButtonProps>) => this.getRemoveButtonNode(data[index], props),\r\n                    data,\r\n                    index\r\n                )\r\n            );\r\n        }\r\n\r\n        render() {\r\n            return (\r\n                <Component\r\n                    {...this.props}\r\n                    renderBody={(boxProps: Array<IMultilineSingleBoxProps<T>>, parentProps: IMultilineParentProps) =>\r\n                        this.getWrapper(this.props.renderBody(boxProps, parentProps), boxProps)\r\n                    }\r\n                >\r\n                    {this.props.children}\r\n                </Component>\r\n            );\r\n        }\r\n    }\r\n\r\n    return MultilineBoxWithRemoveButton;\r\n};\r\n"}}]);
//# sourceMappingURL=539.bundle.js.map