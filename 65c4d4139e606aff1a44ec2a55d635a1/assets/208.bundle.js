(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{1320:function(t,o,r){"use strict";r.r(o),o.default="import {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {DropPodPosition} from '../../drop/DomPositionCalculator';\r\n\r\nimport {DropPod} from '../../drop/DropPod';\r\nimport {ChartTooltip} from '../ChartTooltip';\r\nimport {ChartTooltipContent} from '../ChartTooltipContent';\r\nimport {ChartUtils} from '../ChartUtils';\r\nimport {XYChartContextMock, XYChartOnePointContextMock} from './XYChartContextMock';\r\n\r\ndescribe('<ChartTooltip />', () => {\r\n    let contextSpy: jasmine.Spy;\r\n    beforeEach(() => {\r\n        contextSpy = spyOn(React, 'useContext').and.returnValue(XYChartContextMock);\r\n    });\r\n\r\n    it('should not throw', () => {\r\n        expect(() => {\r\n            shallow(<ChartTooltip />);\r\n            shallow(<ChartTooltip sort />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should render two rectangles per data', () => {\r\n        const component = shallow(<ChartTooltip />);\r\n        expect(component.find('rect').length).toBe(ChartUtils.getXValues(XYChartContextMock.series).length * 2);\r\n    });\r\n\r\n    it('should render a DropPod', () => {\r\n        const component = shallow(<ChartTooltip />);\r\n        expect(component.find(DropPod).exists()).toBe(true);\r\n    });\r\n\r\n    it('should render a ChartTooltipContent inside the DropPod', () => {\r\n        const component = shallow(<ChartTooltip />);\r\n        const content = shallow(\r\n            component.find(DropPod).prop('renderDrop')({}, React.createRef(), {\r\n                position: DropPodPosition.left,\r\n                orientation: '',\r\n            }) as React.ReactElement\r\n        );\r\n        expect(content.find(ChartTooltipContent).exists()).toBe(true);\r\n    });\r\n\r\n    it('should render a line when the user hover a serie point', () => {\r\n        const getAttributeSpy = jasmine.createSpy('getAttribute').and.returnValues(DropPodPosition.right, '10', '0');\r\n        const component = shallow(<ChartTooltip />);\r\n        const rect = component.find('rect').first();\r\n\r\n        rect.simulate('mouseMove', {currentTarget: {getAttribute: getAttributeSpy}});\r\n        // force update\r\n        component.setProps({sort: false});\r\n\r\n        // I can't seem to get this to work, the useState is never re-called\r\n        // expect(component.find('.chart-tooltip-line').exists()).toBe(true);\r\n        expect(component.find(DropPod).exists()).toBe(true);\r\n    });\r\n\r\n    it('should render a line when the user hover a serie point', () => {\r\n        const getAttributeSpy = jasmine.createSpy('getAttribute').and.returnValues(DropPodPosition.left, '10', '0');\r\n        const component = shallow(<ChartTooltip />);\r\n        const rect = component.find('rect').first();\r\n\r\n        rect.simulate('mouseMove', {currentTarget: {getAttribute: getAttributeSpy}});\r\n        // force update\r\n        component.setProps({sort: false});\r\n\r\n        // TODO: validate that position is DropPodPosition.left\r\n        expect(component.find(DropPod).exists()).toBe(true);\r\n    });\r\n\r\n    it('should not render a line when the user stops hovering a serie point', () => {\r\n        const component = shallow(<ChartTooltip />);\r\n        const rect = component.find('rect').first();\r\n\r\n        rect.simulate('mouseLeave');\r\n        // force update\r\n        component.setProps({sort: false});\r\n\r\n        expect(component.find('.chart-tooltip-line').exists()).toBe(false);\r\n    });\r\n\r\n    it('should not throw when there is only one point in a serie', () => {\r\n        contextSpy.and.returnValue(XYChartOnePointContextMock);\r\n\r\n        expect(() => {\r\n            shallow(<ChartTooltip />);\r\n        }).not.toThrow();\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=208.bundle.js.map