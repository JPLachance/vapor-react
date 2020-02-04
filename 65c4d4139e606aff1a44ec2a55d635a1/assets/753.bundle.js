(window.webpackJsonp=window.webpackJsonp||[]).push([[753],{1853:function(n,e,a){"use strict";a.r(e),e.default='import * as React from \'react\';\r\n\r\nimport {ExampleComponent} from \'../../../../docs/src/components/ComponentsInterface\';\r\nimport {Section} from \'../../section/Section\';\r\nimport {Svg} from \'../../svg/Svg\';\r\nimport {SubNavigationConnected} from \'../SubNavigationConnected\';\r\n\r\nexport const SubNavigationExamples: ExampleComponent = () => <SubNavigationConnectedExamples />;\r\n\r\n// start-print\r\n\r\nconst exampleItems = [\r\n    {label: \'Avatar\', id: \'avatar\'},\r\n    {label: \'Titanic\', id: \'titanic\'},\r\n    {label: \'Star Wars: The Force Awakens\', id: \'star-wars\'},\r\n    {label: \'Jurassic World\', id: \'jurasic-world\'},\r\n    {label: \'The Avengers\', id: \'the-avengers\'},\r\n];\r\n\r\nconst SubNavigationConnectedExamples: React.FunctionComponent = () => (\r\n    <Section title="Sub Navigation Examples">\r\n        <Section level={2} title="Sub Navigation">\r\n            <div className="flex" style={{height: \'200px\'}}>\r\n                <SubNavigationConnected id="first-sub-nav" items={exampleItems} />\r\n            </div>\r\n        </Section>\r\n        <Section level={2} title="Sub Navigation with default selected">\r\n            <div className="flex" style={{height: \'120px\'}}>\r\n                <SubNavigationConnected id="second-sub-nav" items={exampleItems} defaultSelected="star-wars" />\r\n            </div>\r\n        </Section>\r\n        <Section level={2} title="Sub-navigation with custom JSX labels">\r\n            <div className="flex" style={{width: \'250px\', height: \'200px\'}}>\r\n                <SubNavigationConnected\r\n                    id="third-sub-nav"\r\n                    items={[\r\n                        {\r\n                            label: (\r\n                                <span className="flex space-between">\r\n                                    <span className="truncate">Avatar</span>\r\n                                    <Svg svgName="thumb-up" svgClass="icon fill-green" />\r\n                                </span>\r\n                            ),\r\n                            id: \'avatar\',\r\n                        },\r\n                        {\r\n                            label: (\r\n                                <span className="flex space-between">\r\n                                    <span className="truncate">Titanic</span>\r\n                                    <Svg svgName="thumb-up" svgClass="icon fill-green" />\r\n                                </span>\r\n                            ),\r\n                            id: \'titanic\',\r\n                        },\r\n                        {\r\n                            label: (\r\n                                <span className="flex space-between">\r\n                                    <span className="truncate pr1">Star Wars: The Force Awakens</span>\r\n                                    <Svg svgName="thumb-up" svgClass="icon fill-green" />\r\n                                </span>\r\n                            ),\r\n                            id: \'star-wars\',\r\n                        },\r\n                        {\r\n                            label: (\r\n                                <span className="flex space-between">\r\n                                    <span className="truncate">Jurassic World</span>\r\n                                    <Svg svgName="thumb-down" svgClass="icon fill-red" />\r\n                                </span>\r\n                            ),\r\n                            id: \'jurasic-world\',\r\n                        },\r\n                        {\r\n                            label: (\r\n                                <span className="flex space-between">\r\n                                    <span className="truncate">The Avengers</span>\r\n                                    <Svg svgName="thumb-down" svgClass="icon fill-red" />\r\n                                </span>\r\n                            ),\r\n                            id: \'the-avengers\',\r\n                        },\r\n                    ]}\r\n                />\r\n            </div>\r\n        </Section>\r\n    </Section>\r\n);\r\n'}}]);
//# sourceMappingURL=753.bundle.js.map