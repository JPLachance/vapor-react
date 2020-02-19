import * as React from 'react';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export default function NavigationLoading() {
    return (
        <VaporComponent
            id="navigation-loading"
            title="Navigation Loading"
            usage="A navigation loading used during the time the real navigation is shown."
            withSource
        >
            <nav className="navigation">
                <div className="navigation-menu" style={{maxHeight: 500}}>
                    <ul className="navigation-menu-sections">
                        <li className="block navigation-menu-section">
                            <header className="navigation-menu-section-header">
                                <div className="navigation-loading-item-light-grey mod-navigation-loading-bullet navigation-menu-section-header-icon" />
                                <div className="navigation-loading-item-light-grey mod-width-40" />
                            </header>
                            <ul className="navigation-menu-section-items">
                                <div className="navigation-loading-item-grey mod-width-30 mod-sub-navigation-left-margin" />
                                <div className="navigation-loading-item-grey mod-width-50 mod-sub-navigation-left-margin" />
                                <div className="navigation-loading-item-grey mod-width-40 mod-sub-navigation-left-margin" />
                                <div className="navigation-loading-item-grey mod-width-60 mod-sub-navigation-left-margin" />
                            </ul>
                        </li>
                        <li className="block navigation-menu-section">
                            <header className="navigation-menu-section-header">
                                <div className="navigation-loading-item-light-grey mod-navigation-loading-bullet navigation-menu-section-header-icon" />
                                <div className="navigation-loading-item-light-grey mod-width-40" />
                            </header>
                            <ul className="navigation-menu-section-items">
                                <div className="navigation-loading-item-grey mod-width-30 mod-sub-navigation-left-margin" />
                                <div className="navigation-loading-item-grey mod-width-50 mod-sub-navigation-left-margin" />
                                <div className="navigation-loading-item-grey mod-width-40 mod-sub-navigation-left-margin" />
                                <div className="navigation-loading-item-grey mod-width-60 mod-sub-navigation-left-margin" />
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </VaporComponent>
    );
}