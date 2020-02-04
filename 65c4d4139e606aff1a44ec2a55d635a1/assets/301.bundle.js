(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{1409:function(e,t,r){"use strict";r.r(t),t.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {addOptionPicker, changeOptionPicker} from '../../optionPicker/OptionPickerActions';\r\nimport {changeDatePickerLowerLimit, changeDatePickerUpperLimit, DateLimits, selectDate} from '../DatePickerActions';\r\nimport {DatesSelection, IDatesSelectionProps} from '../DatesSelection';\r\nimport {DatesSelectionConnected} from '../DatesSelectionConnected';\r\n\r\ndescribe('Date picker', () => {\r\n    describe('<DatesSelectionConnected />', () => {\r\n        const DATES_SELECTION_ID: string = 'dates-selection';\r\n        const NOW: Date = new Date();\r\n\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let datesSelection: ReactWrapper<IDatesSelectionProps, any>;\r\n        let store: Store<IReactVaporState>;\r\n\r\n        const mountComponent = (props = {}) => {\r\n            if (wrapper && wrapper.length) {\r\n                wrapper.unmount();\r\n            }\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <DatesSelectionConnected id={DATES_SELECTION_ID} {...props} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            wrapper.update();\r\n            datesSelection = wrapper.find(DatesSelection).first();\r\n        };\r\n\r\n        beforeEach(() => {\r\n            jasmine.clock().install();\r\n            jasmine.clock().mockDate(NOW);\r\n            store = TestUtils.buildStore();\r\n\r\n            mountComponent();\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n            jasmine.clock().uninstall();\r\n        });\r\n\r\n        it('should get an id as a prop', () => {\r\n            const idProp = datesSelection.props().id;\r\n\r\n            expect(idProp).toBeDefined();\r\n            expect(idProp).toBe(DATES_SELECTION_ID);\r\n        });\r\n\r\n        it('should get the lower limit as a prop', () => {\r\n            const lowerLimitProp = datesSelection.props().lowerLimit;\r\n\r\n            expect(lowerLimitProp).toBeDefined();\r\n        });\r\n\r\n        it('should get the upper limit as a prop', () => {\r\n            const upperLimitProp = datesSelection.props().upperLimit;\r\n\r\n            expect(upperLimitProp).toBeDefined();\r\n        });\r\n\r\n        it('should get the quick option as a prop', () => {\r\n            const quickOptionProp = datesSelection.props().quickOption;\r\n\r\n            expect(quickOptionProp).toBeDefined();\r\n            expect(quickOptionProp).toBe('');\r\n        });\r\n\r\n        it('should get if one of the pricker is being selected as a prop', () => {\r\n            const isSelectingProp = datesSelection.props().isSelecting;\r\n\r\n            expect(isSelectingProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on render as a prop', () => {\r\n            const onRenderProp = datesSelection.props().onRender;\r\n\r\n            expect(onRenderProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on destroy as a prop', () => {\r\n            const onDestroyProp = datesSelection.props().onDestroy;\r\n\r\n            expect(onDestroyProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on blur as a prop', () => {\r\n            const onBlurProp = datesSelection.props().onBlur;\r\n\r\n            expect(onBlurProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on change as a prop', () => {\r\n            const onClickProp = datesSelection.props().onClick;\r\n\r\n            expect(onClickProp).toBeDefined();\r\n        });\r\n\r\n        it('should return the current date for the lower limit when the date picker does not exist in the state', () => {\r\n            store.dispatch(clearState());\r\n            wrapper.update();\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: DATES_SELECTION_ID})).toBeUndefined();\r\n            expect(wrapper.find(DatesSelection).props().lowerLimit).toEqual(NOW);\r\n        });\r\n\r\n        it('should return the current date for the upper limit when the date picker does not exist in the state', () => {\r\n            store.dispatch(clearState());\r\n            wrapper.update();\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: DATES_SELECTION_ID})).toBeUndefined();\r\n            expect(wrapper.find(DatesSelection).props().upperLimit).toEqual(NOW);\r\n        });\r\n\r\n        it('should return an empty string for the picker selected when the date picker does not exist in the state', () => {\r\n            store.dispatch(clearState());\r\n            wrapper.update();\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: DATES_SELECTION_ID})).toBeUndefined();\r\n            expect(wrapper.find(DatesSelection).props().isSelecting).toBe('');\r\n        });\r\n\r\n        it('should return the lower limit from the state when the date picker exists in the state', () => {\r\n            const expectedValue: Date = new Date(new Date().setHours(11, 1, 11, 1));\r\n\r\n            store.dispatch(changeDatePickerLowerLimit(DATES_SELECTION_ID, expectedValue));\r\n            wrapper.update();\r\n\r\n            expect(wrapper.find(DatesSelection).props().lowerLimit).toBe(expectedValue);\r\n        });\r\n\r\n        it('should return the upper limit from the state when the date picker exists in the state', () => {\r\n            const expectedValue: Date = new Date(new Date().setHours(11, 1, 11, 1));\r\n\r\n            store.dispatch(changeDatePickerUpperLimit(DATES_SELECTION_ID, expectedValue));\r\n            wrapper.update();\r\n\r\n            expect(wrapper.find(DatesSelection).props().upperLimit).toBe(expectedValue);\r\n        });\r\n\r\n        it('should return the picker selected when the date picker exists in the state', () => {\r\n            const expectedValue: string = 'one limit';\r\n\r\n            store.dispatch(selectDate(DATES_SELECTION_ID, expectedValue));\r\n            wrapper.update();\r\n\r\n            expect(wrapper.find(DatesSelection).props().isSelecting).toBe(expectedValue);\r\n        });\r\n\r\n        it('should return the selected value if the option picker exists in the state', () => {\r\n            const expectedValue: string = 'this option';\r\n\r\n            store.dispatch(addOptionPicker(DATES_SELECTION_ID));\r\n            store.dispatch(changeOptionPicker(DATES_SELECTION_ID, 'this label', expectedValue));\r\n            wrapper.update();\r\n\r\n            expect(wrapper.find(DatesSelection).props().quickOption).toBe(expectedValue);\r\n        });\r\n\r\n        it('should call onRender prop when mounted', () => {\r\n            wrapper.unmount();\r\n            store.dispatch(clearState());\r\n\r\n            expect(store.getState().datePickers.length).toBe(0);\r\n\r\n            wrapper.mount();\r\n\r\n            expect(store.getState().datePickers.length).toBe(1);\r\n        });\r\n\r\n        it('should call onDestroy prop when will unmount', () => {\r\n            wrapper.unmount();\r\n\r\n            expect(store.getState().datePickers.length).toBe(0);\r\n        });\r\n\r\n        it('should set the selected picker to the one sent when calling the onClick prop', () => {\r\n            let expectedValue: string = DateLimits.upper;\r\n\r\n            datesSelection.props().onClick(true);\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: DATES_SELECTION_ID}).selected).toBe(expectedValue);\r\n\r\n            expectedValue = DateLimits.lower;\r\n\r\n            datesSelection.props().onClick(false);\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: DATES_SELECTION_ID}).selected).toBe(expectedValue);\r\n        });\r\n\r\n        it('should change the lower limit in the state when calling the onBlur prop with the lower limit', () => {\r\n            const expectedValue: Date = new Date(new Date().setHours(5, 5, 5, 5));\r\n\r\n            datesSelection.props().onBlur(expectedValue, false);\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: DATES_SELECTION_ID}).lowerLimit).toBe(expectedValue);\r\n        });\r\n\r\n        it('should change the upper limit in the state to the new lower limit date when calling the onBlur prop with the lower limit when isRange prop is false', () => {\r\n            mountComponent({isRange: false});\r\n            const expectedValue: Date = new Date(new Date().setHours(5, 5, 5, 5));\r\n\r\n            datesSelection.props().onBlur(expectedValue, false);\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: DATES_SELECTION_ID}).upperLimit).toBe(expectedValue);\r\n        });\r\n\r\n        it('should not change the upper limit in the state when calling the onBlur prop with the lower limit when isRange prop is true', () => {\r\n            mountComponent({isRange: true});\r\n            const newValue: Date = new Date(new Date().setHours(5, 5, 5, 5));\r\n            const expectedValue: Date = _.findWhere(store.getState().datePickers, {id: DATES_SELECTION_ID}).upperLimit;\r\n\r\n            datesSelection.props().onBlur(newValue, false);\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: DATES_SELECTION_ID}).upperLimit).toBe(expectedValue);\r\n        });\r\n\r\n        it('should deselect the quick option when calling onBlur prop if the call does not come from the option picker', () => {\r\n            const expectedValue: string = 'anything';\r\n            const expectedLabel: string = 'something';\r\n\r\n            store.dispatch(addOptionPicker(DATES_SELECTION_ID));\r\n            store.dispatch(changeOptionPicker(DATES_SELECTION_ID, expectedLabel, expectedValue));\r\n\r\n            datesSelection.props().onBlur(new Date(), true, true);\r\n\r\n            expect(_.findWhere(store.getState().optionPickers, {id: DATES_SELECTION_ID}).selectedValue).toBe(\r\n                expectedValue\r\n            );\r\n            expect(_.findWhere(store.getState().optionPickers, {id: DATES_SELECTION_ID}).selectedLabel).toBe(\r\n                expectedLabel\r\n            );\r\n\r\n            datesSelection.props().onBlur(new Date(), true, false);\r\n            expect(_.findWhere(store.getState().optionPickers, {id: DATES_SELECTION_ID}).selectedValue).toBe('');\r\n            expect(_.findWhere(store.getState().optionPickers, {id: DATES_SELECTION_ID}).selectedLabel).toBe('');\r\n        });\r\n\r\n        it('should remove the selected limit on blur if the lowerLimit input has changed', () => {\r\n            store.dispatch(selectDate(DATES_SELECTION_ID, DateLimits.lower));\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: DATES_SELECTION_ID}).selected).toBe(DateLimits.lower);\r\n\r\n            datesSelection.props().onBlur(new Date(), false);\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: DATES_SELECTION_ID}).selected).toBe('');\r\n        });\r\n\r\n        it('should remove the selected limit on blur if the upperLimit input has changed', () => {\r\n            store.dispatch(selectDate(DATES_SELECTION_ID, DateLimits.upper));\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: DATES_SELECTION_ID}).selected).toBe(DateLimits.upper);\r\n\r\n            datesSelection.props().onBlur(new Date(), true);\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: DATES_SELECTION_ID}).selected).toBe('');\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=301.bundle.js.map