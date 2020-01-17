(window.webpackJsonp=window.webpackJsonp||[]).push([[502],{1591:function(n,r,e){"use strict";e.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\n\r\nimport {Defaults} from '../../Defaults';\r\nimport {IClassName} from '../../utils/ClassNameUtils';\r\n\r\nexport interface IModalOwnProps {\r\n    id?: string;\r\n    classes?: IClassName;\r\n    closeCallback?: () => void;\r\n    closeTimeout?: number;\r\n    /**\r\n     * Renders the Modal already opened.\r\n     * To be used with ModalConnected only.\r\n     */\r\n    openOnMount?: boolean;\r\n    contentRef?: (el: HTMLDivElement) => void;\r\n}\r\n\r\nexport interface IModalStateProps {\r\n    isOpened: boolean;\r\n}\r\n\r\nexport interface IModalDispatchProps {\r\n    onDestroy: () => void;\r\n    onRender: () => void;\r\n}\r\n\r\nexport interface IModalProps extends IModalOwnProps, Partial<IModalStateProps>, Partial<IModalDispatchProps> {}\r\n\r\n/**\r\n * @deprecated use ModalComposite instead\r\n */\r\nexport class Modal extends React.Component<IModalProps, {}> {\r\n    static defaultProps: Partial<IModalProps> = {\r\n        closeTimeout: Defaults.MODAL_TIMEOUT,\r\n    };\r\n\r\n    private timeoutId: number;\r\n\r\n    componentWillMount() {\r\n        if (this.props.onRender) {\r\n            this.props.onRender();\r\n        }\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        if (this.props.onDestroy) {\r\n            this.props.onDestroy();\r\n        }\r\n        window.clearTimeout(this.timeoutId);\r\n    }\r\n\r\n    componentDidUpdate(prevProps: IModalProps) {\r\n        if (prevProps.isOpened && !this.props.isOpened) {\r\n            this.handleCloseCallback();\r\n        }\r\n    }\r\n\r\n    private handleCloseCallback() {\r\n        window.clearTimeout(this.timeoutId);\r\n        this.timeoutId = window.setTimeout(() => {\r\n            this.props.closeCallback?.();\r\n        }, this.props.closeTimeout);\r\n    }\r\n\r\n    render() {\r\n        const classes = classNames('modal-container', this.props.classes, {\r\n            opened: this.props.isOpened,\r\n        });\r\n\r\n        return (\r\n            <div className={classes}>\r\n                <div className=\"modal-content\" ref={this.props.contentRef}>\r\n                    {this.props.children}\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=502.bundle.js.map