(window.webpackJsonp=window.webpackJsonp||[]).push([[744],{1832:function(r,n,o){"use strict";o.r(n),n.default='import * as React from \'react\';\r\nimport * as _ from \'underscore\';\r\nimport {defaultSvgProps, defaultTooltipProps} from \'../../../utils/tests/TestUtils\';\r\nimport {ILinkSvgProps, LinkSvg} from \'../LinkSvg\';\r\n\r\nexport class LinkSvgExamples extends React.Component<any, any> {\r\n    render() {\r\n        const defaultProps: ILinkSvgProps = {\r\n            url: \'https://www.google.ca\',\r\n            target: \'_blank\',\r\n        };\r\n\r\n        return (\r\n            <div className="mt2">\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Default LinkSvg</label>\r\n                    <div className="form-control">\r\n                        <LinkSvg {...defaultProps} />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">LinkSvg with a tooltip</label>\r\n                    <div className="form-control">\r\n                        <LinkSvg {..._.extend({}, defaultProps, {tooltip: defaultTooltipProps})} />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">LinkSvg with a custom svg</label>\r\n                    <div className="form-control">\r\n                        <LinkSvg {..._.extend({}, defaultProps, {svg: defaultSvgProps})} />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">LinkSvg with a tooltip and without a href</label>\r\n                    <div className="form-control">\r\n                        <LinkSvg tooltip={defaultTooltipProps} svg={defaultSvgProps} />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=744.bundle.js.map