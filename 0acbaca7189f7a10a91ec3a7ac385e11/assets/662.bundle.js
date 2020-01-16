(window.webpackJsonp=window.webpackJsonp||[]).push([[662],{1753:function(e,n,t){"use strict";t.r(n),n.default='import * as React from \'react\';\nimport {Form} from \'../../form/Form\';\nimport {Input} from \'../../input/Input\';\nimport {Label} from \'../../input/Label\';\nimport {LabeledInput} from \'../../input/LabeledInput\';\nimport {Radio} from \'../../radio/Radio\';\nimport {RadioSelect} from \'../../radio/RadioSelect\';\nimport {SingleSelectConnected} from \'../../select/SingleSelectConnected\';\nimport {Section} from \'../Section\';\n\nexport class SectionExamples extends React.Component<any, any> {\n    render() {\n        return (\n            // start-print\n            <>\n                <Form>\n                    <Section\n                        title="Search panel"\n                        description="Customizing the display and behavior of the interface displayed withing the search panel can be done by editing the code of your search interface directly or via the JavaScript Search Interface Editor. As for style, it can be modified by applying your own stylesheet or adding styling rules in the Advanced tab."\n                    >\n                        <Section title="Main button" level={2}>\n                            <LabeledInput\n                                label="Location on screen"\n                                helpText="The widget button\'s position is fixed, which means it is positioned relative to the viewport and stays in the same place even if the page is scrolled."\n                                optionalInformation="INFORMATION"\n                            >\n                                <RadioSelect>\n                                    <Radio value="1">\n                                        <Label>Value 1</Label>\n                                    </Radio>\n                                    <Radio value="2">\n                                        <Label>Value 2</Label>\n                                    </Radio>\n                                </RadioSelect>\n                            </LabeledInput>\n                            <Section title="Content" level={2}>\n                                <LabeledInput helpText="The text that appears on the main widget button.">\n                                    <Input value="Help">\n                                        <Label>Text</Label>\n                                    </Input>\n                                </LabeledInput>\n                                <LabeledInput helpText="This is the font family that will be used on the button...">\n                                    <Input value="Lato, Arial, sans serif">\n                                        <Label>Font Family</Label>\n                                    </Input>\n                                </LabeledInput>\n                            </Section>\n                        </Section>\n                    </Section>\n                </Form>\n\n                <Form className="mt4">\n                    <Section title="Define your products structure" description="Inputs inside a Section of level 1">\n                        <LabeledInput\n                            label="Product Object Type"\n                            helpText="Select the object type value that identifies a Product object"\n                        >\n                            <SingleSelectConnected\n                                id="first"\n                                items={[\n                                    {\n                                        selected: true,\n                                        value: \'Product\',\n                                    },\n                                    {\n                                        selected: false,\n                                        value: \'Variant\',\n                                    },\n                                ]}\n                            />\n                        </LabeledInput>\n                        <LabeledInput\n                            label="Product Id Field"\n                            helpText="The product unique identifier is often associated with a model number. It is used to link variants and products together. This field should appear in both objects"\n                            message="31 different products identified"\n                        >\n                            <SingleSelectConnected\n                                id="second"\n                                items={[\n                                    {\n                                        selected: true,\n                                        value: \'productid\',\n                                    },\n                                    {\n                                        selected: false,\n                                        value: \'anotherfield\',\n                                    },\n                                ]}\n                            />\n                        </LabeledInput>\n                    </Section>\n                    <Section title="Level 2" description="Inputs inside a Section of level 2" level={2}>\n                        <LabeledInput\n                            label="Product Object Type"\n                            helpText="Select the object type value that identifies a Product object"\n                        >\n                            <SingleSelectConnected\n                                id="first"\n                                items={[\n                                    {\n                                        selected: true,\n                                        value: \'Product\',\n                                    },\n                                    {\n                                        selected: false,\n                                        value: \'Variant\',\n                                    },\n                                ]}\n                            />\n                        </LabeledInput>\n                        <LabeledInput\n                            label="Product Id Field"\n                            helpText="The product unique identifier is often associated with a model number. It is used to link variants and products together. This field should appear in both objects"\n                            message="31 different products identified"\n                        >\n                            <SingleSelectConnected\n                                id="second"\n                                items={[\n                                    {\n                                        selected: true,\n                                        value: \'productid\',\n                                    },\n                                    {\n                                        selected: false,\n                                        value: \'anotherfield\',\n                                    },\n                                ]}\n                            />\n                        </LabeledInput>\n                    </Section>\n                    <Section title="Level 3" description="Inputs inside a Section of level 3" level={3}>\n                        <LabeledInput\n                            label="Product Object Type"\n                            helpText="Select the object type value that identifies a Product object"\n                        >\n                            <SingleSelectConnected\n                                id="first"\n                                items={[\n                                    {\n                                        selected: true,\n                                        value: \'Product\',\n                                    },\n                                    {\n                                        selected: false,\n                                        value: \'Variant\',\n                                    },\n                                ]}\n                            />\n                        </LabeledInput>\n                        <LabeledInput\n                            label="Product Id Field"\n                            helpText="The product unique identifier is often associated with a model number. It is used to link variants and products together. This field should appear in both objects"\n                            message="31 different products identified"\n                        >\n                            <SingleSelectConnected\n                                id="second"\n                                items={[\n                                    {\n                                        selected: true,\n                                        value: \'productid\',\n                                    },\n                                    {\n                                        selected: false,\n                                        value: \'anotherfield\',\n                                    },\n                                ]}\n                            />\n                        </LabeledInput>\n                    </Section>\n                </Form>\n            </>\n            // stop-print\n        );\n    }\n}\n'}}]);
//# sourceMappingURL=662.bundle.js.map