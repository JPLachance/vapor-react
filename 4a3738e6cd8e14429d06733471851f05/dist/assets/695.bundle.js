(window.webpackJsonp=window.webpackJsonp||[]).push([[695],{1778:function(e,t,r){"use strict";r.r(t),t.default="import {shallow, ShallowWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {SideNavigationItem, SideNavigationItemProps} from '../SideNavigationItem';\r\n\r\ndescribe('SideNavigationItem', () => {\r\n    let item: ShallowWrapper<SideNavigationItemProps>;\r\n\r\n    afterEach(() => {\r\n        if (item && item.exists()) {\r\n            item.unmount();\r\n        }\r\n    });\r\n\r\n    it('should render and unmount without errors', () => {\r\n        expect(() => {\r\n            item = shallow(<SideNavigationItem />);\r\n            item.unmount();\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should have the .state-active class when \"isActive\" prop is set to true', () => {\r\n        item = shallow(<SideNavigationItem isActive />);\r\n        expect(item.hasClass('state-active')).toBe(true);\r\n    });\r\n\r\n    it('should render an anchor tag if the \"href\" and \"title\" props are specified', () => {\r\n        item = shallow(<SideNavigationItem href=\"http://www.perdu.com\" title=\"Perdu ?\" />);\r\n\r\n        expect(item.type()).toBe('a');\r\n    });\r\n\r\n    it('should render a div tag if the \"href\" and \"title\" props are not specified', () => {\r\n        item = shallow(\r\n            <SideNavigationItem>\r\n                <a href=\"http://www.perdu.com\">Perdu ?</a>\r\n            </SideNavigationItem>\r\n        );\r\n\r\n        expect(item.type()).toBe('div');\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=695.bundle.js.map