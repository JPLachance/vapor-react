(window.webpackJsonp=window.webpackJsonp||[]).push([[841],{1939:function(r,e,n){"use strict";n.r(e),e.default='import * as React from \'react\';\r\n\r\nexport interface IErrorSection {\r\n    errorDescription: string;\r\n    errorPrecision: string;\r\n    errorTroubleshoot: string;\r\n    errorStatus: string;\r\n    errorCode: string;\r\n}\r\n\r\nexport interface ITableErrorProps extends React.ClassAttributes<TableError> {\r\n    error: IErrorSection;\r\n    descriptionLabel?: string;\r\n    troubleshootingLabel?: string;\r\n    errorCodeLabel?: string;\r\n}\r\n\r\nexport const DESCRIPTION_LABEL: string = \'Description\';\r\nexport const TROUBLESHOOTING_LABEL: string = \'Troubleshooting\';\r\nexport const ERROR_CODE_LABEL: string = \'Error code\';\r\n\r\nexport class TableError extends React.Component<ITableErrorProps, any> {\r\n    render() {\r\n        const descriptionLabel: string = this.props.descriptionLabel || DESCRIPTION_LABEL;\r\n        const troubleshootingLabel: string = this.props.troubleshootingLabel || TROUBLESHOOTING_LABEL;\r\n        const errorCodeLabel: string = this.props.errorCodeLabel || ERROR_CODE_LABEL;\r\n\r\n        const errorPrecision: JSX.Element = this.props.error.errorPrecision ? (\r\n            <div\r\n                className="error-description error-description-precision"\r\n                dangerouslySetInnerHTML={{__html: this.props.error.errorPrecision}}\r\n            ></div>\r\n        ) : null;\r\n\r\n        const errorTroubleshoot: JSX.Element = this.props.error.errorTroubleshoot ? (\r\n            <div>\r\n                <div className="label text-light-blue">{troubleshootingLabel}</div>\r\n                <div className="value" dangerouslySetInnerHTML={{__html: this.props.error.errorTroubleshoot}}></div>\r\n            </div>\r\n        ) : null;\r\n\r\n        return (\r\n            <div className="row-error-container">\r\n                <h4 className="caps bold error-title">{this.props.error.errorStatus}</h4>\r\n                <section className="columns">\r\n                    <div className="details-container error-description-container">\r\n                        <div className="label text-light-blue">{descriptionLabel}</div>\r\n                        <div className="value error-description">\r\n                            <div dangerouslySetInnerHTML={{__html: this.props.error.errorDescription}}></div>\r\n                            {errorPrecision}\r\n                        </div>\r\n                    </div>\r\n                    <div className="details-container troubleshooting-container">\r\n                        {errorTroubleshoot}\r\n                        <div className="label text-light-blue">{errorCodeLabel}</div>\r\n                        <div className="value text-dark-blue">{this.props.error.errorCode}</div>\r\n                    </div>\r\n                </section>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=841.bundle.js.map