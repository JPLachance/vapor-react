(window.webpackJsonp=window.webpackJsonp||[]).push([[892],{1990:function(e,r,a){"use strict";a.r(r),r.default='import * as React from \'react\';\r\nimport {findWhere} from \'underscore\';\r\n\r\nimport {ExamplesStore} from \'../../../../docs/Store\';\r\nimport {Label} from \'../../input/Label\';\r\nimport {TextAreaConnected} from \'../TextArea\';\r\nimport {setDisabledTextArea} from \'../TextAreaActions\';\r\nimport {TextAreaLabel} from \'../TextAreaLabel\';\r\n\r\nexport const TextAreaExamples = (): JSX.Element => (\r\n    <div className="mt2">\r\n        <div className="mt2">\r\n            <div className="form-group">\r\n                <TextAreaConnected\r\n                    id="super-textarea"\r\n                    className="admin-invisible-textbox mod-border"\r\n                    additionalAttributes={{\r\n                        placeholder: \'I am a simple text area\',\r\n                    }}\r\n                />\r\n            </div>\r\n            <div className="form-group">\r\n                <TextAreaConnected\r\n                    id="awesome-textarea-2"\r\n                    className="admin-invisible-textbox mod-border"\r\n                    additionalAttributes={{\r\n                        placeholder: \'I am a simple text area\',\r\n                    }}\r\n                    valueOnMount="I have a non empty value on mount"\r\n                />\r\n            </div>\r\n            <div className="form-group">\r\n                <TextAreaConnected\r\n                    id="super-textarea-3"\r\n                    className="admin-invisible-textbox mod-border"\r\n                    additionalAttributes={{\r\n                        placeholder: \'I am a simple text area\',\r\n                    }}\r\n                    valueOnMount="I am disabled on mount, enable me!"\r\n                    disabledOnMount\r\n                />\r\n                <button\r\n                    className="mb2 block"\r\n                    onClick={() => {\r\n                        ExamplesStore.dispatch(\r\n                            setDisabledTextArea(\r\n                                \'super-textarea-3\',\r\n                                !findWhere(ExamplesStore.getState().textAreas, {id: \'super-textarea-3\'}).disabled\r\n                            )\r\n                        );\r\n                    }}\r\n                >\r\n                    Toggle TextArea disabled state\r\n                </button>\r\n            </div>\r\n            <div className="form-group">\r\n                <TextAreaLabel label="simple text area with label">\r\n                    <TextAreaConnected id="super-textarea-4" />\r\n                </TextAreaLabel>\r\n            </div>\r\n            <div className="form-group">\r\n                <label className="form-control-label">Default textarea autosize empty</label>\r\n                <div className="form-control">\r\n                    <TextAreaConnected id="super-textarea-5" isAutosize />\r\n                </div>\r\n            </div>\r\n            <div className="form-group">\r\n                <label className="form-control-label">Textarea with a placeholder</label>\r\n                <div className="form-control">\r\n                    <TextAreaConnected\r\n                        id="super-textarea-6"\r\n                        additionalAttributes={{placeholder: \'Try to enter a lot of text here\'}}\r\n                        isAutosize\r\n                    />\r\n                </div>\r\n            </div>\r\n            <div className="form-group">\r\n                <label className="form-control-label">Textarea with a default value</label>\r\n                <div className="form-control">\r\n                    <TextAreaConnected id="super-textarea-7" valueOnMount="this is the default value" isAutosize />\r\n                </div>\r\n            </div>\r\n            <div className="form-group input-field validate">\r\n                <TextAreaConnected\r\n                    id="super-textarea-8"\r\n                    isAutosize\r\n                    additionalAttributes={{\r\n                        required: true,\r\n                    }}\r\n                />\r\n                <Label htmlFor="super-textarea-8">Beautiful Textarea</Label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n);\r\n'}}]);
//# sourceMappingURL=892.bundle.js.map