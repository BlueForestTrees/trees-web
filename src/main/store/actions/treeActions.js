import Vue from 'vue'
import On from "../../const/on"
import api from "../../rest/api"
import {idQuantity, transportQuantity, trunkyAll} from "../../services/calculations"
import router from "../../router/router"
import {GO} from "../../const/go"
import Do from "../../const/do"

//on détecte que l'objet est à charger en se basant arbitrairement sur le champ branches
const needRefresh = basketTree => !basketTree.branches

export default {
    [On.GO_TREE]: ({commit, state}, tree) => {
        const _id = tree._id
        const bqt = tree.trunk.quantity.bqt
        return router.push({name: GO.TREE, params: {_id, bqt}})
    },
    
    [On.LOAD_OPEN_TREE]: async ({getters, dispatch, commit}, {_id, bqt}) => {
        const basketItem = getters.basketItem(_id)
        let tree = null
        if (basketItem && !needRefresh(basketItem)) {
            tree = basketItem
        } else {
            tree = await dispatch(On.LOAD_TREE, {_id, bqt})
            dispatch(On.ADD_TO_BASKET, [tree])
        }
        commit(Do.OPEN_TREE, tree)
        return tree
    },
    
    [On.LOAD_TREE]: ({commit, state, dispatch}, {_id, bqt}) => {
        const tree = {_id}
        dispatch(On.LOAD_TRUNK, {_id, bqt}).then(trunk => Vue.set(tree, "trunk", trunk))
        dispatch(On.LOAD_ROOTS, {_id, bqt}).then(roots => Vue.set(tree, "roots", roots))
        dispatch(On.LOAD_BRANCHES, {_id, bqt}).then(branches => Vue.set(tree, "branches", branches))
        dispatch(On.LOAD_IMPACTS, {_id, bqt}).then(impacts => Vue.set(tree, "impacts", impacts))
        // dispatch(On.LOAD_TANK, treeToLoad)
        // dispatch(On.LOAD_FACETS, treeToLoad)
        // dispatch(On.LOAD_IMPACTS_TANK, treeToLoad)
        return tree
    },
    
    [On.SEARCH_TREE]: async ({commit}, query) => trunkyAll(await api.searchTrunk(query)),
    
    [On.CLONE_TREE]: ({dispatch}, {_id}) =>
        dispatch(On.CLONE_TRUNK, _id),
    
    [On.DELETE_TREE]: ({dispatch}, tree) =>
        api.deleteTrunk(tree._id)
            .then(() => dispatch(On.REMOVE_FROM_BASKET, [tree])),
    
    [On.ADD_TRANSPORT]: async ({dispatch}, {tree, item, transport}) =>
        await dispatch(On.LINK, {
            trunk: idQuantity(tree),
            root: {
                _id: transport._id,
                quantity: transportQuantity(tree.trunk.quantity, transport.quantity),
                relativeTo: ({
                    _id: item._id,
                    refqt: tree.trunk.quantity,
                    disqt: transport.quantity
                })
            }
        })
    
}