(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{1278:function(n,e,o){"use strict";o.r(e),e.default="import * as VaporSVG from 'coveo-styleguide';\nimport * as React from 'react';\nimport {Svg} from '../svg/Svg';\nimport {IBlankSlateProps} from './BlankSlate';\n\nexport const blankSlateWithError = (\n    Component: React.ComponentClass<IBlankSlateProps>\n): React.ComponentClass<IBlankSlateProps> => {\n    class BlankSlateWithErrorComponent extends React.PureComponent<IBlankSlateProps> {\n        render() {\n            return (\n                <Component\n                    {...this.props}\n                    title={\n                        <div className=\"text-orange-8 flex center-align\">\n                            <Svg\n                                svgName={VaporSVG.svg.info.name}\n                                className=\"icon mr1 fill-orange-8 flex center-align\"\n                            />\n                            {this.props.title}\n                        </div>\n                    }\n                    description={<span className=\"text-black semibold\">{this.props.description}</span>}\n                    classes={['border-color-orange-8 mod-error']}\n                >\n                    {this.props.children}\n                </Component>\n            );\n        }\n    }\n\n    return BlankSlateWithErrorComponent;\n};\n"}}]);
//# sourceMappingURL=166.bundle.js.map