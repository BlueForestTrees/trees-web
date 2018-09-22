import On from "../../const/on"
import api from "../../rest/api"
import Do from "../../const/do"
import {hasQuantity, idQtFrom} from "../../services/calculations"
import {map} from 'unit-manip'

export default {

    [On.LOAD_FACETS]: ({commit}, tree) => api.getFacets(tree._id),

    [On.DELETE_FACETS]:
        ({commit}, {facets, toDelete}) => {
            api.deleteFacets(facets._id, map(toDelete, e => e._id))
            commit(Do.DELETE_FACETS, {facets, toDelete})
        },
    [On.ADD_FACET]:
        async ({commit}, {tree, facet}) => {
            api.putFacet(idQtFrom(tree.trunk), idQtFrom(facet))
            commit(Do.ADD_FACET, {tree, facet})
        }
}