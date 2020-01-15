(window.webpackJsonp=window.webpackJsonp||[]).push([[371],{1468:function(e,t,a){"use strict";a.r(t),t.default="import * as _ from 'underscore';\r\nimport {IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {IFacet} from './Facet';\r\nimport {FacetActions} from './FacetActions';\r\n\r\nexport interface IFacetState {\r\n    facet: string;\r\n    opened: boolean;\r\n    selected: IFacet[];\r\n}\r\n\r\nexport const facetInitialState: IFacetState = {facet: undefined, opened: false, selected: []};\r\nexport const facetsInitialState: IFacetState[] = [];\r\n\r\nconst toggleMore = (state: IFacetState, action: IReduxAction<IReduxActionsPayload>): IFacetState => {\r\n    if (state.facet !== action.payload.facet) {\r\n        return state;\r\n    }\r\n\r\n    return {\r\n        facet: state.facet,\r\n        opened: !state.opened,\r\n        selected: state.selected,\r\n    };\r\n};\r\n\r\nconst closeMore = (state: IFacetState): IFacetState => {\r\n    return {\r\n        facet: state.facet,\r\n        opened: false,\r\n        selected: state.selected,\r\n    };\r\n};\r\n\r\nconst addFacet = (state: IFacetState, action: IReduxAction<IReduxActionsPayload>): IFacetState => {\r\n    return {\r\n        facet: action.payload.facet,\r\n        opened: false,\r\n        selected: [],\r\n    };\r\n};\r\n\r\nconst changeFacet = (state: IFacetState, action: IReduxAction<IReduxActionsPayload>): IFacetState => {\r\n    if (state.facet !== action.payload.facet) {\r\n        return state;\r\n    }\r\n\r\n    let selected = state.selected;\r\n    if (_.some(state.selected, (facetRow: IFacet) => facetRow.name === action.payload.facetRow.name)) {\r\n        const selectedIndex: number = _.findIndex(state.selected, {name: action.payload.facetRow.name});\r\n        if (!selected[selectedIndex].exclude && action.payload.facetRow.exclude) {\r\n            selected[selectedIndex] = {\r\n                name: action.payload.facetRow.name,\r\n                formattedName: action.payload.facetRow.formattedName,\r\n                exclude: true,\r\n            };\r\n        } else {\r\n            selected = _.reject(state.selected, (facetRow: IFacet, index: number) => index === selectedIndex);\r\n        }\r\n    } else {\r\n        selected = [\r\n            {\r\n                name: action.payload.facetRow.name,\r\n                formattedName: action.payload.facetRow.formattedName,\r\n                exclude: action.payload.facetRow.exclude,\r\n            },\r\n            ...state.selected,\r\n        ];\r\n    }\r\n    return {\r\n        facet: state.facet,\r\n        opened: state.opened,\r\n        selected,\r\n    };\r\n};\r\n\r\nconst emptyFacet = (state: IFacetState, action: IReduxAction<IReduxActionsPayload>): IFacetState => {\r\n    if (state.facet !== action.payload.facet) {\r\n        return state;\r\n    }\r\n\r\n    return {\r\n        facet: state.facet,\r\n        opened: state.opened,\r\n        selected: [],\r\n    };\r\n};\r\n\r\nexport const facetReducer = (\r\n    state: IFacetState = facetInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): IFacetState => {\r\n    switch (action.type) {\r\n        case FacetActions.toggleMoreFacetRows:\r\n            return toggleMore(state, action);\r\n        case FacetActions.closeMoreFacetRows:\r\n            return closeMore(state);\r\n        case FacetActions.addFacet:\r\n            return addFacet(state, action);\r\n        case FacetActions.changeFacet:\r\n            return changeFacet(state, action);\r\n        case FacetActions.emptyFacet:\r\n            return emptyFacet(state, action);\r\n        case FacetActions.emptyAllFacets:\r\n            return {...state, selected: []};\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nexport const facetsReducer = (\r\n    state: IFacetState[] = facetsInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): IFacetState[] => {\r\n    switch (action.type) {\r\n        case FacetActions.changeFacet:\r\n        case FacetActions.emptyFacet:\r\n        case FacetActions.emptyAllFacets:\r\n        case FacetActions.toggleMoreFacetRows:\r\n        case FacetActions.closeMoreFacetRows:\r\n            return state.map((facet: IFacetState) => facetReducer(facet, action));\r\n        case FacetActions.addFacet:\r\n            return [...state, facetReducer(undefined, action)];\r\n        case FacetActions.removeFacet:\r\n            return _.reject(state, (facet: IFacetState) => {\r\n                return action.payload.facet === facet.facet;\r\n            });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=371.bundle.js.map