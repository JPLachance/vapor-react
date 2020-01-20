(window.webpackJsonp=window.webpackJsonp||[]).push([[721],{1809:function(s,r,n){"use strict";n.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\n\r\nimport {Loading} from '../loading/Loading';\r\nimport {Svg} from '../svg/Svg';\r\nimport * as styles from './styles/StatusCard.scss';\r\n\r\nexport interface StatusCardProps {\r\n    color: string;\r\n    title: string;\r\n    icon?: string;\r\n    simple?: boolean;\r\n    loading?: boolean;\r\n}\r\n\r\nexport class StatusCard extends React.Component<StatusCardProps> {\r\n    render() {\r\n        const cardClasses: string = classNames(styles.statusCard, 'flex', {\r\n            simple: this.props.simple,\r\n            [`border-left-color-${this.props.color}`]: !this.props.loading,\r\n        });\r\n\r\n        return <div className={cardClasses}>{this.getContent()}</div>;\r\n    }\r\n\r\n    private getContent(): JSX.Element[] {\r\n        const titleClasses: string = classNames('text-medium-blue', styles.statusCardTitle);\r\n\r\n        return this.props.loading\r\n            ? [<Loading key=\"loading\" className=\"center-align\" />]\r\n            : [\r\n                  this.props.icon && (\r\n                      <Svg\r\n                          key=\"icon\"\r\n                          svgName={this.props.icon}\r\n                          svgClass=\"icon mod-2x\"\r\n                          className={styles.statusCardIcon}\r\n                      />\r\n                  ),\r\n                  <div key=\"status\">\r\n                      <h3 className={titleClasses}>{this.props.title}</h3>\r\n                      <div className={styles.statusCardInfo}>{this.props.children}</div>\r\n                  </div>,\r\n              ];\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=721.bundle.js.map