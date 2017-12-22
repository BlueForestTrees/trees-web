import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions';
import mutations from './mutations';
import _ from 'lodash';
import search from './search';

Vue.use(Vuex);

const state = {
    path: null,
    linkEdit: null
};

const getters = {
    trunk(state) {
        return _.first(state.path);
    },
    seed(state) {
        return _.last(state.path);
    }
};

const modules = {
    search
};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules
});

export default store;