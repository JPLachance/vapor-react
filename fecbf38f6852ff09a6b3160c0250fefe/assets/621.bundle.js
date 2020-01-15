(window.webpackJsonp=window.webpackJsonp||[]).push([[621],{1715:function(e,n,t){"use strict";t.r(n),n.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {findDOMNode} from 'react-dom';\r\nimport TetherComponent from 'react-tether';\r\nimport * as _ from 'underscore';\r\n\r\nexport interface ITetherComponentCopiedProps {\r\n    renderElementTag?: string;\r\n    renderElementTo?: Element | string;\r\n    attachment: string;\r\n    targetAttachment?: string;\r\n    offset?: string;\r\n    targetOffset?: string;\r\n    targetModifier?: string;\r\n    enabled?: boolean;\r\n    classes?: any;\r\n    className?: string;\r\n    style?: {[key: string]: any};\r\n    classPrefix?: string;\r\n    optimizations?: {[key: string]: any};\r\n    constraints?: any[];\r\n    onUpdate?: (...args: any[]) => void;\r\n    onRepositioned?: (...args: any[]) => void;\r\n}\r\n\r\nexport interface IPopoverDispatchProps {\r\n    onToggle?: (isOpen: boolean) => void;\r\n    onMount?: (isOpen: boolean) => void;\r\n    onUnmount?: () => void;\r\n}\r\n\r\nexport interface IPopoverProps extends IPopoverDispatchProps, ITetherComponentCopiedProps {\r\n    id?: string;\r\n    /**\r\n     * Optionnal, use it to specify the isOpen state of the Popover.\r\n     * @default: false\r\n     */\r\n    isOpen?: boolean;\r\n    isOpenOnMount?: boolean;\r\n\r\n    /**\r\n     * Optionnal, a callback fired when the Popover wishes to change visibility. Called with the requested `isOpen` value. Use this prop if\r\n     * you want to control the Popover state. Let it undefined if you want the Popover to control his state itself.\r\n     */\r\n    onToggle?: (isOpen: boolean) => void;\r\n\r\n    /**\r\n     * Optionnal, use it to prevent default when the Popover isOpen and the user clicks outside.\r\n     * @default: false\r\n     */\r\n    isModal?: boolean;\r\n}\r\n\r\nexport interface IPopoverState {\r\n    isOpen?: boolean;\r\n}\r\n\r\nexport class Popover extends React.Component<IPopoverProps, IPopoverState> {\r\n    private tetherToggle: React.RefObject<HTMLDivElement>;\r\n    private tetherElement: React.RefObject<HTMLDivElement>;\r\n\r\n    constructor(props: IPopoverProps, state: IPopoverState) {\r\n        super(props, state);\r\n\r\n        this.tetherToggle = React.createRef();\r\n        this.tetherElement = React.createRef();\r\n\r\n        // If onToggle wasn't passed, Popover is uncontrolled and we set an initial state.\r\n        if (!_.isFunction(this.props.onToggle)) {\r\n            this.state = {\r\n                isOpen: !!this.props.isOpen,\r\n            };\r\n        }\r\n    }\r\n\r\n    componentDidMount() {\r\n        this.props.onMount?.(this.props.isOpenOnMount);\r\n        document.addEventListener('click', this.handleDocumentClick, true);\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        this.props.onUnmount?.();\r\n        document.removeEventListener('click', this.handleDocumentClick, true);\r\n    }\r\n\r\n    render() {\r\n        const children = React.Children.toArray(this.props.children);\r\n\r\n        const isOpen: boolean = (this.state && this.state.isOpen) || this.props.isOpen;\r\n\r\n        return (\r\n            <TetherComponent {..._.omit(this.props, 'children')}>\r\n                <div ref={this.tetherToggle} onClick={() => this.toggleOpened(!isOpen)}>\r\n                    {children[0]}\r\n                </div>\r\n                <div ref={this.tetherElement} className={classNames({hide: !isOpen}, 'shadow-2')}>\r\n                    {children[1]}\r\n                </div>\r\n            </TetherComponent>\r\n        );\r\n    }\r\n\r\n    toggleOpened(isOpen: boolean) {\r\n        if (_.isFunction(this.props.onToggle)) {\r\n            this.props.onToggle(isOpen);\r\n        } else {\r\n            this.setState({\r\n                isOpen: isOpen,\r\n            });\r\n        }\r\n    }\r\n\r\n    // Using a fat arrow function instead of a method here to bind it to context and to make sure we have the same listener for both\r\n    // addEventListener and removeEventListener and therefore prevent leaking listeners.\r\n    private handleDocumentClick: EventListener = (event: Event) => {\r\n        if (this.props.isOpen) {\r\n            const tetherToggle: Element | Text = findDOMNode(this.tetherToggle.current);\r\n            const tetherElement: Element | Text = findDOMNode(this.tetherElement.current);\r\n            const target: Node = event.target as Node;\r\n\r\n            if (!tetherElement.contains(target) && !tetherToggle.contains(target)) {\r\n                if (this.props.isModal) {\r\n                    event.stopImmediatePropagation();\r\n                    event.preventDefault();\r\n                }\r\n\r\n                this.toggleOpened(false);\r\n            }\r\n        }\r\n    };\r\n}\r\n"}}]);
//# sourceMappingURL=621.bundle.js.map