(window.webpackJsonp=window.webpackJsonp||[]).push([[894],{1982:function(r,n,o){"use strict";o.r(n),n.default="import * as React from 'react';\r\nimport {OverlayTrigger, Tooltip as BootstrapTooltip} from 'react-bootstrap';\r\nimport * as ReactDOM from 'react-dom';\r\nimport * as _ from 'underscore';\r\nimport {Defaults} from '../../Defaults';\r\n\r\n// Copy of the OverlayTriggerProps but without the overlay prop since we are building it here\r\nexport interface IOverlayTriggerProps {\r\n    animation?: any;\r\n    defaultOverlayShown?: boolean;\r\n    delay?: number;\r\n    delayHide?: number;\r\n    delayShow?: number;\r\n    onEnter?: (...args: any[]) => void;\r\n    onEntered?: (...args: any[]) => void;\r\n    onEntering?: (...args: any[]) => void;\r\n    onExit?: (...args: any[]) => void;\r\n    onExited?: (...args: any[]) => void;\r\n    onExiting?: (...args: any[]) => void;\r\n    onClick?: (...args: any[]) => void;\r\n    placement?: string;\r\n    container?: string;\r\n    rootClose?: boolean;\r\n    trigger?: string | string[];\r\n}\r\n\r\nexport interface ITooltipProps extends IOverlayTriggerProps, React.ClassAttributes<Tooltip> {\r\n    title: React.ReactNode;\r\n    className?: string;\r\n    arrowOffsetLeft?: React.ReactText;\r\n    arrowOffsetTop?: React.ReactText;\r\n    bsStyle?: string;\r\n    placement?: string;\r\n    positionLeft?: number;\r\n    positionTop?: number;\r\n    footer?: string;\r\n    /**\r\n     * By default, <Tooltip /> wraps children inside a span element to make sure the tooltip is applied on one html element only.\r\n     * Use noSpanWrapper to avoid wrapping your children inside a span.\r\n     *\r\n     * CAUTION: Make sure you have only 1 child if you use this prop.\r\n     */\r\n    noSpanWrapper?: boolean;\r\n}\r\n\r\nconst PROPS_TO_OMIT: string[] = ['title', 'className', 'children'];\r\n\r\nconst TOOLTIP_PROPS_TO_OMIT: string[] = [\r\n    ...PROPS_TO_OMIT,\r\n    'animation',\r\n    'footer',\r\n    'defaultOverlayShown',\r\n    'delay',\r\n    'delayShow',\r\n    'noSpanWrapper',\r\n    'onEnter',\r\n    'onEntered',\r\n    'onEntering',\r\n    'onExit',\r\n    'onExited',\r\n    'onExiting',\r\n    'onClick',\r\n    'overlay',\r\n    'rootClose',\r\n    'trigger',\r\n    'container',\r\n];\r\nconst OVERLAY_PROPS_TO_OMIT: string[] = [\r\n    ...PROPS_TO_OMIT,\r\n    'arrowOffsetLeft',\r\n    'arrowOffsetTop',\r\n    'bsClass',\r\n    'positionTop',\r\n    'positionLeft',\r\n    'container',\r\n];\r\n\r\nexport class Tooltip extends React.Component<ITooltipProps> {\r\n    static defaultProps: Partial<ITooltipProps> = {\r\n        className: '',\r\n    };\r\n\r\n    private readonly overlay: React.RefObject<BootstrapTooltip>;\r\n\r\n    constructor(props: ITooltipProps) {\r\n        super(props);\r\n        this.overlay = React.createRef();\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        if (this.overlay.current) {\r\n            const node = ReactDOM.findDOMNode(this.overlay.current);\r\n            if (node && !document.body.contains(node)) {\r\n                document.body.appendChild(node);\r\n            }\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const tooltipFooter: JSX.Element = this.props.footer ? (\r\n            <div className=\"tooltip-footer\">{this.props.footer}</div>\r\n        ) : null;\r\n\r\n        const tooltip: JSX.Element = (\r\n            <BootstrapTooltip\r\n                id={_.uniqueId('tooltip-')}\r\n                ref={this.overlay}\r\n                container={this.props.container || Defaults.TOOLTIP_ROOT}\r\n                {..._.omit(this.props, TOOLTIP_PROPS_TO_OMIT)}\r\n                className=\"react-vapor-tooltip\"\r\n            >\r\n                {this.props.title}\r\n                {tooltipFooter}\r\n            </BootstrapTooltip>\r\n        );\r\n\r\n        const children = this.props.noSpanWrapper ? (\r\n            (this.props.children as any)\r\n        ) : (\r\n            <span className={this.props.className}>{this.props.children}</span>\r\n        );\r\n\r\n        if (this.props.title) {\r\n            return (\r\n                <OverlayTrigger {..._.omit(this.props, OVERLAY_PROPS_TO_OMIT)} overlay={tooltip}>\r\n                    {children}\r\n                </OverlayTrigger>\r\n            );\r\n        }\r\n        return children;\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=894.bundle.js.map