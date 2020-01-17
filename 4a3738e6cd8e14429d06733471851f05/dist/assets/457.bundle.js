(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{1546:function(e,n,t){"use strict";t.r(n),n.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {Content, IContentProps} from '../../content/Content';\r\nimport {ITooltipProps, Tooltip} from '../../tooltip/Tooltip';\r\nimport {IItemBoxProps, ItemBox} from '../ItemBox';\r\n\r\ndescribe('ItemBox', () => {\r\n    let ItemBoxComponent: ReactWrapper<IItemBoxProps, any>;\r\n    const defaultProps: IItemBoxProps = {\r\n        value: 'test',\r\n    };\r\n\r\n    it('should render without errors', () => {\r\n        expect(() => {\r\n            shallow(<ItemBox value=\"test\" />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    describe('<ItemBox /> with default props', () => {\r\n        beforeEach(() => {\r\n            ItemBoxComponent = mount(<ItemBox {...defaultProps} />, {attachTo: document.getElementById('App')});\r\n        });\r\n\r\n        it('should render with the box-item class', () => {\r\n            expect(ItemBoxComponent.find('li').hasClass('item-box')).toBe(true);\r\n        });\r\n\r\n        it('should render with the data-value set with the value', () => {\r\n            expect(ItemBoxComponent.find(`[data-value=\"${defaultProps.value}\"]`).length).toBe(1);\r\n        });\r\n    });\r\n\r\n    describe('<ItemBox /> with custom props', () => {\r\n        const content: IContentProps = {\r\n            content: 'Prefix',\r\n            classes: ['text-medium-grey', 'mr1'],\r\n        };\r\n\r\n        const tooltip: ITooltipProps = {\r\n            title: 'title test for the item box',\r\n            placement: 'bottom',\r\n            container: 'body',\r\n        };\r\n\r\n        const renderItemBox = (props: Partial<IItemBoxProps> = {}) => {\r\n            ItemBoxComponent = mount(<ItemBox {..._.defaults(props, defaultProps)} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n        };\r\n\r\n        it('should render the display value', () => {\r\n            const displayValue: string = 'display value';\r\n            renderItemBox({\r\n                displayValue,\r\n            });\r\n            expect(ItemBoxComponent.find('li').text()).toBe(displayValue);\r\n        });\r\n\r\n        it('should render a prepend <Content/>', () => {\r\n            renderItemBox({\r\n                prepend: content,\r\n            });\r\n            expect(ItemBoxComponent.find(Content).length).toBe(1);\r\n        });\r\n\r\n        it('should render an append <Content/>', () => {\r\n            renderItemBox({\r\n                append: content,\r\n            });\r\n            expect(ItemBoxComponent.find(Content).length).toBe(1);\r\n        });\r\n\r\n        it('should render the tooltip', () => {\r\n            renderItemBox({\r\n                tooltip,\r\n            });\r\n            expect(ItemBoxComponent.find(Tooltip).length).toBe(1);\r\n        });\r\n\r\n        it('should render with the class active if set to true', () => {\r\n            renderItemBox({\r\n                active: true,\r\n            });\r\n            expect(ItemBoxComponent.find('li').hasClass('active')).toBe(true);\r\n        });\r\n\r\n        it('should render with the class selected if set to true', () => {\r\n            renderItemBox({\r\n                selected: true,\r\n            });\r\n            expect(ItemBoxComponent.find('li').hasClass('selected')).toBe(true);\r\n        });\r\n\r\n        it('should render with the class disabled if set to true', () => {\r\n            renderItemBox({\r\n                disabled: true,\r\n            });\r\n            expect(ItemBoxComponent.find('li').hasClass('disabled')).toBe(true);\r\n        });\r\n\r\n        it('should render with the class hidden if set to true', () => {\r\n            renderItemBox({\r\n                hidden: true,\r\n            });\r\n            expect(ItemBoxComponent.find('li').hasClass('hidden')).toBe(true);\r\n        });\r\n\r\n        it('should render with the class divider if set to true', () => {\r\n            renderItemBox({\r\n                divider: true,\r\n            });\r\n            expect(ItemBoxComponent.find('li').hasClass('divider')).toBe(true);\r\n        });\r\n\r\n        it('should call the onOptionClick on click', () => {\r\n            const onOptionClick: jasmine.Spy = jasmine.createSpy('onOptionClick');\r\n\r\n            renderItemBox({\r\n                onOptionClick,\r\n            });\r\n\r\n            ItemBoxComponent.find('li').simulate('click');\r\n\r\n            expect(onOptionClick).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should scroll the parent element if needed', () => {\r\n            const spy = spyOn<any>(ItemBox.prototype, 'scrollIfNeeded').and.callThrough();\r\n\r\n            renderItemBox({});\r\n\r\n            ItemBoxComponent.setProps({active: true});\r\n\r\n            expect(spy).toHaveBeenCalled();\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=457.bundle.js.map