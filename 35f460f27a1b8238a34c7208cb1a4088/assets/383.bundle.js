(window.webpackJsonp=window.webpackJsonp||[]).push([[383],{1490:function(t,r,e){"use strict";e.r(r),r.default="import * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {IFilterState} from './FilterBoxReducers';\r\nimport {defaultListBoxMatchFilter, MatchFilter} from './FilterBoxUtils';\r\n\r\nexport interface GetFilterTextProps {\r\n    id: string;\r\n}\r\n\r\nconst getFilterText = (state: IReactVaporState, props: GetFilterTextProps): string => {\r\n    const filter: IFilterState = _.findWhere(state.filters, {id: props.id});\r\n    return (filter && filter.filterText) || '';\r\n};\r\n\r\nexport interface GetMatchFilterTextProps {\r\n    matchFilter?: MatchFilter;\r\n}\r\nconst getMatchFilter = (state: IReactVaporState, props: GetMatchFilterTextProps): MatchFilter => {\r\n    return _.isUndefined(props.matchFilter) ? defaultListBoxMatchFilter : props.matchFilter;\r\n};\r\n\r\nexport const FilterBoxSelectors = {\r\n    getFilterText,\r\n    getMatchFilter,\r\n};\r\n"}}]);
//# sourceMappingURL=383.bundle.js.map