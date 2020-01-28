(window.webpackJsonp=window.webpackJsonp||[]).push([[854],{1952:function(e,r,n){"use strict";n.r(r),r.default="import * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {BlankSlate, IBlankSlateProps} from '../../blankSlate/BlankSlate';\r\nimport {ITableProps} from '../Table';\r\nimport {TABLE_PREDICATE_DEFAULT_VALUE, TOGGLE_ARROW_CELL_COUNT} from '../TableConstants';\r\n\r\nexport interface ITableChildBlankSlateProps extends ITableProps {}\r\n\r\nexport const TableChildBlankSlate = (props: ITableChildBlankSlateProps): JSX.Element => {\r\n    const {\r\n        blankSlateDefault,\r\n        blankSlateNoResultsOnAction,\r\n        blankSlateOnError,\r\n        headingAttributes,\r\n        tableCompositeState,\r\n    } = props;\r\n\r\n    let blankSlatePropsToUse: IBlankSlateProps;\r\n    if (tableCompositeState.isInError) {\r\n        blankSlatePropsToUse = blankSlateOnError || blankSlateDefault;\r\n    } else if (\r\n        tableCompositeState.filter ||\r\n        _.some(\r\n            tableCompositeState.predicates,\r\n            (value: any) => !_.isUndefined(value) && value !== TABLE_PREDICATE_DEFAULT_VALUE\r\n        ) ||\r\n        tableCompositeState.from ||\r\n        tableCompositeState.to\r\n    ) {\r\n        blankSlatePropsToUse = blankSlateNoResultsOnAction || blankSlateDefault;\r\n    } else {\r\n        blankSlatePropsToUse = blankSlateDefault;\r\n    }\r\n\r\n    return (\r\n        <tbody>\r\n            <tr className=\"blankslate-rows no-hover\">\r\n                <td colSpan={headingAttributes.length + (!!props.collapsibleFormatter ? TOGGLE_ARROW_CELL_COUNT : 0)}>\r\n                    <BlankSlate {...blankSlatePropsToUse} />\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    );\r\n};\r\n"}}]);
//# sourceMappingURL=854.bundle.js.map