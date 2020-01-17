(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{1348:function(n,r,o){"use strict";o.r(r),r.default="import {mount} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {LinkSvg} from '../../svg/LinkSvg';\r\nimport {Svg} from '../../svg/Svg';\r\nimport {Tooltip} from '../../tooltip/Tooltip';\r\nimport {ICollapsibleContainerOwnProps} from '../CollapsibleContainer';\r\nimport {CollapsibleContainerConnected} from '../CollapsibleContainerConnected';\r\nimport * as styles from '../styles/CollapsibleContainer.scss';\r\nimport {collapsibleContainerPossibleProps} from './CollapsibleTestCommon.spec';\r\n\r\ndescribe('<CollapsibleContainerConnected />', () => {\r\n    let store: Store<IReactVaporState>;\r\n    let basicCollapsibleContainerProps: ICollapsibleContainerOwnProps;\r\n\r\n    beforeEach(() => {\r\n        store = TestUtils.buildStore();\r\n        basicCollapsibleContainerProps = {...collapsibleContainerPossibleProps[0]};\r\n    });\r\n\r\n    afterEach(() => {\r\n        store.dispatch(clearState());\r\n    });\r\n\r\n    const mountComponentWithProps = (props: ICollapsibleContainerOwnProps) => {\r\n        return mount(\r\n            <Provider store={store}>\r\n                <CollapsibleContainerConnected {...props}>dummy children</CollapsibleContainerConnected>\r\n            </Provider>,\r\n            {attachTo: document.getElementById('App')}\r\n        );\r\n    };\r\n\r\n    describe('Header Svg logic', () => {\r\n        it('should render with no svg if no informationUrl and informationTooltip are passed', () => {\r\n            const collapsibleHeader = mountComponentWithProps(basicCollapsibleContainerProps);\r\n            expect(\r\n                collapsibleHeader.find(`.${basicCollapsibleContainerProps.collapsibleHeaderClassName}`).find(Svg).length\r\n            ).toBe(0);\r\n        });\r\n\r\n        it('should render with an orange LinkSvg if informationUrl is passed', () => {\r\n            const collapsible = mountComponentWithProps({\r\n                ...basicCollapsibleContainerProps,\r\n                informationUrl: 'http://whatever.com',\r\n            });\r\n            expect(collapsible.find(`.${styles.header}`).find(LinkSvg).length).toBe(1);\r\n            expect(\r\n                collapsible\r\n                    .find(`.${styles.header}`)\r\n                    .find(LinkSvg)\r\n                    .prop('svg').svgClass\r\n            ).toContain('fill-orange');\r\n        });\r\n\r\n        it('should render with a grey Svg nested in a Tooltip if informationTooltip is passed and not informationUrl', () => {\r\n            const collapsible = mountComponentWithProps({\r\n                ...basicCollapsibleContainerProps,\r\n                informationTooltip: {title: 'whatever'},\r\n            });\r\n            expect(collapsible.find(`.${styles.header}`).find(Tooltip).length).toBe(1);\r\n            expect(\r\n                collapsible\r\n                    .find(`.${styles.header}`)\r\n                    .find(Tooltip)\r\n                    .find(Svg).length\r\n            ).toBe(1);\r\n            expect(\r\n                collapsible\r\n                    .find(`.${styles.header}`)\r\n                    .find(Tooltip)\r\n                    .find(Svg)\r\n                    .prop('svgClass')\r\n            ).toContain('fill-medium-grey');\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=256.bundle.js.map