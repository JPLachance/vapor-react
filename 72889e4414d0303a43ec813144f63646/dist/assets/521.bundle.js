(window.webpackJsonp=window.webpackJsonp||[]).push([[521],{1617:function(n,o,t){"use strict";t.r(o),o.default="import {shallow} from 'enzyme';\nimport * as React from 'react';\nimport {ModalLoading} from './ModalLoading';\n\ndescribe('ModalLoading tests', () => {\n    const id: string = 'modal';\n\n    describe('<ModalLoading />', () => {\n        it('should mount and unmount without error', () => {\n            expect(() => {\n                const component = shallow(<ModalLoading id={id} />);\n\n                component.unmount();\n            }).not.toThrow();\n        });\n    });\n});\n"}}]);
//# sourceMappingURL=521.bundle.js.map