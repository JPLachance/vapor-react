(window.webpackJsonp=window.webpackJsonp||[]).push([[887],{1967:function(o,t,r){"use strict";r.r(t),t.default='import * as moment from \'moment\';\r\nimport * as React from \'react\';\r\nimport {DateTooltip} from \'../DateTooltip\';\r\nimport {Tooltip} from \'../Tooltip\';\r\n\r\nexport class TooltipExamples extends React.Component<{}, {}> {\r\n    static description =\r\n        \'Tooltips are short descriptions that appear when hovering an element. They are used to provide explanations that do not require nor allow user interaction, like tips and tricks.\';\r\n\r\n    render() {\r\n        return (\r\n            <div className="mt2">\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Tooltip example</label>\r\n                    <div className="form-control">\r\n                        <Tooltip title="I am a tooltip!" placement="right">\r\n                            <button type="button" className="btn">\r\n                                Hover me!\r\n                            </button>\r\n                        </Tooltip>\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Tooltip example with a footer</label>\r\n                    <div className="form-control">\r\n                        <Tooltip title="I am a tooltip!" footer="I have a footer" placement="right">\r\n                            <button type="button" className="btn">\r\n                                Hover me!\r\n                            </button>\r\n                        </Tooltip>\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Tooltip with top with the container body</label>\r\n                    <div className="form-control">\r\n                        <Tooltip title="I am a tooltip!">\r\n                            <button type="button" className="btn">\r\n                                Hover me!\r\n                            </button>\r\n                        </Tooltip>\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">No Tooltip if the title is an empty string</label>\r\n                    <div className="form-control">\r\n                        <Tooltip title="">\r\n                            <button type="button" className="btn">\r\n                                Hover me!\r\n                            </button>\r\n                        </Tooltip>\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Time Tooltip example</label>\r\n                    <div className="form-control">\r\n                        <button type="button" className="btn">\r\n                            <DateTooltip\r\n                                date={moment(\'2019-12-16\')}\r\n                                format={(currentDate: moment.Moment) => currentDate.calendar()}\r\n                            />\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Time Tooltip with custom formating example</label>\r\n                    <div className="form-control">\r\n                        <button type="button" className="btn">\r\n                            <DateTooltip date={moment()} format="LLL" tooltipFormat="ddd, hA" />\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=887.bundle.js.map