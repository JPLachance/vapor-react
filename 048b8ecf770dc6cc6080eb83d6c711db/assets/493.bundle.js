(window.webpackJsonp=window.webpackJsonp||[]).push([[493],{1598:function(n,o,e){"use strict";e.r(o),o.default="import {shallow} from 'enzyme';\nimport * as React from 'react';\nimport {ContentLoadingPlaceholder} from '../ContentLoadingPlaceholder';\n\ndescribe('ContentLoadingPlaceholder tests', () => {\n    describe('<ContentLoadingPlaceholder />', () => {\n        it('should mount and unmount without errors', () => {\n            expect(() => {\n                const wrapper = shallow(\n                    <ContentLoadingPlaceholder>\n                        <div>Test</div>\n                    </ContentLoadingPlaceholder>,\n                    {}\n                );\n                wrapper.unmount();\n            });\n        });\n    });\n});\n"}}]);
//# sourceMappingURL=493.bundle.js.map