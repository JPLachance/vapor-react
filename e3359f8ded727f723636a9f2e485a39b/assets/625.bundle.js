(window.webpackJsonp=window.webpackJsonp||[]).push([[625],{1718:function(e,r,o){"use strict";o.r(r),r.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IPopoverProps, Popover} from '../Popover';\r\n\r\ndescribe('<Popover>', () => {\r\n    let popoverProps: IPopoverProps;\r\n    let popoverWrapper: ReactWrapper<IPopoverProps, any>;\r\n\r\n    const popoverToggleId = 'PopoverToggle';\r\n    const popoverElementId = 'PopoverElement';\r\n    const popoverToggleSelector = `#${popoverToggleId}`;\r\n\r\n    let toggleOpenedSpy: jasmine.Spy;\r\n\r\n    const mountPopover = (props: IPopoverProps) =>\r\n        (popoverWrapper = mount(\r\n            <Popover {...props}>\r\n                <span id={popoverToggleId}>Toggle</span>\r\n                <span id={popoverElementId}>Tether element</span>\r\n            </Popover>,\r\n            {attachTo: document.getElementById('App')}\r\n        ));\r\n\r\n    beforeEach(() => {\r\n        popoverProps = {\r\n            attachment: 'top left',\r\n        };\r\n\r\n        toggleOpenedSpy = spyOn<any>(Popover.prototype, 'toggleOpened').and.callThrough();\r\n    });\r\n\r\n    it('should render without error', () => {\r\n        expect(() =>\r\n            shallow(\r\n                <Popover {...popoverProps}>\r\n                    <span>Toggle</span>\r\n                    <span>Tether element</span>\r\n                </Popover>\r\n            )\r\n        ).not.toThrow();\r\n    });\r\n\r\n    it('should render without error with style prop', () => {\r\n        expect(() =>\r\n            shallow(\r\n                <Popover {...popoverProps} style={{'margin-left': '10px'}}>\r\n                    <span>Toggle</span>\r\n                    <span>Tether element</span>\r\n                </Popover>\r\n            )\r\n        ).not.toThrow();\r\n    });\r\n\r\n    it('should mount and unmount/detach without error', () => {\r\n        expect(() => {\r\n            mountPopover(popoverProps);\r\n        }).not.toThrow();\r\n\r\n        expect(() => {\r\n            popoverWrapper.unmount();\r\n            popoverWrapper.detach();\r\n        }).not.toThrow();\r\n    });\r\n\r\n    describe('Children propTypes', () => {\r\n        it('should not throw when redering a Popover with only one children', () => {\r\n            expect(() => {\r\n                shallow(\r\n                    <Popover {...popoverProps}>\r\n                        <span>Toggle</span>\r\n                    </Popover>\r\n                );\r\n            }).not.toThrow();\r\n        });\r\n\r\n        it('should not throw when redering a Popover without children', () => {\r\n            expect(() => {\r\n                shallow(<Popover {...popoverProps} />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('Mounted Popover', () => {\r\n        afterEach(() => {\r\n            popoverWrapper.detach();\r\n        });\r\n\r\n        describe('Toggle opened behavior', () => {\r\n            describe('With an uncontrolled Popover', () => {\r\n                beforeEach(() => {\r\n                    mountPopover(popoverProps);\r\n                });\r\n\r\n                it('should set isOpen to true in the state when calling toggleOpened with isOpen: true', () => {\r\n                    expect(popoverWrapper.state('isOpen')).toBe(false);\r\n\r\n                    (popoverWrapper.instance() as Popover).toggleOpened(true);\r\n\r\n                    expect(popoverWrapper.state('isOpen')).toBe(true);\r\n                });\r\n\r\n                it('should set isOpen to false in the state when calling toggleOpened with isOpen: false', () => {\r\n                    (popoverWrapper.instance() as Popover).toggleOpened(true);\r\n\r\n                    (popoverWrapper.instance() as Popover).toggleOpened(false);\r\n\r\n                    expect(popoverWrapper.state('isOpen')).toBe(false);\r\n                });\r\n            });\r\n\r\n            describe('With a controlled Popover', () => {\r\n                let onToggleSpy: jasmine.Spy;\r\n\r\n                beforeEach(() => {\r\n                    onToggleSpy = jasmine.createSpy('onToggleSpy');\r\n\r\n                    popoverProps.onToggle = onToggleSpy;\r\n\r\n                    mountPopover(popoverProps);\r\n                });\r\n\r\n                it('should call the onToggle prop with true when calling toggleOpened with isOpen: true', () => {\r\n                    (popoverWrapper.instance() as Popover).toggleOpened(true);\r\n\r\n                    expect(onToggleSpy.calls.count()).toBe(1);\r\n\r\n                    expect(onToggleSpy).toHaveBeenCalledWith(true);\r\n                });\r\n\r\n                it('should call the onToggle prop with false when calling toggleOpened with isOpen: false', () => {\r\n                    (popoverWrapper.instance() as Popover).toggleOpened(false);\r\n\r\n                    expect(onToggleSpy.calls.count()).toBe(1);\r\n\r\n                    expect(onToggleSpy).toHaveBeenCalledWith(false);\r\n                });\r\n            });\r\n        });\r\n\r\n        describe('Tether toggle click handler', () => {\r\n            beforeEach(() => {\r\n                mountPopover(popoverProps);\r\n            });\r\n\r\n            it('should open the popover on click toggle if popover was closed', () => {\r\n                popoverWrapper.find(popoverToggleSelector).simulate('click');\r\n\r\n                expect(toggleOpenedSpy.calls.count()).toBe(1);\r\n\r\n                expect(toggleOpenedSpy).toHaveBeenCalledWith(true);\r\n            });\r\n\r\n            it('should close the popover on click toggle if popover was opened', () => {\r\n                // First, open the Popover\r\n                popoverWrapper.find(popoverToggleSelector).simulate('click');\r\n\r\n                popoverWrapper.find(popoverToggleSelector).simulate('click');\r\n\r\n                expect(toggleOpenedSpy.calls.count()).toBe(2);\r\n\r\n                expect(toggleOpenedSpy).toHaveBeenCalledWith(false);\r\n            });\r\n        });\r\n\r\n        describe('Document click handler for an opened popover', () => {\r\n            beforeEach(() => {\r\n                popoverProps = _.extend(popoverProps, {\r\n                    isOpen: true,\r\n                });\r\n\r\n                mountPopover(popoverProps);\r\n            });\r\n\r\n            it('should not close the popover on click tether element', () => {\r\n                // Using getElementById here since the Tether element is being rendered outside the popoverWrapper.\r\n                document.getElementById(popoverElementId).click();\r\n\r\n                expect(toggleOpenedSpy.calls.count()).toBe(0);\r\n            });\r\n\r\n            it('should close the popover when clicking outside Popover', () => {\r\n                document.getElementById('App').click();\r\n\r\n                expect(toggleOpenedSpy.calls.count()).toBe(1);\r\n\r\n                expect(toggleOpenedSpy).toHaveBeenCalledWith(false);\r\n            });\r\n        });\r\n\r\n        describe('Document click handler for an opened popover behaving as a modal', () => {\r\n            beforeEach(() => {\r\n                popoverProps = _.extend(popoverProps, {\r\n                    isOpen: true,\r\n                    isModal: true,\r\n                });\r\n\r\n                mountPopover(popoverProps);\r\n            });\r\n\r\n            it('should not close the popover on click tether element', () => {\r\n                // Using getElementById here since the Tether element is being rendered outside the popoverWrapper.\r\n                document.getElementById(popoverElementId).click();\r\n\r\n                expect(toggleOpenedSpy).not.toHaveBeenCalled();\r\n            });\r\n\r\n            it('should close the popover when clicking outside Popover', () => {\r\n                document.getElementById('App').click();\r\n\r\n                expect(toggleOpenedSpy).toHaveBeenCalledTimes(1);\r\n\r\n                expect(toggleOpenedSpy).toHaveBeenCalledWith(false);\r\n            });\r\n        });\r\n\r\n        describe('Document click handler for a closed popover', () => {\r\n            beforeEach(() => {\r\n                popoverProps = _.extend(popoverProps, {\r\n                    isOpen: false,\r\n                });\r\n\r\n                mountPopover(popoverProps);\r\n            });\r\n\r\n            it('should not update if already closed', () => {\r\n                document.getElementById('App').click();\r\n\r\n                expect(toggleOpenedSpy).not.toHaveBeenCalled();\r\n            });\r\n        });\r\n\r\n        describe('Document click handler for a closed popover behaving as a modal', () => {\r\n            beforeEach(() => {\r\n                popoverProps = _.extend(popoverProps, {\r\n                    isOpen: false,\r\n                    isModal: true,\r\n                });\r\n\r\n                mountPopover(popoverProps);\r\n            });\r\n\r\n            it('should not update if already closed', () => {\r\n                document.getElementById('App').click();\r\n\r\n                expect(toggleOpenedSpy).not.toHaveBeenCalled();\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=625.bundle.js.map