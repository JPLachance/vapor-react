(window.webpackJsonp=window.webpackJsonp||[]).push([[371],{1461:function(e,r,t){"use strict";t.r(r),r.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {Facet, IFacet, IFacetProps} from '../Facet';\r\nimport {FacetConnected} from '../FacetConnected';\r\nimport {FacetMoreRows} from '../FacetMoreRows';\r\nimport {FacetMoreToggle} from '../FacetMoreToggle';\r\nimport {FacetRow} from '../FacetRow';\r\n\r\ndescribe('Facets', () => {\r\n    describe('<FacetConnected />', () => {\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let facetComponent: ReactWrapper<IFacetProps, any>;\r\n        let store: Store<IReactVaporState>;\r\n        let newRow: JSX.Element;\r\n        let facetRows: IFacet[];\r\n        let facet: IFacet;\r\n        let selectedFacetRows: IFacet[];\r\n        let onToggleFacet: (facet: string, facetRow: IFacet) => void;\r\n        let clearFacet: (facet: string) => void;\r\n        const maxRowsToShow = 4;\r\n\r\n        beforeEach(() => {\r\n            facetRows = [\r\n                {\r\n                    name: 'row1',\r\n                    formattedName: 'Row 1',\r\n                },\r\n                {\r\n                    name: 'row2',\r\n                    formattedName: 'Row 2',\r\n                },\r\n                {\r\n                    name: 'row3',\r\n                    formattedName: 'Row 3',\r\n                },\r\n            ];\r\n            facet = {\r\n                name: 'facet1',\r\n                formattedName: 'Facet 1',\r\n            };\r\n            selectedFacetRows = [\r\n                {\r\n                    name: 'row2',\r\n                    formattedName: 'Row 2',\r\n                },\r\n            ];\r\n            onToggleFacet = jasmine.createSpy('onToggleFacet');\r\n            clearFacet = jasmine.createSpy('clearFacet');\r\n\r\n            store = TestUtils.buildStore();\r\n\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <FacetConnected\r\n                        facetRows={facetRows}\r\n                        facet={facet}\r\n                        selectedFacetRows={selectedFacetRows}\r\n                        toggleFacet={onToggleFacet}\r\n                        clearFacet={clearFacet}\r\n                        maxRowsToShow={maxRowsToShow}\r\n                    />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            facetComponent = wrapper.find(Facet);\r\n        });\r\n\r\n        afterEach(() => {\r\n            wrapper.detach();\r\n        });\r\n\r\n        it('should get the facet rows as a prop', () => {\r\n            const facetRowsProp = facetComponent.props().facetRows;\r\n\r\n            expect(facetRowsProp).toBeDefined();\r\n            expect(jasmine.arrayContaining(facetRowsProp)).toEqual(jasmine.arrayContaining(facetRows));\r\n        });\r\n\r\n        it('should get the facet title as a prop', () => {\r\n            const facetProp = facetComponent.props().facet;\r\n\r\n            expect(facetProp).toBeDefined();\r\n            expect(facetProp).toBe(facet);\r\n        });\r\n\r\n        it('should get the selected facet rows as a prop', () => {\r\n            const selectedFacetRowsProp = facetComponent.props().selectedFacetRows;\r\n\r\n            expect(selectedFacetRowsProp).toBeDefined();\r\n            expect(selectedFacetRowsProp).toBe(selectedFacetRows);\r\n        });\r\n\r\n        it('should get the maxRowsToShow as a prop', () => {\r\n            const maxRowsToShowProp = facetComponent.props().maxRowsToShow;\r\n\r\n            expect(maxRowsToShowProp).toBeDefined();\r\n            expect(maxRowsToShowProp).toBe(maxRowsToShow);\r\n        });\r\n\r\n        it('should get what to do when toggling a row as a prop', () => {\r\n            const onToggleFacetProp = facetComponent.props().onToggleFacet;\r\n\r\n            expect(onToggleFacetProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do when clearing a facet as a prop', () => {\r\n            const clearFacetProp = facetComponent.props().clearFacet;\r\n\r\n            expect(clearFacetProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do when rendering the facet as a prop', () => {\r\n            const onRenderProp = facetComponent.props().onRender;\r\n\r\n            expect(onRenderProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do when destroying the facet as a prop', () => {\r\n            const onDestroyProp = facetComponent.props().onDestroy;\r\n\r\n            expect(onDestroyProp).toBeDefined();\r\n        });\r\n\r\n        it('should render as many <FacetRow /> components as there are facet rows', () => {\r\n            expect(facetComponent.find(FacetRow).length).toBe(facetRows.length);\r\n        });\r\n\r\n        it('should render a toggle to view more facet rows if there are more than maxRowsToShow (number in props + 1 extra)', () => {\r\n            expect(facetComponent.find(FacetMoreToggle).length).toBe(0);\r\n\r\n            facetRows = facetRows.concat(\r\n                {\r\n                    name: 'row4',\r\n                    formattedName: 'Row 4',\r\n                },\r\n                {\r\n                    name: 'row5',\r\n                    formattedName: 'Row 5',\r\n                },\r\n                {\r\n                    name: 'row6',\r\n                    formattedName: 'Row 6',\r\n                }\r\n            );\r\n\r\n            newRow = (\r\n                <FacetConnected\r\n                    facetRows={facetRows}\r\n                    facet={facet}\r\n                    selectedFacetRows={selectedFacetRows}\r\n                    toggleFacet={onToggleFacet}\r\n                    clearFacet={clearFacet}\r\n                    maxRowsToShow={maxRowsToShow}\r\n                />\r\n            );\r\n            wrapper.setProps({children: newRow}).update();\r\n\r\n            expect(wrapper.find(Facet).find(FacetMoreToggle).length).toBe(1);\r\n        });\r\n\r\n        it('should render more facet rows if there are more than maxRowsToShow (number in props + 1 extra)', () => {\r\n            expect(facetComponent.find(FacetMoreRows).length).toBe(0);\r\n\r\n            facetRows = facetRows.concat(\r\n                {\r\n                    name: 'row4',\r\n                    formattedName: 'Row 4',\r\n                },\r\n                {\r\n                    name: 'row5',\r\n                    formattedName: 'Row 5',\r\n                },\r\n                {\r\n                    name: 'row6',\r\n                    formattedName: 'Row 6',\r\n                }\r\n            );\r\n\r\n            newRow = (\r\n                <FacetConnected\r\n                    facetRows={facetRows}\r\n                    facet={facet}\r\n                    selectedFacetRows={selectedFacetRows}\r\n                    toggleFacet={onToggleFacet}\r\n                    clearFacet={clearFacet}\r\n                    maxRowsToShow={maxRowsToShow}\r\n                />\r\n            );\r\n            wrapper.setProps({children: newRow});\r\n            wrapper.update();\r\n\r\n            expect(wrapper.find(Facet).find(FacetMoreRows).length).toBe(1);\r\n        });\r\n\r\n        it('should show the button to clear the facet if there is a selected row', () => {\r\n            expect(wrapper.find(Facet).find('.facet-header-eraser.hidden').length).toBe(0);\r\n\r\n            selectedFacetRows = [];\r\n\r\n            newRow = (\r\n                <FacetConnected\r\n                    facetRows={facetRows}\r\n                    facet={facet}\r\n                    selectedFacetRows={selectedFacetRows}\r\n                    toggleFacet={onToggleFacet}\r\n                    clearFacet={clearFacet}\r\n                />\r\n            );\r\n            wrapper.setProps({children: newRow});\r\n            wrapper.update();\r\n\r\n            expect(wrapper.find(Facet).find('.facet-header-eraser.hidden').length).toBe(1);\r\n        });\r\n\r\n        it('should display the facet title', () => {\r\n            expect(facetComponent.html()).toContain(facet.formattedName);\r\n        });\r\n\r\n        it('should call onToggleFacet when buildCategoryFacet is called', () => {\r\n            const facetRowLabel = facetComponent\r\n                .find(FacetRow)\r\n                .first()\r\n                .find('label');\r\n\r\n            expect(onToggleFacet).not.toHaveBeenCalled();\r\n\r\n            expect(facetRowLabel.length).toBe(1);\r\n            facetRowLabel.simulate('click');\r\n\r\n            expect(onToggleFacet).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should call clearFacet when clearCategoryFacet is called', () => {\r\n            const facetEraser = facetComponent.find('.facet-header-eraser');\r\n\r\n            expect(clearFacet).not.toHaveBeenCalled();\r\n\r\n            expect(facetEraser.length).toBe(1);\r\n            facetEraser.simulate('click');\r\n\r\n            expect(clearFacet).toHaveBeenCalled();\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=371.bundle.js.map