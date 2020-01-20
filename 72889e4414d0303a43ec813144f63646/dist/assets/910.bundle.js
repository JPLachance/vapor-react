(window.webpackJsonp=window.webpackJsonp||[]).push([[910],{1997:function(r,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\r\n\r\nimport {StickyFooter} from '../../components/stickyFooter/StickyFooter';\r\nimport {withDirty} from '../withDirty/withDirty';\r\n\r\nexport interface IWithEditing {\r\n    id: string;\r\n    isDirty?: boolean;\r\n    footerClassName?: string;\r\n    footerChildren?: React.ReactNode;\r\n}\r\n\r\nexport const withEditing = <T, R = any>(config: IWithEditing) => (\r\n    Component: React.ComponentType<T>\r\n): React.ComponentClass<T, R> => {\r\n    return withDirty<T, R>({\r\n        id: config.id,\r\n        isDirty: config.isDirty,\r\n        showDirty: (isDirty: boolean) => {\r\n            return (\r\n                config.footerChildren && (\r\n                    <StickyFooter className={config.footerClassName} isOpened={isDirty}>\r\n                        {config.footerChildren}\r\n                    </StickyFooter>\r\n                )\r\n            );\r\n        },\r\n    })(Component);\r\n};\r\n"}}]);
//# sourceMappingURL=910.bundle.js.map