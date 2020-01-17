(window.webpackJsonp=window.webpackJsonp||[]).push([[697],{1780:function(r,n,e){"use strict";e.r(n),n.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {ISideNavLoadingItemProps, SideNavigationLoadingItem} from '../SideNavigationLoadingItem';\r\n\r\ndescribe('<SideNavigationLoadingItem />', () => {\r\n    let wrapper: ReactWrapper<ISideNavLoadingItemProps, any>;\r\n\r\n    beforeEach(() => {\r\n        wrapper = mount(<SideNavigationLoadingItem />, {attachTo: document.getElementById('App')});\r\n    });\r\n\r\n    afterEach(() => {\r\n        wrapper.detach();\r\n    });\r\n\r\n    it('should render without errors', () => {\r\n        expect(() => {\r\n            shallow(<SideNavigationLoadingItem />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should render a <SideNavigationLoadingItem /> with classes prop', () => {\r\n        const className = 'mod-width-30';\r\n        wrapper\r\n            .setProps({className})\r\n            .mount()\r\n            .update();\r\n        expect(\r\n            wrapper\r\n                .find('div')\r\n                .first()\r\n                .hasClass(className)\r\n        ).toBe(true);\r\n    });\r\n\r\n    it('should render without errors', () => {\r\n        expect(() => {\r\n            shallow(<SideNavigationLoadingItem />);\r\n        }).not.toThrow();\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=697.bundle.js.map