(window.webpackJsonp=window.webpackJsonp||[]).push([[433],{1529:function(o,n,r){"use strict";r.r(n),n.default='import * as React from \'react\';\r\nimport {CollapsibleConnected} from \'../../collapsible/CollapsibleConnected\';\r\nimport {InfoBox} from \'../InfoBox\';\r\nimport {InfoBoxFooter} from \'../InfoBoxFooter\';\r\nimport {InfoBoxLink} from \'../InfoBoxLink\';\r\n\r\nexport class InfoBoxExamples extends React.PureComponent {\r\n    render() {\r\n        return (\r\n            <div className="mt2">\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Empty InfoBox</label>\r\n                    <InfoBox />\r\n                </div>\r\n\r\n                <div className="form-group">\r\n                    <label className="form-control-label">InfoBox</label>\r\n                    <InfoBox>Some information about the current component.</InfoBox>\r\n                </div>\r\n\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Collapsible InfoBox</label>\r\n                    <InfoBox className="py0">\r\n                        <CollapsibleConnected\r\n                            headerClasses="py2"\r\n                            id="info-box-collapsible"\r\n                            headerContent={<p className="bold">Collapsible header</p>}\r\n                            expandedOnMount\r\n                        >\r\n                            <div className="pb2">\r\n                                <p>Some information about the current component.</p>\r\n                                <p className="mt2">Or some other piece of information</p>\r\n                            </div>\r\n                        </CollapsibleConnected>\r\n                    </InfoBox>\r\n                </div>\r\n\r\n                <div className="form-group">\r\n                    <label className="form-control-label">InfoBox with a link in the footer</label>\r\n                    <InfoBox>\r\n                        Some information about the current component.\r\n                        <InfoBoxFooter>\r\n                            <InfoBoxLink>More information about the current component</InfoBoxLink>\r\n                        </InfoBoxFooter>\r\n                    </InfoBox>\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=433.bundle.js.map