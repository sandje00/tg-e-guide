import Api from '../services/Api';

export default {
    addItem(togo) {
        return Api().post('additem', togo);
    },
    addTimetableItem(togo) {
        return Api().post('addtimetableitem', togo);
    },
    showItems(username) {
        return Api().get(`showitems/${username}`);
    },
    showTimetableItems(username) {
        return Api().get(`showtimetableitems/${username}`);
    },
    deleteItem(useritem) {
        return Api().delete(`deleteitem/${useritem}`);
    },
    deleteTimetableItem(usertimetableitem) {
        return Api().delete(`deletetimetableitem/${usertimetableitem}`);
    }
}