(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{1384:function(e,n,t){"use strict";t.r(n),n.default="import {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {DEFAULT_DATE_PICKER_COLOR} from '../DatePicker';\r\nimport {\r\n    addDatePicker,\r\n    applyDatePicker,\r\n    changeDatePickerLowerLimit,\r\n    changeDatePickerUpperLimit,\r\n    clearSelection,\r\n    DateLimits,\r\n    DatePickerActions,\r\n    removeDatePicker,\r\n    resetDatePickers,\r\n    selectDate,\r\n} from '../DatePickerActions';\r\nimport {\r\n    IAddDatePickerPayload,\r\n    IChangeDatePickerPayload,\r\n    IDatePickerPayload,\r\n    ISelectDatePickerPayload,\r\n} from '../DatePickerActions';\r\n\r\ndescribe('Date picker', () => {\r\n    describe('DatePickerActions', () => {\r\n        const DATE_PICKER_ID: string = 'date-picker';\r\n        const COLOR: string = 'gray';\r\n        const CALENDAR_ID: string = 'calendar-666';\r\n        const IS_RANGE: boolean = true;\r\n\r\n        it('should create an action to add the date picker', () => {\r\n            const expectedAction: IReduxAction<IAddDatePickerPayload> = {\r\n                type: DatePickerActions.add,\r\n                payload: {\r\n                    id: DATE_PICKER_ID,\r\n                    color: COLOR,\r\n                    calendarId: CALENDAR_ID,\r\n                    isRange: IS_RANGE,\r\n                    rangeLimit: undefined,\r\n                    initiallyUnselected: true,\r\n                    isClearable: true,\r\n                    simple: false,\r\n                    initialDateRange: undefined,\r\n                },\r\n            };\r\n\r\n            expect(addDatePicker(DATE_PICKER_ID, IS_RANGE, undefined, COLOR, CALENDAR_ID, true, true)).toEqual(\r\n                expectedAction\r\n            );\r\n        });\r\n\r\n        it('should create an action to add the date picker with default values if optional values are not specified', () => {\r\n            const expectedAction: IReduxAction<IAddDatePickerPayload> = {\r\n                type: DatePickerActions.add,\r\n                payload: {\r\n                    id: DATE_PICKER_ID,\r\n                    color: DEFAULT_DATE_PICKER_COLOR,\r\n                    calendarId: '',\r\n                    isRange: IS_RANGE,\r\n                    rangeLimit: undefined,\r\n                    initiallyUnselected: false,\r\n                    isClearable: false,\r\n                    simple: false,\r\n                    initialDateRange: undefined,\r\n                },\r\n            };\r\n\r\n            expect(addDatePicker(DATE_PICKER_ID, IS_RANGE, undefined)).toEqual(expectedAction);\r\n        });\r\n\r\n        it('should create an action to remove the date picker', () => {\r\n            const expectedAction: IReduxAction<IDatePickerPayload> = {\r\n                type: DatePickerActions.remove,\r\n                payload: {\r\n                    id: DATE_PICKER_ID,\r\n                },\r\n            };\r\n\r\n            expect(removeDatePicker(DATE_PICKER_ID)).toEqual(expectedAction);\r\n        });\r\n\r\n        it('should create an action to reset the date pickers', () => {\r\n            const expectedAction: IReduxAction<IDatePickerPayload> = {\r\n                type: DatePickerActions.reset,\r\n                payload: {\r\n                    id: DATE_PICKER_ID,\r\n                },\r\n            };\r\n\r\n            expect(resetDatePickers(DATE_PICKER_ID)).toEqual(expectedAction);\r\n        });\r\n\r\n        it('should create an action to apply the date picker', () => {\r\n            const expectedAction: IReduxAction<IDatePickerPayload> = {\r\n                type: DatePickerActions.apply,\r\n                payload: {\r\n                    id: DATE_PICKER_ID,\r\n                },\r\n            };\r\n\r\n            expect(applyDatePicker(DATE_PICKER_ID)).toEqual(expectedAction);\r\n        });\r\n\r\n        it('should create an action to change the lower limit of the date picker', () => {\r\n            const expectedDate: Date = new Date();\r\n            const expectedAction: IReduxAction<IChangeDatePickerPayload> = {\r\n                type: DatePickerActions.changeLowerLimit,\r\n                payload: {\r\n                    id: DATE_PICKER_ID,\r\n                    date: expectedDate,\r\n                },\r\n            };\r\n\r\n            expect(changeDatePickerLowerLimit(DATE_PICKER_ID, expectedDate)).toEqual(expectedAction);\r\n        });\r\n\r\n        it('should create an action to change the upper limit of the date picker', () => {\r\n            const expectedDate: Date = new Date();\r\n            const expectedAction: IReduxAction<IChangeDatePickerPayload> = {\r\n                type: DatePickerActions.changeUpperLimit,\r\n                payload: {\r\n                    id: DATE_PICKER_ID,\r\n                    date: expectedDate,\r\n                },\r\n            };\r\n\r\n            expect(changeDatePickerUpperLimit(DATE_PICKER_ID, expectedDate)).toEqual(expectedAction);\r\n        });\r\n\r\n        it('should create an action to select a limit of the date picker', () => {\r\n            const expectedAction: IReduxAction<ISelectDatePickerPayload> = {\r\n                type: DatePickerActions.select,\r\n                payload: {\r\n                    id: DATE_PICKER_ID,\r\n                    limit: DateLimits.lower,\r\n                },\r\n            };\r\n\r\n            expect(selectDate(DATE_PICKER_ID, DateLimits.lower)).toEqual(expectedAction);\r\n        });\r\n\r\n        it(`should create an action to clear the datepicker's selection`, () => {\r\n            const expectedAction: IReduxAction<IDatePickerPayload> = {\r\n                type: DatePickerActions.clear,\r\n                payload: {\r\n                    id: DATE_PICKER_ID,\r\n                },\r\n            };\r\n\r\n            expect(clearSelection(DATE_PICKER_ID)).toEqual(expectedAction);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=294.bundle.js.map