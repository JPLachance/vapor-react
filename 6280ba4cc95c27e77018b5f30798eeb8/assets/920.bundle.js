(window.webpackJsonp=window.webpackJsonp||[]).push([[920],{2016:function(t,n,o){"use strict";o.r(n),n.default="import {mountWithStore} from 'enzyme-redux';\r\nimport * as React from 'react';\r\n\r\nimport {Input} from '../../../components/input/Input';\r\nimport {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';\r\nimport {IWithDirty, IWithDirtyProps, withDirty} from '../withDirty';\r\nimport {WithDirtyActions} from '../withDirtyActions';\r\n\r\ndescribe('Component with dirty', () => {\r\n    let store: ReactVaporMockStore;\r\n\r\n    beforeEach(() => {\r\n        store = getStoreMock({\r\n            dirtyComponents: [],\r\n        });\r\n    });\r\n\r\n    class SomeInput extends React.Component<IWithDirtyProps> {\r\n        static ID = 'SomeInput';\r\n\r\n        render() {\r\n            return <Input onChange={() => this.props.toggleIsDirty(true)} />;\r\n        }\r\n    }\r\n\r\n    const mountComponentWithProps = (config?: Partial<IWithDirty>) => {\r\n        const SomeInputWithEditingHOC = withDirty({id: SomeInput.ID, showDirty: () => 'Hello', ...config})(SomeInput);\r\n        return mountWithStore(<SomeInputWithEditingHOC />, store);\r\n    };\r\n\r\n    it('should mount without error', () => {\r\n        expect(() => mountComponentWithProps()).not.toThrow();\r\n    });\r\n\r\n    it('should set the component as not dirty on mount', () => {\r\n        mountComponentWithProps();\r\n        expect(store.getActions()).toContain(WithDirtyActions.toggle(SomeInput.ID, undefined));\r\n    });\r\n\r\n    it('should not set the component as dirty if isDirty is not set to true in the config', () => {\r\n        mountComponentWithProps();\r\n        expect(store.getActions()).not.toContain(WithDirtyActions.toggle(SomeInput.ID, true));\r\n    });\r\n\r\n    it('should set the component as dirty if isDirty is set to true in the config', () => {\r\n        mountComponentWithProps({isDirty: true});\r\n        expect(store.getActions()).toContain(WithDirtyActions.toggle(SomeInput.ID, true));\r\n    });\r\n\r\n    it('should remove the component as dirty in the state on unmount', () => {\r\n        const component = mountComponentWithProps({isDirty: true});\r\n        expect(store.getActions()).not.toContain(WithDirtyActions.toggle(SomeInput.ID, false));\r\n\r\n        component.unmount();\r\n\r\n        expect(store.getActions()).toContain(WithDirtyActions.toggle(SomeInput.ID, false));\r\n    });\r\n\r\n    it('should contains the showDirty element', () => {\r\n        const el = <span className=\"this-is-it\" />;\r\n        const component = mountComponentWithProps({showDirty: () => el});\r\n\r\n        expect(component.find('.this-is-it').exists()).toBe(true);\r\n    });\r\n\r\n    it('should get the toggleIsDirty as a prop', () => {\r\n        const el = <span className=\"this-is-it\" />;\r\n        const component = mountComponentWithProps({showDirty: () => el});\r\n\r\n        expect(component.find('.this-is-it').exists()).toBe(true);\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=920.bundle.js.map