(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{1292:function(r,n,e){"use strict";e.r(n),n.default="import * as d3 from 'd3';\r\nimport * as React from 'react';\r\n\r\nimport {ChartUtils} from './ChartUtils';\r\n\r\nimport {XYChartContext, XYPoint, XYSerie} from './XYChart';\r\n\r\nexport interface BarSeriesProps {\r\n    barRatio?: number;\r\n}\r\n\r\nexport const BarSeries: React.FunctionComponent<BarSeriesProps> = ({barRatio = 0.8, children}) => {\r\n    const {series, xScale, yScale, xDomain, yDomain, color, colorPattern} = React.useContext(XYChartContext);\r\n    const xValues = ChartUtils.getXValues(series);\r\n    const barWidth =\r\n        xValues.length > 1\r\n            ? ((xScale(xDomain[1]) - xScale(xDomain[0])) / xValues.length / 2) * barRatio\r\n            : (xScale(xDomain[0]) / 2) * barRatio;\r\n\r\n    const innerXScale = d3.scale\r\n        .ordinal<number, number>()\r\n        .domain(d3.range(series.length))\r\n        .rangeBands([-barWidth, barWidth], 0);\r\n\r\n    const bars = series.map((serie: XYSerie, serieIndex: number) =>\r\n        serie.data.map((point: XYPoint) => {\r\n            const barHeight = Math.max(yScale(point.y), 2);\r\n            return (\r\n                <rect\r\n                    key={`${serie.label}-${point.x}`}\r\n                    fill={color(serieIndex, colorPattern, point)}\r\n                    width={innerXScale.rangeBand()}\r\n                    height={yScale(yDomain[0]) - barHeight}\r\n                    x={xScale(point.x) + innerXScale(serieIndex)}\r\n                    y={barHeight}\r\n                />\r\n            );\r\n        })\r\n    );\r\n    return (\r\n        <g className=\"bar-series\">\r\n            {bars}\r\n            {children}\r\n        </g>\r\n    );\r\n};\r\nBarSeries.displayName = 'BarSeries';\r\n"}}]);
//# sourceMappingURL=192.bundle.js.map