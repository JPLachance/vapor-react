(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{1470:function(n,e,r){"use strict";r.r(e),e.default="import * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\nimport {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {Section} from '../../section';\r\nimport {IFacet} from '../Facet';\r\nimport {changeFacet, IFacetActionPayload} from '../FacetActions';\r\nimport {FacetConnected} from '../FacetConnected';\r\n\r\nexport interface ILastUpdateConnectedExamplesProps {\r\n    onRender?: () => void;\r\n}\r\n\r\nconst facet: IFacet = {name: 'facetTitle1', formattedName: 'The first facet'};\r\nconst facet2: IFacet = {name: 'facetTitle2', formattedName: 'The second facet'};\r\n\r\nconst facetRows: IFacet[] = [\r\n    {\r\n        name: 'row1',\r\n        formattedName: 'Row 1',\r\n    },\r\n    {\r\n        name: 'row2',\r\n        formattedName: 'The second row',\r\n    },\r\n    {\r\n        name: 'row3',\r\n        formattedName: 'Third row with a count property',\r\n        count: '23412',\r\n    },\r\n    {\r\n        name: 'row4',\r\n        formattedName: 'Row 4, count of 0',\r\n        count: '0',\r\n    },\r\n];\r\n\r\nconst mapDispatchToProps = (\r\n    dispatch: (action: IReduxAction<IFacetActionPayload>) => void\r\n): ILastUpdateConnectedExamplesProps => {\r\n    return {\r\n        onRender: () => {\r\n            dispatch(\r\n                changeFacet(facet.name, {\r\n                    name: 'row2',\r\n                    formattedName: 'Irrelevent',\r\n                })\r\n            );\r\n            dispatch(\r\n                changeFacet(facet2.name, {\r\n                    name: 'row1',\r\n                    formattedName: 'it does not matter',\r\n                })\r\n            );\r\n            dispatch(\r\n                changeFacet(facet2.name, {\r\n                    name: 'row2',\r\n                    formattedName: 'why is this mandatory ?',\r\n                    exclude: true,\r\n                })\r\n            );\r\n        },\r\n    };\r\n};\r\n\r\nconst FacetConnectedExamplesDisconnected: React.FunctionComponent<ILastUpdateConnectedExamplesProps> = ({onRender}) => {\r\n    React.useEffect(() => {\r\n        onRender();\r\n    }, [onRender]);\r\n\r\n    return (\r\n        <Section level={2} title=\"Facets connected to store\">\r\n            <div style={{width: 400}}>\r\n                <label className=\"form-control-label\">Facet with the second row selectd</label>\r\n                <FacetConnected\r\n                    facet={facet}\r\n                    facetRows={facetRows}\r\n                    clearFacet={() => {\r\n                        return;\r\n                    }}\r\n                    toggleFacet={() => {\r\n                        return;\r\n                    }}\r\n                />\r\n            </div>\r\n            <div style={{width: 400}}>\r\n                <label className=\"form-control-label\">\r\n                    Facet with exclusions, the first row selected and the second row already excluded\r\n                </label>\r\n                <FacetConnected\r\n                    facet={facet2}\r\n                    facetRows={facetRows}\r\n                    clearFacet={() => {\r\n                        return;\r\n                    }}\r\n                    enableExclusions\r\n                    toggleFacet={() => {\r\n                        return;\r\n                    }}\r\n                />\r\n            </div>\r\n        </Section>\r\n    );\r\n};\r\nexport const FacetConnectedExamples = connect(null, mapDispatchToProps)(FacetConnectedExamplesDisconnected);\r\n"}}]);
//# sourceMappingURL=373.bundle.js.map