(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{1307:function(r,n,e){"use strict";e.r(n),n.default="import {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {BarSeries} from '../BarSeries';\r\nimport {ChartUtils} from '../ChartUtils';\r\nimport {XYChartContextMock, XYChartOnePointContextMock} from './XYChartContextMock';\r\n\r\ndescribe('<BarSeries />', () => {\r\n    it('should not throw', () => {\r\n        expect(() => {\r\n            shallow(<BarSeries />);\r\n            shallow(<BarSeries barRatio={0.5} />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should render a <g>', () => {\r\n        const component = shallow(<BarSeries />);\r\n        expect(component.find('g').exists()).toBe(true);\r\n    });\r\n\r\n    it('should render a rect for every point in every serie', () => {\r\n        spyOn(React, 'useContext').and.returnValue(XYChartContextMock);\r\n\r\n        const {series} = XYChartContextMock;\r\n        const component = shallow(<BarSeries />);\r\n\r\n        expect(component.find('rect').length).toBe(ChartUtils.getXValues(series).length * series.length);\r\n    });\r\n\r\n    it('should not throw when there is only one point in a serie', () => {\r\n        spyOn(React, 'useContext').and.returnValue(XYChartOnePointContextMock);\r\n\r\n        expect(() => {\r\n            shallow(<BarSeries />);\r\n        }).not.toThrow();\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=206.bundle.js.map