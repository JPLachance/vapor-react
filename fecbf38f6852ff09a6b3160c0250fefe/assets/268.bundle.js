(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{1367:function(r,o,n){"use strict";n.r(o),o.default="import {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {KeyValue} from '../../utils/DataStructuresUtils';\r\nimport {ITooltipProps, Tooltip} from '../tooltip/Tooltip';\r\nimport {ColorBar, IColorBarProps} from './ColorBar';\r\nimport {noColorsPropsScenarios, withColorsPropsScenarios} from './ColorBarPropsScenarios.spec';\r\n\r\ndescribe('ColorBar', () => {\r\n    it('should render without error in different prop scenarios', () => {\r\n        [...noColorsPropsScenarios, ...withColorsPropsScenarios].forEach((props) => {\r\n            expect(() => shallow(<ColorBar {...props} />)).not.toThrow();\r\n        });\r\n    });\r\n\r\n    it('should render a div with only a transparent color with width 100% if no colors are passed', () => {\r\n        noColorsPropsScenarios.forEach((props) => {\r\n            const colorBars = shallow(<ColorBar {...props} />).find('.color-bar-color');\r\n            const {width} = colorBars.first().prop('style');\r\n            const colorProp = colorBars.first().prop('color');\r\n\r\n            expect(colorBars.length).toBe(1);\r\n            expect(colorProp).toBe('transparent');\r\n            expect(width).toBe('100%');\r\n        });\r\n    });\r\n\r\n    it('should fill the no-color width with transparent if colored width does not reach 100%', () => {\r\n        const colorBars = shallow(<ColorBar widthPerColor={{blue: 20}} />).find('.color-bar-color');\r\n        expect(colorBars.length).toBe(2);\r\n\r\n        const coloredStyle = colorBars.first().prop('style');\r\n        const coloredColorProp = colorBars.first().prop('color');\r\n        expect(coloredColorProp).toBe('blue');\r\n        expect(coloredStyle.width).toBe('20%');\r\n\r\n        const transparentStyle = colorBars.last().prop('style');\r\n        const transparentColorProp = colorBars.last().prop('color');\r\n        expect(transparentColorProp).toBe('transparent');\r\n        expect(transparentStyle.width).toBe('80%');\r\n    });\r\n\r\n    it('should render a div for each non-zero width color with the proper width', () => {\r\n        withColorsPropsScenarios.forEach((props) => {\r\n            const nonZeroNonTransparentColors = _.omit(props.widthPerColor, (width: number, color: string) => !width);\r\n\r\n            shallow(<ColorBar {...props} />)\r\n                .find('.color-bar-color')\r\n                .forEach((color) => {\r\n                    const {width} = color.first().prop('style');\r\n                    const colorProp = color.first().prop('color');\r\n\r\n                    if (colorProp !== 'transparent') {\r\n                        expect(nonZeroNonTransparentColors[colorProp]).toBe(parseInt(width.toString(), 10));\r\n                    } else {\r\n                        expect(colorProp).toBe('transparent');\r\n                    }\r\n                });\r\n        });\r\n    });\r\n\r\n    it('should adjust the width of each color if the total width exceeds 100%', () => {\r\n        const doubledWidthProps: IColorBarProps = {\r\n            widthPerColor: {\r\n                blue: 20 * 2,\r\n                yellow: 50 * 2,\r\n                brown: 30 * 2,\r\n            },\r\n        };\r\n\r\n        shallow(<ColorBar {...doubledWidthProps} />)\r\n            .find('.color-bar-color')\r\n            .forEach((color) => {\r\n                const {width} = color.prop('style');\r\n                const colorProp = color.first().prop('color');\r\n                expect(doubledWidthProps.widthPerColor[colorProp] / 2).toBe(parseInt(width.toString(), 10));\r\n            });\r\n    });\r\n\r\n    it('should have a 5px height by default', () => {\r\n        const {height} = shallow(<ColorBar widthPerColor={{blue: 10}} />)\r\n            .find('.color-bar-color')\r\n            .first()\r\n            .prop('style');\r\n\r\n        expect(height).toBe('5px');\r\n    });\r\n\r\n    it('should change the default height if height is passed as prop', () => {\r\n        const {height} = shallow(<ColorBar widthPerColor={{blue: 10}} height=\"10px\" />)\r\n            .find('.color-bar-color')\r\n            .first()\r\n            .prop('style');\r\n\r\n        expect(height).toBe('10px');\r\n    });\r\n\r\n    it('should pass extra classes to container if passed as prop', () => {\r\n        const colorBar = shallow(<ColorBar widthPerColor={{blue: 10}} className=\"extra-class\" />)\r\n            .find('div')\r\n            .first();\r\n\r\n        expect(colorBar.prop('className')).toContain('extra-class');\r\n    });\r\n\r\n    it('should render without tooltip if no tooltipPerColor is passed', () => {\r\n        const colorBar = shallow(<ColorBar widthPerColor={{blue: 10}} className=\"extra-class\" />);\r\n\r\n        expect(colorBar.find(Tooltip).length).toBe(0);\r\n    });\r\n\r\n    it('should render with a tooltip on the right color if some tooltipPerColor values are passed', () => {\r\n        const widthPerColor: KeyValue<number> = {blue: 10, green: 90};\r\n        const tooltipPerColor: KeyValue<ITooltipProps> = {\r\n            blue: {title: 'superTooltipPropsForBlue'},\r\n            green: {title: 'superTooltipPropsForGreen'},\r\n        };\r\n\r\n        const colorBar = shallow(<ColorBar {...{widthPerColor, tooltipPerColor}} className=\"extra-class\" />);\r\n\r\n        _.keys(widthPerColor).map((color: string, index: number) => {\r\n            expect(\r\n                colorBar\r\n                    .find(Tooltip)\r\n                    .at(index)\r\n                    .props()\r\n            ).toEqual(jasmine.objectContaining(tooltipPerColor[color]));\r\n            expect(\r\n                colorBar\r\n                    .find(Tooltip)\r\n                    .at(index)\r\n                    .find('.color-bar-color')\r\n                    .html()\r\n            ).toContain(color);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=268.bundle.js.map