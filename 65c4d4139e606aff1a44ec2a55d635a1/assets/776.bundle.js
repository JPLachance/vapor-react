(window.webpackJsonp=window.webpackJsonp||[]).push([[776],{1876:function(n,e,t){"use strict";t.r(e),e.default="import {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {Tooltip} from '../../tooltip/Tooltip';\r\nimport {ITabProps, Tab} from '../Tab';\r\n\r\ndescribe('Tab', () => {\r\n    const basicProps: ITabProps = {\r\n        title: 'tab title',\r\n    };\r\n\r\n    it('should render and unmount without errors', () => {\r\n        expect(() => {\r\n            const tab = shallow(<Tab {...basicProps} />);\r\n            tab.unmount();\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should call prop onRender on mounting if set', () => {\r\n        const onRenderSpy = jasmine.createSpy('onRender');\r\n\r\n        shallow(<Tab {...basicProps} onRender={onRenderSpy} />);\r\n\r\n        expect(onRenderSpy).toHaveBeenCalledTimes(1);\r\n    });\r\n\r\n    it('should call prop onDestroy when unmounting if set', () => {\r\n        const onDestroySpy = jasmine.createSpy('onDestroy');\r\n\r\n        const tab = shallow(<Tab {...basicProps} onDestroy={onDestroySpy} />);\r\n        tab.unmount();\r\n\r\n        expect(onDestroySpy).toHaveBeenCalledTimes(1);\r\n    });\r\n\r\n    it('should call prop onSelect when tab is clicked and prop is set', () => {\r\n        const onSelectSpy = jasmine.createSpy('onSelect');\r\n\r\n        const tab = shallow(<Tab {...basicProps} onSelect={onSelectSpy} />);\r\n        tab.simulate('click');\r\n\r\n        expect(onSelectSpy).toHaveBeenCalledTimes(1);\r\n    });\r\n\r\n    it('should should not call onSelect prop when clicking on the tab and disabled is true', () => {\r\n        const onSelectSpy = jasmine.createSpy('onSelect');\r\n\r\n        const tab = shallow(<Tab {...basicProps} onSelect={onSelectSpy} disabled />);\r\n        tab.simulate('click');\r\n\r\n        expect(onSelectSpy).not.toHaveBeenCalled();\r\n    });\r\n\r\n    it('should set active class on container when isActive is true', () => {\r\n        const tab = shallow(<Tab {...basicProps} isActive />);\r\n        expect(tab.hasClass('active')).toBe(true);\r\n    });\r\n\r\n    it('should set disabled class on container when disabled is true', () => {\r\n        const tab = shallow(<Tab {...basicProps} disabled />);\r\n\r\n        expect(tab.hasClass('enabled')).toBe(false);\r\n        expect(tab.hasClass('disabled')).toBe(true);\r\n    });\r\n\r\n    it('should render a Tooltip if the tooltip prop is not empty', () => {\r\n        const expectedTooltipText = 'I am a tooltip';\r\n        const tab = shallow(<Tab {...basicProps} tooltip={expectedTooltipText} />);\r\n\r\n        expect(tab.find(Tooltip).exists()).toBe(true);\r\n        expect(tab.find(Tooltip).props().title).toBe(expectedTooltipText);\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=776.bundle.js.map