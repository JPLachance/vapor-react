(window.webpackJsonp=window.webpackJsonp||[]).push([[631],{1717:function(e,n,o){"use strict";o.r(n),n.default='import * as React from \'react\';\n\nimport {ExampleComponent} from \'../../../../docs/src/components/ComponentsInterface\';\nimport {ExamplesStore} from \'../../../../docs/Store\';\nimport {Button} from \'../../button/Button\';\nimport {Label} from \'../../input/Label\';\nimport {LabeledInput} from \'../../input/LabeledInput\';\nimport {Section} from \'../../section/Section\';\nimport {Radio} from \'../Radio\';\nimport {IRadioSelectProps} from \'../RadioSelect\';\nimport {setRadioSelect} from \'../RadioSelectActions\';\nimport {RadioSelectConnected} from \'../RadioSelectConnected\';\n\nexport interface IRadioSelectExampleProps extends IRadioSelectProps {\n    defaultValue?: string;\n}\n\nexport interface IRadioSelectExampleState {\n    value: string;\n}\n\nexport const RadioExamples: ExampleComponent = () => (\n    <Section title="Radio set">\n        <RadioSelectExample />\n        <RadioSelectDisabledExample />\n    </Section>\n);\n\nRadioExamples.description = \'Radio Buttons allow for the selection of a single option among a set of options.\';\n\nconst radioSelectConnectedId = \'radioselectconnected\';\n\n// start-print\n\nconst RadioSelectExample: React.FunctionComponent = () => (\n    <Section level={2} title="Radio select with redux store">\n        <LabeledInput label="The Label of the Radio Select">\n            <RadioSelectConnected\n                id="radioselectconnected"\n                disabledTooltip="you see me because of the disabledTooltip prop"\n                disabledValuesOnMount={[\'blue\']}\n                valueOnMount={\'brown\'}\n                onChangeCallback={() => \'insert a callBack function here\'}\n            >\n                <Radio id="Option1" name="enabledOptions" value="blue">\n                    <Label>Blue</Label>\n                </Radio>\n                <Radio id="Option2" name="enabledOptions" value="green">\n                    <Label>Green</Label>\n                    <div className="mod-align-with-radio-label text-lynch mt1">\n                        The green color has an optional description.\n                    </div>\n                </Radio>\n                <Radio id="Option3" name="enabledOptions" value="brown">\n                    <Label>Brown</Label>\n                </Radio>\n            </RadioSelectConnected>\n        </LabeledInput>\n        <Section level={3}>\n            <Button\n                enabled\n                name="disable blue option"\n                onClick={() =>\n                    ExamplesStore.dispatch(setRadioSelect(radioSelectConnectedId, {disabledValues: [\'blue\']}))\n                }\n            />\n            <Button\n                enabled\n                name="enable blue option"\n                onClick={() => ExamplesStore.dispatch(setRadioSelect(radioSelectConnectedId, {disabledValues: []}))}\n            />\n        </Section>\n    </Section>\n);\n\nconst RadioSelectDisabledExample: React.FunctionComponent = () => (\n    <Section level={3}>\n        <LabeledInput label="A Radio Select with all options disabled">\n            <RadioSelectConnected\n                value="a-value"\n                disabled\n                onMount={() => \'I am Mounted, just for you!\'}\n                onUnmount={() => \'This is the end, my friend...\'}\n            >\n                <Radio id="Option4" name="disabledOptions" value="yellow">\n                    <Label>Yellow</Label>\n                </Radio>\n                <Radio id="Option5" name="disabledOptions" value="red">\n                    <Label>Red</Label>\n                </Radio>\n            </RadioSelectConnected>\n        </LabeledInput>\n    </Section>\n);\n'}}]);
//# sourceMappingURL=631.bundle.js.map