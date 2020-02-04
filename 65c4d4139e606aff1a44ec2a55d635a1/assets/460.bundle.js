(window.webpackJsonp=window.webpackJsonp||[]).push([[460],{1567:function(n,r,e){"use strict";e.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {TooltipPlacement} from '../../utils/TooltipUtils';\r\nimport {Svg} from '../svg/Svg';\r\nimport {Tooltip} from '../tooltip/Tooltip';\r\n\r\nexport interface ILabeledValueProps {\r\n    label: string;\r\n    value: React.ReactNode;\r\n    fullRow?: boolean;\r\n    information?: string;\r\n    informationPlacement?: TooltipPlacement;\r\n    padding?: boolean;\r\n    singleLine?: boolean;\r\n    className?: string;\r\n}\r\n\r\nexport class LabeledValue extends React.PureComponent<ILabeledValueProps> {\r\n    static defaultProps: Partial<ILabeledValueProps> = {\r\n        padding: true,\r\n    };\r\n\r\n    render() {\r\n        const informationSVG = !!this.props.information ? (\r\n            <Tooltip title={this.props.information} placement={this.props.informationPlacement || TooltipPlacement.Top}>\r\n                <Svg svgName=\"info-14\" svgClass=\"icon fill-medium-grey\" />\r\n            </Tooltip>\r\n        ) : null;\r\n\r\n        return (\r\n            <div\r\n                className={classNames(\r\n                    'box',\r\n                    {padded: this.props.padding, 'full-content-x': !!this.props.fullRow},\r\n                    this.props.className\r\n                )}\r\n            >\r\n                <header className={classNames('label', {'inline-block': this.props.singleLine})}>\r\n                    <span className={classNames({mr1: !!this.props.information})}>{this.props.label}</span>\r\n                    {informationSVG}\r\n                </header>\r\n                <section className={classNames('value', {'inline-block': this.props.singleLine})}>\r\n                    {this.props.value}\r\n                </section>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=460.bundle.js.map