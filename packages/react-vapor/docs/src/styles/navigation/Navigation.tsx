import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';

import {Svg} from '../../../../src/components/svg/Svg';
import VaporComponent from '../../demo-building-blocs/VaporComponent';

export default function Navigation() {
    return (
        <VaporComponent
            id="navigation"
            title="Navigation"
            usage='A navigation component. Click a section header to display or hide its menu. Use the class "hide" to initially hide menus.'
            withSource
        >
            <nav className="navigation ml1">
                <div className="navigation-menu" style={{maxHeight: 300}}>
                    <ul className="navigation-menu-sections">
                        <li className="block navigation-menu-section">
                            <header className="navigation-menu-section-header">
                                <Svg
                                    svgName={VaporSVG.svg.menuContent.name}
                                    className="navigation-menu-section-header-icon icon fill-white mod-lg"
                                />
                                Section 1
                                <Svg
                                    svgName={VaporSVG.svg.arrowBottomRounded.name}
                                    className="collapsible-arrow icon fill-white open"
                                />
                            </header>
                            <ul className="navigation-menu-section-items">
                                <li className="navigation-menu-section-item state-active">
                                    <a href="#" className="block navigation-menu-section-item-link">
                                        Super Item 1
                                    </a>
                                </li>
                                <li className="navigation-menu-section-item">
                                    <a href="#" className="block navigation-menu-section-item-link">
                                        Item 2
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="block navigation-menu-section">
                            <header className="navigation-menu-section-header">
                                <Svg
                                    svgName={VaporSVG.svg.menuContent.name}
                                    className="navigation-menu-section-header-icon icon fill-white mod-lg"
                                />
                                Section Collapsed
                                <Svg
                                    svgName={VaporSVG.svg.arrowTopRounded.name}
                                    className="collapsible-arrow icon fill-white"
                                />
                            </header>
                            <ul className="navigation-menu-section-items hide" />
                        </li>
                        <li className="block navigation-menu-section">
                            <header className="navigation-menu-section-header">
                                <Svg
                                    svgName={VaporSVG.svg.menuContent.name}
                                    className="navigation-menu-section-header-icon icon fill-white mod-lg"
                                />
                                Section 3
                                <Svg
                                    svgName={VaporSVG.svg.arrowBottomRounded.name}
                                    className="collapsible-arrow icon fill-white"
                                />
                            </header>
                            <ul className="navigation-menu-section-items">
                                <li className="navigation-menu-section-item">
                                    <a href="#" className="block navigation-menu-section-item-link">
                                        Item 1
                                    </a>
                                </li>
                                <li className="navigation-menu-section-item">
                                    <a
                                        href="#"
                                        className="block navigation-menu-section-item-link state-locked"
                                        title="This menu item is locked."
                                    >
                                        Item 2
                                        <Svg
                                            svgName={VaporSVG.svg.lock.name}
                                            className="navigation-menu-section-item-link-icon"
                                            svgClass="icon mod-lg fill-white"
                                        />
                                    </a>
                                </li>
                                <li className="navigation-menu-section-item">
                                    <a href="#" className="block navigation-menu-section-item-link">
                                        Item 3
                                    </a>
                                </li>
                                <li className="navigation-menu-section-item">
                                    <a href="#" className="block navigation-menu-section-item-link">
                                        Item with tag<span className="navigation-tag">new</span>
                                    </a>
                                </li>
                                <li className="navigation-menu-section-item">
                                    <a
                                        href="#"
                                        className="block navigation-menu-section-item-link state-locked"
                                        title="This menu item is locked."
                                    >
                                        Locked/Tagged
                                        <span className="navigation-tag">new</span>
                                        <Svg
                                            svgName={VaporSVG.svg.lock.name}
                                            className="navigation-menu-section-item-link-icon"
                                            svgClass="icon mod-lg fill-white"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </VaporComponent>
    );
}