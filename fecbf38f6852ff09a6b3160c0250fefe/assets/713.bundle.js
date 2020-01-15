(window.webpackJsonp=window.webpackJsonp||[]).push([[713],{1802:function(n,e,r){"use strict";r.r(e),e.default="import * as React from 'react';\r\nimport {ExampleComponent} from '../../../../docs/src/components/ComponentsInterface';\r\nimport {Section} from '../../section/Section';\r\nimport {MiddleSlider} from '../MiddleSlider';\r\nimport {Slider} from '../Slider';\r\n\r\nexport const SliderExample: ExampleComponent = () => (\r\n    <Section title=\"Slider Examples\">\r\n        <SimpleSliderExample />\r\n        <Section level={2} title=\"Middle Slider\">\r\n            <MiddleSliderExample />\r\n            <MiddleSliderAsymetric />\r\n        </Section>\r\n    </Section>\r\n);\r\n\r\nconst SimpleSliderExample: React.FunctionComponent = () => (\r\n    <Section level={2} title=\"Simple Slider\">\r\n        <Section level={3} title=\"A simple slider with marks, step, a formated tooltip and an initial value\">\r\n            <Slider\r\n                hasTooltip\r\n                slider={{\r\n                    step: 25,\r\n                    marks: {\r\n                        0: 'Lower',\r\n                        50: 'Middle',\r\n                        100: 'Higher',\r\n                    },\r\n                    defaultValue: 50,\r\n                    tipFormatter: (value: number) => `${value}$`,\r\n                }}\r\n            />\r\n        </Section>\r\n    </Section>\r\n);\r\n\r\nconst MiddleSliderExample: React.FunctionComponent = () => {\r\n    return (\r\n        <Section level={3} key=\"two\" title=\"MiddleSlider with asymetric range and initial value\">\r\n            <MiddleSlider\r\n                key=\"patate\"\r\n                min={-2000}\r\n                max={10000}\r\n                id=\"asymetricRangeId\"\r\n                initialValue={2000}\r\n                marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}\r\n                hasTooltip\r\n            />\r\n        </Section>\r\n    );\r\n};\r\n\r\nconst MiddleSliderAsymetric: React.FunctionComponent = () => {\r\n    const [value, setValue] = React.useState(null);\r\n\r\n    return (\r\n        <Section key=\"one\" level={3} title={`MiddleSlider with marks and steps. Its current value is ${value}`}>\r\n            <MiddleSlider\r\n                key=\"pwel\"\r\n                min={-10000}\r\n                max={10000}\r\n                id=\"rangeSliderId\"\r\n                marks={{\r\n                    0: '-100%',\r\n                    25: '-50%',\r\n                    50: '0',\r\n                    75: '50%',\r\n                    100: '100%',\r\n                }}\r\n                step={25}\r\n                onChange={(currentValue) => {\r\n                    setValue(currentValue);\r\n                }}\r\n                hasTooltip\r\n                customTooltip={() => <span>this custom tooltip shows the slider current value of {value}</span>}\r\n            />\r\n        </Section>\r\n    );\r\n};\r\n"}}]);
//# sourceMappingURL=713.bundle.js.map