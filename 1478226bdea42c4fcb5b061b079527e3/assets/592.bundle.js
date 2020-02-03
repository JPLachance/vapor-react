(window.webpackJsonp=window.webpackJsonp||[]).push([[592],{1697:function(n,t,r){"use strict";r.r(t),t.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {LoadingConnected} from '../../loading/LoadingConnected';\r\nimport {INavigationProps, Navigation} from '../Navigation';\r\nimport {NavigationConnected} from '../NavigationConnected';\r\nimport {NavigationPaginationConnected} from '../pagination/NavigationPaginationConnected';\r\nimport {NavigationPaginationSelect} from '../pagination/NavigationPaginationSelect';\r\nimport {NavigationPerPageConnected} from '../perPage/NavigationPerPageConnected';\r\nimport {NavigationPerPageSelect} from '../perPage/NavigationPerPageSelect';\r\n\r\ndescribe('<NavigationConnected />', () => {\r\n    const basicNavigationProps: INavigationProps = {\r\n        id: 'navigation',\r\n        totalPages: 10,\r\n        totalEntries: 105,\r\n        perPageNumbers: [10, 100],\r\n        initialPosition: 0,\r\n    };\r\n    let store: Store<IReactVaporState>;\r\n    let wrapper: ReactWrapper<any, any>;\r\n    let navigation: ReactWrapper<INavigationProps, any>;\r\n\r\n    beforeEach(() => {\r\n        store = TestUtils.buildStore();\r\n\r\n        wrapper = mount(\r\n            <Provider store={store}>\r\n                <div>\r\n                    <NavigationConnected {...basicNavigationProps} />\r\n                </div>\r\n            </Provider>,\r\n            {attachTo: document.getElementById('App')}\r\n        );\r\n        navigation = wrapper.find(Navigation).first();\r\n    });\r\n\r\n    afterEach(() => {\r\n        store.dispatch(clearState());\r\n        wrapper.detach();\r\n    });\r\n\r\n    it('should get if it is loading as a prop', () => {\r\n        const isLoadingProp = navigation.props().isLoading;\r\n\r\n        expect(isLoadingProp).toBeDefined();\r\n        expect(isLoadingProp).toBe(true);\r\n    });\r\n\r\n    it('should get withReduxState as a prop', () => {\r\n        const withReduxStateProp = navigation.props().withReduxState;\r\n\r\n        expect(withReduxStateProp).toBeDefined();\r\n        expect(withReduxStateProp).toBe(true);\r\n    });\r\n\r\n    it('should render a <LoadingConnected /> component', () => {\r\n        expect(navigation.find(LoadingConnected).length).toBe(1);\r\n    });\r\n\r\n    it('should render a <NavigationPaginationConnected /> component if totalPages is higher than 1', () => {\r\n        expect(navigation.find(NavigationPaginationConnected).length).toBe(1);\r\n    });\r\n\r\n    it('should render a <NavigationPerPageConnected /> component if totalEntries is higher than the first perPageNumber', () => {\r\n        expect(navigation.find(NavigationPerPageConnected).length).toBe(1);\r\n    });\r\n\r\n    it('should adjust page selected to appropriate one if a perPageSelect is clicked', () => {\r\n        wrapper\r\n            .find(NavigationPaginationSelect)\r\n            .last()\r\n            .simulate('click');\r\n\r\n        expect(\r\n            _.findWhere(store.getState().paginationComposite, {id: `pagination-${basicNavigationProps.id}`}).pageNb\r\n        ).toBe(6);\r\n\r\n        navigation\r\n            .find(NavigationPerPageSelect)\r\n            .last()\r\n            .simulate('click');\r\n        wrapper.update();\r\n\r\n        expect(\r\n            _.findWhere(store.getState().paginationComposite, {id: `pagination-${basicNavigationProps.id}`}).pageNb\r\n        ).toBe(0);\r\n\r\n        wrapper\r\n            .find(NavigationPaginationSelect)\r\n            .at(1)\r\n            .simulate('click');\r\n        wrapper\r\n            .find(NavigationPerPageSelect)\r\n            .first()\r\n            .simulate('click');\r\n\r\n        expect(\r\n            _.findWhere(store.getState().paginationComposite, {id: `pagination-${basicNavigationProps.id}`}).pageNb\r\n        ).toBe(9);\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=592.bundle.js.map