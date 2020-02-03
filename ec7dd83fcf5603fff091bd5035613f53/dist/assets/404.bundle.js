(window.webpackJsonp=window.webpackJsonp||[]).push([[404],{1510:function(r,n,e){"use strict";e.r(n),n.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as ReactDOM from 'react-dom';\r\nimport {keys} from 'ts-transformer-keys';\r\nimport * as _ from 'underscore';\r\n\r\nimport {BrowserUtils} from '../../utils/BrowserUtils';\r\n\r\nexport interface IFlippableOwnProps {\r\n    id?: string;\r\n    front?: React.ReactNode;\r\n    back?: React.ReactNode;\r\n    className?: string;\r\n    allowUnflip?: (e: EventTarget) => boolean;\r\n}\r\n\r\nexport interface IFlippableDispatchProps {\r\n    onRender?: () => void;\r\n    onDestroy?: () => void;\r\n    onFlip?: () => void;\r\n    onUnflip?: () => void;\r\n}\r\n\r\nexport interface IFlippableStateProps {\r\n    isFlipped?: boolean;\r\n}\r\n\r\nexport interface IFlippableProps extends IFlippableOwnProps, IFlippableDispatchProps, IFlippableStateProps {}\r\n\r\nconst FlippablePropsToOmit = keys<IFlippableProps>();\r\n\r\nexport class Flippable extends React.Component<IFlippableProps & React.HTMLProps<HTMLDivElement>, any> {\r\n    static CONTAINER_CLASSNAME: string = 'flippable';\r\n    static FLIPPER_CLASSNAME: string = 'flipper';\r\n    static sides = {\r\n        FRONT: 'flipper-front',\r\n        BACK: 'flipper-back',\r\n    };\r\n    static triggers = {\r\n        FRONT: 'show-front',\r\n        BACK: 'show-back',\r\n    };\r\n    static defaults: Partial<IFlippableProps> = {\r\n        isFlipped: false,\r\n    };\r\n\r\n    private backside: HTMLDivElement;\r\n    private frontside: HTMLDivElement;\r\n\r\n    componentWillMount() {\r\n        if (this.props.onRender) {\r\n            this.props.onRender();\r\n        }\r\n\r\n        document.addEventListener('click', this.handleOutsideClick);\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        document.removeEventListener('click', this.handleOutsideClick);\r\n\r\n        if (this.props.onDestroy) {\r\n            this.props.onDestroy();\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const containerClassName = classNames(\r\n            BrowserUtils.isIE() ? 'flippable-ie' : Flippable.CONTAINER_CLASSNAME,\r\n            this.props.isFlipped ? 'show-on-top' : '',\r\n            this.props.className\r\n        );\r\n        const flipperClassName = classNames(\r\n            Flippable.FLIPPER_CLASSNAME,\r\n            this.props.isFlipped ? Flippable.triggers.BACK : Flippable.triggers.FRONT\r\n        );\r\n\r\n        return (\r\n            <div className={containerClassName} {..._.omit(this.props, FlippablePropsToOmit)}>\r\n                <div className={flipperClassName}>\r\n                    <div\r\n                        className={Flippable.sides.FRONT}\r\n                        onClick={this.handleClickOnFront}\r\n                        ref={(frontside: HTMLDivElement) => (this.frontside = frontside)}\r\n                    >\r\n                        {this.props.front}\r\n                    </div>\r\n                    <div\r\n                        className={Flippable.sides.BACK}\r\n                        ref={(backside: HTMLDivElement) => (this.backside = backside)}\r\n                    >\r\n                        {this.props.back}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n\r\n    private handleClickOnFront = () => {\r\n        if (this.props.onFlip && !this.props.isFlipped) {\r\n            this.props.onFlip();\r\n        }\r\n    };\r\n\r\n    private handleOutsideClick = (e: MouseEvent) => {\r\n        if (this.props.isFlipped) {\r\n            const frontside: Element | Text = ReactDOM.findDOMNode(this.frontside);\r\n            const backside: Element | Text = ReactDOM.findDOMNode(this.backside);\r\n            const target: Node = e.target as Node;\r\n\r\n            if (\r\n                !backside.contains(target) &&\r\n                !frontside.contains(target) &&\r\n                (!this.props.allowUnflip || this.props.allowUnflip(target))\r\n            ) {\r\n                this.handleUnflip();\r\n                e.preventDefault();\r\n            }\r\n        }\r\n    };\r\n\r\n    private handleUnflip() {\r\n        if (this.props.onUnflip) {\r\n            this.props.onUnflip();\r\n        }\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=404.bundle.js.map