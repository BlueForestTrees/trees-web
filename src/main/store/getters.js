import {find} from 'lodash';

export default {
    prix: () => (tree) => find(tree.facetEntries, {name: "prix"}),
    qt: () => (tree) => find(tree.facetEntries, {name: "quantité"}),
    title: (state) => state.tree && state.tree.trunk.name
};