(window.webpackJsonp=window.webpackJsonp||[]).push([[419],{1516:function(r,e,t){"use strict";t.r(e),e.default="import * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {ITitleProps, Title} from '../title/Title';\r\nimport {HeaderWrapper, IHeaderWrapperProps} from './HeaderWrapper';\r\n\r\nexport interface IBasicHeaderProps extends IHeaderWrapperProps {\r\n    title: ITitleProps;\r\n}\r\n\r\nexport class BasicHeader extends React.Component<IBasicHeaderProps, {}> {\r\n    static defaultProps: Partial<IBasicHeaderProps> = _.extend(\r\n        {\r\n            title: {\r\n                text: '',\r\n            },\r\n            classes: [],\r\n        },\r\n        HeaderWrapper.defaultProps\r\n    );\r\n\r\n    render() {\r\n        return (\r\n            <HeaderWrapper {..._.omit(this.props, 'title')}>\r\n                <Title {...this.props.title}>{this.props.children}</Title>\r\n            </HeaderWrapper>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=419.bundle.js.map