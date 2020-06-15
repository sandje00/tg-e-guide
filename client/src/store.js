import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import togoService from './services/togoService';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    storage: window.sessionStorage
});

export default new Vuex.Store({
    strict: true,
    state: {
        token: null,
        user: null,
        isUserSignedIn: false,
        items: null,
        timetableItems: null
    },
    mutations: {
        setUserData(state, data) {
            state.token = data.token;
            if(data.token) {
                state.isUserSignedIn = true;
            }
            else {
                state.isUserSignedIn = false;
            }
            state.user = data.user;
        },
        setItems(state, data) {
            state.items = data
        },
        setTimetableItems(state, data) {
            state.timetableItems = data
        },
        resetItems(state) {
            state.items = null;
            state.timetableItems = null;
        }
    },
    actions: {
        setUserData({ commit }, data) {
            commit('setUserData', data);
        },
        setItems({ commit }) {
            return new Promise((resolve, reject) => {
                togoService.showItems()
                    .then(response => {
                        commit('setItems', response.data);
                        resolve();
                    })
                    .catch(err => reject(err))
            });
        },
        setTimetableItems({ commit }) {
            return new Promise((resolve, reject) => {
                togoService.showTimetableItems()
                    .then(response => {
                        commit('setTimetableItems', response.data);
                        resolve()
                    })
                    .catch(err => reject(err))
            });
        },
        resetItems({ commit }) {
            commit('resetItems');
        }
    },
    plugins: [vuexLocal.plugin]
});