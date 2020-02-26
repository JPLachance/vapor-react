(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{1310:function(r,e,n){"use strict";n.r(e),e.default="import * as React from 'react';\r\n\r\nimport {XYChartContext, XYPoint, XYSerie} from './XYChart';\r\n\r\nexport interface ScatterSeriesProps {\r\n    radius?: number;\r\n}\r\n\r\nexport const ScatterSeries: React.FunctionComponent<ScatterSeriesProps> = ({children, radius = 3}) => {\r\n    const {series, xScale, yScale, color, colorPattern} = React.useContext(XYChartContext);\r\n\r\n    const points = series.map((serie: XYSerie, i: number) =>\r\n        serie.data.map((point: XYPoint, index: number) => (\r\n            <circle\r\n                key={`scatter-${serie.label}-${index}`}\r\n                cx={xScale(point.x)}\r\n                cy={yScale(point.y)}\r\n                r={radius}\r\n                fill={color(i, colorPattern, point)}\r\n            />\r\n        ))\r\n    );\r\n\r\n    return (\r\n        <g className=\"scatter-series\">\r\n            {points}\r\n            {children}\r\n        </g>\r\n    );\r\n};\r\nScatterSeries.displayName = 'ScatterSeries';\r\n"}}]);
//# sourceMappingURL=199.bundle.js.map