(window.webpackJsonp=window.webpackJsonp||[]).push([[749],{1838:function(n,r,e){"use strict";e.r(r),r.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {Tooltip} from '../../tooltip/Tooltip';\r\nimport {ILinkSvgProps, LinkSvg} from '../LinkSvg';\r\nimport {Svg} from '../Svg';\r\n\r\ndescribe('<LinkSvg>', () => {\r\n    let linkSvgComponent: ReactWrapper<ILinkSvgProps, any>;\r\n    let linkSvgProps: ILinkSvgProps;\r\n\r\n    beforeEach(() => {\r\n        linkSvgProps = {\r\n            url: 'www.google.ca',\r\n        };\r\n    });\r\n\r\n    it('should render without error', () => {\r\n        expect(() => shallow(<LinkSvg {...linkSvgProps} />)).not.toThrow();\r\n    });\r\n\r\n    it('should mount and unmount/detach without error', () => {\r\n        expect(() => {\r\n            linkSvgComponent = mount(<LinkSvg {...linkSvgProps} />, {attachTo: document.getElementById('App')});\r\n        }).not.toThrow();\r\n\r\n        expect(() => {\r\n            linkSvgComponent.unmount();\r\n            linkSvgComponent.detach();\r\n        }).not.toThrow();\r\n    });\r\n\r\n    describe('Props handling', () => {\r\n        afterEach(() => {\r\n            linkSvgComponent.detach();\r\n        });\r\n\r\n        const renderLinkSvg = (props: Partial<ILinkSvgProps> = {}) => {\r\n            linkSvgComponent = mount(<LinkSvg {..._.extend(linkSvgProps, props)} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n        };\r\n\r\n        it('should set the link on the <a> href', () => {\r\n            renderLinkSvg();\r\n\r\n            expect(linkSvgComponent.find(`a[href=\"${linkSvgProps.url}\"]`).length).toBe(1);\r\n        });\r\n\r\n        it('should set the target on <a>', () => {\r\n            renderLinkSvg({url: 'test', target: '_blank'});\r\n\r\n            expect(linkSvgComponent.find(`a[target=\"_blank\"]`).length).toBe(1);\r\n        });\r\n\r\n        it('should add custom class with linkClasses on <a>', () => {\r\n            renderLinkSvg({linkClasses: ['test', 'test1']});\r\n\r\n            const element = linkSvgComponent.find('a');\r\n            expect(element.hasClass('test')).toBe(true);\r\n            expect(element.hasClass('test1')).toBe(true);\r\n        });\r\n\r\n        it('should show a svg by default', () => {\r\n            renderLinkSvg();\r\n\r\n            expect(linkSvgComponent.find(Svg).length).toBe(1);\r\n        });\r\n\r\n        it('should show a tooltip', () => {\r\n            renderLinkSvg({\r\n                tooltip: {\r\n                    title: 'test',\r\n                },\r\n            });\r\n\r\n            expect(linkSvgComponent.find(Tooltip).length).toBe(1);\r\n        });\r\n\r\n        it('should render without href', () => {\r\n            renderLinkSvg({\r\n                url: undefined,\r\n            });\r\n\r\n            expect(linkSvgComponent.find('a').props().href).toBeUndefined();\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=749.bundle.js.map