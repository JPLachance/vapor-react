(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{1232:function(t,r,e){"use strict";e.r(r),r.default='import * as React from \'react\';\r\nimport {Svg} from \'../../svg/Svg\';\r\nimport {ITooltipProps, Tooltip} from \'../../tooltip/Tooltip\';\r\n\r\nexport interface IItemFilterProps extends React.ClassAttributes<ItemFilter> {\r\n    label: string;\r\n    item: string;\r\n    itemTooltipProps?: ITooltipProps;\r\n    onClear: () => void;\r\n    crop?: number;\r\n}\r\n\r\nexport const ELLIPSIS: string = \'...\';\r\n\r\nexport class ItemFilter extends React.Component<IItemFilterProps, any> {\r\n    render() {\r\n        let itemFilterText: string = this.props.item;\r\n        if (this.props.crop) {\r\n            const itemFilterLength: number = itemFilterText.length;\r\n\r\n            if (itemFilterLength > Math.abs(this.props.crop)) {\r\n                itemFilterText =\r\n                    this.props.crop > 0\r\n                        ? itemFilterText.substring(0, this.props.crop) + ELLIPSIS\r\n                        : ELLIPSIS + itemFilterText.substring(itemFilterLength + this.props.crop, itemFilterLength);\r\n            }\r\n        }\r\n\r\n        const itemFilter: JSX.Element = this.props.itemTooltipProps ? (\r\n            <Tooltip {...this.props.itemTooltipProps}>\r\n                <span className="item-filter-item">{itemFilterText}</span>\r\n            </Tooltip>\r\n        ) : (\r\n            <span className="item-filter-item">{itemFilterText}</span>\r\n        );\r\n\r\n        return (\r\n            <div className="coveo-table-actions item-filter">\r\n                <span className="item-filter-label">{this.props.label}: </span>\r\n                {itemFilter}\r\n                <button className="item-filter-clear" onClick={() => this.props.onClear()}>\r\n                    <Svg svgName="clear" svgClass="icon fill-dark-blue" />\r\n                </button>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=130.bundle.js.map