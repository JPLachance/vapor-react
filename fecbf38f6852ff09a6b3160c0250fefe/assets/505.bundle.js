(window.webpackJsonp=window.webpackJsonp||[]).push([[505],{1601:function(e,n,r){"use strict";r.r(n),n.default='import * as React from \'react\';\r\nimport {UUID} from \'../../../utils/UUID\';\r\nimport {Badge} from \'../../badge/Badge\';\r\nimport {IItemBoxProps} from \'../../itemBox/ItemBox\';\r\nimport {ListBox} from \'../../listBox/ListBox\';\r\nimport {Svg} from \'../../svg/Svg\';\r\nimport {MenuConnected} from \'../MenuConnected\';\r\n\r\nexport class MenuExamples extends React.PureComponent {\r\n    private getCustomSvg(): React.ReactNode {\r\n        return <Svg svgName="more" svgClass="fill-medium-grey icon mod-lg" />;\r\n    }\r\n\r\n    render() {\r\n        const triggerAlertFunction = () => {\r\n            alert(`Alert function triggered`);\r\n        };\r\n\r\n        const defaultItems: IItemBoxProps[] = [\r\n            {value: \'Add Digimon\'},\r\n            {value: \'Duplicate Meepo\'},\r\n            {value: \'Disable Dragon Ball\', onOptionClick: () => triggerAlertFunction()},\r\n            {value: \'Delete BitConnect\'},\r\n        ];\r\n\r\n        return (\r\n            <div className="mt2">\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Default Menu</label>\r\n                    <div className="form-control">\r\n                        <MenuConnected id={UUID.generate()}>\r\n                            <ListBox items={defaultItems} />\r\n                        </MenuConnected>\r\n                    </div>\r\n                </div>\r\n\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Cannot open more than 1 menu at the same time</label>\r\n                    <div className="form-control">\r\n                        <MenuConnected id={UUID.generate()} className={\'mr2\'}>\r\n                            <ListBox items={defaultItems} />\r\n                        </MenuConnected>\r\n                        <MenuConnected id={UUID.generate()} className={\'mr2\'}>\r\n                            <ListBox items={defaultItems} />\r\n                        </MenuConnected>\r\n                    </div>\r\n                </div>\r\n\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Menu with list to the right</label>\r\n                    <div className="form-control">\r\n                        <MenuConnected id={UUID.generate()} className={\'ml2\'} positionRight>\r\n                            <ListBox items={defaultItems} />\r\n                        </MenuConnected>\r\n                    </div>\r\n                </div>\r\n\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Menu with a custom Svg component</label>\r\n                    <div className="form-control">\r\n                        <MenuConnected id={UUID.generate()} buttonSvg={this.getCustomSvg()}>\r\n                            <ListBox items={defaultItems} />\r\n                        </MenuConnected>\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Menu with a Badge instead of a list</label>\r\n                    <div className="form-control">\r\n                        <MenuConnected id={UUID.generate()}>\r\n                            <Badge label={\'Badges\'} />\r\n                        </MenuConnected>\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Menu with a custom offset of 10px</label>\r\n                    <div className="form-control">\r\n                        <MenuConnected id={UUID.generate()} customOffset={10}>\r\n                            <ListBox items={defaultItems} />\r\n                        </MenuConnected>\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Menu not close on items click</label>\r\n                    <div className="form-control">\r\n                        <MenuConnected id={UUID.generate()} closeOnSelectItem={false}>\r\n                            <ListBox items={defaultItems} />\r\n                        </MenuConnected>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=505.bundle.js.map