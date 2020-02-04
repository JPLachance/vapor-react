(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{1301:function(n,e,r){"use strict";r.r(e),e.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as moment from 'moment';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {DateUtils} from '../../../utils/DateUtils';\r\nimport {DateLimits} from '../../datePicker/DatePickerActions';\r\nimport {IDatePickerState} from '../../datePicker/DatePickerReducers';\r\nimport {OptionsCycle} from '../../optionsCycle/OptionsCycle';\r\nimport {\r\n    Calendar,\r\n    CalendarSelectionRuleType,\r\n    DEFAULT_DAYS,\r\n    DEFAULT_MONTHS,\r\n    DEFAULT_YEARS,\r\n    ICalendarProps,\r\n    ICalendarSelectionRule,\r\n} from '../Calendar';\r\nimport {CalendarDay, ICalendarDayProps, IDay} from '../CalendarDay';\r\n\r\ndescribe('Calendar', () => {\r\n    describe('<Calendar />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<Calendar />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<Calendar />', () => {\r\n        let calendar: ReactWrapper<ICalendarProps, any>;\r\n        let calendarInstance: Calendar;\r\n\r\n        beforeEach(() => {\r\n            calendar = mount(<Calendar />, {attachTo: document.getElementById('App')});\r\n            calendarInstance = calendar.instance() as Calendar;\r\n        });\r\n\r\n        afterEach(() => {\r\n            calendar.detach();\r\n        });\r\n\r\n        it('should display 2 <OptionsCycle /> (one for the month and the other for the year)', () => {\r\n            expect(calendar.find('OptionsCycle').length).toBe(2);\r\n        });\r\n\r\n        it('should display a <TableHeader />', () => {\r\n            expect(calendar.find('TableHeader').length).toBe(1);\r\n        });\r\n\r\n        it('should display the days set as props or the default ones', () => {\r\n            const days: string[] = ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim'];\r\n\r\n            _.each(DEFAULT_DAYS, (day: string) => {\r\n                expect(calendar.html()).toContain(day);\r\n            });\r\n\r\n            calendar.setProps({days});\r\n\r\n            _.each(days, (day: string) => {\r\n                expect(calendar.html()).toContain(day);\r\n            });\r\n        });\r\n\r\n        it('should send the months sent as props or the default ones to the month picker <OptionsCycle />', () => {\r\n            const months: string[] = [\r\n                'janvier',\r\n                'février',\r\n                'mars',\r\n                'avril',\r\n                'mai',\r\n                'juin',\r\n                'juillet',\r\n                'août',\r\n                'septembre',\r\n                'octobre',\r\n                'novembre',\r\n                'décembre',\r\n            ];\r\n\r\n            expect(\r\n                calendar\r\n                    .find(OptionsCycle)\r\n                    .first()\r\n                    .props().options\r\n            ).toEqual(DEFAULT_MONTHS);\r\n\r\n            calendar.setProps({months}).update();\r\n\r\n            expect(\r\n                calendar\r\n                    .find(OptionsCycle)\r\n                    .first()\r\n                    .props().options\r\n            ).toEqual(months);\r\n        });\r\n\r\n        it('should send the years sent as props or the default ones to the year picker <OptionsCycle />', () => {\r\n            const years: string[] = ['2015', '2016', '2017'];\r\n\r\n            expect(\r\n                calendar\r\n                    .find(OptionsCycle)\r\n                    .last()\r\n                    .props().options\r\n            ).toEqual(DEFAULT_YEARS);\r\n\r\n            calendar.setProps({years}).update();\r\n\r\n            expect(\r\n                calendar\r\n                    .find(OptionsCycle)\r\n                    .last()\r\n                    .props().options\r\n            ).toEqual(years);\r\n        });\r\n\r\n        it('should use the startingMonth prop to set the month picker at the desired month or use the current one', () => {\r\n            const startingMonth: number = 5;\r\n\r\n            expect(calendar.html()).toContain(DEFAULT_MONTHS[DateUtils.currentMonth]);\r\n\r\n            calendar.unmount();\r\n            calendar = mount(<Calendar startingMonth={startingMonth} />, {attachTo: document.getElementById('App')});\r\n\r\n            expect(calendar.html()).toContain(DEFAULT_MONTHS[startingMonth]);\r\n        });\r\n\r\n        it('should use the startingYear prop to set the year picker at the desired year or use the current one', () => {\r\n            const startingYear: number = 2;\r\n\r\n            expect(calendar.html()).toContain(DateUtils.currentYear.toString());\r\n\r\n            calendar.unmount();\r\n            calendar = mount(<Calendar startingYear={startingYear} />, {attachTo: document.getElementById('App')});\r\n\r\n            expect(calendar.html()).toContain(DEFAULT_YEARS[startingYear]);\r\n        });\r\n\r\n        it('should start the week on the startingDay sent as prop or simply use the first one (assumed to be Sunday)', () => {\r\n            const startingDay: number = 3;\r\n            let firstDayOfSecondWeek: number = parseInt(\r\n                calendar\r\n                    .find('tbody')\r\n                    .find('tr')\r\n                    .at(1)\r\n                    .find('td')\r\n                    .first()\r\n                    .text(),\r\n                10\r\n            );\r\n\r\n            expect(\r\n                calendar\r\n                    .find('th')\r\n                    .first()\r\n                    .html()\r\n            ).toContain(DEFAULT_DAYS[0]);\r\n            expect(new Date(DateUtils.currentYear, DateUtils.currentMonth, firstDayOfSecondWeek).getDay()).toBe(0);\r\n\r\n            calendar.setProps({startingDay});\r\n            firstDayOfSecondWeek = parseInt(\r\n                calendar\r\n                    .find('tbody')\r\n                    .find('tr')\r\n                    .at(1)\r\n                    .find('td')\r\n                    .first()\r\n                    .text(),\r\n                10\r\n            );\r\n\r\n            expect(\r\n                calendar\r\n                    .find('th')\r\n                    .first()\r\n                    .html()\r\n            ).toContain(DEFAULT_DAYS[startingDay]);\r\n            expect(new Date(DateUtils.currentYear, DateUtils.currentMonth, firstDayOfSecondWeek).getDay()).toBe(\r\n                startingDay\r\n            );\r\n\r\n            _.each(DEFAULT_DAYS, (day: string) => {\r\n                expect(calendar.html()).toContain(day);\r\n            });\r\n        });\r\n\r\n        it('should call onClick when handleClick has been called, onClick is defined and one picker is selected', () => {\r\n            const onClickSpy: jasmine.Spy = jasmine.createSpy('onClick');\r\n            const now: Date = new Date();\r\n\r\n            expect(() => {\r\n                calendarInstance['handleClick'].call(calendarInstance, now);\r\n            }).not.toThrow();\r\n\r\n            calendar.setProps({onClick: onClickSpy});\r\n\r\n            calendarInstance['handleClick'].call(calendarInstance, now);\r\n\r\n            expect(onClickSpy).not.toHaveBeenCalled();\r\n\r\n            calendar.setProps({\r\n                onClick: onClickSpy,\r\n                calendarSelection: [\r\n                    {\r\n                        id: 'id',\r\n                        calendarId: 'any',\r\n                        color: 'any',\r\n                        lowerLimit: now,\r\n                        upperLimit: now,\r\n                        isRange: true,\r\n                        isClearable: false,\r\n                        selected: undefined,\r\n                        appliedLowerLimit: now,\r\n                        appliedUpperLimit: now,\r\n                        inputLowerLimit: now,\r\n                        inputUpperLimit: now,\r\n                        simple: false,\r\n                    },\r\n                    {\r\n                        id: 'id',\r\n                        calendarId: 'any',\r\n                        color: 'any',\r\n                        lowerLimit: now,\r\n                        upperLimit: now,\r\n                        isRange: true,\r\n                        isClearable: false,\r\n                        selected: 'yes it is',\r\n                        appliedLowerLimit: now,\r\n                        appliedUpperLimit: now,\r\n                        inputLowerLimit: now,\r\n                        inputUpperLimit: now,\r\n                        simple: false,\r\n                    },\r\n                ],\r\n            });\r\n\r\n            calendarInstance['handleClick'].call(calendarInstance, now);\r\n\r\n            expect(onClickSpy).toHaveBeenCalledWith('id', false, now);\r\n        });\r\n\r\n        it(\r\n            'should call handleInvalidDateSelected when it is defined and selecting a day that is not selectable ' +\r\n                'and one picker is selected',\r\n            () => {\r\n                const onSelectUnselectableSpy: jasmine.Spy = jasmine.createSpy('onSelectUnselectable');\r\n\r\n                expect(() => {\r\n                    calendarInstance['handleInvalidDateSelected'].call(calendarInstance);\r\n                }).not.toThrow();\r\n\r\n                calendar.setProps({onSelectUnselectable: onSelectUnselectableSpy});\r\n\r\n                calendarInstance['handleInvalidDateSelected'].call(calendarInstance);\r\n\r\n                expect(onSelectUnselectableSpy).not.toHaveBeenCalled();\r\n\r\n                calendar.setProps({\r\n                    onSelectUnselectable: onSelectUnselectableSpy,\r\n                    calendarSelection: [\r\n                        {\r\n                            id: 'id1',\r\n                            calendarId: 'any',\r\n                            color: 'any',\r\n                            lowerLimit: null,\r\n                            upperLimit: null,\r\n                            isRange: true,\r\n                            isClearable: false,\r\n                            selected: undefined,\r\n                            appliedLowerLimit: null,\r\n                            appliedUpperLimit: null,\r\n                            inputLowerLimit: null,\r\n                            inputUpperLimit: null,\r\n                            simple: false,\r\n                        },\r\n                        {\r\n                            id: 'id2',\r\n                            calendarId: 'any',\r\n                            color: 'any',\r\n                            lowerLimit: null,\r\n                            upperLimit: null,\r\n                            isRange: true,\r\n                            isClearable: false,\r\n                            selected: 'yes it is',\r\n                            appliedLowerLimit: null,\r\n                            appliedUpperLimit: null,\r\n                            inputLowerLimit: null,\r\n                            inputUpperLimit: null,\r\n                            simple: false,\r\n                        },\r\n                    ],\r\n                });\r\n\r\n                calendarInstance['handleInvalidDateSelected'].call(calendarInstance);\r\n\r\n                expect(onSelectUnselectableSpy).toHaveBeenCalledWith('id2');\r\n            }\r\n        );\r\n\r\n        it('should call handleClick on <CalendarDay /> click', () => {\r\n            const handleClickSpy: jasmine.Spy = spyOn<any>(calendarInstance, 'handleClick');\r\n            const firstCalendarDay: ReactWrapper<ICalendarDayProps, any> = calendar.find(CalendarDay).first();\r\n            firstCalendarDay.find('td').simulate('click');\r\n\r\n            expect(handleClickSpy).toHaveBeenCalledWith(firstCalendarDay.props().day.date.toDate());\r\n        });\r\n\r\n        it('should have the class selecting if we are currently selecting a date', () => {\r\n            const now = new Date();\r\n\r\n            expect(calendar.find('.calendar-grid').hasClass('selecting')).toBe(false);\r\n\r\n            calendar.setProps({\r\n                calendarSelection: [\r\n                    {\r\n                        id: 'id',\r\n                        calendarId: 'any',\r\n                        color: 'any',\r\n                        lowerLimit: now,\r\n                        upperLimit: now,\r\n                        isRange: true,\r\n                        isClearable: false,\r\n                        selected: 'the name of the limit',\r\n                        appliedLowerLimit: now,\r\n                        appliedUpperLimit: now,\r\n                        inputLowerLimit: now,\r\n                        inputUpperLimit: now,\r\n                        simple: false,\r\n                    },\r\n                ],\r\n            });\r\n\r\n            expect(calendar.find('.calendar-grid').hasClass('selecting')).toBe(true);\r\n\r\n            calendar.setProps({\r\n                calendarSelection: [\r\n                    {\r\n                        id: 'id',\r\n                        calendarId: 'any',\r\n                        color: 'any',\r\n                        lowerLimit: now,\r\n                        upperLimit: now,\r\n                        isRange: true,\r\n                        isClearable: false,\r\n                        selected: undefined,\r\n                        appliedLowerLimit: now,\r\n                        appliedUpperLimit: now,\r\n                        inputLowerLimit: now,\r\n                        inputUpperLimit: now,\r\n                        simple: false,\r\n                    },\r\n                ],\r\n            });\r\n\r\n            expect(calendar.find('.calendar-grid').hasClass('selecting')).toBe(false);\r\n        });\r\n\r\n        describe('fillInDayInfos', () => {\r\n            const now: Date = new Date();\r\n            const DAY: IDay = {\r\n                number: 2,\r\n                isCurrentMonth: true,\r\n                isToday: false,\r\n                date: moment(now),\r\n            };\r\n            const CALENDAR_SELECTION: IDatePickerState = {\r\n                id: 'id',\r\n                calendarId: 'any',\r\n                color: 'any',\r\n                lowerLimit: moment()\r\n                    .subtract(1, 'day')\r\n                    .toDate(),\r\n                upperLimit: moment()\r\n                    .add(1, 'day')\r\n                    .toDate(),\r\n                isRange: true,\r\n                isClearable: false,\r\n                selected: undefined,\r\n                appliedLowerLimit: now,\r\n                appliedUpperLimit: now,\r\n                inputLowerLimit: now,\r\n                inputUpperLimit: now,\r\n                simple: false,\r\n            };\r\n            const CALENDAR_SELECTION_RULES: ICalendarSelectionRule[] = [\r\n                {\r\n                    test: (date: Date) => date >= new Date(), // You cannot select a date in the past\r\n                    isFor: CalendarSelectionRuleType.all,\r\n                },\r\n                {\r\n                    test: (date: Date) => date.getDay() !== 6, // You cannot start your selection on a Saturday\r\n                    isFor: CalendarSelectionRuleType.lower,\r\n                },\r\n                {\r\n                    test: (date: Date) => date.getDay() !== 0, // You cannot end your selection on a Sunday\r\n                    isFor: CalendarSelectionRuleType.upper,\r\n                },\r\n                {\r\n                    test: (date: Date, endDate: Date) => moment(endDate).diff(moment(date), 'day') >= 0, // The end of your selection cannot be before the start of your selection\r\n                    isFor: CalendarSelectionRuleType.range,\r\n                },\r\n                {\r\n                    test: (date: Date, endDate: Date) => moment(endDate).diff(moment(date), 'day') <= 7, // You cannot select more than 7 days at a time\r\n                    isFor: CalendarSelectionRuleType.range,\r\n                },\r\n            ];\r\n            let day: IDay;\r\n\r\n            beforeEach(() => {\r\n                calendar.setProps({\r\n                    calendarSelection: [CALENDAR_SELECTION],\r\n                    selectionRules: CALENDAR_SELECTION_RULES,\r\n                });\r\n\r\n                day = calendarInstance.fillInDayInfos(_.extend({}, DAY));\r\n            });\r\n\r\n            it('should return day isSelected if between the lower and upper limit', () => {\r\n                expect(day.isSelected).toBe(true);\r\n\r\n                let beforeSelectionDay: IDay = _.extend({}, DAY, {date: moment(now).subtract(3, 'day')});\r\n                beforeSelectionDay = calendarInstance.fillInDayInfos(beforeSelectionDay);\r\n\r\n                expect(beforeSelectionDay.isSelected).toBeFalsy();\r\n            });\r\n\r\n            it('should return the day color if the day is between the lower and upper limit', () => {\r\n                expect(day.color).toBe(CALENDAR_SELECTION.color);\r\n\r\n                let beforeSelectionDay: IDay = _.extend({}, DAY, {date: moment(now).subtract(3, 'day')});\r\n                beforeSelectionDay = calendarInstance.fillInDayInfos(beforeSelectionDay);\r\n\r\n                expect(beforeSelectionDay.color).toBeUndefined();\r\n            });\r\n\r\n            it('should return day isLowerLimit if the selection is a range and starts on that day', () => {\r\n                const lowerLimitDay: moment.Moment = moment(now).subtract(1, 'day');\r\n\r\n                expect(day.isLowerLimit).toBeFalsy();\r\n\r\n                let firstDay: IDay = _.extend({}, DAY, {date: lowerLimitDay});\r\n                day = calendarInstance.fillInDayInfos(firstDay);\r\n\r\n                expect(day.isLowerLimit).toBe(true);\r\n\r\n                const selectionNoRange: IDatePickerState = _.extend({}, CALENDAR_SELECTION, {isRange: false});\r\n                calendar.setProps({\r\n                    calendarSelection: [selectionNoRange],\r\n                });\r\n                firstDay = _.extend({}, DAY, {date: lowerLimitDay});\r\n                day = calendarInstance.fillInDayInfos(firstDay);\r\n\r\n                expect(day.isLowerLimit).toBeFalsy();\r\n            });\r\n\r\n            it('should return day isUpperLimit if the selection is a range and ends on that day', () => {\r\n                const upperLimitDay: moment.Moment = moment(now).add(1, 'day');\r\n\r\n                expect(day.isUpperLimit).toBeFalsy();\r\n\r\n                let lastDay: IDay = _.extend({}, DAY, {date: upperLimitDay});\r\n                day = calendarInstance.fillInDayInfos(lastDay);\r\n\r\n                expect(day.isUpperLimit).toBe(true);\r\n\r\n                const selectionNoRange: IDatePickerState = _.extend({}, CALENDAR_SELECTION, {isRange: false});\r\n                calendar.setProps({\r\n                    calendarSelection: [selectionNoRange],\r\n                });\r\n                lastDay = _.extend({}, DAY, {date: upperLimitDay});\r\n                day = calendarInstance.fillInDayInfos(lastDay);\r\n\r\n                expect(day.isUpperLimit).toBeFalsy();\r\n            });\r\n\r\n            it('should not change the day values set by a selection if another selection does not go through that day', () => {\r\n                let limitDay: IDay = _.extend({}, DAY, {date: moment(now).add(1, 'day')});\r\n                const selectionAll: IDatePickerState = _.extend({}, CALENDAR_SELECTION, {\r\n                    lowerLimit: CALENDAR_SELECTION.upperLimit,\r\n                });\r\n                const selectionNone: IDatePickerState = _.extend({}, CALENDAR_SELECTION, {\r\n                    lowerLimit: moment(now)\r\n                        .subtract(20, 'day')\r\n                        .toDate(),\r\n                    upperLimit: moment(now)\r\n                        .subtract(10, 'day')\r\n                        .toDate(),\r\n                    color: 'not any',\r\n                });\r\n\r\n                calendar.setProps({\r\n                    calendarSelection: [selectionNone, selectionAll],\r\n                });\r\n                day = calendarInstance.fillInDayInfos(limitDay);\r\n\r\n                expect(day.isSelected).toBe(true);\r\n                expect(day.isLowerLimit).toBe(true);\r\n                expect(day.isUpperLimit).toBe(true);\r\n                expect(day.color).toBe(selectionAll.color);\r\n\r\n                calendar.setProps({\r\n                    calendarSelection: [selectionAll, selectionNone],\r\n                });\r\n                limitDay = _.extend({}, DAY, {date: moment(now).add(1, 'day')});\r\n                day = calendarInstance.fillInDayInfos(limitDay);\r\n\r\n                expect(day.isSelected).toBe(true);\r\n                expect(day.isLowerLimit).toBe(true);\r\n                expect(day.isUpperLimit).toBe(true);\r\n                expect(day.color).toBe(selectionAll.color);\r\n            });\r\n\r\n            it('should return day isSelectable if the day comes after today', () => {\r\n                const pastDay: IDay = _.extend({}, DAY, {date: moment().subtract(1, 'day')});\r\n                const futureDay: IDay = _.extend({}, DAY, {date: moment().add(1, 'day')});\r\n\r\n                day = calendarInstance.fillInDayInfos(pastDay);\r\n\r\n                expect(day.isSelectable).toBe(false);\r\n\r\n                day = calendarInstance.fillInDayInfos(futureDay);\r\n\r\n                expect(day.isSelectable).toBe(true);\r\n            });\r\n\r\n            it('should not return day isSelectable if day is before the lowerlimit and selecting the upperlimit', () => {\r\n                const pastDay: IDay = _.extend({}, DAY, {date: moment().subtract(1, 'day')});\r\n\r\n                calendar.setProps({\r\n                    calendarSelection: [\r\n                        _.extend({}, CALENDAR_SELECTION, {\r\n                            selected: DateLimits.lower,\r\n                            lowerLimit: null,\r\n                            upperLimit: null,\r\n                        }),\r\n                    ],\r\n                    selectionRules: [],\r\n                });\r\n                day = calendarInstance.fillInDayInfos(pastDay);\r\n\r\n                expect(day.isSelectable).toBe(true);\r\n\r\n                calendar.setProps({\r\n                    calendarSelection: [\r\n                        _.extend({}, CALENDAR_SELECTION, {\r\n                            selected: DateLimits.upper,\r\n                            lowerLimit: moment().toDate(),\r\n                            upperLimit: null,\r\n                        }),\r\n                    ],\r\n                    selectionRules: [],\r\n                });\r\n                day = calendarInstance.fillInDayInfos(pastDay);\r\n\r\n                expect(day.isSelectable).toBe(false);\r\n            });\r\n\r\n            describe('saturday and sunday rule', () => {\r\n                const notSaturdayOrSunday: moment.Moment =\r\n                    moment().isoWeekday() >= 5 ? moment().add(4, 'days') : moment().add(1, 'days');\r\n\r\n                it('should return day isSelectable if the day is not a Saturday and selecting lower limit', () => {\r\n                    const otherDay: IDay = _.extend({}, DAY, {date: notSaturdayOrSunday});\r\n                    const saturday: IDay = _.extend({}, DAY, {date: moment().endOf('week')});\r\n                    const selectionLowerLimit: IDatePickerState = _.extend({}, CALENDAR_SELECTION, {\r\n                        selected: DateLimits.lower,\r\n                    });\r\n\r\n                    day = calendarInstance.fillInDayInfos(otherDay);\r\n\r\n                    expect(day.isSelectable).toBe(true);\r\n\r\n                    day = calendarInstance.fillInDayInfos(saturday);\r\n\r\n                    expect(day.isSelectable).toBe(true);\r\n\r\n                    calendar.setProps({\r\n                        calendarSelection: [selectionLowerLimit],\r\n                        selectionRules: CALENDAR_SELECTION_RULES,\r\n                    });\r\n\r\n                    day = calendarInstance.fillInDayInfos(otherDay);\r\n\r\n                    expect(day.isSelectable).toBe(true);\r\n\r\n                    day = calendarInstance.fillInDayInfos(saturday);\r\n\r\n                    expect(day.isSelectable).toBe(false);\r\n                });\r\n\r\n                it('should return day isSelectable if the day is not a Sunday and selecting upper limit', () => {\r\n                    const otherDay: IDay = _.extend({}, DAY, {date: notSaturdayOrSunday});\r\n                    const sunday: IDay = _.extend({}, DAY, {\r\n                        date: moment()\r\n                            .endOf('week')\r\n                            .add(1, 'week'),\r\n                    });\r\n                    const selectionUpperLimit: IDatePickerState = _.extend({}, CALENDAR_SELECTION, {\r\n                        selected: DateLimits.upper,\r\n                    });\r\n\r\n                    day = calendarInstance.fillInDayInfos(otherDay);\r\n\r\n                    expect(day.isSelectable).toBe(true);\r\n\r\n                    day = calendarInstance.fillInDayInfos(sunday);\r\n\r\n                    expect(day.isSelectable).toBe(true);\r\n\r\n                    calendar.setProps({\r\n                        calendarSelection: [selectionUpperLimit],\r\n                        selectionRules: CALENDAR_SELECTION_RULES,\r\n                    });\r\n\r\n                    day = calendarInstance.fillInDayInfos(otherDay);\r\n\r\n                    expect(day.isSelectable).toBe(true);\r\n\r\n                    day = calendarInstance.fillInDayInfos(sunday);\r\n\r\n                    expect(day.isSelectable).toBe(false);\r\n                });\r\n\r\n                it('should not have the class mod-width-50 if it has the prop simple', () => {\r\n                    expect(calendar.find('.mod-width-50').length).toBe(1);\r\n\r\n                    calendar.setProps({simple: true});\r\n\r\n                    expect(calendar.find('.mod-width-50').length).toBe(0);\r\n                });\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=189.bundle.js.map