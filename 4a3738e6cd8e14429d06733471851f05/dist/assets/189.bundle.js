(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{1283:function(e,t,r){"use strict";r.r(t),t.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as moment from 'moment';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {DateUtils} from '../../../utils/DateUtils';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {\r\n    addDatePicker,\r\n    changeDatePickerLowerLimit,\r\n    changeDatePickerUpperLimit,\r\n    DateLimits,\r\n    selectDate,\r\n} from '../../datePicker/DatePickerActions';\r\nimport {IDatePickerState} from '../../datePicker/DatePickerReducers';\r\nimport {addOptionPicker, changeOptionPicker} from '../../optionPicker/OptionPickerActions';\r\nimport {changeOptionsCycle} from '../../optionsCycle/OptionsCycleActions';\r\nimport {OptionsCycleConnected} from '../../optionsCycle/OptionsCycleConnected';\r\nimport {Calendar, ICalendarProps, MONTH_PICKER_ID, YEAR_PICKER_ID} from '../Calendar';\r\nimport {CalendarConnected} from '../CalendarConnected';\r\n\r\ndescribe('Calendar', () => {\r\n    const CALENDAR_ID: string = 'calendar';\r\n    const PICKER_ID: string = 'some-picker';\r\n    const DEFAULT_ADD_DATE_PICKER_WITHOUT_RANGE = addDatePicker(PICKER_ID, false, undefined, 'any', CALENDAR_ID);\r\n    const DEFAULT_ADD_DATE_PICKER_WITH_RANGE = addDatePicker(PICKER_ID, true, undefined, 'any', CALENDAR_ID);\r\n\r\n    describe('<CalendarConnected />', () => {\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let calendar: ReactWrapper<ICalendarProps, any>;\r\n        let store: Store<IReactVaporState>;\r\n\r\n        const mountComponent = (props = {}) => {\r\n            if (wrapper && wrapper.length) {\r\n                wrapper.unmount();\r\n            }\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <CalendarConnected id={CALENDAR_ID} {...props} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            calendar = wrapper.find(Calendar).first();\r\n        };\r\n\r\n        beforeEach(() => {\r\n            store = TestUtils.buildStore();\r\n\r\n            mountComponent();\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n        });\r\n\r\n        it('should get an id as a prop', () => {\r\n            const idProp = calendar.props().id;\r\n\r\n            expect(idProp).toBeDefined();\r\n            expect(idProp).toBe(CALENDAR_ID);\r\n        });\r\n\r\n        it('should get if it has a redux state as a prop', () => {\r\n            const withReduxStateProp = calendar.props().withReduxState;\r\n\r\n            expect(withReduxStateProp).toBeDefined();\r\n            expect(withReduxStateProp).toBe(true);\r\n        });\r\n\r\n        it('should get the selected month as a prop', () => {\r\n            const selectedMonthProp: number = calendar.props().selectedMonth;\r\n            const expectedSelectedMonth: number = 3;\r\n\r\n            expect(selectedMonthProp).toBeDefined();\r\n            expect(selectedMonthProp).toBe(DateUtils.currentMonth);\r\n\r\n            store.dispatch(changeOptionsCycle(CALENDAR_ID + MONTH_PICKER_ID, expectedSelectedMonth));\r\n            wrapper.update();\r\n\r\n            expect(wrapper.find(Calendar).props().selectedMonth).toBe(expectedSelectedMonth);\r\n        });\r\n\r\n        it('should get the selected year as a prop', () => {\r\n            const selectedYearProp: number = calendar.props().selectedYear;\r\n            const expectedSelectedYear: number = 3;\r\n\r\n            expect(selectedYearProp).toBeDefined();\r\n            expect(selectedYearProp).toBe(10);\r\n\r\n            store.dispatch(changeOptionsCycle(CALENDAR_ID + YEAR_PICKER_ID, expectedSelectedYear));\r\n            wrapper.update();\r\n\r\n            expect(wrapper.find(Calendar).props().selectedYear).toBe(expectedSelectedYear);\r\n        });\r\n\r\n        it('should get the calendar selections as a prop', () => {\r\n            const calendarSelectionProp = calendar.props().calendarSelection;\r\n\r\n            expect(calendarSelectionProp).toBeDefined();\r\n            expect(calendarSelectionProp).toEqual([]);\r\n\r\n            store.dispatch(addDatePicker('any', false, undefined, 'any', CALENDAR_ID));\r\n            wrapper.update();\r\n\r\n            expect(wrapper.find(Calendar).props().calendarSelection.length).toBe(1);\r\n        });\r\n\r\n        it('should get what to do on click as a prop', () => {\r\n            const onClickProp = calendar.props().onClick;\r\n\r\n            expect(onClickProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on date change as a prop', () => {\r\n            const onDateChangeProp = calendar.props().onDateChange;\r\n\r\n            expect(onDateChangeProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on select unselectable as a prop', () => {\r\n            const onSelectUnselectableProp = calendar.props().onSelectUnselectable;\r\n\r\n            expect(onSelectUnselectableProp).toBeDefined();\r\n        });\r\n\r\n        it('should display two <OptionsCycleConnected /> (one for the month picker and the other for the year picker)', () => {\r\n            expect(calendar.find(OptionsCycleConnected).length).toBe(2);\r\n        });\r\n\r\n        it(\r\n            'should set the selected value of the picker to an empty string when calling onClick on a date range picker ' +\r\n                'and the limit selected is the upper one',\r\n            () => {\r\n                const pickerSelected: string = DateLimits.upper;\r\n\r\n                store.dispatch(DEFAULT_ADD_DATE_PICKER_WITH_RANGE);\r\n                store.dispatch(selectDate(PICKER_ID, pickerSelected));\r\n\r\n                expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).selected).toBe(pickerSelected);\r\n\r\n                calendar.props().onClick(PICKER_ID, true, new Date());\r\n\r\n                expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).selected).toBe('');\r\n            }\r\n        );\r\n\r\n        it(\r\n            'should set the selected value of the picker to the upper limit when calling onClick on a date range picker ' +\r\n                'and the limit selected is the lower one',\r\n            () => {\r\n                const pickerSelected: string = DateLimits.lower;\r\n\r\n                store.dispatch(DEFAULT_ADD_DATE_PICKER_WITH_RANGE);\r\n                store.dispatch(selectDate(PICKER_ID, pickerSelected));\r\n\r\n                expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).selected).toBe(pickerSelected);\r\n\r\n                calendar.props().onClick(PICKER_ID, false, new Date());\r\n\r\n                expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).selected).toBe(DateLimits.upper);\r\n            }\r\n        );\r\n\r\n        it(\r\n            'should set the selected value of the picker to an empty string when calling onClick on a standard date picker ' +\r\n                'and the limit selected is the lower one',\r\n            () => {\r\n                const pickerSelected: string = DateLimits.lower;\r\n\r\n                store.dispatch(DEFAULT_ADD_DATE_PICKER_WITHOUT_RANGE);\r\n                store.dispatch(selectDate(PICKER_ID, pickerSelected));\r\n\r\n                expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).selected).toBe(pickerSelected);\r\n\r\n                calendar.props().onClick(PICKER_ID, false, new Date());\r\n\r\n                expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).selected).toBe('');\r\n            }\r\n        );\r\n\r\n        it('should reset the date picker if on click is called without a value', () => {\r\n            store.dispatch(DEFAULT_ADD_DATE_PICKER_WITHOUT_RANGE);\r\n            store.dispatch(selectDate(PICKER_ID, DateLimits.lower));\r\n\r\n            calendar.props().onClick(PICKER_ID, false, new Date());\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).lowerLimit).toBeDefined();\r\n\r\n            calendar.props().onClick(PICKER_ID, false, null);\r\n\r\n            const datePicker: IDatePickerState = _.findWhere(store.getState().datePickers, {id: PICKER_ID});\r\n\r\n            expect(datePicker.lowerLimit).toBe(datePicker.appliedLowerLimit);\r\n            expect(datePicker.selected).toBe('');\r\n        });\r\n\r\n        it('should unselected any option from the option picker when calling onClick', () => {\r\n            const pickerSelected: string = 'something-selected';\r\n            const pickerLabelSelected: string = 'the label';\r\n\r\n            store.dispatch(addOptionPicker(PICKER_ID));\r\n            store.dispatch(changeOptionPicker(PICKER_ID, pickerLabelSelected, pickerSelected));\r\n\r\n            expect(_.findWhere(store.getState().optionPickers, {id: PICKER_ID}).selectedValue).toBe(pickerSelected);\r\n            expect(_.findWhere(store.getState().optionPickers, {id: PICKER_ID}).selectedLabel).toBe(\r\n                pickerLabelSelected\r\n            );\r\n\r\n            calendar.props().onClick(PICKER_ID, false, new Date());\r\n\r\n            expect(_.findWhere(store.getState().optionPickers, {id: PICKER_ID}).selectedValue).toBe('');\r\n            expect(_.findWhere(store.getState().optionPickers, {id: PICKER_ID}).selectedLabel).toBe('');\r\n        });\r\n\r\n        it('should change the upper limit to the end of the day selected if the onClick was called on an upper limit', () => {\r\n            const currentUpperLimit: Date = moment(new Date())\r\n                .add(10, 'day')\r\n                .toDate();\r\n            const newLimit: Date = moment(new Date())\r\n                .add(5, 'day')\r\n                .toDate();\r\n\r\n            store.dispatch(DEFAULT_ADD_DATE_PICKER_WITH_RANGE);\r\n            store.dispatch(changeDatePickerUpperLimit(PICKER_ID, currentUpperLimit));\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).upperLimit).toBe(currentUpperLimit);\r\n\r\n            calendar.props().onClick(PICKER_ID, true, newLimit);\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).upperLimit).toEqual(\r\n                moment(newLimit)\r\n                    .endOf('day')\r\n                    .toDate()\r\n            );\r\n        });\r\n\r\n        it('should change the lower limit if the onClick was called on a lower limit', () => {\r\n            const currentLowerLimit: Date = moment(new Date())\r\n                .add(10, 'day')\r\n                .toDate();\r\n            const newLimit: Date = moment(new Date())\r\n                .subtract(5, 'day')\r\n                .toDate();\r\n\r\n            store.dispatch(DEFAULT_ADD_DATE_PICKER_WITH_RANGE);\r\n            store.dispatch(changeDatePickerLowerLimit(PICKER_ID, currentLowerLimit));\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).lowerLimit).toBe(currentLowerLimit);\r\n\r\n            calendar.props().onClick(PICKER_ID, false, newLimit);\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).lowerLimit).toBe(newLimit);\r\n        });\r\n\r\n        it('should change the upper limit if the onClick was called on a lower limit and isLinkedToDateRange prop is false', () => {\r\n            const currentUpperLimit: Date = moment(new Date())\r\n                .add(10, 'day')\r\n                .toDate();\r\n            const newLimit: Date = moment(new Date())\r\n                .subtract(5, 'day')\r\n                .toDate();\r\n\r\n            mountComponent({isLinkedToDateRange: false});\r\n            store.dispatch(DEFAULT_ADD_DATE_PICKER_WITH_RANGE);\r\n            store.dispatch(changeDatePickerUpperLimit(PICKER_ID, currentUpperLimit));\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).upperLimit).toBe(currentUpperLimit);\r\n\r\n            calendar.props().onClick(PICKER_ID, false, newLimit);\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).upperLimit).toBe(newLimit);\r\n        });\r\n\r\n        it('should not change the upper limit if onClick was called on a lower limit and isLinkedToDateRange prop is undefined', () => {\r\n            const currentUpperLimit: Date = moment(new Date())\r\n                .add(10, 'day')\r\n                .toDate();\r\n            const newLimit: Date = moment(new Date())\r\n                .subtract(5, 'day')\r\n                .toDate();\r\n\r\n            mountComponent({isLinkedToDateRange: undefined});\r\n            store.dispatch(DEFAULT_ADD_DATE_PICKER_WITH_RANGE);\r\n            store.dispatch(changeDatePickerUpperLimit(PICKER_ID, currentUpperLimit));\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).upperLimit).toBe(currentUpperLimit);\r\n\r\n            calendar.props().onClick(PICKER_ID, false, newLimit);\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).upperLimit).toBe(currentUpperLimit);\r\n        });\r\n\r\n        it('should not change the upper limit if onClick was called on a lower limit and isLinkedToDateRange prop is true', () => {\r\n            const currentUpperLimit: Date = moment(new Date())\r\n                .add(10, 'day')\r\n                .toDate();\r\n            const newLimit: Date = moment(new Date())\r\n                .subtract(5, 'day')\r\n                .toDate();\r\n\r\n            mountComponent({isLinkedToDateRange: true});\r\n            store.dispatch(DEFAULT_ADD_DATE_PICKER_WITH_RANGE);\r\n            store.dispatch(changeDatePickerUpperLimit(PICKER_ID, currentUpperLimit));\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).upperLimit).toBe(currentUpperLimit);\r\n\r\n            calendar.props().onClick(PICKER_ID, false, newLimit);\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).upperLimit).toBe(currentUpperLimit);\r\n        });\r\n\r\n        it('should change the selected month and year if one of the calendar selection changed a limit', () => {\r\n            const secondYear: number = 1;\r\n            const monthId: string = CALENDAR_ID + MONTH_PICKER_ID;\r\n            const yearId: string = CALENDAR_ID + YEAR_PICKER_ID;\r\n\r\n            store.dispatch(changeOptionsCycle(monthId, 13));\r\n            store.dispatch(changeOptionsCycle(yearId, secondYear));\r\n\r\n            store.dispatch(DEFAULT_ADD_DATE_PICKER_WITH_RANGE);\r\n            store.dispatch(\r\n                changeDatePickerLowerLimit(\r\n                    PICKER_ID,\r\n                    moment()\r\n                        .endOf('hour')\r\n                        .toDate()\r\n                )\r\n            );\r\n\r\n            expect(_.findWhere(store.getState().optionsCycles, {id: monthId}).currentOption).toBe(\r\n                DateUtils.currentMonth\r\n            );\r\n            expect(_.findWhere(store.getState().optionsCycles, {id: yearId}).currentOption).not.toBe(secondYear);\r\n\r\n            store.dispatch(changeOptionsCycle(monthId, 13));\r\n            store.dispatch(changeOptionsCycle(yearId, secondYear));\r\n\r\n            store.dispatch(DEFAULT_ADD_DATE_PICKER_WITH_RANGE);\r\n            store.dispatch(\r\n                changeDatePickerUpperLimit(\r\n                    PICKER_ID,\r\n                    moment()\r\n                        .endOf('year')\r\n                        .toDate()\r\n                )\r\n            );\r\n\r\n            expect(_.findWhere(store.getState().optionsCycles, {id: monthId}).currentOption).toBe(11);\r\n            expect(_.findWhere(store.getState().optionsCycles, {id: yearId}).currentOption).not.toBe(secondYear);\r\n        });\r\n\r\n        it('should set the upper limit to null and select the upper limit if an unselectable day has been selected', () => {\r\n            // this can legitimately happen only under the following conditions: when a rule for range length is set, a both limits are set\r\n            // then a new lower limit that exceeds the range length is being set\r\n\r\n            const currentUpperLimit: Date = moment(new Date())\r\n                .add(10, 'day')\r\n                .toDate();\r\n\r\n            store.dispatch(DEFAULT_ADD_DATE_PICKER_WITH_RANGE);\r\n            store.dispatch(changeDatePickerUpperLimit(PICKER_ID, currentUpperLimit));\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).upperLimit).toBe(currentUpperLimit);\r\n            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).selected).toBe('');\r\n\r\n            calendar.props().onSelectUnselectable(PICKER_ID);\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).upperLimit).toBe(null);\r\n            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).selected).toBe(DateLimits.upper);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=189.bundle.js.map