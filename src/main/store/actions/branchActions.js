import On from "../../const/on";
import rest from "../../rest/routes";
import _ from 'lodash';
import Do from "../../const/do";
import {trunkyAll} from "../../services/calculations";

export default {

    [On.LOAD_BRANCHES]: ({commit}, tree) => {

        let qt = tree.trunk.quantity && tree.trunk.quantity.qt;
        let unit = tree.trunk.quantity && tree.trunk.quantity.unit;
        let loadBranches = (qt && unit) ? rest.getQuantifiedBranches(qt, unit, tree._id) : rest.getUnquantifiedBranches(tree._id);

        return loadBranches
            .then(branches => ({
                ..._.omit(branches, "items"),
                items: trunkyAll(branches.items)
            }))
            .then(branches => commit(Do.SET_BRANCHES, {tree, branches}));
    }
};
