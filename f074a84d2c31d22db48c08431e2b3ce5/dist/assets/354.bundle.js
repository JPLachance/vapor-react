(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{1450:function(r,o,n){"use strict";n.r(o),o.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport * as _ from 'underscore';\r\n\r\nimport {keyCode} from '../../../utils/InputUtils';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {IReactVaporTestState, TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {UUID} from '../../../utils/UUID';\r\nimport {DropdownSearch, IDropdownSearchProps} from '../DropdownSearch';\r\nimport {\r\n    DropdownSearchActions,\r\n    toggleDropdownSearch,\r\n    updateActiveOptionDropdownSearch,\r\n    updateOptionsDropdownSearch,\r\n} from '../DropdownSearchActions';\r\nimport {DropdownSearchConnected} from '../DropdownSearchConnected';\r\nimport {defaultSelectedOptionPlaceholder} from '../DropdownSearchReducers';\r\n\r\ndescribe('DropdownSearch', () => {\r\n    const id: string = UUID.generate();\r\n\r\n    describe('<DropdownSearchConnected />', () => {\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let dropdownSearch: ReactWrapper<IDropdownSearchProps, any>;\r\n        let store: Store<IReactVaporTestState>;\r\n\r\n        const defaultOptions = [{value: 'a'}, {value: 'b'}];\r\n\r\n        const renderDropdownSearchConnected = () => {\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <DropdownSearchConnected id={id} defaultOptions={defaultOptions} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            dropdownSearch = wrapper.find(DropdownSearch).first();\r\n        };\r\n\r\n        beforeEach(() => {\r\n            store = TestUtils.buildStore();\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n        });\r\n\r\n        describe('mount and unmount', () => {\r\n            beforeEach(() => {\r\n                renderDropdownSearchConnected();\r\n            });\r\n\r\n            it('should call onMount prop when mounted', () => {\r\n                wrapper.unmount();\r\n                store.dispatch(clearState());\r\n                expect(store.getState().dropdownSearch.length).toBe(0);\r\n\r\n                wrapper.mount();\r\n                expect(store.getState().dropdownSearch.length).toBe(1);\r\n            });\r\n\r\n            it('should also dispatch a updateOptionsDropdownSearch onMount if there is a defaultSelectedOption', () => {\r\n                expect(store.getState().lastAction.type).not.toBe(DropdownSearchActions.update);\r\n\r\n                wrapper.unmount();\r\n\r\n                wrapper = mount(\r\n                    <Provider store={store}>\r\n                        <DropdownSearchConnected\r\n                            id={id}\r\n                            defaultOptions={defaultOptions}\r\n                            defaultSelectedOption={defaultSelectedOptionPlaceholder}\r\n                        />\r\n                    </Provider>,\r\n                    {attachTo: document.getElementById('App')}\r\n                );\r\n\r\n                expect(store.getState().lastAction.type).toBe(DropdownSearchActions.update);\r\n            });\r\n\r\n            it('should call onDestroy prop when will unmount', () => {\r\n                wrapper.unmount();\r\n                expect(store.getState().dropdownSearch.length).toBe(0);\r\n            });\r\n        });\r\n\r\n        describe('mapStateToProps', () => {\r\n            beforeEach(() => {\r\n                renderDropdownSearchConnected();\r\n            });\r\n\r\n            it('should get an id as a prop', () => {\r\n                const idProp = dropdownSearch.props().id;\r\n\r\n                expect(idProp).toBeDefined();\r\n                expect(idProp).toBe(id);\r\n            });\r\n\r\n            it('should get the isOpened as a prop', () => {\r\n                const isOpenedProp = dropdownSearch.props().isOpened;\r\n\r\n                expect(isOpenedProp).toBeDefined();\r\n                expect(isOpenedProp).toBe(false);\r\n            });\r\n\r\n            it('should get the options as a prop', () => {\r\n                const optionsProp = dropdownSearch.props().options;\r\n\r\n                expect(optionsProp).toBeDefined();\r\n                expect(optionsProp.length).toBe(3);\r\n            });\r\n\r\n            it('should get the default selected option as a prop', () => {\r\n                const defaultSelectedOptionProp = _.findWhere(dropdownSearch.props().options, {selected: true});\r\n\r\n                expect(defaultSelectedOptionProp).toBeDefined();\r\n                expect(defaultSelectedOptionProp).toBe(defaultSelectedOptionPlaceholder);\r\n            });\r\n\r\n            it('should get the filterText as a prop', () => {\r\n                const filterTextProp = dropdownSearch.props().filterText;\r\n\r\n                expect(filterTextProp).toBeDefined();\r\n                expect(filterTextProp).toBe('');\r\n            });\r\n\r\n            it('should get the setFocusOnDropdownButton undefined as a prop on mount', () => {\r\n                const setFocusOnDropdownButtonProp = dropdownSearch.props().setFocusOnDropdownButton;\r\n\r\n                expect(setFocusOnDropdownButtonProp).toBeUndefined();\r\n            });\r\n\r\n            it('should get the activeOption undefined as a prop on mount', () => {\r\n                const activeOptionProp = dropdownSearch.props().activeOption;\r\n\r\n                expect(activeOptionProp).toBeUndefined();\r\n            });\r\n        });\r\n\r\n        describe('mapDispatchToProps', () => {\r\n            beforeEach(() => {\r\n                renderDropdownSearchConnected();\r\n            });\r\n\r\n            it('should get what to do on destroy as a prop', () => {\r\n                const onDestroyProp = dropdownSearch.props().onDestroy;\r\n\r\n                expect(onDestroyProp).toBeDefined();\r\n            });\r\n\r\n            it('should get what to do on onMount as a prop', () => {\r\n                const onMountProp = dropdownSearch.props().onMount;\r\n\r\n                expect(onMountProp).toBeDefined();\r\n            });\r\n\r\n            it('should get what to do on onBlur as a prop', () => {\r\n                const onBlurProp = dropdownSearch.props().onBlur;\r\n\r\n                expect(onBlurProp).toBeDefined();\r\n            });\r\n            it('should get what to do on onOptionClick as a prop', () => {\r\n                const onOptionClickProp = dropdownSearch.props().onOptionClick;\r\n\r\n                expect(onOptionClickProp).toBeDefined();\r\n            });\r\n\r\n            it('should get what to do on onFilterTextChange as a prop', () => {\r\n                const onFilterClickProp = dropdownSearch.props().onFilterTextChange;\r\n\r\n                expect(onFilterClickProp).toBeDefined();\r\n            });\r\n\r\n            it('should get what to do on onKeyDownFilterBox as a prop', () => {\r\n                const onKeyDownFilterBox = dropdownSearch.props().onKeyDownFilterBox;\r\n\r\n                expect(onKeyDownFilterBox).toBeDefined();\r\n            });\r\n\r\n            it('should get what to do on onKeyDownDropdownButton as a prop', () => {\r\n                const onKeyDownDropdownButton = dropdownSearch.props().onKeyDownDropdownButton;\r\n\r\n                expect(onKeyDownDropdownButton).toBeDefined();\r\n            });\r\n\r\n            it('should get what to do on onMouseEnterDropdown as a prop', () => {\r\n                const onMouseEnterDropdown = dropdownSearch.props().onMouseEnterDropdown;\r\n\r\n                expect(onMouseEnterDropdown).toBeDefined();\r\n            });\r\n\r\n            it('should get what to do on onClose as a prop', () => {\r\n                const onClose = dropdownSearch.props().onClose;\r\n\r\n                expect(onClose).toBeDefined();\r\n            });\r\n\r\n            it('should toggle the dropdown class to open and close on click on the dropdown button', () => {\r\n                expect(wrapper.find('.dropdown').find('.open').length).toBe(0, 'start closed');\r\n                wrapper.find('.dropdown-toggle').simulate('click');\r\n                expect(wrapper.find('.dropdown').find('.open').length).toBe(1, 'open on first click');\r\n            });\r\n\r\n            it('should close the dropdown on calling onClose', () => {\r\n                wrapper.find('.dropdown-toggle').simulate('click');\r\n                expect(wrapper.find('.open').length).toBe(1);\r\n                wrapper\r\n                    .find(DropdownSearch)\r\n                    .props()\r\n                    .onClose();\r\n                wrapper.update();\r\n                expect(wrapper.find('.dropdown').find('.open').length).toBe(0);\r\n            });\r\n\r\n            it('should toggle the close dropdown on blur', () => {\r\n                const dropdown = wrapper.find('.dropdown');\r\n\r\n                store.dispatch(toggleDropdownSearch(id));\r\n\r\n                dropdownSearch.props().onBlur([]);\r\n\r\n                expect(dropdown.find('.open').length).toBe(0, 'close the dropdown on blur');\r\n            });\r\n\r\n            it('should add the selected value in the state on click an option', () => {\r\n                store.dispatch(updateOptionsDropdownSearch(id, [{value: 'test 1'}, {value: 'test 2'}]));\r\n                store.dispatch(toggleDropdownSearch(id));\r\n                wrapper.update();\r\n\r\n                wrapper\r\n                    .find('li span')\r\n                    .first()\r\n                    .simulate('mouseDown');\r\n\r\n                const selectedOption = store.getState().dropdownSearch[0].options[0];\r\n                expect(selectedOption).not.toBe(defaultSelectedOptionPlaceholder);\r\n                expect(selectedOption.value).toBe('test 1');\r\n            });\r\n\r\n            it('should add the filterText in the state on onFilterTextChange', () => {\r\n                const filter: string = 't';\r\n                expect(store.getState().dropdownSearch[0].filterText).toBe('');\r\n\r\n                dropdownSearch.props().onFilterTextChange(filter);\r\n                expect(store.getState().dropdownSearch[0].filterText).toBe(filter);\r\n            });\r\n\r\n            it('should set the setFocusOnDropdownButton to true if the keyCode send on onKeyDownDropdownButton is \"Enter\"', () => {\r\n                expect(dropdownSearch.props().setFocusOnDropdownButton).toBeUndefined();\r\n\r\n                store.dispatch(updateActiveOptionDropdownSearch(id, keyCode.downArrow));\r\n                wrapper.update();\r\n\r\n                expect(wrapper.find(DropdownSearch).props().setFocusOnDropdownButton).toBe(false);\r\n\r\n                wrapper\r\n                    .find(DropdownSearch)\r\n                    .props()\r\n                    .onKeyDownDropdownButton(keyCode.enter, {value: 'anywoulddo', selected: false});\r\n                wrapper.update();\r\n\r\n                expect(wrapper.find(DropdownSearch).props().setFocusOnDropdownButton).toBe(true);\r\n            });\r\n\r\n            it('should set the setFocusOnDropdownButton to true if the keyCode send on onKeyDownDropdownButton is \"Tab\"', () => {\r\n                expect(dropdownSearch.props().setFocusOnDropdownButton).toBeUndefined();\r\n\r\n                store.dispatch(updateActiveOptionDropdownSearch(id, keyCode.downArrow));\r\n                wrapper.update();\r\n\r\n                expect(wrapper.find(DropdownSearch).props().setFocusOnDropdownButton).toBe(false);\r\n\r\n                wrapper\r\n                    .find(DropdownSearch)\r\n                    .props()\r\n                    .onKeyDownDropdownButton(keyCode.tab, {value: 'anywoulddo', selected: false});\r\n                wrapper.update();\r\n\r\n                expect(wrapper.find(DropdownSearch).props().setFocusOnDropdownButton).toBe(true);\r\n            });\r\n\r\n            it('should set the setFocusOnDropdownButton to true if the keyCode send on onKeyDownFilterBox is \"Tab\"', () => {\r\n                expect(dropdownSearch.props().setFocusOnDropdownButton).toBeUndefined();\r\n\r\n                store.dispatch(updateActiveOptionDropdownSearch(id, keyCode.downArrow));\r\n                wrapper.update();\r\n\r\n                expect(wrapper.find(DropdownSearch).props().setFocusOnDropdownButton).toBe(false);\r\n\r\n                wrapper\r\n                    .find(DropdownSearch)\r\n                    .props()\r\n                    .onKeyDownFilterBox(keyCode.tab, {value: 'anywoulddo', selected: false});\r\n                wrapper.update();\r\n\r\n                expect(wrapper.find(DropdownSearch).props().setFocusOnDropdownButton).toBe(true);\r\n            });\r\n\r\n            it('should update the activeOption on \"upArrow\" and set the setFocusOnDropdownButton to false', () => {\r\n                expect(dropdownSearch.props().activeOption).toBeUndefined();\r\n\r\n                dropdownSearch.props().onKeyDownDropdownButton(keyCode.upArrow);\r\n                wrapper.update();\r\n\r\n                expect(wrapper.find(DropdownSearch).props().activeOption).toBeDefined();\r\n                expect(wrapper.find(DropdownSearch).props().setFocusOnDropdownButton).toBe(false);\r\n            });\r\n\r\n            it('should update the activeOption on \"upArrow\" for the first element if not defined', () => {\r\n                expect(dropdownSearch.props().activeOption).toBeUndefined();\r\n\r\n                dropdownSearch.props().onKeyDownDropdownButton(keyCode.upArrow);\r\n                wrapper.update();\r\n\r\n                expect(wrapper.find(DropdownSearch).props().activeOption).toEqual(defaultOptions[0]);\r\n            });\r\n\r\n            it('should update the activeOption on \"downArrow\" and set the setFocusOnDropdownButton to false', () => {\r\n                expect(dropdownSearch.props().activeOption).toBeUndefined();\r\n\r\n                dropdownSearch.props().onKeyDownDropdownButton(keyCode.downArrow);\r\n                wrapper.update();\r\n\r\n                expect(wrapper.find(DropdownSearch).props().activeOption).toBeDefined();\r\n                expect(wrapper.find(DropdownSearch).props().setFocusOnDropdownButton).toBe(false);\r\n            });\r\n\r\n            it('should update the activeOption on \"downArrow\" for the first element if not defined', () => {\r\n                expect(dropdownSearch.props().activeOption).toBeUndefined();\r\n\r\n                dropdownSearch.props().onKeyDownDropdownButton(keyCode.downArrow);\r\n                wrapper.update();\r\n\r\n                expect(wrapper.find(DropdownSearch).props().activeOption).toEqual(defaultOptions[0]);\r\n            });\r\n\r\n            it('should update the activeOption on \"downArrow\" for the first element if not defined', () => {\r\n                expect(dropdownSearch.props().activeOption).toBeUndefined();\r\n\r\n                dropdownSearch.props().onKeyDownDropdownButton(keyCode.downArrow);\r\n                wrapper.update();\r\n\r\n                expect(wrapper.find(DropdownSearch).props().activeOption).toEqual(defaultOptions[0]);\r\n            });\r\n\r\n            it('should reset the activeOption and remove focus on dropdown on onMouseEnterDropdown', () => {\r\n                dropdownSearch.props().onKeyDownDropdownButton(keyCode.upArrow);\r\n                wrapper.update();\r\n\r\n                expect(wrapper.find(DropdownSearch).props().activeOption).toBeDefined();\r\n\r\n                dropdownSearch.props().onMouseEnterDropdown();\r\n                wrapper.update();\r\n\r\n                expect(wrapper.find(DropdownSearch).props().activeOption).toBeUndefined();\r\n                expect(wrapper.find(DropdownSearch).props().setFocusOnDropdownButton).toBe(false);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=354.bundle.js.map