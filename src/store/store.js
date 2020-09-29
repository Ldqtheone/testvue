import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        errorMessage: "",
        article: "",
        githubPseudo: ""
    },
    mutations: {
        displayError(state, errorMessage) {
            state.errorMessage = errorMessage
        },
        resetValues(state) {
            state.errorMessage = "";
            state.article = "";
            state.githubPseudo = "";
        }
    },
    getters: {
        errorMessage: state => state.errorMessage,
        article: state => state.article,
        githubPseudo: state => state.githubPseudo
    }
});