(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{1226:function(n,r,t){"use strict";t.r(r),r.default='import * as loremIpsum from \'lorem-ipsum\';\r\nimport * as React from \'react\';\r\nimport {Button} from \'../../components/button/Button\';\r\nimport {SlideY} from \'../SlideY\';\r\n\r\ninterface SlideYExamplesState {\r\n    first: boolean;\r\n    second: boolean;\r\n}\r\n\r\nexport class SlideYExamples extends React.PureComponent<any, SlideYExamplesState> {\r\n    private first: string;\r\n    private second: string;\r\n\r\n    constructor(props: any, state: SlideYExamplesState) {\r\n        super(props, state);\r\n\r\n        this.state = {\r\n            first: false,\r\n            second: false,\r\n        };\r\n\r\n        this.first = loremIpsum({count: 20});\r\n        this.second = loremIpsum({count: 20});\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className="mt2">\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Basic SlideY animation</label>\r\n                    <div className="form-control">\r\n                        <Button\r\n                            name="Toggle"\r\n                            onClick={() => this.setState({...this.state, first: !this.state.first})}\r\n                            enabled\r\n                        ></Button>\r\n                        <SlideY in={this.state.first} timeout={500}>\r\n                            <div>{this.first}</div>\r\n                        </SlideY>\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Very slow SlideY animation</label>\r\n                    <div className="form-control">\r\n                        <Button\r\n                            name="Toggle"\r\n                            onClick={() => this.setState({...this.state, second: !this.state.second})}\r\n                            enabled\r\n                        ></Button>\r\n                        <SlideY in={this.state.second} timeout={500} duration={5000}>\r\n                            <div>{this.second}</div>\r\n                        </SlideY>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=112.bundle.js.map