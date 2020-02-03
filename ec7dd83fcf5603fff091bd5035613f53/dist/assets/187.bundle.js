(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{1297:function(e,r,n){"use strict";n.r(r),r.default="import * as moment from 'moment';\r\nimport * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {\r\n    changeDatePickerLowerLimit,\r\n    changeDatePickerUpperLimit,\r\n    DateLimits,\r\n    resetDatePickers,\r\n    selectDate,\r\n} from '../datePicker/DatePickerActions';\r\nimport {resetOptionPickers} from '../optionPicker/OptionPickerActions';\r\nimport {changeOptionsCycle} from '../optionsCycle/OptionsCycleActions';\r\nimport {\r\n    Calendar,\r\n    ICalendarDispatchProps,\r\n    ICalendarOwnProps,\r\n    ICalendarProps,\r\n    ICalendarStateProps,\r\n    MONTH_PICKER_ID,\r\n    YEAR_PICKER_ID,\r\n} from './Calendar';\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: ICalendarOwnProps): ICalendarStateProps => {\r\n    const selectedMonth = _.findWhere(state.optionsCycles, {id: ownProps.id + MONTH_PICKER_ID});\r\n    const selectedYear = _.findWhere(state.optionsCycles, {id: ownProps.id + YEAR_PICKER_ID});\r\n\r\n    return {\r\n        withReduxState: true,\r\n        selectedMonth: selectedMonth ? selectedMonth.currentOption : 0,\r\n        selectedYear: selectedYear ? selectedYear.currentOption : 0,\r\n        calendarSelection: _.where(state.datePickers, {calendarId: ownProps.id}),\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (\r\n    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,\r\n    ownProps: ICalendarOwnProps\r\n): ICalendarDispatchProps => ({\r\n    onClick: (pickerId: string, isUpperLimit: boolean, value: Date) => {\r\n        dispatch(resetOptionPickers(pickerId));\r\n        if (value && isUpperLimit) {\r\n            dispatch(\r\n                changeDatePickerUpperLimit(\r\n                    pickerId,\r\n                    moment(value)\r\n                        .endOf('day')\r\n                        .toDate()\r\n                )\r\n            );\r\n        } else if (value) {\r\n            dispatch(changeDatePickerLowerLimit(pickerId, value));\r\n\r\n            // mirror upper limit to lower limit if not linked with a date range\r\n            // this will cause the selected lower limit date to display in the calendar right after selection of the lower limit date\r\n            if (!_.isUndefined(ownProps.isLinkedToDateRange) && !ownProps.isLinkedToDateRange) {\r\n                dispatch(changeDatePickerUpperLimit(pickerId, value));\r\n                dispatch(selectDate(pickerId, DateLimits.lower));\r\n            }\r\n        } else {\r\n            dispatch(resetDatePickers(pickerId));\r\n        }\r\n    },\r\n    onSelectUnselectable: (pickerId: string) => {\r\n        dispatch(changeDatePickerUpperLimit(pickerId, null));\r\n        dispatch(selectDate(pickerId, DateLimits.upper));\r\n    },\r\n    onDateChange: (pickerId: string, newValue: number) => dispatch(changeOptionsCycle(pickerId, newValue)),\r\n});\r\n\r\nexport const CalendarConnected: React.ComponentClass<ICalendarProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(Calendar);\r\n"}}]);
//# sourceMappingURL=187.bundle.js.map