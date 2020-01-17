(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{1336:function(n,r,e){"use strict";e.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\n\r\nimport {SlideY} from '../../animations/SlideY';\r\nimport {CollapsibleToggle} from './CollapsibleToggle';\r\n\r\nexport interface CollapsibleOwnProps {\r\n    id: string;\r\n    expandedOnMount?: boolean;\r\n    headerContent?: React.ReactNode;\r\n    headerClasses?: string;\r\n    toggleIconClassName?: string;\r\n    className?: string;\r\n    withBorders?: boolean;\r\n}\r\n\r\nexport interface CollapsibleStateProps {\r\n    expanded?: boolean;\r\n}\r\n\r\nexport interface CollapsibleDispatchProps {\r\n    onMount?: () => void;\r\n    onUnmount?: () => void;\r\n    onToggleExpandedState?: (currentExpandedState: boolean) => void;\r\n}\r\n\r\nexport interface CollapsibleProps extends CollapsibleOwnProps, CollapsibleStateProps, CollapsibleDispatchProps {}\r\n\r\nexport class Collapsible extends React.Component<CollapsibleProps> {\r\n    static TIMEOUT = 150;\r\n\r\n    componentWillMount() {\r\n        this.props.onMount?.();\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        this.props.onUnmount?.();\r\n    }\r\n\r\n    render() {\r\n        const headerClasses = classNames('cursor-pointer flex space-between center-align', this.props.headerClasses, {\r\n            'mod-border-bottom mod-border-top': this.props.withBorders,\r\n        });\r\n\r\n        return (\r\n            <div className={classNames(this.props.className)}>\r\n                <div className={headerClasses} onClick={() => this.handleHeaderClick()}>\r\n                    {this.props.headerContent}\r\n                    <CollapsibleToggle\r\n                        expanded={this.props.expanded}\r\n                        svgClassName={this.props.toggleIconClassName}\r\n                        className=\"mr2\"\r\n                    />\r\n                </div>\r\n                <SlideY\r\n                    id={this.props.id}\r\n                    in={this.props.expanded}\r\n                    timeout={Collapsible.TIMEOUT}\r\n                    duration={Collapsible.TIMEOUT}\r\n                >\r\n                    {this.props.children}\r\n                </SlideY>\r\n            </div>\r\n        );\r\n    }\r\n\r\n    private handleHeaderClick() {\r\n        this.props.onToggleExpandedState?.(this.props.expanded);\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=244.bundle.js.map