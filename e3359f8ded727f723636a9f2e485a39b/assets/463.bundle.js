(window.webpackJsonp=window.webpackJsonp||[]).push([[463],{1558:function(l,e,a){"use strict";a.r(e),e.default='import * as React from \'react\';\r\nimport {TooltipPlacement} from \'../../../utils/TooltipUtils\';\r\nimport {LabeledValue} from \'../LabeledValue\';\r\n\r\nexport const LabeledValueExamples = () => (\r\n    <div className="mt2">\r\n        <div className="form-group">\r\n            <label className="form-control-label">Two Simple Labeled Values</label>\r\n            <LabeledValue label="First label" value="first value" />\r\n            <LabeledValue label="Second label" value="second value" />\r\n        </div>\r\n        <div className="form-group">\r\n            <label className="form-control-label">Two Simple Labeled Values inside a flexbox</label>\r\n            <div className="flex flex-start">\r\n                <LabeledValue label="First label" value="first value" />\r\n                <LabeledValue label="Second label" value="second value" />\r\n            </div>\r\n        </div>\r\n        <div className="form-group">\r\n            <label className="form-control-label">Labeled Values inside a flexbox with one value full row</label>\r\n            <div className="flex flex-wrap">\r\n                <LabeledValue label="First label (full row)" value="first value" fullRow />\r\n                <LabeledValue label="Second label" value="second value" />\r\n                <LabeledValue label="Third label" value="third value" />\r\n            </div>\r\n        </div>\r\n        <div className="form-group">\r\n            <label className="form-control-label">Labeled Values "columnised" (3 X 3)</label>\r\n            <div className="columns">\r\n                <LabeledValue label="First label" value="first value" />\r\n                <LabeledValue label="Second label" value="second value" />\r\n                <LabeledValue label="Third label" value="third value" />\r\n                <LabeledValue label="Fourth label" value="fourth value" />\r\n                <LabeledValue label="Fifth label" value="fifth value" />\r\n            </div>\r\n        </div>\r\n        <div className="form-group">\r\n            <label className="form-control-label">Labeled Value with information</label>\r\n            <LabeledValue label="Label" value="value" information={\'Some valuable informations go here.\'} />\r\n        </div>\r\n        <div className="form-group">\r\n            <label className="form-control-label">Labeled Value with custom information placement</label>\r\n            <LabeledValue\r\n                label="Label"\r\n                value="value"\r\n                information={\'Some valuable informations go here.\'}\r\n                informationPlacement={TooltipPlacement.Bottom}\r\n            />\r\n        </div>\r\n        <div className="form-group">\r\n            <label className="form-control-label">Labeled Value rendered on a single line</label>\r\n            <LabeledValue label="Label" value="value" singleLine={true} />\r\n        </div>\r\n        <div className="form-group">\r\n            <label className="form-control-label">Labeled Value with JSX.Element as value</label>\r\n            <LabeledValue\r\n                label="Label"\r\n                value={\r\n                    <span>\r\n                        <span className="bold">a list of values:</span>\r\n                        <ul>\r\n                            <li>value 1</li>\r\n                            <li>value 2</li>\r\n                            <li>value 3</li>\r\n                        </ul>\r\n                    </span>\r\n                }\r\n            />\r\n        </div>\r\n    </div>\r\n);\r\n'}}]);
//# sourceMappingURL=463.bundle.js.map