(window.webpackJsonp=window.webpackJsonp||[]).push([[869],{1951:function(n,r,s){"use strict";s.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {ILinkSvgProps, LinkSvg} from '../svg/LinkSvg';\r\nimport {Tooltip} from '../tooltip/Tooltip';\r\n\r\nexport interface ITitleProps {\r\n    prefix?: string;\r\n    text: React.ReactNode;\r\n    withTitleTooltip?: boolean;\r\n    documentationLink?: ILinkSvgProps;\r\n    classes?: string[];\r\n}\r\n\r\nexport const Title: React.FunctionComponent<ITitleProps> = (props) => {\r\n    const linkClasses = classNames('inline-doc-link', props.documentationLink && props.documentationLink.linkClasses);\r\n    const titleClasses: string = classNames('bold', 'text-medium-blue', 'mr1', 'truncate', props.classes);\r\n    const prefixClasses: string = classNames({mr1: !_.isEmpty(props.prefix)});\r\n\r\n    const linkIcon = props.documentationLink && <LinkSvg {...props.documentationLink} linkClasses={[linkClasses]} />;\r\n    const tooltipProps = _.isString(props.text) ? {title: props.text} : {};\r\n    const title = props.withTitleTooltip ? (\r\n        <Tooltip {...tooltipProps} placement=\"left\">\r\n            {props.text}\r\n        </Tooltip>\r\n    ) : (\r\n        props.text\r\n    );\r\n\r\n    return (\r\n        <div className=\"flex flex-center full-content-x\">\r\n            <h1 className={titleClasses}>\r\n                <span className={prefixClasses}>{props.prefix}</span>\r\n                {title}\r\n            </h1>\r\n            {linkIcon}\r\n            {props.children}\r\n        </div>\r\n    );\r\n};\r\n\r\nTitle.defaultProps = {\r\n    prefix: '',\r\n    withTitleTooltip: false,\r\n};\r\n"}}]);
//# sourceMappingURL=869.bundle.js.map