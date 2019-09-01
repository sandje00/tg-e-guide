import Api from '../services/Api';

export default {
    addItem(idItem) {
        return Api().post(`additem/${idItem}`);
    },
    addTimetableItem(idItem) {
        return Api().post(`addtimetableitem/${idItem}`);
    },
    showItems() {
        return Api().get('showitems');
    },
    showTimetableItems() {
        return Api().get('showtimetableitems');
    },
    deleteItem(useritem) {
        return Api().delete(`deleteitem/${useritem}`);
    },
    deleteTimetableItem(usertimetableitem) {
        return Api().delete(`deletetimetableitem/${usertimetableitem}`);
    }
}