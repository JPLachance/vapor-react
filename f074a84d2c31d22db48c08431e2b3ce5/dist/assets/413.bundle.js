(window.webpackJsonp=window.webpackJsonp||[]).push([[413],{1509:function(n,e,r){"use strict";r.r(e),e.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport {shallowWithState} from 'enzyme-redux';\r\nimport * as React from 'react';\r\n\r\nimport {BrowserUtils} from '../../../utils/BrowserUtils';\r\nimport {Flippable, IFlippableProps} from '../Flippable';\r\n\r\ndescribe('Flippable', () => {\r\n    it('should render without errors', () => {\r\n        expect(() => {\r\n            shallow(<Flippable />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    describe('<Flippable />', () => {\r\n        let flippable: ReactWrapper<IFlippableProps>;\r\n\r\n        beforeEach(() => {\r\n            flippable = mount(<Flippable />, {attachTo: document.getElementById('App')});\r\n        });\r\n\r\n        afterEach(() => {\r\n            flippable.detach();\r\n        });\r\n\r\n        it('should call onRender prop if set when mounting', () => {\r\n            const onRenderSpy = jasmine.createSpy('onRender');\r\n\r\n            expect(() => flippable.instance().componentWillMount()).not.toThrow();\r\n\r\n            flippable.unmount();\r\n            flippable.setProps({onRender: onRenderSpy});\r\n            flippable.mount();\r\n\r\n            expect(onRenderSpy).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should call onDestroy prop if set when will unmount', () => {\r\n            const onDestroySpy = jasmine.createSpy('onDestroy');\r\n\r\n            expect(() => flippable.instance().componentWillUnmount()).not.toThrow();\r\n\r\n            flippable.setProps({onDestroy: onDestroySpy});\r\n            flippable.unmount();\r\n\r\n            expect(onDestroySpy).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should have the default flippable class', () => {\r\n            expect(flippable.find(`.${Flippable.CONTAINER_CLASSNAME}`).length).toBe(1);\r\n        });\r\n\r\n        it('should have the flippable-ie class when the browser is IE', () => {\r\n            spyOn(BrowserUtils, 'isIE').and.returnValue(true);\r\n            const component = shallowWithState(<Flippable />, {});\r\n\r\n            expect(component.hasClass('flippable-ie')).toBe(true);\r\n        });\r\n\r\n        it('should render a flipper div', () => {\r\n            expect(flippable.find(`.${Flippable.FLIPPER_CLASSNAME}`).length).toBeGreaterThan(0);\r\n        });\r\n\r\n        it('should show the front face by default', () => {\r\n            expect(flippable.find(`.${Flippable.triggers.FRONT}`).length).toBe(1);\r\n        });\r\n\r\n        it('should render additional classes if any on the flippable container', () => {\r\n            flippable.setProps({\r\n                className: 'some-class',\r\n            });\r\n\r\n            expect(flippable.find('.some-class').length).toBeGreaterThanOrEqual(1);\r\n        });\r\n\r\n        it('should render the front side content on the front', () => {\r\n            flippable.setProps({\r\n                front: <div id=\"MyFrontContent\"></div>,\r\n            });\r\n\r\n            const renderedFrontSide = flippable.find(`.${Flippable.sides.FRONT}`);\r\n\r\n            expect(renderedFrontSide.length).toBeGreaterThan(0);\r\n            expect(renderedFrontSide.find('#MyFrontContent').length).toBeGreaterThan(0);\r\n        });\r\n\r\n        it('should render the back side content on the back', () => {\r\n            flippable.setProps({\r\n                back: <div id=\"MyBackContent\"></div>,\r\n            });\r\n\r\n            const renderedBackSide = flippable.find(`.${Flippable.sides.BACK}`);\r\n\r\n            expect(renderedBackSide.length).toBeGreaterThan(0);\r\n            expect(renderedBackSide.find('#MyBackContent').length).toBeGreaterThan(0);\r\n        });\r\n\r\n        it('should render a \"show-on-top\" class on the flippable when it is flipped', () => {\r\n            flippable.setProps({\r\n                isFlipped: true,\r\n            });\r\n\r\n            expect(flippable.find('.show-on-top').length).toBe(1);\r\n        });\r\n\r\n        it('should call onFlip prop if any when clicking on the front side and flippable is not flipped', () => {\r\n            const onFlipSpy = jasmine.createSpy('onFlip');\r\n\r\n            flippable.setProps({\r\n                onFlip: onFlipSpy,\r\n                isFlipped: true,\r\n            });\r\n\r\n            flippable.find(`.${Flippable.sides.FRONT}`).simulate('click');\r\n            expect(onFlipSpy).not.toHaveBeenCalled();\r\n\r\n            flippable.setProps({\r\n                isFlipped: false,\r\n            });\r\n\r\n            flippable.find(`.${Flippable.sides.FRONT}`).simulate('click');\r\n            expect(onFlipSpy).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should set the side trigger classes accordingly when flipping the component', () => {\r\n            expect(flippable.find(`.${Flippable.FLIPPER_CLASSNAME}`).hasClass(Flippable.triggers.FRONT)).toBe(true);\r\n\r\n            flippable.setProps({\r\n                isFlipped: true,\r\n            });\r\n\r\n            expect(flippable.find(`.${Flippable.FLIPPER_CLASSNAME}`).hasClass(Flippable.triggers.BACK)).toBe(true);\r\n\r\n            flippable.setProps({\r\n                isFlipped: false,\r\n            });\r\n\r\n            expect(flippable.find(`.${Flippable.FLIPPER_CLASSNAME}`).hasClass(Flippable.triggers.FRONT)).toBe(true);\r\n        });\r\n\r\n        it(\r\n            'should call onUnflip prop if any when clicking outside the back side of the flippable ' +\r\n                'only when it is flipped',\r\n            () => {\r\n                const onUnflipSpy = jasmine.createSpy('onUnflip');\r\n\r\n                flippable.setProps({\r\n                    onUnflip: onUnflipSpy,\r\n                });\r\n\r\n                document.getElementById('App').click();\r\n                expect(onUnflipSpy).not.toHaveBeenCalled();\r\n\r\n                flippable.setProps({\r\n                    isFlipped: true,\r\n                });\r\n\r\n                flippable.find(`.${Flippable.sides.FRONT}`).simulate('click');\r\n                expect(onUnflipSpy).not.toHaveBeenCalled();\r\n\r\n                document.getElementById('App').click();\r\n                expect(onUnflipSpy).toHaveBeenCalledTimes(1);\r\n            }\r\n        );\r\n\r\n        it('should not unflip the flippable when trying to unflip while allowUnflip prop is set and returns false', () => {\r\n            const onUnflipSpy = jasmine.createSpy('onUnflip');\r\n\r\n            flippable.setProps({\r\n                onUnflip: onUnflipSpy,\r\n                isFlipped: true,\r\n                allowUnflip: (args) => false,\r\n            });\r\n\r\n            document.getElementById('App').click();\r\n            expect(onUnflipSpy).not.toHaveBeenCalled();\r\n        });\r\n\r\n        it('should not unflip the flippable when trying to unflip while allowUnflip prop is set and returns false', () => {\r\n            const onUnflipSpy = jasmine.createSpy('onUnflip');\r\n\r\n            flippable.setProps({\r\n                onUnflip: onUnflipSpy,\r\n                isFlipped: true,\r\n                allowUnflip: (args) => true,\r\n            });\r\n\r\n            document.getElementById('App').click();\r\n            expect(onUnflipSpy).toHaveBeenCalledTimes(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=413.bundle.js.map