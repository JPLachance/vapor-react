(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{1365:function(n,t,e){"use strict";e.r(t),t.default="import {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {Loading} from '../../loading/Loading';\r\nimport {Content} from '../Content';\r\n\r\ndescribe('Content', () => {\r\n    it('should render without errors', () => {\r\n        expect(() => {\r\n            const content = shallow(<Content content=\"test\" />);\r\n            content.unmount();\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should render with span as default tag', () => {\r\n        const content = shallow(<Content content=\"test\" />);\r\n\r\n        expect(content.type()).toBe('span');\r\n        expect(content.matchesElement(<span>test</span>)).toBe(true);\r\n    });\r\n\r\n    it('should render with a component <Loading/>', () => {\r\n        const content = shallow(<Content content={Loading} />);\r\n        expect(content.find(Loading).length).toBe(1);\r\n    });\r\n\r\n    it('should render with an custom tag div', () => {\r\n        const content = shallow(<Content content=\"test\" tag=\"div\" />);\r\n        expect(content.find('div').text()).toBe('test');\r\n    });\r\n\r\n    it('should render the content directly without wrapping it in a span if its a valid react element', () => {\r\n        const myNode = <div>🎃</div>;\r\n        const content = shallow(<Content content={myNode} />);\r\n        expect(content.matchesElement(myNode)).toBe(true);\r\n    });\r\n\r\n    it('should render with a number', () => {\r\n        const content = shallow(<Content content={420} />);\r\n        expect(content.matchesElement(<span>{420}</span>)).toBe(true);\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=273.bundle.js.map