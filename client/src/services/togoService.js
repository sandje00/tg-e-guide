import api from '../services/Api';

export default {
    addItem(idItem) {
        return api().post(`additem/${idItem}`);
    },
    addTimetableItem(idItem) {
        return api().post(`addtimetableitem/${idItem}`);
    },
    showItems() {
        return api().get('showitems');
    },
    showTimetableItems() {
        return api().get('showtimetableitems');
    },
    deleteItem(useritem) {
        return api().delete(`deleteitem/${useritem}`);
    },
    deleteTimetableItem(usertimetableitem) {
        return api().delete(`deletetimetableitem/${usertimetableitem}`);
    }
}