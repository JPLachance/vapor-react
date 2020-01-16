(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{1378:function(e,r,n){"use strict";n.r(r),r.default="import {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {DEFAULT_DATE_PICKER_COLOR} from './DatePicker';\r\nimport {DatePickerDateRange} from './DatePickerConstants';\r\nimport {IRangeLimit} from './DatesSelection';\r\n\r\nexport const DatePickerActions = {\r\n    add: 'ADD_DATE_PICKER',\r\n    remove: 'REMOVE_DATE_PICKER',\r\n    changeLowerLimit: 'CHANGE_LOWER_LIMIT',\r\n    changeUpperLimit: 'CHANGE_UPPER_LIMIT',\r\n    select: 'SELECT_DATE',\r\n    reset: 'RESET_DATE_PICKERS',\r\n    apply: 'APPLY_DATE',\r\n    clear: 'CLEAR_SELECTION',\r\n};\r\n\r\nexport interface IDatePickerPayload {\r\n    id: string;\r\n}\r\n\r\nexport interface IAddDatePickerPayload extends IDatePickerPayload {\r\n    color: string;\r\n    calendarId: string;\r\n    isRange: boolean;\r\n    rangeLimit?: IRangeLimit;\r\n    initiallyUnselected?: boolean;\r\n    isClearable?: boolean;\r\n    simple?: boolean;\r\n    initialDateRange?: DatePickerDateRange;\r\n}\r\n\r\nexport interface IChangeDatePickerPayload extends IDatePickerPayload {\r\n    date: Date;\r\n}\r\n\r\nexport interface ISelectDatePickerPayload extends IDatePickerPayload {\r\n    limit: string;\r\n}\r\n\r\nexport const DateLimits = {\r\n    lower: 'lower',\r\n    upper: 'upper',\r\n};\r\n\r\nexport const addDatePicker = (\r\n    id: string,\r\n    isRange: boolean,\r\n    rangeLimit: IRangeLimit = undefined,\r\n    color: string = DEFAULT_DATE_PICKER_COLOR,\r\n    calendarId: string = '',\r\n    initiallyUnselected = false,\r\n    isClearable = false,\r\n    simple = false,\r\n    initialDateRange?: DatePickerDateRange\r\n): IReduxAction<IAddDatePickerPayload> => ({\r\n    type: DatePickerActions.add,\r\n    payload: {\r\n        id,\r\n        color,\r\n        calendarId,\r\n        isRange,\r\n        rangeLimit,\r\n        initiallyUnselected,\r\n        isClearable,\r\n        simple,\r\n        initialDateRange,\r\n    },\r\n});\r\n\r\nexport const removeDatePicker = (id: string): IReduxAction<IDatePickerPayload> => ({\r\n    type: DatePickerActions.remove,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const resetDatePickers = (id: string): IReduxAction<IDatePickerPayload> => ({\r\n    type: DatePickerActions.reset,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const applyDatePicker = (id: string): IReduxAction<IDatePickerPayload> => ({\r\n    type: DatePickerActions.apply,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const changeDatePickerLowerLimit = (id: string, date: Date): IReduxAction<IChangeDatePickerPayload> => ({\r\n    type: DatePickerActions.changeLowerLimit,\r\n    payload: {\r\n        id,\r\n        date,\r\n    },\r\n});\r\n\r\nexport const changeDatePickerUpperLimit = (id: string, date: Date): IReduxAction<IChangeDatePickerPayload> => ({\r\n    type: DatePickerActions.changeUpperLimit,\r\n    payload: {\r\n        id,\r\n        date,\r\n    },\r\n});\r\n\r\nexport const selectDate = (id: string, limit: string): IReduxAction<ISelectDatePickerPayload> => ({\r\n    type: DatePickerActions.select,\r\n    payload: {\r\n        id,\r\n        limit,\r\n    },\r\n});\r\n\r\nexport const clearSelection = (id: string): IReduxAction<IDatePickerPayload> => ({\r\n    type: DatePickerActions.clear,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n"}}]);
//# sourceMappingURL=280.bundle.js.map