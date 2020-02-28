(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{252:function(r,e,a){"use strict";a.r(e),e.default='import * as React from \'react\';\r\nimport {\r\n    ISearchBarProps,\r\n    ISearchBarStateProps,\r\n    SearchBar,\r\n    SearchBarConnected,\r\n    toggleSearchBarDisabled,\r\n    toggleSearching,\r\n} from \'react-vapor\';\r\nimport {findWhere} from \'underscore\';\r\n\r\nimport {Store} from \'../../Store\';\r\n\r\nclass SearchBarExample extends React.Component<{}, ISearchBarStateProps> {\r\n    constructor(props: ISearchBarProps) {\r\n        super(props);\r\n\r\n        this.state = {\r\n            value: \'\',\r\n            disabled: false,\r\n            searching: false,\r\n        };\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <SearchBar\r\n                id="search-bar-1"\r\n                placeholder="Search awesome things"\r\n                value={this.state.value}\r\n                disabled={this.state.disabled}\r\n                searching={this.state.searching}\r\n                onChange={(event) => this.setState({value: event.target.value})}\r\n                onSearch={(filterText: string) => {\r\n                    this.setState({searching: true});\r\n                    setTimeout(() => {\r\n                        this.setState({searching: false});\r\n                        (document.querySelector(\'#search-bar-1\') as HTMLElement).focus();\r\n                    }, 800);\r\n                }}\r\n            />\r\n        );\r\n    }\r\n}\r\n\r\nexport class SearchBarExamples extends React.Component<any, any> {\r\n    render() {\r\n        return (\r\n            <div className="mt2">\r\n                <div className="form-group">\r\n                    <label className="form-control-label">SearchBar disabled</label>\r\n                    <div className="text-dark-grey">\r\n                        <SearchBar\r\n                            id="search-bar-2"\r\n                            disabled\r\n                            placeholder="Currently disabled."\r\n                            onSearch={() => alert(\'Implement your own search logic with the onSearch prop.\')}\r\n                        />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">SearchBar searching</label>\r\n                    <div className="text-dark-grey">\r\n                        <SearchBar\r\n                            id="search-bar-3"\r\n                            searching\r\n                            placeholder="Searching for something"\r\n                            onSearch={() => alert(\'Implement your own search logic with the onSearch prop.\')}\r\n                        />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">SearchBar not connected but fully working</label>\r\n                    <div className="text-dark-grey">\r\n                        <SearchBarExample />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">SearchBarConnected</label>\r\n                    <div className="text-dark-grey">\r\n                        <SearchBarConnected\r\n                            id="search-bar-4"\r\n                            placeholder="Type something and press enter, or click the loupe"\r\n                            onSearch={(filterText: string) => {\r\n                                Store.dispatch(toggleSearching(\'search-bar-4\', true));\r\n                                setTimeout(() => {\r\n                                    Store.dispatch(toggleSearching(\'search-bar-4\', false));\r\n                                    (document.querySelector(\'#search-bar-4\') as HTMLElement).focus();\r\n                                }, 800);\r\n                            }}\r\n                        />\r\n                        <button\r\n                            type="button"\r\n                            onClick={() => {\r\n                                const searchBar = findWhere(Store.getState().searchBars, {\r\n                                    id: \'search-bar-4\',\r\n                                });\r\n                                Store.dispatch(toggleSearchBarDisabled(\'search-bar-4\', !searchBar.disabled));\r\n                            }}\r\n                        >\r\n                            Toggle disabled state\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=76.bundle.js.map