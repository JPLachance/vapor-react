(window.webpackJsonp=window.webpackJsonp||[]).push([[369],{1466:function(e,r,n){"use strict";n.r(r),r.default="import * as React from 'react';\r\n\r\nexport interface IFacetMoreToggleOwnProps extends React.ClassAttributes<FacetMoreToggle> {\r\n    facet: string;\r\n    moreLabel?: string;\r\n}\r\n\r\nexport interface IFacetMoreToggleStateProps {\r\n    isOpened?: boolean;\r\n}\r\n\r\nexport interface IFacetMoreToggleDispatchProps {\r\n    onToggleMore?: (facet: string) => void;\r\n}\r\n\r\nexport interface IFacetMoreToggleProps\r\n    extends IFacetMoreToggleOwnProps,\r\n        IFacetMoreToggleStateProps,\r\n        IFacetMoreToggleDispatchProps {}\r\n\r\nexport const FACET_TOGGLE_MORE_LABEL: string = 'More';\r\n\r\nexport class FacetMoreToggle extends React.Component<IFacetMoreToggleProps, any> {\r\n    private handleOnChange = () => {\r\n        if (this.props.onToggleMore) {\r\n            this.props.onToggleMore(this.props.facet);\r\n        }\r\n    };\r\n\r\n    render() {\r\n        const isOpened: boolean = this.props.isOpened ? this.props.isOpened : false;\r\n        const moreClasses: string = 'facet-value facet-selectable facet-more' + (isOpened ? ' hidden' : '');\r\n        const moreLabel: string = this.props.moreLabel || FACET_TOGGLE_MORE_LABEL;\r\n\r\n        return (\r\n            <li className={moreClasses} onClick={(e) => e.nativeEvent.stopImmediatePropagation()}>\r\n                <label className=\"coveo-checkbox-label facet-value-label\">\r\n                    <input\r\n                        type=\"checkbox\"\r\n                        className=\"coveo-checkbox facet-checkbox-input\"\r\n                        onChange={() => this.handleOnChange()}\r\n                    />\r\n                    <span className=\"facet-more-button\"></span>\r\n                    <span className=\"label\">{moreLabel}</span>\r\n                </label>\r\n            </li>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=369.bundle.js.map