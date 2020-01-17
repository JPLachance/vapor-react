(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{1267:function(n,t,e){"use strict";e.r(t),t.default="import {shallowWithState} from 'enzyme-redux';\nimport * as React from 'react';\nimport {BlankSlateWithTable} from '../BlankSlatesHOC';\n\ndescribe('BlankSlateWithTable Tests', () => {\n    describe('<BlankSlateWithTable>', () => {\n        const defaultProps = {\n            title: 'test',\n        };\n\n        it('should not throw on mount and unmount', () => {\n            expect(() => {\n                const component = shallowWithState(<BlankSlateWithTable {...defaultProps} />, {});\n                component.unmount();\n            });\n        });\n\n        describe('once mounted', () => {\n            it('should render the colSpan with 20 on td by default', () => {\n                const component = shallowWithState(<BlankSlateWithTable {...defaultProps} />, {});\n\n                expect(component.find('td').props().colSpan).toBe(20);\n            });\n\n            it('should render the colSpan set by the numberOfColumn', () => {\n                const component = shallowWithState(<BlankSlateWithTable {...defaultProps} numberOfColumn={2} />, {});\n\n                expect(component.find('td').props().colSpan).toBe(2);\n            });\n        });\n    });\n});\n"}}]);
//# sourceMappingURL=172.bundle.js.map