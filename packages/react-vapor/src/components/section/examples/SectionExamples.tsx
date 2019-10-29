import * as React from 'react';
import {Form} from '../../form/Form';
import {Input} from '../../input/Input';
import {Label} from '../../input/Label';
import {LabeledInput} from '../../input/LabeledInput';
import {Radio} from '../../radio/Radio';
import {RadioSelect} from '../../radio/RadioSelect';
import {SingleSelectConnected} from '../../select/SingleSelectConnected';
import {TextAreaConnected} from '../../textarea/TextArea';
import {Section} from '../Section';

export class SectionExamples extends React.Component<any, any> {
    render() {
        return (
            // start-print
            <>
                <Form>
                    <Section
                        title="Search panel"
                        description="Customizing the display and behavior of the interface displayed withing the search panel can be done by editing the code of your search interface directly or via the JavaScript Search Interface Editor. As for style, it can be modified by applying your own stylesheet or adding styling rules in the Advanced tab."
                    />
                    <Section title="Main button">
                        <LabeledInput
                            label="Location on screen"
                            helpText="The widget button's position is fixed, which means it is positioned relative to the viewport and stays in the same place even if the page is scrolled."
                            optionalInformation="INFORMATION"
                        >
                            <RadioSelect>
                                <Radio value="1">
                                    <Label>Value 1</Label>
                                </Radio>
                                <Radio value="2">
                                    <Label>Value 2</Label>
                                </Radio>
                            </RadioSelect>
                        </LabeledInput>
                        <Section title="Content" level={2}>
                            <LabeledInput helpText="The text that appears on the main widget button.">
                                <Input value="Help">
                                    <Label>Text</Label>
                                </Input>
                            </LabeledInput>
                            <LabeledInput helpText="This is the font family that will be used on the button...">
                                <Input value="Lato, Arial, sans serif">
                                    <Label>Font Family</Label>
                                </Input>
                            </LabeledInput>
                        </Section>
                    </Section>
                </Form>
                <Form>
                    <Section title="Define your products structure">
                        <LabeledInput
                            label="Product Object Type"
                            helpText="Select the object type value that identifies a Product object"
                        >
                            <SingleSelectConnected
                                id="first"
                                items={[
                                    {
                                        selected: true,
                                        value: 'Product',
                                    },
                                    {
                                        selected: false,
                                        value: 'Variant',
                                    },
                                ]}
                            />
                        </LabeledInput>
                        <LabeledInput
                            label="Product Id Field"
                            helpText="The product unique identifier is often associated with a model number. It is used to link variants and products together. This field should appear in both objects"
                            message="31 different products identified"
                        >
                            <SingleSelectConnected
                                id="second"
                                items={[
                                    {
                                        selected: true,
                                        value: 'productid',
                                    },
                                    {
                                        selected: false,
                                        value: 'anotherfield',
                                    },
                                ]}
                            />
                        </LabeledInput>
                        <LabeledInput
                            label={
                                <h1>
                                    h1 label with a word in <span className="italic">Italic</span>
                                </h1>
                            }
                            headerClassName="flex flex-center"
                            message={<span className="text-green">My message in an other color</span>}
                            helpText={<span className="bold">My help text in bold</span>}
                            optionalInformation={'More information about the input below'}
                        >
                            <TextAreaConnected id="first" valueOnMount="something" />
                        </LabeledInput>
                    </Section>
                </Form>
            </>
            // stop-print
        );
    }
}