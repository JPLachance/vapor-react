(window.webpackJsonp=window.webpackJsonp||[]).push([[970],{2068:function(r,t,n){"use strict";n.r(t),t.default="import * as React from 'react';\r\nimport {DragDropContext} from 'react-dnd';\r\nimport TestBackend from 'react-dnd-test-backend';\r\nimport * as Redux from 'redux';\r\nimport thunk from 'redux-thunk';\r\nimport * as _ from 'underscore';\r\n\r\nimport createMockStore, {MockStoreEnhanced} from 'redux-mock-store';\r\nimport {ISvgProps} from '../../components/svg/Svg';\r\nimport {IExampleServerTableState} from '../../components/table-hoc/examples/TableHOCServerExamples';\r\nimport {ITooltipProps} from '../../components/tooltip/Tooltip';\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {ReactVaporReducers} from '../../ReactVaporReducers';\r\nimport {CommonActions, IDispatch} from '../ReduxUtils';\r\n\r\nexport interface IReactVaporTestState extends IReactVaporState {\r\n    lastAction?: Redux.Action;\r\n    tableHOCExample?: IExampleServerTableState;\r\n}\r\n\r\nexport class TestUtils {\r\n    static buildStore() {\r\n        const reactVaporReducers = Redux.combineReducers<IReactVaporState>({\r\n            ...ReactVaporReducers,\r\n        });\r\n\r\n        const reactVapor = (state: IReactVaporTestState, action: Redux.Action) => {\r\n            state = action.type === CommonActions.clearState ? undefined : state;\r\n            return reactVaporReducers(state, action as any);\r\n        };\r\n\r\n        return Redux.createStore(reactVapor, Redux.applyMiddleware(thunk));\r\n    }\r\n\r\n    static randomDate() {\r\n        return new Date(+new Date() - Math.floor(Math.random() * 10000000000));\r\n    }\r\n\r\n    static randomValue1To100() {\r\n        return Math.floor(Math.random() * 100 + 1);\r\n    }\r\n\r\n    static makeDebounceStatic() {\r\n        // tslint:disable\r\n        spyOn(_, 'debounce').and.callFake(function(func: () => void) {\r\n            return function(this: any) {\r\n                func.apply(this, arguments);\r\n            };\r\n        });\r\n        // tslint:enable\r\n    }\r\n\r\n    static makeDeferSync() {\r\n        // tslint:disable\r\n        spyOn(_, 'defer').and.callFake(function(this: any, func: () => void) {\r\n            func.apply(this, arguments);\r\n        });\r\n        // tslint:enable\r\n    }\r\n\r\n    static wrapComponentInDnDContext(WrappedComponent: any) {\r\n        @DragDropContext(TestBackend)\r\n        class TestContextContainer extends React.Component {\r\n            render() {\r\n                return React.createElement(WrappedComponent, this.props);\r\n            }\r\n        }\r\n\r\n        return TestContextContainer;\r\n    }\r\n}\r\n\r\nexport const defaultMapStateToProps = () => ({});\r\n\r\nexport const defaultSvgProps: ISvgProps = {\r\n    svgName: 'domain-google',\r\n    svgClass: 'icon mod-2x',\r\n};\r\n\r\nexport const defaultTooltipProps: ITooltipProps = {\r\n    title: 'default tooltip description',\r\n    placement: 'bottom',\r\n    container: 'body',\r\n};\r\n\r\nexport const triggerAlertFunction = () => {\r\n    alert(`Alert function triggered`);\r\n};\r\n\r\nexport type ReactVaporMockStore = MockStoreEnhanced<IReactVaporState, IDispatch<IReactVaporState>>;\r\nexport const getStoreMock = createMockStore<Partial<IReactVaporState>, IDispatch<IReactVaporState>>([thunk]);\r\n"}}]);
//# sourceMappingURL=970.bundle.js.map