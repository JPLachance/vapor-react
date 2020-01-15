(window.webpackJsonp=window.webpackJsonp||[]).push([[697],{1787:function(n,e,i){"use strict";i.r(e),e.default='import * as React from \'react\';\r\n\r\nimport {SideNavigation} from \'../SideNavigation\';\r\nimport {SideNavigationItem} from \'../SideNavigationItem\';\r\nimport {SideNavigationLoadingItem} from \'../SideNavigationLoadingItem\';\r\nimport {SideNavigationMenuSection} from \'../SideNavigationMenuSection\';\r\n\r\nexport class SideNavigationExample extends React.Component<any, any> {\r\n    constructor(prop: any, state: any) {\r\n        super(prop, state);\r\n\r\n        this.state = {\r\n            expanded: true,\r\n        };\r\n    }\r\n\r\n    click() {\r\n        this.setState({\r\n            expanded: !this.state.expanded,\r\n        });\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className="mt2">\r\n                <label className="form-control-label">Side Navigation</label>\r\n                <div className="flex flex-row flex-stretch">\r\n                    <SideNavigation>\r\n                        <SideNavigationMenuSection title="Section 1" svgName="identity-user">\r\n                            <SideNavigationItem isActive href="http://coveo.com" title="Link to Coveo" />\r\n                            <SideNavigationItem href="http://coveo.com" title="Another link to Coveo" />\r\n                        </SideNavigationMenuSection>\r\n                        <SideNavigationMenuSection title="Section 2">\r\n                            <SideNavigationLoadingItem className="mod-width-30" />\r\n                            <SideNavigationLoadingItem className="mod-width-50" />\r\n                            <SideNavigationLoadingItem className="mod-width-40" />\r\n                        </SideNavigationMenuSection>\r\n                        <SideNavigationMenuSection\r\n                            title="Collapsible Section"\r\n                            svgName="menu-content"\r\n                            expandable\r\n                            expanded={this.state.expanded}\r\n                            onClick={() => this.click()}\r\n                        >\r\n                            <SideNavigationItem>\r\n                                <a href="http://coveo.com" title="Link to Coveo">\r\n                                    Link to Coveo\r\n                                </a>\r\n                            </SideNavigationItem>\r\n                            <SideNavigationItem>\r\n                                <a href="http://coveo.com" title="Link to Coveo">\r\n                                    Another link to Coveo\r\n                                </a>\r\n                            </SideNavigationItem>\r\n                        </SideNavigationMenuSection>\r\n                    </SideNavigation>\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=697.bundle.js.map