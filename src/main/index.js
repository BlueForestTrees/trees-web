import Vue from 'vue'
import App from './vue/App'
import Vuetify from 'vuetify'
import api from "./rest/api"
import {initUnits} from "unit-manip"
import store from "./store/store"
import router from "./router/router"


Vue.config.productionTip = false
Vue.use(Vuetify)

Promise
    .all([
        api.getGrandeurs()
            .then(initUnits)
    ])
    .then(startApp)

function startApp() {

    new Vue({
        el: '#app',
        router,
        store,
        components: {App},
        template: '<App/>'
    })
}
