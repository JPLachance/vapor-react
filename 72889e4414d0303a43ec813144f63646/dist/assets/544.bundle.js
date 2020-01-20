(window.webpackJsonp=window.webpackJsonp||[]).push([[544],{1640:function(n,r,e){"use strict";e.r(r),r.default="import * as React from 'react';\r\nimport {ConfigSupplier, HocUtils} from '../../../utils/HocUtils';\r\nimport {\r\n    IMultilineBoxDispatchProps,\r\n    IMultilineBoxOwnProps,\r\n    IMultilineParentProps,\r\n    IMultilineSingleBoxProps,\r\n} from '../MultilineBox';\r\n\r\ntype MultilineBoxContainerComponent<T = any> = React.ComponentClass<IMultilineBoxOwnProps<T>>;\r\n\r\nexport interface IMultilineBoxContainerSupplierProps<T = any> {\r\n    containerNode?: (\r\n        child: React.ReactNode,\r\n        data: Array<IMultilineSingleBoxProps<T>>,\r\n        index: number\r\n    ) => React.ReactNode;\r\n}\r\n\r\nexport interface IMultilineBoxContainerProps<T>\r\n    extends IMultilineBoxContainerSupplierProps<T>,\r\n        IMultilineBoxOwnProps<T>,\r\n        Partial<IMultilineBoxDispatchProps> {}\r\n\r\nconst defaultContainerNode = (child: React.ReactNode, data: IMultilineSingleBoxProps[], index: number) => (\r\n    <div key={`${(data.length && data[index].id) || index}Container`}>{child}</div>\r\n);\r\n\r\nexport const multilineBoxContainer = (\r\n    supplier: ConfigSupplier<IMultilineBoxContainerSupplierProps> = {containerNode: defaultContainerNode}\r\n) => (Component: MultilineBoxContainerComponent): MultilineBoxContainerComponent => {\r\n    class MultilineBoxContainer<T> extends React.PureComponent<IMultilineBoxContainerProps<T>> {\r\n        static defaultProps = {\r\n            renderBody: () => <div />,\r\n        };\r\n\r\n        private getWrapper(children: React.ReactNode, data: Array<IMultilineSingleBoxProps<T>>) {\r\n            return React.Children.map(children, (child: React.ReactNode, index: number) =>\r\n                HocUtils.supplyConfig(supplier).containerNode(child, data, index)\r\n            );\r\n        }\r\n\r\n        render() {\r\n            return (\r\n                <Component\r\n                    {...this.props}\r\n                    renderBody={(boxProps: Array<IMultilineSingleBoxProps<T>>, parentProps: IMultilineParentProps) =>\r\n                        this.getWrapper(this.props.renderBody(boxProps, parentProps), boxProps)\r\n                    }\r\n                >\r\n                    {this.props.children}\r\n                </Component>\r\n            );\r\n        }\r\n    }\r\n\r\n    return MultilineBoxContainer;\r\n};\r\n"}}]);
//# sourceMappingURL=544.bundle.js.map