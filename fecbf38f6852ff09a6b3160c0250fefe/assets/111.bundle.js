(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{1214:function(n,t,e){"use strict";e.r(t),t.default="import * as React from 'react';\r\nimport {ActionableItem} from '../ActionableItem';\r\n\r\nexport const ActionableItemExamples = () => (\r\n    <div className=\"mt2\">\r\n        <div className=\"form-group\">\r\n            <label className=\"form-control-label\">ActionableItem without an onItemClick method</label>\r\n            <div className=\"form-control\">\r\n                <ActionableItem\r\n                    id=\"actionable-item-1\"\r\n                    actions={[\r\n                        {value: 'action 1', onOptionClick: () => alert('you triggered the first action')},\r\n                        {value: 'action 2', onOptionClick: () => alert('you triggered the second action')},\r\n                    ]}\r\n                >\r\n                    click on the dots\r\n                </ActionableItem>\r\n            </div>\r\n        </div>\r\n        <div className=\"form-group\">\r\n            <label className=\"form-control-label\">ActionableItem with an onItemClick method</label>\r\n            <div className=\"form-control\">\r\n                <ActionableItem\r\n                    id=\"actionable-item-2\"\r\n                    onItemClick={(e: any) => alert('you triggered the onItemClick method')}\r\n                    actions={[\r\n                        {value: 'action 1', onOptionClick: () => alert('you triggered the first action')},\r\n                        {value: 'action 2', onOptionClick: () => alert('you triggered the second action')},\r\n                    ]}\r\n                >\r\n                    click on the dots\r\n                </ActionableItem>\r\n            </div>\r\n        </div>\r\n\r\n        <div className=\"form-group\">\r\n            <label className=\"form-control-label\" style={{marginTop: '75vh'}}>\r\n                ActionableItem without an onItemClick method\r\n            </label>\r\n            <div className=\"form-control\">\r\n                <ActionableItem\r\n                    id=\"actionable-item-3\"\r\n                    actions={[\r\n                        {value: 'action 1', onOptionClick: () => alert('you triggered the first action')},\r\n                        {value: 'action 2', onOptionClick: () => alert('you triggered the second action')},\r\n                    ]}\r\n                    style={{marginBottom: '50vh'}}\r\n                >\r\n                    click on the dots\r\n                </ActionableItem>\r\n            </div>\r\n        </div>\r\n    </div>\r\n);\r\n"}}]);
//# sourceMappingURL=111.bundle.js.map