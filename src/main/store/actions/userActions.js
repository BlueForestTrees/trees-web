import On from "../../const/on"
import Do from "../../const/do"
import api from "../../rest/api"
import forage from "../../services/forage"
import {Dial} from "../../const/dial"

export default {

    [On.USER_FROM_STORAGE]: async ({commit}) => {
        commit(Do.SET_TOKEN, await forage.getAccessToken())
    },

    [On.WANT_SUSCRIBE]: ({}, {mail}) => api.postMail({mail}),

    [On.CONFIRM_SUSCRIBE]: async ({commit}, {token, fullname, password}) => api.postConfirm({token, fullname, password})
        .then(response => {
            saveToken(commit, response.token)
        }),

    [On.LOGIN]: async ({commit}, {mail, password}) => api.postAuth({mail, password})
        .then(response => {
            saveToken(commit, response.token)
        }),

    [On.LOGOUT]: async ({commit, dispatch}) => {
        forage.clearAccessToken()
        commit(Do.SET_TOKEN, null)
        dispatch(On.GO_HOME)
    },

    [On.CHECK_AUTH]: ({state, commit}) => {
        if (state.user) {
            return true
        } else {
            commit(Do.SHOW_DIALOG, {dialog: Dial.CONNECT_TO_CONTINUE})
            return false
        }
    }
}

const saveToken = (commit, token) => {
    forage.setAccessToken(token)
    commit(Do.SET_TOKEN, token)
}
