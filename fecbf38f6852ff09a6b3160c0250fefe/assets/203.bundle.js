(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{1304:function(n,r,t){"use strict";t.r(r),r.default="import * as React from 'react';\r\n\r\nimport {XYChartContext} from './XYChart';\r\n\r\nexport interface YGridProps {\r\n    padding?: number;\r\n    color?: string;\r\n}\r\n\r\nexport const YGrid: React.FunctionComponent<YGridProps> = ({padding = 0, color = 'rgba(0,0,0,0.2)'}) => {\r\n    const context = React.useContext(XYChartContext);\r\n    const {xDomain, xScale, yScale, yTicksCount} = context;\r\n\r\n    const lines = yScale\r\n        .ticks(yTicksCount)\r\n        .map((tick: number) => (\r\n            <line\r\n                key={`y-grid-${tick}`}\r\n                stroke={color}\r\n                x1={xScale(xDomain[0]) - padding}\r\n                x2={xScale(xDomain[1]) + padding}\r\n                y1={yScale(tick)}\r\n                y2={yScale(tick)}\r\n            />\r\n        ));\r\n\r\n    return <>{lines}</>;\r\n};\r\nYGrid.displayName = 'YGrid';\r\n"}}]);
//# sourceMappingURL=203.bundle.js.map