(window.webpackJsonp=window.webpackJsonp||[]).push([[832],{1921:function(n,e,r){"use strict";r.r(e),e.default="import * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {humanize} from 'underscore.string';\r\n\r\nimport {ActionBarConnected} from '../../actions/ActionBar';\r\nimport {DatePickerDropdownConnected} from '../../datePicker/DatePickerDropdownConnected';\r\nimport {IDropdownOption} from '../../dropdownSearch/DropdownSearch';\r\nimport {DropdownSearchConnected} from '../../dropdownSearch/DropdownSearchConnected';\r\nimport {FilterBoxConnected} from '../../filterBox/FilterBoxConnected';\r\nimport {ITablePredicate, ITableProps} from '../Table';\r\nimport {TABLE_PREDICATE_DEFAULT_VALUE, TableChildComponent} from '../TableConstants';\r\nimport {getTableChildComponentId} from '../TableUtils';\r\n\r\nexport const TableChildActionBar = (props: ITableProps): JSX.Element => {\r\n    if (!props.actionBar) {\r\n        return null;\r\n    }\r\n\r\n    const {predicates, datePicker, prefixContent} = props;\r\n    const actionBar = _.isBoolean(props.actionBar) ? {} : props.actionBar;\r\n    const filter = _.isBoolean(props.filter) ? {} : props.filter;\r\n\r\n    const filterBoxConnected: JSX.Element =\r\n        actionBar && filter ? (\r\n            <div className=\"coveo-table-actions\">\r\n                <FilterBoxConnected\r\n                    {...filter}\r\n                    id={getTableChildComponentId(props.id, TableChildComponent.FILTER)}\r\n                    key={getTableChildComponentId(props.id, TableChildComponent.FILTER)}\r\n                />\r\n            </div>\r\n        ) : null;\r\n\r\n    const predicatesConnected: JSX.Element =\r\n        actionBar && predicates ? (\r\n            <div className=\"coveo-table-actions predicate-filters\">\r\n                {predicates.map((predicate: ITablePredicate, i: number) => {\r\n                    const predicateId = `${getTableChildComponentId(props.id, TableChildComponent.PREDICATE)}${\r\n                        predicate.attributeName\r\n                    }`;\r\n                    const containerClasses = i ? ['ml1'] : [''];\r\n                    const defaultValue = _.findWhere(predicate.props.defaultOptions, {default: true});\r\n\r\n                    return (\r\n                        <DropdownSearchConnected\r\n                            maxWidth={260}\r\n                            defaultSelectedOption={{\r\n                                value: (defaultValue && defaultValue.value) || TABLE_PREDICATE_DEFAULT_VALUE,\r\n                            }}\r\n                            {...predicate.props}\r\n                            key={predicateId}\r\n                            fixedPrepend={\r\n                                (predicate.attributeNameFormatter\r\n                                    ? predicate.attributeNameFormatter(predicate.attributeName)\r\n                                    : humanize(predicate.attributeName)) as any\r\n                            }\r\n                            id={predicateId}\r\n                            containerClasses={containerClasses}\r\n                            onOptionClickCallBack={(option: IDropdownOption) => {\r\n                                if (props.onPredicateOptionClick) {\r\n                                    props.onPredicateOptionClick(predicateId, option);\r\n                                }\r\n                            }}\r\n                        />\r\n                    );\r\n                })}\r\n            </div>\r\n        ) : null;\r\n\r\n    const datePickerConnected: JSX.Element =\r\n        actionBar && datePicker ? (\r\n            <div className=\"coveo-table-actions\">\r\n                <DatePickerDropdownConnected\r\n                    {...datePicker}\r\n                    id={getTableChildComponentId(props.id, TableChildComponent.DATEPICKER)}\r\n                    key={getTableChildComponentId(props.id, TableChildComponent.DATEPICKER)}\r\n                    onRight\r\n                />\r\n            </div>\r\n        ) : null;\r\n\r\n    return (\r\n        <ActionBarConnected\r\n            {...actionBar}\r\n            prefixContent={prefixContent}\r\n            id={getTableChildComponentId(props.id, TableChildComponent.ACTION_BAR)}\r\n        >\r\n            {predicatesConnected}\r\n            {filterBoxConnected}\r\n            {datePickerConnected}\r\n        </ActionBarConnected>\r\n    );\r\n};\r\n"}}]);
//# sourceMappingURL=832.bundle.js.map