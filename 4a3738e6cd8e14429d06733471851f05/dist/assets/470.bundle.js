(window.webpackJsonp=window.webpackJsonp||[]).push([[470],{1559:function(e,t,r){"use strict";r.r(t),t.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {mod} from '../../utils/DataStructuresUtils';\r\nimport {IItemBoxProps, ItemBox} from '../itemBox/ItemBox';\r\n\r\nexport type IItemBoxPropsWithIndex = {index?: number} & IItemBoxProps;\r\n\r\nexport interface IListBoxOwnProps {\r\n    noResultItem?: IItemBoxProps;\r\n    classes?: string[];\r\n    id?: string;\r\n    multi?: boolean;\r\n    items?: IItemBoxProps[];\r\n    wrapItems?: (items: React.ReactNode) => React.ReactNode;\r\n    footer?: React.ReactNode;\r\n}\r\n\r\nexport interface IListBoxStateProps {\r\n    selected?: string[];\r\n    active?: number;\r\n}\r\n\r\nexport interface IListBoxDispatchProps {\r\n    onRender?: () => void;\r\n    onDestroy?: () => void;\r\n    onOptionClick?: (option: IItemBoxProps, index?: number) => void;\r\n}\r\n\r\nexport interface IListBoxProps extends IListBoxOwnProps, IListBoxStateProps, IListBoxDispatchProps {}\r\n\r\nexport class ListBox extends React.Component<IListBoxProps, {}> {\r\n    static defaultProps: Partial<IListBoxProps> = {\r\n        noResultItem: {\r\n            value: 'No Items',\r\n        },\r\n        wrapItems: _.identity,\r\n    };\r\n\r\n    componentWillMount() {\r\n        this.props.onRender?.();\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        this.props.onDestroy?.();\r\n    }\r\n\r\n    private getClasses(): string {\r\n        return classNames('list-box bg-pure-white relative', this.props.classes);\r\n    }\r\n\r\n    protected getItems(): React.ReactNode {\r\n        const shouldShow = (item: IItemBoxProps) =>\r\n            !item.hidden && (!this.props.multi || !_.contains(this.props.selected, item.value));\r\n        const visibleLength = _.filter(this.props.items, (item: IItemBoxProps) => shouldShow(item) && !item.disabled)\r\n            .length;\r\n\r\n        let realIndex = 0;\r\n        let activeSet = false;\r\n        const items = _.chain(this.props.items)\r\n            .filter(shouldShow)\r\n            .map((item: IItemBoxProps) => {\r\n                let active = false;\r\n                const itemWithIndex: IItemBoxPropsWithIndex = {...item};\r\n                if (!item.disabled) {\r\n                    if (this.props.active === null) {\r\n                        active = _.contains(this.props.selected, item.value);\r\n                    } else {\r\n                        active = mod(this.props.active, visibleLength) === realIndex;\r\n                    }\r\n                    activeSet = active || activeSet;\r\n\r\n                    itemWithIndex.index = realIndex;\r\n                    itemWithIndex.active = active;\r\n                    realIndex++;\r\n                }\r\n                return itemWithIndex;\r\n            })\r\n            .map((itemWithIndex: IItemBoxPropsWithIndex) => {\r\n                if (!itemWithIndex.disabled && activeSet === false) {\r\n                    itemWithIndex.active = true;\r\n                    activeSet = true;\r\n                }\r\n                return itemWithIndex;\r\n            })\r\n            .map((item: IItemBoxPropsWithIndex) => {\r\n                return (\r\n                    <ItemBox\r\n                        key={item.value}\r\n                        {...item}\r\n                        onOptionClick={(option: IItemBoxProps) => this.onSelectItem(item, item.index)}\r\n                        selected={_.contains(this.props.selected, item.value)}\r\n                    />\r\n                );\r\n            })\r\n            .value();\r\n\r\n        const emptyItem = (\r\n            <ItemBox\r\n                {...this.props.noResultItem}\r\n                classes={[classNames('multi-line', this.props.noResultItem.classes)]}\r\n            />\r\n        );\r\n\r\n        return _.isEmpty(items) ? emptyItem : items;\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <>\r\n                <ul className={this.getClasses()} id={this.props.id}>\r\n                    {this.props.wrapItems(this.getItems())}\r\n                </ul>\r\n                {this.props.footer}\r\n            </>\r\n        );\r\n    }\r\n\r\n    private onSelectItem(item: IItemBoxProps, index?: number) {\r\n        if (!item.disabled) {\r\n            this.props.onOptionClick?.(item, index);\r\n            item.onOptionClick?.(item, index);\r\n        }\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=470.bundle.js.map