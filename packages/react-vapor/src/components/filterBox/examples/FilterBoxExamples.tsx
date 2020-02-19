import * as React from 'react';
import {ExampleComponent} from '../../../../docs/src/components/ComponentsInterface';
import {Button} from '../../button/Button';
import {Section} from '../../section/Section';
import {Svg} from '../../svg/Svg';
import {FilterBoxConnected} from '../FilterBoxConnected';

export const FilterBoxExamples: ExampleComponent = () => <FilterBoxes />;
FilterBoxExamples.description = 'Will be used to filter content';

// start-print

const FilterBoxes: React.FunctionComponent = () => (
    <Section title="FilterBox Examples">
        <Section level={3} title="A filterBox with a custom placeholder.">
            <FilterBoxConnected id="FirstFilterBox" filterPlaceholder="Custom Placeholder" />
        </Section>
        <Section level={3} title="A filterBox with a maximum width.">
            <FilterBoxConnected id="SecondFilterBox" maxWidth={160} />
        </Section>
        <Section level={3} title="A filterBox with a child component">
            <FilterBoxConnected
                id="FilterBoxExampleComponentWithChildren"
                className={'flex flex-center'}
                filterPlaceholder="Filter"
            >
                <Button classes={['p1', 'ml1']} enabled onClick={() => alert('clicked !')}>
                    <Svg svgName={'add'} className="icon mod-lg mod-align-with-text" />
                </Button>
            </FilterBoxConnected>
        </Section>
    </Section>
);