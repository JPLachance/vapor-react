(window.webpackJsonp=window.webpackJsonp||[]).push([[685],{1787:function(e,t,r){"use strict";r.r(t),t.default="import * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {getReactNodeTextContent} from '../../../utils/JSXUtils';\r\nimport {UUID} from '../../../utils/UUID';\r\nimport {IFlatSelectOptionProps} from '../../flatSelect/FlatSelectOption';\r\nimport {IItemBoxProps} from '../../itemBox/ItemBox';\r\nimport {\r\n    MultiSelectWithFilter,\r\n    MultiSelectWithPredicate,\r\n    MultiSelectWithPredicateAndFilter,\r\n} from '../hoc/SelectComponents';\r\nimport {MultiSelectConnected} from '../MultiSelectConnected';\r\n\r\nconst defaultItems: IItemBoxProps[] = [\r\n    {displayValue: 'Test', value: '0'},\r\n    {displayValue: 'Test One', value: '1'},\r\n    {displayValue: 'Disabled', value: 'disabled', disabled: true},\r\n    {displayValue: 'Three', value: '3'},\r\n    {displayValue: 'Four', value: '4'},\r\n    {displayValue: 'Five', value: '5'},\r\n    {displayValue: 'Six', value: '6'},\r\n    {displayValue: 'Seven', value: '7'},\r\n];\r\n\r\nconst defaultFlatSelectOptions: IFlatSelectOptionProps[] = [\r\n    {id: UUID.generate(), option: {content: 'All'}, selected: true},\r\n    {id: UUID.generate(), option: {content: 'even'}},\r\n    {id: UUID.generate(), option: {content: 'odd'}},\r\n];\r\n\r\nexport interface IMultiSelectExamplesState {\r\n    first: IItemBoxProps[];\r\n    drag: IItemBoxProps[];\r\n    second: IItemBoxProps[];\r\n    hoc: IItemBoxProps[];\r\n}\r\n\r\nexport class MultiSelectExamples extends React.Component<{}, IMultiSelectExamplesState> {\r\n    static description =\r\n        'A multi-select component allows users to select one or more options from a set of predefined options, or, if relevant, to add custom options.';\r\n\r\n    constructor({props, state}: {props: {}; state: IMultiSelectExamplesState}) {\r\n        super(props, state);\r\n\r\n        const second = _.map(defaultItems, (item) => _.clone(item));\r\n        second[0].selected = true;\r\n\r\n        const hoc = _.map(defaultItems, (item) =>\r\n            _.extend({}, item, {append: {content: () => <span className=\"text-medium-grey ml1\">{item.value}</span>}})\r\n        );\r\n        hoc[0].selected = true;\r\n\r\n        this.state = {\r\n            first: _.clone(defaultItems),\r\n            drag: _.clone(defaultItems),\r\n            second,\r\n            hoc,\r\n        };\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"mb2\">\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">A Simple Multi Select without items</label>\r\n                    <br />\r\n                    <MultiSelectConnected id={UUID.generate()} items={[]} />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">A Simple Multi Select with only one items</label>\r\n                    <br />\r\n                    <MultiSelectConnected id={UUID.generate()} items={[{value: 'Single Item'}]} />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">A Multi Select with filter, disabled</label>\r\n                    <br />\r\n                    <MultiSelectWithFilter id={UUID.generate()} items={[{value: 'Single Item'}]} disabled />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">A Simple Multi Select with Custom Strings</label>\r\n                    <br />\r\n                    <MultiSelectConnected\r\n                        id={UUID.generate()}\r\n                        items={this.state.first}\r\n                        placeholder=\"Select something\"\r\n                        deselectAllTooltipText=\"Remove all\"\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">A Sortable Multi Select with Custom Strings</label>\r\n                    <br />\r\n                    <MultiSelectConnected\r\n                        id={UUID.generate()}\r\n                        items={this.state.first}\r\n                        placeholder=\"Select something\"\r\n                        deselectAllTooltipText=\"Remove all\"\r\n                        sortable\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">A Multi Select With Filter</label>\r\n                    <br />\r\n                    <MultiSelectWithFilter id={UUID.generate()} items={this.state.hoc} />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">A Multi Select With Filter and Custom Values</label>\r\n                    <br />\r\n                    <MultiSelectWithFilter id={UUID.generate()} items={this.state.hoc} customValues />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">A Multi Select With Filter, Custom Values and no items</label>\r\n                    <br />\r\n                    <MultiSelectWithFilter id={UUID.generate()} items={[]} customValues />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">\r\n                        A Multi Select With Filter, Custom Values and list of items selectable\r\n                    </label>\r\n                    <br />\r\n                    <MultiSelectWithFilter id={UUID.generate()} items={[{value: 'a'}, {value: 'b'}]} customValues />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">\r\n                        A Multi Select With Filter and list of items selectable\r\n                    </label>\r\n                    <br />\r\n                    <MultiSelectWithFilter id={UUID.generate()} items={[{value: 'a'}, {value: 'b'}]} />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">A Multi Select With Filter and default list</label>\r\n                    <br />\r\n                    <MultiSelectWithFilter\r\n                        id={UUID.generate()}\r\n                        defaultCustomValues={['c', 'd']}\r\n                        items={[{value: 'a'}, {value: 'b'}]}\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">\r\n                        A Multi Select With Filter, default list and Custom Values{' '}\r\n                    </label>\r\n                    <br />\r\n                    <MultiSelectWithFilter\r\n                        id={UUID.generate()}\r\n                        defaultCustomValues={['c', 'd']}\r\n                        items={[{value: 'a'}, {value: 'b'}]}\r\n                        customValues\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">\r\n                        A Multi Select With Filter that only match display value\r\n                    </label>\r\n                    <br />\r\n                    <MultiSelectWithFilter\r\n                        id={UUID.generate()}\r\n                        items={this.state.hoc}\r\n                        matchFilter={(filter: string, item: IItemBoxProps) =>\r\n                            getReactNodeTextContent(item.displayValue).indexOf(filter) !== -1\r\n                        }\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">A Multi Select With Predicates</label>\r\n                    <br />\r\n                    <MultiSelectWithPredicate\r\n                        id={UUID.generate()}\r\n                        items={this.state.hoc}\r\n                        options={defaultFlatSelectOptions}\r\n                        matchPredicate={(p: string, i: IItemBoxProps) => this.matchPredicate(p, i)}\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">A Multi Select With 500px width</label>\r\n                    <br />\r\n                    <MultiSelectConnected\r\n                        id={UUID.generate()}\r\n                        items={this.state.hoc}\r\n                        multiSelectStyle={{width: '500px'}}\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">A Multi Select with width 100%</label>\r\n                    <br />\r\n                    <MultiSelectConnected\r\n                        id={'test'}\r\n                        items={this.state.hoc}\r\n                        selectClasses=\"mod-width-100\"\r\n                        multiSelectStyle={{width: '100%'}}\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">A Multi Select With Filter and Predicates</label>\r\n                    <br />\r\n                    <MultiSelectWithPredicateAndFilter\r\n                        id={UUID.generate()}\r\n                        items={this.state.hoc}\r\n                        options={defaultFlatSelectOptions}\r\n                        matchPredicate={(p: string, i: IItemBoxProps) => this.matchPredicate(p, i)}\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">\r\n                        A Multi Select With Filter, Predicate and Custom Values\r\n                    </label>\r\n                    <br />\r\n                    <MultiSelectWithPredicateAndFilter\r\n                        id={UUID.generate()}\r\n                        items={this.state.hoc}\r\n                        options={defaultFlatSelectOptions}\r\n                        matchPredicate={(p: string, i: IItemBoxProps) => this.matchPredicate(p, i)}\r\n                        customValues\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">\r\n                        A Multi Select With Filter, default list and Custom Values{' '}\r\n                    </label>\r\n                    <br />\r\n                    <MultiSelectWithFilter\r\n                        id={UUID.generate()}\r\n                        defaultCustomValues={['b'.repeat(100)]}\r\n                        items={[{value: 'a'.repeat(100)}]}\r\n                        customValues\r\n                    />\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n\r\n    private matchPredicate(predicate: string, item: IItemBoxProps) {\r\n        const value = parseInt(item.value, 10);\r\n        if (predicate === defaultFlatSelectOptions[0].id) {\r\n            return true;\r\n        } else if (predicate === defaultFlatSelectOptions[1].id) {\r\n            return value % 2 === 0;\r\n        } else if (predicate === defaultFlatSelectOptions[2].id) {\r\n            return value % 2 === 1;\r\n        } else {\r\n            return true;\r\n        }\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=685.bundle.js.map