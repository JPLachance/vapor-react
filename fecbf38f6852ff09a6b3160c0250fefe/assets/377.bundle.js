(window.webpackJsonp=window.webpackJsonp||[]).push([[377],{1474:function(e,n,t){"use strict";t.r(n),n.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {FilterBox} from '../../filterBox/FilterBox';\r\nimport {FacetMoreRows, IFacetMoreRowsProps} from '../FacetMoreRows';\r\n\r\ndescribe('Facets', () => {\r\n    const facet: string = 'facetTitle';\r\n    const facetRows: JSX.Element[] = [];\r\n    const basicFacetMoreRowsAttributes: IFacetMoreRowsProps = {\r\n        facet: facet,\r\n        facetRows: facetRows,\r\n    };\r\n\r\n    describe('<FacetMoreRows />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<FacetMoreRows facet={facet} facetRows={facetRows} />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<FacetMoreRows />', () => {\r\n        let facetMoreRows: ReactWrapper<IFacetMoreRowsProps, any>;\r\n        let facetMoreRowsInstance: FacetMoreRows;\r\n\r\n        beforeEach(() => {\r\n            facetMoreRows = mount(<FacetMoreRows {...basicFacetMoreRowsAttributes} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n            facetMoreRowsInstance = facetMoreRows.instance() as FacetMoreRows;\r\n        });\r\n\r\n        afterEach(() => {\r\n            facetMoreRows.detach();\r\n        });\r\n\r\n        it('should get the facet as a prop', () => {\r\n            const facetProp = facetMoreRows.props().facet;\r\n\r\n            expect(facetProp).toBeDefined();\r\n            expect(facetProp).toBe(facet);\r\n        });\r\n\r\n        it('should get the facet rows as a prop', () => {\r\n            const facetRowsProp = facetMoreRows.props().facetRows;\r\n\r\n            expect(facetRowsProp).toBeDefined();\r\n            expect(facetRowsProp).toBe(facetRows);\r\n        });\r\n\r\n        it('should render a <FilterBox /> component', () => {\r\n            expect(facetMoreRows.find(FilterBox).length).toBe(1);\r\n            expect(facetMoreRows.find(FilterBox).props().id).toBe('filter-' + facet);\r\n        });\r\n\r\n        it('should focus on the filter box input when opening', () => {\r\n            const newFacetAttributes = _.extend({}, basicFacetMoreRowsAttributes, {isOpened: true});\r\n\r\n            expect(facetMoreRowsInstance['facetSearch'].getElementsByTagName('input')[0]).not.toBe(\r\n                document.activeElement as HTMLInputElement\r\n            );\r\n\r\n            facetMoreRows.setProps(newFacetAttributes);\r\n            expect(facetMoreRowsInstance['facetSearch'].getElementsByTagName('input')[0]).toBe(\r\n                document.activeElement as HTMLInputElement\r\n            );\r\n        });\r\n    });\r\n\r\n    describe('<FacetMoreRows />', () => {\r\n        beforeEach(() => {\r\n            const otherElement: HTMLDivElement = document.createElement('div');\r\n            otherElement.setAttribute('id', 'other');\r\n            document.body.appendChild(otherElement);\r\n        });\r\n\r\n        afterEach(() => document.getElementById('other').remove());\r\n\r\n        const clickOnOther = () => {\r\n            const evt = new MouseEvent('click', {\r\n                view: window,\r\n                bubbles: true,\r\n                cancelable: true,\r\n                clientX: 20,\r\n            });\r\n            document.getElementById('other').dispatchEvent(evt);\r\n        };\r\n\r\n        it('should not add a listener on document on mount if onDocumentClick is set but the dropdown is not opened', () => {\r\n            const onDocumentClickSpy = jasmine.createSpy('onDocumentClick');\r\n            const props = _.extend({}, basicFacetMoreRowsAttributes, {onDocumentClick: onDocumentClickSpy});\r\n\r\n            mount(<FacetMoreRows {...props} />, {attachTo: document.getElementById('App')});\r\n            clickOnOther();\r\n\r\n            expect(onDocumentClickSpy).not.toHaveBeenCalled();\r\n        });\r\n\r\n        it('should add a listener on document on mount and remove it on unmount if prop onDocumentClick is set', () => {\r\n            const onDocumentClickSpy = jasmine.createSpy('onDocumentClick');\r\n            const props = _.extend({}, basicFacetMoreRowsAttributes, {\r\n                isOpened: true,\r\n                onDocumentClick: onDocumentClickSpy,\r\n            });\r\n\r\n            const facetMoreRows = mount(<FacetMoreRows {...props} />, {attachTo: document.getElementById('App')});\r\n            clickOnOther();\r\n            expect(onDocumentClickSpy).toHaveBeenCalledTimes(1);\r\n\r\n            facetMoreRows.unmount();\r\n            clickOnOther();\r\n            expect(onDocumentClickSpy).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should not call onDocumentClick when prop is set and clicking on \"facet-search\"', () => {\r\n            const onDocumentClickSpy = jasmine.createSpy('onDocumentClick');\r\n            const props = _.extend({}, basicFacetMoreRowsAttributes, {\r\n                isOpened: true,\r\n                onDocumentClick: onDocumentClickSpy,\r\n            });\r\n\r\n            mount(<FacetMoreRows {...props} />, {attachTo: document.getElementById('App')});\r\n\r\n            (document.getElementsByClassName('facet-search')[0] as HTMLDivElement).click();\r\n            expect(onDocumentClickSpy).not.toHaveBeenCalled();\r\n\r\n            clickOnOther();\r\n            expect(onDocumentClickSpy).toHaveBeenCalled();\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=377.bundle.js.map