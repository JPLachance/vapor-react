(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{1468:function(t,e,n){"use strict";n.r(e),e.default="import {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {IFacet} from './Facet';\r\n\r\nexport const FacetActions = {\r\n    addFacet: 'ADD_FACET',\r\n    removeFacet: 'REMOVE_FACET',\r\n    changeFacet: 'CHANGE_FACET',\r\n    emptyFacet: 'EMPTY_FACET',\r\n    emptyAllFacets: 'EMPTY_ALL_FACET',\r\n    toggleMoreFacetRows: 'TOGGLE_MORE_FACET_ROWS',\r\n    closeMoreFacetRows: 'CLOSE_MORE_FACET_ROWS',\r\n};\r\n\r\nexport interface IFacetActionPayload {\r\n    facet: string;\r\n}\r\n\r\nexport interface IChangeFacetActionPayload extends IFacetActionPayload {\r\n    facetRow: IFacet;\r\n}\r\n\r\nexport const addFacet = (facet: string): IReduxAction<IFacetActionPayload> => ({\r\n    type: FacetActions.addFacet,\r\n    payload: {\r\n        facet,\r\n    },\r\n});\r\n\r\nexport const removeFacet = (facet: string): IReduxAction<IFacetActionPayload> => ({\r\n    type: FacetActions.removeFacet,\r\n    payload: {\r\n        facet,\r\n    },\r\n});\r\n\r\nexport const changeFacet = (facet: string, facetRow: IFacet): IReduxAction<IChangeFacetActionPayload> => ({\r\n    type: FacetActions.changeFacet,\r\n    payload: {\r\n        facet,\r\n        facetRow,\r\n    },\r\n});\r\n\r\nexport const emptyFacet = (facet: string): IReduxAction<IFacetActionPayload> => ({\r\n    type: FacetActions.emptyFacet,\r\n    payload: {\r\n        facet,\r\n    },\r\n});\r\n\r\nexport const emptyAllFacets = (): IReduxAction<IFacetActionPayload> => ({type: FacetActions.emptyAllFacets});\r\n\r\nexport const toggleMoreFacetRows = (facet: string): IReduxAction<IFacetActionPayload> => ({\r\n    type: FacetActions.toggleMoreFacetRows,\r\n    payload: {\r\n        facet,\r\n    },\r\n});\r\n\r\nexport const closeMoreFacetRows = (): IReduxAction<IFacetActionPayload> => ({\r\n    type: FacetActions.closeMoreFacetRows,\r\n    payload: {\r\n        facet: '',\r\n    },\r\n});\r\n"}}]);
//# sourceMappingURL=362.bundle.js.map