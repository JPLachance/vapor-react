(window.webpackJsonp=window.webpackJsonp||[]).push([[675],{1765:function(e,t,r){"use strict";r.r(t),t.default="import * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {UUID} from '../../../utils/UUID';\r\nimport {IFlatSelectOptionProps} from '../../flatSelect/FlatSelectOption';\r\nimport {IItemBoxProps} from '../../itemBox/ItemBox';\r\nimport {\r\n    SingleSelectWithFilter,\r\n    SingleSelectWithPredicate,\r\n    SingleSelectWithPredicateAndFilter,\r\n} from '../hoc/SelectComponents';\r\nimport {SingleSelectConnected} from '../SingleSelectConnected';\r\n\r\nconst defaultItems: IItemBoxProps[] = [\r\n    {displayValue: 'Test', value: '0'},\r\n    {displayValue: 'Test One', value: '1'},\r\n    {displayValue: 'Disabled', value: 'disabled', disabled: true},\r\n    {displayValue: 'Three', value: '3'},\r\n    {displayValue: 'Four', value: '4'},\r\n    {displayValue: 'Five', value: '5'},\r\n    {displayValue: 'Six', value: '6'},\r\n    {displayValue: 'Seven', value: '7', selectedDisplayValue: '007 Bond, James'},\r\n];\r\n\r\nconst defaultFlatSelectOptions: IFlatSelectOptionProps[] = [\r\n    {id: UUID.generate(), option: {content: 'All'}, selected: true},\r\n    {id: UUID.generate(), option: {content: 'even'}},\r\n    {id: UUID.generate(), option: {content: 'odd'}},\r\n];\r\n\r\nexport interface ISingleSelectExamplesState {\r\n    first: IItemBoxProps[];\r\n    second: IItemBoxProps[];\r\n    hoc: IItemBoxProps[];\r\n}\r\n\r\nexport class SingleSelectExamples extends React.PureComponent<{}, ISingleSelectExamplesState> {\r\n    static description =\r\n        'A Single Select component allows users to choose a single option from a list or, if relevant, to create and select their own custom option.';\r\n\r\n    constructor(props: {}, state: ISingleSelectExamplesState) {\r\n        super(props, state);\r\n\r\n        const second = _.map(defaultItems, (item) => _.clone(item));\r\n        second[0].selected = true;\r\n\r\n        const hoc = _.map(defaultItems, (item) =>\r\n            _.extend({}, item, {append: {content: () => <span className=\"text-medium-grey ml1\">{item.value}</span>}})\r\n        );\r\n        hoc[0].selected = true;\r\n\r\n        this.state = {\r\n            first: _.clone(defaultItems),\r\n            second,\r\n            hoc,\r\n        };\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"my2\">\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">A Simple Single Select with a Custom Placeholder</label>\r\n                    <br />\r\n                    <SingleSelectConnected\r\n                        id={UUID.generate()}\r\n                        items={this.state.first}\r\n                        placeholder=\"Select something\"\r\n                    />\r\n                </div>\r\n\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">A Simple Single Select with a Clear Button</label>\r\n                    <br />\r\n                    <SingleSelectConnected id={UUID.generate()} items={this.state.first} canClear />\r\n                </div>\r\n\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Disabled Simple Single Select</label>\r\n                    <br />\r\n                    <SingleSelectConnected id={UUID.generate()} items={this.state.hoc} disabled />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Single Select with prepended text</label>\r\n                    <br />\r\n                    <SingleSelectConnected id={UUID.generate()} items={this.state.hoc} disabled />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">A Single Select With Filter</label>\r\n                    <br />\r\n                    <SingleSelectWithFilter id={UUID.generate()} items={this.state.hoc} />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">A Single Select With Filter and a custom value</label>\r\n                    <br />\r\n                    <SingleSelectWithFilter id={UUID.generate()} items={this.state.hoc} customValues />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">\r\n                        A Single Select With Filter that only match display value\r\n                    </label>\r\n                    <br />\r\n                    <SingleSelectWithFilter\r\n                        id={UUID.generate()}\r\n                        items={this.state.hoc}\r\n                        matchFilter={(filter: string, item: IItemBoxProps) =>\r\n                            _.isString(item.displayValue) ? item.displayValue.indexOf(filter) !== -1 : false\r\n                        }\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">A Single Select With Predicates</label>\r\n                    <br />\r\n                    <SingleSelectWithPredicate\r\n                        id={UUID.generate()}\r\n                        items={this.state.hoc}\r\n                        options={defaultFlatSelectOptions}\r\n                        matchPredicate={(p: string, i: IItemBoxProps) => this.matchPredicate(p, i)}\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">A Single Select With Filter and Predicates</label>\r\n                    <br />\r\n                    <SingleSelectWithPredicateAndFilter\r\n                        id={UUID.generate()}\r\n                        items={this.state.hoc}\r\n                        options={defaultFlatSelectOptions}\r\n                        matchPredicate={(p: string, i: IItemBoxProps) => this.matchPredicate(p, i)}\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">\r\n                        A Single Select With Filter, Predicates and a custom value\r\n                    </label>\r\n                    <br />\r\n                    <SingleSelectWithPredicateAndFilter\r\n                        id={UUID.generate()}\r\n                        items={this.state.hoc}\r\n                        options={defaultFlatSelectOptions}\r\n                        matchPredicate={(p: string, i: IItemBoxProps) => this.matchPredicate(p, i)}\r\n                        customValues\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">\r\n                        A single select with a filter, predicates, a lots of values and a footer\r\n                    </label>\r\n                    <br />\r\n                    <SingleSelectWithPredicateAndFilter\r\n                        id={UUID.generate()}\r\n                        items={this.state.hoc}\r\n                        options={defaultFlatSelectOptions}\r\n                        matchPredicate={(p: string, i: IItemBoxProps) => this.matchPredicate(p, i)}\r\n                        dropClasses=\"drop-this\"\r\n                        footer={<div className=\"select-footer\">The single select footer</div>}\r\n                    />\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n\r\n    private matchPredicate(predicate: string, item: IItemBoxProps) {\r\n        const value = parseInt(item.value, 10);\r\n        if (predicate === defaultFlatSelectOptions[0].id) {\r\n            return true;\r\n        } else if (predicate === defaultFlatSelectOptions[1].id) {\r\n            return value % 2 === 0;\r\n        } else if (predicate === defaultFlatSelectOptions[2].id) {\r\n            return value % 2 === 1;\r\n        } else {\r\n            return true;\r\n        }\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=675.bundle.js.map