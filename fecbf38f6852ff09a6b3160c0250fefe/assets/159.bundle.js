(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{1262:function(n,r,s){"use strict";s.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {Svg} from '../svg/Svg';\r\nimport {BannerContainer} from './BannerContainer';\r\nimport * as styles from './styles/Banner.scss';\r\n\r\nexport interface BannerProps {\r\n    name: string;\r\n    nameSubtitle?: string;\r\n    messageTitle?: string;\r\n    messageState?: string;\r\n    alignCenter?: boolean;\r\n    topRightInfos?: React.ReactNode;\r\n    bottomRightInfos?: React.ReactNode;\r\n}\r\n\r\nexport const BannerMessageStates = {\r\n    Normal: 'normal',\r\n    Warning: 'warning',\r\n    Error: 'error',\r\n};\r\n\r\nexport class Banner extends React.PureComponent<BannerProps> {\r\n    static defaultProps: Partial<BannerProps> = {\r\n        messageState: BannerMessageStates.Normal,\r\n    };\r\n\r\n    render(): JSX.Element {\r\n        const mainClasses: string = classNames(styles.bannerMain, {\r\n            center: this.props.alignCenter,\r\n        });\r\n        const titleClasses: string = classNames(styles.bannerTitle, {\r\n            [styles.bannerWarningTitle]: this.props.messageState === BannerMessageStates.Warning,\r\n            [styles.bannerErrorTitle]: this.props.messageState === BannerMessageStates.Error,\r\n        });\r\n        return (\r\n            <BannerContainer className=\"flex flex-column\">\r\n                <div className=\"flex space-between\">\r\n                    <div>\r\n                        <h1 className={styles.bannerName}>{this.props.name}</h1>\r\n                        {this.props.nameSubtitle && (\r\n                            <h2 className={styles.bannerSubtitle}>{this.props.nameSubtitle}</h2>\r\n                        )}\r\n                    </div>\r\n                    {this.props.topRightInfos && <div className={styles.bannerRight}>{this.props.topRightInfos}</div>}\r\n                </div>\r\n                <div className={mainClasses}>\r\n                    {this.props.messageTitle && (\r\n                        <h3 className={titleClasses}>\r\n                            {this.getTitleSvg()}\r\n                            {this.props.messageTitle}\r\n                        </h3>\r\n                    )}\r\n                    {this.props.children && <div className={styles.bannerDescription}>{this.props.children}</div>}\r\n                </div>\r\n                {this.props.bottomRightInfos && (\r\n                    <div className={classNames(styles.bannerRight, 'right-align')}>\r\n                        <div className={styles.bannerBottomRightInfos}>{this.props.bottomRightInfos}</div>\r\n                    </div>\r\n                )}\r\n            </BannerContainer>\r\n        );\r\n    }\r\n\r\n    private getTitleSvg(): JSX.Element {\r\n        if (_.contains([BannerMessageStates.Warning, BannerMessageStates.Error], this.props.messageState)) {\r\n            return <Svg svgName=\"info\" svgClass=\"icon mx1\" className={styles.bannerWarningIcon} />;\r\n        }\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=159.bundle.js.map