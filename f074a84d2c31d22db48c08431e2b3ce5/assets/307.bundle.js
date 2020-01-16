(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{1403:function(r,n,e){"use strict";e.r(n),n.default="import * as VaporSVG from 'coveo-styleguide';\r\nimport * as React from 'react';\r\nimport {DragSource, DropTarget} from 'react-dnd';\r\nimport {Svg} from '../svg/Svg';\r\nimport {DnDUtils} from './DnDUtils';\r\n\r\nexport interface IDraggableContainerOwnProps {\r\n    id: string;\r\n    index: number;\r\n    move: (dragIndex: number, hoverIndex: number) => void;\r\n    child: any;\r\n    draggableContainerProps?: Partial<React.HTMLProps<HTMLDivElement>>;\r\n    draggableIconProps?: React.HTMLProps<HTMLDivElement>;\r\n    icon: React.ReactNode;\r\n}\r\n\r\nexport interface IDraggableContainerDnDProps {\r\n    isDraggable?: boolean;\r\n    isDragging?: boolean;\r\n    connectDragSource?: any;\r\n    connectDropTarget?: any;\r\n    connectDragPreview?: any;\r\n}\r\n\r\nexport const DraggableContainerType = 'CONTAINER_BOX';\r\n\r\n@DropTarget(DraggableContainerType, DnDUtils.getBoxTarget('id'), (connect: any) => ({\r\n    connectDropTarget: connect.dropTarget(),\r\n}))\r\n@DragSource(DraggableContainerType, DnDUtils.getSelectedBoxSource('id'), (connect: any, monitor: any) => ({\r\n    connectDragSource: connect.dragSource(),\r\n    connectDragPreview: connect.dragPreview(),\r\n    isDragging: monitor.isDragging(),\r\n}))\r\nexport class DnDContainer extends React.Component<IDraggableContainerOwnProps & IDraggableContainerDnDProps> {\r\n    static defaultProps = {\r\n        isDraggable: true,\r\n        draggableContainerProps: {\r\n            className: 'flex flex-center',\r\n        },\r\n        draggableIconProps: {},\r\n        icon: <Svg svgName={VaporSVG.svg.dragDrop.name} svgClass=\"icon\" />,\r\n    };\r\n\r\n    private getIcon() {\r\n        const icon: React.ReactNode = (\r\n            <div\r\n                style={{\r\n                    visibility: this.props.isDraggable ? 'visible' : 'hidden',\r\n                    cursor: this.props.isDraggable ? 'move' : 'default',\r\n                }}\r\n                {...this.props.draggableIconProps}\r\n            >\r\n                {this.props.icon}\r\n            </div>\r\n        );\r\n        return this.props.isDraggable ? this.props.connectDragSource(icon) : icon;\r\n    }\r\n\r\n    render() {\r\n        const opacity = this.props.isDragging ? 0 : 1;\r\n\r\n        const content = (\r\n            <div {...this.props.draggableContainerProps} style={{opacity}}>\r\n                {this.getIcon()}\r\n                {this.props.child && React.cloneElement(this.props.child, this.props.child.props)}\r\n            </div>\r\n        );\r\n\r\n        return this.props.isDraggable ? this.props.connectDropTarget(this.props.connectDragPreview(content)) : content;\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=307.bundle.js.map