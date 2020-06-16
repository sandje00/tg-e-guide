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
        },
        addItem(state, id) {
            state.items.push({
                idItem: id,
                idUser: state.user.username
            });
        },
        deleteItem(state, id) {
            state.items = state.items.filter(x => {
                return x.idItem != id
            });
        },
        addTimetable(state, id) {
            state.timetableItems.push({
                idItem: id,
                idUser: state.user.username
            });
        },
        deleteTimetable(state, id) {
            state.timetableItems = state.timetableItems.filter(x => {
                return x.idItem != id
            });
        }
    },
    actions: {
        setUserData({commit}, data) {
            commit('setUserData', data);
        },
        setItems({commit}) {
            return new Promise((resolve, reject) => {
                togoService.showItems()
                    .then(response => {
                        commit('setItems', response.data);
                        resolve();
                    })
                    .catch(err => reject(err))
            });
        },
        setTimetableItems({commit}) {
            return new Promise((resolve, reject) => {
                togoService.showTimetableItems()
                    .then(response => {
                        commit('setTimetableItems', response.data);
                        resolve()
                    })
                    .catch(err => reject(err))
            });
        },
        resetItems({commit}) {
            commit('resetItems');
        },
        addItem({commit}, id) {
            commit('addItem', id);
        },
        deleteItem({commit}, id) {
            commit('deleteItem', id);
        },
        addTimetable({commit}, id) {
            commit('addTimetable', id);
        },
        deleteTimetable({commit}, id) {
            commit('deleteTimetable', id);
        }
    },
    getters: {
        isItemAdded: state => id => {
            if(state.items) {
                let item = state.items.filter(x => { return x.idItem == id });
                if(item.length == 0)
                    return false;
                else
                    return true;
            }
        },
        isTimetableAdded: state => id => {
            if(state.timetableItems) {
                let item = state.timetableItems.filter(x => { return x.idItem == id });
                if(item.length == 0)
                    return false;
                else
                    return true;
            }
        }
    },
    plugins: [vuexLocal.plugin]
});
