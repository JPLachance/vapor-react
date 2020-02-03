(window.webpackJsonp=window.webpackJsonp||[]).push([[397],{1503:function(e,n,t){"use strict";t.r(n),n.default="import * as classNames from 'classnames';\nimport {FunctionComponent} from 'react';\nimport * as React from 'react';\nimport {IFlatSelectOwnProps} from './FlatSelect';\nimport {FlatSelectConnected} from './FlatSelectConnected';\n\nexport interface IFlatSelectWithPrependProps extends IFlatSelectOwnProps {\n    prepend?: React.ReactNode;\n    prependClassName?: string;\n}\n\nexport const FlatSelectWithPrepend: FunctionComponent<IFlatSelectWithPrependProps> = ({\n    prepend,\n    prependClassName = '',\n    ...flatSelectProps\n}) => (\n    <div className={classNames('prepended-flat-select', prependClassName)}>\n        <div className=\"flat-select-prepend\">{prepend}</div>\n        <FlatSelectConnected {...flatSelectProps} />\n    </div>\n);\n"}}]);
//# sourceMappingURL=397.bundle.js.map