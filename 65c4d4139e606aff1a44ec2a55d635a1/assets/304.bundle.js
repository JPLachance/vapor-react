(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{1412:function(r,e,n){"use strict";n.r(e),e.default="import 'diff2html/dist/diff2html.min.css';\r\n\r\nimport * as React from 'react';\r\n\r\nimport {fakeJSON, fakeJSON1, JSONToString} from '../../../utils/JSONUtils';\r\nimport {DiffViewer} from '../DiffViewer';\r\n\r\nexport class DiffViewerExamples extends React.Component {\r\n    render() {\r\n        return (\r\n            <div className=\"mt2\">\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Diff Viewer</label>\r\n                    <DiffViewer first={JSONToString(fakeJSON)} second={JSONToString(fakeJSON1)} />\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=304.bundle.js.map