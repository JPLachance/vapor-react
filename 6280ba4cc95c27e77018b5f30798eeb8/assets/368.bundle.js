(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{1474:function(e,n,t){"use strict";t.r(n),n.default='import * as classNames from \'classnames\';\r\nimport * as React from \'react\';\r\nimport * as _ from \'underscore\';\r\nimport {Svg} from \'../svg/Svg\';\r\nimport {Tooltip} from \'../tooltip/Tooltip\';\r\nimport {IFacet} from \'./Facet\';\r\n\r\nexport interface IFacetRowProps extends React.ClassAttributes<FacetRow> {\r\n    facetRow: IFacet;\r\n    facet: string;\r\n    onToggleFacet: (facetRow: IFacet) => void;\r\n    isChecked: boolean;\r\n    maxTooltipLabelLength?: number;\r\n    enableExclusions?: boolean;\r\n    excludeTooltipMessage?(facetsRowName: string): string;\r\n}\r\n\r\nexport class FacetRow extends React.Component<IFacetRowProps, any> {\r\n    static defaultProps: Partial<IFacetRowProps> = {\r\n        maxTooltipLabelLength: 25,\r\n    };\r\n\r\n    get isExclude(): boolean {\r\n        return !!this.props.enableExclusions && !!this.props.facetRow.exclude;\r\n    }\r\n\r\n    render() {\r\n        const className: string = classNames(\'facet-value\', \'facet-selectable\', {\r\n            \'facet-exclude\': this.props.enableExclusions,\r\n        });\r\n        return (\r\n            <li className={className}>\r\n                {this.getExcludeCheckbox()}\r\n                <label\r\n                    className="coveo-checkbox-label facet-value-label"\r\n                    onClick={(e) => {\r\n                        // prevent event bubbling and trigger onToggleFacet only once no matter where you click on the row\r\n                        e.preventDefault();\r\n                        this.toggleFacet();\r\n                    }}\r\n                >\r\n                    <input\r\n                        type="checkbox"\r\n                        name={this.props.facetRow.name}\r\n                        className="coveo-checkbox facet-checkbox-input"\r\n                        checked={this.props.isChecked && !this.isExclude}\r\n                        onClick={this.stopEvent}\r\n                        onChange={_.noop}\r\n                    />\r\n                    <button type="button" className={this.props.isChecked && this.isExclude ? \'exclude-box\' : \'\'}>\r\n                        <Svg svgName="clear" className="icon hide exclude-icon" svgClass="fill-red" />\r\n                    </button>\r\n                    {this.getLabel()}\r\n                    {this.getCount()}\r\n                </label>\r\n            </li>\r\n        );\r\n    }\r\n\r\n    private getLabel(): JSX.Element {\r\n        const maxCalculatedNameLength = this.props.facetRow.count\r\n            ? this.props.maxTooltipLabelLength - this.props.facetRow.count.length\r\n            : this.props.maxTooltipLabelLength;\r\n\r\n        const className = classNames({\'text-exclude\': this.props.isChecked && this.isExclude});\r\n        const label: JSX.Element = <span className={className}>{this.props.facetRow.formattedName}</span>;\r\n\r\n        return this.props.facetRow.formattedName.length > maxCalculatedNameLength ? (\r\n            <Tooltip\r\n                title={this.props.facetRow.tooltipLabel || this.props.facetRow.formattedName}\r\n                placement="top"\r\n                className="label"\r\n            >\r\n                {label}\r\n            </Tooltip>\r\n        ) : (\r\n            <span className="label">{label}</span>\r\n        );\r\n    }\r\n\r\n    private getCount(): JSX.Element {\r\n        if (!_.isUndefined(this.props.facetRow.count)) {\r\n            return (\r\n                <span\r\n                    className={classNames(\'facet-value-count\', {\r\n                        \'text-exclude\': this.props.isChecked && this.isExclude,\r\n                    })}\r\n                >\r\n                    {this.props.facetRow.count}\r\n                </span>\r\n            );\r\n        }\r\n    }\r\n\r\n    private getExcludeCheckbox(): JSX.Element {\r\n        if (!!this.props.enableExclusions) {\r\n            return (\r\n                <div className="flex center-align facet-exclude-button" onClick={() => this.toggleFacetToExclude()}>\r\n                    <input\r\n                        type="checkbox"\r\n                        className="coveo-checkbox"\r\n                        checked={this.props.isChecked && this.isExclude}\r\n                        onClick={this.stopEvent}\r\n                        onChange={_.noop}\r\n                    />\r\n                    {this.getExcludeButton()}\r\n                </div>\r\n            );\r\n        }\r\n    }\r\n\r\n    private getExcludeButton(): JSX.Element {\r\n        return this.props.excludeTooltipMessage ? (\r\n            <Tooltip\r\n                className="exclude-button"\r\n                title={this.props.excludeTooltipMessage(this.props.facetRow.formattedName)}\r\n            >\r\n                <Svg svgName="exclude" className="icon" svgClass="fill-medium-grey" />\r\n            </Tooltip>\r\n        ) : (\r\n            <Svg svgName="exclude" className="exclude-button icon" svgClass="fill-medium-grey" />\r\n        );\r\n    }\r\n\r\n    private stopEvent(event: React.MouseEvent<HTMLInputElement>): void {\r\n        event.preventDefault();\r\n        event.stopPropagation();\r\n    }\r\n\r\n    private toggleFacetToExclude(): void {\r\n        this.props.onToggleFacet({...this.props.facetRow, exclude: !this.isExclude});\r\n    }\r\n\r\n    private toggleFacet(): void {\r\n        this.props.onToggleFacet({...this.props.facetRow, exclude: false});\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=368.bundle.js.map