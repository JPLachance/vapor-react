(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{1452:function(n,e,r){"use strict";r.r(e),e.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport * as InfiniteScroll from 'react-infinite-scroll-component';\r\n\r\nimport {\r\n    DropdownSearchInfiniteScrollOptions,\r\n    DropdownSearchInfiniteScrollOptionsProps,\r\n} from '../DropdownSearchInfiniteScrollOptions';\r\n\r\ndescribe('DropdownSearchInfiniteScrollOptions', () => {\r\n    let basicProps: DropdownSearchInfiniteScrollOptionsProps;\r\n\r\n    beforeEach(() => {\r\n        basicProps = {\r\n            onMouseEnter: jasmine.createSpy('onMouseEnter'),\r\n            options: [<div key=\"1\">1</div>, <div key=\"2\">2</div>],\r\n            ulElementRefFunction: jasmine.createSpy('refFunction'),\r\n            infiniteScroll: {\r\n                dataLength: 42,\r\n                hasMore: true,\r\n                next: jasmine.createSpy('next'),\r\n                endMessage: 'The end.',\r\n                loader: undefined,\r\n            },\r\n        };\r\n    });\r\n\r\n    it('should render without errors', () => {\r\n        expect(() => shallow(<DropdownSearchInfiniteScrollOptions {...basicProps} />)).not.toThrow();\r\n    });\r\n\r\n    describe('<DropdownSearchInfiniteScrollOptions />', () => {\r\n        let infiniteScrollOptions: ReactWrapper<DropdownSearchInfiniteScrollOptionsProps, any>;\r\n\r\n        beforeEach(() => {\r\n            infiniteScrollOptions = mount(<DropdownSearchInfiniteScrollOptions {...basicProps} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n        });\r\n\r\n        afterEach(() => {\r\n            infiniteScrollOptions.detach();\r\n        });\r\n\r\n        it('should get what to do on mouse enter as a prop', () => {\r\n            const onMouseEnterProp = infiniteScrollOptions.props().onMouseEnter;\r\n\r\n            expect(onMouseEnterProp).toBeDefined();\r\n\r\n            onMouseEnterProp();\r\n\r\n            expect(basicProps.onMouseEnter).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should get the options as a prop', () => {\r\n            const optionsProp = infiniteScrollOptions.props().options;\r\n\r\n            expect(optionsProp).toBeDefined();\r\n            expect(optionsProp.length).toBe(basicProps.options.length);\r\n        });\r\n\r\n        it('should get the menu ref function as a prop and call it on render', () => {\r\n            const ulElementRefFunctionProp = infiniteScrollOptions.props().ulElementRefFunction;\r\n\r\n            expect(ulElementRefFunctionProp).toBeDefined();\r\n            expect(ulElementRefFunctionProp).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should get the infiniteScroll props as a prop', () => {\r\n            const infiniteScrollProps = infiniteScrollOptions.props().infiniteScroll;\r\n\r\n            expect(infiniteScrollProps).toBeDefined();\r\n            expect(infiniteScrollProps.dataLength).toBe(basicProps.infiniteScroll.dataLength);\r\n            expect(infiniteScrollProps.hasMore).toBe(basicProps.infiniteScroll.hasMore);\r\n            expect(infiniteScrollProps.endMessage).toBe(basicProps.infiniteScroll.endMessage);\r\n            expect(infiniteScrollProps.next).toBeDefined();\r\n\r\n            infiniteScrollProps.next();\r\n\r\n            expect(basicProps.infiniteScroll.next).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should display a <InfiniteScroll /> component', () => {\r\n            expect(infiniteScrollOptions.find(InfiniteScroll).length).toBe(1);\r\n        });\r\n\r\n        it('should call onMouseEnter prop on mouse enter', () => {\r\n            infiniteScrollOptions.find('.dropdown-menu').simulate('mouseenter');\r\n\r\n            expect(basicProps.onMouseEnter).toHaveBeenCalledTimes(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=355.bundle.js.map