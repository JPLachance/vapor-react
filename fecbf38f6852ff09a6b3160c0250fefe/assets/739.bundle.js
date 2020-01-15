(window.webpackJsonp=window.webpackJsonp||[]).push([[739],{1828:function(e,n,r){"use strict";r.r(n),n.default="import {shallow, ShallowWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {noop} from 'underscore';\r\n\r\nimport {ISubNavigationProps, SubNavigation} from '../SubNavigation';\r\n\r\ndescribe('SubNavigation', () => {\r\n    it('should render without errors', () => {\r\n        expect(() => shallow(<SubNavigation items={[]} selected=\"\" />)).not.toThrow();\r\n        expect(() => shallow(<SubNavigation items={[]} selected=\"hello\" />)).not.toThrow();\r\n        expect(() => shallow(<SubNavigation items={[{id: 'a', label: 'A'}]} selected=\"a\" />)).not.toThrow();\r\n        expect(() =>\r\n            shallow(\r\n                <SubNavigation\r\n                    items={[\r\n                        {id: 'a', label: 'A'},\r\n                        {id: 'b', label: 'B'},\r\n                    ]}\r\n                    selected=\"b\"\r\n                />\r\n            )\r\n        ).not.toThrow();\r\n        expect(() =>\r\n            shallow(<SubNavigation items={[{id: 'a', label: 'A'}]} selected=\"not-existing-id\" />)\r\n        ).not.toThrow();\r\n    });\r\n\r\n    it('should call onRender when the element is created', () => {\r\n        const spy = jasmine.createSpy('onRender');\r\n        shallow(<SubNavigation items={[]} defaultSelected=\"\" onRender={spy} />);\r\n\r\n        expect(spy).toHaveBeenCalledTimes(1);\r\n    });\r\n\r\n    it('should call onDestroy when the element is created', () => {\r\n        const spy = jasmine.createSpy('onDestroy');\r\n        const subNav = shallow(<SubNavigation items={[]} defaultSelected=\"\" onDestroy={spy} />);\r\n        subNav.unmount();\r\n\r\n        expect(spy).toHaveBeenCalledTimes(1);\r\n    });\r\n\r\n    describe('<SubNavigation />', () => {\r\n        let subNavigation: ShallowWrapper<ISubNavigationProps>;\r\n        const basicProps: ISubNavigationProps = {\r\n            items: [\r\n                {id: 'a', label: 'A'},\r\n                {id: 'b', label: 'B'},\r\n            ],\r\n        };\r\n\r\n        it('should render one navigation link per item', () => {\r\n            subNavigation = shallow(<SubNavigation {...basicProps} />);\r\n\r\n            expect(subNavigation.find('li').length).toBe(basicProps.items.length);\r\n        });\r\n\r\n        it('should have the \"mod-selected\" class on the selected item', () => {\r\n            const selectedItem = 'b';\r\n\r\n            subNavigation = shallow(<SubNavigation {...basicProps} selected={selectedItem} />);\r\n\r\n            expect(\r\n                subNavigation\r\n                    .find('li')\r\n                    .findWhere((node) => node.key() === selectedItem)\r\n                    .hasClass('mod-selected')\r\n            ).toBe(true);\r\n        });\r\n\r\n        it('should call the onClickItem prop when clicking on an item', () => {\r\n            const clickedItem = 'b';\r\n            const spy = jasmine.createSpy('onClickItem');\r\n\r\n            subNavigation = shallow(<SubNavigation {...basicProps} onClickItem={spy} />);\r\n            subNavigation\r\n                .find('li')\r\n                .findWhere((node) => node.key() === clickedItem)\r\n                .find('.sub-navigation-item-link')\r\n                .simulate('click', {preventDefault: noop});\r\n\r\n            expect(spy).toHaveBeenCalledTimes(1);\r\n            expect(spy).toHaveBeenCalledWith(clickedItem);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=739.bundle.js.map